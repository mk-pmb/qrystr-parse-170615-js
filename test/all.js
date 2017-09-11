/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

require('usnam-pmb');
var eq = require('equal-pmb');

(function readmeDemo() {
  //#u
  var refQSmod = require('querystring'),
    pqs = require('qrystr-parse-170615'),
    slim = require('qrystr-parse-170615/slim');

  function verify(qs) {
    var ex = ((typeof qs === 'string') && refQSmod.parse(qs));
    if (!ex) {
      ex = qs;
      qs = refQSmod.stringify(ex);
    }
    eq(pqs(qs), ex);
    eq(slim(qs), ex);
  }

  verify({ hello: 'world', '23': '42', 'úmlæütè': 'µ¶§°¹²³±' });
  //#r
}());





console.log("+OK all test passed.");    //= "+OK all test passed."
