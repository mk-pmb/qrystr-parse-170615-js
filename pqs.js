/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function () {
  function ifFun(x, d) { return ((typeof x) === 'function' ? x : d); }
  function deco(s) { return decodeURIComponent(String(s).replace(/\+/g, ' ')); }
  var EX = function parseQueryString(qs, dest, unq) {
    unq = (unq || deco);
    dest = (dest || {});
    var add = ifFun(dest, function (k, v) { dest[unq(k)] = unq(v); });
    String(qs).replace(EX.rgx, function (m, k, v) {
      add(m && k, v.slice(1), v.substr(0, 1), unq, dest);
    });
    return dest;
  };
  EX.rgx = /(?:^\??|&|;)([\x00-%'-:<>-\uFFFF]*)(=[\x00-%'-:<-\uFFFF]*|)/g;
  EX.deco = deco;
  return EX;
}());
