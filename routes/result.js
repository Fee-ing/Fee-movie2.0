const router = require('koa-router')()
const request = require('superagent')

let process = require('process')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const URLCONFIGS = require('../public/javascripts/config.js')
const { getOneSearch } = require('../public/javascripts/getOneData.js')
const { getFourSearch } = require('../public/javascripts/getFourData.js')
const { getFiveSearch } = require('../public/javascripts/getFiveData.js')
const { getDiggbtsSearch, getBtanttSearch } = require('../public/javascripts/getSearchData.js')

var keywords = '', searchType = 'one'

router.prefix('/result')

router.post('/one', async (ctx, next) => {
  keywords = ctx.request.body.keywords
  searchType = ctx.request.body.searchType
  let pageData = {
    movieData: [],
    webUrl: URLCONFIGS.one.url,
    total: 0
  }
  let res = await request.post(URLCONFIGS.one.search).send({keyword: keywords}).timeout(3600*1000)
  if (!res.error) {
    let data = getOneSearch(res.text)
    pageData.movieData = data.data
    pageData.total = data.total
  }
  await ctx.render('result1', {
    title: `${keywords} - Fee-movie-search`,
    keywords,
    searchType,
    pageData
  })
})

router.post('/two', async (ctx, next) => {
  keywords = ctx.request.body.keywords
  searchType = ctx.request.body.searchType
  let pageData = {
    movieData: [],
    webUrl: URLCONFIGS.diggbts.url,
    total: 0,
    pages: 0,
    page: 0,
    key: ''
  }
  let res = await request.post(URLCONFIGS.diggbts.search).send({keyword: keywords}).type('form').timeout(3600*1000)
  if (!res.error) {
    let data = getDiggbtsSearch(res.text)
    let keyReg = new RegExp(URLCONFIGS.diggbts.detail, 'g')
    pageData.movieData = data.data
    pageData.total = data.total
    pageData.pages = data.pages
    pageData.page = data.page
    pageData.key = data.key.replace(keyReg, '')
  }
  await ctx.render('result2', {
    title: `${keywords} - Fee-movie-search`,
    keywords,
    searchType,
    pageData
  })
})
router.get('/two/:key/:page', async (ctx, next) => {
  let key = ctx.params.key || ''
  let page = ctx.params.page || '1'
  let pageData = {
    movieData: [],
    webUrl: URLCONFIGS.diggbts.url,
    total: 0,
    pages: 0,
    page: 0,
    key: ''
  }
  let url = `${URLCONFIGS.diggbts.detail}${key}/${page}/0/0.html`
  let res = await request.get(url).timeout(3600*1000)
  if (!res.error) {
    let data = getDiggbtsSearch(res.text)
    let keyReg = new RegExp(URLCONFIGS.diggbts.detail, 'g')
    pageData.movieData = data.data
    pageData.total = data.total
    pageData.pages = data.pages
    pageData.page = data.page
    pageData.key = data.key.replace(keyReg, '')
  }
  await ctx.render('result2', {
    title: `${keywords} - Fee-movie-search`,
    keywords,
    searchType,
    pageData
  })
})

router.post('/three', async (ctx, next) => {
  keywords = ctx.request.body.keywords
  searchType = ctx.request.body.searchType
  let page = ctx.params.page || '1'
  let pageData = {
    movieData: [],
    webUrl: URLCONFIGS.btantt.url,
    pages: 0,
    page: 0
  }
  let res = await request.get(URLCONFIGS.btantt.search).query({kw: keywords}).timeout(3600*1000)
  if (!res.error) {
    let data = getBtanttSearch(res.text)
    pageData.movieData = data.data
    pageData.pages = data.pages
    pageData.page = data.page
  }
  await ctx.render('result3', {
    title: `${keywords} - Fee-movie-search`,
    keywords,
    searchType,
    pageData
  })
})
router.get('/three/:page', async (ctx, next) => {
  let page = ctx.params.page || '1'
  let pageData = {
    movieData: [],
    webUrl: URLCONFIGS.btantt.url,
    pages: 0,
    page: 0
  }
  let url = encodeURI(`${URLCONFIGS.btantt.detail}${keywords}-first-asc-${page}`)
  let res = await request.get(url).timeout(3600*1000)
  if (!res.error) {
    let data = getBtanttSearch(res.text)
    pageData.movieData = data.data
    pageData.pages = data.pages
    pageData.page = data.page
  }
  await ctx.render('result3', {
    title: `${keywords} - Fee-movie-search`,
    keywords,
    searchType,
    pageData
  })
})

router.post('/four', async (ctx, next) => {
  keywords = ctx.request.body.keywords
  searchType = ctx.request.body.searchType
  let pageData = {
    movieData: [],
    webUrl: URLCONFIGS.four.url,
    pages: 0,
    page: 0
  }
  let res = await request.get(URLCONFIGS.four.search).query({s: keywords}).timeout(3600*1000)
  if (!res.error) {
    let data = getFourSearch(res.text)
    pageData.movieData = data.data
    pageData.pages = data.pages
    pageData.page = data.page
  }
  let idReg = new RegExp(URLCONFIGS.four.url, 'g')
  pageData.movieData.map(ele => {
    ele.id = ele.id.replace(idReg, '')
  })
  await ctx.render('result4', {
    title: `${keywords} - Fee-movie-search`,
    keywords,
    searchType,
    pageData
  })
})
router.get('/four/:page', async (ctx, next) => {
  let page = ctx.params.page || '1'
  let pageData = {
    movieData: [],
    webUrl: URLCONFIGS.four.url,
    pages: 0,
    page: 0
  }
  let url = encodeURI(`${URLCONFIGS.four.detail}page/${page}/?s=${keywords}`)
  let res = await request.get(url).timeout(3600*1000)
  if (!res.error) {
    let data = getFourSearch(res.text)
    pageData.movieData = data.data
    pageData.pages = data.pages
    pageData.page = data.page
  }
  let idReg = new RegExp(URLCONFIGS.four.url, 'g')
  pageData.movieData.map(ele => {
    ele.id = ele.id.replace(idReg, '')
  })
  await ctx.render('result4', {
    title: `${keywords} - Fee-movie-search`,
    keywords,
    searchType,
    pageData
  })
})

router.post('/five', async (ctx, next) => {
  keywords = ctx.request.body.keywords
  searchType = ctx.request.body.searchType
  let pageData = {
    movieData: [],
    webUrl: URLCONFIGS.five.url
  }
  let res = await request.post(URLCONFIGS.five.search).send({keyword: keywords}).type('form').timeout(3600*1000)
  if (!res.error) {
    pageData.movieData = getFiveSearch(res.text).data
  }
  let idReg = new RegExp(URLCONFIGS.five.url, 'g')
  pageData.movieData.map(ele => {
    ele.id = ele.id.replace(idReg, '')
  })
  await ctx.render('result5', {
    title: `${keywords} - Fee-movie-search`,
    keywords,
    searchType,
    pageData
  })
})

module.exports = router