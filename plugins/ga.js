export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  if (process.env.NODE_ENV !== 'production')
    return
    /*
     ** Include Google Analytics Script
     */

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    ;(i[r] =
      i[r] ||
      function () {
        ;(i[r].q = i[r].q || []).push(arguments)
      }),
      (i[r].l = 1 * new Date())
    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
  )

  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(66105637, "init", {clickmap: true, webvisor: true});



  /*
   ** Set the current page
   */
  ga('create', 'UA-174168107-1', 'auto', {'allowLinker': true})
  // ga('require', 'linker');
  // ga('linker:autoLink', ['https://my.cashu.kz/']);
  /*
   ** Every time the route changes (fired on initialization too)
   */
  app.router.afterEach((to, from) => {
    // console.log(to, from, ym)
    // console.log(document.getElementById('header-profile'))
    // console.log(document.getElementById('calc-send-btn'))
    /*
     ** We tell Google Analytics to add a `pageview`
     */
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')

    document.getElementById('calc-send-btn').addEventListener('click', function() {
      console.log(to, from)
      ga('send', 'event', 'knopka', 'Poluchit dengi');
      ym(66105637,'reachGoal','zayavka');
    })
    document.getElementById('header-profile').addEventListener('click', function() {
      console.log(document.getElementById('header-profile'))
      ga('send', 'event', 'knopka', 'LK');
      ym(66105637,'reachGoal','cabinet');
    })
  })
}
