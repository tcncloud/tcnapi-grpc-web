// source: api/commons/task.proto
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

goog.exportSymbol('proto.api.commons.TaskStatus', null, global);
/**
 * @enum {number}
 */
proto.api.commons.TaskStatus = {
  TASK_UNKNOWN: 0,
  TASK_SCHEDULED: 2100,
  TASK_WAITING: 2110,
  TASK_PREPARING: 2120,
  TASK_RUNNING: 2200,
  TASK_COMPLETED: 2300,
  TASK_CANCELLED_TIMEOUT: 2310,
  TASK_CANCELLED_USER: 2320,
  TASK_CANCELLED_ADMIN: 2330
};

goog.object.extend(exports, proto.api.commons);
