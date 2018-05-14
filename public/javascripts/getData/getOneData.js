let cheerio = require('cheerio')

let getOneHome = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let homeData = {
    movieHotData: {
      title: '热门电影',
      data: []
    },
    tvHotData: {
      title: '热门电视剧',
      data: []
    },
    varietyHotData: {
      title: '热门综艺',
      data: []
    },
    comicHotData: {
      title: '热门动漫',
      data: []
    },
    movieData: {
      title: '最新电影',
      data: []
    },
    tvData: {
      title: '最新电视剧',
      data: []
    },
    varietyData: {
      title: '最新综艺',
      data: []
    },
    comicData: {
      title: '最新动漫',
      data: []
    }
  }
  $('.section-list.sl1 .list_mov').each((idx, element) => {
    let $element = $(element)
    homeData.movieHotData.data.push({
      title: $element.find('.list_mov_title h4 a').html(),
      subTitle: $element.find('.list_mov_title em').html(),
      id: $element.find('.list_mov_title h4 a').attr('href').replace(/\/movie\//g, ''),
      poster: $element.find('.list_mov_poster img').attr('data-original'),
      score: $element.find('.score').html()
    })
  })
  $('.section-list.sl3 .list_mov').each((idx, element) => {
    let $element = $(element)
    homeData.tvHotData.data.push({
      title: $element.find('.list_mov_title h4 a').html(),
      subTitle: $element.find('.list_mov_title em').html(),
      id: $element.find('.list_mov_title h4 a').attr('href').replace(/\/movie\//g, ''),
      poster: $element.find('.list_mov_poster img').attr('data-original'),
      score: $element.find('.score').html()
    })
  })
  $('.section-list.sl5 .list_mov').each((idx, element) => {
    let $element = $(element)
    homeData.varietyHotData.data.push({
      title: $element.find('.list_mov_title h4 a').html(),
      subTitle: $element.find('.list_mov_title em').html(),
      id: $element.find('.list_mov_title h4 a').attr('href').replace(/\/movie\//g, ''),
      poster: $element.find('.list_mov_poster img').attr('data-original'),
      score: $element.find('.score').html()
    })
  })
  $('.section-list.sl7 .list_mov').each((idx, element) => {
    let $element = $(element)
    homeData.comicHotData.data.push({
      title: $element.find('.list_mov_title h4 a').html(),
      subTitle: $element.find('.list_mov_title em').html(),
      id: $element.find('.list_mov_title h4 a').attr('href').replace(/\/movie\//g, ''),
      poster: $element.find('.list_mov_poster img').attr('data-original'),
      score: $element.find('.score').html()
    })
  })
  $('.section-list.sl2 .list_mov').each((idx, element) => {
    let $element = $(element)
    homeData.movieData.data.push({
      title: $element.find('.list_mov_title h4 a').html(),
      subTitle: $element.find('.list_mov_title em').html(),
      id: $element.find('.list_mov_title h4 a').attr('href').replace(/\/movie\//g, ''),
      poster: $element.find('.list_mov_poster img').attr('data-original'),
      score: $element.find('.score').html()
    })
  })
  $('.section-list.sl4 .list_mov').each((idx, element) => {
    let $element = $(element)
    homeData.tvData.data.push({
      title: $element.find('.list_mov_title h4 a').html(),
      subTitle: $element.find('.list_mov_title em').html(),
      id: $element.find('.list_mov_title h4 a').attr('href').replace(/\/movie\//g, ''),
      poster: $element.find('.list_mov_poster img').attr('data-original'),
      score: $element.find('.score').html()
    })
  })
  $('.section-list.sl6 .list_mov').each((idx, element) => {
    let $element = $(element)
    homeData.varietyData.data.push({
      title: $element.find('.list_mov_title h4 a').html(),
      subTitle: $element.find('.list_mov_title em').html(),
      id: $element.find('.list_mov_title h4 a').attr('href').replace(/\/movie\//g, ''),
      poster: $element.find('.list_mov_poster img').attr('data-original'),
      score: $element.find('.score').html()
    })
  })
  $('.section-list.sl8 .list_mov').each((idx, element) => {
    let $element = $(element)
    homeData.comicData.data.push({
      title: $element.find('.list_mov_title h4 a').html(),
      subTitle: $element.find('.list_mov_title em').html(),
      id: $element.find('.list_mov_title h4 a').attr('href').replace(/\/movie\//g, ''),
      poster: $element.find('.list_mov_poster img').attr('data-original'),
      score: $element.find('.score').html()
    })
  })
  return {
    data: homeData
  }
}

let getOneDetail = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let detailData = {
    title: '',
    subTitle: '',
    poster: '',
    description: '',
    info1: '',
    info2: '',
    screenshot: '',
    download: []
  }
  $('#movie_name').find('small').remove()
  $('#movie_tip').find('span').remove()
  detailData.title = $('#movie_name').html().replace(/<[^>]+>/g, '')
  detailData.subTitle = $('#movie_tip').html().replace(/<[^>]+>/g, '')
  detailData.poster = $('#poster a').attr('href')
  detailData.description = $('.readmore').html()
  $('.movie-info a').removeAttr('href')
  detailData.info1 = $('.movie-info').eq(0).html().replace(/豆瓣评论/g, '')
  detailData.info2 = $('.movie-info').eq(1).html()
  detailData.screenshot = $('.img-responsive.img-thumbnail').attr('src')
  $('.panel.panel-quality-5').each((idx, element) => {
    let $element = $(element)
    $element.find('.row').each((idx, element1) => {
      let $element1 = $(element1)
      detailData.download.push({
        title: $element1.find('.td-dl-links a').html(),
        format: $element1.find('.label-quality-5').html(),
        size: $element1.find('.label-filesize').html(),
        link: $element1.find('.td-dl-links a').attr('href')
      })
    })
  })
  $('.panel.panel-quality-4').each((idx, element) => {
    let $element = $(element)
    $element.find('.row').each((idx, element1) => {
      let $element1 = $(element1)
      detailData.download.push({
        title: $element1.find('.td-dl-links a').html(),
        format: $element1.find('.label-quality-4').html(),
        size: $element1.find('.label-filesize').html(),
        link: $element1.find('.td-dl-links a').attr('href')
      })
    })
  })
  $('.panel.panel-quality-3').each((idx, element) => {
    let $element = $(element)
    $element.find('.row').each((idx, element1) => {
      let $element1 = $(element1)
      detailData.download.push({
        title: $element1.find('.td-dl-links a').html(),
        format: $element1.find('.label-quality-3').html(),
        size: $element1.find('.label-filesize').html(),
        link: $element1.find('.td-dl-links a').attr('href')
      })
    })
  })
  $('.panel.panel-quality-2').each((idx, element) => {
    let $element = $(element)
    $element.find('.row').each((idx, element1) => {
      let $element1 = $(element1)
      detailData.download.push({
        title: $element1.find('.td-dl-links a').html(),
        format: $element1.find('.label-quality-2').html(),
        size: $element1.find('.label-filesize').html(),
        link: $element1.find('.td-dl-links a').attr('href')
      })
    })
  })
  $('.panel.panel-quality-1').each((idx, element) => {
    let $element = $(element)
    $element.find('.row').each((idx, element1) => {
      let $element1 = $(element1)
      detailData.download.push({
        title: $element1.find('.td-dl-links a').html(),
        format: $element1.find('.label-quality-1').html(),
        size: $element1.find('.label-filesize').html(),
        link: $element1.find('.td-dl-links a').attr('href')
      })
    })
  })
  return {
    data: detailData
  }
}

let getOneSearch = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let searchData = []
  $('.list-group-item').each((idx, element) => {
    let $element = $(element)
    searchData.push({
      title: $element.find('.search-list-img').attr('alt').replace(/海报/g, ''),
      subTitle: $element.find('em').html(),
      poster: $element.find('.search-list-img').attr('src'),
      score: $element.attr('data-score'),
      type: $element.find('h4>span').html(),
      id: $element.attr('href').replace(/\/movie\//g, '')
    })
  })
  return {
    data: searchData,
    total: searchData.length
  }
}

module.exports = {
  getOneHome,
  getOneDetail,
  getOneSearch
}