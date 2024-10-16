// source: api/commons/manual.proto
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

goog.exportSymbol('proto.api.commons.ManualDialGroupStatus', null, global);
/**
 * @enum {number}
 */
proto.api.commons.ManualDialGroupStatus = {
  MDG_UNKNOWN: 0,
  MDG_PREPARE: 6000,
  MDG_SCHEDULED: 6100,
  MDG_RUNNING: 6200,
  MDG_COMPLETED: 6300,
  MDG_CANCELLED_TIMEOUT: 6310,
  MDG_CANCELLED_USER: 6320,
  MDG_CANCELLED_ADMIN: 6330,
  MDG_SUMMED_COMPLETED: 6400,
  MDG_SUMMED_CANCELLED_TIMEOUT: 6410,
  MDG_SUMMED_CANCELLED_USER: 6420,
  MDG_SUMMED_CANCELLED_ADMIN: 6430,
  MDG_ACCOUNTINGEXPORT_COMPLETED: 6500,
  MDG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT: 6510,
  MDG_ACCOUNTINGEXPORT_CANCELLED_USER: 6520,
  MDG_ACCOUNTINGEXPORT_CANCELLED_ADMIN: 6530
};

goog.object.extend(exports, proto.api.commons);
