// source: api/commons/task_group.proto
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

goog.exportSymbol('proto.api.commons.TaskGroupStatus', null, global);
/**
 * @enum {number}
 */
proto.api.commons.TaskGroupStatus = {
  TG_UNKNOWN: 0,
  TG_PREPARE: 1000,
  TG_SCHEDULED: 1100,
  TG_SCHEDULED_LINKING: 1110,
  TG_SCHEDULED_PAUSED: 1120,
  TG_RUNNING: 1200,
  TG_PAUSED: 1210,
  TG_WAITING: 1220,
  TG_COMPLETED: 1300,
  TG_CANCELLED_TIMEOUT: 1310,
  TG_CANCELLED_USER: 1320,
  TG_CANCELLED_ADMIN: 1330,
  TG_SUMMED_COMPLETED: 1400,
  TG_SUMMED_CANCELLED_TIMEOUT: 1410,
  TG_SUMMED_CANCELLED_USER: 1420,
  TG_SUMMED_CANCELLED_ADMIN: 1430,
  TG_ACCOUNTINGEXPORT_COMPLETED: 1500,
  TG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT: 1510,
  TG_ACCOUNTINGEXPORT_CANCELLED_USER: 1520,
  TG_ACCOUNTINGEXPORT_CANCELLED_ADMIN: 1530
};

goog.object.extend(exports, proto.api.commons);
