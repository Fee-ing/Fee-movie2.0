const router = require('koa-router')()
const request = require('superagent')
require('superagent-charset')(request)

const URLCONFIGS = require('../public/javascripts/config.js')
const { getThreeHome, getThreeDetail } = require('../public/javascripts/getData/getThreeData.js')

router.prefix('/three')

router.get('/', async (ctx, next) => {
  let pageData = {
    webType: 'three',
    movieData: null
  }
  let res = await request.get(URLCONFIGS.three.url).charset('gbk').timeout(3600*1000)
  if (!res.error) {
    pageData.movieData = getThreeHome(res.text).data
  }
  await ctx.render('three', {
    title: 'Fee-movie',
    router: URLCONFIGS,
    searchType: 'one',
    pageData
  })
})

router.get('/detail/:key', async (ctx, next) => {
  let key = decodeURIComponent(ctx.params.key)
  let url = `${URLCONFIGS.three.detail}${key}.html`
  let pageData = {}
  let res = await request.get(url).charset('gbk').timeout(3600*1000)
  if (!res.error) {
    pageData = getThreeDetail(res.text).data
  }
  pageData.webUrl = URLCONFIGS.three.url
  await ctx.render('detail3', {
    title: '电影天堂 - Fee-movie-search',
    pageData
  })
})

module.exports = router
