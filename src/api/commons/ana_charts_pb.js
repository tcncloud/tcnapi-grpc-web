// source: api/commons/ana_charts.proto
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

goog.exportSymbol('api.commons.AreaChartChoice', null, proto);
goog.exportSymbol('api.commons.BarChartOrientation', null, proto);
goog.exportSymbol('api.commons.ChartDisplayLabels', null, proto);
goog.exportSymbol('api.commons.ChartOrientation', null, proto);
goog.exportSymbol('api.commons.LineChartStep', null, proto);
goog.exportSymbol('api.commons.PackedBubbleChoice', null, proto);
goog.exportSymbol('api.commons.SuffixChoices', null, proto);
goog.exportSymbol('api.commons.ThresholdType', null, proto);
/**
 * @enum {number}
 */
proto.api.commons.BarChartOrientation = {
  BAR_CHART_ORIENTATION_BAR: 0,
  BAR_CHART_ORIENTATION_COLUMN: 1
};

/**
 * @enum {number}
 */
proto.api.commons.ChartOrientation = {
  CHART_ORIENTATION_HORIZONTAL: 0,
  CHART_ORIENTATION_VERTICAL: 1
};

/**
 * @enum {number}
 */
proto.api.commons.AreaChartChoice = {
  AREA_CHART_CHOICE_AREA: 0,
  AREA_CHART_CHOICE_AREASPLINE: 1
};

/**
 * @enum {number}
 */
proto.api.commons.LineChartStep = {
  LINE_CHART_STEP_LEFT: 0,
  LINE_CHART_STEP_CENTER: 1,
  LINE_CHART_STEP_RIGHT: 2,
  LINE_CHART_STEP_NOLINE: 3
};

/**
 * @enum {number}
 */
proto.api.commons.ChartDisplayLabels = {
  CHART_DISPLAY_LABELS_NEVER: 0,
  CHART_DISPLAY_LABELS_ALWAYS: 1
};

/**
 * @enum {number}
 */
proto.api.commons.ThresholdType = {
  THRESHOLD_TYPE_STATIC: 0,
  THRESHOLD_TYPE_DATA_POINT: 1,
  THRESHOLD_TYPE_NOT_SET: 2
};

/**
 * @enum {number}
 */
proto.api.commons.PackedBubbleChoice = {
  PACKED_BUBBLE_CHOICE_PACKED: 0,
  PACKED_BUBBLE_CHOICE_SPLIT: 1
};

/**
 * @enum {number}
 */
proto.api.commons.SuffixChoices = {
  SUFFIX_CHOICES_NOSUFFIX: 0,
  SUFFIX_CHOICES_DOLLARS: 1,
  SUFFIX_CHOICES_PERCENTAGE: 2
};

goog.object.extend(exports, proto);
