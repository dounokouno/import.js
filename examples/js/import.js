/*
* import.js
*
* Copyright (c) 2011 TAGAWA Takao, dounokouno@gmail.com
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* https://github.com/dounokouno/import.js
*
*/

var require = function(jsfile) {
	var ary = document.getElementsByTagName('script');
	for (var i=0;i<ary.length;i++) {
    if (ary[i].getAttribute('src').match(/import\.js$/)) {
      var jspath = ary[i].getAttribute('src').match(/.+\//);
    }
  }
  var elem = document.createElement('script');
  elem.setAttribute('type', 'text/javascript');
  elem.setAttribute('src', jspath+jsfile);
  document.getElementsByTagName('head')[0].appendChild(elem);
}

// Add the following
require('external-1.js');
require('external-2.js');