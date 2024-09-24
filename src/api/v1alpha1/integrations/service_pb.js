// source: api/v1alpha1/integrations/service.proto
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

var annotations_authz_pb = require('../../../annotations/authz_pb.js');
goog.object.extend(proto, annotations_authz_pb);
var api_commons_acd_pb = require('../../../api/commons/acd_pb.js');
goog.object.extend(proto, api_commons_acd_pb);
var api_commons_integrations_integrations_pb = require('../../../api/commons/integrations/integrations_pb.js');
goog.object.extend(proto, api_commons_integrations_integrations_pb);
var api_commons_org_huntgroup_pb = require('../../../api/commons/org/huntgroup_pb.js');
goog.object.extend(proto, api_commons_org_huntgroup_pb);
var api_commons_perms_pb = require('../../../api/commons/perms_pb.js');
goog.object.extend(proto, api_commons_perms_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.v1alpha1.integrations.Action', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CalendarSummary', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CallEpicPatientReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CallEpicPatientRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CompositeVal', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Condition', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Conditions', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.DeletePortalConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Empty', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.FieldOrStr', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.FieldOrStr.ValCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetAggregatedMetadataReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetAggregatedMetadataRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetIntegrationConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetIntegrationTransactionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.GetPortalLogoReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IVRPortal', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationConfig', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationConfigs', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationInfo', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationInfos', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationTemplateInfo', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationTransaction', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationTransactionReportRow', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationType', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.IntegrationTypeSummary', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.InvoiceRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListJourneyConfigsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListLinksReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ListPortalConfigsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Logo', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.MapString', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.MethodCall', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.MethodInfo', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Parameter', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PastTxEntity', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PaymentLinkConfig', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PaymentLinkConfigs', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PaymentPortal', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PaymentProfile', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PaymentProfiles', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PaymentRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PluginInstance', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PluginInstanceId', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Portal', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalConfig', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalConfigId', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalConfigs', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalId', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalLink', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalLinkId', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalLinkTransactionRow', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalSegment', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalSegments', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalText', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalType', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalType.DataCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.PortalWorkflow', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ProcessReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ProcessRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ProcessWorkflowReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ProcessWorkflowRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ProfileName', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.ProvidedField', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.RefreshLinkReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.RefreshLinkRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Request', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Request.ValCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.RequestMethod', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.RequestSource', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.SearchPastTransactionsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.SearchPastTransactionsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.SummaryReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.SummaryRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Task', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Template', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Template.ValCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.TransactionResult', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.TransactionSummary', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.TransactionType', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UnknownField', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.UpdatePortalLogoReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Validation', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Value', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Value.ValCase', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.Values', null, global);
goog.exportSymbol('proto.api.v1alpha1.integrations.VerificationRequest', null, global);
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
proto.api.v1alpha1.integrations.ListJourneyConfigsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListJourneyConfigsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListJourneyConfigsReq.displayName = 'proto.api.v1alpha1.integrations.ListJourneyConfigsReq';
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
proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.displayName = 'proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq';
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
proto.api.v1alpha1.integrations.IntegrationConfigs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.IntegrationConfigs.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationConfigs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationConfigs.displayName = 'proto.api.v1alpha1.integrations.IntegrationConfigs';
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
proto.api.v1alpha1.integrations.GetIntegrationConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetIntegrationConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetIntegrationConfigReq.displayName = 'proto.api.v1alpha1.integrations.GetIntegrationConfigReq';
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
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.displayName = 'proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq';
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
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.displayName = 'proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq';
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
proto.api.v1alpha1.integrations.ProcessReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ProcessReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ProcessReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ProcessReq.displayName = 'proto.api.v1alpha1.integrations.ProcessReq';
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
proto.api.v1alpha1.integrations.ProcessRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ProcessRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ProcessRes.displayName = 'proto.api.v1alpha1.integrations.ProcessRes';
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
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.SearchPastTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.displayName = 'proto.api.v1alpha1.integrations.SearchPastTransactionsRequest';
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
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.SearchPastTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.displayName = 'proto.api.v1alpha1.integrations.SearchPastTransactionsResponse';
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
proto.api.v1alpha1.integrations.PastTxEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PastTxEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PastTxEntity.displayName = 'proto.api.v1alpha1.integrations.PastTxEntity';
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
proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.displayName = 'proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq';
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
proto.api.v1alpha1.integrations.IntegrationInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.IntegrationInfos.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationInfos.displayName = 'proto.api.v1alpha1.integrations.IntegrationInfos';
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
proto.api.v1alpha1.integrations.IntegrationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.IntegrationInfo.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationInfo.displayName = 'proto.api.v1alpha1.integrations.IntegrationInfo';
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
proto.api.v1alpha1.integrations.MethodInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.MethodInfo.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.MethodInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.MethodInfo.displayName = 'proto.api.v1alpha1.integrations.MethodInfo';
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
proto.api.v1alpha1.integrations.Parameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Parameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Parameter.displayName = 'proto.api.v1alpha1.integrations.Parameter';
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
proto.api.v1alpha1.integrations.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Empty.displayName = 'proto.api.v1alpha1.integrations.Empty';
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetIntegrationTransactionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.displayName = 'proto.api.v1alpha1.integrations.GetIntegrationTransactionReq';
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
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetAggregatedMetadataReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.displayName = 'proto.api.v1alpha1.integrations.GetAggregatedMetadataReq';
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
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetAggregatedMetadataRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.displayName = 'proto.api.v1alpha1.integrations.GetAggregatedMetadataRes';
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.displayName = 'proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq';
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
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationTransactionReportRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.displayName = 'proto.api.v1alpha1.integrations.IntegrationTransactionReportRow';
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.displayName = 'proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes';
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.displayName = 'proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq';
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.displayName = 'proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow';
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.displayName = 'proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes';
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
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.displayName = 'proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq';
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
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.displayName = 'proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes';
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
proto.api.v1alpha1.integrations.IntegrationType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationType.displayName = 'proto.api.v1alpha1.integrations.IntegrationType';
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
proto.api.v1alpha1.integrations.RequestMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.RequestMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.RequestMethod.displayName = 'proto.api.v1alpha1.integrations.RequestMethod';
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
proto.api.v1alpha1.integrations.TransactionType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.TransactionType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.TransactionType.displayName = 'proto.api.v1alpha1.integrations.TransactionType';
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
proto.api.v1alpha1.integrations.RequestSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.RequestSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.RequestSource.displayName = 'proto.api.v1alpha1.integrations.RequestSource';
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
proto.api.v1alpha1.integrations.TransactionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.TransactionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.TransactionResult.displayName = 'proto.api.v1alpha1.integrations.TransactionResult';
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
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.displayName = 'proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq';
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
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.displayName = 'proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes';
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
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.displayName = 'proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq';
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
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.displayName = 'proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq';
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
proto.api.v1alpha1.integrations.Logo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Logo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Logo.displayName = 'proto.api.v1alpha1.integrations.Logo';
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
proto.api.v1alpha1.integrations.ListPortalConfigsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPortalConfigsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPortalConfigsReq.displayName = 'proto.api.v1alpha1.integrations.ListPortalConfigsReq';
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
proto.api.v1alpha1.integrations.GetPortalConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalConfigReq.displayName = 'proto.api.v1alpha1.integrations.GetPortalConfigReq';
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
proto.api.v1alpha1.integrations.DeletePortalConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.DeletePortalConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.DeletePortalConfigReq.displayName = 'proto.api.v1alpha1.integrations.DeletePortalConfigReq';
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
proto.api.v1alpha1.integrations.UpdatePortalLogoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UpdatePortalLogoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UpdatePortalLogoReq.displayName = 'proto.api.v1alpha1.integrations.UpdatePortalLogoReq';
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
proto.api.v1alpha1.integrations.GetPortalLogoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalLogoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalLogoReq.displayName = 'proto.api.v1alpha1.integrations.GetPortalLogoReq';
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
proto.api.v1alpha1.integrations.RefreshLinkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.RefreshLinkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.RefreshLinkReq.displayName = 'proto.api.v1alpha1.integrations.RefreshLinkReq';
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
proto.api.v1alpha1.integrations.RefreshLinkRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.RefreshLinkRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.RefreshLinkRes.displayName = 'proto.api.v1alpha1.integrations.RefreshLinkRes';
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
proto.api.v1alpha1.integrations.PaymentLinkConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PaymentLinkConfig.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PaymentLinkConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PaymentLinkConfig.displayName = 'proto.api.v1alpha1.integrations.PaymentLinkConfig';
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
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.displayName = 'proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates';
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
proto.api.v1alpha1.integrations.VerificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.VerificationRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.VerificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.VerificationRequest.displayName = 'proto.api.v1alpha1.integrations.VerificationRequest';
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
proto.api.v1alpha1.integrations.PaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PaymentRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PaymentRequest.displayName = 'proto.api.v1alpha1.integrations.PaymentRequest';
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
proto.api.v1alpha1.integrations.InvoiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.InvoiceRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.InvoiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.InvoiceRequest.displayName = 'proto.api.v1alpha1.integrations.InvoiceRequest';
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
proto.api.v1alpha1.integrations.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.integrations.Request.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.integrations.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Request.displayName = 'proto.api.v1alpha1.integrations.Request';
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
proto.api.v1alpha1.integrations.Validation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Validation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Validation.displayName = 'proto.api.v1alpha1.integrations.Validation';
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
proto.api.v1alpha1.integrations.MethodCall = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.MethodCall, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.MethodCall.displayName = 'proto.api.v1alpha1.integrations.MethodCall';
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
proto.api.v1alpha1.integrations.PortalConfigs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PortalConfigs.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalConfigs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalConfigs.displayName = 'proto.api.v1alpha1.integrations.PortalConfigs';
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
proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.displayName = 'proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq';
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
proto.api.v1alpha1.integrations.PaymentLinkConfigs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PaymentLinkConfigs.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PaymentLinkConfigs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PaymentLinkConfigs.displayName = 'proto.api.v1alpha1.integrations.PaymentLinkConfigs';
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
proto.api.v1alpha1.integrations.ListLinksReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListLinksReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListLinksReq.displayName = 'proto.api.v1alpha1.integrations.ListLinksReq';
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
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.displayName = 'proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq';
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
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.displayName = 'proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes';
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
proto.api.v1alpha1.integrations.SummaryReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.SummaryReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.SummaryReq.displayName = 'proto.api.v1alpha1.integrations.SummaryReq';
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
proto.api.v1alpha1.integrations.SummaryRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.SummaryRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.SummaryRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.SummaryRes.displayName = 'proto.api.v1alpha1.integrations.SummaryRes';
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
proto.api.v1alpha1.integrations.CalendarSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.CalendarSummary.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CalendarSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CalendarSummary.displayName = 'proto.api.v1alpha1.integrations.CalendarSummary';
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
proto.api.v1alpha1.integrations.IntegrationTypeSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationTypeSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationTypeSummary.displayName = 'proto.api.v1alpha1.integrations.IntegrationTypeSummary';
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
proto.api.v1alpha1.integrations.TransactionSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.TransactionSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.TransactionSummary.displayName = 'proto.api.v1alpha1.integrations.TransactionSummary';
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
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.displayName = 'proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq';
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
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.displayName = 'proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes';
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
proto.api.v1alpha1.integrations.IntegrationTemplateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationTemplateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationTemplateInfo.displayName = 'proto.api.v1alpha1.integrations.IntegrationTemplateInfo';
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
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.displayName = 'proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq';
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
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.displayName = 'proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes';
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
proto.api.v1alpha1.integrations.ProfileName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ProfileName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ProfileName.displayName = 'proto.api.v1alpha1.integrations.ProfileName';
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
proto.api.v1alpha1.integrations.PaymentProfiles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PaymentProfiles.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PaymentProfiles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PaymentProfiles.displayName = 'proto.api.v1alpha1.integrations.PaymentProfiles';
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
proto.api.v1alpha1.integrations.PaymentProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PaymentProfile.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PaymentProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PaymentProfile.displayName = 'proto.api.v1alpha1.integrations.PaymentProfile';
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
proto.api.v1alpha1.integrations.UnknownField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.UnknownField.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.UnknownField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.UnknownField.displayName = 'proto.api.v1alpha1.integrations.UnknownField';
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
proto.api.v1alpha1.integrations.ProvidedField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ProvidedField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ProvidedField.displayName = 'proto.api.v1alpha1.integrations.ProvidedField';
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
proto.api.v1alpha1.integrations.Values = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Values, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Values.displayName = 'proto.api.v1alpha1.integrations.Values';
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
proto.api.v1alpha1.integrations.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.integrations.Value.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.integrations.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Value.displayName = 'proto.api.v1alpha1.integrations.Value';
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
proto.api.v1alpha1.integrations.FieldOrStr = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.integrations.FieldOrStr.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.integrations.FieldOrStr, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.FieldOrStr.displayName = 'proto.api.v1alpha1.integrations.FieldOrStr';
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
proto.api.v1alpha1.integrations.CompositeVal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.CompositeVal.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CompositeVal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CompositeVal.displayName = 'proto.api.v1alpha1.integrations.CompositeVal';
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
proto.api.v1alpha1.integrations.Condition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Condition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Condition.displayName = 'proto.api.v1alpha1.integrations.Condition';
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
proto.api.v1alpha1.integrations.IntegrationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationConfig.displayName = 'proto.api.v1alpha1.integrations.IntegrationConfig';
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
proto.api.v1alpha1.integrations.IntegrationTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IntegrationTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IntegrationTransaction.displayName = 'proto.api.v1alpha1.integrations.IntegrationTransaction';
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
proto.api.v1alpha1.integrations.MapString = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.MapString, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.MapString.displayName = 'proto.api.v1alpha1.integrations.MapString';
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
proto.api.v1alpha1.integrations.Conditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.Conditions.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Conditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Conditions.displayName = 'proto.api.v1alpha1.integrations.Conditions';
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
proto.api.v1alpha1.integrations.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Task.displayName = 'proto.api.v1alpha1.integrations.Task';
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
proto.api.v1alpha1.integrations.PortalConfigId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalConfigId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalConfigId.displayName = 'proto.api.v1alpha1.integrations.PortalConfigId';
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
proto.api.v1alpha1.integrations.PortalConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalConfig.displayName = 'proto.api.v1alpha1.integrations.PortalConfig';
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
proto.api.v1alpha1.integrations.PortalLinkId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalLinkId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalLinkId.displayName = 'proto.api.v1alpha1.integrations.PortalLinkId';
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
proto.api.v1alpha1.integrations.PortalLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalLink.displayName = 'proto.api.v1alpha1.integrations.PortalLink';
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
proto.api.v1alpha1.integrations.PortalId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalId.displayName = 'proto.api.v1alpha1.integrations.PortalId';
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
proto.api.v1alpha1.integrations.Portal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.Portal.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Portal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Portal.displayName = 'proto.api.v1alpha1.integrations.Portal';
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
proto.api.v1alpha1.integrations.PortalSegments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PortalSegments.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalSegments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalSegments.displayName = 'proto.api.v1alpha1.integrations.PortalSegments';
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
proto.api.v1alpha1.integrations.PortalText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalText.displayName = 'proto.api.v1alpha1.integrations.PortalText';
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
proto.api.v1alpha1.integrations.PortalType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.integrations.PortalType.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalType.displayName = 'proto.api.v1alpha1.integrations.PortalType';
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
proto.api.v1alpha1.integrations.PaymentPortal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PaymentPortal.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PaymentPortal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PaymentPortal.displayName = 'proto.api.v1alpha1.integrations.PaymentPortal';
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
proto.api.v1alpha1.integrations.IVRPortal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.IVRPortal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.IVRPortal.displayName = 'proto.api.v1alpha1.integrations.IVRPortal';
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
proto.api.v1alpha1.integrations.PluginInstanceId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PluginInstanceId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PluginInstanceId.displayName = 'proto.api.v1alpha1.integrations.PluginInstanceId';
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
proto.api.v1alpha1.integrations.PluginInstance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PluginInstance.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PluginInstance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PluginInstance.displayName = 'proto.api.v1alpha1.integrations.PluginInstance';
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
proto.api.v1alpha1.integrations.PortalLinkTransactionRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalLinkTransactionRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalLinkTransactionRow.displayName = 'proto.api.v1alpha1.integrations.PortalLinkTransactionRow';
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
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.displayName = 'proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq';
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
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.displayName = 'proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes';
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
proto.api.v1alpha1.integrations.CallEpicPatientReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CallEpicPatientReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CallEpicPatientReq.displayName = 'proto.api.v1alpha1.integrations.CallEpicPatientReq';
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
proto.api.v1alpha1.integrations.CallEpicPatientRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.CallEpicPatientRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.CallEpicPatientRes.displayName = 'proto.api.v1alpha1.integrations.CallEpicPatientRes';
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
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.displayName = 'proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq';
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
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.displayName = 'proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq';
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
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.displayName = 'proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes';
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
proto.api.v1alpha1.integrations.PortalSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PortalSegment.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalSegment.displayName = 'proto.api.v1alpha1.integrations.PortalSegment';
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
proto.api.v1alpha1.integrations.PortalWorkflow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.integrations.PortalWorkflow.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PortalWorkflow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PortalWorkflow.displayName = 'proto.api.v1alpha1.integrations.PortalWorkflow';
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
proto.api.v1alpha1.integrations.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Action.displayName = 'proto.api.v1alpha1.integrations.Action';
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
proto.api.v1alpha1.integrations.Template = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1alpha1.integrations.Template.oneofGroups_);
};
goog.inherits(proto.api.v1alpha1.integrations.Template, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.Template.displayName = 'proto.api.v1alpha1.integrations.Template';
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
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.displayName = 'proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq';
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
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.displayName = 'proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes';
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
proto.api.v1alpha1.integrations.ProcessWorkflowReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ProcessWorkflowReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ProcessWorkflowReq.displayName = 'proto.api.v1alpha1.integrations.ProcessWorkflowReq';
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
proto.api.v1alpha1.integrations.ProcessWorkflowRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.integrations.ProcessWorkflowRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.integrations.ProcessWorkflowRes.displayName = 'proto.api.v1alpha1.integrations.ProcessWorkflowRes';
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
proto.api.v1alpha1.integrations.ListJourneyConfigsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListJourneyConfigsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListJourneyConfigsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListJourneyConfigsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.ListJourneyConfigsReq}
 */
proto.api.v1alpha1.integrations.ListJourneyConfigsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListJourneyConfigsReq;
  return proto.api.v1alpha1.integrations.ListJourneyConfigsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListJourneyConfigsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListJourneyConfigsReq}
 */
proto.api.v1alpha1.integrations.ListJourneyConfigsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.ListJourneyConfigsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListJourneyConfigsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListJourneyConfigsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListJourneyConfigsReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq}
 */
proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq;
  return proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq}
 */
proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListNonJourneyConfigsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.IntegrationConfigs.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.IntegrationConfigs.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationConfigs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationConfigs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationConfigs.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.api.v1alpha1.integrations.IntegrationConfig.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfigs}
 */
proto.api.v1alpha1.integrations.IntegrationConfigs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationConfigs;
  return proto.api.v1alpha1.integrations.IntegrationConfigs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationConfigs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfigs}
 */
proto.api.v1alpha1.integrations.IntegrationConfigs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.IntegrationConfig;
      reader.readMessage(value,proto.api.v1alpha1.integrations.IntegrationConfig.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.api.v1alpha1.integrations.IntegrationConfigs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationConfigs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationConfigs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationConfigs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.IntegrationConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IntegrationConfig values = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.IntegrationConfig>}
 */
proto.api.v1alpha1.integrations.IntegrationConfigs.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.IntegrationConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.IntegrationConfig, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.IntegrationConfig>} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfigs} returns this
*/
proto.api.v1alpha1.integrations.IntegrationConfigs.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.IntegrationConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig}
 */
proto.api.v1alpha1.integrations.IntegrationConfigs.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.IntegrationConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfigs} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfigs.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetIntegrationConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationId: jspb.Message.getFieldWithDefault(msg, 3, 0),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
id: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationConfigReq}
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetIntegrationConfigReq;
  return proto.api.v1alpha1.integrations.GetIntegrationConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationConfigReq}
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
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
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetIntegrationConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 3;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string id = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationConfigReq.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
integrationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
name: jspb.Message.getFieldWithDefault(msg, 5, ""),
description: jspb.Message.getFieldWithDefault(msg, 7, ""),
params: (f = msg.getParams()) && proto.api.v1alpha1.integrations.Values.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq}
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq;
  return proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq}
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.integrations.Values;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Values.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
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
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.integrations.Values.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 4;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Values params = 9;
 * @return {?proto.api.v1alpha1.integrations.Values}
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.getParams = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Values} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Values, 9));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Values|undefined} value
 * @return {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} returns this
*/
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.UpdateIntegrationConfigReq.prototype.hasParams = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
name: jspb.Message.getFieldWithDefault(msg, 5, ""),
id: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq}
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq;
  return proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq}
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
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
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 4;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string id = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq} returns this
 */
proto.api.v1alpha1.integrations.DeleteIntegrationConfigReq.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ProcessReq.repeatedFields_ = [7];



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
proto.api.v1alpha1.integrations.ProcessReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ProcessReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ProcessReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProcessReq.toObject = function(includeInstance, msg) {
  var f, obj = {
requestId: jspb.Message.getFieldWithDefault(msg, 8, ""),
integrationId: jspb.Message.getFieldWithDefault(msg, 3, 0),
methodId: jspb.Message.getFieldWithDefault(msg, 4, 0),
configName: jspb.Message.getFieldWithDefault(msg, 5, ""),
configId: jspb.Message.getFieldWithDefault(msg, 9, ""),
paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
condsList: jspb.Message.toObjectList(msg.getCondsList(),
    proto.api.v1alpha1.integrations.Condition.toObject, includeInstance),
callSid: jspb.Message.getFieldWithDefault(msg, 10, 0),
callType: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.api.v1alpha1.integrations.ProcessReq}
 */
proto.api.v1alpha1.integrations.ProcessReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ProcessReq;
  return proto.api.v1alpha1.integrations.ProcessReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ProcessReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ProcessReq}
 */
proto.api.v1alpha1.integrations.ProcessReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigId(value);
      break;
    case 6:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 7:
      var value = new proto.api.v1alpha1.integrations.Condition;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Condition.deserializeBinaryFromReader);
      msg.addConds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 11:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
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
proto.api.v1alpha1.integrations.ProcessReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ProcessReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ProcessReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProcessReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getConfigName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getConfigId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getCondsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.api.v1alpha1.integrations.Condition.serializeBinaryToWriter
    );
  }
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional string request_id = 8;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 3;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 4;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string config_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getConfigName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.setConfigName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string config_id = 9;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.setConfigId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * map<string, Value> params = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;
};


/**
 * repeated Condition conds = 7;
 * @return {!Array<!proto.api.v1alpha1.integrations.Condition>}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getCondsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Condition, 7));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Condition>} value
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
*/
proto.api.v1alpha1.integrations.ProcessReq.prototype.setCondsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Condition}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.addConds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.v1alpha1.integrations.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.clearCondsList = function() {
  return this.setCondsList([]);
};


/**
 * optional int64 call_sid = 10;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 11;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v1alpha1.integrations.ProcessReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessReq.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
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
proto.api.v1alpha1.integrations.ProcessRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ProcessRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ProcessRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProcessRes.toObject = function(includeInstance, msg) {
  var f, obj = {
result: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
integration: jspb.Message.getFieldWithDefault(msg, 3, ""),
method: jspb.Message.getFieldWithDefault(msg, 4, ""),
transactionId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.api.v1alpha1.integrations.ProcessRes}
 */
proto.api.v1alpha1.integrations.ProcessRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ProcessRes;
  return proto.api.v1alpha1.integrations.ProcessRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ProcessRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ProcessRes}
 */
proto.api.v1alpha1.integrations.ProcessRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResult(value);
      break;
    case 2:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntegration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
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
proto.api.v1alpha1.integrations.ProcessRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ProcessRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ProcessRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProcessRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getIntegration();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool result = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.ProcessRes} returns this
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.setResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * map<string, Value> data = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.ProcessRes} returns this
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;
};


/**
 * optional string integration = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.getIntegration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProcessRes} returns this
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.setIntegration = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string method = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProcessRes} returns this
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string transaction_id = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProcessRes} returns this
 */
proto.api.v1alpha1.integrations.ProcessRes.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pluginInstanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
intId: jspb.Message.getFieldWithDefault(msg, 2, 0),
methodId: jspb.Message.getFieldWithDefault(msg, 3, 0),
matchFieldsMap: (f = msg.getMatchFieldsMap()) ? f.toObject(includeInstance, undefined) : [],
limit: jspb.Message.getFieldWithDefault(msg, 5, 0),
searchBefore: (f = msg.getSearchBefore()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.SearchPastTransactionsRequest;
  return proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginInstanceId(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntId(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
      break;
    case 4:
      var value = msg.getMatchFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSearchBefore(value);
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
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPluginInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMatchFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getSearchBefore();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string plugin_instance_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.getPluginInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} returns this
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.setPluginInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.integrations.IntegrationType int_id = 2;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.getIntId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} returns this
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.setIntId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 3;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} returns this
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * map<string, string> match_fields = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.getMatchFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} returns this
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.clearMatchFieldsMap = function() {
  this.getMatchFieldsMap().clear();
  return this;
};


/**
 * optional uint32 limit = 5;
 * @return {number}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} returns this
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp search_before = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.getSearchBefore = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} returns this
*/
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.setSearchBefore = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsRequest} returns this
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.clearSearchBefore = function() {
  return this.setSearchBefore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsRequest.prototype.hasSearchBefore = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.SearchPastTransactionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.api.v1alpha1.integrations.PastTxEntity.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsResponse}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.SearchPastTransactionsResponse;
  return proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.SearchPastTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsResponse}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PastTxEntity;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PastTxEntity.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.SearchPastTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PastTxEntity.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PastTxEntity values = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PastTxEntity>}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PastTxEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.PastTxEntity, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PastTxEntity>} value
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsResponse} returns this
*/
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PastTxEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PastTxEntity}
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PastTxEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.SearchPastTransactionsResponse} returns this
 */
proto.api.v1alpha1.integrations.SearchPastTransactionsResponse.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.api.v1alpha1.integrations.PastTxEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PastTxEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PastTxEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PastTxEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
reqMap: (f = msg.getReqMap()) ? f.toObject(includeInstance, undefined) : [],
resMap: (f = msg.getResMap()) ? f.toObject(includeInstance, undefined) : [],
createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.PastTxEntity}
 */
proto.api.v1alpha1.integrations.PastTxEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PastTxEntity;
  return proto.api.v1alpha1.integrations.PastTxEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PastTxEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PastTxEntity}
 */
proto.api.v1alpha1.integrations.PastTxEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getReqMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = msg.getResMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
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
proto.api.v1alpha1.integrations.PastTxEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PastTxEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PastTxEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PastTxEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReqMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getResMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> req = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.PastTxEntity.prototype.getReqMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.PastTxEntity} returns this
 */
proto.api.v1alpha1.integrations.PastTxEntity.prototype.clearReqMap = function() {
  this.getReqMap().clear();
  return this;
};


/**
 * map<string, string> res = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.PastTxEntity.prototype.getResMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.PastTxEntity} returns this
 */
proto.api.v1alpha1.integrations.PastTxEntity.prototype.clearResMap = function() {
  this.getResMap().clear();
  return this;
};


/**
 * optional google.protobuf.Timestamp created_on = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.PastTxEntity.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PastTxEntity} returns this
*/
proto.api.v1alpha1.integrations.PastTxEntity.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PastTxEntity} returns this
 */
proto.api.v1alpha1.integrations.PastTxEntity.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PastTxEntity.prototype.hasCreatedOn = function() {
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
proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq}
 */
proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq;
  return proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq}
 */
proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationsForOrgReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.IntegrationInfos.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.IntegrationInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.api.v1alpha1.integrations.IntegrationInfo.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfos}
 */
proto.api.v1alpha1.integrations.IntegrationInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationInfos;
  return proto.api.v1alpha1.integrations.IntegrationInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfos}
 */
proto.api.v1alpha1.integrations.IntegrationInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.IntegrationInfo;
      reader.readMessage(value,proto.api.v1alpha1.integrations.IntegrationInfo.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.api.v1alpha1.integrations.IntegrationInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.IntegrationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IntegrationInfo values = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.IntegrationInfo>}
 */
proto.api.v1alpha1.integrations.IntegrationInfos.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.IntegrationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.IntegrationInfo, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.IntegrationInfo>} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfos} returns this
*/
proto.api.v1alpha1.integrations.IntegrationInfos.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.IntegrationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo}
 */
proto.api.v1alpha1.integrations.IntegrationInfos.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.IntegrationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfos} returns this
 */
proto.api.v1alpha1.integrations.IntegrationInfos.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.IntegrationInfo.repeatedFields_ = [4];



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
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
integrationId: jspb.Message.getFieldWithDefault(msg, 2, 0),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
methodsList: jspb.Message.toObjectList(msg.getMethodsList(),
    proto.api.v1alpha1.integrations.MethodInfo.toObject, includeInstance),
groupParamsMap: (f = msg.getGroupParamsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Parameter.toObject) : []
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo}
 */
proto.api.v1alpha1.integrations.IntegrationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationInfo;
  return proto.api.v1alpha1.integrations.IntegrationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo}
 */
proto.api.v1alpha1.integrations.IntegrationInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.integrations.MethodInfo;
      reader.readMessage(value,proto.api.v1alpha1.integrations.MethodInfo.deserializeBinaryFromReader);
      msg.addMethods(value);
      break;
    case 5:
      var value = msg.getGroupParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Parameter.deserializeBinaryFromReader, 0, new proto.api.v1alpha1.integrations.Parameter());
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
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.v1alpha1.integrations.MethodInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Parameter.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo} returns this
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 2;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo} returns this
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo} returns this
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated MethodInfo methods = 4;
 * @return {!Array<!proto.api.v1alpha1.integrations.MethodInfo>}
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.getMethodsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.MethodInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.MethodInfo, 4));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.MethodInfo>} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo} returns this
*/
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.setMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.MethodInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.MethodInfo}
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.addMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.v1alpha1.integrations.MethodInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo} returns this
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.clearMethodsList = function() {
  return this.setMethodsList([]);
};


/**
 * map<int32, Parameter> group_params = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.api.v1alpha1.integrations.Parameter>}
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.getGroupParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.api.v1alpha1.integrations.Parameter>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Parameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.IntegrationInfo} returns this
 */
proto.api.v1alpha1.integrations.IntegrationInfo.prototype.clearGroupParamsMap = function() {
  this.getGroupParamsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.MethodInfo.repeatedFields_ = [4,6];



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
proto.api.v1alpha1.integrations.MethodInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.MethodInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.MethodInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.MethodInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
methodId: jspb.Message.getFieldWithDefault(msg, 2, 0),
txType: jspb.Message.getFieldWithDefault(msg, 3, 0),
paramsList: jspb.Message.toObjectList(msg.getParamsList(),
    proto.api.v1alpha1.integrations.Parameter.toObject, includeInstance),
url: jspb.Message.getFieldWithDefault(msg, 5, ""),
responseList: jspb.Message.toObjectList(msg.getResponseList(),
    proto.api.v1alpha1.integrations.Parameter.toObject, includeInstance),
runtimeParamsMap: (f = msg.getRuntimeParamsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Parameter.toObject) : []
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
 * @return {!proto.api.v1alpha1.integrations.MethodInfo}
 */
proto.api.v1alpha1.integrations.MethodInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.MethodInfo;
  return proto.api.v1alpha1.integrations.MethodInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.MethodInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.MethodInfo}
 */
proto.api.v1alpha1.integrations.MethodInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.integrations.TransactionType} */ (reader.readEnum());
      msg.setTxType(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.integrations.Parameter;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Parameter.deserializeBinaryFromReader);
      msg.addParams(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 6:
      var value = new proto.api.v1alpha1.integrations.Parameter;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Parameter.deserializeBinaryFromReader);
      msg.addResponse(value);
      break;
    case 7:
      var value = msg.getRuntimeParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Parameter.deserializeBinaryFromReader, 0, new proto.api.v1alpha1.integrations.Parameter());
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
proto.api.v1alpha1.integrations.MethodInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.MethodInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.MethodInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.MethodInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTxType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.v1alpha1.integrations.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResponseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.v1alpha1.integrations.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getRuntimeParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Parameter.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 2;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional api.commons.integrations.TransactionType tx_type = 3;
 * @return {!proto.api.commons.integrations.TransactionType}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.getTxType = function() {
  return /** @type {!proto.api.commons.integrations.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.integrations.TransactionType} value
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.setTxType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated Parameter params = 4;
 * @return {!Array<!proto.api.v1alpha1.integrations.Parameter>}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.getParamsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Parameter, 4));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Parameter>} value
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
*/
proto.api.v1alpha1.integrations.MethodInfo.prototype.setParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Parameter}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.addParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.v1alpha1.integrations.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Parameter response = 6;
 * @return {!Array<!proto.api.v1alpha1.integrations.Parameter>}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.getResponseList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Parameter, 6));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Parameter>} value
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
*/
proto.api.v1alpha1.integrations.MethodInfo.prototype.setResponseList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Parameter}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.addResponse = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.v1alpha1.integrations.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.clearResponseList = function() {
  return this.setResponseList([]);
};


/**
 * map<int32, Parameter> runtime_params = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.api.v1alpha1.integrations.Parameter>}
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.getRuntimeParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.api.v1alpha1.integrations.Parameter>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Parameter));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.MethodInfo} returns this
 */
proto.api.v1alpha1.integrations.MethodInfo.prototype.clearRuntimeParamsMap = function() {
  this.getRuntimeParamsMap().clear();
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
proto.api.v1alpha1.integrations.Parameter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Parameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Parameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Parameter.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
paramType: jspb.Message.getFieldWithDefault(msg, 2, 0),
required: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
defaultValue: (f = msg.getDefaultValue()) && proto.api.v1alpha1.integrations.Value.toObject(includeInstance, f),
displayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
sensitive: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
runtimeParam: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
helperText: jspb.Message.getFieldWithDefault(msg, 8, ""),
templateLocked: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
validation: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.api.v1alpha1.integrations.Parameter}
 */
proto.api.v1alpha1.integrations.Parameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Parameter;
  return proto.api.v1alpha1.integrations.Parameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Parameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Parameter}
 */
proto.api.v1alpha1.integrations.Parameter.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.integrations.ValueType} */ (reader.readEnum());
      msg.setParamType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequired(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.integrations.Value;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader);
      msg.setDefaultValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSensitive(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRuntimeParam(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelperText(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTemplateLocked(value);
      break;
    case 10:
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
proto.api.v1alpha1.integrations.Parameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Parameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Parameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Parameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParamType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDefaultValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSensitive();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRuntimeParam();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getHelperText();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTemplateLocked();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getValidation();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.integrations.ValueType param_type = 2;
 * @return {!proto.api.commons.integrations.ValueType}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getParamType = function() {
  return /** @type {!proto.api.commons.integrations.ValueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.integrations.ValueType} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setParamType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool required = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Value default_value = 4;
 * @return {?proto.api.v1alpha1.integrations.Value}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getDefaultValue = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Value} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Value, 4));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Value|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
*/
proto.api.v1alpha1.integrations.Parameter.prototype.setDefaultValue = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.clearDefaultValue = function() {
  return this.setDefaultValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.hasDefaultValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string display_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool sensitive = 6;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getSensitive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setSensitive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool runtime_param = 7;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getRuntimeParam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setRuntimeParam = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string helper_text = 8;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getHelperText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setHelperText = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool template_locked = 9;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getTemplateLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setTemplateLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional api.commons.integrations.Validation validation = 10;
 * @return {!proto.api.commons.integrations.Validation}
 */
proto.api.v1alpha1.integrations.Parameter.prototype.getValidation = function() {
  return /** @type {!proto.api.commons.integrations.Validation} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.integrations.Validation} value
 * @return {!proto.api.v1alpha1.integrations.Parameter} returns this
 */
proto.api.v1alpha1.integrations.Parameter.prototype.setValidation = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
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
proto.api.v1alpha1.integrations.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Empty.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.Empty}
 */
proto.api.v1alpha1.integrations.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Empty;
  return proto.api.v1alpha1.integrations.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Empty}
 */
proto.api.v1alpha1.integrations.Empty.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Empty.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationTransactionId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReq}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetIntegrationTransactionReq;
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReq}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntegrationTransactionId(value);
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string integration_transaction_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.prototype.getIntegrationTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReq.prototype.setIntegrationTransactionId = function(value) {
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
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.toObject = function(includeInstance, msg) {
  var f, obj = {
start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
methodId: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetAggregatedMetadataReq;
  return proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
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
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp start = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq} returns this
*/
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.hasStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.getEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq} returns this
*/
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 5;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataReq} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataReq.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.repeatedFields_ = [7];



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
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.toObject = function(includeInstance, msg) {
  var f, obj = {
views: jspb.Message.getFieldWithDefault(msg, 1, 0),
verifyAttempts: jspb.Message.getFieldWithDefault(msg, 2, 0),
verifySuccesses: jspb.Message.getFieldWithDefault(msg, 3, 0),
paymentAttempts: jspb.Message.getFieldWithDefault(msg, 4, 0),
paymentSuccesses: jspb.Message.getFieldWithDefault(msg, 5, 0),
paymentAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
fieldsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetAggregatedMetadataRes;
  return proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setViews(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVerifyAttempts(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVerifySuccesses(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaymentAttempts(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaymentSuccesses(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPaymentAmount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
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
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViews();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVerifyAttempts();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getVerifySuccesses();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPaymentAttempts();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPaymentSuccesses();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPaymentAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional int32 views = 1;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.getViews = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.setViews = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 verify_attempts = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.getVerifyAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.setVerifyAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 verify_successes = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.getVerifySuccesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.setVerifySuccesses = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 payment_attempts = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.getPaymentAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.setPaymentAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 payment_successes = 5;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.getPaymentSuccesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.setPaymentSuccesses = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double payment_amount = 6;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.getPaymentAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.setPaymentAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * repeated string fields = 7;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.GetAggregatedMetadataRes} returns this
 */
proto.api.v1alpha1.integrations.GetAggregatedMetadataRes.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.repeatedFields_ = [5];



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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.toObject = function(includeInstance, msg) {
  var f, obj = {
start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
groupByList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq;
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroupBy(value);
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getGroupByList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp start = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} returns this
*/
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.hasStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.getEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} returns this
*/
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string group_by = 5;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.getGroupByList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.setGroupByList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.addGroupBy = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportReq.prototype.clearGroupByList = function() {
  return this.setGroupByList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.repeatedFields_ = [25];



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
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationId: jspb.Message.getFieldWithDefault(msg, 5, 0),
integrationName: jspb.Message.getFieldWithDefault(msg, 17, ""),
methodId: jspb.Message.getFieldWithDefault(msg, 6, 0),
methodName: jspb.Message.getFieldWithDefault(msg, 18, ""),
transactionType: jspb.Message.getFieldWithDefault(msg, 7, 0),
requestSource: jspb.Message.getFieldWithDefault(msg, 8, 0),
flowName: jspb.Message.getFieldWithDefault(msg, 20, ""),
campaignType: jspb.Message.getFieldWithDefault(msg, 22, ""),
groupByValuesMap: (f = msg.getGroupByValuesMap()) ? f.toObject(includeInstance, undefined) : [],
revenue: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
revenueSubtotalsMap: (f = msg.getRevenueSubtotalsMap()) ? f.toObject(includeInstance, undefined) : [],
successCount: jspb.Message.getFieldWithDefault(msg, 11, 0),
failureCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
totalCount: jspb.Message.getFieldWithDefault(msg, 13, 0),
highestTrafficDate: jspb.Message.getFieldWithDefault(msg, 15, ""),
lowestTrafficDate: jspb.Message.getFieldWithDefault(msg, 16, ""),
countMetricsMap: (f = msg.getCountMetricsMap()) ? f.toObject(includeInstance, undefined) : [],
fieldsList: (f = jspb.Message.getRepeatedField(msg, 25)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationTransactionReportRow;
  return proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntegrationName(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.integrations.TransactionType} */ (reader.readEnum());
      msg.setTransactionType(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.integrations.RequestSource} */ (reader.readEnum());
      msg.setRequestSource(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlowName(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignType(value);
      break;
    case 23:
      var value = msg.getGroupByValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRevenue(value);
      break;
    case 19:
      var value = msg.getRevenueSubtotalsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "", 0.0);
         });
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSuccessCount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFailureCount(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setHighestTrafficDate(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLowestTrafficDate(value);
      break;
    case 24:
      var value = msg.getCountMetricsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
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
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getIntegrationName();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getTransactionType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRequestSource();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getFlowName();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getCampaignType();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getGroupByValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(23, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getRevenue();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getRevenueSubtotalsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(19, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getSuccessCount();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getFailureCount();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getHighestTrafficDate();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLowestTrafficDate();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCountMetricsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(24, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      25,
      f
    );
  }
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 5;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string integration_name = 17;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getIntegrationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setIntegrationName = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 6;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string method_name = 18;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional api.commons.integrations.TransactionType transaction_type = 7;
 * @return {!proto.api.commons.integrations.TransactionType}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getTransactionType = function() {
  return /** @type {!proto.api.commons.integrations.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.integrations.TransactionType} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setTransactionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional api.commons.integrations.RequestSource request_source = 8;
 * @return {!proto.api.commons.integrations.RequestSource}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getRequestSource = function() {
  return /** @type {!proto.api.commons.integrations.RequestSource} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestSource} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setRequestSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string flow_name = 20;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getFlowName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setFlowName = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string campaign_type = 22;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getCampaignType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setCampaignType = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * map<string, string> group_by_values = 23;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getGroupByValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 23, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.clearGroupByValuesMap = function() {
  this.getGroupByValuesMap().clear();
  return this;
};


/**
 * optional double revenue = 10;
 * @return {number}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getRevenue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setRevenue = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * map<string, double> revenue_subtotals = 19;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getRevenueSubtotalsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 19, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.clearRevenueSubtotalsMap = function() {
  this.getRevenueSubtotalsMap().clear();
  return this;
};


/**
 * optional int64 success_count = 11;
 * @return {number}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getSuccessCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setSuccessCount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 failure_count = 12;
 * @return {number}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getFailureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setFailureCount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 total_count = 13;
 * @return {number}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string highest_traffic_date = 15;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getHighestTrafficDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setHighestTrafficDate = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string lowest_traffic_date = 16;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getLowestTrafficDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setLowestTrafficDate = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * map<string, int64> count_metrics = 24;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getCountMetricsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 24, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.clearCountMetricsMap = function() {
  this.getCountMetricsMap().clear();
  return this;
};


/**
 * repeated string fields = 25;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 25));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 25, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 25, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes;
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.IntegrationTransactionReportRow;
      reader.readMessage(value,proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.IntegrationTransactionReportRow.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IntegrationTransactionReportRow values = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow>}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.IntegrationTransactionReportRow, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow>} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes} returns this
*/
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransactionReportRow}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.IntegrationTransactionReportRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportRes.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.toObject = function(includeInstance, msg) {
  var f, obj = {
start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
groupByMap: (f = msg.getGroupByMap()) ? f.toObject(includeInstance, undefined) : [],
pageSize: jspb.Message.getFieldWithDefault(msg, 7, 0),
pageNum: jspb.Message.getFieldWithDefault(msg, 8, 0),
integrationId: jspb.Message.getFieldWithDefault(msg, 9, 0),
searchAfterSid: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq;
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 5:
      var value = msg.getGroupByMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageNum(value);
      break;
    case 9:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSearchAfterSid(value);
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getGroupByMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPageNum();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getSearchAfterSid();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp start = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
*/
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.hasStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.getEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
*/
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> group_by = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.getGroupByMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.clearGroupByMap = function() {
  this.getGroupByMap().clear();
  return this;
};


/**
 * optional int32 page_size = 7;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 page_num = 8;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.getPageNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.setPageNum = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 9;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int64 search_after_sid = 10;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.getSearchAfterSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataReq.prototype.setSearchAfterSid = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.toObject = function(includeInstance, msg) {
  var f, obj = {
countMetricsMap: (f = msg.getCountMetricsMap()) ? f.toObject(includeInstance, undefined) : [],
linkDataMap: (f = msg.getLinkDataMap()) ? f.toObject(includeInstance, undefined) : [],
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
paymentAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow;
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getCountMetricsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    case 2:
      var value = msg.getLinkDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPaymentAmount(value);
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountMetricsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getLinkDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPaymentAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * map<string, int64> count_metrics = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.getCountMetricsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.clearCountMetricsMap = function() {
  this.getCountMetricsMap().clear();
  return this;
};


/**
 * map<string, string> link_data = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.getLinkDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.clearLinkDataMap = function() {
  this.getLinkDataMap().clear();
  return this;
};


/**
 * optional google.protobuf.Timestamp date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow} returns this
*/
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.hasDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double payment_amount = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.getPaymentAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.prototype.setPaymentAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.toObject = function(includeInstance, msg) {
  var f, obj = {
entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.toObject, includeInstance),
lastTransactionSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes;
  return proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow;
      reader.readMessage(value,proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastTransactionSid(value);
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
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow.serializeBinaryToWriter
    );
  }
  f = message.getLastTransactionSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated GetIntegrationTransactionReportDataRow entities = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow>}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow>} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes} returns this
*/
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * optional int64 last_transaction_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.prototype.getLastTransactionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes} returns this
 */
proto.api.v1alpha1.integrations.GetIntegrationTransactionReportDataRes.prototype.setLastTransactionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
endDate: (f = msg.getEndDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
integrationType: (f = msg.getIntegrationType()) && proto.api.v1alpha1.integrations.IntegrationType.toObject(includeInstance, f),
requestMethod: (f = msg.getRequestMethod()) && proto.api.v1alpha1.integrations.RequestMethod.toObject(includeInstance, f),
transactionType: (f = msg.getTransactionType()) && proto.api.v1alpha1.integrations.TransactionType.toObject(includeInstance, f),
requestSource: (f = msg.getRequestSource()) && proto.api.v1alpha1.integrations.RequestSource.toObject(includeInstance, f),
result: (f = msg.getResult()) && proto.api.v1alpha1.integrations.TransactionResult.toObject(includeInstance, f),
taskId: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq;
  return proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndDate(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.integrations.IntegrationType;
      reader.readMessage(value,proto.api.v1alpha1.integrations.IntegrationType.deserializeBinaryFromReader);
      msg.setIntegrationType(value);
      break;
    case 11:
      var value = new proto.api.v1alpha1.integrations.RequestMethod;
      reader.readMessage(value,proto.api.v1alpha1.integrations.RequestMethod.deserializeBinaryFromReader);
      msg.setRequestMethod(value);
      break;
    case 12:
      var value = new proto.api.v1alpha1.integrations.TransactionType;
      reader.readMessage(value,proto.api.v1alpha1.integrations.TransactionType.deserializeBinaryFromReader);
      msg.setTransactionType(value);
      break;
    case 13:
      var value = new proto.api.v1alpha1.integrations.RequestSource;
      reader.readMessage(value,proto.api.v1alpha1.integrations.RequestSource.deserializeBinaryFromReader);
      msg.setRequestSource(value);
      break;
    case 14:
      var value = new proto.api.v1alpha1.integrations.TransactionResult;
      reader.readMessage(value,proto.api.v1alpha1.integrations.TransactionResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
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
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIntegrationType();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.integrations.IntegrationType.serializeBinaryToWriter
    );
  }
  f = message.getRequestMethod();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v1alpha1.integrations.RequestMethod.serializeBinaryToWriter
    );
  }
  f = message.getTransactionType();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.api.v1alpha1.integrations.TransactionType.serializeBinaryToWriter
    );
  }
  f = message.getRequestSource();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.v1alpha1.integrations.RequestSource.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.api.v1alpha1.integrations.TransactionResult.serializeBinaryToWriter
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp start_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
*/
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp end_date = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
*/
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional IntegrationType integration_type = 10;
 * @return {?proto.api.v1alpha1.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.getIntegrationType = function() {
  return /** @type{?proto.api.v1alpha1.integrations.IntegrationType} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.IntegrationType, 10));
};


/**
 * @param {?proto.api.v1alpha1.integrations.IntegrationType|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
*/
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.setIntegrationType = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.clearIntegrationType = function() {
  return this.setIntegrationType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.hasIntegrationType = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RequestMethod request_method = 11;
 * @return {?proto.api.v1alpha1.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.getRequestMethod = function() {
  return /** @type{?proto.api.v1alpha1.integrations.RequestMethod} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.RequestMethod, 11));
};


/**
 * @param {?proto.api.v1alpha1.integrations.RequestMethod|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
*/
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.setRequestMethod = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.clearRequestMethod = function() {
  return this.setRequestMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.hasRequestMethod = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional TransactionType transaction_type = 12;
 * @return {?proto.api.v1alpha1.integrations.TransactionType}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.getTransactionType = function() {
  return /** @type{?proto.api.v1alpha1.integrations.TransactionType} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.TransactionType, 12));
};


/**
 * @param {?proto.api.v1alpha1.integrations.TransactionType|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
*/
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.setTransactionType = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.clearTransactionType = function() {
  return this.setTransactionType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.hasTransactionType = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional RequestSource request_source = 13;
 * @return {?proto.api.v1alpha1.integrations.RequestSource}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.getRequestSource = function() {
  return /** @type{?proto.api.v1alpha1.integrations.RequestSource} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.RequestSource, 13));
};


/**
 * @param {?proto.api.v1alpha1.integrations.RequestSource|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
*/
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.setRequestSource = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.clearRequestSource = function() {
  return this.setRequestSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.hasRequestSource = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional TransactionResult result = 14;
 * @return {?proto.api.v1alpha1.integrations.TransactionResult}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.getResult = function() {
  return /** @type{?proto.api.v1alpha1.integrations.TransactionResult} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.TransactionResult, 14));
};


/**
 * @param {?proto.api.v1alpha1.integrations.TransactionResult|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
*/
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.hasResult = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string task_id = 15;
 * @return {string}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsReq.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.api.v1alpha1.integrations.IntegrationTransaction.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes;
  return proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.IntegrationTransaction;
      reader.readMessage(value,proto.api.v1alpha1.integrations.IntegrationTransaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
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
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.IntegrationTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IntegrationTransaction transactions = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.IntegrationTransaction>}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.IntegrationTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.IntegrationTransaction, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.IntegrationTransaction>} value
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes} returns this
*/
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.IntegrationTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction}
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.IntegrationTransaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes} returns this
 */
proto.api.v1alpha1.integrations.SearchIntegrationTransactionsRes.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
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
proto.api.v1alpha1.integrations.IntegrationType.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationType.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.IntegrationType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationType;
  return proto.api.v1alpha1.integrations.IntegrationType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.IntegrationType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
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
proto.api.v1alpha1.integrations.IntegrationType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 1;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.IntegrationType.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationType} returns this
 */
proto.api.v1alpha1.integrations.IntegrationType.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.api.v1alpha1.integrations.RequestMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.RequestMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.RequestMethod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.RequestMethod.toObject = function(includeInstance, msg) {
  var f, obj = {
methodId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.RequestMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.RequestMethod;
  return proto.api.v1alpha1.integrations.RequestMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.RequestMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.RequestMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
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
proto.api.v1alpha1.integrations.RequestMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.RequestMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.RequestMethod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.RequestMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 1;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.RequestMethod.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.RequestMethod} returns this
 */
proto.api.v1alpha1.integrations.RequestMethod.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.api.v1alpha1.integrations.TransactionType.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.TransactionType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.TransactionType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.TransactionType.toObject = function(includeInstance, msg) {
  var f, obj = {
transactionType: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.integrations.TransactionType}
 */
proto.api.v1alpha1.integrations.TransactionType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.TransactionType;
  return proto.api.v1alpha1.integrations.TransactionType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.TransactionType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.TransactionType}
 */
proto.api.v1alpha1.integrations.TransactionType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.integrations.TransactionType} */ (reader.readEnum());
      msg.setTransactionType(value);
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
proto.api.v1alpha1.integrations.TransactionType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.TransactionType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.TransactionType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.TransactionType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional api.commons.integrations.TransactionType transaction_type = 1;
 * @return {!proto.api.commons.integrations.TransactionType}
 */
proto.api.v1alpha1.integrations.TransactionType.prototype.getTransactionType = function() {
  return /** @type {!proto.api.commons.integrations.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.integrations.TransactionType} value
 * @return {!proto.api.v1alpha1.integrations.TransactionType} returns this
 */
proto.api.v1alpha1.integrations.TransactionType.prototype.setTransactionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.api.v1alpha1.integrations.RequestSource.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.RequestSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.RequestSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.RequestSource.toObject = function(includeInstance, msg) {
  var f, obj = {
requestSource: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.integrations.RequestSource}
 */
proto.api.v1alpha1.integrations.RequestSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.RequestSource;
  return proto.api.v1alpha1.integrations.RequestSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.RequestSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.RequestSource}
 */
proto.api.v1alpha1.integrations.RequestSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.integrations.RequestSource} */ (reader.readEnum());
      msg.setRequestSource(value);
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
proto.api.v1alpha1.integrations.RequestSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.RequestSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.RequestSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.RequestSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestSource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional api.commons.integrations.RequestSource request_source = 1;
 * @return {!proto.api.commons.integrations.RequestSource}
 */
proto.api.v1alpha1.integrations.RequestSource.prototype.getRequestSource = function() {
  return /** @type {!proto.api.commons.integrations.RequestSource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestSource} value
 * @return {!proto.api.v1alpha1.integrations.RequestSource} returns this
 */
proto.api.v1alpha1.integrations.RequestSource.prototype.setRequestSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.api.v1alpha1.integrations.TransactionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.TransactionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.TransactionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.TransactionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
result: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.integrations.TransactionResult}
 */
proto.api.v1alpha1.integrations.TransactionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.TransactionResult;
  return proto.api.v1alpha1.integrations.TransactionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.TransactionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.TransactionResult}
 */
proto.api.v1alpha1.integrations.TransactionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.integrations.TransactionResult} */ (reader.readEnum());
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
proto.api.v1alpha1.integrations.TransactionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.TransactionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.TransactionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.TransactionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional api.commons.integrations.TransactionResult result = 1;
 * @return {!proto.api.commons.integrations.TransactionResult}
 */
proto.api.v1alpha1.integrations.TransactionResult.prototype.getResult = function() {
  return /** @type {!proto.api.commons.integrations.TransactionResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.integrations.TransactionResult} value
 * @return {!proto.api.v1alpha1.integrations.TransactionResult} returns this
 */
proto.api.v1alpha1.integrations.TransactionResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq}
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq;
  return proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq}
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
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
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 4;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq} returns this
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesReq.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.repeatedFields_ = [4];



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
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationId: jspb.Message.getFieldWithDefault(msg, 3, 0),
namesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes}
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes;
  return proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes}
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
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
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 3;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes} returns this
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated string names = 4;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes} returns this
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes} returns this
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes} returns this
 */
proto.api.v1alpha1.integrations.ListIntegrationConfigNamesRes.prototype.clearNamesList = function() {
  return this.setNamesList([]);
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
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq}
 */
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq;
  return proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq}
 */
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq} returns this
 */
proto.api.v1alpha1.integrations.GetPaymentLinkConfigReq.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq}
 */
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq;
  return proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq}
 */
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq} returns this
 */
proto.api.v1alpha1.integrations.DeletePaymentLinkConfigReq.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrations.Logo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Logo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Logo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Logo.toObject = function(includeInstance, msg) {
  var f, obj = {
value: msg.getValue_asB64()
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
 * @return {!proto.api.v1alpha1.integrations.Logo}
 */
proto.api.v1alpha1.integrations.Logo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Logo;
  return proto.api.v1alpha1.integrations.Logo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Logo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Logo}
 */
proto.api.v1alpha1.integrations.Logo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.api.v1alpha1.integrations.Logo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Logo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Logo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Logo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Logo.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.api.v1alpha1.integrations.Logo.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.integrations.Logo.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.v1alpha1.integrations.Logo} returns this
 */
proto.api.v1alpha1.integrations.Logo.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPortalConfigsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrations.PortalConfigId.toObject(includeInstance, f),
mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
page: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsReq}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPortalConfigsReq;
  return proto.api.v1alpha1.integrations.ListPortalConfigsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsReq}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PortalConfigId;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalConfigId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
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
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPortalConfigsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PortalConfigId.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional PortalConfigId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalConfigId}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfigId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.PortalConfigId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfigId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} returns this
*/
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} returns this
*/
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ListPortalConfigsReq} returns this
 */
proto.api.v1alpha1.integrations.ListPortalConfigsReq.prototype.setPage = function(value) {
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
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrations.PortalConfigId.toObject(includeInstance, f),
mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigReq}
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalConfigReq;
  return proto.api.v1alpha1.integrations.GetPortalConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigReq}
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PortalConfigId;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalConfigId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
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
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PortalConfigId.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional PortalConfigId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalConfigId}
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfigId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.PortalConfigId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfigId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalConfigReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalConfigReq.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.DeletePortalConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.DeletePortalConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
entity: (f = msg.getEntity()) && proto.api.v1alpha1.integrations.PortalConfigId.toObject(includeInstance, f),
mask: (f = msg.getMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigReq}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.DeletePortalConfigReq;
  return proto.api.v1alpha1.integrations.DeletePortalConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigReq}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PortalConfigId;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalConfigId.deserializeBinaryFromReader);
      msg.setEntity(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
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
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.DeletePortalConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.DeletePortalConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PortalConfigId.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional PortalConfigId entity = 1;
 * @return {?proto.api.v1alpha1.integrations.PortalConfigId}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.getEntity = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalConfigId} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.PortalConfigId, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalConfigId|undefined} value
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigReq} returns this
*/
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.setEntity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigReq} returns this
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.clearEntity = function() {
  return this.setEntity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.getMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigReq} returns this
*/
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigReq} returns this
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.hasMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.DeletePortalConfigReq} returns this
 */
proto.api.v1alpha1.integrations.DeletePortalConfigReq.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UpdatePortalLogoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalLogoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
logo: msg.getLogo_asB64()
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
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalLogoReq}
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UpdatePortalLogoReq;
  return proto.api.v1alpha1.integrations.UpdatePortalLogoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalLogoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalLogoReq}
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLogo(value);
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
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UpdatePortalLogoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UpdatePortalLogoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLogo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalLogoReq} returns this
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes logo = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes logo = 4;
 * This is a type-conversion wrapper around `getLogo()`
 * @return {string}
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.prototype.getLogo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLogo()));
};


/**
 * optional bytes logo = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLogo()`
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.prototype.getLogo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLogo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.v1alpha1.integrations.UpdatePortalLogoReq} returns this
 */
proto.api.v1alpha1.integrations.UpdatePortalLogoReq.prototype.setLogo = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
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
proto.api.v1alpha1.integrations.GetPortalLogoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalLogoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalLogoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLogoReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalLogoReq}
 */
proto.api.v1alpha1.integrations.GetPortalLogoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalLogoReq;
  return proto.api.v1alpha1.integrations.GetPortalLogoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLogoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLogoReq}
 */
proto.api.v1alpha1.integrations.GetPortalLogoReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.GetPortalLogoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalLogoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLogoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLogoReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.GetPortalLogoReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLogoReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLogoReq.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrations.RefreshLinkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.RefreshLinkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.RefreshLinkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.RefreshLinkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
linkId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.integrations.RefreshLinkReq}
 */
proto.api.v1alpha1.integrations.RefreshLinkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.RefreshLinkReq;
  return proto.api.v1alpha1.integrations.RefreshLinkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.RefreshLinkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.RefreshLinkReq}
 */
proto.api.v1alpha1.integrations.RefreshLinkReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkId(value);
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
proto.api.v1alpha1.integrations.RefreshLinkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.RefreshLinkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.RefreshLinkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.RefreshLinkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinkId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string link_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.RefreshLinkReq.prototype.getLinkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.RefreshLinkReq} returns this
 */
proto.api.v1alpha1.integrations.RefreshLinkReq.prototype.setLinkId = function(value) {
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
proto.api.v1alpha1.integrations.RefreshLinkRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.RefreshLinkRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.RefreshLinkRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.RefreshLinkRes.toObject = function(includeInstance, msg) {
  var f, obj = {
newExpiry: (f = msg.getNewExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.RefreshLinkRes}
 */
proto.api.v1alpha1.integrations.RefreshLinkRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.RefreshLinkRes;
  return proto.api.v1alpha1.integrations.RefreshLinkRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.RefreshLinkRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.RefreshLinkRes}
 */
proto.api.v1alpha1.integrations.RefreshLinkRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNewExpiry(value);
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
proto.api.v1alpha1.integrations.RefreshLinkRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.RefreshLinkRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.RefreshLinkRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.RefreshLinkRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewExpiry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp new_expiry = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.RefreshLinkRes.prototype.getNewExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.RefreshLinkRes} returns this
*/
proto.api.v1alpha1.integrations.RefreshLinkRes.prototype.setNewExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.RefreshLinkRes} returns this
 */
proto.api.v1alpha1.integrations.RefreshLinkRes.prototype.clearNewExpiry = function() {
  return this.setNewExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.RefreshLinkRes.prototype.hasNewExpiry = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.repeatedFields_ = [11,22];



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
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PaymentLinkConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 19, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
collectionId: jspb.Message.getFieldWithDefault(msg, 5, ""),
integrationId: jspb.Message.getFieldWithDefault(msg, 6, 0),
verificationMethodId: jspb.Message.getFieldWithDefault(msg, 7, 0),
invoiceMethodId: jspb.Message.getFieldWithDefault(msg, 8, 0),
paymentMethodId: jspb.Message.getFieldWithDefault(msg, 9, 0),
nameMappingMap: (f = msg.getNameMappingMap()) ? f.toObject(includeInstance, undefined) : [],
verificationFieldsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
paymentPortalId: jspb.Message.getFieldWithDefault(msg, 12, ""),
createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
expiryDays: jspb.Message.getFieldWithDefault(msg, 15, 0),
linksRefreshable: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
refreshLinkValidHours: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
maxRefreshTimes: jspb.Message.getFieldWithDefault(msg, 18, 0),
verificationRequest: (f = msg.getVerificationRequest()) && proto.api.v1alpha1.integrations.VerificationRequest.toObject(includeInstance, f),
invoiceRequest: (f = msg.getInvoiceRequest()) && proto.api.v1alpha1.integrations.InvoiceRequest.toObject(includeInstance, f),
paymentRequestsList: jspb.Message.toObjectList(msg.getPaymentRequestsList(),
    proto.api.v1alpha1.integrations.PaymentRequest.toObject, includeInstance),
baseDataMap: (f = msg.getBaseDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
templates: (f = msg.getTemplates()) && proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.toObject(includeInstance, f),
paymentProfileName: jspb.Message.getFieldWithDefault(msg, 25, "")
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
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PaymentLinkConfig;
  return proto.api.v1alpha1.integrations.PaymentLinkConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionId(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setVerificationMethodId(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setInvoiceMethodId(value);
      break;
    case 9:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setPaymentMethodId(value);
      break;
    case 10:
      var value = msg.getNameMappingMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addVerificationFields(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentPortalId(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpiryDays(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLinksRefreshable(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRefreshLinkValidHours(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxRefreshTimes(value);
      break;
    case 20:
      var value = new proto.api.v1alpha1.integrations.VerificationRequest;
      reader.readMessage(value,proto.api.v1alpha1.integrations.VerificationRequest.deserializeBinaryFromReader);
      msg.setVerificationRequest(value);
      break;
    case 21:
      var value = new proto.api.v1alpha1.integrations.InvoiceRequest;
      reader.readMessage(value,proto.api.v1alpha1.integrations.InvoiceRequest.deserializeBinaryFromReader);
      msg.setInvoiceRequest(value);
      break;
    case 22:
      var value = new proto.api.v1alpha1.integrations.PaymentRequest;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PaymentRequest.deserializeBinaryFromReader);
      msg.addPaymentRequests(value);
      break;
    case 23:
      var value = msg.getBaseDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 24:
      var value = new proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.deserializeBinaryFromReader);
      msg.setTemplates(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentProfileName(value);
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
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PaymentLinkConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      19,
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
  f = message.getCollectionId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getVerificationMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getInvoiceMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getPaymentMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getNameMappingMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getVerificationFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getPaymentPortalId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiryDays();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getLinksRefreshable();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getRefreshLinkValidHours();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getMaxRefreshTimes();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getVerificationRequest();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.api.v1alpha1.integrations.VerificationRequest.serializeBinaryToWriter
    );
  }
  f = message.getInvoiceRequest();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.api.v1alpha1.integrations.InvoiceRequest.serializeBinaryToWriter
    );
  }
  f = message.getPaymentRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.api.v1alpha1.integrations.PaymentRequest.serializeBinaryToWriter
    );
  }
  f = message.getBaseDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(23, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getTemplates();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.serializeBinaryToWriter
    );
  }
  f = message.getPaymentProfileName();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
};


/**
 * optional string id = 19;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string collection_id = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getCollectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setCollectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 6;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional api.commons.integrations.RequestMethod verification_method_id = 7;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getVerificationMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setVerificationMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional api.commons.integrations.RequestMethod invoice_method_id = 8;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getInvoiceMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setInvoiceMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional api.commons.integrations.RequestMethod payment_method_id = 9;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getPaymentMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * map<string, string> name_mapping = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getNameMappingMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.clearNameMappingMap = function() {
  this.getNameMappingMap().clear();
  return this;
};


/**
 * repeated string verification_fields = 11;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getVerificationFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setVerificationFieldsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.addVerificationFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.clearVerificationFieldsList = function() {
  return this.setVerificationFieldsList([]);
};


/**
 * optional string payment_portal_id = 12;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getPaymentPortalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setPaymentPortalId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
*/
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 expiry_days = 15;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getExpiryDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setExpiryDays = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional bool links_refreshable = 16;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getLinksRefreshable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setLinksRefreshable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional double refresh_link_valid_hours = 17;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getRefreshLinkValidHours = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setRefreshLinkValidHours = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional int32 max_refresh_times = 18;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getMaxRefreshTimes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setMaxRefreshTimes = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional VerificationRequest verification_request = 20;
 * @return {?proto.api.v1alpha1.integrations.VerificationRequest}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getVerificationRequest = function() {
  return /** @type{?proto.api.v1alpha1.integrations.VerificationRequest} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.VerificationRequest, 20));
};


/**
 * @param {?proto.api.v1alpha1.integrations.VerificationRequest|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
*/
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setVerificationRequest = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.clearVerificationRequest = function() {
  return this.setVerificationRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.hasVerificationRequest = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional InvoiceRequest invoice_request = 21;
 * @return {?proto.api.v1alpha1.integrations.InvoiceRequest}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getInvoiceRequest = function() {
  return /** @type{?proto.api.v1alpha1.integrations.InvoiceRequest} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.InvoiceRequest, 21));
};


/**
 * @param {?proto.api.v1alpha1.integrations.InvoiceRequest|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
*/
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setInvoiceRequest = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.clearInvoiceRequest = function() {
  return this.setInvoiceRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.hasInvoiceRequest = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated PaymentRequest payment_requests = 22;
 * @return {!Array<!proto.api.v1alpha1.integrations.PaymentRequest>}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getPaymentRequestsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PaymentRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.PaymentRequest, 22));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PaymentRequest>} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
*/
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setPaymentRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PaymentRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.addPaymentRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.api.v1alpha1.integrations.PaymentRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.clearPaymentRequestsList = function() {
  return this.setPaymentRequestsList([]);
};


/**
 * map<string, Value> base_data = 23;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getBaseDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 23, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.clearBaseDataMap = function() {
  this.getBaseDataMap().clear();
  return this;
};


/**
 * optional PaymentLinkConfigTemplates templates = 24;
 * @return {?proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getTemplates = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates, 24));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
*/
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setTemplates = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.clearTemplates = function() {
  return this.setTemplates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.hasTemplates = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string payment_profile_name = 25;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.getPaymentProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfig.prototype.setPaymentProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
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
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.toObject = function(includeInstance, msg) {
  var f, obj = {
receiptSmsTemplate: jspb.Message.getFieldWithDefault(msg, 1, ""),
receiptSmsSourcePhone: jspb.Message.getFieldWithDefault(msg, 2, ""),
receiptEmailTemplate: jspb.Message.getFieldWithDefault(msg, 3, ""),
receiptEmailFromAddr: jspb.Message.getFieldWithDefault(msg, 4, ""),
receiptTemplate: jspb.Message.getFieldWithDefault(msg, 5, ""),
invoiceTemplate: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates;
  return proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiptSmsTemplate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiptSmsSourcePhone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiptEmailTemplate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiptEmailFromAddr(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiptTemplate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceTemplate(value);
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
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiptSmsTemplate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReceiptSmsSourcePhone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReceiptEmailTemplate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReceiptEmailFromAddr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceiptTemplate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getInvoiceTemplate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string receipt_sms_template = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.getReceiptSmsTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.setReceiptSmsTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string receipt_sms_source_phone = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.getReceiptSmsSourcePhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.setReceiptSmsSourcePhone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string receipt_email_template = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.getReceiptEmailTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.setReceiptEmailTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string receipt_email_from_addr = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.getReceiptEmailFromAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.setReceiptEmailFromAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string receipt_template = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.getReceiptTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.setReceiptTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string invoice_template = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.getInvoiceTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigTemplates.prototype.setInvoiceTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.VerificationRequest.repeatedFields_ = [1,2];



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
proto.api.v1alpha1.integrations.VerificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.VerificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.VerificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.VerificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
verificationRequestsList: jspb.Message.toObjectList(msg.getVerificationRequestsList(),
    proto.api.v1alpha1.integrations.Request.toObject, includeInstance),
verificationFieldsList: jspb.Message.toObjectList(msg.getVerificationFieldsList(),
    proto.api.v1alpha1.integrations.Parameter.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.VerificationRequest}
 */
proto.api.v1alpha1.integrations.VerificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.VerificationRequest;
  return proto.api.v1alpha1.integrations.VerificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.VerificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.VerificationRequest}
 */
proto.api.v1alpha1.integrations.VerificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.Request;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Request.deserializeBinaryFromReader);
      msg.addVerificationRequests(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.integrations.Parameter;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Parameter.deserializeBinaryFromReader);
      msg.addVerificationFields(value);
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
proto.api.v1alpha1.integrations.VerificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.VerificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.VerificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.VerificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerificationRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.Request.serializeBinaryToWriter
    );
  }
  f = message.getVerificationFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.Parameter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Request verification_requests = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.Request>}
 */
proto.api.v1alpha1.integrations.VerificationRequest.prototype.getVerificationRequestsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Request, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Request>} value
 * @return {!proto.api.v1alpha1.integrations.VerificationRequest} returns this
*/
proto.api.v1alpha1.integrations.VerificationRequest.prototype.setVerificationRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Request}
 */
proto.api.v1alpha1.integrations.VerificationRequest.prototype.addVerificationRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.VerificationRequest} returns this
 */
proto.api.v1alpha1.integrations.VerificationRequest.prototype.clearVerificationRequestsList = function() {
  return this.setVerificationRequestsList([]);
};


/**
 * repeated Parameter verification_fields = 2;
 * @return {!Array<!proto.api.v1alpha1.integrations.Parameter>}
 */
proto.api.v1alpha1.integrations.VerificationRequest.prototype.getVerificationFieldsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Parameter, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Parameter>} value
 * @return {!proto.api.v1alpha1.integrations.VerificationRequest} returns this
*/
proto.api.v1alpha1.integrations.VerificationRequest.prototype.setVerificationFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Parameter}
 */
proto.api.v1alpha1.integrations.VerificationRequest.prototype.addVerificationFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.integrations.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.VerificationRequest} returns this
 */
proto.api.v1alpha1.integrations.VerificationRequest.prototype.clearVerificationFieldsList = function() {
  return this.setVerificationFieldsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PaymentRequest.repeatedFields_ = [5,1];



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
proto.api.v1alpha1.integrations.PaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
paymentFieldsList: jspb.Message.toObjectList(msg.getPaymentFieldsList(),
    proto.api.v1alpha1.integrations.Parameter.toObject, includeInstance),
paymentRequestPayloadList: jspb.Message.toObjectList(msg.getPaymentRequestPayloadList(),
    proto.api.v1alpha1.integrations.Request.toObject, includeInstance),
paymentRequest: (f = msg.getPaymentRequest()) && proto.api.v1alpha1.integrations.Request.toObject(includeInstance, f),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest}
 */
proto.api.v1alpha1.integrations.PaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PaymentRequest;
  return proto.api.v1alpha1.integrations.PaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest}
 */
proto.api.v1alpha1.integrations.PaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = new proto.api.v1alpha1.integrations.Parameter;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Parameter.deserializeBinaryFromReader);
      msg.addPaymentFields(value);
      break;
    case 1:
      var value = new proto.api.v1alpha1.integrations.Request;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Request.deserializeBinaryFromReader);
      msg.addPaymentRequestPayload(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.integrations.Request;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Request.deserializeBinaryFromReader);
      msg.setPaymentRequest(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.api.v1alpha1.integrations.PaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.v1alpha1.integrations.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getPaymentRequestPayloadList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.Request.serializeBinaryToWriter
    );
  }
  f = message.getPaymentRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.Request.serializeBinaryToWriter
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
};


/**
 * repeated Parameter payment_fields = 5;
 * @return {!Array<!proto.api.v1alpha1.integrations.Parameter>}
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.getPaymentFieldsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Parameter, 5));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Parameter>} value
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest} returns this
*/
proto.api.v1alpha1.integrations.PaymentRequest.prototype.setPaymentFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Parameter}
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.addPaymentFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.v1alpha1.integrations.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest} returns this
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.clearPaymentFieldsList = function() {
  return this.setPaymentFieldsList([]);
};


/**
 * repeated Request payment_request_payload = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.Request>}
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.getPaymentRequestPayloadList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Request, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Request>} value
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest} returns this
*/
proto.api.v1alpha1.integrations.PaymentRequest.prototype.setPaymentRequestPayloadList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Request}
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.addPaymentRequestPayload = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest} returns this
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.clearPaymentRequestPayloadList = function() {
  return this.setPaymentRequestPayloadList([]);
};


/**
 * optional Request payment_request = 2;
 * @return {?proto.api.v1alpha1.integrations.Request}
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.getPaymentRequest = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Request} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Request, 2));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Request|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest} returns this
*/
proto.api.v1alpha1.integrations.PaymentRequest.prototype.setPaymentRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest} returns this
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.clearPaymentRequest = function() {
  return this.setPaymentRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.hasPaymentRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest} returns this
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentRequest} returns this
 */
proto.api.v1alpha1.integrations.PaymentRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.InvoiceRequest.repeatedFields_ = [2,4];



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
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.InvoiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.InvoiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.InvoiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
invoiceRequestPayloadList: jspb.Message.toObjectList(msg.getInvoiceRequestPayloadList(),
    proto.api.v1alpha1.integrations.Request.toObject, includeInstance),
invoiceRequest: (f = msg.getInvoiceRequest()) && proto.api.v1alpha1.integrations.Request.toObject(includeInstance, f),
filterResponseKeysList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest}
 */
proto.api.v1alpha1.integrations.InvoiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.InvoiceRequest;
  return proto.api.v1alpha1.integrations.InvoiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.InvoiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest}
 */
proto.api.v1alpha1.integrations.InvoiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.api.v1alpha1.integrations.Request;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Request.deserializeBinaryFromReader);
      msg.addInvoiceRequestPayload(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.integrations.Request;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Request.deserializeBinaryFromReader);
      msg.setInvoiceRequest(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFilterResponseKeys(value);
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
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.InvoiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.InvoiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.InvoiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoiceRequestPayloadList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.Request.serializeBinaryToWriter
    );
  }
  f = message.getInvoiceRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.integrations.Request.serializeBinaryToWriter
    );
  }
  f = message.getFilterResponseKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated Request invoice_request_payload = 2;
 * @return {!Array<!proto.api.v1alpha1.integrations.Request>}
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.getInvoiceRequestPayloadList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Request, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Request>} value
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest} returns this
*/
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.setInvoiceRequestPayloadList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Request}
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.addInvoiceRequestPayload = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.integrations.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest} returns this
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.clearInvoiceRequestPayloadList = function() {
  return this.setInvoiceRequestPayloadList([]);
};


/**
 * optional Request invoice_request = 3;
 * @return {?proto.api.v1alpha1.integrations.Request}
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.getInvoiceRequest = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Request} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Request, 3));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Request|undefined} value
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest} returns this
*/
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.setInvoiceRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest} returns this
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.clearInvoiceRequest = function() {
  return this.setInvoiceRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.hasInvoiceRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string filter_response_keys = 4;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.getFilterResponseKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest} returns this
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.setFilterResponseKeysList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest} returns this
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.addFilterResponseKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.InvoiceRequest} returns this
 */
proto.api.v1alpha1.integrations.InvoiceRequest.prototype.clearFilterResponseKeysList = function() {
  return this.setFilterResponseKeysList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.integrations.Request.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.integrations.Request.ValCase = {
  VAL_NOT_SET: 0,
  JOURNEY_COLLECTION_ID: 3,
  METHOD_CALL: 4,
  CONFIG_ID: 5
};

/**
 * @return {proto.api.v1alpha1.integrations.Request.ValCase}
 */
proto.api.v1alpha1.integrations.Request.prototype.getValCase = function() {
  return /** @type {proto.api.v1alpha1.integrations.Request.ValCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.integrations.Request.oneofGroups_[0]));
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
proto.api.v1alpha1.integrations.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
journeyCollectionId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
methodCall: (f = msg.getMethodCall()) && proto.api.v1alpha1.integrations.MethodCall.toObject(includeInstance, f),
configId: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
staticDataMap: (f = msg.getStaticDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
renameResponseKeysMap: (f = msg.getRenameResponseKeysMap()) ? f.toObject(includeInstance, undefined) : [],
reassignValidationsMap: (f = msg.getReassignValidationsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Validation.toObject) : []
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
 * @return {!proto.api.v1alpha1.integrations.Request}
 */
proto.api.v1alpha1.integrations.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Request;
  return proto.api.v1alpha1.integrations.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Request}
 */
proto.api.v1alpha1.integrations.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJourneyCollectionId(value);
      break;
    case 4:
      var value = new proto.api.v1alpha1.integrations.MethodCall;
      reader.readMessage(value,proto.api.v1alpha1.integrations.MethodCall.deserializeBinaryFromReader);
      msg.setMethodCall(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigId(value);
      break;
    case 6:
      var value = msg.getStaticDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 7:
      var value = msg.getRenameResponseKeysMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = msg.getReassignValidationsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Validation.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Validation());
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
proto.api.v1alpha1.integrations.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMethodCall();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v1alpha1.integrations.MethodCall.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStaticDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getRenameResponseKeysMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getReassignValidationsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Validation.serializeBinaryToWriter);
  }
};


/**
 * optional string journey_collection_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Request.prototype.getJourneyCollectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
 */
proto.api.v1alpha1.integrations.Request.prototype.setJourneyCollectionId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.integrations.Request.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
 */
proto.api.v1alpha1.integrations.Request.prototype.clearJourneyCollectionId = function() {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.integrations.Request.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Request.prototype.hasJourneyCollectionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MethodCall method_call = 4;
 * @return {?proto.api.v1alpha1.integrations.MethodCall}
 */
proto.api.v1alpha1.integrations.Request.prototype.getMethodCall = function() {
  return /** @type{?proto.api.v1alpha1.integrations.MethodCall} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.MethodCall, 4));
};


/**
 * @param {?proto.api.v1alpha1.integrations.MethodCall|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
*/
proto.api.v1alpha1.integrations.Request.prototype.setMethodCall = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v1alpha1.integrations.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
 */
proto.api.v1alpha1.integrations.Request.prototype.clearMethodCall = function() {
  return this.setMethodCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Request.prototype.hasMethodCall = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string config_id = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Request.prototype.getConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
 */
proto.api.v1alpha1.integrations.Request.prototype.setConfigId = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.api.v1alpha1.integrations.Request.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
 */
proto.api.v1alpha1.integrations.Request.prototype.clearConfigId = function() {
  return jspb.Message.setOneofField(this, 5, proto.api.v1alpha1.integrations.Request.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Request.prototype.hasConfigId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, Value> static_data = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.Request.prototype.getStaticDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
 */
proto.api.v1alpha1.integrations.Request.prototype.clearStaticDataMap = function() {
  this.getStaticDataMap().clear();
  return this;
};


/**
 * map<string, string> rename_response_keys = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.Request.prototype.getRenameResponseKeysMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
 */
proto.api.v1alpha1.integrations.Request.prototype.clearRenameResponseKeysMap = function() {
  this.getRenameResponseKeysMap().clear();
  return this;
};


/**
 * map<string, Validation> reassign_validations = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Validation>}
 */
proto.api.v1alpha1.integrations.Request.prototype.getReassignValidationsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Validation>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Validation));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.Request} returns this
 */
proto.api.v1alpha1.integrations.Request.prototype.clearReassignValidationsMap = function() {
  this.getReassignValidationsMap().clear();
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
proto.api.v1alpha1.integrations.Validation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Validation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Validation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Validation.toObject = function(includeInstance, msg) {
  var f, obj = {
pb_enum: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.v1alpha1.integrations.Validation}
 */
proto.api.v1alpha1.integrations.Validation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Validation;
  return proto.api.v1alpha1.integrations.Validation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Validation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Validation}
 */
proto.api.v1alpha1.integrations.Validation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.integrations.Validation} */ (reader.readEnum());
      msg.setEnum(value);
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
proto.api.v1alpha1.integrations.Validation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Validation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Validation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Validation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnum();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional api.commons.integrations.Validation enum = 1;
 * @return {!proto.api.commons.integrations.Validation}
 */
proto.api.v1alpha1.integrations.Validation.prototype.getEnum = function() {
  return /** @type {!proto.api.commons.integrations.Validation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.integrations.Validation} value
 * @return {!proto.api.v1alpha1.integrations.Validation} returns this
 */
proto.api.v1alpha1.integrations.Validation.prototype.setEnum = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.api.v1alpha1.integrations.MethodCall.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.MethodCall.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.MethodCall} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.MethodCall.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
methodId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.v1alpha1.integrations.MethodCall}
 */
proto.api.v1alpha1.integrations.MethodCall.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.MethodCall;
  return proto.api.v1alpha1.integrations.MethodCall.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.MethodCall} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.MethodCall}
 */
proto.api.v1alpha1.integrations.MethodCall.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
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
proto.api.v1alpha1.integrations.MethodCall.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.MethodCall.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.MethodCall} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.MethodCall.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 1;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.MethodCall.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.MethodCall} returns this
 */
proto.api.v1alpha1.integrations.MethodCall.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 2;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.MethodCall.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.MethodCall} returns this
 */
proto.api.v1alpha1.integrations.MethodCall.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PortalConfigs.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.PortalConfigs.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalConfigs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalConfigs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalConfigs.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.api.v1alpha1.integrations.PortalConfig.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.PortalConfigs}
 */
proto.api.v1alpha1.integrations.PortalConfigs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalConfigs;
  return proto.api.v1alpha1.integrations.PortalConfigs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalConfigs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalConfigs}
 */
proto.api.v1alpha1.integrations.PortalConfigs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PortalConfig;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalConfig.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.api.v1alpha1.integrations.PortalConfigs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalConfigs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalConfigs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalConfigs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PortalConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PortalConfig values = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PortalConfig>}
 */
proto.api.v1alpha1.integrations.PortalConfigs.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PortalConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.PortalConfig, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PortalConfig>} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfigs} returns this
*/
proto.api.v1alpha1.integrations.PortalConfigs.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PortalConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.PortalConfigs.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PortalConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalConfigs} returns this
 */
proto.api.v1alpha1.integrations.PortalConfigs.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq}
 */
proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq;
  return proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq}
 */
proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListPaymentLinkConfigsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigs.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.PaymentLinkConfigs.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PaymentLinkConfigs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfigs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigs.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.api.v1alpha1.integrations.PaymentLinkConfig.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigs}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PaymentLinkConfigs;
  return proto.api.v1alpha1.integrations.PaymentLinkConfigs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfigs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigs}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PaymentLinkConfig;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PaymentLinkConfig.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.api.v1alpha1.integrations.PaymentLinkConfigs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PaymentLinkConfigs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfigs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PaymentLinkConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentLinkConfig values = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PaymentLinkConfig>}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigs.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PaymentLinkConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.PaymentLinkConfig, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PaymentLinkConfig>} value
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigs} returns this
*/
proto.api.v1alpha1.integrations.PaymentLinkConfigs.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PaymentLinkConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfig}
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigs.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PaymentLinkConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentLinkConfigs} returns this
 */
proto.api.v1alpha1.integrations.PaymentLinkConfigs.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.api.v1alpha1.integrations.ListLinksReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListLinksReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListLinksReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListLinksReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.ListLinksReq}
 */
proto.api.v1alpha1.integrations.ListLinksReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListLinksReq;
  return proto.api.v1alpha1.integrations.ListLinksReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListLinksReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListLinksReq}
 */
proto.api.v1alpha1.integrations.ListLinksReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.ListLinksReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListLinksReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListLinksReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListLinksReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.repeatedFields_ = [5];



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
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.toObject = function(includeInstance, msg) {
  var f, obj = {
linkConfigId: jspb.Message.getFieldWithDefault(msg, 3, ""),
expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
userDataList: jspb.Message.toObjectList(msg.getUserDataList(),
    proto.api.v1alpha1.integrations.Task.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq;
  return proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkConfigId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    case 5:
      var value = new proto.api.v1alpha1.integrations.Task;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Task.deserializeBinaryFromReader);
      msg.addUserData(value);
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
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinkConfigId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.v1alpha1.integrations.Task.serializeBinaryToWriter
    );
  }
};


/**
 * optional string link_config_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.getLinkConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.setLinkConfigId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq} returns this
*/
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Task user_data = 5;
 * @return {!Array<!proto.api.v1alpha1.integrations.Task>}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.getUserDataList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Task>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Task, 5));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Task>} value
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq} returns this
*/
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.setUserDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Task}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.addUserData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.v1alpha1.integrations.Task, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq} returns this
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksReq.prototype.clearUserDataList = function() {
  return this.setUserDataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.toObject = function(includeInstance, msg) {
  var f, obj = {
urlsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes;
  return proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUrls(value);
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
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string urls = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.prototype.getUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes} returns this
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.prototype.setUrlsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes} returns this
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.prototype.addUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes} returns this
 */
proto.api.v1alpha1.integrations.CreatePaymentPortalLinksRes.prototype.clearUrlsList = function() {
  return this.setUrlsList([]);
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
proto.api.v1alpha1.integrations.SummaryReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.SummaryReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.SummaryReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SummaryReq.toObject = function(includeInstance, msg) {
  var f, obj = {
year: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.api.v1alpha1.integrations.SummaryReq}
 */
proto.api.v1alpha1.integrations.SummaryReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.SummaryReq;
  return proto.api.v1alpha1.integrations.SummaryReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.SummaryReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.SummaryReq}
 */
proto.api.v1alpha1.integrations.SummaryReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
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
proto.api.v1alpha1.integrations.SummaryReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.SummaryReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.SummaryReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SummaryReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 year = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.SummaryReq.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.SummaryReq} returns this
 */
proto.api.v1alpha1.integrations.SummaryReq.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.SummaryRes.repeatedFields_ = [2,3];



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
proto.api.v1alpha1.integrations.SummaryRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.SummaryRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.SummaryRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SummaryRes.toObject = function(includeInstance, msg) {
  var f, obj = {
yearSummary: (f = msg.getYearSummary()) && proto.api.v1alpha1.integrations.CalendarSummary.toObject(includeInstance, f),
monthSummariesList: jspb.Message.toObjectList(msg.getMonthSummariesList(),
    proto.api.v1alpha1.integrations.CalendarSummary.toObject, includeInstance),
weekSummariesList: jspb.Message.toObjectList(msg.getWeekSummariesList(),
    proto.api.v1alpha1.integrations.CalendarSummary.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.SummaryRes}
 */
proto.api.v1alpha1.integrations.SummaryRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.SummaryRes;
  return proto.api.v1alpha1.integrations.SummaryRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.SummaryRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.SummaryRes}
 */
proto.api.v1alpha1.integrations.SummaryRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.CalendarSummary;
      reader.readMessage(value,proto.api.v1alpha1.integrations.CalendarSummary.deserializeBinaryFromReader);
      msg.setYearSummary(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.integrations.CalendarSummary;
      reader.readMessage(value,proto.api.v1alpha1.integrations.CalendarSummary.deserializeBinaryFromReader);
      msg.addMonthSummaries(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.integrations.CalendarSummary;
      reader.readMessage(value,proto.api.v1alpha1.integrations.CalendarSummary.deserializeBinaryFromReader);
      msg.addWeekSummaries(value);
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
proto.api.v1alpha1.integrations.SummaryRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.SummaryRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.SummaryRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.SummaryRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYearSummary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.CalendarSummary.serializeBinaryToWriter
    );
  }
  f = message.getMonthSummariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.CalendarSummary.serializeBinaryToWriter
    );
  }
  f = message.getWeekSummariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v1alpha1.integrations.CalendarSummary.serializeBinaryToWriter
    );
  }
};


/**
 * optional CalendarSummary year_summary = 1;
 * @return {?proto.api.v1alpha1.integrations.CalendarSummary}
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.getYearSummary = function() {
  return /** @type{?proto.api.v1alpha1.integrations.CalendarSummary} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.CalendarSummary, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.CalendarSummary|undefined} value
 * @return {!proto.api.v1alpha1.integrations.SummaryRes} returns this
*/
proto.api.v1alpha1.integrations.SummaryRes.prototype.setYearSummary = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.SummaryRes} returns this
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.clearYearSummary = function() {
  return this.setYearSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.hasYearSummary = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CalendarSummary month_summaries = 2;
 * @return {!Array<!proto.api.v1alpha1.integrations.CalendarSummary>}
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.getMonthSummariesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.CalendarSummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.CalendarSummary, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.CalendarSummary>} value
 * @return {!proto.api.v1alpha1.integrations.SummaryRes} returns this
*/
proto.api.v1alpha1.integrations.SummaryRes.prototype.setMonthSummariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.CalendarSummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary}
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.addMonthSummaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.integrations.CalendarSummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.SummaryRes} returns this
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.clearMonthSummariesList = function() {
  return this.setMonthSummariesList([]);
};


/**
 * repeated CalendarSummary week_summaries = 3;
 * @return {!Array<!proto.api.v1alpha1.integrations.CalendarSummary>}
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.getWeekSummariesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.CalendarSummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.CalendarSummary, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.CalendarSummary>} value
 * @return {!proto.api.v1alpha1.integrations.SummaryRes} returns this
*/
proto.api.v1alpha1.integrations.SummaryRes.prototype.setWeekSummariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.CalendarSummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary}
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.addWeekSummaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.integrations.CalendarSummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.SummaryRes} returns this
 */
proto.api.v1alpha1.integrations.SummaryRes.prototype.clearWeekSummariesList = function() {
  return this.setWeekSummariesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.CalendarSummary.repeatedFields_ = [3];



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
proto.api.v1alpha1.integrations.CalendarSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CalendarSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CalendarSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CalendarSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
calendarNum: jspb.Message.getFieldWithDefault(msg, 1, 0),
summary: (f = msg.getSummary()) && proto.api.v1alpha1.integrations.TransactionSummary.toObject(includeInstance, f),
typeSummariesList: jspb.Message.toObjectList(msg.getTypeSummariesList(),
    proto.api.v1alpha1.integrations.IntegrationTypeSummary.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary}
 */
proto.api.v1alpha1.integrations.CalendarSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CalendarSummary;
  return proto.api.v1alpha1.integrations.CalendarSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CalendarSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary}
 */
proto.api.v1alpha1.integrations.CalendarSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCalendarNum(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.integrations.TransactionSummary;
      reader.readMessage(value,proto.api.v1alpha1.integrations.TransactionSummary.deserializeBinaryFromReader);
      msg.setSummary(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.integrations.IntegrationTypeSummary;
      reader.readMessage(value,proto.api.v1alpha1.integrations.IntegrationTypeSummary.deserializeBinaryFromReader);
      msg.addTypeSummaries(value);
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
proto.api.v1alpha1.integrations.CalendarSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CalendarSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CalendarSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CalendarSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCalendarNum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSummary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.TransactionSummary.serializeBinaryToWriter
    );
  }
  f = message.getTypeSummariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v1alpha1.integrations.IntegrationTypeSummary.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 calendar_num = 1;
 * @return {number}
 */
proto.api.v1alpha1.integrations.CalendarSummary.prototype.getCalendarNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary} returns this
 */
proto.api.v1alpha1.integrations.CalendarSummary.prototype.setCalendarNum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TransactionSummary summary = 2;
 * @return {?proto.api.v1alpha1.integrations.TransactionSummary}
 */
proto.api.v1alpha1.integrations.CalendarSummary.prototype.getSummary = function() {
  return /** @type{?proto.api.v1alpha1.integrations.TransactionSummary} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.TransactionSummary, 2));
};


/**
 * @param {?proto.api.v1alpha1.integrations.TransactionSummary|undefined} value
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary} returns this
*/
proto.api.v1alpha1.integrations.CalendarSummary.prototype.setSummary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary} returns this
 */
proto.api.v1alpha1.integrations.CalendarSummary.prototype.clearSummary = function() {
  return this.setSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.CalendarSummary.prototype.hasSummary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated IntegrationTypeSummary type_summaries = 3;
 * @return {!Array<!proto.api.v1alpha1.integrations.IntegrationTypeSummary>}
 */
proto.api.v1alpha1.integrations.CalendarSummary.prototype.getTypeSummariesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.IntegrationTypeSummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.IntegrationTypeSummary, 3));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.IntegrationTypeSummary>} value
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary} returns this
*/
proto.api.v1alpha1.integrations.CalendarSummary.prototype.setTypeSummariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.IntegrationTypeSummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.IntegrationTypeSummary}
 */
proto.api.v1alpha1.integrations.CalendarSummary.prototype.addTypeSummaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v1alpha1.integrations.IntegrationTypeSummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.CalendarSummary} returns this
 */
proto.api.v1alpha1.integrations.CalendarSummary.prototype.clearTypeSummariesList = function() {
  return this.setTypeSummariesList([]);
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
proto.api.v1alpha1.integrations.IntegrationTypeSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationTypeSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationTypeSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationType: jspb.Message.getFieldWithDefault(msg, 1, 0),
integrationSummary: (f = msg.getIntegrationSummary()) && proto.api.v1alpha1.integrations.TransactionSummary.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationTypeSummary}
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationTypeSummary;
  return proto.api.v1alpha1.integrations.IntegrationTypeSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationTypeSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTypeSummary}
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationType(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.integrations.TransactionSummary;
      reader.readMessage(value,proto.api.v1alpha1.integrations.TransactionSummary.deserializeBinaryFromReader);
      msg.setIntegrationSummary(value);
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
proto.api.v1alpha1.integrations.IntegrationTypeSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationTypeSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationTypeSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIntegrationSummary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.TransactionSummary.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.integrations.IntegrationType integration_type = 1;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.prototype.getIntegrationType = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTypeSummary} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.prototype.setIntegrationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TransactionSummary integration_summary = 2;
 * @return {?proto.api.v1alpha1.integrations.TransactionSummary}
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.prototype.getIntegrationSummary = function() {
  return /** @type{?proto.api.v1alpha1.integrations.TransactionSummary} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.TransactionSummary, 2));
};


/**
 * @param {?proto.api.v1alpha1.integrations.TransactionSummary|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTypeSummary} returns this
*/
proto.api.v1alpha1.integrations.IntegrationTypeSummary.prototype.setIntegrationSummary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTypeSummary} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.prototype.clearIntegrationSummary = function() {
  return this.setIntegrationSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationTypeSummary.prototype.hasIntegrationSummary = function() {
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
proto.api.v1alpha1.integrations.TransactionSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.TransactionSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.TransactionSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.TransactionSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
totalTransactionsAttempted: jspb.Message.getFieldWithDefault(msg, 1, 0),
totalTransactionsCompleted: jspb.Message.getFieldWithDefault(msg, 2, 0),
totalTransactionsFailed: jspb.Message.getFieldWithDefault(msg, 3, 0),
totalAmountCollected: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
avgAmountCollected: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.api.v1alpha1.integrations.TransactionSummary}
 */
proto.api.v1alpha1.integrations.TransactionSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.TransactionSummary;
  return proto.api.v1alpha1.integrations.TransactionSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.TransactionSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.TransactionSummary}
 */
proto.api.v1alpha1.integrations.TransactionSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalTransactionsAttempted(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalTransactionsCompleted(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalTransactionsFailed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalAmountCollected(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgAmountCollected(value);
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
proto.api.v1alpha1.integrations.TransactionSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.TransactionSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.TransactionSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.TransactionSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalTransactionsAttempted();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTotalTransactionsCompleted();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotalTransactionsFailed();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTotalAmountCollected();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAvgAmountCollected();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int64 total_transactions_attempted = 1;
 * @return {number}
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.getTotalTransactionsAttempted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.TransactionSummary} returns this
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.setTotalTransactionsAttempted = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 total_transactions_completed = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.getTotalTransactionsCompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.TransactionSummary} returns this
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.setTotalTransactionsCompleted = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total_transactions_failed = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.getTotalTransactionsFailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.TransactionSummary} returns this
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.setTotalTransactionsFailed = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double total_amount_collected = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.getTotalAmountCollected = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.TransactionSummary} returns this
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.setTotalAmountCollected = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double avg_amount_collected = 5;
 * @return {number}
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.getAvgAmountCollected = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.TransactionSummary} returns this
 */
proto.api.v1alpha1.integrations.TransactionSummary.prototype.setAvgAmountCollected = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
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
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationConfigName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq}
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq;
  return proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq}
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntegrationConfigName(value);
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
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationConfigName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string integration_config_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.prototype.getIntegrationConfigName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq} returns this
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigReq.prototype.setIntegrationConfigName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationTemplatesList: jspb.Message.toObjectList(msg.getIntegrationTemplatesList(),
    proto.api.v1alpha1.integrations.IntegrationTemplateInfo.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes}
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes;
  return proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes}
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.IntegrationTemplateInfo;
      reader.readMessage(value,proto.api.v1alpha1.integrations.IntegrationTemplateInfo.deserializeBinaryFromReader);
      msg.addIntegrationTemplates(value);
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
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.IntegrationTemplateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IntegrationTemplateInfo integration_templates = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.IntegrationTemplateInfo>}
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.prototype.getIntegrationTemplatesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.IntegrationTemplateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.IntegrationTemplateInfo, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.IntegrationTemplateInfo>} value
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes} returns this
*/
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.prototype.setIntegrationTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo}
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.prototype.addIntegrationTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.IntegrationTemplateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes} returns this
 */
proto.api.v1alpha1.integrations.ListIntegrationTemplatesByConfigRes.prototype.clearIntegrationTemplatesList = function() {
  return this.setIntegrationTemplatesList([]);
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
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationTemplateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
broadcastTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
templateName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo}
 */
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationTemplateInfo;
  return proto.api.v1alpha1.integrations.IntegrationTemplateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo}
 */
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBroadcastTemplateSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateName(value);
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
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationTemplateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBroadcastTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTemplateName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 broadcast_template_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.prototype.getBroadcastTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.prototype.setBroadcastTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string template_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.prototype.getTemplateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTemplateInfo} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTemplateInfo.prototype.setTemplateName = function(value) {
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
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq}
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq;
  return proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq}
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq} returns this
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigReq.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.toObject = function(includeInstance, msg) {
  var f, obj = {
newName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes}
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes;
  return proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes}
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewName(value);
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
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string new_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.prototype.getNewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes} returns this
 */
proto.api.v1alpha1.integrations.CopyPaymentLinkConfigRes.prototype.setNewName = function(value) {
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
proto.api.v1alpha1.integrations.ProfileName.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ProfileName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ProfileName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProfileName.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.v1alpha1.integrations.ProfileName}
 */
proto.api.v1alpha1.integrations.ProfileName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ProfileName;
  return proto.api.v1alpha1.integrations.ProfileName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ProfileName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ProfileName}
 */
proto.api.v1alpha1.integrations.ProfileName.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.ProfileName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ProfileName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ProfileName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProfileName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProfileName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProfileName} returns this
 */
proto.api.v1alpha1.integrations.ProfileName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PaymentProfiles.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.PaymentProfiles.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PaymentProfiles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PaymentProfiles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentProfiles.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.api.v1alpha1.integrations.PaymentProfile.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.PaymentProfiles}
 */
proto.api.v1alpha1.integrations.PaymentProfiles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PaymentProfiles;
  return proto.api.v1alpha1.integrations.PaymentProfiles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PaymentProfiles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PaymentProfiles}
 */
proto.api.v1alpha1.integrations.PaymentProfiles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PaymentProfile;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PaymentProfile.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.api.v1alpha1.integrations.PaymentProfiles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PaymentProfiles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PaymentProfiles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentProfiles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PaymentProfile.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentProfile values = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PaymentProfile>}
 */
proto.api.v1alpha1.integrations.PaymentProfiles.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PaymentProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.PaymentProfile, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PaymentProfile>} value
 * @return {!proto.api.v1alpha1.integrations.PaymentProfiles} returns this
*/
proto.api.v1alpha1.integrations.PaymentProfiles.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PaymentProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PaymentProfile}
 */
proto.api.v1alpha1.integrations.PaymentProfiles.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PaymentProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentProfiles} returns this
 */
proto.api.v1alpha1.integrations.PaymentProfiles.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PaymentProfile.repeatedFields_ = [10];



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
proto.api.v1alpha1.integrations.PaymentProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PaymentProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PaymentProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
verification: jspb.Message.getFieldWithDefault(msg, 8, ""),
invoice: jspb.Message.getFieldWithDefault(msg, 9, ""),
paymentsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.PaymentProfile}
 */
proto.api.v1alpha1.integrations.PaymentProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PaymentProfile;
  return proto.api.v1alpha1.integrations.PaymentProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PaymentProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PaymentProfile}
 */
proto.api.v1alpha1.integrations.PaymentProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerification(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoice(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addPayments(value);
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
proto.api.v1alpha1.integrations.PaymentProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PaymentProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PaymentProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerification();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getInvoice();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPaymentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * optional string verification = 8;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentProfile.prototype.getVerification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentProfile} returns this
 */
proto.api.v1alpha1.integrations.PaymentProfile.prototype.setVerification = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string invoice = 9;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PaymentProfile.prototype.getInvoice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PaymentProfile} returns this
 */
proto.api.v1alpha1.integrations.PaymentProfile.prototype.setInvoice = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string payments = 10;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.PaymentProfile.prototype.getPaymentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.PaymentProfile} returns this
 */
proto.api.v1alpha1.integrations.PaymentProfile.prototype.setPaymentsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PaymentProfile} returns this
 */
proto.api.v1alpha1.integrations.PaymentProfile.prototype.addPayments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentProfile} returns this
 */
proto.api.v1alpha1.integrations.PaymentProfile.prototype.clearPaymentsList = function() {
  return this.setPaymentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.UnknownField.repeatedFields_ = [3,4];



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
proto.api.v1alpha1.integrations.UnknownField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.UnknownField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.UnknownField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UnknownField.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
reasonNeeded: jspb.Message.getFieldWithDefault(msg, 2, ""),
potentialSourcesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
suggestedFieldsList: jspb.Message.toObjectList(msg.getSuggestedFieldsList(),
    proto.api.v1alpha1.integrations.ProvidedField.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.UnknownField}
 */
proto.api.v1alpha1.integrations.UnknownField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.UnknownField;
  return proto.api.v1alpha1.integrations.UnknownField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.UnknownField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.UnknownField}
 */
proto.api.v1alpha1.integrations.UnknownField.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReasonNeeded(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.api.commons.integrations.FieldSource>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPotentialSources(values[i]);
      }
      break;
    case 4:
      var value = new proto.api.v1alpha1.integrations.ProvidedField;
      reader.readMessage(value,proto.api.v1alpha1.integrations.ProvidedField.deserializeBinaryFromReader);
      msg.addSuggestedFields(value);
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
proto.api.v1alpha1.integrations.UnknownField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.UnknownField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.UnknownField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.UnknownField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReasonNeeded();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPotentialSourcesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getSuggestedFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.v1alpha1.integrations.ProvidedField.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.UnknownField} returns this
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.UnknownField} returns this
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string reason_needed = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.getReasonNeeded = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.UnknownField} returns this
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.setReasonNeeded = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated api.commons.integrations.FieldSource potential_sources = 3;
 * @return {!Array<!proto.api.commons.integrations.FieldSource>}
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.getPotentialSourcesList = function() {
  return /** @type {!Array<!proto.api.commons.integrations.FieldSource>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.api.commons.integrations.FieldSource>} value
 * @return {!proto.api.v1alpha1.integrations.UnknownField} returns this
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.setPotentialSourcesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.api.commons.integrations.FieldSource} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.UnknownField} returns this
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.addPotentialSources = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.UnknownField} returns this
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.clearPotentialSourcesList = function() {
  return this.setPotentialSourcesList([]);
};


/**
 * repeated ProvidedField suggested_fields = 4;
 * @return {!Array<!proto.api.v1alpha1.integrations.ProvidedField>}
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.getSuggestedFieldsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.ProvidedField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.ProvidedField, 4));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.ProvidedField>} value
 * @return {!proto.api.v1alpha1.integrations.UnknownField} returns this
*/
proto.api.v1alpha1.integrations.UnknownField.prototype.setSuggestedFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.ProvidedField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.ProvidedField}
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.addSuggestedFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.v1alpha1.integrations.ProvidedField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.UnknownField} returns this
 */
proto.api.v1alpha1.integrations.UnknownField.prototype.clearSuggestedFieldsList = function() {
  return this.setSuggestedFieldsList([]);
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
proto.api.v1alpha1.integrations.ProvidedField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ProvidedField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ProvidedField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProvidedField.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 6, ""),
altName: jspb.Message.getFieldWithDefault(msg, 2, ""),
providedBy: jspb.Message.getFieldWithDefault(msg, 3, 0),
providedByDetailsNum: jspb.Message.getFieldWithDefault(msg, 4, 0),
providedByDetailsStr: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.api.v1alpha1.integrations.ProvidedField}
 */
proto.api.v1alpha1.integrations.ProvidedField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ProvidedField;
  return proto.api.v1alpha1.integrations.ProvidedField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ProvidedField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ProvidedField}
 */
proto.api.v1alpha1.integrations.ProvidedField.deserializeBinaryFromReader = function(msg, reader) {
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
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAltName(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.integrations.FieldSource} */ (reader.readEnum());
      msg.setProvidedBy(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProvidedByDetailsNum(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvidedByDetailsStr(value);
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
proto.api.v1alpha1.integrations.ProvidedField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ProvidedField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ProvidedField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProvidedField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAltName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProvidedBy();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getProvidedByDetailsNum();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getProvidedByDetailsStr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProvidedField} returns this
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProvidedField} returns this
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string alt_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.getAltName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProvidedField} returns this
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.setAltName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.integrations.FieldSource provided_by = 3;
 * @return {!proto.api.commons.integrations.FieldSource}
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.getProvidedBy = function() {
  return /** @type {!proto.api.commons.integrations.FieldSource} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.integrations.FieldSource} value
 * @return {!proto.api.v1alpha1.integrations.ProvidedField} returns this
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.setProvidedBy = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 provided_by_details_num = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.getProvidedByDetailsNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ProvidedField} returns this
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.setProvidedByDetailsNum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string provided_by_details_str = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.getProvidedByDetailsStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProvidedField} returns this
 */
proto.api.v1alpha1.integrations.ProvidedField.prototype.setProvidedByDetailsStr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.api.v1alpha1.integrations.Values.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Values.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Values} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Values.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : []
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
 * @return {!proto.api.v1alpha1.integrations.Values}
 */
proto.api.v1alpha1.integrations.Values.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Values;
  return proto.api.v1alpha1.integrations.Values.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Values} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Values}
 */
proto.api.v1alpha1.integrations.Values.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
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
proto.api.v1alpha1.integrations.Values.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Values.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Values} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Values.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
};


/**
 * map<string, Value> values = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.Values.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.Values} returns this
 */
proto.api.v1alpha1.integrations.Values.prototype.clearValuesMap = function() {
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
proto.api.v1alpha1.integrations.Value.oneofGroups_ = [[1,2,3,4,6,7]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.integrations.Value.ValCase = {
  VAL_NOT_SET: 0,
  STR_VAL: 1,
  NUM_VAL: 2,
  BOOL_VAL: 3,
  TIME_VAL: 4,
  COMP_VAL: 6,
  INT_VAL: 7
};

/**
 * @return {proto.api.v1alpha1.integrations.Value.ValCase}
 */
proto.api.v1alpha1.integrations.Value.prototype.getValCase = function() {
  return /** @type {proto.api.v1alpha1.integrations.Value.ValCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.integrations.Value.oneofGroups_[0]));
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
proto.api.v1alpha1.integrations.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
strVal: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
numVal: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
boolVal: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
timeVal: (f = msg.getTimeVal()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
compVal: (f = msg.getCompVal()) && proto.api.v1alpha1.integrations.CompositeVal.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.integrations.Value}
 */
proto.api.v1alpha1.integrations.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Value;
  return proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Value}
 */
proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.api.v1alpha1.integrations.CompositeVal;
      reader.readMessage(value,proto.api.v1alpha1.integrations.CompositeVal.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter = function(message, writer) {
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
      proto.api.v1alpha1.integrations.CompositeVal.serializeBinaryToWriter
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
proto.api.v1alpha1.integrations.Value.prototype.getStrVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.setStrVal = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.clearStrVal = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Value.prototype.hasStrVal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double num_val = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrations.Value.prototype.getNumVal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.setNumVal = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.clearNumVal = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Value.prototype.hasNumVal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool bool_val = 3;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Value.prototype.getBoolVal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.setBoolVal = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.clearBoolVal = function() {
  return jspb.Message.setOneofField(this, 3, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Value.prototype.hasBoolVal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp time_val = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.Value.prototype.getTimeVal = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
*/
proto.api.v1alpha1.integrations.Value.prototype.setTimeVal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.clearTimeVal = function() {
  return this.setTimeVal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Value.prototype.hasTimeVal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CompositeVal comp_val = 6;
 * @return {?proto.api.v1alpha1.integrations.CompositeVal}
 */
proto.api.v1alpha1.integrations.Value.prototype.getCompVal = function() {
  return /** @type{?proto.api.v1alpha1.integrations.CompositeVal} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.CompositeVal, 6));
};


/**
 * @param {?proto.api.v1alpha1.integrations.CompositeVal|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
*/
proto.api.v1alpha1.integrations.Value.prototype.setCompVal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.clearCompVal = function() {
  return this.setCompVal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Value.prototype.hasCompVal = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 int_val = 7;
 * @return {number}
 */
proto.api.v1alpha1.integrations.Value.prototype.getIntVal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.setIntVal = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.clearIntVal = function() {
  return jspb.Message.setOneofField(this, 7, proto.api.v1alpha1.integrations.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Value.prototype.hasIntVal = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool sensitive = 5;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Value.prototype.getSensitive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.setSensitive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional api.commons.integrations.Validation validation = 8;
 * @return {!proto.api.commons.integrations.Validation}
 */
proto.api.v1alpha1.integrations.Value.prototype.getValidation = function() {
  return /** @type {!proto.api.commons.integrations.Validation} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.integrations.Validation} value
 * @return {!proto.api.v1alpha1.integrations.Value} returns this
 */
proto.api.v1alpha1.integrations.Value.prototype.setValidation = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.integrations.FieldOrStr.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.integrations.FieldOrStr.ValCase = {
  VAL_NOT_SET: 0,
  FIELD: 1,
  STR_VAL: 2
};

/**
 * @return {proto.api.v1alpha1.integrations.FieldOrStr.ValCase}
 */
proto.api.v1alpha1.integrations.FieldOrStr.prototype.getValCase = function() {
  return /** @type {proto.api.v1alpha1.integrations.FieldOrStr.ValCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.integrations.FieldOrStr.oneofGroups_[0]));
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
proto.api.v1alpha1.integrations.FieldOrStr.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.FieldOrStr.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.FieldOrStr} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.FieldOrStr.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.FieldOrStr}
 */
proto.api.v1alpha1.integrations.FieldOrStr.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.FieldOrStr;
  return proto.api.v1alpha1.integrations.FieldOrStr.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.FieldOrStr} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.FieldOrStr}
 */
proto.api.v1alpha1.integrations.FieldOrStr.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.FieldOrStr.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.FieldOrStr.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.FieldOrStr} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.FieldOrStr.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.FieldOrStr.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.FieldOrStr} returns this
 */
proto.api.v1alpha1.integrations.FieldOrStr.prototype.setField = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.v1alpha1.integrations.FieldOrStr.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.FieldOrStr} returns this
 */
proto.api.v1alpha1.integrations.FieldOrStr.prototype.clearField = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.v1alpha1.integrations.FieldOrStr.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.FieldOrStr.prototype.hasField = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string str_val = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.FieldOrStr.prototype.getStrVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.FieldOrStr} returns this
 */
proto.api.v1alpha1.integrations.FieldOrStr.prototype.setStrVal = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.integrations.FieldOrStr.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.FieldOrStr} returns this
 */
proto.api.v1alpha1.integrations.FieldOrStr.prototype.clearStrVal = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.v1alpha1.integrations.FieldOrStr.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.FieldOrStr.prototype.hasStrVal = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.CompositeVal.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.CompositeVal.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CompositeVal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CompositeVal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CompositeVal.toObject = function(includeInstance, msg) {
  var f, obj = {
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.api.v1alpha1.integrations.FieldOrStr.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.CompositeVal}
 */
proto.api.v1alpha1.integrations.CompositeVal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CompositeVal;
  return proto.api.v1alpha1.integrations.CompositeVal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CompositeVal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CompositeVal}
 */
proto.api.v1alpha1.integrations.CompositeVal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.FieldOrStr;
      reader.readMessage(value,proto.api.v1alpha1.integrations.FieldOrStr.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.CompositeVal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CompositeVal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CompositeVal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CompositeVal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.FieldOrStr.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FieldOrStr parts = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.FieldOrStr>}
 */
proto.api.v1alpha1.integrations.CompositeVal.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.FieldOrStr>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.FieldOrStr, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.FieldOrStr>} value
 * @return {!proto.api.v1alpha1.integrations.CompositeVal} returns this
*/
proto.api.v1alpha1.integrations.CompositeVal.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.FieldOrStr=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.FieldOrStr}
 */
proto.api.v1alpha1.integrations.CompositeVal.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.FieldOrStr, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.CompositeVal} returns this
 */
proto.api.v1alpha1.integrations.CompositeVal.prototype.clearPartsList = function() {
  return this.setPartsList([]);
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
proto.api.v1alpha1.integrations.Condition.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Condition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Condition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Condition.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
op: jspb.Message.getFieldWithDefault(msg, 2, 0),
value: (f = msg.getValue()) && proto.api.v1alpha1.integrations.Value.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.Condition}
 */
proto.api.v1alpha1.integrations.Condition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Condition;
  return proto.api.v1alpha1.integrations.Condition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Condition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Condition}
 */
proto.api.v1alpha1.integrations.Condition.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.integrations.CompareOperation} */ (reader.readEnum());
      msg.setOp(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.integrations.Value;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.Condition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Condition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Condition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Condition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOp();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Condition.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Condition} returns this
 */
proto.api.v1alpha1.integrations.Condition.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.integrations.CompareOperation op = 2;
 * @return {!proto.api.commons.integrations.CompareOperation}
 */
proto.api.v1alpha1.integrations.Condition.prototype.getOp = function() {
  return /** @type {!proto.api.commons.integrations.CompareOperation} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.integrations.CompareOperation} value
 * @return {!proto.api.v1alpha1.integrations.Condition} returns this
 */
proto.api.v1alpha1.integrations.Condition.prototype.setOp = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Value value = 3;
 * @return {?proto.api.v1alpha1.integrations.Value}
 */
proto.api.v1alpha1.integrations.Condition.prototype.getValue = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Value} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Value, 3));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Value|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Condition} returns this
*/
proto.api.v1alpha1.integrations.Condition.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Condition} returns this
 */
proto.api.v1alpha1.integrations.Condition.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Condition.prototype.hasValue = function() {
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
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
integrationId: jspb.Message.getFieldWithDefault(msg, 4, 0),
name: jspb.Message.getFieldWithDefault(msg, 6, ""),
description: jspb.Message.getFieldWithDefault(msg, 7, ""),
params: (f = msg.getParams()) && proto.api.v1alpha1.integrations.Values.toObject(includeInstance, f),
deleted: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
alias: (f = msg.getAlias()) && proto.api.v1alpha1.integrations.MapString.toObject(includeInstance, f),
conds: (f = msg.getConds()) && proto.api.v1alpha1.integrations.Conditions.toObject(includeInstance, f),
methodId: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationConfig;
  return proto.api.v1alpha1.integrations.IntegrationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.integrations.Values;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Values.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 13:
      var value = new proto.api.v1alpha1.integrations.MapString;
      reader.readMessage(value,proto.api.v1alpha1.integrations.MapString.deserializeBinaryFromReader);
      msg.setAlias(value);
      break;
    case 14:
      var value = new proto.api.v1alpha1.integrations.Conditions;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Conditions.deserializeBinaryFromReader);
      msg.setConds(value);
      break;
    case 15:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
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
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.v1alpha1.integrations.Values.serializeBinaryToWriter
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAlias();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.v1alpha1.integrations.MapString.serializeBinaryToWriter
    );
  }
  f = message.getConds();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.api.v1alpha1.integrations.Conditions.serializeBinaryToWriter
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 4;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Values params = 9;
 * @return {?proto.api.v1alpha1.integrations.Values}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getParams = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Values} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Values, 9));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Values|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
*/
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.hasParams = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool deleted = 10;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
*/
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MapString alias = 13;
 * @return {?proto.api.v1alpha1.integrations.MapString}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getAlias = function() {
  return /** @type{?proto.api.v1alpha1.integrations.MapString} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.MapString, 13));
};


/**
 * @param {?proto.api.v1alpha1.integrations.MapString|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
*/
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setAlias = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.clearAlias = function() {
  return this.setAlias(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.hasAlias = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Conditions conds = 14;
 * @return {?proto.api.v1alpha1.integrations.Conditions}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getConds = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Conditions} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Conditions, 14));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Conditions|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
*/
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setConds = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.clearConds = function() {
  return this.setConds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.hasConds = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 15;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationConfig} returns this
 */
proto.api.v1alpha1.integrations.IntegrationConfig.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
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
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IntegrationTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IntegrationTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationTransactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 4, ""),
integrationId: jspb.Message.getFieldWithDefault(msg, 5, 0),
methodId: jspb.Message.getFieldWithDefault(msg, 6, 0),
transactionType: jspb.Message.getFieldWithDefault(msg, 7, 0),
requestSource: jspb.Message.getFieldWithDefault(msg, 8, 0),
result: jspb.Message.getFieldWithDefault(msg, 9, 0),
amountCollected: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
requestData: (f = msg.getRequestData()) && proto.api.v1alpha1.integrations.Values.toObject(includeInstance, f),
responseData: (f = msg.getResponseData()) && proto.api.v1alpha1.integrations.Values.toObject(includeInstance, f),
createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
configName: jspb.Message.getFieldWithDefault(msg, 14, ""),
conds: (f = msg.getConds()) && proto.api.v1alpha1.integrations.Conditions.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IntegrationTransaction;
  return proto.api.v1alpha1.integrations.IntegrationTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IntegrationTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntegrationTransactionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.integrations.IntegrationType} */ (reader.readEnum());
      msg.setIntegrationId(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.integrations.TransactionType} */ (reader.readEnum());
      msg.setTransactionType(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.integrations.RequestSource} */ (reader.readEnum());
      msg.setRequestSource(value);
      break;
    case 9:
      var value = /** @type {!proto.api.commons.integrations.TransactionResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmountCollected(value);
      break;
    case 11:
      var value = new proto.api.v1alpha1.integrations.Values;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Values.deserializeBinaryFromReader);
      msg.setRequestData(value);
      break;
    case 12:
      var value = new proto.api.v1alpha1.integrations.Values;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Values.deserializeBinaryFromReader);
      msg.setResponseData(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigName(value);
      break;
    case 15:
      var value = new proto.api.v1alpha1.integrations.Conditions;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Conditions.deserializeBinaryFromReader);
      msg.setConds(value);
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
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IntegrationTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IntegrationTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIntegrationId();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getTransactionType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRequestSource();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getAmountCollected();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getRequestData();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v1alpha1.integrations.Values.serializeBinaryToWriter
    );
  }
  f = message.getResponseData();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.api.v1alpha1.integrations.Values.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConfigName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getConds();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.api.v1alpha1.integrations.Conditions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string integration_transaction_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getIntegrationTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setIntegrationTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string task_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.integrations.IntegrationType integration_id = 5;
 * @return {!proto.api.commons.integrations.IntegrationType}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getIntegrationId = function() {
  return /** @type {!proto.api.commons.integrations.IntegrationType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.integrations.IntegrationType} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 6;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional api.commons.integrations.TransactionType transaction_type = 7;
 * @return {!proto.api.commons.integrations.TransactionType}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getTransactionType = function() {
  return /** @type {!proto.api.commons.integrations.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.integrations.TransactionType} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setTransactionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional api.commons.integrations.RequestSource request_source = 8;
 * @return {!proto.api.commons.integrations.RequestSource}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getRequestSource = function() {
  return /** @type {!proto.api.commons.integrations.RequestSource} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestSource} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setRequestSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional api.commons.integrations.TransactionResult result = 9;
 * @return {!proto.api.commons.integrations.TransactionResult}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getResult = function() {
  return /** @type {!proto.api.commons.integrations.TransactionResult} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.api.commons.integrations.TransactionResult} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional double amount_collected = 10;
 * @return {number}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getAmountCollected = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setAmountCollected = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional Values request_data = 11;
 * @return {?proto.api.v1alpha1.integrations.Values}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getRequestData = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Values} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Values, 11));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Values|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
*/
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setRequestData = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.clearRequestData = function() {
  return this.setRequestData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.hasRequestData = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Values response_data = 12;
 * @return {?proto.api.v1alpha1.integrations.Values}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getResponseData = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Values} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Values, 12));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Values|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
*/
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setResponseData = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.clearResponseData = function() {
  return this.setResponseData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.hasResponseData = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
*/
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string config_name = 14;
 * @return {string}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getConfigName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setConfigName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional Conditions conds = 15;
 * @return {?proto.api.v1alpha1.integrations.Conditions}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.getConds = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Conditions} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Conditions, 15));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Conditions|undefined} value
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
*/
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.setConds = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.IntegrationTransaction} returns this
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.clearConds = function() {
  return this.setConds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.IntegrationTransaction.prototype.hasConds = function() {
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
proto.api.v1alpha1.integrations.MapString.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.MapString.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.MapString} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.MapString.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.api.v1alpha1.integrations.MapString}
 */
proto.api.v1alpha1.integrations.MapString.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.MapString;
  return proto.api.v1alpha1.integrations.MapString.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.MapString} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.MapString}
 */
proto.api.v1alpha1.integrations.MapString.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getValuesMap();
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
proto.api.v1alpha1.integrations.MapString.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.MapString.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.MapString} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.MapString.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> values = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.MapString.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.MapString} returns this
 */
proto.api.v1alpha1.integrations.MapString.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.Conditions.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.Conditions.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Conditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Conditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Conditions.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.api.v1alpha1.integrations.Condition.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.Conditions}
 */
proto.api.v1alpha1.integrations.Conditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Conditions;
  return proto.api.v1alpha1.integrations.Conditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Conditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Conditions}
 */
proto.api.v1alpha1.integrations.Conditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.Condition;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Condition.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.api.v1alpha1.integrations.Conditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Conditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Conditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Conditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Condition values = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.Condition>}
 */
proto.api.v1alpha1.integrations.Conditions.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Condition, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Condition>} value
 * @return {!proto.api.v1alpha1.integrations.Conditions} returns this
*/
proto.api.v1alpha1.integrations.Conditions.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Condition}
 */
proto.api.v1alpha1.integrations.Conditions.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.Conditions} returns this
 */
proto.api.v1alpha1.integrations.Conditions.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.api.v1alpha1.integrations.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
taskId: jspb.Message.getFieldWithDefault(msg, 2, ""),
src: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.api.v1alpha1.integrations.Task}
 */
proto.api.v1alpha1.integrations.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Task;
  return proto.api.v1alpha1.integrations.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Task}
 */
proto.api.v1alpha1.integrations.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.integrations.RequestSource} */ (reader.readEnum());
      msg.setSrc(value);
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
proto.api.v1alpha1.integrations.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSrc();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * map<string, Value> values = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.Task.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.Task} returns this
 */
proto.api.v1alpha1.integrations.Task.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;
};


/**
 * optional string task_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Task.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Task} returns this
 */
proto.api.v1alpha1.integrations.Task.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.integrations.RequestSource src = 3;
 * @return {!proto.api.commons.integrations.RequestSource}
 */
proto.api.v1alpha1.integrations.Task.prototype.getSrc = function() {
  return /** @type {!proto.api.commons.integrations.RequestSource} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestSource} value
 * @return {!proto.api.v1alpha1.integrations.Task} returns this
 */
proto.api.v1alpha1.integrations.Task.prototype.setSrc = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.api.v1alpha1.integrations.PortalConfigId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalConfigId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalConfigId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalConfigId.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.PortalConfigId}
 */
proto.api.v1alpha1.integrations.PortalConfigId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalConfigId;
  return proto.api.v1alpha1.integrations.PortalConfigId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalConfigId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalConfigId}
 */
proto.api.v1alpha1.integrations.PortalConfigId.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.PortalConfigId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalConfigId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalConfigId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalConfigId.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.PortalConfigId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfigId} returns this
 */
proto.api.v1alpha1.integrations.PortalConfigId.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrations.PortalConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalConfig.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.PortalConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalConfig;
  return proto.api.v1alpha1.integrations.PortalConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalConfig}
 */
proto.api.v1alpha1.integrations.PortalConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.PortalConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalConfig.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.PortalConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string name = 22;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string description = 23;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string chat_client_link = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getChatClientLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setChatClientLink = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contact_email = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getContactEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setContactEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contact_phone = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getContactPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setContactPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string postal_code = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setPostalCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string city = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string state = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string company_name = 8;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getCompanyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setCompanyName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bytes logo = 13;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes logo = 13;
 * This is a type-conversion wrapper around `getLogo()`
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getLogo_asB64 = function() {
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
proto.api.v1alpha1.integrations.PortalConfig.prototype.getLogo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLogo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setLogo = function(value) {
  return jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional string primary_color = 14;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getPrimaryColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setPrimaryColor = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string secondary_color = 15;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getSecondaryColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setSecondaryColor = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string street_address = 19;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.getStreetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalConfig} returns this
 */
proto.api.v1alpha1.integrations.PortalConfig.prototype.setStreetAddress = function(value) {
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
proto.api.v1alpha1.integrations.PortalLinkId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalLinkId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalLinkId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalLinkId.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.PortalLinkId}
 */
proto.api.v1alpha1.integrations.PortalLinkId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalLinkId;
  return proto.api.v1alpha1.integrations.PortalLinkId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalLinkId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalLinkId}
 */
proto.api.v1alpha1.integrations.PortalLinkId.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.PortalLinkId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalLinkId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalLinkId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalLinkId.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.PortalLinkId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalLinkId} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkId.prototype.setId = function(value) {
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
proto.api.v1alpha1.integrations.PortalLink.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalLink.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
portalId: jspb.Message.getFieldWithDefault(msg, 4, ""),
pluginInstanceId: jspb.Message.getFieldWithDefault(msg, 5, ""),
portalConfigId: jspb.Message.getFieldWithDefault(msg, 6, ""),
taskId: jspb.Message.getFieldWithDefault(msg, 7, ""),
dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
lastEdited: (f = msg.getLastEdited()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.PortalLink}
 */
proto.api.v1alpha1.integrations.PortalLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalLink;
  return proto.api.v1alpha1.integrations.PortalLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalLink}
 */
proto.api.v1alpha1.integrations.PortalLink.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortalId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginInstanceId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortalConfigId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
      break;
    case 8:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 9:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEdited(value);
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
proto.api.v1alpha1.integrations.PortalLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPortalId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPluginInstanceId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPortalConfigId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getLastEdited();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string portal_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.getPortalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.setPortalId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string plugin_instance_id = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.getPluginInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.setPluginInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string portal_config_id = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.getPortalConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.setPortalConfigId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string task_id = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.setTaskId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * map<string, Value> data = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;
};


/**
 * map<string, Value> metadata = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;
};


/**
 * optional google.protobuf.Timestamp last_edited = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.getLastEdited = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
*/
proto.api.v1alpha1.integrations.PortalLink.prototype.setLastEdited = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PortalLink} returns this
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.clearLastEdited = function() {
  return this.setLastEdited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PortalLink.prototype.hasLastEdited = function() {
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
proto.api.v1alpha1.integrations.PortalId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalId.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.PortalId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalId;
  return proto.api.v1alpha1.integrations.PortalId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalId}
 */
proto.api.v1alpha1.integrations.PortalId.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.PortalId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalId.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.PortalId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalId} returns this
 */
proto.api.v1alpha1.integrations.PortalId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.Portal.repeatedFields_ = [7];



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
proto.api.v1alpha1.integrations.Portal.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Portal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Portal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Portal.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
description: jspb.Message.getFieldWithDefault(msg, 5, ""),
portalConfigId: jspb.Message.getFieldWithDefault(msg, 6, ""),
pluginInstIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
ptype: (f = msg.getPtype()) && proto.api.v1alpha1.integrations.PortalType.toObject(includeInstance, f),
lastEdited: (f = msg.getLastEdited()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
definitionName: jspb.Message.getFieldWithDefault(msg, 11, ""),
portalSegments: (f = msg.getPortalSegments()) && proto.api.v1alpha1.integrations.PortalSegments.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.Portal}
 */
proto.api.v1alpha1.integrations.Portal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Portal;
  return proto.api.v1alpha1.integrations.Portal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Portal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Portal}
 */
proto.api.v1alpha1.integrations.Portal.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortalConfigId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addPluginInstIds(value);
      break;
    case 8:
      var value = new proto.api.v1alpha1.integrations.PortalType;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalType.deserializeBinaryFromReader);
      msg.setPtype(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEdited(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefinitionName(value);
      break;
    case 13:
      var value = new proto.api.v1alpha1.integrations.PortalSegments;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalSegments.deserializeBinaryFromReader);
      msg.setPortalSegments(value);
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
proto.api.v1alpha1.integrations.Portal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Portal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Portal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Portal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPortalConfigId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPluginInstIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getPtype();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.v1alpha1.integrations.PortalType.serializeBinaryToWriter
    );
  }
  f = message.getLastEdited();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDefinitionName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPortalSegments();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.v1alpha1.integrations.PortalSegments.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string portal_config_id = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getPortalConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.setPortalConfigId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string plugin_inst_ids = 7;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getPluginInstIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.setPluginInstIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.addPluginInstIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.clearPluginInstIdsList = function() {
  return this.setPluginInstIdsList([]);
};


/**
 * optional PortalType ptype = 8;
 * @return {?proto.api.v1alpha1.integrations.PortalType}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getPtype = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalType} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.PortalType, 8));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalType|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
*/
proto.api.v1alpha1.integrations.Portal.prototype.setPtype = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.clearPtype = function() {
  return this.setPtype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Portal.prototype.hasPtype = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp last_edited = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getLastEdited = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
*/
proto.api.v1alpha1.integrations.Portal.prototype.setLastEdited = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.clearLastEdited = function() {
  return this.setLastEdited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Portal.prototype.hasLastEdited = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string definition_name = 11;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getDefinitionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.setDefinitionName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional PortalSegments portal_segments = 13;
 * @return {?proto.api.v1alpha1.integrations.PortalSegments}
 */
proto.api.v1alpha1.integrations.Portal.prototype.getPortalSegments = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalSegments} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.PortalSegments, 13));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalSegments|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
*/
proto.api.v1alpha1.integrations.Portal.prototype.setPortalSegments = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Portal} returns this
 */
proto.api.v1alpha1.integrations.Portal.prototype.clearPortalSegments = function() {
  return this.setPortalSegments(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Portal.prototype.hasPortalSegments = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PortalSegments.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.PortalSegments.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalSegments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalSegments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalSegments.toObject = function(includeInstance, msg) {
  var f, obj = {
portalSegmentsList: jspb.Message.toObjectList(msg.getPortalSegmentsList(),
    proto.api.v1alpha1.integrations.PortalSegment.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.PortalSegments}
 */
proto.api.v1alpha1.integrations.PortalSegments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalSegments;
  return proto.api.v1alpha1.integrations.PortalSegments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalSegments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalSegments}
 */
proto.api.v1alpha1.integrations.PortalSegments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PortalSegment;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalSegment.deserializeBinaryFromReader);
      msg.addPortalSegments(value);
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
proto.api.v1alpha1.integrations.PortalSegments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalSegments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalSegments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalSegments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortalSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PortalSegment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PortalSegment portal_segments = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PortalSegment>}
 */
proto.api.v1alpha1.integrations.PortalSegments.prototype.getPortalSegmentsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PortalSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.PortalSegment, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PortalSegment>} value
 * @return {!proto.api.v1alpha1.integrations.PortalSegments} returns this
*/
proto.api.v1alpha1.integrations.PortalSegments.prototype.setPortalSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PortalSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PortalSegment}
 */
proto.api.v1alpha1.integrations.PortalSegments.prototype.addPortalSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PortalSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalSegments} returns this
 */
proto.api.v1alpha1.integrations.PortalSegments.prototype.clearPortalSegmentsList = function() {
  return this.setPortalSegmentsList([]);
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
proto.api.v1alpha1.integrations.PortalText.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalText.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.PortalText}
 */
proto.api.v1alpha1.integrations.PortalText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalText;
  return proto.api.v1alpha1.integrations.PortalText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalText}
 */
proto.api.v1alpha1.integrations.PortalText.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.PortalText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalText.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.PortalText.prototype.getVerificationHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalText} returns this
 */
proto.api.v1alpha1.integrations.PortalText.prototype.setVerificationHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string verification_footer = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalText.prototype.getVerificationFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalText} returns this
 */
proto.api.v1alpha1.integrations.PortalText.prototype.setVerificationFooter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string payment_header = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalText.prototype.getPaymentHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalText} returns this
 */
proto.api.v1alpha1.integrations.PortalText.prototype.setPaymentHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string payment_footer = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalText.prototype.getPaymentFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalText} returns this
 */
proto.api.v1alpha1.integrations.PortalText.prototype.setPaymentFooter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string receipt_header = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalText.prototype.getReceiptHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalText} returns this
 */
proto.api.v1alpha1.integrations.PortalText.prototype.setReceiptHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string receipt_footer = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalText.prototype.getReceiptFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalText} returns this
 */
proto.api.v1alpha1.integrations.PortalText.prototype.setReceiptFooter = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string invoice_header = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalText.prototype.getInvoiceHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalText} returns this
 */
proto.api.v1alpha1.integrations.PortalText.prototype.setInvoiceHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string invoice_footer = 8;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalText.prototype.getInvoiceFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalText} returns this
 */
proto.api.v1alpha1.integrations.PortalText.prototype.setInvoiceFooter = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1alpha1.integrations.PortalType.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.integrations.PortalType.DataCase = {
  DATA_NOT_SET: 0,
  PAYMENT_PORTAL: 1,
  IVR_PORTAL: 2
};

/**
 * @return {proto.api.v1alpha1.integrations.PortalType.DataCase}
 */
proto.api.v1alpha1.integrations.PortalType.prototype.getDataCase = function() {
  return /** @type {proto.api.v1alpha1.integrations.PortalType.DataCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.integrations.PortalType.oneofGroups_[0]));
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
proto.api.v1alpha1.integrations.PortalType.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalType.toObject = function(includeInstance, msg) {
  var f, obj = {
paymentPortal: (f = msg.getPaymentPortal()) && proto.api.v1alpha1.integrations.PaymentPortal.toObject(includeInstance, f),
ivrPortal: (f = msg.getIvrPortal()) && proto.api.v1alpha1.integrations.IVRPortal.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.PortalType}
 */
proto.api.v1alpha1.integrations.PortalType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalType;
  return proto.api.v1alpha1.integrations.PortalType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalType}
 */
proto.api.v1alpha1.integrations.PortalType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PaymentPortal;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PaymentPortal.deserializeBinaryFromReader);
      msg.setPaymentPortal(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.integrations.IVRPortal;
      reader.readMessage(value,proto.api.v1alpha1.integrations.IVRPortal.deserializeBinaryFromReader);
      msg.setIvrPortal(value);
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
proto.api.v1alpha1.integrations.PortalType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentPortal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PaymentPortal.serializeBinaryToWriter
    );
  }
  f = message.getIvrPortal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.IVRPortal.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentPortal payment_portal = 1;
 * @return {?proto.api.v1alpha1.integrations.PaymentPortal}
 */
proto.api.v1alpha1.integrations.PortalType.prototype.getPaymentPortal = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PaymentPortal} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.PaymentPortal, 1));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PaymentPortal|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PortalType} returns this
*/
proto.api.v1alpha1.integrations.PortalType.prototype.setPaymentPortal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.v1alpha1.integrations.PortalType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PortalType} returns this
 */
proto.api.v1alpha1.integrations.PortalType.prototype.clearPaymentPortal = function() {
  return this.setPaymentPortal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PortalType.prototype.hasPaymentPortal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IVRPortal ivr_portal = 2;
 * @return {?proto.api.v1alpha1.integrations.IVRPortal}
 */
proto.api.v1alpha1.integrations.PortalType.prototype.getIvrPortal = function() {
  return /** @type{?proto.api.v1alpha1.integrations.IVRPortal} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.IVRPortal, 2));
};


/**
 * @param {?proto.api.v1alpha1.integrations.IVRPortal|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PortalType} returns this
*/
proto.api.v1alpha1.integrations.PortalType.prototype.setIvrPortal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.v1alpha1.integrations.PortalType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PortalType} returns this
 */
proto.api.v1alpha1.integrations.PortalType.prototype.clearIvrPortal = function() {
  return this.setIvrPortal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PortalType.prototype.hasIvrPortal = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PaymentPortal.repeatedFields_ = [10];



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
proto.api.v1alpha1.integrations.PaymentPortal.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PaymentPortal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PaymentPortal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentPortal.toObject = function(includeInstance, msg) {
  var f, obj = {
verification: (f = msg.getVerification()) && api_commons_integrations_integrations_pb.VerificationFlow.toObject(includeInstance, f),
invoice: (f = msg.getInvoice()) && api_commons_integrations_integrations_pb.InvoiceFlow.toObject(includeInstance, f),
paymentsList: jspb.Message.toObjectList(msg.getPaymentsList(),
    api_commons_integrations_integrations_pb.PaymentFlow.toObject, includeInstance),
portalText: (f = msg.getPortalText()) && proto.api.v1alpha1.integrations.PortalText.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal}
 */
proto.api.v1alpha1.integrations.PaymentPortal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PaymentPortal;
  return proto.api.v1alpha1.integrations.PaymentPortal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PaymentPortal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal}
 */
proto.api.v1alpha1.integrations.PaymentPortal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = new api_commons_integrations_integrations_pb.VerificationFlow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.VerificationFlow.deserializeBinaryFromReader);
      msg.setVerification(value);
      break;
    case 9:
      var value = new api_commons_integrations_integrations_pb.InvoiceFlow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.InvoiceFlow.deserializeBinaryFromReader);
      msg.setInvoice(value);
      break;
    case 10:
      var value = new api_commons_integrations_integrations_pb.PaymentFlow;
      reader.readMessage(value,api_commons_integrations_integrations_pb.PaymentFlow.deserializeBinaryFromReader);
      msg.addPayments(value);
      break;
    case 20:
      var value = new proto.api.v1alpha1.integrations.PortalText;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalText.deserializeBinaryFromReader);
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
proto.api.v1alpha1.integrations.PaymentPortal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PaymentPortal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PaymentPortal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PaymentPortal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerification();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      api_commons_integrations_integrations_pb.VerificationFlow.serializeBinaryToWriter
    );
  }
  f = message.getInvoice();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      api_commons_integrations_integrations_pb.InvoiceFlow.serializeBinaryToWriter
    );
  }
  f = message.getPaymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      api_commons_integrations_integrations_pb.PaymentFlow.serializeBinaryToWriter
    );
  }
  f = message.getPortalText();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.api.v1alpha1.integrations.PortalText.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.integrations.VerificationFlow verification = 8;
 * @return {?proto.api.commons.integrations.VerificationFlow}
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.getVerification = function() {
  return /** @type{?proto.api.commons.integrations.VerificationFlow} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.VerificationFlow, 8));
};


/**
 * @param {?proto.api.commons.integrations.VerificationFlow|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal} returns this
*/
proto.api.v1alpha1.integrations.PaymentPortal.prototype.setVerification = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal} returns this
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.clearVerification = function() {
  return this.setVerification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.hasVerification = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional api.commons.integrations.InvoiceFlow invoice = 9;
 * @return {?proto.api.commons.integrations.InvoiceFlow}
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.getInvoice = function() {
  return /** @type{?proto.api.commons.integrations.InvoiceFlow} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.InvoiceFlow, 9));
};


/**
 * @param {?proto.api.commons.integrations.InvoiceFlow|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal} returns this
*/
proto.api.v1alpha1.integrations.PaymentPortal.prototype.setInvoice = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal} returns this
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.clearInvoice = function() {
  return this.setInvoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.hasInvoice = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated api.commons.integrations.PaymentFlow payments = 10;
 * @return {!Array<!proto.api.commons.integrations.PaymentFlow>}
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.getPaymentsList = function() {
  return /** @type{!Array<!proto.api.commons.integrations.PaymentFlow>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_integrations_integrations_pb.PaymentFlow, 10));
};


/**
 * @param {!Array<!proto.api.commons.integrations.PaymentFlow>} value
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal} returns this
*/
proto.api.v1alpha1.integrations.PaymentPortal.prototype.setPaymentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.api.commons.integrations.PaymentFlow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.integrations.PaymentFlow}
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.addPayments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.api.commons.integrations.PaymentFlow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal} returns this
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.clearPaymentsList = function() {
  return this.setPaymentsList([]);
};


/**
 * optional PortalText portal_text = 20;
 * @return {?proto.api.v1alpha1.integrations.PortalText}
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.getPortalText = function() {
  return /** @type{?proto.api.v1alpha1.integrations.PortalText} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.PortalText, 20));
};


/**
 * @param {?proto.api.v1alpha1.integrations.PortalText|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal} returns this
*/
proto.api.v1alpha1.integrations.PaymentPortal.prototype.setPortalText = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PaymentPortal} returns this
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.clearPortalText = function() {
  return this.setPortalText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PaymentPortal.prototype.hasPortalText = function() {
  return jspb.Message.getField(this, 20) != null;
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
proto.api.v1alpha1.integrations.IVRPortal.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.IVRPortal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.IVRPortal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IVRPortal.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.IVRPortal}
 */
proto.api.v1alpha1.integrations.IVRPortal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.IVRPortal;
  return proto.api.v1alpha1.integrations.IVRPortal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.IVRPortal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.IVRPortal}
 */
proto.api.v1alpha1.integrations.IVRPortal.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.IVRPortal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.IVRPortal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.IVRPortal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.IVRPortal.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.PluginInstanceId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PluginInstanceId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PluginInstanceId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PluginInstanceId.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.integrations.PluginInstanceId}
 */
proto.api.v1alpha1.integrations.PluginInstanceId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PluginInstanceId;
  return proto.api.v1alpha1.integrations.PluginInstanceId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PluginInstanceId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PluginInstanceId}
 */
proto.api.v1alpha1.integrations.PluginInstanceId.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.integrations.PluginInstanceId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PluginInstanceId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PluginInstanceId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PluginInstanceId.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.integrations.PluginInstanceId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstanceId} returns this
 */
proto.api.v1alpha1.integrations.PluginInstanceId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PluginInstance.repeatedFields_ = [13];



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
proto.api.v1alpha1.integrations.PluginInstance.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PluginInstance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PluginInstance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PluginInstance.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
description: jspb.Message.getFieldWithDefault(msg, 5, ""),
pluginDefinition: jspb.Message.getFieldWithDefault(msg, 6, ""),
data: (f = msg.getData()) && proto.api.v1alpha1.integrations.Values.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && proto.api.v1alpha1.integrations.Values.toObject(includeInstance, f),
lastEdited: (f = msg.getLastEdited()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
methodId: jspb.Message.getFieldWithDefault(msg, 12, 0),
displayMethodsList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.PluginInstance}
 */
proto.api.v1alpha1.integrations.PluginInstance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PluginInstance;
  return proto.api.v1alpha1.integrations.PluginInstance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PluginInstance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PluginInstance}
 */
proto.api.v1alpha1.integrations.PluginInstance.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginDefinition(value);
      break;
    case 7:
      var value = new proto.api.v1alpha1.integrations.Values;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Values.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.integrations.Values;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Values.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastEdited(value);
      break;
    case 12:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
      break;
    case 13:
      var values = /** @type {!Array<!proto.api.commons.integrations.RequestMethod>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDisplayMethods(values[i]);
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
proto.api.v1alpha1.integrations.PluginInstance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PluginInstance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PluginInstance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PluginInstance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPluginDefinition();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.v1alpha1.integrations.Values.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v1alpha1.integrations.Values.serializeBinaryToWriter
    );
  }
  f = message.getLastEdited();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getDisplayMethodsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      13,
      f
    );
  }
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string plugin_definition = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getPluginDefinition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.setPluginDefinition = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Values data = 7;
 * @return {?proto.api.v1alpha1.integrations.Values}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getData = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Values} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Values, 7));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Values|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
*/
proto.api.v1alpha1.integrations.PluginInstance.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.hasData = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Values metadata = 10;
 * @return {?proto.api.v1alpha1.integrations.Values}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getMetadata = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Values} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Values, 10));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Values|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
*/
proto.api.v1alpha1.integrations.PluginInstance.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp last_edited = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getLastEdited = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
*/
proto.api.v1alpha1.integrations.PluginInstance.prototype.setLastEdited = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.clearLastEdited = function() {
  return this.setLastEdited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.hasLastEdited = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 12;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * repeated api.commons.integrations.RequestMethod display_methods = 13;
 * @return {!Array<!proto.api.commons.integrations.RequestMethod>}
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.getDisplayMethodsList = function() {
  return /** @type {!Array<!proto.api.commons.integrations.RequestMethod>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<!proto.api.commons.integrations.RequestMethod>} value
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.setDisplayMethodsList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.addDisplayMethods = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PluginInstance} returns this
 */
proto.api.v1alpha1.integrations.PluginInstance.prototype.clearDisplayMethodsList = function() {
  return this.setDisplayMethodsList([]);
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
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalLinkTransactionRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.toObject = function(includeInstance, msg) {
  var f, obj = {
views: jspb.Message.getFieldWithDefault(msg, 1, 0),
verifyAttempts: jspb.Message.getFieldWithDefault(msg, 2, 0),
verifySuccesses: jspb.Message.getFieldWithDefault(msg, 3, 0),
paymentAttempts: jspb.Message.getFieldWithDefault(msg, 4, 0),
paymentSuccesses: jspb.Message.getFieldWithDefault(msg, 5, 0),
paymentAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
linkDataMap: (f = msg.getLinkDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : []
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
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalLinkTransactionRow;
  return proto.api.v1alpha1.integrations.PortalLinkTransactionRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setViews(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVerifyAttempts(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVerifySuccesses(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaymentAttempts(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaymentSuccesses(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPaymentAmount(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 8:
      var value = msg.getLinkDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
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
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalLinkTransactionRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViews();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVerifyAttempts();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getVerifySuccesses();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPaymentAttempts();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPaymentSuccesses();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPaymentAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLinkDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
};


/**
 * optional int32 views = 1;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.getViews = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.setViews = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 verify_attempts = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.getVerifyAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.setVerifyAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 verify_successes = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.getVerifySuccesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.setVerifySuccesses = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 payment_attempts = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.getPaymentAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.setPaymentAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 payment_successes = 5;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.getPaymentSuccesses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.setPaymentSuccesses = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double payment_amount = 6;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.getPaymentAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.setPaymentAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
*/
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.hasDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, Value> link_data = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.getLinkDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow} returns this
 */
proto.api.v1alpha1.integrations.PortalLinkTransactionRow.prototype.clearLinkDataMap = function() {
  this.getLinkDataMap().clear();
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
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
regionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
pageNum: jspb.Message.getFieldWithDefault(msg, 6, 0),
methodId: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq;
  return proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageNum(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.integrations.RequestMethod} */ (reader.readEnum());
      msg.setMethodId(value);
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
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageNum();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMethodId();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string region_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.setRegionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.hasStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.getEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
*/
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 page_num = 6;
 * @return {number}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.getPageNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.setPageNum = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional api.commons.integrations.RequestMethod method_id = 7;
 * @return {!proto.api.commons.integrations.RequestMethod}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.getMethodId = function() {
  return /** @type {!proto.api.commons.integrations.RequestMethod} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.integrations.RequestMethod} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeReq.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.repeatedFields_ = [2];



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
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.toObject = function(includeInstance, msg) {
  var f, obj = {
rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    proto.api.v1alpha1.integrations.PortalLinkTransactionRow.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes;
  return proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.api.v1alpha1.integrations.PortalLinkTransactionRow;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalLinkTransactionRow.deserializeBinaryFromReader);
      msg.addRows(value);
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
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.PortalLinkTransactionRow.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PortalLinkTransactionRow rows = 2;
 * @return {!Array<!proto.api.v1alpha1.integrations.PortalLinkTransactionRow>}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PortalLinkTransactionRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.PortalLinkTransactionRow, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PortalLinkTransactionRow>} value
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes} returns this
*/
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.prototype.setRowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PortalLinkTransactionRow}
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.integrations.PortalLinkTransactionRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes} returns this
 */
proto.api.v1alpha1.integrations.GetPortalLinksByDateRangeRes.prototype.clearRowsList = function() {
  return this.setRowsList([]);
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
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CallEpicPatientReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CallEpicPatientReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.toObject = function(includeInstance, msg) {
  var f, obj = {
phoneagentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
originphoneextension: jspb.Message.getFieldWithDefault(msg, 2, ""),
phonenumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
epiccallid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientReq}
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CallEpicPatientReq;
  return proto.api.v1alpha1.integrations.CallEpicPatientReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CallEpicPatientReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientReq}
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneagentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginphoneextension(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonenumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEpiccallid(value);
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
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CallEpicPatientReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CallEpicPatientReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhoneagentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOriginphoneextension();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhonenumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEpiccallid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string PhoneAgentID = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.getPhoneagentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientReq} returns this
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.setPhoneagentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string OriginPhoneExtension = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.getOriginphoneextension = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientReq} returns this
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.setOriginphoneextension = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PhoneNumber = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.getPhonenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientReq} returns this
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.setPhonenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string EpicCallID = 4;
 * @return {string}
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.getEpiccallid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientReq} returns this
 */
proto.api.v1alpha1.integrations.CallEpicPatientReq.prototype.setEpiccallid = function(value) {
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
proto.api.v1alpha1.integrations.CallEpicPatientRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.CallEpicPatientRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.CallEpicPatientRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CallEpicPatientRes.toObject = function(includeInstance, msg) {
  var f, obj = {
phonesystemcallid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientRes}
 */
proto.api.v1alpha1.integrations.CallEpicPatientRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.CallEpicPatientRes;
  return proto.api.v1alpha1.integrations.CallEpicPatientRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.CallEpicPatientRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientRes}
 */
proto.api.v1alpha1.integrations.CallEpicPatientRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonesystemcallid(value);
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
proto.api.v1alpha1.integrations.CallEpicPatientRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.CallEpicPatientRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.CallEpicPatientRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.CallEpicPatientRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhonesystemcallid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string PhoneSystemCallID = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.CallEpicPatientRes.prototype.getPhonesystemcallid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.CallEpicPatientRes} returns this
 */
proto.api.v1alpha1.integrations.CallEpicPatientRes.prototype.setPhonesystemcallid = function(value) {
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
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.toObject = function(includeInstance, msg) {
  var f, obj = {
phoneagentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
originphoneextension: jspb.Message.getFieldWithDefault(msg, 2, ""),
epiccallid: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq}
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq;
  return proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq}
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneagentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginphoneextension(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEpiccallid(value);
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
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhoneagentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOriginphoneextension();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEpiccallid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string PhoneAgentID = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.prototype.getPhoneagentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq} returns this
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.prototype.setPhoneagentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string OriginPhoneExtension = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.prototype.getOriginphoneextension = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq} returns this
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.prototype.setOriginphoneextension = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string EpicCallID = 3;
 * @return {string}
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.prototype.getEpiccallid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq} returns this
 */
proto.api.v1alpha1.integrations.HangUpEpicPatientCallReq.prototype.setEpiccallid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.repeatedFields_ = [3];



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
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
serversList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq}
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq;
  return proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq}
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addServers(value);
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
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq} returns this
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string servers = 3;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.prototype.getServersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq} returns this
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.prototype.setServersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq} returns this
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.prototype.addServers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq} returns this
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairReq.prototype.clearServersList = function() {
  return this.setServersList([]);
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
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.toObject = function(includeInstance, msg) {
  var f, obj = {
productionPublicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
nonProductionPublicKey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes}
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes;
  return proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes}
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductionPublicKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonProductionPublicKey(value);
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
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductionPublicKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNonProductionPublicKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string production_public_key = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.prototype.getProductionPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes} returns this
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.prototype.setProductionPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string non_production_public_key = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.prototype.getNonProductionPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes} returns this
 */
proto.api.v1alpha1.integrations.GenerateEpicKeyPairRes.prototype.setNonProductionPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PortalSegment.repeatedFields_ = [1];



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
proto.api.v1alpha1.integrations.PortalSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
workflowChoicesList: jspb.Message.toObjectList(msg.getWorkflowChoicesList(),
    proto.api.v1alpha1.integrations.PortalWorkflow.toObject, includeInstance)
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
 * @return {!proto.api.v1alpha1.integrations.PortalSegment}
 */
proto.api.v1alpha1.integrations.PortalSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalSegment;
  return proto.api.v1alpha1.integrations.PortalSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalSegment}
 */
proto.api.v1alpha1.integrations.PortalSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.integrations.PortalWorkflow;
      reader.readMessage(value,proto.api.v1alpha1.integrations.PortalWorkflow.deserializeBinaryFromReader);
      msg.addWorkflowChoices(value);
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
proto.api.v1alpha1.integrations.PortalSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowChoicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.integrations.PortalWorkflow.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PortalWorkflow workflow_choices = 1;
 * @return {!Array<!proto.api.v1alpha1.integrations.PortalWorkflow>}
 */
proto.api.v1alpha1.integrations.PortalSegment.prototype.getWorkflowChoicesList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.PortalWorkflow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.PortalWorkflow, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.PortalWorkflow>} value
 * @return {!proto.api.v1alpha1.integrations.PortalSegment} returns this
*/
proto.api.v1alpha1.integrations.PortalSegment.prototype.setWorkflowChoicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.PortalWorkflow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow}
 */
proto.api.v1alpha1.integrations.PortalSegment.prototype.addWorkflowChoices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.integrations.PortalWorkflow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalSegment} returns this
 */
proto.api.v1alpha1.integrations.PortalSegment.prototype.clearWorkflowChoicesList = function() {
  return this.setWorkflowChoicesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.integrations.PortalWorkflow.repeatedFields_ = [2,4,9,10];



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
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PortalWorkflow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PortalWorkflow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalWorkflow.toObject = function(includeInstance, msg) {
  var f, obj = {
actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.api.v1alpha1.integrations.Action.toObject, includeInstance),
template: (f = msg.getTemplate()) && proto.api.v1alpha1.integrations.Template.toObject(includeInstance, f),
formFieldsList: jspb.Message.toObjectList(msg.getFormFieldsList(),
    api_commons_integrations_integrations_pb.FieldDefinition.toObject, includeInstance),
headerText: jspb.Message.getFieldWithDefault(msg, 6, ""),
footerText: jspb.Message.getFieldWithDefault(msg, 7, ""),
demoMode: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
demoFailConditionsList: jspb.Message.toObjectList(msg.getDemoFailConditionsList(),
    proto.api.v1alpha1.integrations.Condition.toObject, includeInstance),
demoPassConditionsList: jspb.Message.toObjectList(msg.getDemoPassConditionsList(),
    proto.api.v1alpha1.integrations.Condition.toObject, includeInstance),
demoResultsMap: (f = msg.getDemoResultsMap()) ? f.toObject(includeInstance, undefined) : [],
workflowDefinitionName: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PortalWorkflow;
  return proto.api.v1alpha1.integrations.PortalWorkflow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PortalWorkflow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.api.v1alpha1.integrations.Action;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 3:
      var value = new proto.api.v1alpha1.integrations.Template;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Template.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 4:
      var value = new api_commons_integrations_integrations_pb.FieldDefinition;
      reader.readMessage(value,api_commons_integrations_integrations_pb.FieldDefinition.deserializeBinaryFromReader);
      msg.addFormFields(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeaderText(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFooterText(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDemoMode(value);
      break;
    case 9:
      var value = new proto.api.v1alpha1.integrations.Condition;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Condition.deserializeBinaryFromReader);
      msg.addDemoFailConditions(value);
      break;
    case 10:
      var value = new proto.api.v1alpha1.integrations.Condition;
      reader.readMessage(value,proto.api.v1alpha1.integrations.Condition.deserializeBinaryFromReader);
      msg.addDemoPassConditions(value);
      break;
    case 11:
      var value = msg.getDemoResultsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowDefinitionName(value);
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
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PortalWorkflow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PortalWorkflow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PortalWorkflow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v1alpha1.integrations.Action.serializeBinaryToWriter
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1alpha1.integrations.Template.serializeBinaryToWriter
    );
  }
  f = message.getFormFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      api_commons_integrations_integrations_pb.FieldDefinition.serializeBinaryToWriter
    );
  }
  f = message.getHeaderText();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFooterText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDemoMode();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getDemoFailConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.api.v1alpha1.integrations.Condition.serializeBinaryToWriter
    );
  }
  f = message.getDemoPassConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.api.v1alpha1.integrations.Condition.serializeBinaryToWriter
    );
  }
  f = message.getDemoResultsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getWorkflowDefinitionName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * repeated Action actions = 2;
 * @return {!Array<!proto.api.v1alpha1.integrations.Action>}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Action, 2));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Action>} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
*/
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Action}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v1alpha1.integrations.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional Template template = 3;
 * @return {?proto.api.v1alpha1.integrations.Template}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getTemplate = function() {
  return /** @type{?proto.api.v1alpha1.integrations.Template} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.integrations.Template, 3));
};


/**
 * @param {?proto.api.v1alpha1.integrations.Template|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
*/
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated api.commons.integrations.FieldDefinition form_fields = 4;
 * @return {!Array<!proto.api.commons.integrations.FieldDefinition>}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getFormFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.integrations.FieldDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_integrations_integrations_pb.FieldDefinition, 4));
};


/**
 * @param {!Array<!proto.api.commons.integrations.FieldDefinition>} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
*/
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setFormFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.commons.integrations.FieldDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.integrations.FieldDefinition}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.addFormFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.commons.integrations.FieldDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.clearFormFieldsList = function() {
  return this.setFormFieldsList([]);
};


/**
 * optional string header_text = 6;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getHeaderText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setHeaderText = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string footer_text = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getFooterText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setFooterText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool demo_mode = 8;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getDemoMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setDemoMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated Condition demo_fail_conditions = 9;
 * @return {!Array<!proto.api.v1alpha1.integrations.Condition>}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getDemoFailConditionsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Condition, 9));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Condition>} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
*/
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setDemoFailConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Condition}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.addDemoFailConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.v1alpha1.integrations.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.clearDemoFailConditionsList = function() {
  return this.setDemoFailConditionsList([]);
};


/**
 * repeated Condition demo_pass_conditions = 10;
 * @return {!Array<!proto.api.v1alpha1.integrations.Condition>}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getDemoPassConditionsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.integrations.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.integrations.Condition, 10));
};


/**
 * @param {!Array<!proto.api.v1alpha1.integrations.Condition>} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
*/
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setDemoPassConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.api.v1alpha1.integrations.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.integrations.Condition}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.addDemoPassConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.api.v1alpha1.integrations.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.clearDemoPassConditionsList = function() {
  return this.setDemoPassConditionsList([]);
};


/**
 * map<string, string> demo_results = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getDemoResultsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.clearDemoResultsMap = function() {
  this.getDemoResultsMap().clear();
  return this;
};


/**
 * optional string workflow_definition_name = 12;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.getWorkflowDefinitionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PortalWorkflow} returns this
 */
proto.api.v1alpha1.integrations.PortalWorkflow.prototype.setWorkflowDefinitionName = function(value) {
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
proto.api.v1alpha1.integrations.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
pluginInstanceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
restructureBeforeMap: (f = msg.getRestructureBeforeMap()) ? f.toObject(includeInstance, undefined) : [],
restructureAfterMap: (f = msg.getRestructureAfterMap()) ? f.toObject(includeInstance, undefined) : [],
actionDefinitionName: jspb.Message.getFieldWithDefault(msg, 7, ""),
optsMap: (f = msg.getOptsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.api.v1alpha1.integrations.Action}
 */
proto.api.v1alpha1.integrations.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Action;
  return proto.api.v1alpha1.integrations.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Action}
 */
proto.api.v1alpha1.integrations.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginInstanceId(value);
      break;
    case 5:
      var value = msg.getRestructureBeforeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = msg.getRestructureAfterMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionDefinitionName(value);
      break;
    case 8:
      var value = msg.getOptsMap();
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
proto.api.v1alpha1.integrations.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPluginInstanceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRestructureBeforeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getRestructureAfterMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getActionDefinitionName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOptsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string plugin_instance_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Action.prototype.getPluginInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Action} returns this
 */
proto.api.v1alpha1.integrations.Action.prototype.setPluginInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> restructure_before = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.Action.prototype.getRestructureBeforeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.Action} returns this
 */
proto.api.v1alpha1.integrations.Action.prototype.clearRestructureBeforeMap = function() {
  this.getRestructureBeforeMap().clear();
  return this;
};


/**
 * map<string, string> restructure_after = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.Action.prototype.getRestructureAfterMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.Action} returns this
 */
proto.api.v1alpha1.integrations.Action.prototype.clearRestructureAfterMap = function() {
  this.getRestructureAfterMap().clear();
  return this;
};


/**
 * optional string action_definition_name = 7;
 * @return {string}
 */
proto.api.v1alpha1.integrations.Action.prototype.getActionDefinitionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.Action} returns this
 */
proto.api.v1alpha1.integrations.Action.prototype.setActionDefinitionName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * map<string, string> opts = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v1alpha1.integrations.Action.prototype.getOptsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.Action} returns this
 */
proto.api.v1alpha1.integrations.Action.prototype.clearOptsMap = function() {
  this.getOptsMap().clear();
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
proto.api.v1alpha1.integrations.Template.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.v1alpha1.integrations.Template.ValCase = {
  VAL_NOT_SET: 0,
  INVOICE_TEMPLATE: 1,
  RECEIPT_TEMPLATE: 2
};

/**
 * @return {proto.api.v1alpha1.integrations.Template.ValCase}
 */
proto.api.v1alpha1.integrations.Template.prototype.getValCase = function() {
  return /** @type {proto.api.v1alpha1.integrations.Template.ValCase} */(jspb.Message.computeOneofCase(this, proto.api.v1alpha1.integrations.Template.oneofGroups_[0]));
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
proto.api.v1alpha1.integrations.Template.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.Template.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.Template} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Template.toObject = function(includeInstance, msg) {
  var f, obj = {
invoiceTemplate: (f = msg.getInvoiceTemplate()) && api_commons_integrations_integrations_pb.Invoices.toObject(includeInstance, f),
receiptTemplate: (f = msg.getReceiptTemplate()) && api_commons_integrations_integrations_pb.Receipt.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.Template}
 */
proto.api.v1alpha1.integrations.Template.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.Template;
  return proto.api.v1alpha1.integrations.Template.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.Template} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.Template}
 */
proto.api.v1alpha1.integrations.Template.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_integrations_integrations_pb.Invoices;
      reader.readMessage(value,api_commons_integrations_integrations_pb.Invoices.deserializeBinaryFromReader);
      msg.setInvoiceTemplate(value);
      break;
    case 2:
      var value = new api_commons_integrations_integrations_pb.Receipt;
      reader.readMessage(value,api_commons_integrations_integrations_pb.Receipt.deserializeBinaryFromReader);
      msg.setReceiptTemplate(value);
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
proto.api.v1alpha1.integrations.Template.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.Template.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.Template} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.Template.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoiceTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_integrations_integrations_pb.Invoices.serializeBinaryToWriter
    );
  }
  f = message.getReceiptTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_integrations_integrations_pb.Receipt.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.integrations.Invoices invoice_template = 1;
 * @return {?proto.api.commons.integrations.Invoices}
 */
proto.api.v1alpha1.integrations.Template.prototype.getInvoiceTemplate = function() {
  return /** @type{?proto.api.commons.integrations.Invoices} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.Invoices, 1));
};


/**
 * @param {?proto.api.commons.integrations.Invoices|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Template} returns this
*/
proto.api.v1alpha1.integrations.Template.prototype.setInvoiceTemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.v1alpha1.integrations.Template.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Template} returns this
 */
proto.api.v1alpha1.integrations.Template.prototype.clearInvoiceTemplate = function() {
  return this.setInvoiceTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Template.prototype.hasInvoiceTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional api.commons.integrations.Receipt receipt_template = 2;
 * @return {?proto.api.commons.integrations.Receipt}
 */
proto.api.v1alpha1.integrations.Template.prototype.getReceiptTemplate = function() {
  return /** @type{?proto.api.commons.integrations.Receipt} */ (
    jspb.Message.getWrapperField(this, api_commons_integrations_integrations_pb.Receipt, 2));
};


/**
 * @param {?proto.api.commons.integrations.Receipt|undefined} value
 * @return {!proto.api.v1alpha1.integrations.Template} returns this
*/
proto.api.v1alpha1.integrations.Template.prototype.setReceiptTemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.v1alpha1.integrations.Template.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.Template} returns this
 */
proto.api.v1alpha1.integrations.Template.prototype.clearReceiptTemplate = function() {
  return this.setReceiptTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.Template.prototype.hasReceiptTemplate = function() {
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
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
clientSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
agentSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
callSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
callType: jspb.Message.getFieldWithDefault(msg, 4, 0),
scheduledCallbackId: jspb.Message.getFieldWithDefault(msg, 5, ""),
integrationLink: (f = msg.getIntegrationLink()) && api_commons_org_huntgroup_pb.IntegrationLink.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq;
  return proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClientSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheduledCallbackId(value);
      break;
    case 6:
      var value = new api_commons_org_huntgroup_pb.IntegrationLink;
      reader.readMessage(value,api_commons_org_huntgroup_pb.IntegrationLink.deserializeBinaryFromReader);
      msg.setIntegrationLink(value);
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
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAgentSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getScheduledCallbackId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIntegrationLink();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_org_huntgroup_pb.IntegrationLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 client_sid = 1;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.getClientSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} returns this
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.setClientSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 agent_sid = 2;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} returns this
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 call_sid = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} returns this
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 4;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} returns this
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string scheduled_callback_id = 5;
 * @return {string}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.getScheduledCallbackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} returns this
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.setScheduledCallbackId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional api.commons.org.IntegrationLink integration_link = 6;
 * @return {?proto.api.commons.org.IntegrationLink}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.getIntegrationLink = function() {
  return /** @type{?proto.api.commons.org.IntegrationLink} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.IntegrationLink, 6));
};


/**
 * @param {?proto.api.commons.org.IntegrationLink|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} returns this
*/
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.setIntegrationLink = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq} returns this
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.clearIntegrationLink = function() {
  return this.setIntegrationLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkReq.prototype.hasIntegrationLink = function() {
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
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationLink: (f = msg.getIntegrationLink()) && api_commons_org_huntgroup_pb.IntegrationLink.toObject(includeInstance, f)
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
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes;
  return proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_huntgroup_pb.IntegrationLink;
      reader.readMessage(value,api_commons_org_huntgroup_pb.IntegrationLink.deserializeBinaryFromReader);
      msg.setIntegrationLink(value);
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
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationLink();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_huntgroup_pb.IntegrationLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.IntegrationLink integration_link = 1;
 * @return {?proto.api.commons.org.IntegrationLink}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.prototype.getIntegrationLink = function() {
  return /** @type{?proto.api.commons.org.IntegrationLink} */ (
    jspb.Message.getWrapperField(this, api_commons_org_huntgroup_pb.IntegrationLink, 1));
};


/**
 * @param {?proto.api.commons.org.IntegrationLink|undefined} value
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes} returns this
*/
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.prototype.setIntegrationLink = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes} returns this
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.prototype.clearIntegrationLink = function() {
  return this.setIntegrationLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.PopulateIntegrationLinkRes.prototype.hasIntegrationLink = function() {
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
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ProcessWorkflowReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.toObject = function(includeInstance, msg) {
  var f, obj = {
portalLinkId: jspb.Message.getFieldWithDefault(msg, 1, ""),
portalId: jspb.Message.getFieldWithDefault(msg, 2, ""),
segment: jspb.Message.getFieldWithDefault(msg, 3, 0),
choice: jspb.Message.getFieldWithDefault(msg, 4, 0),
paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : [],
callSid: jspb.Message.getFieldWithDefault(msg, 6, 0),
callType: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ProcessWorkflowReq;
  return proto.api.v1alpha1.integrations.ProcessWorkflowReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
         });
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallSid(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setCallType(value);
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
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ProcessWorkflowReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
  f = message.getCallSid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCallType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string portal_link_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.getPortalLinkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.setPortalLinkId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string portal_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.getPortalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.setPortalId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 segment = 3;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.getSegment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.setSegment = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 choice = 4;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.getChoice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.setChoice = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * map<string, Value> params = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;
};


/**
 * optional int64 call_sid = 6;
 * @return {number}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.getCallSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.setCallSid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional api.commons.CallType.Enum call_type = 7;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.getCallType = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowReq} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowReq.prototype.setCallType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
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
proto.api.v1alpha1.integrations.ProcessWorkflowRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.integrations.ProcessWorkflowRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.integrations.ProcessWorkflowRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProcessWorkflowRes.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, proto.api.v1alpha1.integrations.Value.toObject) : []
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
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowRes}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.integrations.ProcessWorkflowRes;
  return proto.api.v1alpha1.integrations.ProcessWorkflowRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.integrations.ProcessWorkflowRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowRes}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowRes.deserializeBinaryFromReader = function(msg, reader) {
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
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.v1alpha1.integrations.Value.deserializeBinaryFromReader, "", new proto.api.v1alpha1.integrations.Value());
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
proto.api.v1alpha1.integrations.ProcessWorkflowRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.integrations.ProcessWorkflowRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.integrations.ProcessWorkflowRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.integrations.ProcessWorkflowRes.serializeBinaryToWriter = function(message, writer) {
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
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.v1alpha1.integrations.Value.serializeBinaryToWriter);
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowRes} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * map<string, Value> data = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>}
 */
proto.api.v1alpha1.integrations.ProcessWorkflowRes.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.v1alpha1.integrations.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api.v1alpha1.integrations.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v1alpha1.integrations.ProcessWorkflowRes} returns this
 */
proto.api.v1alpha1.integrations.ProcessWorkflowRes.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;
};


goog.object.extend(exports, proto.api.v1alpha1.integrations);
