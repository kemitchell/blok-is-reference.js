var reference = require('./')

require('tape')(function(t) {
  t.ok(reference('#' + new Array(65).join('a')))
  t.end() })
