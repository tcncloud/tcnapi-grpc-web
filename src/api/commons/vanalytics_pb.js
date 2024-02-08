// source: api/commons/vanalytics.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var localGlobalThis = require("../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.api.commons.Interval', null, global);
/**
 * @enum {number}
 */
proto.api.commons.Interval = {
  TODAY: 0,
  YESTERDAY: 1,
  THIS_WEEK: 2,
  LAST_7_DAYS: 3,
  LAST_WEEK: 4,
  LAST_14_DAYS: 5,
  THIS_MONTH: 6,
  LAST_30_DAYS: 7,
  LAST_60_DAYS: 8,
  LAST_90_DAYS: 9,
  LAST_180_DAYS: 10
};

goog.object.extend(exports, proto.api.commons);
