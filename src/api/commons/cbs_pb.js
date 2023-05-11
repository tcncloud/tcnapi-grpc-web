// source: api/commons/cbs.proto
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
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.api.commons.ScheduledCallbackStatus', null, global);
/**
 * @enum {number}
 */
proto.api.commons.ScheduledCallbackStatus = {
  SCS_INVALID: 0,
  SCS_OPENED: 1,
  SCS_CANCELED: 2,
  SCS_CLOSED: 3,
  SCS_READY: 4
};

goog.object.extend(exports, proto.api.commons);
