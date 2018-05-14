let cheerio = require('cheerio')

let getDiggbtsSearch = (html) => {
  let searchData = []
  let $ = cheerio.load(html, {decodeEntities: false})
  $('.list-area .item').each((idx, element) => {
    let $element = $(element)
    searchData.push({
      title: $element.find('.item-title a').html().replace(/<[^>]+>/g, ''),
      download: $element.find('.item-detail span').eq(0).find('a').attr('href'),
      type: $element.find('.item-title .category').html().replace(/\[|\]/g, ''),
      size: $element.find('.item-detail span').eq(2).find('b').html(),
      num: $element.find('.item-detail span').eq(3).find('b').html(),
      speed: $element.find('.item-detail span').eq(4).find('b').html()
    })
  })
  let total = +$('.list-area .category a.active b').html()
  let pages = +($('.pagination>span').html().replace(/共|页/g, ''))
  let page = +$('.pagination>strong').html()
  let keyReg = new RegExp('/1/0/0.html', 'g')
  let key = $('.search-option a.active').attr('href').replace(keyReg, '')
  return {
    data: searchData,
    total,
    pages,
    page,
    key
  }
}

let getBtanttSearch = (html) => {
  let searchData = []
  let $ = cheerio.load(html, {decodeEntities: false})
  $('.search-item').each((idx, element) => {
    let $element = $(element)
    let arr = []
    $element.find('.download').each((i, ele) => {
      arr.push({
        href: $(ele).attr('href'),
        name: $(ele).html()
      })
    })
    searchData.push({
      title: $element.find('.item-title a').html().replace(/<[^>]+>/g, ''),
      download: arr,
      time: $element.find('.item-bar span').eq(0).find('b').html(),
      active: $element.find('.item-bar span').eq(1).find('b').html(),
      size: $element.find('.item-bar span').eq(3).find('b').html()    
    })
  })
  let pages = 0, page = 0
  if ($('.bottom-pager a').length > 0) {
    pages = +($('.bottom-pager a').last().attr('href').match(/first-asc-(\d+)$/gi)[0].replace(/first-asc-/gi, ''))
    page = +($('.bottom-pager>span').html())
  }
  return {
    data: searchData,
    pages,
    page
  }
}

module.exports = {
  getDiggbtsSearch,
  getBtanttSearch
}