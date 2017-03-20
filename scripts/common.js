'use strict';

function parseParams(paramString) {
  var regex = /([^&=]+)=([^&]*)/g;
  var params = new Object();
  var m = {};

  while (m = regex.exec(paramString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  return params;
}

function toQueryString(obj) {
  var parts = [];
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
    }
  }
  return parts.join('&');
}

function postResultToParent(result) {
  // Post the authorization result to parent page
  window.parent.postMessage(result, MAIL_GOOGLE_COM);
}
