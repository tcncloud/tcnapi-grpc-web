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

goog.exportSymbol('proto.api.commons.InsightPermissionType', null, global);
goog.exportSymbol('proto.api.commons.InsightType', null, global);
goog.exportSymbol('proto.api.commons.InsightVfsSchemaType', null, global);
goog.exportSymbol('proto.api.commons.OutputConfigurationColumnFormatType', null, global);
goog.exportSymbol('proto.api.commons.OutputConfigurationColumnSummaryType', null, global);
goog.exportSymbol('proto.api.commons.OutputConfigurationType', null, global);
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

/**
 * @enum {number}
 */
proto.api.commons.OutputConfigurationType = {
  OUTPUT_CONFIGURATION_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_TYPE_TABLE: 1,
  OUTPUT_CONFIGURATION_TYPE_MULTI_SERIES: 2
};

/**
 * @enum {number}
 */
proto.api.commons.OutputConfigurationColumnFormatType = {
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_PERCENTAGE: 1,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DOLLARS: 2,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DATE: 3,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_PREFIX: 4,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_SUFFIX: 5,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DURATION: 6,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_DURATION_SECONDS: 7,
  OUTPUT_CONFIGURATION_COLUMN_FORMAT_TYPE_NUMBER: 8
};

/**
 * @enum {number}
 */
proto.api.commons.OutputConfigurationColumnSummaryType = {
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_AVG: 1,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_SUM: 2,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MIN: 3,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MAX: 4
};

goog.object.extend(exports, proto.api.commons);
