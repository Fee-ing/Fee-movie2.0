const router = require('koa-router')()
const request = require('superagent')

const URLCONFIGS = require('../public/javascripts/config.js')
const { getFourHome, getFourDetail } = require('../public/javascripts/getFourData.js')

router.prefix('/four')

router.get('/:page?', async (ctx, next) => {
  let page = ctx.params.page || '1'
  let url = `${URLCONFIGS.four.url}page/${page}/`
  let pageData = {
    webType: 'four',
    movieData: [],
    pages: 0,
    page: 0
  }
  let res = await request.get(url).timeout(3600*1000)
  if (!res.error) {
    let data = getFourHome(res.text)
    pageData.movieData = data.data
    pageData.pages = data.pages
    pageData.page = data.page
  }
  let idReg = new RegExp(URLCONFIGS.four.url, 'g')
  pageData.movieData.map(ele => {
    ele.id = ele.id.replace(idReg, '')
  })
  await ctx.render('four', {
    title: 'Fee-movie',
    router: URLCONFIGS,
    searchType: 'one',
    pageData
  })
})

router.get('/detail/:movie', async (ctx, next) => {
  let url = `${URLCONFIGS.four.detail}${ctx.params.movie}.html`
  let pageData = {}
  let res = await request.get(url).timeout(3600*1000)
  if (!res.error) {
    pageData = getFourDetail(res.text).data
  }
  pageData.webUrl = URLCONFIGS.four.url
  await ctx.render('detail4', {
    title: `${pageData.title} - Fee-movie-search`,
    pageData
  })
})

module.exports = router
