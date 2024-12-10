// source: api/v1alpha1/insights/insight.proto
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
var localGlobalThis = require("../../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_commons_insights_pb = require('../../../api/commons/insights_pb.js');
goog.object.extend(proto, api_commons_insights_pb);
var api_v1alpha1_explorer_entities_pb = require('../../../api/v1alpha1/explorer/entities_pb.js');
goog.object.extend(proto, api_v1alpha1_explorer_entities_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.v1alpha1.insights.AggregateNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.AggregationColumn', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.Column', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ColumnOperation', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ColumnOperation.OperationValueCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ColumnReplacement', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ColumnSort', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ComponentAction', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.CreateInsightRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.CreateInsightResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.CreateOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.CreateOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.DeleteInsightRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.DeleteInsightResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.DeriveNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.DrillThroughAction', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.DrillThroughParameter', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ExpressionNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.FilterNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.FormatSeries', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.FromNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetInsightRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetInsightResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetVfsSchemaRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetVfsSchemaResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GroupNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.Insight', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.InsightContextualAction', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.InsightContextualAction.ActionCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.InsightContextualActionType', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.JoinColumn', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.JoinNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.JsonNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.JsonTarget', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.LinkAction', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListInsightsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListInsightsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListInsightsStreamResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListOrgInsightsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListOrgInsightsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListOutputConfigurationsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListOutputConfigurationsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListVfsSchemasRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListVfsSchemasResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListVfsesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListVfsesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.MapNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.MapNode.Mapping', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.Node', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.Node.BodyCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OperationType', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OutputConfiguration', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OutputConfiguration.BodyCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OutputConfigurationColumnSummaryType', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OutputConfigurationType', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.PadOperation', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.Parameters', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.Parameters.Parameter', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.Parent', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.PipelineNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.PublishInsightRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.PublishInsightResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.QuoteCharacter', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ReplaceNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.SelectNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.SortColumn', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.SortNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.StringManipulationNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.StringManipulationReplace', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.StringManipulationSplit', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.TableColumnConfig', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.TableVisualization', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.TakeNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UnnestToColumnsNode', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UpdateInsightRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UpdateInsightResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ValuesReplacement', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.Insight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.Insight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.Insight.displayName = 'proto.api.v1alpha1.insights.Insight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.PublishInsightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.PublishInsightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.PublishInsightRequest.displayName = 'proto.api.v1alpha1.insights.PublishInsightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.PublishInsightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.PublishInsightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.PublishInsightResponse.displayName = 'proto.api.v1alpha1.insights.PublishInsightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.CreateInsightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.CreateInsightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.CreateInsightRequest.displayName = 'proto.api.v1alpha1.insights.CreateInsightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.CreateInsightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.CreateInsightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.CreateInsightResponse.displayName = 'proto.api.v1alpha1.insights.CreateInsightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListInsightsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ListInsightsRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListInsightsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListInsightsRequest.displayName = 'proto.api.v1alpha1.insights.ListInsightsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListInsightsStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListInsightsStreamResponse.displayName = 'proto.api.v1alpha1.insights.ListInsightsStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListInsightsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ListInsightsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListInsightsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListInsightsResponse.displayName = 'proto.api.v1alpha1.insights.ListInsightsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListOrgInsightsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListOrgInsightsRequest.displayName = 'proto.api.v1alpha1.insights.ListOrgInsightsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ListOrgInsightsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListOrgInsightsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListOrgInsightsResponse.displayName = 'proto.api.v1alpha1.insights.ListOrgInsightsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.UpdateInsightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.UpdateInsightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.UpdateInsightRequest.displayName = 'proto.api.v1alpha1.insights.UpdateInsightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.UpdateInsightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.UpdateInsightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.UpdateInsightResponse.displayName = 'proto.api.v1alpha1.insights.UpdateInsightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.DeleteInsightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.DeleteInsightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.DeleteInsightRequest.displayName = 'proto.api.v1alpha1.insights.DeleteInsightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.DeleteInsightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.DeleteInsightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.DeleteInsightResponse.displayName = 'proto.api.v1alpha1.insights.DeleteInsightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetInsightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetInsightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetInsightRequest.displayName = 'proto.api.v1alpha1.insights.GetInsightRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetInsightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetInsightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetInsightResponse.displayName = 'proto.api.v1alpha1.insights.GetInsightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetVfsSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetVfsSchemaRequest.displayName = 'proto.api.v1alpha1.insights.GetVfsSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.GetVfsSchemaResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetVfsSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetVfsSchemaResponse.displayName = 'proto.api.v1alpha1.insights.GetVfsSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.displayName = 'proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListVfsesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListVfsesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListVfsesRequest.displayName = 'proto.api.v1alpha1.insights.ListVfsesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListVfsesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ListVfsesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListVfsesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListVfsesResponse.displayName = 'proto.api.v1alpha1.insights.ListVfsesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListVfsSchemasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListVfsSchemasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListVfsSchemasRequest.displayName = 'proto.api.v1alpha1.insights.ListVfsSchemasRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ListVfsSchemasResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListVfsSchemasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListVfsSchemasResponse.displayName = 'proto.api.v1alpha1.insights.ListVfsSchemasResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.TableVisualization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.TableVisualization.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.TableVisualization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.TableVisualization.displayName = 'proto.api.v1alpha1.insights.TableVisualization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.TableColumnConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.TableColumnConfig.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.TableColumnConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.TableColumnConfig.displayName = 'proto.api.v1alpha1.insights.TableColumnConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.FormatSeries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.FormatSeries.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.FormatSeries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.FormatSeries.displayName = 'proto.api.v1alpha1.insights.FormatSeries';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.PadOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.PadOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.PadOperation.displayName = 'proto.api.v1alpha1.insights.PadOperation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ColumnOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.insights.ColumnOperation.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.insights.ColumnOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ColumnOperation.displayName = 'proto.api.v1alpha1.insights.ColumnOperation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.InsightContextualAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.insights.InsightContextualAction.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.insights.InsightContextualAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.InsightContextualAction.displayName = 'proto.api.v1alpha1.insights.InsightContextualAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.LinkAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.LinkAction.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.LinkAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.LinkAction.displayName = 'proto.api.v1alpha1.insights.LinkAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ComponentAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.ComponentAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ComponentAction.displayName = 'proto.api.v1alpha1.insights.ComponentAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.DrillThroughAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.DrillThroughAction.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.DrillThroughAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.DrillThroughAction.displayName = 'proto.api.v1alpha1.insights.DrillThroughAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.DrillThroughParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.DrillThroughParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.DrillThroughParameter.displayName = 'proto.api.v1alpha1.insights.DrillThroughParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.OutputConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.insights.OutputConfiguration.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.insights.OutputConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.OutputConfiguration.displayName = 'proto.api.v1alpha1.insights.OutputConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.CreateOutputConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.displayName = 'proto.api.v1alpha1.insights.CreateOutputConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.CreateOutputConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.displayName = 'proto.api.v1alpha1.insights.CreateOutputConfigurationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListOutputConfigurationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.displayName = 'proto.api.v1alpha1.insights.ListOutputConfigurationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ListOutputConfigurationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.displayName = 'proto.api.v1alpha1.insights.ListOutputConfigurationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.displayName = 'proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.displayName = 'proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.displayName = 'proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.displayName = 'proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetOutputConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetOutputConfigurationRequest.displayName = 'proto.api.v1alpha1.insights.GetOutputConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetOutputConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetOutputConfigurationResponse.displayName = 'proto.api.v1alpha1.insights.GetOutputConfigurationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.displayName = 'proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.displayName = 'proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.displayName = 'proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.displayName = 'proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.PipelineNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.PipelineNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.PipelineNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.PipelineNode.displayName = 'proto.api.v1alpha1.insights.PipelineNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.Node = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.Node.repeatedFields_, proto.api.v1alpha1.insights.Node.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.insights.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.Node.displayName = 'proto.api.v1alpha1.insights.Node';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.FromNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.FromNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.FromNode.displayName = 'proto.api.v1alpha1.insights.FromNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.FilterNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.FilterNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.FilterNode.displayName = 'proto.api.v1alpha1.insights.FilterNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.DeriveNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.DeriveNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.DeriveNode.displayName = 'proto.api.v1alpha1.insights.DeriveNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.GroupNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.GroupNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.GroupNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.GroupNode.displayName = 'proto.api.v1alpha1.insights.GroupNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.TakeNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.TakeNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.TakeNode.displayName = 'proto.api.v1alpha1.insights.TakeNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.AggregateNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.AggregateNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.AggregateNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.AggregateNode.displayName = 'proto.api.v1alpha1.insights.AggregateNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.AggregationColumn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.AggregationColumn.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.AggregationColumn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.AggregationColumn.displayName = 'proto.api.v1alpha1.insights.AggregationColumn';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.Column = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.Column, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.Column.displayName = 'proto.api.v1alpha1.insights.Column';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ExpressionNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ExpressionNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ExpressionNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ExpressionNode.displayName = 'proto.api.v1alpha1.insights.ExpressionNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.MapNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.MapNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.MapNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.MapNode.displayName = 'proto.api.v1alpha1.insights.MapNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.MapNode.Mapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.MapNode.Mapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.MapNode.Mapping.displayName = 'proto.api.v1alpha1.insights.MapNode.Mapping';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.JoinNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.JoinNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.JoinNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.JoinNode.displayName = 'proto.api.v1alpha1.insights.JoinNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.JoinColumn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.JoinColumn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.JoinColumn.displayName = 'proto.api.v1alpha1.insights.JoinColumn';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.Parent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.Parent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.Parent.displayName = 'proto.api.v1alpha1.insights.Parent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.SelectNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.SelectNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.SelectNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.SelectNode.displayName = 'proto.api.v1alpha1.insights.SelectNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.JsonTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.JsonTarget.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.JsonTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.JsonTarget.displayName = 'proto.api.v1alpha1.insights.JsonTarget';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.JsonNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.JsonNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.JsonNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.JsonNode.displayName = 'proto.api.v1alpha1.insights.JsonNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.UnnestToColumnsNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.UnnestToColumnsNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.UnnestToColumnsNode.displayName = 'proto.api.v1alpha1.insights.UnnestToColumnsNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.Parameters.displayName = 'proto.api.v1alpha1.insights.Parameters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.Parameters.Parameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.Parameters.Parameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.Parameters.Parameter.displayName = 'proto.api.v1alpha1.insights.Parameters.Parameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ValuesReplacement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.ValuesReplacement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ValuesReplacement.displayName = 'proto.api.v1alpha1.insights.ValuesReplacement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ColumnReplacement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ColumnReplacement.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ColumnReplacement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ColumnReplacement.displayName = 'proto.api.v1alpha1.insights.ColumnReplacement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.ReplaceNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.ReplaceNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.ReplaceNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.ReplaceNode.displayName = 'proto.api.v1alpha1.insights.ReplaceNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.SortColumn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.SortColumn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.SortColumn.displayName = 'proto.api.v1alpha1.insights.SortColumn';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.SortNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.insights.SortNode.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.insights.SortNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.SortNode.displayName = 'proto.api.v1alpha1.insights.SortNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.StringManipulationSplit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.StringManipulationSplit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.StringManipulationSplit.displayName = 'proto.api.v1alpha1.insights.StringManipulationSplit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.StringManipulationReplace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.StringManipulationReplace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.StringManipulationReplace.displayName = 'proto.api.v1alpha1.insights.StringManipulationReplace';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.insights.StringManipulationNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.insights.StringManipulationNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.insights.StringManipulationNode.displayName = 'proto.api.v1alpha1.insights.StringManipulationNode';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.Insight.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.Insight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.Insight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Insight.toObject = function(includeInstance, msg) {
  var f, obj = {
insightId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
insightType: jspb.Message.getFieldWithDefault(msg, 5, 0),
insightVersion: jspb.Message.getFieldWithDefault(msg, 6, 0),
body: jspb.Message.getFieldWithDefault(msg, 7, ""),
insightPermissionType: jspb.Message.getFieldWithDefault(msg, 8, 0),
resourceId: jspb.Message.getFieldWithDefault(msg, 9, ""),
standardInsight: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
datasourceType: jspb.Message.getFieldWithDefault(msg, 11, 0),
datasourceName: jspb.Message.getFieldWithDefault(msg, 12, ""),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.Insight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.Insight;
  return proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.Insight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInsightId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.InsightType} */ (reader.readEnum());
      msg.setInsightType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInsightVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.InsightPermissionType} */ (reader.readEnum());
      msg.setInsightPermissionType(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStandardInsight(value);
      break;
    case 11:
      var value = /** @type {!proto.api.v1alpha1.explorer.DatasourceType} */ (reader.readEnum());
      msg.setDatasourceType(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourceName(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.Insight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.Insight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInsightType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getInsightVersion();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInsightPermissionType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStandardInsight();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDatasourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getDatasourceName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 insight_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.Insight.prototype.getInsightId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setInsightId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.Insight.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v1alpha1.insights.Insight.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.InsightType insight_type = 5;
 * @return {!proto.api.commons.InsightType}
 */
proto.api.v1alpha1.insights.Insight.prototype.getInsightType = function() {
  return /** @type {!proto.api.commons.InsightType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.InsightType} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setInsightType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional uint32 insight_version = 6;
 * @return {number}
 */
proto.api.v1alpha1.insights.Insight.prototype.getInsightVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setInsightVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string body = 7;
 * @return {string}
 */
proto.api.v1alpha1.insights.Insight.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional api.commons.InsightPermissionType insight_permission_type = 8;
 * @return {!proto.api.commons.InsightPermissionType}
 */
proto.api.v1alpha1.insights.Insight.prototype.getInsightPermissionType = function() {
  return /** @type {!proto.api.commons.InsightPermissionType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.InsightPermissionType} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setInsightPermissionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string resource_id = 9;
 * @return {string}
 */
proto.api.v1alpha1.insights.Insight.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool standard_insight = 10;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Insight.prototype.getStandardInsight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setStandardInsight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional api.v1alpha1.explorer.DatasourceType datasource_type = 11;
 * @return {!proto.api.v1alpha1.explorer.DatasourceType}
 */
proto.api.v1alpha1.insights.Insight.prototype.getDatasourceType = function() {
  return /** @type {!proto.api.v1alpha1.explorer.DatasourceType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.v1alpha1.explorer.DatasourceType} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setDatasourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string datasource_name = 12;
 * @return {string}
 */
proto.api.v1alpha1.insights.Insight.prototype.getDatasourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.setDatasourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.insights.Insight.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
*/
proto.api.v1alpha1.insights.Insight.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Insight.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.insights.Insight.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
*/
proto.api.v1alpha1.insights.Insight.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Insight} returns this
 */
proto.api.v1alpha1.insights.Insight.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Insight.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 14) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.PublishInsightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.PublishInsightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.PublishInsightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.PublishInsightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
resourceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
destinationResourceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.PublishInsightRequest}
 */
proto.api.v1alpha1.insights.PublishInsightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.PublishInsightRequest;
  return proto.api.v1alpha1.insights.PublishInsightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.PublishInsightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.PublishInsightRequest}
 */
proto.api.v1alpha1.insights.PublishInsightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.PublishInsightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.PublishInsightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.PublishInsightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.PublishInsightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestinationResourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string resource_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.PublishInsightRequest.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.PublishInsightRequest} returns this
 */
proto.api.v1alpha1.insights.PublishInsightRequest.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination_resource_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.PublishInsightRequest.prototype.getDestinationResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.PublishInsightRequest} returns this
 */
proto.api.v1alpha1.insights.PublishInsightRequest.prototype.setDestinationResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.PublishInsightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.PublishInsightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.PublishInsightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.PublishInsightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
insight: (f = msg.getInsight()) && proto.api.v1alpha1.insights.Insight.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.PublishInsightResponse}
 */
proto.api.v1alpha1.insights.PublishInsightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.PublishInsightResponse;
  return proto.api.v1alpha1.insights.PublishInsightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.PublishInsightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.PublishInsightResponse}
 */
proto.api.v1alpha1.insights.PublishInsightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.setInsight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.PublishInsightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.PublishInsightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.PublishInsightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.PublishInsightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * optional Insight insight = 1;
 * @return {?proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.PublishInsightResponse.prototype.getInsight = function() {
  return /** @type{?proto.api.v1alpha1.insights.Insight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Insight|undefined} value
 * @return {!proto.api.v1alpha1.insights.PublishInsightResponse} returns this
*/
proto.api.v1alpha1.insights.PublishInsightResponse.prototype.setInsight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.PublishInsightResponse} returns this
 */
proto.api.v1alpha1.insights.PublishInsightResponse.prototype.clearInsight = function() {
  return this.setInsight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.PublishInsightResponse.prototype.hasInsight = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.CreateInsightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.CreateInsightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.CreateInsightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.CreateInsightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
insight: (f = msg.getInsight()) && proto.api.v1alpha1.insights.Insight.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.CreateInsightRequest}
 */
proto.api.v1alpha1.insights.CreateInsightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.CreateInsightRequest;
  return proto.api.v1alpha1.insights.CreateInsightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.CreateInsightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.CreateInsightRequest}
 */
proto.api.v1alpha1.insights.CreateInsightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.setInsight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.CreateInsightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.CreateInsightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.CreateInsightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.CreateInsightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * optional Insight insight = 1;
 * @return {?proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.CreateInsightRequest.prototype.getInsight = function() {
  return /** @type{?proto.api.v1alpha1.insights.Insight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Insight|undefined} value
 * @return {!proto.api.v1alpha1.insights.CreateInsightRequest} returns this
*/
proto.api.v1alpha1.insights.CreateInsightRequest.prototype.setInsight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.CreateInsightRequest} returns this
 */
proto.api.v1alpha1.insights.CreateInsightRequest.prototype.clearInsight = function() {
  return this.setInsight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.CreateInsightRequest.prototype.hasInsight = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.CreateInsightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.CreateInsightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.CreateInsightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.CreateInsightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
insight: (f = msg.getInsight()) && proto.api.v1alpha1.insights.Insight.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.CreateInsightResponse}
 */
proto.api.v1alpha1.insights.CreateInsightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.CreateInsightResponse;
  return proto.api.v1alpha1.insights.CreateInsightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.CreateInsightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.CreateInsightResponse}
 */
proto.api.v1alpha1.insights.CreateInsightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.setInsight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.CreateInsightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.CreateInsightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.CreateInsightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.CreateInsightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * optional Insight insight = 1;
 * @return {?proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.CreateInsightResponse.prototype.getInsight = function() {
  return /** @type{?proto.api.v1alpha1.insights.Insight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Insight|undefined} value
 * @return {!proto.api.v1alpha1.insights.CreateInsightResponse} returns this
*/
proto.api.v1alpha1.insights.CreateInsightResponse.prototype.setInsight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.CreateInsightResponse} returns this
 */
proto.api.v1alpha1.insights.CreateInsightResponse.prototype.clearInsight = function() {
  return this.setInsight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.CreateInsightResponse.prototype.hasInsight = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ListInsightsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListInsightsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListInsightsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListInsightsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListInsightsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
insightPermissionTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListInsightsRequest}
 */
proto.api.v1alpha1.insights.ListInsightsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListInsightsRequest;
  return proto.api.v1alpha1.insights.ListInsightsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListInsightsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListInsightsRequest}
 */
proto.api.v1alpha1.insights.ListInsightsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var values = /** @type {!Array<!proto.api.commons.InsightPermissionType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInsightPermissionTypes(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListInsightsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListInsightsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListInsightsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListInsightsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightPermissionTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * repeated api.commons.InsightPermissionType insight_permission_types = 2;
 * @return {!Array<!proto.api.commons.InsightPermissionType>}
 */
proto.api.v1alpha1.insights.ListInsightsRequest.prototype.getInsightPermissionTypesList = function() {
  return /** @type {!Array<!proto.api.commons.InsightPermissionType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.api.commons.InsightPermissionType>} value
 * @return {!proto.api.v1alpha1.insights.ListInsightsRequest} returns this
 */
proto.api.v1alpha1.insights.ListInsightsRequest.prototype.setInsightPermissionTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.api.commons.InsightPermissionType} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.ListInsightsRequest} returns this
 */
proto.api.v1alpha1.insights.ListInsightsRequest.prototype.addInsightPermissionTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ListInsightsRequest} returns this
 */
proto.api.v1alpha1.insights.ListInsightsRequest.prototype.clearInsightPermissionTypesList = function() {
  return this.setInsightPermissionTypesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListInsightsStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListInsightsStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
insights: (f = msg.getInsights()) && proto.api.v1alpha1.insights.Insight.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListInsightsStreamResponse}
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListInsightsStreamResponse;
  return proto.api.v1alpha1.insights.ListInsightsStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListInsightsStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListInsightsStreamResponse}
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.setInsights(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListInsightsStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListInsightsStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsights();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * optional Insight insights = 1;
 * @return {?proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.prototype.getInsights = function() {
  return /** @type{?proto.api.v1alpha1.insights.Insight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Insight|undefined} value
 * @return {!proto.api.v1alpha1.insights.ListInsightsStreamResponse} returns this
*/
proto.api.v1alpha1.insights.ListInsightsStreamResponse.prototype.setInsights = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.ListInsightsStreamResponse} returns this
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.prototype.clearInsights = function() {
  return this.setInsights(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.ListInsightsStreamResponse.prototype.hasInsights = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ListInsightsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListInsightsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListInsightsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListInsightsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListInsightsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
insightsList: jspb.Message.toObjectList(msg.getInsightsList(),
    proto.api.v1alpha1.insights.Insight.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListInsightsResponse}
 */
proto.api.v1alpha1.insights.ListInsightsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListInsightsResponse;
  return proto.api.v1alpha1.insights.ListInsightsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListInsightsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListInsightsResponse}
 */
proto.api.v1alpha1.insights.ListInsightsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.addInsights(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListInsightsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListInsightsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListInsightsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListInsightsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Insight insights = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.Insight>}
 */
proto.api.v1alpha1.insights.ListInsightsResponse.prototype.getInsightsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.Insight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.Insight>} value
 * @return {!proto.api.v1alpha1.insights.ListInsightsResponse} returns this
*/
proto.api.v1alpha1.insights.ListInsightsResponse.prototype.setInsightsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.Insight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.ListInsightsResponse.prototype.addInsights = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.Insight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ListInsightsResponse} returns this
 */
proto.api.v1alpha1.insights.ListInsightsResponse.prototype.clearInsightsList = function() {
  return this.setInsightsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListOrgInsightsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListOrgInsightsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListOrgInsightsRequest}
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListOrgInsightsRequest;
  return proto.api.v1alpha1.insights.ListOrgInsightsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListOrgInsightsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListOrgInsightsRequest}
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListOrgInsightsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListOrgInsightsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.ListOrgInsightsRequest} returns this
 */
proto.api.v1alpha1.insights.ListOrgInsightsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListOrgInsightsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListOrgInsightsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
insightsList: jspb.Message.toObjectList(msg.getInsightsList(),
    proto.api.v1alpha1.insights.Insight.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListOrgInsightsResponse}
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListOrgInsightsResponse;
  return proto.api.v1alpha1.insights.ListOrgInsightsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListOrgInsightsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListOrgInsightsResponse}
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.addInsights(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListOrgInsightsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListOrgInsightsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Insight insights = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.Insight>}
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.prototype.getInsightsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.Insight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.Insight>} value
 * @return {!proto.api.v1alpha1.insights.ListOrgInsightsResponse} returns this
*/
proto.api.v1alpha1.insights.ListOrgInsightsResponse.prototype.setInsightsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.Insight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.prototype.addInsights = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.Insight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ListOrgInsightsResponse} returns this
 */
proto.api.v1alpha1.insights.ListOrgInsightsResponse.prototype.clearInsightsList = function() {
  return this.setInsightsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.UpdateInsightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.UpdateInsightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
insight: (f = msg.getInsight()) && proto.api.v1alpha1.insights.Insight.toObject(includeInstance, f),
updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.UpdateInsightRequest}
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.UpdateInsightRequest;
  return proto.api.v1alpha1.insights.UpdateInsightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.UpdateInsightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.UpdateInsightRequest}
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.setInsight(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.UpdateInsightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.UpdateInsightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Insight insight = 1;
 * @return {?proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.getInsight = function() {
  return /** @type{?proto.api.v1alpha1.insights.Insight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Insight|undefined} value
 * @return {!proto.api.v1alpha1.insights.UpdateInsightRequest} returns this
*/
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.setInsight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UpdateInsightRequest} returns this
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.clearInsight = function() {
  return this.setInsight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.hasInsight = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.insights.UpdateInsightRequest} returns this
*/
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UpdateInsightRequest} returns this
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UpdateInsightRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.UpdateInsightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.UpdateInsightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
insight: (f = msg.getInsight()) && proto.api.v1alpha1.insights.Insight.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.UpdateInsightResponse}
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.UpdateInsightResponse;
  return proto.api.v1alpha1.insights.UpdateInsightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.UpdateInsightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.UpdateInsightResponse}
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.setInsight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.UpdateInsightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.UpdateInsightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * optional Insight insight = 1;
 * @return {?proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.prototype.getInsight = function() {
  return /** @type{?proto.api.v1alpha1.insights.Insight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Insight|undefined} value
 * @return {!proto.api.v1alpha1.insights.UpdateInsightResponse} returns this
*/
proto.api.v1alpha1.insights.UpdateInsightResponse.prototype.setInsight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UpdateInsightResponse} returns this
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.prototype.clearInsight = function() {
  return this.setInsight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UpdateInsightResponse.prototype.hasInsight = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.DeleteInsightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.DeleteInsightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
insightId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
resourceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.DeleteInsightRequest}
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.DeleteInsightRequest;
  return proto.api.v1alpha1.insights.DeleteInsightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.DeleteInsightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.DeleteInsightRequest}
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInsightId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.DeleteInsightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.DeleteInsightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 insight_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.prototype.getInsightId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.DeleteInsightRequest} returns this
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.prototype.setInsightId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string resource_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.DeleteInsightRequest} returns this
 */
proto.api.v1alpha1.insights.DeleteInsightRequest.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.DeleteInsightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.DeleteInsightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
insight: (f = msg.getInsight()) && proto.api.v1alpha1.insights.Insight.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.DeleteInsightResponse}
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.DeleteInsightResponse;
  return proto.api.v1alpha1.insights.DeleteInsightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.DeleteInsightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.DeleteInsightResponse}
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.setInsight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.DeleteInsightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.DeleteInsightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * optional Insight insight = 1;
 * @return {?proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.prototype.getInsight = function() {
  return /** @type{?proto.api.v1alpha1.insights.Insight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Insight|undefined} value
 * @return {!proto.api.v1alpha1.insights.DeleteInsightResponse} returns this
*/
proto.api.v1alpha1.insights.DeleteInsightResponse.prototype.setInsight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.DeleteInsightResponse} returns this
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.prototype.clearInsight = function() {
  return this.setInsight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.DeleteInsightResponse.prototype.hasInsight = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetInsightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetInsightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetInsightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetInsightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
insightId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
resourceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetInsightRequest}
 */
proto.api.v1alpha1.insights.GetInsightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetInsightRequest;
  return proto.api.v1alpha1.insights.GetInsightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetInsightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetInsightRequest}
 */
proto.api.v1alpha1.insights.GetInsightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInsightId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetInsightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetInsightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetInsightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetInsightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 insight_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetInsightRequest.prototype.getInsightId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetInsightRequest} returns this
 */
proto.api.v1alpha1.insights.GetInsightRequest.prototype.setInsightId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string resource_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetInsightRequest.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetInsightRequest} returns this
 */
proto.api.v1alpha1.insights.GetInsightRequest.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetInsightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetInsightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetInsightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetInsightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
insight: (f = msg.getInsight()) && proto.api.v1alpha1.insights.Insight.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetInsightResponse}
 */
proto.api.v1alpha1.insights.GetInsightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetInsightResponse;
  return proto.api.v1alpha1.insights.GetInsightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetInsightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetInsightResponse}
 */
proto.api.v1alpha1.insights.GetInsightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Insight;
      reader.readMessage(value,proto.api.v1alpha1.insights.Insight.deserializeBinaryFromReader);
      msg.setInsight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetInsightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetInsightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetInsightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetInsightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Insight.serializeBinaryToWriter
    );
  }
};


/**
 * optional Insight insight = 1;
 * @return {?proto.api.v1alpha1.insights.Insight}
 */
proto.api.v1alpha1.insights.GetInsightResponse.prototype.getInsight = function() {
  return /** @type{?proto.api.v1alpha1.insights.Insight} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Insight, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Insight|undefined} value
 * @return {!proto.api.v1alpha1.insights.GetInsightResponse} returns this
*/
proto.api.v1alpha1.insights.GetInsightResponse.prototype.setInsight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.GetInsightResponse} returns this
 */
proto.api.v1alpha1.insights.GetInsightResponse.prototype.clearInsight = function() {
  return this.setInsight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.GetInsightResponse.prototype.hasInsight = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetVfsSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
aliasName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaRequest}
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetVfsSchemaRequest;
  return proto.api.v1alpha1.insights.GetVfsSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaRequest}
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAliasName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetVfsSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAliasName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string alias_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest.prototype.getAliasName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaRequest} returns this
 */
proto.api.v1alpha1.insights.GetVfsSchemaRequest.prototype.setAliasName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetVfsSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.toObject, includeInstance),
vfsDescription: jspb.Message.getFieldWithDefault(msg, 2, ""),
aliasName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetVfsSchemaResponse;
  return proto.api.v1alpha1.insights.GetVfsSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field;
      reader.readMessage(value,proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVfsDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAliasName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetVfsSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.serializeBinaryToWriter
    );
  }
  f = message.getVfsDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAliasName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.toObject = function(includeInstance, msg) {
  var f, obj = {
columnName: jspb.Message.getFieldWithDefault(msg, 1, ""),
columnType: jspb.Message.getFieldWithDefault(msg, 2, 0),
columnDescription: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field;
  return proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.InsightVfsSchemaType} */ (reader.readEnum());
      msg.setColumnType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColumnType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getColumnDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string column_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field} returns this
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.InsightVfsSchemaType column_type = 2;
 * @return {!proto.api.commons.InsightVfsSchemaType}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.prototype.getColumnType = function() {
  return /** @type {!proto.api.commons.InsightVfsSchemaType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.InsightVfsSchemaType} value
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field} returns this
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.prototype.setColumnType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string column_description = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.prototype.getColumnDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field} returns this
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field.prototype.setColumnDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Field fields = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field>}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field>} value
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse} returns this
*/
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse} returns this
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * optional string vfs_description = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.getVfsDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse} returns this
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.setVfsDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string alias_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.getAliasName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse} returns this
 */
proto.api.v1alpha1.insights.GetVfsSchemaResponse.prototype.setAliasName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListVfsesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListVfsesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListVfsesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListVfsesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListVfsesRequest}
 */
proto.api.v1alpha1.insights.ListVfsesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListVfsesRequest;
  return proto.api.v1alpha1.insights.ListVfsesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListVfsesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListVfsesRequest}
 */
proto.api.v1alpha1.insights.ListVfsesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListVfsesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListVfsesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListVfsesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListVfsesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ListVfsesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListVfsesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListVfsesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListVfsesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListVfsesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
aliasesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListVfsesResponse}
 */
proto.api.v1alpha1.insights.ListVfsesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListVfsesResponse;
  return proto.api.v1alpha1.insights.ListVfsesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListVfsesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListVfsesResponse}
 */
proto.api.v1alpha1.insights.ListVfsesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAliases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListVfsesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListVfsesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListVfsesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListVfsesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAliasesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string aliases = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.ListVfsesResponse.prototype.getAliasesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.ListVfsesResponse} returns this
 */
proto.api.v1alpha1.insights.ListVfsesResponse.prototype.setAliasesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.ListVfsesResponse} returns this
 */
proto.api.v1alpha1.insights.ListVfsesResponse.prototype.addAliases = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ListVfsesResponse} returns this
 */
proto.api.v1alpha1.insights.ListVfsesResponse.prototype.clearAliasesList = function() {
  return this.setAliasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListVfsSchemasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListVfsSchemasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListVfsSchemasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListVfsSchemasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListVfsSchemasRequest}
 */
proto.api.v1alpha1.insights.ListVfsSchemasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListVfsSchemasRequest;
  return proto.api.v1alpha1.insights.ListVfsSchemasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListVfsSchemasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListVfsSchemasRequest}
 */
proto.api.v1alpha1.insights.ListVfsSchemasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListVfsSchemasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListVfsSchemasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListVfsSchemasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListVfsSchemasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListVfsSchemasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListVfsSchemasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
vfsSchemasList: jspb.Message.toObjectList(msg.getVfsSchemasList(),
    proto.api.v1alpha1.insights.GetVfsSchemaResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListVfsSchemasResponse}
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListVfsSchemasResponse;
  return proto.api.v1alpha1.insights.ListVfsSchemasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListVfsSchemasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListVfsSchemasResponse}
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.GetVfsSchemaResponse;
      reader.readMessage(value,proto.api.v1alpha1.insights.GetVfsSchemaResponse.deserializeBinaryFromReader);
      msg.addVfsSchemas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListVfsSchemasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListVfsSchemasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVfsSchemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.GetVfsSchemaResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GetVfsSchemaResponse vfs_schemas = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.GetVfsSchemaResponse>}
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.prototype.getVfsSchemasList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.GetVfsSchemaResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.GetVfsSchemaResponse, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.GetVfsSchemaResponse>} value
 * @return {!proto.api.v1alpha1.insights.ListVfsSchemasResponse} returns this
*/
proto.api.v1alpha1.insights.ListVfsSchemasResponse.prototype.setVfsSchemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.GetVfsSchemaResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.GetVfsSchemaResponse}
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.prototype.addVfsSchemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.GetVfsSchemaResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ListVfsSchemasResponse} returns this
 */
proto.api.v1alpha1.insights.ListVfsSchemasResponse.prototype.clearVfsSchemasList = function() {
  return this.setVfsSchemasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.TableVisualization.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.TableVisualization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.TableVisualization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.TableVisualization.toObject = function(includeInstance, msg) {
  var f, obj = {
tableColumnDetailsList: jspb.Message.toObjectList(msg.getTableColumnDetailsList(),
    proto.api.v1alpha1.insights.TableColumnConfig.toObject, includeInstance),
delimiter: jspb.Message.getFieldWithDefault(msg, 2, ""),
quoteCharacter: jspb.Message.getFieldWithDefault(msg, 3, 0),
noHeader: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.TableVisualization}
 */
proto.api.v1alpha1.insights.TableVisualization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.TableVisualization;
  return proto.api.v1alpha1.insights.TableVisualization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.TableVisualization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.TableVisualization}
 */
proto.api.v1alpha1.insights.TableVisualization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.TableColumnConfig;
      reader.readMessage(value,proto.api.v1alpha1.insights.TableColumnConfig.deserializeBinaryFromReader);
      msg.addTableColumnDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelimiter(value);
      break;
    case 3:
      var value = /** @type {!proto.api.v1alpha1.insights.QuoteCharacter} */ (reader.readEnum());
      msg.setQuoteCharacter(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.TableVisualization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.TableVisualization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.TableVisualization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableColumnDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.TableColumnConfig.serializeBinaryToWriter
    );
  }
  f = message.getDelimiter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuoteCharacter();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getNoHeader();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated TableColumnConfig table_column_details = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.TableColumnConfig>}
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.getTableColumnDetailsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.TableColumnConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.TableColumnConfig, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.TableColumnConfig>} value
 * @return {!proto.api.v1alpha1.insights.TableVisualization} returns this
*/
proto.api.v1alpha1.insights.TableVisualization.prototype.setTableColumnDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.TableColumnConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig}
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.addTableColumnDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.TableColumnConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.TableVisualization} returns this
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.clearTableColumnDetailsList = function() {
  return this.setTableColumnDetailsList([]);
};


/**
 * optional string delimiter = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.getDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.TableVisualization} returns this
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.setDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional QuoteCharacter quote_character = 3;
 * @return {!proto.api.v1alpha1.insights.QuoteCharacter}
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.getQuoteCharacter = function() {
  return /** @type {!proto.api.v1alpha1.insights.QuoteCharacter} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.v1alpha1.insights.QuoteCharacter} value
 * @return {!proto.api.v1alpha1.insights.TableVisualization} returns this
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.setQuoteCharacter = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool no_header = 4;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.getNoHeader = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.TableVisualization} returns this
 */
proto.api.v1alpha1.insights.TableVisualization.prototype.setNoHeader = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.TableColumnConfig.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.TableColumnConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.TableColumnConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.TableColumnConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
columnName: jspb.Message.getFieldWithDefault(msg, 1, ""),
columnWidth: jspb.Message.getFieldWithDefault(msg, 2, 0),
hideColumn: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
renamedAs: jspb.Message.getFieldWithDefault(msg, 4, ""),
operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.api.v1alpha1.insights.ColumnOperation.toObject, includeInstance),
columnSummary: jspb.Message.getFieldWithDefault(msg, 6, 0),
description: jspb.Message.getFieldWithDefault(msg, 7, ""),
sortDirection: jspb.Message.getFieldWithDefault(msg, 8, 0),
insightContextualAction: (f = msg.getInsightContextualAction()) && proto.api.v1alpha1.insights.InsightContextualAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig}
 */
proto.api.v1alpha1.insights.TableColumnConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.TableColumnConfig;
  return proto.api.v1alpha1.insights.TableColumnConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.TableColumnConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig}
 */
proto.api.v1alpha1.insights.TableColumnConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setColumnWidth(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHideColumn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRenamedAs(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.insights.ColumnOperation;
      reader.readMessage(value,proto.api.v1alpha1.insights.ColumnOperation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    case 6:
      var value = /** @type {!proto.api.v1alpha1.insights.OutputConfigurationColumnSummaryType} */ (reader.readEnum());
      msg.setColumnSummary(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = /** @type {!proto.api.v1alpha1.insights.ColumnSort} */ (reader.readEnum());
      msg.setSortDirection(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.insights.InsightContextualAction;
      reader.readMessage(value,proto.api.v1alpha1.insights.InsightContextualAction.deserializeBinaryFromReader);
      msg.setInsightContextualAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.TableColumnConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.TableColumnConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.TableColumnConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColumnWidth();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHideColumn();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRenamedAs();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.v1alpha1.insights.ColumnOperation.serializeBinaryToWriter
    );
  }
  f = message.getColumnSummary();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSortDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getInsightContextualAction();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.insights.InsightContextualAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional string column_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 column_width = 2;
 * @return {number}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getColumnWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setColumnWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool hide_column = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getHideColumn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setHideColumn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string renamed_as = 4;
 * @return {string}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getRenamedAs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setRenamedAs = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated ColumnOperation operations = 5;
 * @return {!Array<!proto.api.v1alpha1.insights.ColumnOperation>}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.ColumnOperation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.ColumnOperation, 5));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.ColumnOperation>} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
*/
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.ColumnOperation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.ColumnOperation}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.v1alpha1.insights.ColumnOperation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional OutputConfigurationColumnSummaryType column_summary = 6;
 * @return {!proto.api.v1alpha1.insights.OutputConfigurationColumnSummaryType}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getColumnSummary = function() {
  return /** @type {!proto.api.v1alpha1.insights.OutputConfigurationColumnSummaryType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.v1alpha1.insights.OutputConfigurationColumnSummaryType} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setColumnSummary = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional ColumnSort sort_direction = 8;
 * @return {!proto.api.v1alpha1.insights.ColumnSort}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getSortDirection = function() {
  return /** @type {!proto.api.v1alpha1.insights.ColumnSort} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.v1alpha1.insights.ColumnSort} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setSortDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional InsightContextualAction insight_contextual_action = 9;
 * @return {?proto.api.v1alpha1.insights.InsightContextualAction}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.getInsightContextualAction = function() {
  return /** @type{?proto.api.v1alpha1.insights.InsightContextualAction} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.InsightContextualAction, 9));
};


/**
 * @param {?proto.api.v1alpha1.insights.InsightContextualAction|undefined} value
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
*/
proto.api.v1alpha1.insights.TableColumnConfig.prototype.setInsightContextualAction = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.TableColumnConfig} returns this
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.clearInsightContextualAction = function() {
  return this.setInsightContextualAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.TableColumnConfig.prototype.hasInsightContextualAction = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.FormatSeries.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.FormatSeries.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.FormatSeries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.FormatSeries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.FormatSeries.toObject = function(includeInstance, msg) {
  var f, obj = {
formatPartsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.FormatSeries}
 */
proto.api.v1alpha1.insights.FormatSeries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.FormatSeries;
  return proto.api.v1alpha1.insights.FormatSeries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.FormatSeries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.FormatSeries}
 */
proto.api.v1alpha1.insights.FormatSeries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFormatParts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.FormatSeries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.FormatSeries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.FormatSeries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.FormatSeries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatPartsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string format_parts = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.FormatSeries.prototype.getFormatPartsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.FormatSeries} returns this
 */
proto.api.v1alpha1.insights.FormatSeries.prototype.setFormatPartsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.FormatSeries} returns this
 */
proto.api.v1alpha1.insights.FormatSeries.prototype.addFormatParts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.FormatSeries} returns this
 */
proto.api.v1alpha1.insights.FormatSeries.prototype.clearFormatPartsList = function() {
  return this.setFormatPartsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.PadOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.PadOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.PadOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.PadOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
padCharacter: jspb.Message.getFieldWithDefault(msg, 1, ""),
padLeft: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
padSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.PadOperation}
 */
proto.api.v1alpha1.insights.PadOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.PadOperation;
  return proto.api.v1alpha1.insights.PadOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.PadOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.PadOperation}
 */
proto.api.v1alpha1.insights.PadOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPadCharacter(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPadLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPadSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.PadOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.PadOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.PadOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.PadOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPadCharacter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPadLeft();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPadSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string pad_character = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.PadOperation.prototype.getPadCharacter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.PadOperation} returns this
 */
proto.api.v1alpha1.insights.PadOperation.prototype.setPadCharacter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool pad_left = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.PadOperation.prototype.getPadLeft = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.PadOperation} returns this
 */
proto.api.v1alpha1.insights.PadOperation.prototype.setPadLeft = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 pad_size = 3;
 * @return {number}
 */
proto.api.v1alpha1.insights.PadOperation.prototype.getPadSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.insights.PadOperation} returns this
 */
proto.api.v1alpha1.insights.PadOperation.prototype.setPadSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.insights.ColumnOperation.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.ColumnOperation.OperationValueCase = {
  OPERATION_VALUE_NOT_SET: 0,
  FLOAT_VALUE: 2,
  FORMAT_SERIES: 3,
  PAD_OPERATION: 4
};

/**
 * @return {proto.api.v1alpha1.insights.ColumnOperation.OperationValueCase}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.getOperationValueCase = function() {
  return /** @type {proto.api.v1alpha1.insights.ColumnOperation.OperationValueCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.insights.ColumnOperation.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ColumnOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ColumnOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ColumnOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
operationType: jspb.Message.getFieldWithDefault(msg, 1, 0),
floatValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
formatSeries: (f = msg.getFormatSeries()) && proto.api.v1alpha1.insights.FormatSeries.toObject(includeInstance, f),
padOperation: (f = msg.getPadOperation()) && proto.api.v1alpha1.insights.PadOperation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ColumnOperation}
 */
proto.api.v1alpha1.insights.ColumnOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ColumnOperation;
  return proto.api.v1alpha1.insights.ColumnOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ColumnOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ColumnOperation}
 */
proto.api.v1alpha1.insights.ColumnOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.v1alpha1.insights.OperationType} */ (reader.readEnum());
      msg.setOperationType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFloatValue(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.FormatSeries;
      reader.readMessage(value,proto.api.v1alpha1.insights.FormatSeries.deserializeBinaryFromReader);
      msg.setFormatSeries(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.insights.PadOperation;
      reader.readMessage(value,proto.api.v1alpha1.insights.PadOperation.deserializeBinaryFromReader);
      msg.setPadOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ColumnOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ColumnOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ColumnOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getFormatSeries();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.insights.FormatSeries.serializeBinaryToWriter
    );
  }
  f = message.getPadOperation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.insights.PadOperation.serializeBinaryToWriter
    );
  }
};


/**
 * optional OperationType operation_type = 1;
 * @return {!proto.api.v1alpha1.insights.OperationType}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.getOperationType = function() {
  return /** @type {!proto.api.v1alpha1.insights.OperationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.v1alpha1.insights.OperationType} value
 * @return {!proto.api.v1alpha1.insights.ColumnOperation} returns this
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.setOperationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double float_value = 2;
 * @return {number}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.getFloatValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.insights.ColumnOperation} returns this
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.setFloatValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.insights.ColumnOperation.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.insights.ColumnOperation} returns this
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.clearFloatValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.insights.ColumnOperation.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.hasFloatValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FormatSeries format_series = 3;
 * @return {?proto.api.v1alpha1.insights.FormatSeries}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.getFormatSeries = function() {
  return /** @type{?proto.api.v1alpha1.insights.FormatSeries} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.FormatSeries, 3));
};


/**
 * @param {?proto.api.v1alpha1.insights.FormatSeries|undefined} value
 * @return {!proto.api.v1alpha1.insights.ColumnOperation} returns this
*/
proto.api.v1alpha1.insights.ColumnOperation.prototype.setFormatSeries = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api.v1alpha1.insights.ColumnOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.ColumnOperation} returns this
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.clearFormatSeries = function() {
  return this.setFormatSeries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.hasFormatSeries = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PadOperation pad_operation = 4;
 * @return {?proto.api.v1alpha1.insights.PadOperation}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.getPadOperation = function() {
  return /** @type{?proto.api.v1alpha1.insights.PadOperation} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.PadOperation, 4));
};


/**
 * @param {?proto.api.v1alpha1.insights.PadOperation|undefined} value
 * @return {!proto.api.v1alpha1.insights.ColumnOperation} returns this
*/
proto.api.v1alpha1.insights.ColumnOperation.prototype.setPadOperation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v1alpha1.insights.ColumnOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.ColumnOperation} returns this
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.clearPadOperation = function() {
  return this.setPadOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.ColumnOperation.prototype.hasPadOperation = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.insights.InsightContextualAction.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.InsightContextualAction.ActionCase = {
  ACTION_NOT_SET: 0,
  LINK: 2,
  COMPONENT: 3,
  DRILL_THROUGH: 4
};

/**
 * @return {proto.api.v1alpha1.insights.InsightContextualAction.ActionCase}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.getActionCase = function() {
  return /** @type {proto.api.v1alpha1.insights.InsightContextualAction.ActionCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.insights.InsightContextualAction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.InsightContextualAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.InsightContextualAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.InsightContextualAction.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0),
link: (f = msg.getLink()) && proto.api.v1alpha1.insights.LinkAction.toObject(includeInstance, f),
component: (f = msg.getComponent()) && proto.api.v1alpha1.insights.ComponentAction.toObject(includeInstance, f),
drillThrough: (f = msg.getDrillThrough()) && proto.api.v1alpha1.insights.DrillThroughAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction}
 */
proto.api.v1alpha1.insights.InsightContextualAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.InsightContextualAction;
  return proto.api.v1alpha1.insights.InsightContextualAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.InsightContextualAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction}
 */
proto.api.v1alpha1.insights.InsightContextualAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.v1alpha1.insights.InsightContextualActionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.insights.LinkAction;
      reader.readMessage(value,proto.api.v1alpha1.insights.LinkAction.deserializeBinaryFromReader);
      msg.setLink(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.ComponentAction;
      reader.readMessage(value,proto.api.v1alpha1.insights.ComponentAction.deserializeBinaryFromReader);
      msg.setComponent(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.insights.DrillThroughAction;
      reader.readMessage(value,proto.api.v1alpha1.insights.DrillThroughAction.deserializeBinaryFromReader);
      msg.setDrillThrough(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.InsightContextualAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.InsightContextualAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.InsightContextualAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.insights.LinkAction.serializeBinaryToWriter
    );
  }
  f = message.getComponent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.insights.ComponentAction.serializeBinaryToWriter
    );
  }
  f = message.getDrillThrough();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.insights.DrillThroughAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional InsightContextualActionType type = 1;
 * @return {!proto.api.v1alpha1.insights.InsightContextualActionType}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.getType = function() {
  return /** @type {!proto.api.v1alpha1.insights.InsightContextualActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.v1alpha1.insights.InsightContextualActionType} value
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction} returns this
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional LinkAction link = 2;
 * @return {?proto.api.v1alpha1.insights.LinkAction}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.getLink = function() {
  return /** @type{?proto.api.v1alpha1.insights.LinkAction} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.LinkAction, 2));
};


/**
 * @param {?proto.api.v1alpha1.insights.LinkAction|undefined} value
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction} returns this
*/
proto.api.v1alpha1.insights.InsightContextualAction.prototype.setLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.v1alpha1.insights.InsightContextualAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction} returns this
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.clearLink = function() {
  return this.setLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.hasLink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ComponentAction component = 3;
 * @return {?proto.api.v1alpha1.insights.ComponentAction}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.getComponent = function() {
  return /** @type{?proto.api.v1alpha1.insights.ComponentAction} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.ComponentAction, 3));
};


/**
 * @param {?proto.api.v1alpha1.insights.ComponentAction|undefined} value
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction} returns this
*/
proto.api.v1alpha1.insights.InsightContextualAction.prototype.setComponent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api.v1alpha1.insights.InsightContextualAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction} returns this
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.clearComponent = function() {
  return this.setComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.hasComponent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DrillThroughAction drill_through = 4;
 * @return {?proto.api.v1alpha1.insights.DrillThroughAction}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.getDrillThrough = function() {
  return /** @type{?proto.api.v1alpha1.insights.DrillThroughAction} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.DrillThroughAction, 4));
};


/**
 * @param {?proto.api.v1alpha1.insights.DrillThroughAction|undefined} value
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction} returns this
*/
proto.api.v1alpha1.insights.InsightContextualAction.prototype.setDrillThrough = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v1alpha1.insights.InsightContextualAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.InsightContextualAction} returns this
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.clearDrillThrough = function() {
  return this.setDrillThrough(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.InsightContextualAction.prototype.hasDrillThrough = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.LinkAction.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.LinkAction.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.LinkAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.LinkAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.LinkAction.toObject = function(includeInstance, msg) {
  var f, obj = {
linkElementsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
componentValueMap: (f = msg.getComponentValueMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.LinkAction}
 */
proto.api.v1alpha1.insights.LinkAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.LinkAction;
  return proto.api.v1alpha1.insights.LinkAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.LinkAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.LinkAction}
 */
proto.api.v1alpha1.insights.LinkAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLinkElements(value);
      break;
    case 2:
      var value = msg.getComponentValueMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.LinkAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.LinkAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.LinkAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.LinkAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinkElementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getComponentValueMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * repeated string link_elements = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.LinkAction.prototype.getLinkElementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.LinkAction} returns this
 */
proto.api.v1alpha1.insights.LinkAction.prototype.setLinkElementsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.LinkAction} returns this
 */
proto.api.v1alpha1.insights.LinkAction.prototype.addLinkElements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.LinkAction} returns this
 */
proto.api.v1alpha1.insights.LinkAction.prototype.clearLinkElementsList = function() {
  return this.setLinkElementsList([]);
};


/**
 * map<string, string> component_value = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.insights.LinkAction.prototype.getComponentValueMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.insights.LinkAction} returns this
 */
proto.api.v1alpha1.insights.LinkAction.prototype.clearComponentValueMap = function() {
  this.getComponentValueMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ComponentAction.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ComponentAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ComponentAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ComponentAction.toObject = function(includeInstance, msg) {
  var f, obj = {
componentName: jspb.Message.getFieldWithDefault(msg, 1, ""),
componentValueMap: (f = msg.getComponentValueMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ComponentAction}
 */
proto.api.v1alpha1.insights.ComponentAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ComponentAction;
  return proto.api.v1alpha1.insights.ComponentAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ComponentAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ComponentAction}
 */
proto.api.v1alpha1.insights.ComponentAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponentName(value);
      break;
    case 2:
      var value = msg.getComponentValueMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ComponentAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ComponentAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ComponentAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ComponentAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponentName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getComponentValueMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string component_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.ComponentAction.prototype.getComponentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.ComponentAction} returns this
 */
proto.api.v1alpha1.insights.ComponentAction.prototype.setComponentName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> component_value = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.insights.ComponentAction.prototype.getComponentValueMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.insights.ComponentAction} returns this
 */
proto.api.v1alpha1.insights.ComponentAction.prototype.clearComponentValueMap = function() {
  this.getComponentValueMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.DrillThroughAction.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.DrillThroughAction.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.DrillThroughAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.DrillThroughAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DrillThroughAction.toObject = function(includeInstance, msg) {
  var f, obj = {
insightResourceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
drillThroughParametersList: jspb.Message.toObjectList(msg.getDrillThroughParametersList(),
    proto.api.v1alpha1.insights.DrillThroughParameter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.DrillThroughAction}
 */
proto.api.v1alpha1.insights.DrillThroughAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.DrillThroughAction;
  return proto.api.v1alpha1.insights.DrillThroughAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.DrillThroughAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.DrillThroughAction}
 */
proto.api.v1alpha1.insights.DrillThroughAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsightResourceId(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.insights.DrillThroughParameter;
      reader.readMessage(value,proto.api.v1alpha1.insights.DrillThroughParameter.deserializeBinaryFromReader);
      msg.addDrillThroughParameters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.DrillThroughAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.DrillThroughAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.DrillThroughAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DrillThroughAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDrillThroughParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.insights.DrillThroughParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string insight_resource_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.DrillThroughAction.prototype.getInsightResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.DrillThroughAction} returns this
 */
proto.api.v1alpha1.insights.DrillThroughAction.prototype.setInsightResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated DrillThroughParameter drill_through_parameters = 2;
 * @return {!Array<!proto.api.v1alpha1.insights.DrillThroughParameter>}
 */
proto.api.v1alpha1.insights.DrillThroughAction.prototype.getDrillThroughParametersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.DrillThroughParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.DrillThroughParameter, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.DrillThroughParameter>} value
 * @return {!proto.api.v1alpha1.insights.DrillThroughAction} returns this
*/
proto.api.v1alpha1.insights.DrillThroughAction.prototype.setDrillThroughParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.DrillThroughParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.DrillThroughParameter}
 */
proto.api.v1alpha1.insights.DrillThroughAction.prototype.addDrillThroughParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.insights.DrillThroughParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.DrillThroughAction} returns this
 */
proto.api.v1alpha1.insights.DrillThroughAction.prototype.clearDrillThroughParametersList = function() {
  return this.setDrillThroughParametersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.DrillThroughParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.DrillThroughParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.DrillThroughParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DrillThroughParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
parameterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
columnName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.DrillThroughParameter}
 */
proto.api.v1alpha1.insights.DrillThroughParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.DrillThroughParameter;
  return proto.api.v1alpha1.insights.DrillThroughParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.DrillThroughParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.DrillThroughParameter}
 */
proto.api.v1alpha1.insights.DrillThroughParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameterName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.DrillThroughParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.DrillThroughParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.DrillThroughParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DrillThroughParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string parameter_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.DrillThroughParameter.prototype.getParameterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.DrillThroughParameter} returns this
 */
proto.api.v1alpha1.insights.DrillThroughParameter.prototype.setParameterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string column_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.DrillThroughParameter.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.DrillThroughParameter} returns this
 */
proto.api.v1alpha1.insights.DrillThroughParameter.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.insights.OutputConfiguration.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.OutputConfiguration.BodyCase = {
  BODY_NOT_SET: 0,
  BLOB: 7,
  TABLE_VISUALIZATION: 8
};

/**
 * @return {proto.api.v1alpha1.insights.OutputConfiguration.BodyCase}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getBodyCase = function() {
  return /** @type {proto.api.v1alpha1.insights.OutputConfiguration.BodyCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.insights.OutputConfiguration.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.OutputConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.OutputConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.OutputConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
resourceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
outputConfigurationTitle: jspb.Message.getFieldWithDefault(msg, 3, ""),
outputConfigurationType: jspb.Message.getFieldWithDefault(msg, 4, 0),
insightResourceId: jspb.Message.getFieldWithDefault(msg, 5, ""),
isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
blob: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
tableVisualization: (f = msg.getTableVisualization()) && proto.api.v1alpha1.insights.TableVisualization.toObject(includeInstance, f),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.OutputConfiguration;
  return proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.OutputConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputConfigurationTitle(value);
      break;
    case 4:
      var value = /** @type {!proto.api.v1alpha1.insights.OutputConfigurationType} */ (reader.readEnum());
      msg.setOutputConfigurationType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsightResourceId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlob(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.insights.TableVisualization;
      reader.readMessage(value,proto.api.v1alpha1.insights.TableVisualization.deserializeBinaryFromReader);
      msg.setTableVisualization(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.OutputConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputConfigurationTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOutputConfigurationType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getInsightResourceId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTableVisualization();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.insights.TableVisualization.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string output_configuration_title = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getOutputConfigurationTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setOutputConfigurationTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional OutputConfigurationType output_configuration_type = 4;
 * @return {!proto.api.v1alpha1.insights.OutputConfigurationType}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getOutputConfigurationType = function() {
  return /** @type {!proto.api.v1alpha1.insights.OutputConfigurationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.v1alpha1.insights.OutputConfigurationType} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setOutputConfigurationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string insight_resource_id = 5;
 * @return {string}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getInsightResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setInsightResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_default = 6;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string blob = 7;
 * @return {string}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getBlob = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setBlob = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.api.v1alpha1.insights.OutputConfiguration.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.clearBlob = function() {
  return jspb.Message.setOneofField(this, 7, proto.api.v1alpha1.insights.OutputConfiguration.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.hasBlob = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TableVisualization table_visualization = 8;
 * @return {?proto.api.v1alpha1.insights.TableVisualization}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getTableVisualization = function() {
  return /** @type{?proto.api.v1alpha1.insights.TableVisualization} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.TableVisualization, 8));
};


/**
 * @param {?proto.api.v1alpha1.insights.TableVisualization|undefined} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
*/
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setTableVisualization = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.api.v1alpha1.insights.OutputConfiguration.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.clearTableVisualization = function() {
  return this.setTableVisualization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.hasTableVisualization = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
*/
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
*/
proto.api.v1alpha1.insights.OutputConfiguration.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration} returns this
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.OutputConfiguration.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.CreateOutputConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
outputConfiguration: (f = msg.getOutputConfiguration()) && proto.api.v1alpha1.insights.OutputConfiguration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.CreateOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.CreateOutputConfigurationRequest;
  return proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.CreateOutputConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.CreateOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.OutputConfiguration;
      reader.readMessage(value,proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader);
      msg.setOutputConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.CreateOutputConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutputConfiguration output_configuration = 1;
 * @return {?proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.prototype.getOutputConfiguration = function() {
  return /** @type{?proto.api.v1alpha1.insights.OutputConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.OutputConfiguration, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.OutputConfiguration|undefined} value
 * @return {!proto.api.v1alpha1.insights.CreateOutputConfigurationRequest} returns this
*/
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.prototype.setOutputConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.CreateOutputConfigurationRequest} returns this
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.prototype.clearOutputConfiguration = function() {
  return this.setOutputConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationRequest.prototype.hasOutputConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.CreateOutputConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
outputConfiguration: (f = msg.getOutputConfiguration()) && proto.api.v1alpha1.insights.OutputConfiguration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.CreateOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.CreateOutputConfigurationResponse;
  return proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.CreateOutputConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.CreateOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.OutputConfiguration;
      reader.readMessage(value,proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader);
      msg.setOutputConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.CreateOutputConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutputConfiguration output_configuration = 1;
 * @return {?proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.prototype.getOutputConfiguration = function() {
  return /** @type{?proto.api.v1alpha1.insights.OutputConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.OutputConfiguration, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.OutputConfiguration|undefined} value
 * @return {!proto.api.v1alpha1.insights.CreateOutputConfigurationResponse} returns this
*/
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.prototype.setOutputConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.CreateOutputConfigurationResponse} returns this
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.prototype.clearOutputConfiguration = function() {
  return this.setOutputConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.CreateOutputConfigurationResponse.prototype.hasOutputConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListOutputConfigurationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
insightResourceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListOutputConfigurationsRequest}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListOutputConfigurationsRequest;
  return proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListOutputConfigurationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListOutputConfigurationsRequest}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsightResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListOutputConfigurationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string insight_resource_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.prototype.getInsightResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.ListOutputConfigurationsRequest} returns this
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsRequest.prototype.setInsightResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ListOutputConfigurationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
outputConfigurationsList: jspb.Message.toObjectList(msg.getOutputConfigurationsList(),
    proto.api.v1alpha1.insights.OutputConfiguration.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ListOutputConfigurationsResponse}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ListOutputConfigurationsResponse;
  return proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ListOutputConfigurationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ListOutputConfigurationsResponse}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.OutputConfiguration;
      reader.readMessage(value,proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader);
      msg.addOutputConfigurations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ListOutputConfigurationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputConfigurationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OutputConfiguration output_configurations = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.OutputConfiguration>}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.prototype.getOutputConfigurationsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.OutputConfiguration>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.OutputConfiguration, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.OutputConfiguration>} value
 * @return {!proto.api.v1alpha1.insights.ListOutputConfigurationsResponse} returns this
*/
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.prototype.setOutputConfigurationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.OutputConfiguration=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.prototype.addOutputConfigurations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.OutputConfiguration, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ListOutputConfigurationsResponse} returns this
 */
proto.api.v1alpha1.insights.ListOutputConfigurationsResponse.prototype.clearOutputConfigurationsList = function() {
  return this.setOutputConfigurationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
outputConfiguration: (f = msg.getOutputConfiguration()) && proto.api.v1alpha1.insights.OutputConfiguration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest;
  return proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.OutputConfiguration;
      reader.readMessage(value,proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader);
      msg.setOutputConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getOutputConfiguration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest} returns this
*/
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest} returns this
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OutputConfiguration output_configuration = 3;
 * @return {?proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.getOutputConfiguration = function() {
  return /** @type{?proto.api.v1alpha1.insights.OutputConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.OutputConfiguration, 3));
};


/**
 * @param {?proto.api.v1alpha1.insights.OutputConfiguration|undefined} value
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest} returns this
*/
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.setOutputConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest} returns this
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.clearOutputConfiguration = function() {
  return this.setOutputConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest.prototype.hasOutputConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
outputConfiguration: (f = msg.getOutputConfiguration()) && proto.api.v1alpha1.insights.OutputConfiguration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse;
  return proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.OutputConfiguration;
      reader.readMessage(value,proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader);
      msg.setOutputConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutputConfiguration output_configuration = 1;
 * @return {?proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.prototype.getOutputConfiguration = function() {
  return /** @type{?proto.api.v1alpha1.insights.OutputConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.OutputConfiguration, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.OutputConfiguration|undefined} value
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse} returns this
*/
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.prototype.setOutputConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse} returns this
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.prototype.clearOutputConfiguration = function() {
  return this.setOutputConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse.prototype.hasOutputConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
resourceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest;
  return proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest} returns this
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationRequest.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse;
  return proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeleteOutputConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetOutputConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetOutputConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
resourceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetOutputConfigurationRequest;
  return proto.api.v1alpha1.insights.GetOutputConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetOutputConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetOutputConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetOutputConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetOutputConfigurationRequest} returns this
 */
proto.api.v1alpha1.insights.GetOutputConfigurationRequest.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetOutputConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetOutputConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
outputConfiguration: (f = msg.getOutputConfiguration()) && proto.api.v1alpha1.insights.OutputConfiguration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetOutputConfigurationResponse;
  return proto.api.v1alpha1.insights.GetOutputConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetOutputConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.OutputConfiguration;
      reader.readMessage(value,proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader);
      msg.setOutputConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetOutputConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetOutputConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutputConfiguration output_configuration = 1;
 * @return {?proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.prototype.getOutputConfiguration = function() {
  return /** @type{?proto.api.v1alpha1.insights.OutputConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.OutputConfiguration, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.OutputConfiguration|undefined} value
 * @return {!proto.api.v1alpha1.insights.GetOutputConfigurationResponse} returns this
*/
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.prototype.setOutputConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.GetOutputConfigurationResponse} returns this
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.prototype.clearOutputConfiguration = function() {
  return this.setOutputConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.GetOutputConfigurationResponse.prototype.hasOutputConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
resourceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
insightResourceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest;
  return proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsightResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInsightResourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string resource_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest} returns this
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string insight_resource_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.prototype.getInsightResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest} returns this
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest.prototype.setInsightResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse;
  return proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
insightResourceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest;
  return proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsightResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInsightResourceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string insight_resource_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.prototype.getInsightResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest} returns this
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest.prototype.setInsightResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
outputConfiguration: (f = msg.getOutputConfiguration()) && proto.api.v1alpha1.insights.OutputConfiguration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse;
  return proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.OutputConfiguration;
      reader.readMessage(value,proto.api.v1alpha1.insights.OutputConfiguration.deserializeBinaryFromReader);
      msg.setOutputConfiguration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.OutputConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutputConfiguration output_configuration = 1;
 * @return {?proto.api.v1alpha1.insights.OutputConfiguration}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.prototype.getOutputConfiguration = function() {
  return /** @type{?proto.api.v1alpha1.insights.OutputConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.OutputConfiguration, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.OutputConfiguration|undefined} value
 * @return {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse} returns this
*/
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.prototype.setOutputConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse} returns this
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.prototype.clearOutputConfiguration = function() {
  return this.setOutputConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse.prototype.hasOutputConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.PipelineNode.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.PipelineNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.PipelineNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.PipelineNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.PipelineNode.toObject = function(includeInstance, msg) {
  var f, obj = {
nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.api.v1alpha1.insights.Node.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.PipelineNode}
 */
proto.api.v1alpha1.insights.PipelineNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.PipelineNode;
  return proto.api.v1alpha1.insights.PipelineNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.PipelineNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.PipelineNode}
 */
proto.api.v1alpha1.insights.PipelineNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Node;
      reader.readMessage(value,proto.api.v1alpha1.insights.Node.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.PipelineNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.PipelineNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.PipelineNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.PipelineNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Node.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Node nodes = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.Node>}
 */
proto.api.v1alpha1.insights.PipelineNode.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.Node, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.Node>} value
 * @return {!proto.api.v1alpha1.insights.PipelineNode} returns this
*/
proto.api.v1alpha1.insights.PipelineNode.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.Node}
 */
proto.api.v1alpha1.insights.PipelineNode.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.PipelineNode} returns this
 */
proto.api.v1alpha1.insights.PipelineNode.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.Node.repeatedFields_ = [4,5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.insights.Node.oneofGroups_ = [[6,7,8,9,10,11,12,13,14,15,16,17,18]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.Node.BodyCase = {
  BODY_NOT_SET: 0,
  FROM_NODE: 6,
  FILTER_NODE: 7,
  DERIVE_NODE: 8,
  GROUP_NODE: 9,
  JOIN_NODE: 10,
  SELECT_NODE: 11,
  AGGREGATE_NODE: 12,
  TAKE_NODE: 13,
  JSON_NODE: 14,
  MAP_NODE: 15,
  REPLACE_NODE: 16,
  SORT_NODE: 17,
  STRING_MANIPULATION_NODE: 18
};

/**
 * @return {proto.api.v1alpha1.insights.Node.BodyCase}
 */
proto.api.v1alpha1.insights.Node.prototype.getBodyCase = function() {
  return /** @type {proto.api.v1alpha1.insights.Node.BodyCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.insights.Node.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.Node.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.Node.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.Node} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Node.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
type: jspb.Message.getFieldWithDefault(msg, 2, ""),
title: jspb.Message.getFieldWithDefault(msg, 3, ""),
inputIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
outputIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
fromNode: (f = msg.getFromNode()) && proto.api.v1alpha1.insights.FromNode.toObject(includeInstance, f),
filterNode: (f = msg.getFilterNode()) && proto.api.v1alpha1.insights.FilterNode.toObject(includeInstance, f),
deriveNode: (f = msg.getDeriveNode()) && proto.api.v1alpha1.insights.DeriveNode.toObject(includeInstance, f),
groupNode: (f = msg.getGroupNode()) && proto.api.v1alpha1.insights.GroupNode.toObject(includeInstance, f),
joinNode: (f = msg.getJoinNode()) && proto.api.v1alpha1.insights.JoinNode.toObject(includeInstance, f),
selectNode: (f = msg.getSelectNode()) && proto.api.v1alpha1.insights.SelectNode.toObject(includeInstance, f),
aggregateNode: (f = msg.getAggregateNode()) && proto.api.v1alpha1.insights.AggregateNode.toObject(includeInstance, f),
takeNode: (f = msg.getTakeNode()) && proto.api.v1alpha1.insights.TakeNode.toObject(includeInstance, f),
jsonNode: (f = msg.getJsonNode()) && proto.api.v1alpha1.insights.JsonNode.toObject(includeInstance, f),
mapNode: (f = msg.getMapNode()) && proto.api.v1alpha1.insights.MapNode.toObject(includeInstance, f),
replaceNode: (f = msg.getReplaceNode()) && proto.api.v1alpha1.insights.ReplaceNode.toObject(includeInstance, f),
sortNode: (f = msg.getSortNode()) && proto.api.v1alpha1.insights.SortNode.toObject(includeInstance, f),
stringManipulationNode: (f = msg.getStringManipulationNode()) && proto.api.v1alpha1.insights.StringManipulationNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.Node}
 */
proto.api.v1alpha1.insights.Node.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.Node;
  return proto.api.v1alpha1.insights.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.Node}
 */
proto.api.v1alpha1.insights.Node.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addInputIds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputIds(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.insights.FromNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.FromNode.deserializeBinaryFromReader);
      msg.setFromNode(value);
      break;
    case 7:
      var value = new proto.api.v1alpha1.insights.FilterNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.FilterNode.deserializeBinaryFromReader);
      msg.setFilterNode(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.insights.DeriveNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.DeriveNode.deserializeBinaryFromReader);
      msg.setDeriveNode(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.insights.GroupNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.GroupNode.deserializeBinaryFromReader);
      msg.setGroupNode(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.insights.JoinNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.JoinNode.deserializeBinaryFromReader);
      msg.setJoinNode(value);
      break;
    case 11:
      var value = new proto.api.v1alpha1.insights.SelectNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.SelectNode.deserializeBinaryFromReader);
      msg.setSelectNode(value);
      break;
    case 12:
      var value = new proto.api.v1alpha1.insights.AggregateNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.AggregateNode.deserializeBinaryFromReader);
      msg.setAggregateNode(value);
      break;
    case 13:
      var value = new proto.api.v1alpha1.insights.TakeNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.TakeNode.deserializeBinaryFromReader);
      msg.setTakeNode(value);
      break;
    case 14:
      var value = new proto.api.v1alpha1.insights.JsonNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.JsonNode.deserializeBinaryFromReader);
      msg.setJsonNode(value);
      break;
    case 15:
      var value = new proto.api.v1alpha1.insights.MapNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.MapNode.deserializeBinaryFromReader);
      msg.setMapNode(value);
      break;
    case 16:
      var value = new proto.api.v1alpha1.insights.ReplaceNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.ReplaceNode.deserializeBinaryFromReader);
      msg.setReplaceNode(value);
      break;
    case 17:
      var value = new proto.api.v1alpha1.insights.SortNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.SortNode.deserializeBinaryFromReader);
      msg.setSortNode(value);
      break;
    case 18:
      var value = new proto.api.v1alpha1.insights.StringManipulationNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.StringManipulationNode.deserializeBinaryFromReader);
      msg.setStringManipulationNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.Node.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.Node.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.Node} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Node.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInputIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getOutputIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getFromNode();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.insights.FromNode.serializeBinaryToWriter
    );
  }
  f = message.getFilterNode();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.v1alpha1.insights.FilterNode.serializeBinaryToWriter
    );
  }
  f = message.getDeriveNode();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.insights.DeriveNode.serializeBinaryToWriter
    );
  }
  f = message.getGroupNode();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.insights.GroupNode.serializeBinaryToWriter
    );
  }
  f = message.getJoinNode();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.insights.JoinNode.serializeBinaryToWriter
    );
  }
  f = message.getSelectNode();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v1alpha1.insights.SelectNode.serializeBinaryToWriter
    );
  }
  f = message.getAggregateNode();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.api.v1alpha1.insights.AggregateNode.serializeBinaryToWriter
    );
  }
  f = message.getTakeNode();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.v1alpha1.insights.TakeNode.serializeBinaryToWriter
    );
  }
  f = message.getJsonNode();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.api.v1alpha1.insights.JsonNode.serializeBinaryToWriter
    );
  }
  f = message.getMapNode();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.api.v1alpha1.insights.MapNode.serializeBinaryToWriter
    );
  }
  f = message.getReplaceNode();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.api.v1alpha1.insights.ReplaceNode.serializeBinaryToWriter
    );
  }
  f = message.getSortNode();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.api.v1alpha1.insights.SortNode.serializeBinaryToWriter
    );
  }
  f = message.getStringManipulationNode();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.api.v1alpha1.insights.StringManipulationNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.Node.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.Node.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.Node.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string input_ids = 4;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.Node.prototype.getInputIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.setInputIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.addInputIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearInputIdsList = function() {
  return this.setInputIdsList([]);
};


/**
 * repeated string output_ids = 5;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.Node.prototype.getOutputIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.setOutputIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.addOutputIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearOutputIdsList = function() {
  return this.setOutputIdsList([]);
};


/**
 * optional FromNode from_node = 6;
 * @return {?proto.api.v1alpha1.insights.FromNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getFromNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.FromNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.FromNode, 6));
};


/**
 * @param {?proto.api.v1alpha1.insights.FromNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setFromNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearFromNode = function() {
  return this.setFromNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasFromNode = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FilterNode filter_node = 7;
 * @return {?proto.api.v1alpha1.insights.FilterNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getFilterNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.FilterNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.FilterNode, 7));
};


/**
 * @param {?proto.api.v1alpha1.insights.FilterNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setFilterNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearFilterNode = function() {
  return this.setFilterNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasFilterNode = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DeriveNode derive_node = 8;
 * @return {?proto.api.v1alpha1.insights.DeriveNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getDeriveNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.DeriveNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.DeriveNode, 8));
};


/**
 * @param {?proto.api.v1alpha1.insights.DeriveNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setDeriveNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearDeriveNode = function() {
  return this.setDeriveNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasDeriveNode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional GroupNode group_node = 9;
 * @return {?proto.api.v1alpha1.insights.GroupNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getGroupNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.GroupNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.GroupNode, 9));
};


/**
 * @param {?proto.api.v1alpha1.insights.GroupNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setGroupNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearGroupNode = function() {
  return this.setGroupNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasGroupNode = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional JoinNode join_node = 10;
 * @return {?proto.api.v1alpha1.insights.JoinNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getJoinNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.JoinNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.JoinNode, 10));
};


/**
 * @param {?proto.api.v1alpha1.insights.JoinNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setJoinNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearJoinNode = function() {
  return this.setJoinNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasJoinNode = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional SelectNode select_node = 11;
 * @return {?proto.api.v1alpha1.insights.SelectNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getSelectNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.SelectNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.SelectNode, 11));
};


/**
 * @param {?proto.api.v1alpha1.insights.SelectNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setSelectNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearSelectNode = function() {
  return this.setSelectNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasSelectNode = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional AggregateNode aggregate_node = 12;
 * @return {?proto.api.v1alpha1.insights.AggregateNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getAggregateNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.AggregateNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.AggregateNode, 12));
};


/**
 * @param {?proto.api.v1alpha1.insights.AggregateNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setAggregateNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearAggregateNode = function() {
  return this.setAggregateNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasAggregateNode = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional TakeNode take_node = 13;
 * @return {?proto.api.v1alpha1.insights.TakeNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getTakeNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.TakeNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.TakeNode, 13));
};


/**
 * @param {?proto.api.v1alpha1.insights.TakeNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setTakeNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearTakeNode = function() {
  return this.setTakeNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasTakeNode = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional JsonNode json_node = 14;
 * @return {?proto.api.v1alpha1.insights.JsonNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getJsonNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.JsonNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.JsonNode, 14));
};


/**
 * @param {?proto.api.v1alpha1.insights.JsonNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setJsonNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearJsonNode = function() {
  return this.setJsonNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasJsonNode = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional MapNode map_node = 15;
 * @return {?proto.api.v1alpha1.insights.MapNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getMapNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.MapNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.MapNode, 15));
};


/**
 * @param {?proto.api.v1alpha1.insights.MapNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setMapNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearMapNode = function() {
  return this.setMapNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasMapNode = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ReplaceNode replace_node = 16;
 * @return {?proto.api.v1alpha1.insights.ReplaceNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getReplaceNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.ReplaceNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.ReplaceNode, 16));
};


/**
 * @param {?proto.api.v1alpha1.insights.ReplaceNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setReplaceNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearReplaceNode = function() {
  return this.setReplaceNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasReplaceNode = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional SortNode sort_node = 17;
 * @return {?proto.api.v1alpha1.insights.SortNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getSortNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.SortNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.SortNode, 17));
};


/**
 * @param {?proto.api.v1alpha1.insights.SortNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setSortNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearSortNode = function() {
  return this.setSortNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasSortNode = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional StringManipulationNode string_manipulation_node = 18;
 * @return {?proto.api.v1alpha1.insights.StringManipulationNode}
 */
proto.api.v1alpha1.insights.Node.prototype.getStringManipulationNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.StringManipulationNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.StringManipulationNode, 18));
};


/**
 * @param {?proto.api.v1alpha1.insights.StringManipulationNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.Node} returns this
*/
proto.api.v1alpha1.insights.Node.prototype.setStringManipulationNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.api.v1alpha1.insights.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.Node} returns this
 */
proto.api.v1alpha1.insights.Node.prototype.clearStringManipulationNode = function() {
  return this.setStringManipulationNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.Node.prototype.hasStringManipulationNode = function() {
  return jspb.Message.getField(this, 18) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.FromNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.FromNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.FromNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.FromNode.toObject = function(includeInstance, msg) {
  var f, obj = {
dataset: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.FromNode}
 */
proto.api.v1alpha1.insights.FromNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.FromNode;
  return proto.api.v1alpha1.insights.FromNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.FromNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.FromNode}
 */
proto.api.v1alpha1.insights.FromNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.FromNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.FromNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.FromNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.FromNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string dataset = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.FromNode.prototype.getDataset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.FromNode} returns this
 */
proto.api.v1alpha1.insights.FromNode.prototype.setDataset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.FilterNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.FilterNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.FilterNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.FilterNode.toObject = function(includeInstance, msg) {
  var f, obj = {
expression: (f = msg.getExpression()) && proto.api.v1alpha1.insights.ExpressionNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.FilterNode}
 */
proto.api.v1alpha1.insights.FilterNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.FilterNode;
  return proto.api.v1alpha1.insights.FilterNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.FilterNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.FilterNode}
 */
proto.api.v1alpha1.insights.FilterNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.api.v1alpha1.insights.ExpressionNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader);
      msg.setExpression(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.FilterNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.FilterNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.FilterNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.FilterNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpression();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExpressionNode expression = 3;
 * @return {?proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.FilterNode.prototype.getExpression = function() {
  return /** @type{?proto.api.v1alpha1.insights.ExpressionNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.ExpressionNode, 3));
};


/**
 * @param {?proto.api.v1alpha1.insights.ExpressionNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.FilterNode} returns this
*/
proto.api.v1alpha1.insights.FilterNode.prototype.setExpression = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.FilterNode} returns this
 */
proto.api.v1alpha1.insights.FilterNode.prototype.clearExpression = function() {
  return this.setExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.FilterNode.prototype.hasExpression = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.DeriveNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.DeriveNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.DeriveNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeriveNode.toObject = function(includeInstance, msg) {
  var f, obj = {
columnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
expression: (f = msg.getExpression()) && proto.api.v1alpha1.insights.ExpressionNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.DeriveNode}
 */
proto.api.v1alpha1.insights.DeriveNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.DeriveNode;
  return proto.api.v1alpha1.insights.DeriveNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.DeriveNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.DeriveNode}
 */
proto.api.v1alpha1.insights.DeriveNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.insights.ExpressionNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader);
      msg.setExpression(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.DeriveNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.DeriveNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.DeriveNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.DeriveNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpression();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string column_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.DeriveNode.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.DeriveNode} returns this
 */
proto.api.v1alpha1.insights.DeriveNode.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ExpressionNode expression = 4;
 * @return {?proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.DeriveNode.prototype.getExpression = function() {
  return /** @type{?proto.api.v1alpha1.insights.ExpressionNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.ExpressionNode, 4));
};


/**
 * @param {?proto.api.v1alpha1.insights.ExpressionNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.DeriveNode} returns this
*/
proto.api.v1alpha1.insights.DeriveNode.prototype.setExpression = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.DeriveNode} returns this
 */
proto.api.v1alpha1.insights.DeriveNode.prototype.clearExpression = function() {
  return this.setExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.DeriveNode.prototype.hasExpression = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.GroupNode.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.GroupNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.GroupNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.GroupNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GroupNode.toObject = function(includeInstance, msg) {
  var f, obj = {
groupByColumnsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
aggregationColumnsList: jspb.Message.toObjectList(msg.getAggregationColumnsList(),
    proto.api.v1alpha1.insights.AggregationColumn.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.GroupNode}
 */
proto.api.v1alpha1.insights.GroupNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.GroupNode;
  return proto.api.v1alpha1.insights.GroupNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.GroupNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.GroupNode}
 */
proto.api.v1alpha1.insights.GroupNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroupByColumns(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.insights.AggregationColumn;
      reader.readMessage(value,proto.api.v1alpha1.insights.AggregationColumn.deserializeBinaryFromReader);
      msg.addAggregationColumns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.GroupNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.GroupNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.GroupNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.GroupNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupByColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAggregationColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.insights.AggregationColumn.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string group_by_columns = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.GroupNode.prototype.getGroupByColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.GroupNode} returns this
 */
proto.api.v1alpha1.insights.GroupNode.prototype.setGroupByColumnsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.GroupNode} returns this
 */
proto.api.v1alpha1.insights.GroupNode.prototype.addGroupByColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.GroupNode} returns this
 */
proto.api.v1alpha1.insights.GroupNode.prototype.clearGroupByColumnsList = function() {
  return this.setGroupByColumnsList([]);
};


/**
 * repeated AggregationColumn aggregation_columns = 2;
 * @return {!Array<!proto.api.v1alpha1.insights.AggregationColumn>}
 */
proto.api.v1alpha1.insights.GroupNode.prototype.getAggregationColumnsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.AggregationColumn>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.AggregationColumn, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.AggregationColumn>} value
 * @return {!proto.api.v1alpha1.insights.GroupNode} returns this
*/
proto.api.v1alpha1.insights.GroupNode.prototype.setAggregationColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.AggregationColumn=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.AggregationColumn}
 */
proto.api.v1alpha1.insights.GroupNode.prototype.addAggregationColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.insights.AggregationColumn, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.GroupNode} returns this
 */
proto.api.v1alpha1.insights.GroupNode.prototype.clearAggregationColumnsList = function() {
  return this.setAggregationColumnsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.TakeNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.TakeNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.TakeNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.TakeNode.toObject = function(includeInstance, msg) {
  var f, obj = {
limit: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.TakeNode}
 */
proto.api.v1alpha1.insights.TakeNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.TakeNode;
  return proto.api.v1alpha1.insights.TakeNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.TakeNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.TakeNode}
 */
proto.api.v1alpha1.insights.TakeNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.TakeNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.TakeNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.TakeNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.TakeNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 limit = 1;
 * @return {number}
 */
proto.api.v1alpha1.insights.TakeNode.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.insights.TakeNode} returns this
 */
proto.api.v1alpha1.insights.TakeNode.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.AggregateNode.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.AggregateNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.AggregateNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.AggregateNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.AggregateNode.toObject = function(includeInstance, msg) {
  var f, obj = {
aggregationColumnsList: jspb.Message.toObjectList(msg.getAggregationColumnsList(),
    proto.api.v1alpha1.insights.AggregationColumn.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.AggregateNode}
 */
proto.api.v1alpha1.insights.AggregateNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.AggregateNode;
  return proto.api.v1alpha1.insights.AggregateNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.AggregateNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.AggregateNode}
 */
proto.api.v1alpha1.insights.AggregateNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.api.v1alpha1.insights.AggregationColumn;
      reader.readMessage(value,proto.api.v1alpha1.insights.AggregationColumn.deserializeBinaryFromReader);
      msg.addAggregationColumns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.AggregateNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.AggregateNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.AggregateNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.AggregateNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAggregationColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.insights.AggregationColumn.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AggregationColumn aggregation_columns = 2;
 * @return {!Array<!proto.api.v1alpha1.insights.AggregationColumn>}
 */
proto.api.v1alpha1.insights.AggregateNode.prototype.getAggregationColumnsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.AggregationColumn>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.AggregationColumn, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.AggregationColumn>} value
 * @return {!proto.api.v1alpha1.insights.AggregateNode} returns this
*/
proto.api.v1alpha1.insights.AggregateNode.prototype.setAggregationColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.AggregationColumn=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.AggregationColumn}
 */
proto.api.v1alpha1.insights.AggregateNode.prototype.addAggregationColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.insights.AggregationColumn, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.AggregateNode} returns this
 */
proto.api.v1alpha1.insights.AggregateNode.prototype.clearAggregationColumnsList = function() {
  return this.setAggregationColumnsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.AggregationColumn.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.AggregationColumn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.AggregationColumn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.AggregationColumn.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
groupByColumnsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
columnToAggregate: jspb.Message.getFieldWithDefault(msg, 3, ""),
aggregationFunction: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.AggregationColumn}
 */
proto.api.v1alpha1.insights.AggregationColumn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.AggregationColumn;
  return proto.api.v1alpha1.insights.AggregationColumn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.AggregationColumn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.AggregationColumn}
 */
proto.api.v1alpha1.insights.AggregationColumn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroupByColumns(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnToAggregate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregationFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.AggregationColumn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.AggregationColumn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.AggregationColumn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupByColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getColumnToAggregate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAggregationFunction();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.AggregationColumn} returns this
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string group_by_columns = 2;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.getGroupByColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.AggregationColumn} returns this
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.setGroupByColumnsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.AggregationColumn} returns this
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.addGroupByColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.AggregationColumn} returns this
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.clearGroupByColumnsList = function() {
  return this.setGroupByColumnsList([]);
};


/**
 * optional string column_to_aggregate = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.getColumnToAggregate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.AggregationColumn} returns this
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.setColumnToAggregate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string aggregation_function = 4;
 * @return {string}
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.getAggregationFunction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.AggregationColumn} returns this
 */
proto.api.v1alpha1.insights.AggregationColumn.prototype.setAggregationFunction = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.Column.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.Column.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.Column} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Column.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
dataType: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.Column}
 */
proto.api.v1alpha1.insights.Column.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.Column;
  return proto.api.v1alpha1.insights.Column.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.Column} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.Column}
 */
proto.api.v1alpha1.insights.Column.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.Column.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.Column.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.Column} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Column.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.Column.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Column} returns this
 */
proto.api.v1alpha1.insights.Column.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string data_type = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.Column.prototype.getDataType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Column} returns this
 */
proto.api.v1alpha1.insights.Column.prototype.setDataType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ExpressionNode.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ExpressionNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ExpressionNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ExpressionNode.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFieldWithDefault(msg, 2, ""),
childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.api.v1alpha1.insights.ExpressionNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.ExpressionNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ExpressionNode;
  return proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ExpressionNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.ExpressionNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader);
      msg.addChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ExpressionNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.ExpressionNode} returns this
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.ExpressionNode} returns this
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ExpressionNode children = 3;
 * @return {!Array<!proto.api.v1alpha1.insights.ExpressionNode>}
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.ExpressionNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.ExpressionNode, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.ExpressionNode>} value
 * @return {!proto.api.v1alpha1.insights.ExpressionNode} returns this
*/
proto.api.v1alpha1.insights.ExpressionNode.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.ExpressionNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.insights.ExpressionNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ExpressionNode} returns this
 */
proto.api.v1alpha1.insights.ExpressionNode.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.MapNode.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.MapNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.MapNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.MapNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.MapNode.toObject = function(includeInstance, msg) {
  var f, obj = {
newColumn: (f = msg.getNewColumn()) && proto.api.v1alpha1.insights.Column.toObject(includeInstance, f),
columnToMap: (f = msg.getColumnToMap()) && proto.api.v1alpha1.insights.Column.toObject(includeInstance, f),
mappingsList: jspb.Message.toObjectList(msg.getMappingsList(),
    proto.api.v1alpha1.insights.MapNode.Mapping.toObject, includeInstance),
defaultValue: (f = msg.getDefaultValue()) && proto.api.v1alpha1.insights.ExpressionNode.toObject(includeInstance, f),
isComplex: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.MapNode}
 */
proto.api.v1alpha1.insights.MapNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.MapNode;
  return proto.api.v1alpha1.insights.MapNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.MapNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.MapNode}
 */
proto.api.v1alpha1.insights.MapNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.Column;
      reader.readMessage(value,proto.api.v1alpha1.insights.Column.deserializeBinaryFromReader);
      msg.setNewColumn(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.insights.Column;
      reader.readMessage(value,proto.api.v1alpha1.insights.Column.deserializeBinaryFromReader);
      msg.setColumnToMap(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.MapNode.Mapping;
      reader.readMessage(value,proto.api.v1alpha1.insights.MapNode.Mapping.deserializeBinaryFromReader);
      msg.addMappings(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.insights.ExpressionNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader);
      msg.setDefaultValue(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsComplex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.MapNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.MapNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.MapNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.MapNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewColumn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.Column.serializeBinaryToWriter
    );
  }
  f = message.getColumnToMap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.insights.Column.serializeBinaryToWriter
    );
  }
  f = message.getMappingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v1alpha1.insights.MapNode.Mapping.serializeBinaryToWriter
    );
  }
  f = message.getDefaultValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter
    );
  }
  f = message.getIsComplex();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.MapNode.Mapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.MapNode.Mapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.MapNode.Mapping.toObject = function(includeInstance, msg) {
  var f, obj = {
condition: (f = msg.getCondition()) && proto.api.v1alpha1.insights.ExpressionNode.toObject(includeInstance, f),
result: (f = msg.getResult()) && proto.api.v1alpha1.insights.ExpressionNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.MapNode.Mapping}
 */
proto.api.v1alpha1.insights.MapNode.Mapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.MapNode.Mapping;
  return proto.api.v1alpha1.insights.MapNode.Mapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.MapNode.Mapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.MapNode.Mapping}
 */
proto.api.v1alpha1.insights.MapNode.Mapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.ExpressionNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.insights.ExpressionNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.MapNode.Mapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.MapNode.Mapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.MapNode.Mapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExpressionNode condition = 1;
 * @return {?proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.getCondition = function() {
  return /** @type{?proto.api.v1alpha1.insights.ExpressionNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.ExpressionNode, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.ExpressionNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.MapNode.Mapping} returns this
*/
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.setCondition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.MapNode.Mapping} returns this
 */
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExpressionNode result = 2;
 * @return {?proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.getResult = function() {
  return /** @type{?proto.api.v1alpha1.insights.ExpressionNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.ExpressionNode, 2));
};


/**
 * @param {?proto.api.v1alpha1.insights.ExpressionNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.MapNode.Mapping} returns this
*/
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.MapNode.Mapping} returns this
 */
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.MapNode.Mapping.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Column new_column = 1;
 * @return {?proto.api.v1alpha1.insights.Column}
 */
proto.api.v1alpha1.insights.MapNode.prototype.getNewColumn = function() {
  return /** @type{?proto.api.v1alpha1.insights.Column} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Column, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.Column|undefined} value
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
*/
proto.api.v1alpha1.insights.MapNode.prototype.setNewColumn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
 */
proto.api.v1alpha1.insights.MapNode.prototype.clearNewColumn = function() {
  return this.setNewColumn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.MapNode.prototype.hasNewColumn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Column column_to_map = 2;
 * @return {?proto.api.v1alpha1.insights.Column}
 */
proto.api.v1alpha1.insights.MapNode.prototype.getColumnToMap = function() {
  return /** @type{?proto.api.v1alpha1.insights.Column} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Column, 2));
};


/**
 * @param {?proto.api.v1alpha1.insights.Column|undefined} value
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
*/
proto.api.v1alpha1.insights.MapNode.prototype.setColumnToMap = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
 */
proto.api.v1alpha1.insights.MapNode.prototype.clearColumnToMap = function() {
  return this.setColumnToMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.MapNode.prototype.hasColumnToMap = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Mapping mappings = 3;
 * @return {!Array<!proto.api.v1alpha1.insights.MapNode.Mapping>}
 */
proto.api.v1alpha1.insights.MapNode.prototype.getMappingsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.MapNode.Mapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.MapNode.Mapping, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.MapNode.Mapping>} value
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
*/
proto.api.v1alpha1.insights.MapNode.prototype.setMappingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.MapNode.Mapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.MapNode.Mapping}
 */
proto.api.v1alpha1.insights.MapNode.prototype.addMappings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.insights.MapNode.Mapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
 */
proto.api.v1alpha1.insights.MapNode.prototype.clearMappingsList = function() {
  return this.setMappingsList([]);
};


/**
 * optional ExpressionNode default_value = 4;
 * @return {?proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.MapNode.prototype.getDefaultValue = function() {
  return /** @type{?proto.api.v1alpha1.insights.ExpressionNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.ExpressionNode, 4));
};


/**
 * @param {?proto.api.v1alpha1.insights.ExpressionNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
*/
proto.api.v1alpha1.insights.MapNode.prototype.setDefaultValue = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
 */
proto.api.v1alpha1.insights.MapNode.prototype.clearDefaultValue = function() {
  return this.setDefaultValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.MapNode.prototype.hasDefaultValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_complex = 5;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.MapNode.prototype.getIsComplex = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.MapNode} returns this
 */
proto.api.v1alpha1.insights.MapNode.prototype.setIsComplex = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.JoinNode.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.JoinNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.JoinNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.JoinNode.toObject = function(includeInstance, msg) {
  var f, obj = {
side: jspb.Message.getFieldWithDefault(msg, 1, ""),
joinColumnsList: jspb.Message.toObjectList(msg.getJoinColumnsList(),
    proto.api.v1alpha1.insights.JoinColumn.toObject, includeInstance),
firstParent: (f = msg.getFirstParent()) && proto.api.v1alpha1.insights.Parent.toObject(includeInstance, f),
secondParent: (f = msg.getSecondParent()) && proto.api.v1alpha1.insights.Parent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.JoinNode}
 */
proto.api.v1alpha1.insights.JoinNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.JoinNode;
  return proto.api.v1alpha1.insights.JoinNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.JoinNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.JoinNode}
 */
proto.api.v1alpha1.insights.JoinNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSide(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.insights.JoinColumn;
      reader.readMessage(value,proto.api.v1alpha1.insights.JoinColumn.deserializeBinaryFromReader);
      msg.addJoinColumns(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.Parent;
      reader.readMessage(value,proto.api.v1alpha1.insights.Parent.deserializeBinaryFromReader);
      msg.setFirstParent(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.insights.Parent;
      reader.readMessage(value,proto.api.v1alpha1.insights.Parent.deserializeBinaryFromReader);
      msg.setSecondParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.JoinNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.JoinNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.JoinNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSide();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJoinColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.insights.JoinColumn.serializeBinaryToWriter
    );
  }
  f = message.getFirstParent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.insights.Parent.serializeBinaryToWriter
    );
  }
  f = message.getSecondParent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.insights.Parent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string side = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.getSide = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.JoinNode} returns this
 */
proto.api.v1alpha1.insights.JoinNode.prototype.setSide = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated JoinColumn join_columns = 2;
 * @return {!Array<!proto.api.v1alpha1.insights.JoinColumn>}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.getJoinColumnsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.JoinColumn>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.JoinColumn, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.JoinColumn>} value
 * @return {!proto.api.v1alpha1.insights.JoinNode} returns this
*/
proto.api.v1alpha1.insights.JoinNode.prototype.setJoinColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.JoinColumn=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.JoinColumn}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.addJoinColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.insights.JoinColumn, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.JoinNode} returns this
 */
proto.api.v1alpha1.insights.JoinNode.prototype.clearJoinColumnsList = function() {
  return this.setJoinColumnsList([]);
};


/**
 * optional Parent first_parent = 3;
 * @return {?proto.api.v1alpha1.insights.Parent}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.getFirstParent = function() {
  return /** @type{?proto.api.v1alpha1.insights.Parent} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Parent, 3));
};


/**
 * @param {?proto.api.v1alpha1.insights.Parent|undefined} value
 * @return {!proto.api.v1alpha1.insights.JoinNode} returns this
*/
proto.api.v1alpha1.insights.JoinNode.prototype.setFirstParent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.JoinNode} returns this
 */
proto.api.v1alpha1.insights.JoinNode.prototype.clearFirstParent = function() {
  return this.setFirstParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.hasFirstParent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Parent second_parent = 4;
 * @return {?proto.api.v1alpha1.insights.Parent}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.getSecondParent = function() {
  return /** @type{?proto.api.v1alpha1.insights.Parent} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.Parent, 4));
};


/**
 * @param {?proto.api.v1alpha1.insights.Parent|undefined} value
 * @return {!proto.api.v1alpha1.insights.JoinNode} returns this
*/
proto.api.v1alpha1.insights.JoinNode.prototype.setSecondParent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.JoinNode} returns this
 */
proto.api.v1alpha1.insights.JoinNode.prototype.clearSecondParent = function() {
  return this.setSecondParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.JoinNode.prototype.hasSecondParent = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.JoinColumn.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.JoinColumn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.JoinColumn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.JoinColumn.toObject = function(includeInstance, msg) {
  var f, obj = {
firstParentColumn: jspb.Message.getFieldWithDefault(msg, 1, ""),
secondParentColumn: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.JoinColumn}
 */
proto.api.v1alpha1.insights.JoinColumn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.JoinColumn;
  return proto.api.v1alpha1.insights.JoinColumn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.JoinColumn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.JoinColumn}
 */
proto.api.v1alpha1.insights.JoinColumn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstParentColumn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondParentColumn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.JoinColumn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.JoinColumn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.JoinColumn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.JoinColumn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstParentColumn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecondParentColumn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string first_parent_column = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.JoinColumn.prototype.getFirstParentColumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.JoinColumn} returns this
 */
proto.api.v1alpha1.insights.JoinColumn.prototype.setFirstParentColumn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string second_parent_column = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.JoinColumn.prototype.getSecondParentColumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.JoinColumn} returns this
 */
proto.api.v1alpha1.insights.JoinColumn.prototype.setSecondParentColumn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.Parent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.Parent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.Parent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Parent.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
title: jspb.Message.getFieldWithDefault(msg, 2, ""),
renamedColumnsMap: (f = msg.getRenamedColumnsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.Parent}
 */
proto.api.v1alpha1.insights.Parent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.Parent;
  return proto.api.v1alpha1.insights.Parent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.Parent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.Parent}
 */
proto.api.v1alpha1.insights.Parent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = msg.getRenamedColumnsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.Parent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.Parent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.Parent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Parent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRenamedColumnsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.Parent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Parent} returns this
 */
proto.api.v1alpha1.insights.Parent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.Parent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Parent} returns this
 */
proto.api.v1alpha1.insights.Parent.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> renamed_columns = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.insights.Parent.prototype.getRenamedColumnsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.insights.Parent} returns this
 */
proto.api.v1alpha1.insights.Parent.prototype.clearRenamedColumnsMap = function() {
  this.getRenamedColumnsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.SelectNode.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.SelectNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.SelectNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.SelectNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SelectNode.toObject = function(includeInstance, msg) {
  var f, obj = {
columnsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
renamedColumnsMap: (f = msg.getRenamedColumnsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.SelectNode}
 */
proto.api.v1alpha1.insights.SelectNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.SelectNode;
  return proto.api.v1alpha1.insights.SelectNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.SelectNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.SelectNode}
 */
proto.api.v1alpha1.insights.SelectNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = msg.getRenamedColumnsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.SelectNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.SelectNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.SelectNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SelectNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRenamedColumnsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.SelectNode.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.SelectNode} returns this
 */
proto.api.v1alpha1.insights.SelectNode.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.SelectNode} returns this
 */
proto.api.v1alpha1.insights.SelectNode.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.SelectNode} returns this
 */
proto.api.v1alpha1.insights.SelectNode.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * map<string, string> renamed_columns = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.insights.SelectNode.prototype.getRenamedColumnsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.insights.SelectNode} returns this
 */
proto.api.v1alpha1.insights.SelectNode.prototype.clearRenamedColumnsMap = function() {
  this.getRenamedColumnsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.JsonTarget.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.JsonTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.JsonTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.JsonTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
pathPartsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
columnName: jspb.Message.getFieldWithDefault(msg, 2, ""),
resultType: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.JsonTarget}
 */
proto.api.v1alpha1.insights.JsonTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.JsonTarget;
  return proto.api.v1alpha1.insights.JsonTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.JsonTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.JsonTarget}
 */
proto.api.v1alpha1.insights.JsonTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPathParts(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.JsonTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.JsonTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.JsonTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathPartsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResultType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated string path_parts = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.getPathPartsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.JsonTarget} returns this
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.setPathPartsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.JsonTarget} returns this
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.addPathParts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.JsonTarget} returns this
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.clearPathPartsList = function() {
  return this.setPathPartsList([]);
};


/**
 * optional string column_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.JsonTarget} returns this
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string result_type = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.getResultType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.JsonTarget} returns this
 */
proto.api.v1alpha1.insights.JsonTarget.prototype.setResultType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.JsonNode.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.JsonNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.JsonNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.JsonNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.JsonNode.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
jsonColumn: jspb.Message.getFieldWithDefault(msg, 2, ""),
targetsList: jspb.Message.toObjectList(msg.getTargetsList(),
    proto.api.v1alpha1.insights.JsonTarget.toObject, includeInstance),
unnestToColumnsNode: (f = msg.getUnnestToColumnsNode()) && proto.api.v1alpha1.insights.UnnestToColumnsNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.JsonNode}
 */
proto.api.v1alpha1.insights.JsonNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.JsonNode;
  return proto.api.v1alpha1.insights.JsonNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.JsonNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.JsonNode}
 */
proto.api.v1alpha1.insights.JsonNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonColumn(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.JsonTarget;
      reader.readMessage(value,proto.api.v1alpha1.insights.JsonTarget.deserializeBinaryFromReader);
      msg.addTargets(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.insights.UnnestToColumnsNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.UnnestToColumnsNode.deserializeBinaryFromReader);
      msg.setUnnestToColumnsNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.JsonNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.JsonNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.JsonNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.JsonNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJsonColumn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v1alpha1.insights.JsonTarget.serializeBinaryToWriter
    );
  }
  f = message.getUnnestToColumnsNode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.insights.UnnestToColumnsNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.JsonNode.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.JsonNode} returns this
 */
proto.api.v1alpha1.insights.JsonNode.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string json_column = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.JsonNode.prototype.getJsonColumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.JsonNode} returns this
 */
proto.api.v1alpha1.insights.JsonNode.prototype.setJsonColumn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated JsonTarget targets = 3;
 * @return {!Array<!proto.api.v1alpha1.insights.JsonTarget>}
 */
proto.api.v1alpha1.insights.JsonNode.prototype.getTargetsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.JsonTarget>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.JsonTarget, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.JsonTarget>} value
 * @return {!proto.api.v1alpha1.insights.JsonNode} returns this
*/
proto.api.v1alpha1.insights.JsonNode.prototype.setTargetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.JsonTarget=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.JsonTarget}
 */
proto.api.v1alpha1.insights.JsonNode.prototype.addTargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.insights.JsonTarget, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.JsonNode} returns this
 */
proto.api.v1alpha1.insights.JsonNode.prototype.clearTargetsList = function() {
  return this.setTargetsList([]);
};


/**
 * optional UnnestToColumnsNode unnest_to_columns_node = 4;
 * @return {?proto.api.v1alpha1.insights.UnnestToColumnsNode}
 */
proto.api.v1alpha1.insights.JsonNode.prototype.getUnnestToColumnsNode = function() {
  return /** @type{?proto.api.v1alpha1.insights.UnnestToColumnsNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.UnnestToColumnsNode, 4));
};


/**
 * @param {?proto.api.v1alpha1.insights.UnnestToColumnsNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.JsonNode} returns this
*/
proto.api.v1alpha1.insights.JsonNode.prototype.setUnnestToColumnsNode = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.JsonNode} returns this
 */
proto.api.v1alpha1.insights.JsonNode.prototype.clearUnnestToColumnsNode = function() {
  return this.setUnnestToColumnsNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.JsonNode.prototype.hasUnnestToColumnsNode = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.repeatedFields_ = [4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.UnnestToColumnsNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.UnnestToColumnsNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.toObject = function(includeInstance, msg) {
  var f, obj = {
unnestTarget: (f = msg.getUnnestTarget()) && proto.api.v1alpha1.insights.JsonTarget.toObject(includeInstance, f),
keyTarget: (f = msg.getKeyTarget()) && proto.api.v1alpha1.insights.JsonTarget.toObject(includeInstance, f),
valueTarget: (f = msg.getValueTarget()) && proto.api.v1alpha1.insights.JsonTarget.toObject(includeInstance, f),
columnsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
primaryKeysList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
jsonColumnsList: jspb.Message.toObjectList(msg.getJsonColumnsList(),
    proto.api.v1alpha1.insights.Column.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.UnnestToColumnsNode;
  return proto.api.v1alpha1.insights.UnnestToColumnsNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.UnnestToColumnsNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.JsonTarget;
      reader.readMessage(value,proto.api.v1alpha1.insights.JsonTarget.deserializeBinaryFromReader);
      msg.setUnnestTarget(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.insights.JsonTarget;
      reader.readMessage(value,proto.api.v1alpha1.insights.JsonTarget.deserializeBinaryFromReader);
      msg.setKeyTarget(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.JsonTarget;
      reader.readMessage(value,proto.api.v1alpha1.insights.JsonTarget.deserializeBinaryFromReader);
      msg.setValueTarget(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrimaryKeys(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.insights.Column;
      reader.readMessage(value,proto.api.v1alpha1.insights.Column.deserializeBinaryFromReader);
      msg.addJsonColumns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.UnnestToColumnsNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.UnnestToColumnsNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnnestTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.insights.JsonTarget.serializeBinaryToWriter
    );
  }
  f = message.getKeyTarget();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.insights.JsonTarget.serializeBinaryToWriter
    );
  }
  f = message.getValueTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.insights.JsonTarget.serializeBinaryToWriter
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getPrimaryKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getJsonColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.v1alpha1.insights.Column.serializeBinaryToWriter
    );
  }
};


/**
 * optional JsonTarget unnest_target = 1;
 * @return {?proto.api.v1alpha1.insights.JsonTarget}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.getUnnestTarget = function() {
  return /** @type{?proto.api.v1alpha1.insights.JsonTarget} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.JsonTarget, 1));
};


/**
 * @param {?proto.api.v1alpha1.insights.JsonTarget|undefined} value
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
*/
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.setUnnestTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.clearUnnestTarget = function() {
  return this.setUnnestTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.hasUnnestTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional JsonTarget key_target = 2;
 * @return {?proto.api.v1alpha1.insights.JsonTarget}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.getKeyTarget = function() {
  return /** @type{?proto.api.v1alpha1.insights.JsonTarget} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.JsonTarget, 2));
};


/**
 * @param {?proto.api.v1alpha1.insights.JsonTarget|undefined} value
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
*/
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.setKeyTarget = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.clearKeyTarget = function() {
  return this.setKeyTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.hasKeyTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JsonTarget value_target = 3;
 * @return {?proto.api.v1alpha1.insights.JsonTarget}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.getValueTarget = function() {
  return /** @type{?proto.api.v1alpha1.insights.JsonTarget} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.JsonTarget, 3));
};


/**
 * @param {?proto.api.v1alpha1.insights.JsonTarget|undefined} value
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
*/
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.setValueTarget = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.clearValueTarget = function() {
  return this.setValueTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.hasValueTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string columns = 4;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * repeated string primary_keys = 5;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.getPrimaryKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.setPrimaryKeysList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.addPrimaryKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.clearPrimaryKeysList = function() {
  return this.setPrimaryKeysList([]);
};


/**
 * repeated Column json_columns = 6;
 * @return {!Array<!proto.api.v1alpha1.insights.Column>}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.getJsonColumnsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.Column>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.Column, 6));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.Column>} value
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
*/
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.setJsonColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.Column=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.Column}
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.addJsonColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.v1alpha1.insights.Column, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.UnnestToColumnsNode} returns this
 */
proto.api.v1alpha1.insights.UnnestToColumnsNode.prototype.clearJsonColumnsList = function() {
  return this.setJsonColumnsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.Parameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.insights.Parameters.Parameter.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.Parameters}
 */
proto.api.v1alpha1.insights.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.Parameters;
  return proto.api.v1alpha1.insights.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.Parameters}
 */
proto.api.v1alpha1.insights.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.insights.Parameters.Parameter.deserializeBinaryFromReader, "", new proto.api.v1alpha1.insights.Parameters.Parameter());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.Parameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Parameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.insights.Parameters.Parameter.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.Parameters.Parameter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.Parameters.Parameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.Parameters.Parameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Parameters.Parameter.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFieldWithDefault(msg, 2, ""),
dataType: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.Parameters.Parameter}
 */
proto.api.v1alpha1.insights.Parameters.Parameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.Parameters.Parameter;
  return proto.api.v1alpha1.insights.Parameters.Parameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.Parameters.Parameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.Parameters.Parameter}
 */
proto.api.v1alpha1.insights.Parameters.Parameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.Parameters.Parameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.Parameters.Parameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.Parameters.Parameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.Parameters.Parameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.Parameters.Parameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Parameters.Parameter} returns this
 */
proto.api.v1alpha1.insights.Parameters.Parameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string data_type = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.Parameters.Parameter.prototype.getDataType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.Parameters.Parameter} returns this
 */
proto.api.v1alpha1.insights.Parameters.Parameter.prototype.setDataType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, Parameter> parameters = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.insights.Parameters.Parameter>}
 */
proto.api.v1alpha1.insights.Parameters.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.insights.Parameters.Parameter>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.insights.Parameters.Parameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.insights.Parameters} returns this
 */
proto.api.v1alpha1.insights.Parameters.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ValuesReplacement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ValuesReplacement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ValuesReplacement.toObject = function(includeInstance, msg) {
  var f, obj = {
targetValue: jspb.Message.getFieldWithDefault(msg, 1, ""),
targetDataType: jspb.Message.getFieldWithDefault(msg, 2, ""),
replacementValue: (f = msg.getReplacementValue()) && proto.api.v1alpha1.insights.ExpressionNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ValuesReplacement}
 */
proto.api.v1alpha1.insights.ValuesReplacement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ValuesReplacement;
  return proto.api.v1alpha1.insights.ValuesReplacement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ValuesReplacement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ValuesReplacement}
 */
proto.api.v1alpha1.insights.ValuesReplacement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetDataType(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.insights.ExpressionNode;
      reader.readMessage(value,proto.api.v1alpha1.insights.ExpressionNode.deserializeBinaryFromReader);
      msg.setReplacementValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ValuesReplacement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ValuesReplacement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ValuesReplacement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetDataType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReplacementValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.insights.ExpressionNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string target_value = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.getTargetValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.ValuesReplacement} returns this
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.setTargetValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target_data_type = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.getTargetDataType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.ValuesReplacement} returns this
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.setTargetDataType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ExpressionNode replacement_value = 3;
 * @return {?proto.api.v1alpha1.insights.ExpressionNode}
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.getReplacementValue = function() {
  return /** @type{?proto.api.v1alpha1.insights.ExpressionNode} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.ExpressionNode, 3));
};


/**
 * @param {?proto.api.v1alpha1.insights.ExpressionNode|undefined} value
 * @return {!proto.api.v1alpha1.insights.ValuesReplacement} returns this
*/
proto.api.v1alpha1.insights.ValuesReplacement.prototype.setReplacementValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.ValuesReplacement} returns this
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.clearReplacementValue = function() {
  return this.setReplacementValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.ValuesReplacement.prototype.hasReplacementValue = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ColumnReplacement.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ColumnReplacement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ColumnReplacement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ColumnReplacement.toObject = function(includeInstance, msg) {
  var f, obj = {
columnNamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
valuesReplacementsList: jspb.Message.toObjectList(msg.getValuesReplacementsList(),
    proto.api.v1alpha1.insights.ValuesReplacement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ColumnReplacement}
 */
proto.api.v1alpha1.insights.ColumnReplacement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ColumnReplacement;
  return proto.api.v1alpha1.insights.ColumnReplacement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ColumnReplacement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ColumnReplacement}
 */
proto.api.v1alpha1.insights.ColumnReplacement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumnNames(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.insights.ValuesReplacement;
      reader.readMessage(value,proto.api.v1alpha1.insights.ValuesReplacement.deserializeBinaryFromReader);
      msg.addValuesReplacements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ColumnReplacement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ColumnReplacement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ColumnReplacement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getValuesReplacementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.insights.ValuesReplacement.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string column_names = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.getColumnNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.insights.ColumnReplacement} returns this
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.setColumnNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.ColumnReplacement} returns this
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.addColumnNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ColumnReplacement} returns this
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.clearColumnNamesList = function() {
  return this.setColumnNamesList([]);
};


/**
 * repeated ValuesReplacement values_replacements = 2;
 * @return {!Array<!proto.api.v1alpha1.insights.ValuesReplacement>}
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.getValuesReplacementsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.ValuesReplacement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.ValuesReplacement, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.ValuesReplacement>} value
 * @return {!proto.api.v1alpha1.insights.ColumnReplacement} returns this
*/
proto.api.v1alpha1.insights.ColumnReplacement.prototype.setValuesReplacementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.ValuesReplacement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.ValuesReplacement}
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.addValuesReplacements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.insights.ValuesReplacement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ColumnReplacement} returns this
 */
proto.api.v1alpha1.insights.ColumnReplacement.prototype.clearValuesReplacementsList = function() {
  return this.setValuesReplacementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.ReplaceNode.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.ReplaceNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.ReplaceNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.ReplaceNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ReplaceNode.toObject = function(includeInstance, msg) {
  var f, obj = {
columnReplacementsList: jspb.Message.toObjectList(msg.getColumnReplacementsList(),
    proto.api.v1alpha1.insights.ColumnReplacement.toObject, includeInstance),
isComplex: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.ReplaceNode}
 */
proto.api.v1alpha1.insights.ReplaceNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.ReplaceNode;
  return proto.api.v1alpha1.insights.ReplaceNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.ReplaceNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.ReplaceNode}
 */
proto.api.v1alpha1.insights.ReplaceNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.ColumnReplacement;
      reader.readMessage(value,proto.api.v1alpha1.insights.ColumnReplacement.deserializeBinaryFromReader);
      msg.addColumnReplacements(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsComplex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.ReplaceNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.ReplaceNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.ReplaceNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.ReplaceNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnReplacementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.ColumnReplacement.serializeBinaryToWriter
    );
  }
  f = message.getIsComplex();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated ColumnReplacement column_replacements = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.ColumnReplacement>}
 */
proto.api.v1alpha1.insights.ReplaceNode.prototype.getColumnReplacementsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.ColumnReplacement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.ColumnReplacement, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.ColumnReplacement>} value
 * @return {!proto.api.v1alpha1.insights.ReplaceNode} returns this
*/
proto.api.v1alpha1.insights.ReplaceNode.prototype.setColumnReplacementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.ColumnReplacement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.ColumnReplacement}
 */
proto.api.v1alpha1.insights.ReplaceNode.prototype.addColumnReplacements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.ColumnReplacement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.ReplaceNode} returns this
 */
proto.api.v1alpha1.insights.ReplaceNode.prototype.clearColumnReplacementsList = function() {
  return this.setColumnReplacementsList([]);
};


/**
 * optional bool is_complex = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.ReplaceNode.prototype.getIsComplex = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.ReplaceNode} returns this
 */
proto.api.v1alpha1.insights.ReplaceNode.prototype.setIsComplex = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.SortColumn.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.SortColumn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.SortColumn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SortColumn.toObject = function(includeInstance, msg) {
  var f, obj = {
columnName: jspb.Message.getFieldWithDefault(msg, 1, ""),
ascending: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.SortColumn}
 */
proto.api.v1alpha1.insights.SortColumn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.SortColumn;
  return proto.api.v1alpha1.insights.SortColumn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.SortColumn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.SortColumn}
 */
proto.api.v1alpha1.insights.SortColumn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAscending(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.SortColumn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.SortColumn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.SortColumn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SortColumn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAscending();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string column_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.SortColumn.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.SortColumn} returns this
 */
proto.api.v1alpha1.insights.SortColumn.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool ascending = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.SortColumn.prototype.getAscending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.SortColumn} returns this
 */
proto.api.v1alpha1.insights.SortColumn.prototype.setAscending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.insights.SortNode.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.SortNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.SortNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.SortNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SortNode.toObject = function(includeInstance, msg) {
  var f, obj = {
sortColumnsList: jspb.Message.toObjectList(msg.getSortColumnsList(),
    proto.api.v1alpha1.insights.SortColumn.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.SortNode}
 */
proto.api.v1alpha1.insights.SortNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.SortNode;
  return proto.api.v1alpha1.insights.SortNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.SortNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.SortNode}
 */
proto.api.v1alpha1.insights.SortNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.insights.SortColumn;
      reader.readMessage(value,proto.api.v1alpha1.insights.SortColumn.deserializeBinaryFromReader);
      msg.addSortColumns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.SortNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.SortNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.SortNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.SortNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSortColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.insights.SortColumn.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SortColumn sort_columns = 1;
 * @return {!Array<!proto.api.v1alpha1.insights.SortColumn>}
 */
proto.api.v1alpha1.insights.SortNode.prototype.getSortColumnsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.insights.SortColumn>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.insights.SortColumn, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.insights.SortColumn>} value
 * @return {!proto.api.v1alpha1.insights.SortNode} returns this
*/
proto.api.v1alpha1.insights.SortNode.prototype.setSortColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.insights.SortColumn=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.insights.SortColumn}
 */
proto.api.v1alpha1.insights.SortNode.prototype.addSortColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.insights.SortColumn, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.insights.SortNode} returns this
 */
proto.api.v1alpha1.insights.SortNode.prototype.clearSortColumnsList = function() {
  return this.setSortColumnsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.StringManipulationSplit.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.StringManipulationSplit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.StringManipulationSplit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.StringManipulationSplit.toObject = function(includeInstance, msg) {
  var f, obj = {
splitBy: jspb.Message.getFieldWithDefault(msg, 2, ""),
isIndexExtraction: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
indexExtraction: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.StringManipulationSplit}
 */
proto.api.v1alpha1.insights.StringManipulationSplit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.StringManipulationSplit;
  return proto.api.v1alpha1.insights.StringManipulationSplit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.StringManipulationSplit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.StringManipulationSplit}
 */
proto.api.v1alpha1.insights.StringManipulationSplit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSplitBy(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsIndexExtraction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndexExtraction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.StringManipulationSplit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.StringManipulationSplit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.StringManipulationSplit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.StringManipulationSplit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSplitBy();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsIndexExtraction();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIndexExtraction();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string split_by = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.StringManipulationSplit.prototype.getSplitBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationSplit} returns this
 */
proto.api.v1alpha1.insights.StringManipulationSplit.prototype.setSplitBy = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_index_extraction = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.insights.StringManipulationSplit.prototype.getIsIndexExtraction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationSplit} returns this
 */
proto.api.v1alpha1.insights.StringManipulationSplit.prototype.setIsIndexExtraction = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 index_extraction = 4;
 * @return {number}
 */
proto.api.v1alpha1.insights.StringManipulationSplit.prototype.getIndexExtraction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationSplit} returns this
 */
proto.api.v1alpha1.insights.StringManipulationSplit.prototype.setIndexExtraction = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.StringManipulationReplace.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.StringManipulationReplace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.StringManipulationReplace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.StringManipulationReplace.toObject = function(includeInstance, msg) {
  var f, obj = {
target: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.StringManipulationReplace}
 */
proto.api.v1alpha1.insights.StringManipulationReplace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.StringManipulationReplace;
  return proto.api.v1alpha1.insights.StringManipulationReplace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.StringManipulationReplace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.StringManipulationReplace}
 */
proto.api.v1alpha1.insights.StringManipulationReplace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.StringManipulationReplace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.StringManipulationReplace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.StringManipulationReplace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.StringManipulationReplace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string target = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.StringManipulationReplace.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationReplace} returns this
 */
proto.api.v1alpha1.insights.StringManipulationReplace.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.StringManipulationReplace.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationReplace} returns this
 */
proto.api.v1alpha1.insights.StringManipulationReplace.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.insights.StringManipulationNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.insights.StringManipulationNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.StringManipulationNode.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
sourceColumnName: jspb.Message.getFieldWithDefault(msg, 2, ""),
targetColumnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
stringManipulationSplit: (f = msg.getStringManipulationSplit()) && proto.api.v1alpha1.insights.StringManipulationSplit.toObject(includeInstance, f),
stringManipulationReplace: (f = msg.getStringManipulationReplace()) && proto.api.v1alpha1.insights.StringManipulationReplace.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode}
 */
proto.api.v1alpha1.insights.StringManipulationNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.insights.StringManipulationNode;
  return proto.api.v1alpha1.insights.StringManipulationNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.insights.StringManipulationNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode}
 */
proto.api.v1alpha1.insights.StringManipulationNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceColumnName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetColumnName(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.insights.StringManipulationSplit;
      reader.readMessage(value,proto.api.v1alpha1.insights.StringManipulationSplit.deserializeBinaryFromReader);
      msg.setStringManipulationSplit(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.insights.StringManipulationReplace;
      reader.readMessage(value,proto.api.v1alpha1.insights.StringManipulationReplace.deserializeBinaryFromReader);
      msg.setStringManipulationReplace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.insights.StringManipulationNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.insights.StringManipulationNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.insights.StringManipulationNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceColumnName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetColumnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStringManipulationSplit();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.insights.StringManipulationSplit.serializeBinaryToWriter
    );
  }
  f = message.getStringManipulationReplace();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v1alpha1.insights.StringManipulationReplace.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode} returns this
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_column_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.getSourceColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode} returns this
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.setSourceColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string target_column_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.getTargetColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode} returns this
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.setTargetColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional StringManipulationSplit string_manipulation_split = 4;
 * @return {?proto.api.v1alpha1.insights.StringManipulationSplit}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.getStringManipulationSplit = function() {
  return /** @type{?proto.api.v1alpha1.insights.StringManipulationSplit} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.StringManipulationSplit, 4));
};


/**
 * @param {?proto.api.v1alpha1.insights.StringManipulationSplit|undefined} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode} returns this
*/
proto.api.v1alpha1.insights.StringManipulationNode.prototype.setStringManipulationSplit = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode} returns this
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.clearStringManipulationSplit = function() {
  return this.setStringManipulationSplit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.hasStringManipulationSplit = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StringManipulationReplace string_manipulation_replace = 5;
 * @return {?proto.api.v1alpha1.insights.StringManipulationReplace}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.getStringManipulationReplace = function() {
  return /** @type{?proto.api.v1alpha1.insights.StringManipulationReplace} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.insights.StringManipulationReplace, 5));
};


/**
 * @param {?proto.api.v1alpha1.insights.StringManipulationReplace|undefined} value
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode} returns this
*/
proto.api.v1alpha1.insights.StringManipulationNode.prototype.setStringManipulationReplace = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.insights.StringManipulationNode} returns this
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.clearStringManipulationReplace = function() {
  return this.setStringManipulationReplace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.insights.StringManipulationNode.prototype.hasStringManipulationReplace = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.OutputConfigurationType = {
  OUTPUT_CONFIGURATION_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_TYPE_TABLE: 1,
  OUTPUT_CONFIGURATION_TYPE_MULTI_SERIES: 2,
  OUTPUT_CONFIGURATION_TYPE_PIE_CHART: 3,
  OUTPUT_CONFIGURATION_TYPE_FIXED_WIDTH: 4,
  OUTPUT_CONFIGURATION_TYPE_TIMELINE: 5
};

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.OperationType = {
  OPERATION_TYPE_UNSPECIFIED: 0,
  OPERATION_TYPE_DATE: 1,
  OPERATION_TYPE_PREFIX: 2,
  OPERATION_TYPE_SUFFIX: 3,
  OPERATION_TYPE_DURATION: 4,
  OPERATION_TYPE_ADD: 5,
  OPERATION_TYPE_SUBTRACT: 6,
  OPERATION_TYPE_MULTIPLY: 7,
  OPERATION_TYPE_DIVIDE: 8,
  OPERATION_TYPE_FORMAT_NUMBER: 9,
  OPERATION_TYPE_PRECISION: 10,
  OPERATION_TYPE_PAD: 11
};

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.ColumnSort = {
  COLUMN_SORT_UNSPECIFIED: 0,
  COLUMN_SORT_ASCENDING: 1,
  COLUMN_SORT_DESCENDING: 2
};

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.OutputConfigurationColumnSummaryType = {
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_AVG: 1,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_SUM: 2,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MIN: 3,
  OUTPUT_CONFIGURATION_COLUMN_SUMMARY_TYPE_MAX: 4
};

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.InsightContextualActionType = {
  INSIGHT_CONTEXTUAL_ACTION_TYPE_UNSPECIFIED: 0,
  INSIGHT_CONTEXTUAL_ACTION_TYPE_LINK: 1,
  INSIGHT_CONTEXTUAL_ACTION_TYPE_COMPONENT: 2,
  INSIGHT_CONTEXTUAL_ACTION_TYPE_DRILL_THROUGH: 3
};

/**
 * @enum {number}
 */
proto.api.v1alpha1.insights.QuoteCharacter = {
  QUOTE_CHARACTER_UNSPECIFIED: 0,
  QUOTE_CHARACTER_DOUBLE_QUOTE: 1,
  QUOTE_CHARACTER_SINGLE_QUOTE: 2
};

goog.object.extend(exports, proto.api.v1alpha1.insights);
