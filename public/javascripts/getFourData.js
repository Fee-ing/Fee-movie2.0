let cheerio = require('cheerio')

let getFourHome = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let homeData = []
  $('.excerpt').each((idx, element) => {
    let $element = $(element)
    homeData.push({
      title: $element.find('.focus img').attr('alt'),
      subTitle: $element.find('.meta .pv').html(),
      poster: $element.find('.focus img').attr('data-src'),
      id: $element.find('.focus').attr('href').replace(/\.html/g, '')
    })
  })
  let pages = 0, page = 0
  if ($('.pagination ul span').last().html()) {
    pages = +($('.pagination ul span').last().html().replace(/共|页|\s/g, ''))
    page = +($('.pagination .active span').html())
  }
  return {
    data: homeData,
    pages,
    page
  }
}

let getFourDetail = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let detailData = {
    title: '',
    subTitle: '',
    poster: '',
    video: '',
    info: '',
    download: []
  }
  detailData.title = $('.article-title a').html()
  detailData.poster = $('.article-content img').eq(0).attr('src')
  detailData.video = $('.article-content iframe').attr('src')
  $('.article-content>p').each((idx, element) => {
    let $element = $(element)
    if ($element.find('img').length > 0) {
      $element.remove()
    } else {
      $element.find('a').removeAttr('href')
      detailData.info += $element.html()
    }
  })
  let part = $('.part_content .part').eq(1)
  if(part.html()) {
    $('.part_content .part strong').remove()
    $('.part_content .part br').remove() 
    part.find('a').each((idx, element) => {
      let $element = $(element)
      detailData.download.push({link: $element.attr('href')})
    })
    $('.part_content .part a').remove()
    let part_html = part.html().replace(/(天使_TSKS：)|(幻想乐园：)|(\|)|(\s)/g, '').split('密码')
    let k = 0;
    for(let i = 1;i < part_html.length; i++) {
      if(part_html[i] && detailData.download[k]) {
        detailData.download[k].password = part_html[i]
        k++
      }
    }
  }
  return {
    data: detailData
  }
}

let getFourSearch = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let searchData = []
  $('.excerpt').each((idx, element) => {
    let $element = $(element)
    searchData.push({
      title: $element.find('.focus img').attr('alt'),
      subTitle: $element.find('.meta .pv').html(),
      poster: $element.find('.focus img').attr('data-src'),
      id: $element.find('.focus').attr('href').replace(/\.html/g, '')
    })
  })
  let pages = 0, page = 0
  if ($('.pagination ul span').last().html()) {
    pages = +($('.pagination ul span').last().html().replace(/共|页|\s/g, ''))
    page = +($('.pagination .active span').html())
  }
  return {
    data: searchData,
    pages,
    page
  }
}

module.exports = {
  getFourHome,
  getFourDetail,
  getFourSearch
}