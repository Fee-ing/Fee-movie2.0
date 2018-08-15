const router = require('koa-router')()

router.get('/', (ctx, next) => {
  ctx.redirect('/two')
})

router.get('/tip', async (ctx, next) => {
  await ctx.render('tip', {
    title: '下载提示 - Fee-movie'
  })
})

module.exports = router
