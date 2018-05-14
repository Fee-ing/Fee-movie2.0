let cheerio = require('cheerio')

let getTwoHome = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let homeData = {
    today: {
      title: '今日看点',
      type: '1',
      data: []
    },
    newMovie: {
      title: '最新电影',
      type: '2',
      data: ''
    },
    newTv: {
      title: '最新电视剧',
      type: '2',
      data: ''
    },
    newComic: {
      title: '最新动漫',
      type: '2',
      data: ''
    },
    newVariety: {
      title: '最新综艺',
      type: '2',
      data: ''
    }
  }
  $('.kandian .commend ul li').each((idx, element) => {
    let $element = $(element)
    homeData.today.data.push({
      title: $element.find('.db').attr('title'),
      subTitle: $element.find('p').html(),
      poster: $element.find('.db img').attr('src'),
      id: '/two/detail' + $element.find('.db').attr('href').replace(/\.html/g, '')
    })
  })
  $('.zuoce .xinfenlei').eq(0).find('ul li').each((idx, element) => {
    let $element = $(element)
    $element.attr('title', $element.find('a').html())
    let href = '/two/detail' + $element.find('a').attr('href').replace(/\.html/g, '')
    $element.find('a').attr('href', href)
  })
  $('.zuoce .xinfenlei').eq(1).find('ul li').each((idx, element) => {
    let $element = $(element)
    $element.attr('title', $element.find('a').html())
    let href = '/two/detail' + $element.find('a').attr('href').replace(/\.html/g, '')
    $element.find('a').attr('href', href)
  })
  $('.zuocez .xxfl').eq(0).find('ul li').each((idx, element) => {
    let $element = $(element)
    $element.attr('title', $element.find('a').html())
    let href = '/two/detail' + $element.find('a').attr('href').replace(/\.html/g, '')
    $element.find('a').attr('href', href)
  })
  $('.zuocez .xxfl').eq(1).find('ul li').each((idx, element) => {
    let $element = $(element)
    $element.attr('title', $element.find('a').html())
    let href = '/two/detail' + $element.find('a').attr('href').replace(/\.html/g, '')
    $element.find('a').attr('href', href)
  })
  homeData.newMovie.data = $('.zuoce .xinfenlei').eq(0).find('ul').html()
  homeData.newTv.data = $('.zuoce .xinfenlei').eq(1).find('ul').html()
  homeData.newComic.data = $('.zuocez .xxfl').eq(0).find('ul').html()
  homeData.newVariety.data = $('.zuocez .xxfl').eq(1).find('ul').html()
  return {
    data: homeData
  }
}

let getTwoDetail = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let detailData = {
    title: '',
    poster: '',
    info: '',
    download: []
  }
  detailData.title = $('h1').html()
  detailData.poster = $('.haibao img').attr('src')
  $('.neirong').children().last().remove()
  detailData.info = $('.neirong').html()
  $('.downurl').each((idx, element) => {
    let $element = $(element)
    $element.find('li').each((idx, element1) => {
      let $element1 = $(element1)
      let name = $element1.find('a').eq(0).html()
      if(name === 'HD') {
        name = '高清版'
      }else if(name === 'TS') {
        name = '准枪版'
      }else if(name === 'CAM') {
        name = '枪版'
      }else if(name === 'BD') {
        name = '蓝光版'
      }
      detailData.download.push({
        name: name,
        link: $element1.find('a').eq(0).attr('href')
      })
    })
  })
  $('#bt li a').each((idx, element) => {
    let $element = $(element)
    detailData.download.push({
      name: '[BT]' + $element.attr('title'),
      link: $element.attr('href')
    })
  })
  return {
    data: detailData
  }
}

module.exports = {
  getTwoHome,
  getTwoDetail
}