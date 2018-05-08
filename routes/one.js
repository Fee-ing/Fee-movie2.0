const router = require('koa-router')()
const request = require('superagent')

let process = require('process')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const URLCONFIGS = require('../public/javascripts/config.js')
const { getOneHome, getOneDetail } = require('../public/javascripts/getOneData.js')

router.prefix('/one')

router.get('/', async (ctx, next) => {
  let pageData = {
    webType: 'one',
    movieData: null
  }
  let res = await request.get(URLCONFIGS.one.url).timeout(3600*1000)
  if (!res.error) {
    pageData.movieData = getOneHome(res.text).data
  }
  await ctx.render('one', {
    title: 'Fee-movie',
    router: URLCONFIGS,
    searchType: 'one',
    pageData
  })
})

router.get('/detail/:movie', async (ctx, next) => {
  let url = URLCONFIGS.one.detail + ctx.params.movie
  let pageData = {}
  let res = await request.get(url).timeout(3600*1000)
  if (!res.error) {
    pageData = getOneDetail(res.text).data
  }
  pageData.webUrl = URLCONFIGS.one.url
  await ctx.render('detail1', {
    title: `${pageData.title} - Fee-movie-search`,
    pageData
  })
})

module.exports = router
