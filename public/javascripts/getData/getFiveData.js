let cheerio = require('cheerio')

let getFiveHome = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let homeData = []
  $('#body .div table').each((idx, element) => {
    let $element = $(element)
    if (idx > 2) {
      let typeStr = ''
      $element.find('.subject .subject_type').each((i, ele) => {
        let $ele = $(ele)
        typeStr += $ele.html().replace(/\[|\]/g, '') + ' '
      })
      homeData.push({
        title: $element.find('.subject_link').html(),
        type: typeStr,
        time: $element.find('.username .small').html(),
        id: $element.find('.subject_link').attr('href').replace(/\.htm/g, '')
      })
    }
  })
  return {
    data: homeData
  }
}

let getFiveDetail = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let detailData = {
    title: '',
    content: '',
    downloadUrl: ''
  }
  $('h2 a').remove()
  detailData.title = $('h2').html()
  $('.message a').attr('href', 'javascript:void(0);')
  $('.message img').eq(0).addClass('poster')
  detailData.content = $('.message').html()
  detailData.downloadUrl = $('.attachlist .ajaxdialog').attr('href')
  return {
    data: detailData
  }
}

let getFiveSearch = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let searchData = []
  $('#threadlist table').each((idx, element) => {
    let $element = $(element)
    let typeStr = ''
    $element.find('.subject .subject_type').each((i, ele) => {
      let $ele = $(ele)
      typeStr += $ele.html().replace(/\[|\]/g, '') + ' '
    })
    searchData.push({
      title: $element.find('.subject_link').html(),
      type: typeStr,
      time: $element.find('.username .small').html(),
      id: $element.find('.subject_link').attr('href').replace(/\.htm/g, '')
    })
  })
  return {
    data: searchData
  }
}

let getFiveDownload = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let downloadData = {
    name: '',
    download: '',
    size: '',
    times: ''
  }
  $('dd').eq(0).find('img').remove()
  downloadData.name = $('dd').eq(0).html()
  downloadData.size = $('dd').eq(1).html()
  downloadData.times = $('dd').eq(2).html()
  downloadData.download = $('a').eq(0).attr('href')
  return {
    data: downloadData
  }
}

module.exports = {
  getFiveHome,
  getFiveDetail,
  getFiveSearch,
  getFiveDownload
}