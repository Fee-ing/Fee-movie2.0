let cheerio = require('cheerio')

let getThreeHome = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let homeData = {
    newData: {
      title: '最新电影',
      data: []
    },
    thunderData: {
      title: '热门电影',
      data: []
    },
    chmovieData: {
      title: '华语电视剧',
      data: []
    },
    enmovieData: {
      title: '欧美电视剧',
      data: []
    },
    varietyData: {
      title: '热门综艺',
      data: []
    },
    comicData: {
      title: '热门动漫',
      data: []
    }
  }
  $('.bd3r').eq(0).find('.bd3rl .co_area2').eq(0).find('tr').each((idx, element) => {
    let $element = $(element)
    if(idx > 0) {
      homeData.newData.data.push({
        title: $element.find('td').first().find('a').last().html(),
        id: encodeURIComponent($element.find('td').first().find('a').last().attr('href').replace(/\/html|\.html/g, '')),
        time: $element.find('td').last().find('font').html()
      })
    }
  })
  $('.bd3r').eq(0).find('.bd3rl .co_area2').eq(1).find('ul').find('a').each((idx, element) => {
    let $element = $(element)
    if(idx%2 !== 0) {
      homeData.thunderData.data.push({
        title: $element.html(),
        id: encodeURIComponent($element.attr('href').replace(/\/html\/|\.html/g, '')),
        time: $element.parent().next().find('font').html()
      })
    }
  })
  $('.bd3r').eq(0).find('.bd3rl .co_area2').eq(2).find('ul').find('a').each((idx, element) => {
    let $element = $(element)
    if(idx%2 !== 0) {
      homeData.chmovieData.data.push({
        title: $element.html(),
        id: encodeURIComponent($element.attr('href').replace(/\/html\/|\.html/g, '')),
        time: $element.parent().next().find('font').html()
      })
    }
  })
  $('.bd3r').eq(0).find('.bd3rl .co_area2').eq(3).find('ul').find('a').each((idx, element) => {
    let $element = $(element)
    if(idx%2 !== 0) {
      homeData.enmovieData.data.push({
        title: $element.html(),
        id: encodeURIComponent($element.attr('href').replace(/\/html\/|\.html/g, '')),
        time: $element.parent().next().find('font').html()
      })
    }
  })
  $('.bd3r').eq(1).find('.bd3rl .co_area2').eq(0).find('ul').find('a').each((idx, element) => {
    let $element = $(element)
    if(idx%2 !== 0) {
      homeData.varietyData.data.push({
        title: $element.html(),
        id: encodeURIComponent($element.attr('href').replace(/\/html\/|\.html/g, '')),
        time: $element.parent().next().find('font').html()
      })
    }
  })
  $('.bd3r').eq(1).find('.bd3rl .co_area2').eq(1).find('ul').find('a').each((idx, element) => {
    let $element = $(element)
    if(idx%2 !== 0) {
      homeData.comicData.data.push({
        title: $element.html(),
        id: encodeURIComponent($element.attr('href').replace(/\/html\/|\.html/g, '')),
        time: $element.parent().next().find('font').html()
      })
    }
  })
  return {
    data: homeData
  }
}

let getThreeDetail = (html) => {
  let $ = cheerio.load(html, {decodeEntities: false})
  let detailData = {
    content: ''
  }
  $('#Zoom>span a').each((idx, element) => {
    let $element = $(element)
    let href = $element.attr('href')
    $element.attr('href', 'javascript:void(0);')
    $element.html(href)
  })
  $('#Zoom center').remove()
  $('#Zoom hr').remove()
  $('#Zoom font').each((idx, element) => {
    let $element = $(element)
    if ($element.attr('color') && $element.attr('color') === 'red') {
      $element.remove()
    }
  })
  let content = $('#Zoom>span').html().split('img')
  content[1] = ' class="poster"' + content[1]
  detailData.content = content.join('img').replace(/下载地址/g, '下载地址（复制后用迅雷打开）')
  return {
    data: detailData
  }
}

module.exports = {
  getThreeHome,
  getThreeDetail
}