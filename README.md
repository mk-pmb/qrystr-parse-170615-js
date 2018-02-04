
<!--#echo json="package.json" key="name" underline="=" -->
qrystr-parse-170615
===================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Reduced version of qrystr: Takes the minimalism further for cases where you
only need decoding of very simple QS.
<!--/#echo -->


* "very simple QS" includes treating `…&flag&…` the same as `…&flag=&…`,
  i.e. as an empty string value. If you want `true` instead,
  use the `qrystr` module.


Still too large a library? You might not need any at all:
[URLSearchParams][usp-mdn] are now [widely supported][usp-ciu].

  [usp-mdn]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  [usp-ciu]: https://caniuse.com/#feat=urlsearchparams


Usage
-----

from [test/all.js](test/all.js):

<!--#include file="test/all.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="17" -->
```javascript
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
```
<!--/include-->



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;

License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
