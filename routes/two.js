const router = require('koa-router')()
const request = require('superagent')
require('superagent-charset')(request)

const URLCONFIGS = require('../public/javascripts/config.js')
const { getTwoHome, getTwoDetail } = require('../public/javascripts/getData/getTwoData.js')

router.prefix('/two')

router.get('/', async (ctx, next) => {
  let pageData = {
    webType: 'two',
    movieData: null
  }
  let res = await request.get(URLCONFIGS.two.url).charset('gbk').timeout(3600*1000)
  if (!res.error) {
    pageData.movieData = getTwoHome(res.text).data
  }
  await ctx.render('two', {
    title: 'Fee-movie',
    router: URLCONFIGS,
    searchType: 'one',
    pageData
  })
})

router.get('/detail/:type/:movie', async (ctx, next) => {
  let url = `${URLCONFIGS.two.detail}${ctx.params.type}/${ctx.params.movie}.html`
  let pageData = {}
  let res = await request.get(url).charset('gbk').timeout(3600*1000)
  if (!res.error) {
    pageData = getTwoDetail(res.text).data
  }
  pageData.webUrl = URLCONFIGS.two.url
  await ctx.render('detail2', {
    title: `${pageData.title} - Fee-movie-search`,
    pageData
  })
})

module.exports = router
