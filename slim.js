/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function () {
  return function parseQueryString(q, o) {
    o = (o || {});
    function unpct(s) { return decodeURIComponent(s.replace(/\+/g, ' ')); }
    String(q).replace(/(?:^\??|&)([ -%'-<>-~]*)(=[ -%'-~]*|)/g,
      function (m, k, v) { o[unpct(k)] = (v ? unpct(v.slice(1), m) : true); });
    return o;
  };
}());
