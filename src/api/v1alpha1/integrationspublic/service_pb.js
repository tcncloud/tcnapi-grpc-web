// source: api/v1alpha1/integrationspublic/service.proto
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

var api_commons_acd_pb = require('../../../api/commons/acd_pb.js');
goog.object.extend(proto, api_commons_acd_pb);
var api_commons_integrations_integrations_pb = require('../../../api/commons/integrations/integrations_pb.js');
goog.object.extend(proto, api_commons_integrations_integrations_pb);
var api_v1alpha1_integrations_portals_pb = require('../../../api/v1alpha1/integrations/portals_pb.js');
goog.object.extend(proto, api_v1alpha1_integrations_portals_pb);
var api_v1alpha1_integrations_service_pb = require('../../../api/v1alpha1/integrations/service_pb.js');
goog.object.extend(proto, api_v1alpha1_integrations_service_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_type_money_pb = require('../../../google/type/money_pb.js');
goog.object.extend(proto, google_type_money_pb);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.CalculateFeesReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.CalculateFeesRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.CompositeVal', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.FieldOrStr', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.FieldOrStr.ValCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetInvoiceReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetInvoiceRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetLinkDataReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetLinkDataRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetReceiptReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.GetReceiptRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.IntegrationSettings', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.PortalConfig', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.PortalConfigId', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.PortalLinkId', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.PortalText', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.SubmitPaymentReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.SubmitPaymentRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.SubmitVerificationReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.SubmitVerificationRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.Value', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.Value.ValCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrationspublic.Values', null, global);
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
proto.api.v1alpha1.integrationspublic.Values = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.Values, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.Values.displayName = 'proto.api.v1alpha1.integrationspublic.Values';
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
proto.api.v1alpha1.integrationspublic.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.Value.displayName = 'proto.api.v1alpha1.integrationspublic.Value';
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
proto.api.v1alpha1.integrationspublic.CompositeVal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrationspublic.CompositeVal.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.CompositeVal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.CompositeVal.displayName = 'proto.api.v1alpha1.integrationspublic.CompositeVal';
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
proto.api.v1alpha1.integrationspublic.FieldOrStr = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.integrationspublic.FieldOrStr.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.FieldOrStr, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.FieldOrStr.displayName = 'proto.api.v1alpha1.integrationspublic.FieldOrStr';
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
proto.api.v1alpha1.integrationspublic.PortalConfigId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.PortalConfigId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.PortalConfigId.displayName = 'proto.api.v1alpha1.integrationspublic.PortalConfigId';
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
proto.api.v1alpha1.integrationspublic.PortalConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.PortalConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.PortalConfig.displayName = 'proto.api.v1alpha1.integrationspublic.PortalConfig';
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
proto.api.v1alpha1.integrationspublic.PortalLinkId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.PortalLinkId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.PortalLinkId.displayName = 'proto.api.v1alpha1.integrationspublic.PortalLinkId';
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
proto.api.v1alpha1.integrationspublic.GetLinkDataReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetLinkDataReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetLinkDataReq.displayName = 'proto.api.v1alpha1.integrationspublic.GetLinkDataReq';
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
proto.api.v1alpha1.integrationspublic.GetLinkDataRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrationspublic.GetLinkDataRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetLinkDataRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetLinkDataRes.displayName = 'proto.api.v1alpha1.integrationspublic.GetLinkDataRes';
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
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.displayName = 'proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames';
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
proto.api.v1alpha1.integrationspublic.PortalText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.PortalText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.PortalText.displayName = 'proto.api.v1alpha1.integrationspublic.PortalText';
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
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.SubmitVerificationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.displayName = 'proto.api.v1alpha1.integrationspublic.SubmitVerificationReq';
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
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.SubmitVerificationRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.displayName = 'proto.api.v1alpha1.integrationspublic.SubmitVerificationRes';
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
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.displayName = 'proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq';
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
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.displayName = 'proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes';
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
proto.api.v1alpha1.integrationspublic.GetInvoiceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetInvoiceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetInvoiceReq.displayName = 'proto.api.v1alpha1.integrationspublic.GetInvoiceReq';
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
proto.api.v1alpha1.integrationspublic.GetInvoiceRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetInvoiceRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetInvoiceRes.displayName = 'proto.api.v1alpha1.integrationspublic.GetInvoiceRes';
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
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.SubmitPaymentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.displayName = 'proto.api.v1alpha1.integrationspublic.SubmitPaymentReq';
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
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.SubmitPaymentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.displayName = 'proto.api.v1alpha1.integrationspublic.SubmitPaymentRes';
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
proto.api.v1alpha1.integrationspublic.GetReceiptReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetReceiptReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetReceiptReq.displayName = 'proto.api.v1alpha1.integrationspublic.GetReceiptReq';
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
proto.api.v1alpha1.integrationspublic.GetReceiptRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetReceiptRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetReceiptRes.displayName = 'proto.api.v1alpha1.integrationspublic.GetReceiptRes';
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
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.displayName = 'proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq';
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
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.displayName = 'proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes';
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
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.displayName = 'proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq';
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
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.displayName = 'proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes';
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
proto.api.v1alpha1.integrationspublic.CalculateFeesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrationspublic.CalculateFeesReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.CalculateFeesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.CalculateFeesReq.displayName = 'proto.api.v1alpha1.integrationspublic.CalculateFeesReq';
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
proto.api.v1alpha1.integrationspublic.CalculateFeesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.CalculateFeesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.CalculateFeesRes.displayName = 'proto.api.v1alpha1.integrationspublic.CalculateFeesRes';
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
proto.api.v1alpha1.integrationspublic.IntegrationSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrationspublic.IntegrationSettings.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.IntegrationSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.IntegrationSettings.displayName = 'proto.api.v1alpha1.integrationspublic.IntegrationSettings';
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
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.displayName = 'proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq';
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
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.displayName = 'proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes';
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
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.displayName = 'proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq';
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
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.displayName = 'proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes';
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
proto.api.v1alpha1.integrationspublic.Values.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.Values.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.Values} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.Values.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : []
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
 * @return {!proto.api.v1alpha1.integrationspublic.Values}
 */
proto.api.v1alpha1.integrationspublic.Values.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.Values;
  return proto.api.v1alpha1.integrationspublic.Values.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.Values} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.Values}
 */
proto.api.v1alpha1.integrationspublic.Values.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
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
proto.api.v1alpha1.integrationspublic.Values.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.Values.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.Values} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.Values.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
};


/**
 * map<string, Value> values = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.Values.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.Values} returns this
 */
proto.api.v1alpha1.integrationspublic.Values.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.integrationspublic.Value.oneofGroups_ = [[1,2,3,4,6,7]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.integrationspublic.Value.ValCase = {
  VAL_NOT_SET: 0,
  STR_VAL: 1,
  NUM_VAL: 2,
  BOOL_VAL: 3,
  TIME_VAL: 4,
  COMP_VAL: 6,
  INT_VAL: 7
};

/**
 * @return {proto.api.v1alpha1.integrationspublic.Value.ValCase}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getValCase = function() {
  return /** @type {proto.api.v1alpha1.integrationspublic.Value.ValCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0]));
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
proto.api.v1alpha1.integrationspublic.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
strVal: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
numVal: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
boolVal: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
timeVal: (f = msg.getTimeVal()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
compVal: (f = msg.getCompVal()) && proto.api.v1alpha1.integrationspublic.CompositeVal.toObject(includeInstance, f),
intVal: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
sensitive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
validation: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.api.v1alpha1.integrationspublic.Value}
 */
proto.api.v1alpha1.integrationspublic.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.Value;
  return proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.Value}
 */
proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStrVal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNumVal(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolVal(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeVal(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.integrationspublic.CompositeVal;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.CompositeVal.deserializeBinaryFromReader);
      msg.setCompVal(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntVal(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSensitive(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.integrations.Validation} */ (reader.readEnum());
      msg.setValidation(value);
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
proto.api.v1alpha1.integrationspublic.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getTimeVal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCompVal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v1alpha1.integrationspublic.CompositeVal.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getSensitive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getValidation();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string str_val = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getStrVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.setStrVal = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.clearStrVal = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.hasStrVal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double num_val = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getNumVal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.setNumVal = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.clearNumVal = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.hasNumVal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool bool_val = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getBoolVal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.setBoolVal = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.clearBoolVal = function() {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.hasBoolVal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp time_val = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getTimeVal = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
*/
proto.api.v1alpha1.integrationspublic.Value.prototype.setTimeVal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.clearTimeVal = function() {
  return this.setTimeVal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.hasTimeVal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CompositeVal comp_val = 6;
 * @return {?proto.api.v1alpha1.integrationspublic.CompositeVal}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getCompVal = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.CompositeVal} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.CompositeVal, 6));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.CompositeVal|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
*/
proto.api.v1alpha1.integrationspublic.Value.prototype.setCompVal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.clearCompVal = function() {
  return this.setCompVal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.hasCompVal = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 int_val = 7;
 * @return {number}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getIntVal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.setIntVal = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.clearIntVal = function() {
  return jspb.Message.setOneofField(this, 7, proto.api.v1alpha1.integrationspublic.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.hasIntVal = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool sensitive = 5;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getSensitive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.setSensitive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional api.commons.integrations.Validation validation = 8;
 * @return {!proto.api.commons.integrations.Validation}
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.getValidation = function() {
  return /** @type {!proto.api.commons.integrations.Validation} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.integrations.Validation} value
 * @return {!proto.api.v1alpha1.integrationspublic.Value} returns this
 */
proto.api.v1alpha1.integrationspublic.Value.prototype.setValidation = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrationspublic.CompositeVal.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrationspublic.CompositeVal.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.CompositeVal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.CompositeVal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.CompositeVal.toObject = function(includeInstance, msg) {
  var f, obj = {
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.api.v1alpha1.integrationspublic.FieldOrStr.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrationspublic.CompositeVal}
 */
proto.api.v1alpha1.integrationspublic.CompositeVal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.CompositeVal;
  return proto.api.v1alpha1.integrationspublic.CompositeVal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.CompositeVal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.CompositeVal}
 */
proto.api.v1alpha1.integrationspublic.CompositeVal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.FieldOrStr;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.FieldOrStr.deserializeBinaryFromReader);
      msg.addParts(value);
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
proto.api.v1alpha1.integrationspublic.CompositeVal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.CompositeVal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.CompositeVal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.CompositeVal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.FieldOrStr.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FieldOrStr parts = 1;
 * @return {!Array<!proto.api.v1alpha1.integrationspublic.FieldOrStr>}
 */
proto.api.v1alpha1.integrationspublic.CompositeVal.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrationspublic.FieldOrStr>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrationspublic.FieldOrStr, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrationspublic.FieldOrStr>} value
 * @return {!proto.api.v1alpha1.integrationspublic.CompositeVal} returns this
*/
proto.api.v1alpha1.integrationspublic.CompositeVal.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrationspublic.FieldOrStr=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrationspublic.FieldOrStr}
 */
proto.api.v1alpha1.integrationspublic.CompositeVal.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrationspublic.FieldOrStr, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.CompositeVal} returns this
 */
proto.api.v1alpha1.integrationspublic.CompositeVal.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.ValCase = {
  VAL_NOT_SET: 0,
  FIELD: 1,
  STR_VAL: 2
};

/**
 * @return {proto.api.v1alpha1.integrationspublic.FieldOrStr.ValCase}
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.getValCase = function() {
  return /** @type {proto.api.v1alpha1.integrationspublic.FieldOrStr.ValCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.integrationspublic.FieldOrStr.oneofGroups_[0]));
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
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.FieldOrStr.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.FieldOrStr} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.toObject = function(includeInstance, msg) {
  var f, obj = {
field: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
strVal: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrationspublic.FieldOrStr}
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.FieldOrStr;
  return proto.api.v1alpha1.integrationspublic.FieldOrStr.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.FieldOrStr} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.FieldOrStr}
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStrVal(value);
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
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.FieldOrStr.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.FieldOrStr} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.FieldOrStr} returns this
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.setField = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.v1alpha1.integrationspublic.FieldOrStr.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.FieldOrStr} returns this
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.clearField = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.v1alpha1.integrationspublic.FieldOrStr.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.hasField = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string str_val = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.getStrVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.FieldOrStr} returns this
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.setStrVal = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.integrationspublic.FieldOrStr.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.FieldOrStr} returns this
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.clearStrVal = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.integrationspublic.FieldOrStr.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.FieldOrStr.prototype.hasStrVal = function() {
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
proto.api.v1alpha1.integrationspublic.PortalConfigId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.PortalConfigId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.PortalConfigId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.PortalConfigId.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfigId}
 */
proto.api.v1alpha1.integrationspublic.PortalConfigId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.PortalConfigId;
  return proto.api.v1alpha1.integrationspublic.PortalConfigId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.PortalConfigId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfigId}
 */
proto.api.v1alpha1.integrationspublic.PortalConfigId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.api.v1alpha1.integrationspublic.PortalConfigId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.PortalConfigId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.PortalConfigId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.PortalConfigId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfigId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfigId} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfigId.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.PortalConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.PortalConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 21, ""),
name: jspb.Message.getFieldWithDefault(msg, 22, ""),
description: jspb.Message.getFieldWithDefault(msg, 23, ""),
chatClientLink: jspb.Message.getFieldWithDefault(msg, 2, ""),
contactEmail: jspb.Message.getFieldWithDefault(msg, 3, ""),
contactPhone: jspb.Message.getFieldWithDefault(msg, 4, ""),
postalCode: jspb.Message.getFieldWithDefault(msg, 5, ""),
city: jspb.Message.getFieldWithDefault(msg, 6, ""),
state: jspb.Message.getFieldWithDefault(msg, 7, ""),
companyName: jspb.Message.getFieldWithDefault(msg, 8, ""),
logo: msg.getLogo_asB64(),
primaryColor: jspb.Message.getFieldWithDefault(msg, 14, ""),
secondaryColor: jspb.Message.getFieldWithDefault(msg, 15, ""),
streetAddress: jspb.Message.getFieldWithDefault(msg, 19, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.PortalConfig;
  return proto.api.v1alpha1.integrationspublic.PortalConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.PortalConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatClientLink(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactPhone(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyName(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLogo(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryColor(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondaryColor(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreetAddress(value);
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
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.PortalConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.PortalConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getChatClientLink();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContactEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContactPhone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCompanyName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLogo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      13,
      f
    );
  }
  f = message.getPrimaryColor();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getSecondaryColor();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getStreetAddress();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
};


/**
 * optional string id = 21;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string name = 22;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string description = 23;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string chat_client_link = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getChatClientLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setChatClientLink = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contact_email = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getContactEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setContactEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contact_phone = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getContactPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setContactPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string postal_code = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string city = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string state = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string company_name = 8;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getCompanyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setCompanyName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bytes logo = 13;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes logo = 13;
 * This is a type-conversion wrapper around `getLogo()`
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getLogo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLogo()));
};


/**
 * optional bytes logo = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLogo()`
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getLogo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLogo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setLogo = function(value) {
  return jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional string primary_color = 14;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getPrimaryColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setPrimaryColor = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string secondary_color = 15;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getSecondaryColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setSecondaryColor = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string street_address = 19;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.getStreetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalConfig} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalConfig.prototype.setStreetAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
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
proto.api.v1alpha1.integrationspublic.PortalLinkId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.PortalLinkId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
  return proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.PortalLinkId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.api.v1alpha1.integrationspublic.PortalLinkId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.PortalLinkId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalLinkId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalLinkId} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalLinkId.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetLinkDataReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataReq}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetLinkDataReq;
  return proto.api.v1alpha1.integrationspublic.GetLinkDataReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataReq}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetLinkDataReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataReq} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataReq} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.repeatedFields_ = [7,9];



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
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetLinkDataRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.toObject = function(includeInstance, msg) {
  var f, obj = {
complete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
expired: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
portalConfig: (f = msg.getPortalConfig()) && proto.api.v1alpha1.integrationspublic.PortalConfig.toObject(includeInstance, f),
verification: (f = msg.getVerification()) && api_commons_integrations_integrations_pb.VerificationFlow.toObject(includeInstance, f),
invoice: (f = msg.getInvoice()) && api_commons_integrations_integrations_pb.InvoiceFlow.toObject(includeInstance, f),
paymentsList: jspb.Message.toObjectList(msg.getPaymentsList(),
    api_commons_integrations_integrations_pb.PaymentFlow.toObject, includeInstance),
flowFormsList: jspb.Message.toObjectList(msg.getFlowFormsList(),
    proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.toObject, includeInstance),
portalText: (f = msg.getPortalText()) && proto.api.v1alpha1.integrationspublic.PortalText.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetLinkDataRes;
  return proto.api.v1alpha1.integrationspublic.GetLinkDataRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setComplete(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpired(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.integrationspublic.PortalConfig;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalConfig.deserializeBinaryFromReader);
      msg.setPortalConfig(value);
      break;
    case 5:
      var value = new api_commons_integrations_integrations_pb.VerificationFlow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.VerificationFlow.deserializeBinaryFromReader);
      msg.setVerification(value);
      break;
    case 6:
      var value = new api_commons_integrations_integrations_pb.InvoiceFlow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.InvoiceFlow.deserializeBinaryFromReader);
      msg.setInvoice(value);
      break;
    case 7:
      var value = new api_commons_integrations_integrations_pb.PaymentFlow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.PaymentFlow.deserializeBinaryFromReader);
      msg.addPayments(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.deserializeBinaryFromReader);
      msg.addFlowForms(value);
      break;
    case 15:
      var value = new proto.api.v1alpha1.integrationspublic.PortalText;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalText.deserializeBinaryFromReader);
      msg.setPortalText(value);
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
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetLinkDataRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComplete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExpired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPortalConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.integrationspublic.PortalConfig.serializeBinaryToWriter
    );
  }
  f = message.getVerification();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_integrations_integrations_pb.VerificationFlow.serializeBinaryToWriter
    );
  }
  f = message.getInvoice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_integrations_integrations_pb.InvoiceFlow.serializeBinaryToWriter
    );
  }
  f = message.getPaymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      api_commons_integrations_integrations_pb.PaymentFlow.serializeBinaryToWriter
    );
  }
  f = message.getFlowFormsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.serializeBinaryToWriter
    );
  }
  f = message.getPortalText();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.api.v1alpha1.integrationspublic.PortalText.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.repeatedFields_ = [9,10];



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
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.toObject = function(includeInstance, msg) {
  var f, obj = {
flow: (f = msg.getFlow()) && api_commons_integrations_integrations_pb.Flow.toObject(includeInstance, f),
fieldNamesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    api_commons_integrations_integrations_pb.FieldDefinition.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames;
  return proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = new api_commons_integrations_integrations_pb.Flow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.Flow.deserializeBinaryFromReader);
      msg.setFlow(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addFieldNames(value);
      break;
    case 10:
      var value = new api_commons_integrations_integrations_pb.FieldDefinition;
      reader.readMessage(value,api_commons_integrations_integrations_pb.FieldDefinition.deserializeBinaryFromReader);
      msg.addFields(value);
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
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlow();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      api_commons_integrations_integrations_pb.Flow.serializeBinaryToWriter
    );
  }
  f = message.getFieldNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      api_commons_integrations_integrations_pb.FieldDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.integrations.Flow flow = 8;
 * @return {?proto.api.commons.integrations.Flow}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.getFlow = function() {
  return /** @type{?proto.api.commons.integrations.Flow} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.Flow, 8));
};


/**
 * @param {?proto.api.commons.integrations.Flow|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.setFlow = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.clearFlow = function() {
  return this.setFlow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.hasFlow = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string field_names = 9;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.getFieldNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.setFieldNamesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.addFieldNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.clearFieldNamesList = function() {
  return this.setFieldNamesList([]);
};


/**
 * repeated api.commons.integrations.FieldDefinition fields = 10;
 * @return {!Array<!proto.api.commons.integrations.FieldDefinition>}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.integrations.FieldDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_integrations_integrations_pb.FieldDefinition, 10));
};


/**
 * @param {!Array<!proto.api.commons.integrations.FieldDefinition>} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.api.commons.integrations.FieldDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.integrations.FieldDefinition}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.api.commons.integrations.FieldDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * optional bool complete = 2;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.getComplete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.setComplete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool expired = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.getExpired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.setExpired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional PortalConfig portal_config = 4;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalConfig}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.getPortalConfig = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalConfig, 4));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalConfig|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.setPortalConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.clearPortalConfig = function() {
  return this.setPortalConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.hasPortalConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.integrations.VerificationFlow verification = 5;
 * @return {?proto.api.commons.integrations.VerificationFlow}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.getVerification = function() {
  return /** @type{?proto.api.commons.integrations.VerificationFlow} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.VerificationFlow, 5));
};


/**
 * @param {?proto.api.commons.integrations.VerificationFlow|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.setVerification = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.clearVerification = function() {
  return this.setVerification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.hasVerification = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional api.commons.integrations.InvoiceFlow invoice = 6;
 * @return {?proto.api.commons.integrations.InvoiceFlow}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.getInvoice = function() {
  return /** @type{?proto.api.commons.integrations.InvoiceFlow} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.InvoiceFlow, 6));
};


/**
 * @param {?proto.api.commons.integrations.InvoiceFlow|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.setInvoice = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.clearInvoice = function() {
  return this.setInvoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.hasInvoice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated api.commons.integrations.PaymentFlow payments = 7;
 * @return {!Array<!proto.api.commons.integrations.PaymentFlow>}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.getPaymentsList = function() {
  return /** @type{!Array<!proto.api.commons.integrations.PaymentFlow>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_integrations_integrations_pb.PaymentFlow, 7));
};


/**
 * @param {!Array<!proto.api.commons.integrations.PaymentFlow>} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.setPaymentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.integrations.PaymentFlow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.integrations.PaymentFlow}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.addPayments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.integrations.PaymentFlow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.clearPaymentsList = function() {
  return this.setPaymentsList([]);
};


/**
 * repeated FieldNames flow_forms = 9;
 * @return {!Array<!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames>}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.getFlowFormsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames, 9));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames>} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.setFlowFormsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.addFlowForms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.clearFlowFormsList = function() {
  return this.setFlowFormsList([]);
};


/**
 * optional PortalText portal_text = 15;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalText}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.getPortalText = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalText} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalText, 15));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalText|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.setPortalText = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDataRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.clearPortalText = function() {
  return this.setPortalText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDataRes.prototype.hasPortalText = function() {
  return jspb.Message.getField(this, 15) != null;
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
proto.api.v1alpha1.integrationspublic.PortalText.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.PortalText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.PortalText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.PortalText.toObject = function(includeInstance, msg) {
  var f, obj = {
verificationHeader: jspb.Message.getFieldWithDefault(msg, 1, ""),
verificationFooter: jspb.Message.getFieldWithDefault(msg, 2, ""),
paymentHeader: jspb.Message.getFieldWithDefault(msg, 3, ""),
paymentFooter: jspb.Message.getFieldWithDefault(msg, 4, ""),
receiptHeader: jspb.Message.getFieldWithDefault(msg, 5, ""),
receiptFooter: jspb.Message.getFieldWithDefault(msg, 6, ""),
invoiceHeader: jspb.Message.getFieldWithDefault(msg, 7, ""),
invoiceFooter: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText}
 */
proto.api.v1alpha1.integrationspublic.PortalText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.PortalText;
  return proto.api.v1alpha1.integrationspublic.PortalText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.PortalText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText}
 */
proto.api.v1alpha1.integrationspublic.PortalText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationFooter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentHeader(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentFooter(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiptHeader(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiptFooter(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceHeader(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceFooter(value);
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
proto.api.v1alpha1.integrationspublic.PortalText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.PortalText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.PortalText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.PortalText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerificationHeader();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerificationFooter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaymentHeader();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPaymentFooter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceiptHeader();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReceiptFooter();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInvoiceHeader();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInvoiceFooter();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string verification_header = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.getVerificationHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.setVerificationHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string verification_footer = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.getVerificationFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.setVerificationFooter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string payment_header = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.getPaymentHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.setPaymentHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string payment_footer = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.getPaymentFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.setPaymentFooter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string receipt_header = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.getReceiptHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.setReceiptHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string receipt_footer = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.getReceiptFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.setReceiptFooter = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string invoice_header = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.getInvoiceHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.setInvoiceHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string invoice_footer = 8;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.getInvoiceFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.PortalText} returns this
 */
proto.api.v1alpha1.integrationspublic.PortalText.prototype.setInvoiceFooter = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitVerificationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(includeInstance, f),
verificationFieldsMap: (f = msg.getVerificationFieldsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : []
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
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationReq}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.SubmitVerificationReq;
  return proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitVerificationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationReq}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = msg.getVerificationFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
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
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitVerificationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter
    );
  }
  f = message.getVerificationFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationReq} returns this
*/
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationReq} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, Value> verification_fields = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.prototype.getVerificationFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationReq} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationReq.prototype.clearVerificationFieldsMap = function() {
  this.getVerificationFieldsMap().clear();
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
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitVerificationRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.toObject = function(includeInstance, msg) {
  var f, obj = {
verified: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationRes}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.SubmitVerificationRes;
  return proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitVerificationRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationRes}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitVerificationRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool verified = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationRes} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitVerificationRes} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitVerificationRes.prototype.setSessionId = function(value) {
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
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(includeInstance, f),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq;
  return proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq} returns this
*/
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq} returns this
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq} returns this
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveReq.prototype.setSessionId = function(value) {
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
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.toObject = function(includeInstance, msg) {
  var f, obj = {
ok: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes;
  return proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOk(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool ok = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes} returns this
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes} returns this
 */
proto.api.v1alpha1.integrationspublic.SessionKeepAliveRes.prototype.setSessionId = function(value) {
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
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetInvoiceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetInvoiceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(includeInstance, f),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceReq}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetInvoiceReq;
  return proto.api.v1alpha1.integrationspublic.GetInvoiceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetInvoiceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceReq}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetInvoiceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetInvoiceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceReq} returns this
*/
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceReq} returns this
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceReq} returns this
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceReq.prototype.setSessionId = function(value) {
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
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetInvoiceRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.toObject = function(includeInstance, msg) {
  var f, obj = {
fieldsMap: (f = msg.getFieldsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : [],
amountDue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
amountDueKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
invoices: (f = msg.getInvoices()) && api_commons_integrations_integrations_pb.Invoices.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetInvoiceRes;
  return proto.api.v1alpha1.integrationspublic.GetInvoiceRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
         });
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmountDue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmountDueKey(value);
      break;
    case 4:
      var value = new api_commons_integrations_integrations_pb.Invoices;
      reader.readMessage(value,api_commons_integrations_integrations_pb.Invoices.deserializeBinaryFromReader);
      msg.setInvoices(value);
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
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetInvoiceRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
  f = message.getAmountDue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAmountDueKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInvoices();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_integrations_integrations_pb.Invoices.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, Value> fields = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.getFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.clearFieldsMap = function() {
  this.getFieldsMap().clear();
  return this;
};


/**
 * optional double amount_due = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.getAmountDue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.setAmountDue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string amount_due_key = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.getAmountDueKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.setAmountDueKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.integrations.Invoices invoices = 4;
 * @return {?proto.api.commons.integrations.Invoices}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.getInvoices = function() {
  return /** @type{?proto.api.commons.integrations.Invoices} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.Invoices, 4));
};


/**
 * @param {?proto.api.commons.integrations.Invoices|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.setInvoices = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetInvoiceRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.clearInvoices = function() {
  return this.setInvoices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetInvoiceRes.prototype.hasInvoices = function() {
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
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(includeInstance, f),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
paymentFieldsMap: (f = msg.getPaymentFieldsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : [],
paymentFlow: (f = msg.getPaymentFlow()) && api_commons_integrations_integrations_pb.PaymentFlow.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.SubmitPaymentReq;
  return proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 3:
      var value = msg.getPaymentFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
         });
      break;
    case 4:
      var value = new api_commons_integrations_integrations_pb.PaymentFlow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.PaymentFlow.deserializeBinaryFromReader);
      msg.setPaymentFlow(value);
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
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaymentFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
  f = message.getPaymentFlow();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_integrations_integrations_pb.PaymentFlow.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} returns this
*/
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, Value> payment_fields = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.getPaymentFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.clearPaymentFieldsMap = function() {
  this.getPaymentFieldsMap().clear();
  return this;
};


/**
 * optional api.commons.integrations.PaymentFlow payment_flow = 4;
 * @return {?proto.api.commons.integrations.PaymentFlow}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.getPaymentFlow = function() {
  return /** @type{?proto.api.commons.integrations.PaymentFlow} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.PaymentFlow, 4));
};


/**
 * @param {?proto.api.commons.integrations.PaymentFlow|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} returns this
*/
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.setPaymentFlow = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentReq} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.clearPaymentFlow = function() {
  return this.setPaymentFlow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentReq.prototype.hasPaymentFlow = function() {
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
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitPaymentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.toObject = function(includeInstance, msg) {
  var f, obj = {
fieldsMap: (f = msg.getFieldsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : [],
amountPaid: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
amountPaidKey: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentRes}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.SubmitPaymentRes;
  return proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitPaymentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentRes}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
         });
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmountPaid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmountPaidKey(value);
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
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.SubmitPaymentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
  f = message.getAmountPaid();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getAmountPaidKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * map<string, Value> fields = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.prototype.getFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentRes} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.prototype.clearFieldsMap = function() {
  this.getFieldsMap().clear();
  return this;
};


/**
 * optional double amount_paid = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.prototype.getAmountPaid = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentRes} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.prototype.setAmountPaid = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string amount_paid_key = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.prototype.getAmountPaidKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.SubmitPaymentRes} returns this
 */
proto.api.v1alpha1.integrationspublic.SubmitPaymentRes.prototype.setAmountPaidKey = function(value) {
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
proto.api.v1alpha1.integrationspublic.GetReceiptReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetReceiptReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetReceiptReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(includeInstance, f),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptReq}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetReceiptReq;
  return proto.api.v1alpha1.integrationspublic.GetReceiptReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetReceiptReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptReq}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.api.v1alpha1.integrationspublic.GetReceiptReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetReceiptReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetReceiptReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptReq} returns this
*/
proto.api.v1alpha1.integrationspublic.GetReceiptReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptReq} returns this
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptReq} returns this
 */
proto.api.v1alpha1.integrationspublic.GetReceiptReq.prototype.setSessionId = function(value) {
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
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetReceiptRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.toObject = function(includeInstance, msg) {
  var f, obj = {
receiptId: jspb.Message.getFieldWithDefault(msg, 1, ""),
requestMap: (f = msg.getRequestMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : [],
responseMap: (f = msg.getResponseMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : [],
amountPaid: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
amountPaidKey: jspb.Message.getFieldWithDefault(msg, 5, ""),
paymentFlow: (f = msg.getPaymentFlow()) && api_commons_integrations_integrations_pb.PaymentFlow.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetReceiptRes;
  return proto.api.v1alpha1.integrationspublic.GetReceiptRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiptId(value);
      break;
    case 2:
      var value = msg.getRequestMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
         });
      break;
    case 3:
      var value = msg.getResponseMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmountPaid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmountPaidKey(value);
      break;
    case 6:
      var value = new api_commons_integrations_integrations_pb.PaymentFlow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.PaymentFlow.deserializeBinaryFromReader);
      msg.setPaymentFlow(value);
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
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetReceiptRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiptId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
  f = message.getResponseMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
  f = message.getAmountPaid();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAmountPaidKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPaymentFlow();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_integrations_integrations_pb.PaymentFlow.serializeBinaryToWriter
    );
  }
};


/**
 * optional string receipt_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.getReceiptId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.setReceiptId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, Value> request = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.getRequestMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.clearRequestMap = function() {
  this.getRequestMap().clear();
  return this;
};


/**
 * map<string, Value> response = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.getResponseMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.clearResponseMap = function() {
  this.getResponseMap().clear();
  return this;
};


/**
 * optional double amount_paid = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.getAmountPaid = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.setAmountPaid = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string amount_paid_key = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.getAmountPaidKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.setAmountPaidKey = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional api.commons.integrations.PaymentFlow payment_flow = 6;
 * @return {?proto.api.commons.integrations.PaymentFlow}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.getPaymentFlow = function() {
  return /** @type{?proto.api.commons.integrations.PaymentFlow} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.PaymentFlow, 6));
};


/**
 * @param {?proto.api.commons.integrations.PaymentFlow|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.setPaymentFlow = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetReceiptRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.clearPaymentFlow = function() {
  return this.setPaymentFlow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetReceiptRes.prototype.hasPaymentFlow = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.toObject = function(includeInstance, msg) {
  var f, obj = {
portalLinkId: jspb.Message.getFieldWithDefault(msg, 1, ""),
portalId: jspb.Message.getFieldWithDefault(msg, 2, ""),
segment: jspb.Message.getFieldWithDefault(msg, 3, 0),
choice: jspb.Message.getFieldWithDefault(msg, 4, 0),
paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : [],
requestOrigin: jspb.Message.getFieldWithDefault(msg, 6, 0),
sessionId: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq;
  return proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortalLinkId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortalId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSegment(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChoice(value);
      break;
    case 5:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
         });
      break;
    case 6:
      var value = /** @type {!proto.api.commons.integrations.RequestOrigin} */ (reader.readEnum());
      msg.setRequestOrigin(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortalLinkId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPortalId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSegment();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getChoice();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
  f = message.getRequestOrigin();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string portal_link_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.getPortalLinkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.setPortalLinkId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string portal_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.getPortalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.setPortalId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 segment = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.getSegment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.setSegment = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 choice = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.getChoice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.setChoice = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * map<string, Value> params = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;
};


/**
 * optional api.commons.integrations.RequestOrigin request_origin = 6;
 * @return {!proto.api.commons.integrations.RequestOrigin}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.getRequestOrigin = function() {
  return /** @type {!proto.api.commons.integrations.RequestOrigin} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestOrigin} value
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.setRequestOrigin = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string session_id = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowReq.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : [],
sessionId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes;
  return proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * map<string, Value> data = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes} returns this
 */
proto.api.v1alpha1.integrationspublic.ProcessWorkflowRes.prototype.setSessionId = function(value) {
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
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq;
  return proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsReq.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
portal: (f = msg.getPortal()) && api_v1alpha1_integrations_service_pb.Portal.toObject(includeInstance, f),
portalConfig: (f = msg.getPortalConfig()) && proto.api.v1alpha1.integrationspublic.PortalConfig.toObject(includeInstance, f),
expired: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
completed: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
portalDefinition: (f = msg.getPortalDefinition()) && api_v1alpha1_integrations_portals_pb.PortalDefinition.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes;
  return proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_v1alpha1_integrations_service_pb.Portal;
      reader.readMessage(value,api_v1alpha1_integrations_service_pb.Portal.deserializeBinaryFromReader);
      msg.setPortal(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.integrationspublic.PortalConfig;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalConfig.deserializeBinaryFromReader);
      msg.setPortalConfig(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpired(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompleted(value);
      break;
    case 5:
      var value = new api_v1alpha1_integrations_portals_pb.PortalDefinition;
      reader.readMessage(value,api_v1alpha1_integrations_portals_pb.PortalDefinition.deserializeBinaryFromReader);
      msg.setPortalDefinition(value);
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
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_v1alpha1_integrations_service_pb.Portal.serializeBinaryToWriter
    );
  }
  f = message.getPortalConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.integrationspublic.PortalConfig.serializeBinaryToWriter
    );
  }
  f = message.getExpired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCompleted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPortalDefinition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_v1alpha1_integrations_portals_pb.PortalDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.v1alpha1.integrations.Portal portal = 1;
 * @return {?proto.api.v1alpha1.integrations.Portal}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.getPortal = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Portal} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_service_pb.Portal, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Portal|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.setPortal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.clearPortal = function() {
  return this.setPortal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.hasPortal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PortalConfig portal_config = 2;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalConfig}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.getPortalConfig = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalConfig, 2));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalConfig|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.setPortalConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.clearPortalConfig = function() {
  return this.setPortalConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.hasPortalConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool expired = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.getExpired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.setExpired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool completed = 4;
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.getCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.setCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional api.v1alpha1.integrations.PortalDefinition portal_definition = 5;
 * @return {?proto.api.v1alpha1.integrations.PortalDefinition}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.getPortalDefinition = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalDefinition} */ (
    jspb.Message.getWrapperField(this, api_v1alpha1_integrations_portals_pb.PortalDefinition, 5));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalDefinition|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} returns this
*/
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.setPortalDefinition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.clearPortalDefinition = function() {
  return this.setPortalDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.GetLinkDetailsRes.prototype.hasPortalDefinition = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.repeatedFields_ = [2];



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
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.CalculateFeesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.PortalLinkId.toObject(includeInstance, f),
feesList: jspb.Message.toObjectList(msg.getFeesList(),
    api_commons_integrations_integrations_pb.Fee.toObject, includeInstance),
paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrationspublic.Value.toObject) : [],
callSid: jspb.Message.getFieldWithDefault(msg, 4, 0),
callType: jspb.Message.getFieldWithDefault(msg, 5, 0),
requestOrigin: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.CalculateFeesReq;
  return proto.api.v1alpha1.integrationspublic.CalculateFeesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.PortalLinkId;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.PortalLinkId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new api_commons_integrations_integrations_pb.Fee;
      reader.readMessage(value,api_commons_integrations_integrations_pb.Fee.deserializeBinaryFromReader);
      msg.addFees(value);
      break;
    case 3:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrationspublic.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrationspublic.Value());
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.integrations.RequestOrigin} */ (reader.readEnum());
      msg.setRequestOrigin(value);
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
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.CalculateFeesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.PortalLinkId.serializeBinaryToWriter
    );
  }
  f = message.getFeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_integrations_integrations_pb.Fee.serializeBinaryToWriter
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrationspublic.Value.serializeBinaryToWriter);
  }
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getRequestOrigin();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional PortalLinkId entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.PortalLinkId}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.PortalLinkId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.PortalLinkId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.PortalLinkId|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} returns this
*/
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} returns this
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated api.commons.integrations.Fee fees = 2;
 * @return {!Array<!proto.api.commons.integrations.Fee>}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.getFeesList = function() {
  return /** @type{!Array<!proto.api.commons.integrations.Fee>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_integrations_integrations_pb.Fee, 2));
};


/**
 * @param {!Array<!proto.api.commons.integrations.Fee>} value
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} returns this
*/
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.setFeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.integrations.Fee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.integrations.Fee}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.addFees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.integrations.Fee, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} returns this
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.clearFeesList = function() {
  return this.setFeesList([]);
};


/**
 * map<string, Value> params = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrationspublic.Value>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.api.v1alpha1.integrationspublic.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} returns this
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;
};


/**
 * optional int64 call_sid = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} returns this
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 5;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} returns this
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional api.commons.integrations.RequestOrigin request_origin = 6;
 * @return {!proto.api.commons.integrations.RequestOrigin}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.getRequestOrigin = function() {
  return /** @type {!proto.api.commons.integrations.RequestOrigin} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestOrigin} value
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesReq} returns this
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesReq.prototype.setRequestOrigin = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
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
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.CalculateFeesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.CalculateFeesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
calculatedFeesMap: (f = msg.getCalculatedFeesMap()) ? f.toObject(includeInstance, proto.google.type.Money.toObject) : [],
totalAmountDue: (f = msg.getTotalAmountDue()) && google_type_money_pb.Money.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesRes}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.CalculateFeesRes;
  return proto.api.v1alpha1.integrationspublic.CalculateFeesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.CalculateFeesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesRes}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getCalculatedFeesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.type.Money.deserializeBinaryFromReader, "", new proto.google.type.Money());
         });
      break;
    case 2:
      var value = new google_type_money_pb.Money;
      reader.readMessage(value,google_type_money_pb.Money.deserializeBinaryFromReader);
      msg.setTotalAmountDue(value);
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
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.CalculateFeesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.CalculateFeesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCalculatedFeesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.type.Money.serializeBinaryToWriter);
  }
  f = message.getTotalAmountDue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_type_money_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, google.type.Money> calculated_fees = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.type.Money>}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.prototype.getCalculatedFeesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.type.Money>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.google.type.Money));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesRes} returns this
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.prototype.clearCalculatedFeesMap = function() {
  this.getCalculatedFeesMap().clear();
  return this;
};


/**
 * optional google.type.Money total_amount_due = 2;
 * @return {?proto.google.type.Money}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.prototype.getTotalAmountDue = function() {
  return /** @type{?proto.google.type.Money} */ (
    jspb.Message.getWrapperField(this, google_type_money_pb.Money, 2));
};


/**
 * @param {?proto.google.type.Money|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesRes} returns this
*/
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.prototype.setTotalAmountDue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.CalculateFeesRes} returns this
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.prototype.clearTotalAmountDue = function() {
  return this.setTotalAmountDue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.CalculateFeesRes.prototype.hasTotalAmountDue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrationspublic.IntegrationSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.IntegrationSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.IntegrationSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
allowedIntegrationsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrationspublic.IntegrationSettings}
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.IntegrationSettings;
  return proto.api.v1alpha1.integrationspublic.IntegrationSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.IntegrationSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.IntegrationSettings}
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.integrations.IntegrationType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAllowedIntegrations(values[i]);
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
proto.api.v1alpha1.integrationspublic.IntegrationSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.IntegrationSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.IntegrationSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowedIntegrationsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated api.commons.integrations.IntegrationType allowed_integrations = 1;
 * @return {!Array<!proto.api.commons.integrations.IntegrationType>}
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.prototype.getAllowedIntegrationsList = function() {
  return /** @type {!Array<!proto.api.commons.integrations.IntegrationType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.integrations.IntegrationType>} value
 * @return {!proto.api.v1alpha1.integrationspublic.IntegrationSettings} returns this
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.prototype.setAllowedIntegrationsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrationspublic.IntegrationSettings} returns this
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.prototype.addAllowedIntegrations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.IntegrationSettings} returns this
 */
proto.api.v1alpha1.integrationspublic.IntegrationSettings.prototype.clearAllowedIntegrationsList = function() {
  return this.setAllowedIntegrationsList([]);
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
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq}
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq;
  return proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq}
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
allowedIntegrationsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes}
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes;
  return proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes}
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.integrations.IntegrationType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAllowedIntegrations(values[i]);
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
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowedIntegrationsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated api.commons.integrations.IntegrationType allowed_integrations = 1;
 * @return {!Array<!proto.api.commons.integrations.IntegrationType>}
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.prototype.getAllowedIntegrationsList = function() {
  return /** @type {!Array<!proto.api.commons.integrations.IntegrationType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.integrations.IntegrationType>} value
 * @return {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.prototype.setAllowedIntegrationsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.prototype.addAllowedIntegrations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes} returns this
 */
proto.api.v1alpha1.integrationspublic.GetIntegrationSettingsRes.prototype.clearAllowedIntegrationsList = function() {
  return this.setAllowedIntegrationsList([]);
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
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrationspublic.IntegrationSettings.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq}
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq;
  return proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq}
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrationspublic.IntegrationSettings;
      reader.readMessage(value,proto.api.v1alpha1.integrationspublic.IntegrationSettings.deserializeBinaryFromReader);
      msg.setEntity(value);
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
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrationspublic.IntegrationSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional IntegrationSettings entity = 1;
 * @return {?proto.api.v1alpha1.integrationspublic.IntegrationSettings}
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrationspublic.IntegrationSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrationspublic.IntegrationSettings, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrationspublic.IntegrationSettings|undefined} value
 * @return {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq} returns this
*/
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq} returns this
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsReq.prototype.hasEntity = function() {
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
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes}
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes;
  return proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes}
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrationspublic.UpsertIntegrationSettingsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.api.v1alpha1.integrationspublic);
