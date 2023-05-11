// source: api/commons/ana.proto
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

goog.exportSymbol('proto.api.commons.AnaExportType', null, global);
goog.exportSymbol('proto.api.commons.AnaTimeZone', null, global);
goog.exportSymbol('proto.api.commons.BoolComparison', null, global);
goog.exportSymbol('proto.api.commons.CompoundFilterJoin', null, global);
goog.exportSymbol('proto.api.commons.CsvQuoteType', null, global);
goog.exportSymbol('proto.api.commons.CustomDataSeleciton', null, global);
goog.exportSymbol('proto.api.commons.DashPageType', null, global);
goog.exportSymbol('proto.api.commons.DataPointType', null, global);
goog.exportSymbol('proto.api.commons.DateComparison', null, global);
goog.exportSymbol('proto.api.commons.ExportStatus', null, global);
goog.exportSymbol('proto.api.commons.ExporterDataSelectionType', null, global);
goog.exportSymbol('proto.api.commons.FilterBy', null, global);
goog.exportSymbol('proto.api.commons.FloatComparison', null, global);
goog.exportSymbol('proto.api.commons.NonNumericAggregation', null, global);
goog.exportSymbol('proto.api.commons.NumericAggregation', null, global);
goog.exportSymbol('proto.api.commons.Operation', null, global);
goog.exportSymbol('proto.api.commons.StringComparison', null, global);
goog.exportSymbol('proto.api.commons.Tag', null, global);
goog.exportSymbol('proto.api.commons.TimeFilterType', null, global);
goog.exportSymbol('proto.api.commons.TimeScope', null, global);
goog.exportSymbol('proto.api.commons.WallaceDataType', null, global);
/**
 * @enum {number}
 */
proto.api.commons.AnaTimeZone = {
  ANA_TIME_ZONE_UNKNOWN: 0,
  ANA_TIME_ZONE_AMERICA_ANCHORAGE: 1,
  ANA_TIME_ZONE_AMERICA_CHICAGO: 2,
  ANA_TIME_ZONE_AMERICA_DENVER: 3,
  ANA_TIME_ZONE_AMERICA_INDIANAPOLIS: 4,
  ANA_TIME_ZONE_AMERICA_LOS_ANGELES: 5,
  ANA_TIME_ZONE_AMERICA_MEXICO_CITY: 6,
  ANA_TIME_ZONE_AMERICA_NEW_YORK: 7,
  ANA_TIME_ZONE_AMERICA_PHOENIX: 8,
  ANA_TIME_ZONE_AMERICA_PUERTO_RICO: 9,
  ANA_TIME_ZONE_ASIA_CALCUTTA: 10,
  ANA_TIME_ZONE_ASIA_COLOMBO: 11,
  ANA_TIME_ZONE_ASIA_MANILA: 12,
  ANA_TIME_ZONE_AUSTRALIA_ADELAIDE: 13,
  ANA_TIME_ZONE_AUSTRALIA_BRISBANE: 14,
  ANA_TIME_ZONE_AUSTRALIA_DARWIN: 15,
  ANA_TIME_ZONE_AUSTRALIA_MELBOURNE: 16,
  ANA_TIME_ZONE_AUSTRALIA_PERTH: 17,
  ANA_TIME_ZONE_AUSTRALIA_SYDNEY: 18,
  ANA_TIME_ZONE_BRAZIL_ACRE: 19,
  ANA_TIME_ZONE_BRAZIL_DENORONHA: 20,
  ANA_TIME_ZONE_BRAZIL_EAST: 21,
  ANA_TIME_ZONE_BRAZIL_WEST: 22,
  ANA_TIME_ZONE_CANADA_ATLANTIC: 23,
  ANA_TIME_ZONE_CANADA_CENTRAL: 24,
  ANA_TIME_ZONE_CANADA_EAST_SASKATCHEWAN: 25,
  ANA_TIME_ZONE_CANADA_EASTERN: 26,
  ANA_TIME_ZONE_CANADA_MOUNTAIN: 27,
  ANA_TIME_ZONE_CANADA_NEWFOUNDLAND: 28,
  ANA_TIME_ZONE_CANADA_PACIFIC: 29,
  ANA_TIME_ZONE_CANADA_SASKATCHEWAN: 30,
  ANA_TIME_ZONE_CANADA_YUKON: 31,
  ANA_TIME_ZONE_EUROPE_BERLIN: 32,
  ANA_TIME_ZONE_EUROPE_BUCHAREST: 33,
  ANA_TIME_ZONE_EUROPE_LONDON: 34,
  ANA_TIME_ZONE_EUROPE_MADRID: 35,
  ANA_TIME_ZONE_JAPAN: 36,
  ANA_TIME_ZONE_MEXICO_BAJANORTE: 37,
  ANA_TIME_ZONE_MEXICO_BAJASUR: 38,
  ANA_TIME_ZONE_PACIFIC_AUCKLAND: 39,
  ANA_TIME_ZONE_PACIFIC_CHATHAM: 40,
  ANA_TIME_ZONE_PACIFIC_HONOLULU: 41,
  ANA_TIME_ZONE_SINGAPORE: 42,
  ANA_TIME_ZONE_ETC_UNIVERSAL: 43,
  ANA_TIME_ZONE_ETC_GREENWICH: 44
};

/**
 * @enum {number}
 */
proto.api.commons.TimeFilterType = {
  TIME_FILTER_TYPE_UNDEFINED: 0,
  TIME_FILTER_TYPE_QUICK: 1,
  TIME_FILTER_TYPE_ABSOLUTE: 2,
  TIME_FILTER_TYPE_RELATIVE: 3
};

/**
 * @enum {number}
 */
proto.api.commons.DashPageType = {
  DASH_PAGE_TYPE_UNDEFINED: 0,
  DASH_PAGE_TYPE_DASHBOARD: 1,
  DASH_PAGE_TYPE_VISUALIZATION_LEGACY: 2,
  DASH_PAGE_TYPE_CHART: 3
};

/**
 * @enum {number}
 */
proto.api.commons.FilterBy = {
  FILTER_BY_UNDEFINED: 0,
  FILTER_BY_MINUTES: 1,
  FILTER_BY_HOURS: 2,
  FILTER_BY_DAYS: 3,
  FILTER_BY_WEEKS: 4,
  FILTER_BY_MONTHS: 5,
  FILTER_BY_YEARS: 6
};

/**
 * @enum {number}
 */
proto.api.commons.WallaceDataType = {
  WALLACE_DATA_TYPE_UNDEFINED: 0,
  WALLACE_DATA_TYPE_KEYWORD: 1,
  WALLACE_DATA_TYPE_LONG: 2,
  WALLACE_DATA_TYPE_DOUBLE: 3,
  WALLACE_DATA_TYPE_BOOLEAN: 4,
  WALLACE_DATA_TYPE_DATE: 5,
  WALLACE_DATA_TYPE_STRING: 6,
  WALLACE_DATA_TYPE_NESTED: 7,
  WALLACE_DATA_TYPE_OBJECT: 8,
  WALLACE_DATA_TYPE_FLATTENED: 9,
  WALLACE_DATA_TYPE_INTEGER_RANGE: 10,
  WALLACE_DATA_TYPE_FLOAT_RANGE: 11,
  WALLACE_DATA_TYPE_LONG_RANGE: 12,
  WALLACE_DATA_TYPE_DOUBLE_RANGE: 13,
  WALLACE_DATA_TYPE_DATE_RANGE: 14,
  WALLACE_DATA_TYPE_IP_RANGE: 15,
  WALLACE_DATA_TYPE_DOUBLE_KEYWORD: 20
};

/**
 * @enum {number}
 */
proto.api.commons.TimeScope = {
  ONE_DAY: 0,
  ONE_WEEK: 1,
  ONE_MONTH: 2,
  ONE_YEAR: 3,
  ONE_MINUTE: 4,
  FIVE_MINUTES: 5,
  TEN_MINUTES: 6,
  TWENTY_MINUTES: 7,
  THIRTY_MINUTES: 8,
  ONE_HOUR: 9,
  TWO_HOURS: 10,
  THREE_HOURS: 11,
  FOUR_HOURS: 12
};

/**
 * @enum {number}
 */
proto.api.commons.Tag = {
  TAG_ALL: 0,
  TAG_CUSTOM: 1,
  TAG_LEGACY: 2,
  TAG_DYNAMIC: 3,
  P3_RJ_RECORDS_INBOUND_CALL: 101,
  P3_RJ_RECORDS_MANUAL_CALL: 102,
  P3_RJ_RECORDS_OUTBOUND_CALL: 103,
  P3_RJ_RECORDS_OUTBOUND_TASK: 104,
  P3_RJ_RECORDS_AGENT_CALL_OUTBOUND: 105,
  P3_RJ_RECORDS_AGENT_CALL_INBOUND: 106,
  P3_RJ_RECORDS_AGENT_CALL_MANUAL: 107,
  P3_RJ_RECORDS_SMS: 108,
  P3_RJ_RECORDS_EMAIL: 109,
  P3_RJ_AGGREGATE_INBOUND: 201,
  P3_RJ_AGGREGATE_OUTBOUND: 202,
  P3_RJ_AGGREGATE_MANUAL: 203,
  P3_RJ_AGGREGATE_AGENT_CALL: 204,
  P3_RJ_AGGREGATE_HUNT_GROUP: 205,
  P3_RJ_AGGREGATE_AGENT_SESSION: 206,
  P3_RJ_AGGREGATE_SKILLS: 207,
  P3_RJ_COLLATED_INBOUND: 301,
  P3_RJ_COLLATED_OUTBOUND: 302,
  P3_RJ_COLLATED_MANUAL: 303,
  P3_RJ_COLLATED_AGENT_CALL: 304,
  P3_RJ_COLLATED_HUNT_GROUP: 305,
  P3_RJ_COLLATED_AGENT_SESSION: 306,
  P3_RJ_MISC_SCHEDULED_CALLBACK: 1001
};

/**
 * @enum {number}
 */
proto.api.commons.CsvQuoteType = {
  NO_QUOTE_TYPE: 0,
  SINGLE: 1,
  DOUBLE: 2
};

/**
 * @enum {number}
 */
proto.api.commons.StringComparison = {
  STRING_EQ: 0,
  STRING_NEQ: 1,
  STRING_STARTS_WITH: 2,
  STRING_NOT_STARTS_WITH: 3,
  STRING_CONTAINS: 4,
  STRING_NOT_CONTAINS: 5,
  STRING_ENDS_WITH: 6,
  STRING_NOT_ENDS_WITH: 7,
  STRING_BLANK: 8,
  STRING_NOT_BLANK: 9
};

/**
 * @enum {number}
 */
proto.api.commons.FloatComparison = {
  FLOAT_EQ: 0,
  FLOAT_NEQ: 1,
  LT: 2,
  LTE: 3,
  GT: 4,
  GTE: 5,
  FLOAT_BLANK: 6,
  FLOAT_NOT_BLANK: 7
};

/**
 * @enum {number}
 */
proto.api.commons.BoolComparison = {
  BOOL_EQ: 0,
  BOOL_NEQ: 1
};

/**
 * @enum {number}
 */
proto.api.commons.DateComparison = {
  DATE_COMPARISON_EQ: 0,
  DATE_COMPARISON_NEQ: 1,
  DATE_COMPARISON_LT: 2,
  DATE_COMPARISON_LTE: 3,
  DATE_COMPARISON_GT: 4,
  DATE_COMPARISON_GTE: 5
};

/**
 * @enum {number}
 */
proto.api.commons.CompoundFilterJoin = {
  AND: 0,
  OR: 1
};

/**
 * @enum {number}
 */
proto.api.commons.AnaExportType = {
  ANA_EXPORT_TYPE_EMAIL: 0,
  ANA_EXPORT_TYPE_SFTP: 1,
  ANA_EXPORT_TYPE_HTTPS: 2
};

/**
 * @enum {number}
 */
proto.api.commons.ExporterDataSelectionType = {
  CHART_ID_SELECTION_TYPE: 0,
  CUSTOM_SELECTION_TYPE: 1
};

/**
 * @enum {number}
 */
proto.api.commons.NumericAggregation = {
  FLOAT_AGGREGATION_TOP_HITS: 0,
  FLOAT_AGGREGATION_AVERAGE: 1,
  FLOAT_AGGREGATION_SUM: 2,
  FLOAT_AGGREGATION_MIN: 3,
  FLOAT_AGGREGATION_MAX: 4,
  FLOAT_AGGREGATION_TERMS: 5,
  FLOAT_AGGREGATION_PERCENTILE: 6,
  FLOAT_AGGREGATION_COUNT: 7,
  FLOAT_AGGREGATION_NONE: 100
};

/**
 * @enum {number}
 */
proto.api.commons.NonNumericAggregation = {
  STRING_AGGREGATION_TOP_HITS: 0,
  STRING_AGGREGATION_TERMS: 5,
  STRING_AGGREGATION_COUNT: 7,
  STRING_AGGREGATION_NONE: 100
};

/**
 * @enum {number}
 */
proto.api.commons.Operation = {
  OPERATION_ADD: 0,
  OPERATION_SUBTRACT_LEFT: 1,
  OPERATION_SUBTRACT_RIGHT: 2,
  OPERATION_MULTIPLY: 3,
  OPERATION_DIVIDE_LEFT: 4,
  OPERATION_DIVIDE_RIGHT: 5
};

/**
 * @enum {number}
 */
proto.api.commons.CustomDataSeleciton = {
  CUSTOM_DATA_SELECTION_UKNOWN: 0
};

/**
 * @enum {number}
 */
proto.api.commons.DataPointType = {
  DATA_POINT_TYPE_NUMBER: 0,
  DATA_POINT_TYPE_STRING: 1,
  DATA_POINT_TYPE_BOOLEAN: 2,
  DATA_POINT_TYPE_DATE: 3
};

/**
 * @enum {number}
 */
proto.api.commons.ExportStatus = {
  NOT_SENT: 0,
  SENT: 1
};

goog.object.extend(exports, proto.api.commons);
