// source: api/commons/insights.proto
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

goog.exportSymbol('proto.api.commons.InsightPermissionType', null, global);
goog.exportSymbol('proto.api.commons.InsightType', null, global);
goog.exportSymbol('proto.api.commons.InsightVfsSchemaType', null, global);
/**
 * @enum {number}
 */
proto.api.commons.InsightPermissionType = {
  INSIGHT_PERMISSION_TYPE_COMMON_LIBRARY: 0,
  INSIGHT_PERMISSION_TYPE_ORG: 1
};

/**
 * @enum {number}
 */
proto.api.commons.InsightType = {
  INSIGHT_TYPE_TABLE_VIEW: 0
};

/**
 * @enum {number}
 */
proto.api.commons.InsightVfsSchemaType = {
  INSIGHT_VFS_SCHEMA_TYPE_STRING: 0,
  INSIGHT_VFS_SCHEMA_TYPE_INT64: 1,
  INSIGHT_VFS_SCHEMA_TYPE_FLOAT64: 2,
  INSIGHT_VFS_SCHEMA_TYPE_BOOLEAN: 3,
  INSIGHT_VFS_SCHEMA_TYPE_DATETIME: 4
};

goog.object.extend(exports, proto.api.commons);
