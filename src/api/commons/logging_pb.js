// source: api/commons/logging.proto
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

goog.exportSymbol('proto.api.commons.Level', null, global);
/**
 * @enum {number}
 */
proto.api.commons.Level = {
  OFF: 0,
  FATAL: 1,
  PANIC: 2,
  DPANIC: 3,
  ERROR: 4,
  WARN: 5,
  INFO: 6,
  DEBUG: 7,
  TRACE: 8
};

goog.object.extend(exports, proto.api.commons);
