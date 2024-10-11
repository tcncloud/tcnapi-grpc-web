// source: api/commons/inbound.proto
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

goog.exportSymbol('api.commons.InboundGroupStatus', null, proto);
/**
 * @enum {number}
 */
proto.api.commons.InboundGroupStatus = {
  IBG_UNKNOWN: 0,
  IBG_PREPARE: 5000,
  IBG_SCHEDULED: 5100,
  IBG_RUNNING: 5200,
  IBG_PAUSED: 5210,
  IBG_COMPLETED: 5300,
  IBG_CANCELLED_TIMEOUT: 5310,
  IBG_CANCELLED_USER: 5320,
  IBG_CANCELLED_ADMIN: 5330,
  IBG_SUMMED_COMPLETED: 5400,
  IBG_SUMMED_CANCELLED_TIMEOUT: 5410,
  IBG_SUMMED_CANCELLED_USER: 5420,
  IBG_SUMMED_CANCELLED_ADMIN: 5430,
  IBG_ACCOUNTINGEXPORT_COMPLETED: 5500,
  IBG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT: 5510,
  IBG_ACCOUNTINGEXPORT_CANCELLED_USER: 5520,
  IBG_ACCOUNTINGEXPORT_CANCELLED_ADMIN: 5530
};

goog.object.extend(exports, proto);
