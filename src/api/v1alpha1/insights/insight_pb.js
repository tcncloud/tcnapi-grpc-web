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
goog.exportSymbol('proto.api.v1alpha1.insights.ColumnOperation', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ColumnOperation.OperationValueCase', null, global);
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
goog.exportSymbol('proto.api.v1alpha1.insights.DrillThroughAction', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.DrillThroughParameter', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.FormatSeries', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetDefaultOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetDefaultOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetInsightRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetInsightResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetVfsSchemaRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetVfsSchemaResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.GetVfsSchemaResponse.Field', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.Insight', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.InsightContextualAction', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.InsightContextualAction.ActionCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.InsightContextualActionType', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.LinkAction', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListInsightsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListInsightsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListOrgInsightsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListOrgInsightsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListOutputConfigurationsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListOutputConfigurationsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListVfsSchemasRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListVfsSchemasResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListVfsesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.ListVfsesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OperationType', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OutputConfiguration', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OutputConfiguration.BodyCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OutputConfigurationColumnSummaryType', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.OutputConfigurationType', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.PadOperation', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.PublishInsightRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.PublishInsightResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.QuoteCharacter', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.SetDefaultOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.SetDefaultOutputConfigurationResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.TableColumnConfig', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.TableVisualization', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UpdateInsightRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UpdateInsightResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UpdateOutputConfigurationRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.insights.UpdateOutputConfigurationResponse', null, global);
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
datasourceName: jspb.Message.getFieldWithDefault(msg, 12, "")
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
tableVisualization: (f = msg.getTableVisualization()) && proto.api.v1alpha1.insights.TableVisualization.toObject(includeInstance, f)
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
 * @enum {number}
 */
proto.api.v1alpha1.insights.OutputConfigurationType = {
  OUTPUT_CONFIGURATION_TYPE_UNSPECIFIED: 0,
  OUTPUT_CONFIGURATION_TYPE_TABLE: 1,
  OUTPUT_CONFIGURATION_TYPE_MULTI_SERIES: 2,
  OUTPUT_CONFIGURATION_TYPE_PIE_CHART: 3,
  OUTPUT_CONFIGURATION_TYPE_FIXED_WIDTH: 4
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
