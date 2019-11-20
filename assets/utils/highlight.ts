const hljs = require('highlight.js/lib/highlight')

hljs.registerLanguage('cs', require('highlight.js/lib/languages/cs'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'))
hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
)
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
hljs.registerLanguage(
  'typescript',
  require('highlight.js/lib/languages/typescript')
)
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))

export { hljs }
