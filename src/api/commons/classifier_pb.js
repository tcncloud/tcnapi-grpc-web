// source: api/commons/classifier.proto
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

goog.exportSymbol('proto.api.commons.ClassifierEntityType', null, global);
/**
 * @enum {number}
 */
proto.api.commons.ClassifierEntityType = {
  CET_UNKNOWN: 0,
  CET_CREDIT_CARD: 1,
  CET_CRYPTO: 2,
  CET_DATE_TIME: 3,
  CET_EMAIL_ADDRESS: 4,
  CET_IBAN_CODE: 5,
  CET_IP_ADDRESS: 6,
  CET_NRP: 7,
  CET_LOCATION: 8,
  CET_PERSON: 9,
  CET_PHONE_NUMBER: 10,
  CET_MEDICAL_LICENSE: 11,
  CET_URL: 12,
  CET_US_BANK_NUMBER: 13,
  CET_US_DRIVER_LICENSE: 14,
  CET_US_ITIN: 15,
  CET_US_PASSPORT: 16,
  CET_US_SSN: 17,
  CET_POSTAL_CODE: 18,
  CET_ACCOUNT_NUMBER: 19
};

goog.object.extend(exports, proto.api.commons);
