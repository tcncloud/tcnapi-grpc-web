// source: api/commons/user.proto
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

goog.exportSymbol('proto.api.commons.UserArchivedStateFilter', null, global);
/**
 * @enum {number}
 */
proto.api.commons.UserArchivedStateFilter = {
  USER_ARCHIVED_STATE_FILTER_ALL: 0,
  USER_ARCHIVED_STATE_FILTER_ARCHIVED: 1,
  USER_ARCHIVED_STATE_FILTER_UNARCHIVED: 2
};

goog.object.extend(exports, proto.api.commons);
