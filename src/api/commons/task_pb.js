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
var goog = jspb;
var proto = {};

goog.exportSymbol('api.commons.TaskStatus', null, proto);
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

goog.object.extend(exports, proto);
