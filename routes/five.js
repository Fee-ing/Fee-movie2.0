const router = require('koa-router')()
const request = require('superagent')

const URLCONFIGS = require('../public/javascripts/config.js')
const { getFiveHome, getFiveDetail, getFiveDownload } = require('../public/javascripts/getData/getFiveData.js')

router.prefix('/five')

router.get('/', async (ctx, next) => {
  let pageData = {
    webType: 'five',
    movieData: []
  }
  let res = await request.get(URLCONFIGS.five.url).timeout(3600*1000)
  if (!res.error) {
    pageData.movieData = getFiveHome(res.text).data
  }
  let idReg = new RegExp(URLCONFIGS.five.url, 'g')
  pageData.movieData.map(ele => {
    ele.id = ele.id.replace(idReg, '')
  })
  await ctx.render('five', {
    title: 'Fee-movie',
    router: URLCONFIGS,
    searchType: 'one',
    pageData
  })
})

router.get('/detail/:movie', async (ctx, next) => {
  let url = `${URLCONFIGS.five.detail}${ctx.params.movie}.htm`
  let pageData = {}
  let res = await request.get(url).timeout(3600*1000)
  if (!res.error) {
    pageData = getFiveDetail(res.text).data
  }
  let downloadData = await request.get(pageData.downloadUrl).timeout(3600*1000)
  if (!downloadData.error) {
    let data = getFiveDownload(JSON.parse(downloadData.text).message.body).data
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        pageData[key] = data[key]
      }
    }
  }
  pageData.webUrl = URLCONFIGS.five.url
  await ctx.render('detail5', {
    title: `${pageData.title} - Fee-movie-search`,
    pageData
  })
})

module.exports = router
