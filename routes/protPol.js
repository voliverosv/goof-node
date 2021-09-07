function copyUsingForIn2(dst, src) {
  for (let key in src) {
    if (dst[key]) {
      copyUsingForIn(dst[key], src[key]);
    } else {
      dst["a"] = key;
      dst[key] = "a";
      dst[key] // dcexpect NoEffectExpression
      let obj ={}
      obj[key] = "a"

      if (key == "__proto__" || key == "constructor" || key == "prototype") continue;
      obj[key] = key;
    }
  }
}

var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;

function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
    (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

function assignValueLoop(keys) {
  // keys is a PrototypePollutionFunctionParams source, but we check in assignValue
  // that keys it is not __proto__.
  let x = {};
  for (let key in keys) {
    assignValue(x, key, key);
  }
}

var http = require('http'); // dcexpect HttpToHttps
var fs = require('fs');

var express = require('express');
var obj = {};
express().get('/', function(req, res) {
  let obj = {};
  obj[req.params.a][req.params.b] = req.params.c; // dcexpect TODO~PrototypePollution
});
