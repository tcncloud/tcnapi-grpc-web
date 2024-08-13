// source: api/commons/org/huntgroup.proto
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

var api_commons_country_pb = require('../../../api/commons/country_pb.js');
goog.object.extend(proto, api_commons_country_pb);
var api_commons_org_pb = require('../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.commons.org.Act', null, global);
goog.exportSymbol('proto.api.commons.org.AgentResponseAutoRuleSet', null, global);
goog.exportSymbol('proto.api.commons.org.AgentResponseComparitors', null, global);
goog.exportSymbol('proto.api.commons.org.AgentStatus', null, global);
goog.exportSymbol('proto.api.commons.org.AgentStatusOption', null, global);
goog.exportSymbol('proto.api.commons.org.AgentTrigger', null, global);
goog.exportSymbol('proto.api.commons.org.AutoResponseChoice', null, global);
goog.exportSymbol('proto.api.commons.org.CallbackSettings', null, global);
goog.exportSymbol('proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed', null, global);
goog.exportSymbol('proto.api.commons.org.CallbackSettings.DefaultRouting', null, global);
goog.exportSymbol('proto.api.commons.org.CallerIdBucketData', null, global);
goog.exportSymbol('proto.api.commons.org.ClientInfoDisplayTemplate', null, global);
goog.exportSymbol('proto.api.commons.org.CommunicationSettings', null, global);
goog.exportSymbol('proto.api.commons.org.CommunicationSettings.AutomateResponseRules', null, global);
goog.exportSymbol('proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData', null, global);
goog.exportSymbol('proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField', null, global);
goog.exportSymbol('proto.api.commons.org.CommunicationSettings.ScrubListExpiration', null, global);
goog.exportSymbol('proto.api.commons.org.CompareExpressionList', null, global);
goog.exportSymbol('proto.api.commons.org.CompareOperatorType', null, global);
goog.exportSymbol('proto.api.commons.org.ComplexBooleanExpression', null, global);
goog.exportSymbol('proto.api.commons.org.ComplexBooleanExpressionList', null, global);
goog.exportSymbol('proto.api.commons.org.ConditionalNavigation', null, global);
goog.exportSymbol('proto.api.commons.org.ContactFieldStyle', null, global);
goog.exportSymbol('proto.api.commons.org.DataDipConfig', null, global);
goog.exportSymbol('proto.api.commons.org.DataDipConfig.Header', null, global);
goog.exportSymbol('proto.api.commons.org.DataDipConfig.Param', null, global);
goog.exportSymbol('proto.api.commons.org.DataDipConfig.ParamTypeValueTuple', null, global);
goog.exportSymbol('proto.api.commons.org.DataDipConfig.ReturnData', null, global);
goog.exportSymbol('proto.api.commons.org.DialedNumberFieldStyle', null, global);
goog.exportSymbol('proto.api.commons.org.Disposition', null, global);
goog.exportSymbol('proto.api.commons.org.FieldStyle', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.AlphanumericKeypad', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.DataDipDataDisplay', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.DisallowedHuntGroups', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.HoldQueueMonitoring', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.InboundComplianceMetadata', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.IntegrationDataDisplay', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.JourneyDataDisplay', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.PauseOptionSet', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay', null, global);
goog.exportSymbol('proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupDetails', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupDetails.GeneralDetails', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupDetails.ScriptDetails', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupDetails.TriggerDetails', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupDetails.WebLinkDetails', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupScript', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupSettings', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupType', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupWithClientInfoTemplateData', null, global);
goog.exportSymbol('proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup', null, global);
goog.exportSymbol('proto.api.commons.org.IntegrationLink', null, global);
goog.exportSymbol('proto.api.commons.org.IntegrationLinkParameter', null, global);
goog.exportSymbol('proto.api.commons.org.IntegrationLinkSubParameter', null, global);
goog.exportSymbol('proto.api.commons.org.IntegrationLinkSubParameterPart', null, global);
goog.exportSymbol('proto.api.commons.org.ManualDialSettings', null, global);
goog.exportSymbol('proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping', null, global);
goog.exportSymbol('proto.api.commons.org.ManualDialSettings.DefaultCallerId', null, global);
goog.exportSymbol('proto.api.commons.org.ManualDialSettings.ScrubOverride', null, global);
goog.exportSymbol('proto.api.commons.org.NaturalLanguageComplianceMetadata', null, global);
goog.exportSymbol('proto.api.commons.org.NaturalLanguageComplianceScrub', null, global);
goog.exportSymbol('proto.api.commons.org.NumberHistorySettings', null, global);
goog.exportSymbol('proto.api.commons.org.ParameterSourceType', null, global);
goog.exportSymbol('proto.api.commons.org.PreviewDialSettings', null, global);
goog.exportSymbol('proto.api.commons.org.ResponseEvaluator', null, global);
goog.exportSymbol('proto.api.commons.org.ScriptCategory', null, global);
goog.exportSymbol('proto.api.commons.org.ScriptResponseType', null, global);
goog.exportSymbol('proto.api.commons.org.SimpleCompareExpression', null, global);
goog.exportSymbol('proto.api.commons.org.SystemPauseCode', null, global);
goog.exportSymbol('proto.api.commons.org.TemplateCategory', null, global);
goog.exportSymbol('proto.api.commons.org.TransferCallSettings', null, global);
goog.exportSymbol('proto.api.commons.org.TransferCallSettings.DefaultCallerId', null, global);
goog.exportSymbol('proto.api.commons.org.TransferCallSettings.HandOffTypes', null, global);
goog.exportSymbol('proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed', null, global);
goog.exportSymbol('proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration', null, global);
goog.exportSymbol('proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed', null, global);
goog.exportSymbol('proto.api.commons.org.TransferCallSettings.TransferTypes', null, global);
goog.exportSymbol('proto.api.commons.org.TriggerAction', null, global);
goog.exportSymbol('proto.api.commons.org.TriggerActionOption', null, global);
goog.exportSymbol('proto.api.commons.org.TriggerCallTypes', null, global);
goog.exportSymbol('proto.api.commons.org.TriggerPauseCode', null, global);
goog.exportSymbol('proto.api.commons.org.TriggerPauseCode.PauseCodeCase', null, global);
goog.exportSymbol('proto.api.commons.org.Verbiage', null, global);
goog.exportSymbol('proto.api.commons.org.WebLink', null, global);
goog.exportSymbol('proto.api.commons.org.WebLinkComponent', null, global);
goog.exportSymbol('proto.api.commons.org.WebLinkComponentKeyType', null, global);
goog.exportSymbol('proto.api.commons.org.WebLinkParameter', null, global);
goog.exportSymbol('proto.api.commons.org.WebLinkType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupSettings.displayName = 'proto.api.commons.org.HuntGroupSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.api.commons.org.GeneralSettings.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.displayName = 'proto.api.commons.org.GeneralSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.PauseOptionSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.PauseOptionSet.displayName = 'proto.api.commons.org.GeneralSettings.PauseOptionSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.HoldQueueMonitoring, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.displayName = 'proto.api.commons.org.GeneralSettings.HoldQueueMonitoring';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.GeneralSettings.DataDipDataDisplay.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.DataDipDataDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.DataDipDataDisplay.displayName = 'proto.api.commons.org.GeneralSettings.DataDipDataDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.IntegrationDataDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.displayName = 'proto.api.commons.org.GeneralSettings.IntegrationDataDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.GeneralSettings.JourneyDataDisplay.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.JourneyDataDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.JourneyDataDisplay.displayName = 'proto.api.commons.org.GeneralSettings.JourneyDataDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.displayName = 'proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.displayName = 'proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.DisallowedHuntGroups, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.displayName = 'proto.api.commons.org.GeneralSettings.DisallowedHuntGroups';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.AlphanumericKeypad, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.AlphanumericKeypad.displayName = 'proto.api.commons.org.GeneralSettings.AlphanumericKeypad';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.InboundComplianceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.displayName = 'proto.api.commons.org.GeneralSettings.InboundComplianceMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.displayName = 'proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.HuntGroupDetails.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.HuntGroupDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupDetails.displayName = 'proto.api.commons.org.HuntGroupDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupDetails.GeneralDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupDetails.GeneralDetails.displayName = 'proto.api.commons.org.HuntGroupDetails.GeneralDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.displayName = 'proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupDetails.WebLinkDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupDetails.WebLinkDetails.displayName = 'proto.api.commons.org.HuntGroupDetails.WebLinkDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupDetails.TriggerDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupDetails.TriggerDetails.displayName = 'proto.api.commons.org.HuntGroupDetails.TriggerDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.displayName = 'proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupDetails.ScriptDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupDetails.ScriptDetails.displayName = 'proto.api.commons.org.HuntGroupDetails.ScriptDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CommunicationSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.CommunicationSettings.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.CommunicationSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CommunicationSettings.displayName = 'proto.api.commons.org.CommunicationSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.CommunicationSettings.ScrubListExpiration.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.CommunicationSettings.ScrubListExpiration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CommunicationSettings.ScrubListExpiration.displayName = 'proto.api.commons.org.CommunicationSettings.ScrubListExpiration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.CommunicationSettings.AutomateResponseRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CommunicationSettings.AutomateResponseRules.displayName = 'proto.api.commons.org.CommunicationSettings.AutomateResponseRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.displayName = 'proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.displayName = 'proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CallbackSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.CallbackSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CallbackSettings.displayName = 'proto.api.commons.org.CallbackSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CallbackSettings.DefaultRouting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.CallbackSettings.DefaultRouting.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.CallbackSettings.DefaultRouting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CallbackSettings.DefaultRouting.displayName = 'proto.api.commons.org.CallbackSettings.DefaultRouting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.displayName = 'proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.PreviewDialSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.PreviewDialSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.PreviewDialSettings.displayName = 'proto.api.commons.org.PreviewDialSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ManualDialSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.ManualDialSettings.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.ManualDialSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ManualDialSettings.displayName = 'proto.api.commons.org.ManualDialSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ManualDialSettings.ScrubOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ManualDialSettings.ScrubOverride.displayName = 'proto.api.commons.org.ManualDialSettings.ScrubOverride';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ManualDialSettings.DefaultCallerId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ManualDialSettings.DefaultCallerId.displayName = 'proto.api.commons.org.ManualDialSettings.DefaultCallerId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.displayName = 'proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.NaturalLanguageComplianceScrub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.NaturalLanguageComplianceScrub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.NaturalLanguageComplianceScrub.displayName = 'proto.api.commons.org.NaturalLanguageComplianceScrub';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.NaturalLanguageComplianceMetadata.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.NaturalLanguageComplianceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.NaturalLanguageComplianceMetadata.displayName = 'proto.api.commons.org.NaturalLanguageComplianceMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CallerIdBucketData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.CallerIdBucketData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CallerIdBucketData.displayName = 'proto.api.commons.org.CallerIdBucketData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TransferCallSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.TransferCallSettings.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.TransferCallSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TransferCallSettings.displayName = 'proto.api.commons.org.TransferCallSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.TransferCallSettings.HandOffTypes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TransferCallSettings.HandOffTypes.displayName = 'proto.api.commons.org.TransferCallSettings.HandOffTypes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TransferCallSettings.TransferTypes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.TransferCallSettings.TransferTypes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TransferCallSettings.TransferTypes.displayName = 'proto.api.commons.org.TransferCallSettings.TransferTypes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.displayName = 'proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.displayName = 'proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.displayName = 'proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.TransferCallSettings.DefaultCallerId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TransferCallSettings.DefaultCallerId.displayName = 'proto.api.commons.org.TransferCallSettings.DefaultCallerId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.NumberHistorySettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.NumberHistorySettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.NumberHistorySettings.displayName = 'proto.api.commons.org.NumberHistorySettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.AgentResponseAutoRuleSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.AgentResponseAutoRuleSet.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.AgentResponseAutoRuleSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AgentResponseAutoRuleSet.displayName = 'proto.api.commons.org.AgentResponseAutoRuleSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.AutoResponseChoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.AutoResponseChoice.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.AutoResponseChoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AutoResponseChoice.displayName = 'proto.api.commons.org.AutoResponseChoice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.AgentResponseComparitors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.AgentResponseComparitors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AgentResponseComparitors.displayName = 'proto.api.commons.org.AgentResponseComparitors';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ClientInfoDisplayTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.ClientInfoDisplayTemplate.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.ClientInfoDisplayTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ClientInfoDisplayTemplate.displayName = 'proto.api.commons.org.ClientInfoDisplayTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.FieldStyle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.FieldStyle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.FieldStyle.displayName = 'proto.api.commons.org.FieldStyle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ContactFieldStyle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ContactFieldStyle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ContactFieldStyle.displayName = 'proto.api.commons.org.ContactFieldStyle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.DialedNumberFieldStyle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.DialedNumberFieldStyle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DialedNumberFieldStyle.displayName = 'proto.api.commons.org.DialedNumberFieldStyle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupWithClientInfoTemplateData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupWithClientInfoTemplateData.displayName = 'proto.api.commons.org.HuntGroupWithClientInfoTemplateData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.displayName = 'proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.WebLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.WebLink.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.WebLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.WebLink.displayName = 'proto.api.commons.org.WebLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.WebLinkComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.WebLinkComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.WebLinkComponent.displayName = 'proto.api.commons.org.WebLinkComponent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.WebLinkParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.WebLinkParameter.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.WebLinkParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.WebLinkParameter.displayName = 'proto.api.commons.org.WebLinkParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.DataDipConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.DataDipConfig.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.DataDipConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DataDipConfig.displayName = 'proto.api.commons.org.DataDipConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.DataDipConfig.Param = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.DataDipConfig.Param.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.DataDipConfig.Param, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DataDipConfig.Param.displayName = 'proto.api.commons.org.DataDipConfig.Param';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.DataDipConfig.ParamTypeValueTuple, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.displayName = 'proto.api.commons.org.DataDipConfig.ParamTypeValueTuple';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.DataDipConfig.ReturnData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.DataDipConfig.ReturnData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DataDipConfig.ReturnData.displayName = 'proto.api.commons.org.DataDipConfig.ReturnData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.DataDipConfig.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.DataDipConfig.Header.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.DataDipConfig.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.DataDipConfig.Header.displayName = 'proto.api.commons.org.DataDipConfig.Header';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.IntegrationLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.IntegrationLink.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.IntegrationLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.IntegrationLink.displayName = 'proto.api.commons.org.IntegrationLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.IntegrationLinkParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.IntegrationLinkParameter.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.IntegrationLinkParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.IntegrationLinkParameter.displayName = 'proto.api.commons.org.IntegrationLinkParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.IntegrationLinkSubParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.IntegrationLinkSubParameter.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.IntegrationLinkSubParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.IntegrationLinkSubParameter.displayName = 'proto.api.commons.org.IntegrationLinkSubParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.IntegrationLinkSubParameterPart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.IntegrationLinkSubParameterPart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.IntegrationLinkSubParameterPart.displayName = 'proto.api.commons.org.IntegrationLinkSubParameterPart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.AgentTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.AgentTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AgentTrigger.displayName = 'proto.api.commons.org.AgentTrigger';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.AgentStatusOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.AgentStatusOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.AgentStatusOption.displayName = 'proto.api.commons.org.AgentStatusOption';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TriggerPauseCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.org.TriggerPauseCode.oneofGroups_);
};
goog.inherits(proto.api.commons.org.TriggerPauseCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TriggerPauseCode.displayName = 'proto.api.commons.org.TriggerPauseCode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TriggerCallTypes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.TriggerCallTypes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TriggerCallTypes.displayName = 'proto.api.commons.org.TriggerCallTypes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.TriggerActionOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.TriggerActionOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.TriggerActionOption.displayName = 'proto.api.commons.org.TriggerActionOption';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.HuntGroupScript = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.HuntGroupScript.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.HuntGroupScript, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.HuntGroupScript.displayName = 'proto.api.commons.org.HuntGroupScript';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.Act = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.Act.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.Act, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.Act.displayName = 'proto.api.commons.org.Act';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.Disposition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.Disposition.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.Disposition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.Disposition.displayName = 'proto.api.commons.org.Disposition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.Verbiage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.Verbiage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.Verbiage.displayName = 'proto.api.commons.org.Verbiage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ConditionalNavigation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ConditionalNavigation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ConditionalNavigation.displayName = 'proto.api.commons.org.ConditionalNavigation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ComplexBooleanExpressionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.ComplexBooleanExpressionList.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.ComplexBooleanExpressionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ComplexBooleanExpressionList.displayName = 'proto.api.commons.org.ComplexBooleanExpressionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ComplexBooleanExpression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ComplexBooleanExpression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ComplexBooleanExpression.displayName = 'proto.api.commons.org.ComplexBooleanExpression';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.CompareExpressionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.org.CompareExpressionList.repeatedFields_, null);
};
goog.inherits(proto.api.commons.org.CompareExpressionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.CompareExpressionList.displayName = 'proto.api.commons.org.CompareExpressionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.SimpleCompareExpression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.SimpleCompareExpression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.SimpleCompareExpression.displayName = 'proto.api.commons.org.SimpleCompareExpression';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.org.ResponseEvaluator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.org.ResponseEvaluator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.org.ResponseEvaluator.displayName = 'proto.api.commons.org.ResponseEvaluator';
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
proto.api.commons.org.HuntGroupSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
generalSettings: (f = msg.getGeneralSettings()) && proto.api.commons.org.GeneralSettings.toObject(includeInstance, f),
communicationSettings: (f = msg.getCommunicationSettings()) && proto.api.commons.org.CommunicationSettings.toObject(includeInstance, f),
callbackSettings: (f = msg.getCallbackSettings()) && proto.api.commons.org.CallbackSettings.toObject(includeInstance, f),
previewDialSettings: (f = msg.getPreviewDialSettings()) && proto.api.commons.org.PreviewDialSettings.toObject(includeInstance, f),
manualDialSettings: (f = msg.getManualDialSettings()) && proto.api.commons.org.ManualDialSettings.toObject(includeInstance, f),
transferCallSettings: (f = msg.getTransferCallSettings()) && proto.api.commons.org.TransferCallSettings.toObject(includeInstance, f),
numberHistorySettings: (f = msg.getNumberHistorySettings()) && proto.api.commons.org.NumberHistorySettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupSettings}
 */
proto.api.commons.org.HuntGroupSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupSettings;
  return proto.api.commons.org.HuntGroupSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupSettings}
 */
proto.api.commons.org.HuntGroupSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.GeneralSettings;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.deserializeBinaryFromReader);
      msg.setGeneralSettings(value);
      break;
    case 2:
      var value = new proto.api.commons.org.CommunicationSettings;
      reader.readMessage(value,proto.api.commons.org.CommunicationSettings.deserializeBinaryFromReader);
      msg.setCommunicationSettings(value);
      break;
    case 3:
      var value = new proto.api.commons.org.CallbackSettings;
      reader.readMessage(value,proto.api.commons.org.CallbackSettings.deserializeBinaryFromReader);
      msg.setCallbackSettings(value);
      break;
    case 4:
      var value = new proto.api.commons.org.PreviewDialSettings;
      reader.readMessage(value,proto.api.commons.org.PreviewDialSettings.deserializeBinaryFromReader);
      msg.setPreviewDialSettings(value);
      break;
    case 5:
      var value = new proto.api.commons.org.ManualDialSettings;
      reader.readMessage(value,proto.api.commons.org.ManualDialSettings.deserializeBinaryFromReader);
      msg.setManualDialSettings(value);
      break;
    case 6:
      var value = new proto.api.commons.org.TransferCallSettings;
      reader.readMessage(value,proto.api.commons.org.TransferCallSettings.deserializeBinaryFromReader);
      msg.setTransferCallSettings(value);
      break;
    case 7:
      var value = new proto.api.commons.org.NumberHistorySettings;
      reader.readMessage(value,proto.api.commons.org.NumberHistorySettings.deserializeBinaryFromReader);
      msg.setNumberHistorySettings(value);
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
proto.api.commons.org.HuntGroupSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneralSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.GeneralSettings.serializeBinaryToWriter
    );
  }
  f = message.getCommunicationSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.CommunicationSettings.serializeBinaryToWriter
    );
  }
  f = message.getCallbackSettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.org.CallbackSettings.serializeBinaryToWriter
    );
  }
  f = message.getPreviewDialSettings();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.org.PreviewDialSettings.serializeBinaryToWriter
    );
  }
  f = message.getManualDialSettings();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.org.ManualDialSettings.serializeBinaryToWriter
    );
  }
  f = message.getTransferCallSettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.commons.org.TransferCallSettings.serializeBinaryToWriter
    );
  }
  f = message.getNumberHistorySettings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.commons.org.NumberHistorySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional GeneralSettings general_settings = 1;
 * @return {?proto.api.commons.org.GeneralSettings}
 */
proto.api.commons.org.HuntGroupSettings.prototype.getGeneralSettings = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings, 1));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings|undefined} value
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
*/
proto.api.commons.org.HuntGroupSettings.prototype.setGeneralSettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
 */
proto.api.commons.org.HuntGroupSettings.prototype.clearGeneralSettings = function() {
  return this.setGeneralSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupSettings.prototype.hasGeneralSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommunicationSettings communication_settings = 2;
 * @return {?proto.api.commons.org.CommunicationSettings}
 */
proto.api.commons.org.HuntGroupSettings.prototype.getCommunicationSettings = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CommunicationSettings, 2));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings|undefined} value
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
*/
proto.api.commons.org.HuntGroupSettings.prototype.setCommunicationSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
 */
proto.api.commons.org.HuntGroupSettings.prototype.clearCommunicationSettings = function() {
  return this.setCommunicationSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupSettings.prototype.hasCommunicationSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CallbackSettings callback_settings = 3;
 * @return {?proto.api.commons.org.CallbackSettings}
 */
proto.api.commons.org.HuntGroupSettings.prototype.getCallbackSettings = function() {
  return /** @type{?proto.api.commons.org.CallbackSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CallbackSettings, 3));
};


/**
 * @param {?proto.api.commons.org.CallbackSettings|undefined} value
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
*/
proto.api.commons.org.HuntGroupSettings.prototype.setCallbackSettings = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
 */
proto.api.commons.org.HuntGroupSettings.prototype.clearCallbackSettings = function() {
  return this.setCallbackSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupSettings.prototype.hasCallbackSettings = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PreviewDialSettings preview_dial_settings = 4;
 * @return {?proto.api.commons.org.PreviewDialSettings}
 */
proto.api.commons.org.HuntGroupSettings.prototype.getPreviewDialSettings = function() {
  return /** @type{?proto.api.commons.org.PreviewDialSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.PreviewDialSettings, 4));
};


/**
 * @param {?proto.api.commons.org.PreviewDialSettings|undefined} value
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
*/
proto.api.commons.org.HuntGroupSettings.prototype.setPreviewDialSettings = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
 */
proto.api.commons.org.HuntGroupSettings.prototype.clearPreviewDialSettings = function() {
  return this.setPreviewDialSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupSettings.prototype.hasPreviewDialSettings = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ManualDialSettings manual_dial_settings = 5;
 * @return {?proto.api.commons.org.ManualDialSettings}
 */
proto.api.commons.org.HuntGroupSettings.prototype.getManualDialSettings = function() {
  return /** @type{?proto.api.commons.org.ManualDialSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ManualDialSettings, 5));
};


/**
 * @param {?proto.api.commons.org.ManualDialSettings|undefined} value
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
*/
proto.api.commons.org.HuntGroupSettings.prototype.setManualDialSettings = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
 */
proto.api.commons.org.HuntGroupSettings.prototype.clearManualDialSettings = function() {
  return this.setManualDialSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupSettings.prototype.hasManualDialSettings = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TransferCallSettings transfer_call_settings = 6;
 * @return {?proto.api.commons.org.TransferCallSettings}
 */
proto.api.commons.org.HuntGroupSettings.prototype.getTransferCallSettings = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TransferCallSettings, 6));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings|undefined} value
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
*/
proto.api.commons.org.HuntGroupSettings.prototype.setTransferCallSettings = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
 */
proto.api.commons.org.HuntGroupSettings.prototype.clearTransferCallSettings = function() {
  return this.setTransferCallSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupSettings.prototype.hasTransferCallSettings = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional NumberHistorySettings number_history_settings = 7;
 * @return {?proto.api.commons.org.NumberHistorySettings}
 */
proto.api.commons.org.HuntGroupSettings.prototype.getNumberHistorySettings = function() {
  return /** @type{?proto.api.commons.org.NumberHistorySettings} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.NumberHistorySettings, 7));
};


/**
 * @param {?proto.api.commons.org.NumberHistorySettings|undefined} value
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
*/
proto.api.commons.org.HuntGroupSettings.prototype.setNumberHistorySettings = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupSettings} returns this
 */
proto.api.commons.org.HuntGroupSettings.prototype.clearNumberHistorySettings = function() {
  return this.setNumberHistorySettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupSettings.prototype.hasNumberHistorySettings = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.GeneralSettings.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.GeneralSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enableAgentGatewayTitleBar: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
defaultAgentDialIn: jspb.Message.getFieldWithDefault(msg, 2, ""),
requireEndCallConfirmation: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
enableAuthorizationByIp: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
authorizedIpAddressesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
initialAgentStatus: jspb.Message.getFieldWithDefault(msg, 100, 0),
enableAgentPause: jspb.Message.getBooleanFieldWithDefault(msg, 101, false),
agentPauseOptionSet: (f = msg.getAgentPauseOptionSet()) && proto.api.commons.org.GeneralSettings.PauseOptionSet.toObject(includeInstance, f),
defaultAgentPauseOption: jspb.Message.getFieldWithDefault(msg, 103, ""),
enablePauseOptionReset: jspb.Message.getBooleanFieldWithDefault(msg, 104, false),
displayRecordingIndicator: jspb.Message.getBooleanFieldWithDefault(msg, 200, false),
enableCallRecordingPause: jspb.Message.getBooleanFieldWithDefault(msg, 201, false),
callRecordingPauseConfirmation: jspb.Message.getBooleanFieldWithDefault(msg, 202, false),
callRecordingDelay: jspb.Message.getFieldWithDefault(msg, 203, 0),
enablePauseRecordingOnHold: jspb.Message.getBooleanFieldWithDefault(msg, 204, false),
enableEnvisionScreenRecording: jspb.Message.getBooleanFieldWithDefault(msg, 300, false),
agentScreenRecording: jspb.Message.getBooleanFieldWithDefault(msg, 301, false),
enableAgentSimpleHold: jspb.Message.getBooleanFieldWithDefault(msg, 400, false),
enableAgentMultiAccept: jspb.Message.getBooleanFieldWithDefault(msg, 401, false),
pauseAgentAfterMultiAccept: jspb.Message.getBooleanFieldWithDefault(msg, 402, false),
holdQueueMonitoring: (f = msg.getHoldQueueMonitoring()) && proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.toObject(includeInstance, f),
displayMachineDeliver: jspb.Message.getBooleanFieldWithDefault(msg, 500, false),
displayLinkbackHuntGroup: jspb.Message.getBooleanFieldWithDefault(msg, 501, false),
displaySipHeaderData: jspb.Message.getBooleanFieldWithDefault(msg, 502, false),
displayIvrNavigationKeys: jspb.Message.getBooleanFieldWithDefault(msg, 503, false),
displayDataCollectData: jspb.Message.getBooleanFieldWithDefault(msg, 504, false),
displayDataDippedData: (f = msg.getDisplayDataDippedData()) && proto.api.commons.org.GeneralSettings.DataDipDataDisplay.toObject(includeInstance, f),
integrationDataDisplay: (f = msg.getIntegrationDataDisplay()) && proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.toObject(includeInstance, f),
journeyDataDisplay: (f = msg.getJourneyDataDisplay()) && proto.api.commons.org.GeneralSettings.JourneyDataDisplay.toObject(includeInstance, f),
agentCallHistoryScope: jspb.Message.getFieldWithDefault(msg, 508, 0),
agentLoginGuiStatisticsDisplay: (f = msg.getAgentLoginGuiStatisticsDisplay()) && proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.toObject(includeInstance, f),
phoneZipMetadataDisplay: (f = msg.getPhoneZipMetadataDisplay()) && proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.toObject(includeInstance, f),
displaySkills: jspb.Message.getBooleanFieldWithDefault(msg, 511, false),
displayWebLinks: jspb.Message.getBooleanFieldWithDefault(msg, 512, false),
enableAgentHuntGroupReassignment: jspb.Message.getBooleanFieldWithDefault(msg, 600, false),
disallowedHuntGroups: (f = msg.getDisallowedHuntGroups()) && proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.toObject(includeInstance, f),
enableManualApprovalOfCalls: jspb.Message.getBooleanFieldWithDefault(msg, 700, false),
requireManualApprovalNumber: jspb.Message.getBooleanFieldWithDefault(msg, 701, false),
enableManualApprovalOfSms: jspb.Message.getBooleanFieldWithDefault(msg, 702, false),
requireManualApprovalNumberSms: jspb.Message.getBooleanFieldWithDefault(msg, 703, false),
disableRejectOptionForApprovers: jspb.Message.getBooleanFieldWithDefault(msg, 704, false),
alphanumericKeypad: (f = msg.getAlphanumericKeypad()) && proto.api.commons.org.GeneralSettings.AlphanumericKeypad.toObject(includeInstance, f),
enableCallDesktopNotifications: jspb.Message.getBooleanFieldWithDefault(msg, 801, false),
inboundComplianceMetadata: (f = msg.getInboundComplianceMetadata()) && proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.toObject(includeInstance, f),
enableAgentIntercom: jspb.Message.getBooleanFieldWithDefault(msg, 803, false),
prepareStateCallDelivery: (f = msg.getPrepareStateCallDelivery()) && proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings}
 */
proto.api.commons.org.GeneralSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings;
  return proto.api.commons.org.GeneralSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings}
 */
proto.api.commons.org.GeneralSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAgentGatewayTitleBar(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultAgentDialIn(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireEndCallConfirmation(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAuthorizationByIp(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthorizedIpAddresses(value);
      break;
    case 100:
      var value = /** @type {!proto.api.commons.InitialAgentStatus} */ (reader.readEnum());
      msg.setInitialAgentStatus(value);
      break;
    case 101:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAgentPause(value);
      break;
    case 102:
      var value = new proto.api.commons.org.GeneralSettings.PauseOptionSet;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.PauseOptionSet.deserializeBinaryFromReader);
      msg.setAgentPauseOptionSet(value);
      break;
    case 103:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultAgentPauseOption(value);
      break;
    case 104:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablePauseOptionReset(value);
      break;
    case 200:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayRecordingIndicator(value);
      break;
    case 201:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCallRecordingPause(value);
      break;
    case 202:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCallRecordingPauseConfirmation(value);
      break;
    case 203:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallRecordingDelay(value);
      break;
    case 204:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablePauseRecordingOnHold(value);
      break;
    case 300:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableEnvisionScreenRecording(value);
      break;
    case 301:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgentScreenRecording(value);
      break;
    case 400:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAgentSimpleHold(value);
      break;
    case 401:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAgentMultiAccept(value);
      break;
    case 402:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPauseAgentAfterMultiAccept(value);
      break;
    case 403:
      var value = new proto.api.commons.org.GeneralSettings.HoldQueueMonitoring;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.deserializeBinaryFromReader);
      msg.setHoldQueueMonitoring(value);
      break;
    case 500:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayMachineDeliver(value);
      break;
    case 501:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayLinkbackHuntGroup(value);
      break;
    case 502:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplaySipHeaderData(value);
      break;
    case 503:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayIvrNavigationKeys(value);
      break;
    case 504:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayDataCollectData(value);
      break;
    case 505:
      var value = new proto.api.commons.org.GeneralSettings.DataDipDataDisplay;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.DataDipDataDisplay.deserializeBinaryFromReader);
      msg.setDisplayDataDippedData(value);
      break;
    case 506:
      var value = new proto.api.commons.org.GeneralSettings.IntegrationDataDisplay;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.deserializeBinaryFromReader);
      msg.setIntegrationDataDisplay(value);
      break;
    case 507:
      var value = new proto.api.commons.org.GeneralSettings.JourneyDataDisplay;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.JourneyDataDisplay.deserializeBinaryFromReader);
      msg.setJourneyDataDisplay(value);
      break;
    case 508:
      var value = /** @type {!proto.api.commons.AgentCallHistoryScope} */ (reader.readEnum());
      msg.setAgentCallHistoryScope(value);
      break;
    case 509:
      var value = new proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.deserializeBinaryFromReader);
      msg.setAgentLoginGuiStatisticsDisplay(value);
      break;
    case 510:
      var value = new proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.deserializeBinaryFromReader);
      msg.setPhoneZipMetadataDisplay(value);
      break;
    case 511:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplaySkills(value);
      break;
    case 512:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayWebLinks(value);
      break;
    case 600:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAgentHuntGroupReassignment(value);
      break;
    case 601:
      var value = new proto.api.commons.org.GeneralSettings.DisallowedHuntGroups;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.deserializeBinaryFromReader);
      msg.setDisallowedHuntGroups(value);
      break;
    case 700:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableManualApprovalOfCalls(value);
      break;
    case 701:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireManualApprovalNumber(value);
      break;
    case 702:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableManualApprovalOfSms(value);
      break;
    case 703:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireManualApprovalNumberSms(value);
      break;
    case 704:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableRejectOptionForApprovers(value);
      break;
    case 800:
      var value = new proto.api.commons.org.GeneralSettings.AlphanumericKeypad;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.AlphanumericKeypad.deserializeBinaryFromReader);
      msg.setAlphanumericKeypad(value);
      break;
    case 801:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCallDesktopNotifications(value);
      break;
    case 802:
      var value = new proto.api.commons.org.GeneralSettings.InboundComplianceMetadata;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.deserializeBinaryFromReader);
      msg.setInboundComplianceMetadata(value);
      break;
    case 803:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAgentIntercom(value);
      break;
    case 804:
      var value = new proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery;
      reader.readMessage(value,proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.deserializeBinaryFromReader);
      msg.setPrepareStateCallDelivery(value);
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
proto.api.commons.org.GeneralSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableAgentGatewayTitleBar();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDefaultAgentDialIn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequireEndCallConfirmation();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEnableAuthorizationByIp();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAuthorizedIpAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getInitialAgentStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      100,
      f
    );
  }
  f = message.getEnableAgentPause();
  if (f) {
    writer.writeBool(
      101,
      f
    );
  }
  f = message.getAgentPauseOptionSet();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.api.commons.org.GeneralSettings.PauseOptionSet.serializeBinaryToWriter
    );
  }
  f = message.getDefaultAgentPauseOption();
  if (f.length > 0) {
    writer.writeString(
      103,
      f
    );
  }
  f = message.getEnablePauseOptionReset();
  if (f) {
    writer.writeBool(
      104,
      f
    );
  }
  f = message.getDisplayRecordingIndicator();
  if (f) {
    writer.writeBool(
      200,
      f
    );
  }
  f = message.getEnableCallRecordingPause();
  if (f) {
    writer.writeBool(
      201,
      f
    );
  }
  f = message.getCallRecordingPauseConfirmation();
  if (f) {
    writer.writeBool(
      202,
      f
    );
  }
  f = message.getCallRecordingDelay();
  if (f !== 0) {
    writer.writeInt64(
      203,
      f
    );
  }
  f = message.getEnablePauseRecordingOnHold();
  if (f) {
    writer.writeBool(
      204,
      f
    );
  }
  f = message.getEnableEnvisionScreenRecording();
  if (f) {
    writer.writeBool(
      300,
      f
    );
  }
  f = message.getAgentScreenRecording();
  if (f) {
    writer.writeBool(
      301,
      f
    );
  }
  f = message.getEnableAgentSimpleHold();
  if (f) {
    writer.writeBool(
      400,
      f
    );
  }
  f = message.getEnableAgentMultiAccept();
  if (f) {
    writer.writeBool(
      401,
      f
    );
  }
  f = message.getPauseAgentAfterMultiAccept();
  if (f) {
    writer.writeBool(
      402,
      f
    );
  }
  f = message.getHoldQueueMonitoring();
  if (f != null) {
    writer.writeMessage(
      403,
      f,
      proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.serializeBinaryToWriter
    );
  }
  f = message.getDisplayMachineDeliver();
  if (f) {
    writer.writeBool(
      500,
      f
    );
  }
  f = message.getDisplayLinkbackHuntGroup();
  if (f) {
    writer.writeBool(
      501,
      f
    );
  }
  f = message.getDisplaySipHeaderData();
  if (f) {
    writer.writeBool(
      502,
      f
    );
  }
  f = message.getDisplayIvrNavigationKeys();
  if (f) {
    writer.writeBool(
      503,
      f
    );
  }
  f = message.getDisplayDataCollectData();
  if (f) {
    writer.writeBool(
      504,
      f
    );
  }
  f = message.getDisplayDataDippedData();
  if (f != null) {
    writer.writeMessage(
      505,
      f,
      proto.api.commons.org.GeneralSettings.DataDipDataDisplay.serializeBinaryToWriter
    );
  }
  f = message.getIntegrationDataDisplay();
  if (f != null) {
    writer.writeMessage(
      506,
      f,
      proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.serializeBinaryToWriter
    );
  }
  f = message.getJourneyDataDisplay();
  if (f != null) {
    writer.writeMessage(
      507,
      f,
      proto.api.commons.org.GeneralSettings.JourneyDataDisplay.serializeBinaryToWriter
    );
  }
  f = message.getAgentCallHistoryScope();
  if (f !== 0.0) {
    writer.writeEnum(
      508,
      f
    );
  }
  f = message.getAgentLoginGuiStatisticsDisplay();
  if (f != null) {
    writer.writeMessage(
      509,
      f,
      proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.serializeBinaryToWriter
    );
  }
  f = message.getPhoneZipMetadataDisplay();
  if (f != null) {
    writer.writeMessage(
      510,
      f,
      proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.serializeBinaryToWriter
    );
  }
  f = message.getDisplaySkills();
  if (f) {
    writer.writeBool(
      511,
      f
    );
  }
  f = message.getDisplayWebLinks();
  if (f) {
    writer.writeBool(
      512,
      f
    );
  }
  f = message.getEnableAgentHuntGroupReassignment();
  if (f) {
    writer.writeBool(
      600,
      f
    );
  }
  f = message.getDisallowedHuntGroups();
  if (f != null) {
    writer.writeMessage(
      601,
      f,
      proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.serializeBinaryToWriter
    );
  }
  f = message.getEnableManualApprovalOfCalls();
  if (f) {
    writer.writeBool(
      700,
      f
    );
  }
  f = message.getRequireManualApprovalNumber();
  if (f) {
    writer.writeBool(
      701,
      f
    );
  }
  f = message.getEnableManualApprovalOfSms();
  if (f) {
    writer.writeBool(
      702,
      f
    );
  }
  f = message.getRequireManualApprovalNumberSms();
  if (f) {
    writer.writeBool(
      703,
      f
    );
  }
  f = message.getDisableRejectOptionForApprovers();
  if (f) {
    writer.writeBool(
      704,
      f
    );
  }
  f = message.getAlphanumericKeypad();
  if (f != null) {
    writer.writeMessage(
      800,
      f,
      proto.api.commons.org.GeneralSettings.AlphanumericKeypad.serializeBinaryToWriter
    );
  }
  f = message.getEnableCallDesktopNotifications();
  if (f) {
    writer.writeBool(
      801,
      f
    );
  }
  f = message.getInboundComplianceMetadata();
  if (f != null) {
    writer.writeMessage(
      802,
      f,
      proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.serializeBinaryToWriter
    );
  }
  f = message.getEnableAgentIntercom();
  if (f) {
    writer.writeBool(
      803,
      f
    );
  }
  f = message.getPrepareStateCallDelivery();
  if (f != null) {
    writer.writeMessage(
      804,
      f,
      proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.serializeBinaryToWriter
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
proto.api.commons.org.GeneralSettings.PauseOptionSet.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.PauseOptionSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.PauseOptionSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
setSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.PauseOptionSet}
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.PauseOptionSet;
  return proto.api.commons.org.GeneralSettings.PauseOptionSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.PauseOptionSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.PauseOptionSet}
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSetSid(value);
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
proto.api.commons.org.GeneralSettings.PauseOptionSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.PauseOptionSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.PauseOptionSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSetSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.PauseOptionSet} returns this
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 set_sid = 2;
 * @return {number}
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet.prototype.getSetSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.GeneralSettings.PauseOptionSet} returns this
 */
proto.api.commons.org.GeneralSettings.PauseOptionSet.prototype.setSetSid = function(value) {
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
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
agentRouting: jspb.Message.getFieldWithDefault(msg, 2, 0),
requiredHuntGroupRouting: jspb.Message.getFieldWithDefault(msg, 3, 0),
preferredHuntGroupRouting: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring}
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.HoldQueueMonitoring;
  return proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring}
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.AgentRouting} */ (reader.readEnum());
      msg.setAgentRouting(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequiredHuntGroupRouting(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPreferredHuntGroupRouting(value);
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
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAgentRouting();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRequiredHuntGroupRouting();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPreferredHuntGroupRouting();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring} returns this
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional api.commons.AgentRouting agent_routing = 2;
 * @return {!proto.api.commons.AgentRouting}
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.getAgentRouting = function() {
  return /** @type {!proto.api.commons.AgentRouting} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.AgentRouting} value
 * @return {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring} returns this
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.setAgentRouting = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 required_hunt_group_routing = 3;
 * @return {number}
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.getRequiredHuntGroupRouting = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring} returns this
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.setRequiredHuntGroupRouting = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 preferred_hunt_group_routing = 4;
 * @return {number}
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.getPreferredHuntGroupRouting = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.GeneralSettings.HoldQueueMonitoring} returns this
 */
proto.api.commons.org.GeneralSettings.HoldQueueMonitoring.prototype.setPreferredHuntGroupRouting = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.DataDipDataDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
displayDataDipData: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
dataDipDisplayKeysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay}
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.DataDipDataDisplay;
  return proto.api.commons.org.GeneralSettings.DataDipDataDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay}
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayDataDipData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDataDipDisplayKeys(value);
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
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.DataDipDataDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayDataDipData();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDataDipDisplayKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool display_data_dip_data = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.prototype.getDisplayDataDipData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.prototype.setDisplayDataDipData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string data_dip_display_keys = 2;
 * @return {!Array<string>}
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.prototype.getDataDipDisplayKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.prototype.setDataDipDisplayKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.prototype.addDataDipDisplayKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GeneralSettings.DataDipDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.DataDipDataDisplay.prototype.clearDataDipDisplayKeysList = function() {
  return this.setDataDipDisplayKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
displayIntegrationData: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
integrationDisplayKeysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay}
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.IntegrationDataDisplay;
  return proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay}
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayIntegrationData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIntegrationDisplayKeys(value);
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
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayIntegrationData();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIntegrationDisplayKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool display_integration_data = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.prototype.getDisplayIntegrationData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.prototype.setDisplayIntegrationData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string integration_display_keys = 2;
 * @return {!Array<string>}
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.prototype.getIntegrationDisplayKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.prototype.setIntegrationDisplayKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.prototype.addIntegrationDisplayKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GeneralSettings.IntegrationDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.IntegrationDataDisplay.prototype.clearIntegrationDisplayKeysList = function() {
  return this.setIntegrationDisplayKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.JourneyDataDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
displayJourneyData: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
journeyDisplayKeysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay}
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.JourneyDataDisplay;
  return proto.api.commons.org.GeneralSettings.JourneyDataDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay}
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayJourneyData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addJourneyDisplayKeys(value);
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
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.JourneyDataDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayJourneyData();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getJourneyDisplayKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool display_journey_data = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.prototype.getDisplayJourneyData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.prototype.setDisplayJourneyData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string journey_display_keys = 2;
 * @return {!Array<string>}
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.prototype.getJourneyDisplayKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.prototype.setJourneyDisplayKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.prototype.addJourneyDisplayKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GeneralSettings.JourneyDataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.JourneyDataDisplay.prototype.clearJourneyDisplayKeysList = function() {
  return this.setJourneyDisplayKeysList([]);
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
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
displayAgentLoginGuiStatistics: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
agentLoginGuiStatisticsTemplate: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay}
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay;
  return proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay}
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayAgentLoginGuiStatistics(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentLoginGuiStatisticsTemplate(value);
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
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayAgentLoginGuiStatistics();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAgentLoginGuiStatisticsTemplate();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bool display_agent_login_gui_statistics = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.prototype.getDisplayAgentLoginGuiStatistics = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.prototype.setDisplayAgentLoginGuiStatistics = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 agent_login_gui_statistics_template = 2;
 * @return {number}
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.prototype.getAgentLoginGuiStatisticsTemplate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay.prototype.setAgentLoginGuiStatisticsTemplate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.toObject = function(includeInstance, msg) {
  var f, obj = {
displayPhoneZipMetadata: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
phoneZipMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay}
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay;
  return proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay}
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayPhoneZipMetadata(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.api.commons.PhonePostalDisplayOptions>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPhoneZipMetadataKeys(values[i]);
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
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayPhoneZipMetadata();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPhoneZipMetadataKeysList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * optional bool display_phone_zip_metadata = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.prototype.getDisplayPhoneZipMetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.prototype.setDisplayPhoneZipMetadata = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated api.commons.PhonePostalDisplayOptions phone_zip_metadata_keys = 2;
 * @return {!Array<!proto.api.commons.PhonePostalDisplayOptions>}
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.prototype.getPhoneZipMetadataKeysList = function() {
  return /** @type {!Array<!proto.api.commons.PhonePostalDisplayOptions>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.api.commons.PhonePostalDisplayOptions>} value
 * @return {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.prototype.setPhoneZipMetadataKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.api.commons.PhonePostalDisplayOptions} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.prototype.addPhoneZipMetadataKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay} returns this
 */
proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay.prototype.clearPhoneZipMetadataKeysList = function() {
  return this.setPhoneZipMetadataKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
huntGroupsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups}
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.DisallowedHuntGroups;
  return proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups}
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroups(values[i]);
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
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getHuntGroupsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups} returns this
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated int64 hunt_groups = 2;
 * @return {!Array<number>}
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.prototype.getHuntGroupsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups} returns this
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.prototype.setHuntGroupsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups} returns this
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.prototype.addHuntGroups = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GeneralSettings.DisallowedHuntGroups} returns this
 */
proto.api.commons.org.GeneralSettings.DisallowedHuntGroups.prototype.clearHuntGroupsList = function() {
  return this.setHuntGroupsList([]);
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
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.AlphanumericKeypad.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.AlphanumericKeypad} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
delimiter: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.AlphanumericKeypad}
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.AlphanumericKeypad;
  return proto.api.commons.org.GeneralSettings.AlphanumericKeypad.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.AlphanumericKeypad} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.AlphanumericKeypad}
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.AlphanumericKeypadDelimiter} */ (reader.readEnum());
      msg.setDelimiter(value);
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
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.AlphanumericKeypad.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.AlphanumericKeypad} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDelimiter();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.AlphanumericKeypad} returns this
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional api.commons.AlphanumericKeypadDelimiter delimiter = 2;
 * @return {!proto.api.commons.AlphanumericKeypadDelimiter}
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.prototype.getDelimiter = function() {
  return /** @type {!proto.api.commons.AlphanumericKeypadDelimiter} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.AlphanumericKeypadDelimiter} value
 * @return {!proto.api.commons.org.GeneralSettings.AlphanumericKeypad} returns this
 */
proto.api.commons.org.GeneralSettings.AlphanumericKeypad.prototype.setDelimiter = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
optionalDataList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
requiredDataList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata}
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.InboundComplianceMetadata;
  return proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata}
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOptionalData(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRequiredData(values[i]);
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
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getOptionalDataList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getRequiredDataList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} returns this
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated int64 optional_data = 2;
 * @return {!Array<number>}
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.getOptionalDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} returns this
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.setOptionalDataList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} returns this
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.addOptionalData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} returns this
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.clearOptionalDataList = function() {
  return this.setOptionalDataList([]);
};


/**
 * repeated int64 required_data = 3;
 * @return {!Array<number>}
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.getRequiredDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} returns this
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.setRequiredDataList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} returns this
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.addRequiredData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} returns this
 */
proto.api.commons.org.GeneralSettings.InboundComplianceMetadata.prototype.clearRequiredDataList = function() {
  return this.setRequiredDataList([]);
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
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.toObject = function(includeInstance, msg) {
  var f, obj = {
manualDial: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
previewDial: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery}
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery;
  return proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery}
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setManualDial(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreviewDial(value);
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
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getManualDial();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPreviewDial();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool manual_dial = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.prototype.getManualDial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery} returns this
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.prototype.setManualDial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool preview_dial = 2;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.prototype.getPreviewDial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery} returns this
 */
proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery.prototype.setPreviewDial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool enable_agent_gateway_title_bar = 1;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableAgentGatewayTitleBar = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableAgentGatewayTitleBar = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string default_agent_dial_in = 2;
 * @return {string}
 */
proto.api.commons.org.GeneralSettings.prototype.getDefaultAgentDialIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDefaultAgentDialIn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool require_end_call_confirmation = 3;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getRequireEndCallConfirmation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setRequireEndCallConfirmation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool enable_authorization_by_ip = 4;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableAuthorizationByIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableAuthorizationByIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated string authorized_ip_addresses = 5;
 * @return {!Array<string>}
 */
proto.api.commons.org.GeneralSettings.prototype.getAuthorizedIpAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setAuthorizedIpAddressesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.addAuthorizedIpAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearAuthorizedIpAddressesList = function() {
  return this.setAuthorizedIpAddressesList([]);
};


/**
 * optional api.commons.InitialAgentStatus initial_agent_status = 100;
 * @return {!proto.api.commons.InitialAgentStatus}
 */
proto.api.commons.org.GeneralSettings.prototype.getInitialAgentStatus = function() {
  return /** @type {!proto.api.commons.InitialAgentStatus} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {!proto.api.commons.InitialAgentStatus} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setInitialAgentStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 100, value);
};


/**
 * optional bool enable_agent_pause = 101;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableAgentPause = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 101, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableAgentPause = function(value) {
  return jspb.Message.setProto3BooleanField(this, 101, value);
};


/**
 * optional PauseOptionSet agent_pause_option_set = 102;
 * @return {?proto.api.commons.org.GeneralSettings.PauseOptionSet}
 */
proto.api.commons.org.GeneralSettings.prototype.getAgentPauseOptionSet = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.PauseOptionSet} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.PauseOptionSet, 102));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.PauseOptionSet|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setAgentPauseOptionSet = function(value) {
  return jspb.Message.setWrapperField(this, 102, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearAgentPauseOptionSet = function() {
  return this.setAgentPauseOptionSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasAgentPauseOptionSet = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional string default_agent_pause_option = 103;
 * @return {string}
 */
proto.api.commons.org.GeneralSettings.prototype.getDefaultAgentPauseOption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 103, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDefaultAgentPauseOption = function(value) {
  return jspb.Message.setProto3StringField(this, 103, value);
};


/**
 * optional bool enable_pause_option_reset = 104;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnablePauseOptionReset = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 104, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnablePauseOptionReset = function(value) {
  return jspb.Message.setProto3BooleanField(this, 104, value);
};


/**
 * optional bool display_recording_indicator = 200;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplayRecordingIndicator = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 200, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisplayRecordingIndicator = function(value) {
  return jspb.Message.setProto3BooleanField(this, 200, value);
};


/**
 * optional bool enable_call_recording_pause = 201;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableCallRecordingPause = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 201, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableCallRecordingPause = function(value) {
  return jspb.Message.setProto3BooleanField(this, 201, value);
};


/**
 * optional bool call_recording_pause_confirmation = 202;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getCallRecordingPauseConfirmation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 202, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setCallRecordingPauseConfirmation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 202, value);
};


/**
 * optional int64 call_recording_delay = 203;
 * @return {number}
 */
proto.api.commons.org.GeneralSettings.prototype.getCallRecordingDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 203, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setCallRecordingDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 203, value);
};


/**
 * optional bool enable_pause_recording_on_hold = 204;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnablePauseRecordingOnHold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 204, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnablePauseRecordingOnHold = function(value) {
  return jspb.Message.setProto3BooleanField(this, 204, value);
};


/**
 * optional bool enable_envision_screen_recording = 300;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableEnvisionScreenRecording = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 300, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableEnvisionScreenRecording = function(value) {
  return jspb.Message.setProto3BooleanField(this, 300, value);
};


/**
 * optional bool agent_screen_recording = 301;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getAgentScreenRecording = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 301, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setAgentScreenRecording = function(value) {
  return jspb.Message.setProto3BooleanField(this, 301, value);
};


/**
 * optional bool enable_agent_simple_hold = 400;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableAgentSimpleHold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 400, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableAgentSimpleHold = function(value) {
  return jspb.Message.setProto3BooleanField(this, 400, value);
};


/**
 * optional bool enable_agent_multi_accept = 401;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableAgentMultiAccept = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 401, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableAgentMultiAccept = function(value) {
  return jspb.Message.setProto3BooleanField(this, 401, value);
};


/**
 * optional bool pause_agent_after_multi_accept = 402;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getPauseAgentAfterMultiAccept = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 402, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setPauseAgentAfterMultiAccept = function(value) {
  return jspb.Message.setProto3BooleanField(this, 402, value);
};


/**
 * optional HoldQueueMonitoring hold_queue_monitoring = 403;
 * @return {?proto.api.commons.org.GeneralSettings.HoldQueueMonitoring}
 */
proto.api.commons.org.GeneralSettings.prototype.getHoldQueueMonitoring = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.HoldQueueMonitoring} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.HoldQueueMonitoring, 403));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.HoldQueueMonitoring|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setHoldQueueMonitoring = function(value) {
  return jspb.Message.setWrapperField(this, 403, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearHoldQueueMonitoring = function() {
  return this.setHoldQueueMonitoring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasHoldQueueMonitoring = function() {
  return jspb.Message.getField(this, 403) != null;
};


/**
 * optional bool display_machine_deliver = 500;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplayMachineDeliver = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 500, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisplayMachineDeliver = function(value) {
  return jspb.Message.setProto3BooleanField(this, 500, value);
};


/**
 * optional bool display_linkback_hunt_group = 501;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplayLinkbackHuntGroup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 501, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisplayLinkbackHuntGroup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 501, value);
};


/**
 * optional bool display_sip_header_data = 502;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplaySipHeaderData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 502, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisplaySipHeaderData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 502, value);
};


/**
 * optional bool display_ivr_navigation_keys = 503;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplayIvrNavigationKeys = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 503, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisplayIvrNavigationKeys = function(value) {
  return jspb.Message.setProto3BooleanField(this, 503, value);
};


/**
 * optional bool display_data_collect_data = 504;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplayDataCollectData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 504, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisplayDataCollectData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 504, value);
};


/**
 * optional DataDipDataDisplay display_data_dipped_data = 505;
 * @return {?proto.api.commons.org.GeneralSettings.DataDipDataDisplay}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplayDataDippedData = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.DataDipDataDisplay} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.DataDipDataDisplay, 505));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.DataDipDataDisplay|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setDisplayDataDippedData = function(value) {
  return jspb.Message.setWrapperField(this, 505, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearDisplayDataDippedData = function() {
  return this.setDisplayDataDippedData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasDisplayDataDippedData = function() {
  return jspb.Message.getField(this, 505) != null;
};


/**
 * optional IntegrationDataDisplay integration_data_display = 506;
 * @return {?proto.api.commons.org.GeneralSettings.IntegrationDataDisplay}
 */
proto.api.commons.org.GeneralSettings.prototype.getIntegrationDataDisplay = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.IntegrationDataDisplay} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.IntegrationDataDisplay, 506));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.IntegrationDataDisplay|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setIntegrationDataDisplay = function(value) {
  return jspb.Message.setWrapperField(this, 506, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearIntegrationDataDisplay = function() {
  return this.setIntegrationDataDisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasIntegrationDataDisplay = function() {
  return jspb.Message.getField(this, 506) != null;
};


/**
 * optional JourneyDataDisplay journey_data_display = 507;
 * @return {?proto.api.commons.org.GeneralSettings.JourneyDataDisplay}
 */
proto.api.commons.org.GeneralSettings.prototype.getJourneyDataDisplay = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.JourneyDataDisplay} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.JourneyDataDisplay, 507));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.JourneyDataDisplay|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setJourneyDataDisplay = function(value) {
  return jspb.Message.setWrapperField(this, 507, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearJourneyDataDisplay = function() {
  return this.setJourneyDataDisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasJourneyDataDisplay = function() {
  return jspb.Message.getField(this, 507) != null;
};


/**
 * optional api.commons.AgentCallHistoryScope agent_call_history_scope = 508;
 * @return {!proto.api.commons.AgentCallHistoryScope}
 */
proto.api.commons.org.GeneralSettings.prototype.getAgentCallHistoryScope = function() {
  return /** @type {!proto.api.commons.AgentCallHistoryScope} */ (jspb.Message.getFieldWithDefault(this, 508, 0));
};


/**
 * @param {!proto.api.commons.AgentCallHistoryScope} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setAgentCallHistoryScope = function(value) {
  return jspb.Message.setProto3EnumField(this, 508, value);
};


/**
 * optional AgentLoginGuiStatisticsDisplay agent_login_gui_statistics_display = 509;
 * @return {?proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay}
 */
proto.api.commons.org.GeneralSettings.prototype.getAgentLoginGuiStatisticsDisplay = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay, 509));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setAgentLoginGuiStatisticsDisplay = function(value) {
  return jspb.Message.setWrapperField(this, 509, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearAgentLoginGuiStatisticsDisplay = function() {
  return this.setAgentLoginGuiStatisticsDisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasAgentLoginGuiStatisticsDisplay = function() {
  return jspb.Message.getField(this, 509) != null;
};


/**
 * optional PhoneZipMetadataDisplay phone_zip_metadata_display = 510;
 * @return {?proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay}
 */
proto.api.commons.org.GeneralSettings.prototype.getPhoneZipMetadataDisplay = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay, 510));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.PhoneZipMetadataDisplay|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setPhoneZipMetadataDisplay = function(value) {
  return jspb.Message.setWrapperField(this, 510, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearPhoneZipMetadataDisplay = function() {
  return this.setPhoneZipMetadataDisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasPhoneZipMetadataDisplay = function() {
  return jspb.Message.getField(this, 510) != null;
};


/**
 * optional bool display_skills = 511;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplaySkills = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 511, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisplaySkills = function(value) {
  return jspb.Message.setProto3BooleanField(this, 511, value);
};


/**
 * optional bool display_web_links = 512;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisplayWebLinks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 512, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisplayWebLinks = function(value) {
  return jspb.Message.setProto3BooleanField(this, 512, value);
};


/**
 * optional bool enable_agent_hunt_group_reassignment = 600;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableAgentHuntGroupReassignment = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 600, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableAgentHuntGroupReassignment = function(value) {
  return jspb.Message.setProto3BooleanField(this, 600, value);
};


/**
 * optional DisallowedHuntGroups disallowed_hunt_groups = 601;
 * @return {?proto.api.commons.org.GeneralSettings.DisallowedHuntGroups}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisallowedHuntGroups = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.DisallowedHuntGroups} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.DisallowedHuntGroups, 601));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.DisallowedHuntGroups|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setDisallowedHuntGroups = function(value) {
  return jspb.Message.setWrapperField(this, 601, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearDisallowedHuntGroups = function() {
  return this.setDisallowedHuntGroups(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasDisallowedHuntGroups = function() {
  return jspb.Message.getField(this, 601) != null;
};


/**
 * optional bool enable_manual_approval_of_calls = 700;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableManualApprovalOfCalls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 700, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableManualApprovalOfCalls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 700, value);
};


/**
 * optional bool require_manual_approval_number = 701;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getRequireManualApprovalNumber = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 701, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setRequireManualApprovalNumber = function(value) {
  return jspb.Message.setProto3BooleanField(this, 701, value);
};


/**
 * optional bool enable_manual_approval_of_sms = 702;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableManualApprovalOfSms = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 702, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableManualApprovalOfSms = function(value) {
  return jspb.Message.setProto3BooleanField(this, 702, value);
};


/**
 * optional bool require_manual_approval_number_sms = 703;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getRequireManualApprovalNumberSms = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 703, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setRequireManualApprovalNumberSms = function(value) {
  return jspb.Message.setProto3BooleanField(this, 703, value);
};


/**
 * optional bool disable_reject_option_for_approvers = 704;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getDisableRejectOptionForApprovers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 704, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setDisableRejectOptionForApprovers = function(value) {
  return jspb.Message.setProto3BooleanField(this, 704, value);
};


/**
 * optional AlphanumericKeypad alphanumeric_keypad = 800;
 * @return {?proto.api.commons.org.GeneralSettings.AlphanumericKeypad}
 */
proto.api.commons.org.GeneralSettings.prototype.getAlphanumericKeypad = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.AlphanumericKeypad} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.AlphanumericKeypad, 800));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.AlphanumericKeypad|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setAlphanumericKeypad = function(value) {
  return jspb.Message.setWrapperField(this, 800, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearAlphanumericKeypad = function() {
  return this.setAlphanumericKeypad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasAlphanumericKeypad = function() {
  return jspb.Message.getField(this, 800) != null;
};


/**
 * optional bool enable_call_desktop_notifications = 801;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableCallDesktopNotifications = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 801, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableCallDesktopNotifications = function(value) {
  return jspb.Message.setProto3BooleanField(this, 801, value);
};


/**
 * optional InboundComplianceMetadata inbound_compliance_metadata = 802;
 * @return {?proto.api.commons.org.GeneralSettings.InboundComplianceMetadata}
 */
proto.api.commons.org.GeneralSettings.prototype.getInboundComplianceMetadata = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.InboundComplianceMetadata} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.InboundComplianceMetadata, 802));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.InboundComplianceMetadata|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setInboundComplianceMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 802, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearInboundComplianceMetadata = function() {
  return this.setInboundComplianceMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasInboundComplianceMetadata = function() {
  return jspb.Message.getField(this, 802) != null;
};


/**
 * optional bool enable_agent_intercom = 803;
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.getEnableAgentIntercom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 803, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.setEnableAgentIntercom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 803, value);
};


/**
 * optional PrepareStateCallDelivery prepare_state_call_delivery = 804;
 * @return {?proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery}
 */
proto.api.commons.org.GeneralSettings.prototype.getPrepareStateCallDelivery = function() {
  return /** @type{?proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery, 804));
};


/**
 * @param {?proto.api.commons.org.GeneralSettings.PrepareStateCallDelivery|undefined} value
 * @return {!proto.api.commons.org.GeneralSettings} returns this
*/
proto.api.commons.org.GeneralSettings.prototype.setPrepareStateCallDelivery = function(value) {
  return jspb.Message.setWrapperField(this, 804, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.GeneralSettings} returns this
 */
proto.api.commons.org.GeneralSettings.prototype.clearPrepareStateCallDelivery = function() {
  return this.setPrepareStateCallDelivery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.GeneralSettings.prototype.hasPrepareStateCallDelivery = function() {
  return jspb.Message.getField(this, 804) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.HuntGroupDetails.repeatedFields_ = [3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.HuntGroupDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
generalDetails: (f = msg.getGeneralDetails()) && proto.api.commons.org.HuntGroupDetails.GeneralDetails.toObject(includeInstance, f),
templateDetails: (f = msg.getTemplateDetails()) && proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.toObject(includeInstance, f),
webLinkDetailsList: jspb.Message.toObjectList(msg.getWebLinkDetailsList(),
    proto.api.commons.org.HuntGroupDetails.WebLinkDetails.toObject, includeInstance),
triggerDetailsList: jspb.Message.toObjectList(msg.getTriggerDetailsList(),
    proto.api.commons.org.HuntGroupDetails.TriggerDetails.toObject, includeInstance),
integrationLinkDetailsList: jspb.Message.toObjectList(msg.getIntegrationLinkDetailsList(),
    proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.toObject, includeInstance),
scriptDetails: (f = msg.getScriptDetails()) && proto.api.commons.org.HuntGroupDetails.ScriptDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupDetails}
 */
proto.api.commons.org.HuntGroupDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupDetails;
  return proto.api.commons.org.HuntGroupDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupDetails}
 */
proto.api.commons.org.HuntGroupDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.HuntGroupDetails.GeneralDetails;
      reader.readMessage(value,proto.api.commons.org.HuntGroupDetails.GeneralDetails.deserializeBinaryFromReader);
      msg.setGeneralDetails(value);
      break;
    case 2:
      var value = new proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails;
      reader.readMessage(value,proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.deserializeBinaryFromReader);
      msg.setTemplateDetails(value);
      break;
    case 3:
      var value = new proto.api.commons.org.HuntGroupDetails.WebLinkDetails;
      reader.readMessage(value,proto.api.commons.org.HuntGroupDetails.WebLinkDetails.deserializeBinaryFromReader);
      msg.addWebLinkDetails(value);
      break;
    case 4:
      var value = new proto.api.commons.org.HuntGroupDetails.TriggerDetails;
      reader.readMessage(value,proto.api.commons.org.HuntGroupDetails.TriggerDetails.deserializeBinaryFromReader);
      msg.addTriggerDetails(value);
      break;
    case 5:
      var value = new proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails;
      reader.readMessage(value,proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.deserializeBinaryFromReader);
      msg.addIntegrationLinkDetails(value);
      break;
    case 6:
      var value = new proto.api.commons.org.HuntGroupDetails.ScriptDetails;
      reader.readMessage(value,proto.api.commons.org.HuntGroupDetails.ScriptDetails.deserializeBinaryFromReader);
      msg.setScriptDetails(value);
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
proto.api.commons.org.HuntGroupDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneralDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.HuntGroupDetails.GeneralDetails.serializeBinaryToWriter
    );
  }
  f = message.getTemplateDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.serializeBinaryToWriter
    );
  }
  f = message.getWebLinkDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.commons.org.HuntGroupDetails.WebLinkDetails.serializeBinaryToWriter
    );
  }
  f = message.getTriggerDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.commons.org.HuntGroupDetails.TriggerDetails.serializeBinaryToWriter
    );
  }
  f = message.getIntegrationLinkDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.serializeBinaryToWriter
    );
  }
  f = message.getScriptDetails();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.commons.org.HuntGroupDetails.ScriptDetails.serializeBinaryToWriter
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
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupDetails.GeneralDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
type: jspb.Message.getFieldWithDefault(msg, 3, 0),
modifyDate: (f = msg.getModifyDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
agentCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupDetails.GeneralDetails}
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupDetails.GeneralDetails;
  return proto.api.commons.org.HuntGroupDetails.GeneralDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupDetails.GeneralDetails}
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.org.HuntGroupType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifyDate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentCount(value);
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
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupDetails.GeneralDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getModifyDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAgentCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional HuntGroupType type = 3;
 * @return {!proto.api.commons.org.HuntGroupType}
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.getType = function() {
  return /** @type {!proto.api.commons.org.HuntGroupType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.org.HuntGroupType} value
 * @return {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp modify_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.getModifyDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} returns this
*/
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.setModifyDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.clearModifyDate = function() {
  return this.setModifyDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.hasModifyDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 agent_count = 5;
 * @return {number}
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.getAgentCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupDetails.GeneralDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.GeneralDetails.prototype.setAgentCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
displayAllFields: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
definedFieldCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails}
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails;
  return proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails}
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayAllFields(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefinedFieldCount(value);
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
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayAllFields();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDefinedFieldCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool display_all_fields = 3;
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.getDisplayAllFields = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.setDisplayAllFields = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 defined_field_count = 4;
 * @return {number}
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.getDefinedFieldCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails.prototype.setDefinedFieldCount = function(value) {
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
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupDetails.WebLinkDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
baseUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
parameterCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails}
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupDetails.WebLinkDetails;
  return proto.api.commons.org.HuntGroupDetails.WebLinkDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails}
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParameterCount(value);
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
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupDetails.WebLinkDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBaseUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParameterCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string base_url = 3;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.getBaseUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.setBaseUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 parameter_count = 4;
 * @return {number}
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.getParameterCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.WebLinkDetails.prototype.setParameterCount = function(value) {
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
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupDetails.TriggerDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupDetails.TriggerDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
status: jspb.Message.getFieldWithDefault(msg, 2, 0),
duration: jspb.Message.getFieldWithDefault(msg, 3, 0),
action: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupDetails.TriggerDetails}
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupDetails.TriggerDetails;
  return proto.api.commons.org.HuntGroupDetails.TriggerDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupDetails.TriggerDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupDetails.TriggerDetails}
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.org.AgentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.org.TriggerAction} */ (reader.readEnum());
      msg.setAction(value);
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
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupDetails.TriggerDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupDetails.TriggerDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.TriggerDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AgentStatus status = 2;
 * @return {!proto.api.commons.org.AgentStatus}
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.org.AgentStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.org.AgentStatus} value
 * @return {!proto.api.commons.org.HuntGroupDetails.TriggerDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 duration = 3;
 * @return {number}
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupDetails.TriggerDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional TriggerAction action = 4;
 * @return {!proto.api.commons.org.TriggerAction}
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.getAction = function() {
  return /** @type {!proto.api.commons.org.TriggerAction} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.org.TriggerAction} value
 * @return {!proto.api.commons.org.HuntGroupDetails.TriggerDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.TriggerDetails.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails}
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails;
  return proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails}
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails.prototype.setDescription = function(value) {
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
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupDetails.ScriptDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
scriptSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
actCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
dispositionCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
verbiageCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupDetails.ScriptDetails}
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupDetails.ScriptDetails;
  return proto.api.commons.org.HuntGroupDetails.ScriptDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupDetails.ScriptDetails}
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScriptSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDispositionCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVerbiageCount(value);
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
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupDetails.ScriptDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScriptSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getActCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDispositionCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getVerbiageCount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 script_sid = 1;
 * @return {number}
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.getScriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.setScriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 act_count = 4;
 * @return {number}
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.getActCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.setActCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 disposition_count = 5;
 * @return {number}
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.getDispositionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.setDispositionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 verbiage_count = 6;
 * @return {number}
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.getVerbiageCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupDetails.ScriptDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.ScriptDetails.prototype.setVerbiageCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional GeneralDetails general_details = 1;
 * @return {?proto.api.commons.org.HuntGroupDetails.GeneralDetails}
 */
proto.api.commons.org.HuntGroupDetails.prototype.getGeneralDetails = function() {
  return /** @type{?proto.api.commons.org.HuntGroupDetails.GeneralDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.HuntGroupDetails.GeneralDetails, 1));
};


/**
 * @param {?proto.api.commons.org.HuntGroupDetails.GeneralDetails|undefined} value
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
*/
proto.api.commons.org.HuntGroupDetails.prototype.setGeneralDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.prototype.clearGeneralDetails = function() {
  return this.setGeneralDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupDetails.prototype.hasGeneralDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClientInfoDisplayTemplateDetails template_details = 2;
 * @return {?proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails}
 */
proto.api.commons.org.HuntGroupDetails.prototype.getTemplateDetails = function() {
  return /** @type{?proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails, 2));
};


/**
 * @param {?proto.api.commons.org.HuntGroupDetails.ClientInfoDisplayTemplateDetails|undefined} value
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
*/
proto.api.commons.org.HuntGroupDetails.prototype.setTemplateDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.prototype.clearTemplateDetails = function() {
  return this.setTemplateDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupDetails.prototype.hasTemplateDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated WebLinkDetails web_link_details = 3;
 * @return {!Array<!proto.api.commons.org.HuntGroupDetails.WebLinkDetails>}
 */
proto.api.commons.org.HuntGroupDetails.prototype.getWebLinkDetailsList = function() {
  return /** @type{!Array<!proto.api.commons.org.HuntGroupDetails.WebLinkDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.HuntGroupDetails.WebLinkDetails, 3));
};


/**
 * @param {!Array<!proto.api.commons.org.HuntGroupDetails.WebLinkDetails>} value
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
*/
proto.api.commons.org.HuntGroupDetails.prototype.setWebLinkDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.HuntGroupDetails.WebLinkDetails}
 */
proto.api.commons.org.HuntGroupDetails.prototype.addWebLinkDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.org.HuntGroupDetails.WebLinkDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.prototype.clearWebLinkDetailsList = function() {
  return this.setWebLinkDetailsList([]);
};


/**
 * repeated TriggerDetails trigger_details = 4;
 * @return {!Array<!proto.api.commons.org.HuntGroupDetails.TriggerDetails>}
 */
proto.api.commons.org.HuntGroupDetails.prototype.getTriggerDetailsList = function() {
  return /** @type{!Array<!proto.api.commons.org.HuntGroupDetails.TriggerDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.HuntGroupDetails.TriggerDetails, 4));
};


/**
 * @param {!Array<!proto.api.commons.org.HuntGroupDetails.TriggerDetails>} value
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
*/
proto.api.commons.org.HuntGroupDetails.prototype.setTriggerDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.commons.org.HuntGroupDetails.TriggerDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.HuntGroupDetails.TriggerDetails}
 */
proto.api.commons.org.HuntGroupDetails.prototype.addTriggerDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.commons.org.HuntGroupDetails.TriggerDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.prototype.clearTriggerDetailsList = function() {
  return this.setTriggerDetailsList([]);
};


/**
 * repeated IntegrationLinkDetails integration_link_details = 5;
 * @return {!Array<!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails>}
 */
proto.api.commons.org.HuntGroupDetails.prototype.getIntegrationLinkDetailsList = function() {
  return /** @type{!Array<!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails, 5));
};


/**
 * @param {!Array<!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails>} value
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
*/
proto.api.commons.org.HuntGroupDetails.prototype.setIntegrationLinkDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails}
 */
proto.api.commons.org.HuntGroupDetails.prototype.addIntegrationLinkDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.commons.org.HuntGroupDetails.IntegrationLinkDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.prototype.clearIntegrationLinkDetailsList = function() {
  return this.setIntegrationLinkDetailsList([]);
};


/**
 * optional ScriptDetails script_details = 6;
 * @return {?proto.api.commons.org.HuntGroupDetails.ScriptDetails}
 */
proto.api.commons.org.HuntGroupDetails.prototype.getScriptDetails = function() {
  return /** @type{?proto.api.commons.org.HuntGroupDetails.ScriptDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.HuntGroupDetails.ScriptDetails, 6));
};


/**
 * @param {?proto.api.commons.org.HuntGroupDetails.ScriptDetails|undefined} value
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
*/
proto.api.commons.org.HuntGroupDetails.prototype.setScriptDetails = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupDetails} returns this
 */
proto.api.commons.org.HuntGroupDetails.prototype.clearScriptDetails = function() {
  return this.setScriptDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupDetails.prototype.hasScriptDetails = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.CommunicationSettings.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.CommunicationSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CommunicationSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CommunicationSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enableScrubListAdding: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
scrubListsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
enableScrubListRemoval: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
scrubListsRemovalAllowedList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
complianceDefaultCountry: jspb.Message.getFieldWithDefault(msg, 5, 0),
displayOptionsInWrapup: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
inboundScrubListExpiration: (f = msg.getInboundScrubListExpiration()) && proto.api.commons.org.CommunicationSettings.ScrubListExpiration.toObject(includeInstance, f),
manualScrubListExpiration: (f = msg.getManualScrubListExpiration()) && proto.api.commons.org.CommunicationSettings.ScrubListExpiration.toObject(includeInstance, f),
outboundScrubListExpiration: (f = msg.getOutboundScrubListExpiration()) && proto.api.commons.org.CommunicationSettings.ScrubListExpiration.toObject(includeInstance, f),
previewScrubListExpiration: (f = msg.getPreviewScrubListExpiration()) && proto.api.commons.org.CommunicationSettings.ScrubListExpiration.toObject(includeInstance, f),
automateManuallyDialedScrubList: jspb.Message.getBooleanFieldWithDefault(msg, 200, false),
automatePreviewDialedScrubList: jspb.Message.getBooleanFieldWithDefault(msg, 201, false),
automateResponseRules: (f = msg.getAutomateResponseRules()) && proto.api.commons.org.CommunicationSettings.AutomateResponseRules.toObject(includeInstance, f),
automateScrubListCallData: (f = msg.getAutomateScrubListCallData()) && proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CommunicationSettings}
 */
proto.api.commons.org.CommunicationSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CommunicationSettings;
  return proto.api.commons.org.CommunicationSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CommunicationSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CommunicationSettings}
 */
proto.api.commons.org.CommunicationSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableScrubListAdding(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addScrubLists(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableScrubListRemoval(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addScrubListsRemovalAllowed(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.Country} */ (reader.readEnum());
      msg.setComplianceDefaultCountry(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayOptionsInWrapup(value);
      break;
    case 100:
      var value = new proto.api.commons.org.CommunicationSettings.ScrubListExpiration;
      reader.readMessage(value,proto.api.commons.org.CommunicationSettings.ScrubListExpiration.deserializeBinaryFromReader);
      msg.setInboundScrubListExpiration(value);
      break;
    case 101:
      var value = new proto.api.commons.org.CommunicationSettings.ScrubListExpiration;
      reader.readMessage(value,proto.api.commons.org.CommunicationSettings.ScrubListExpiration.deserializeBinaryFromReader);
      msg.setManualScrubListExpiration(value);
      break;
    case 102:
      var value = new proto.api.commons.org.CommunicationSettings.ScrubListExpiration;
      reader.readMessage(value,proto.api.commons.org.CommunicationSettings.ScrubListExpiration.deserializeBinaryFromReader);
      msg.setOutboundScrubListExpiration(value);
      break;
    case 103:
      var value = new proto.api.commons.org.CommunicationSettings.ScrubListExpiration;
      reader.readMessage(value,proto.api.commons.org.CommunicationSettings.ScrubListExpiration.deserializeBinaryFromReader);
      msg.setPreviewScrubListExpiration(value);
      break;
    case 200:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutomateManuallyDialedScrubList(value);
      break;
    case 201:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutomatePreviewDialedScrubList(value);
      break;
    case 202:
      var value = new proto.api.commons.org.CommunicationSettings.AutomateResponseRules;
      reader.readMessage(value,proto.api.commons.org.CommunicationSettings.AutomateResponseRules.deserializeBinaryFromReader);
      msg.setAutomateResponseRules(value);
      break;
    case 203:
      var value = new proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData;
      reader.readMessage(value,proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.deserializeBinaryFromReader);
      msg.setAutomateScrubListCallData(value);
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
proto.api.commons.org.CommunicationSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CommunicationSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CommunicationSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableScrubListAdding();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getScrubListsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getEnableScrubListRemoval();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getScrubListsRemovalAllowedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getComplianceDefaultCountry();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDisplayOptionsInWrapup();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getInboundScrubListExpiration();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.commons.org.CommunicationSettings.ScrubListExpiration.serializeBinaryToWriter
    );
  }
  f = message.getManualScrubListExpiration();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.api.commons.org.CommunicationSettings.ScrubListExpiration.serializeBinaryToWriter
    );
  }
  f = message.getOutboundScrubListExpiration();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.api.commons.org.CommunicationSettings.ScrubListExpiration.serializeBinaryToWriter
    );
  }
  f = message.getPreviewScrubListExpiration();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      proto.api.commons.org.CommunicationSettings.ScrubListExpiration.serializeBinaryToWriter
    );
  }
  f = message.getAutomateManuallyDialedScrubList();
  if (f) {
    writer.writeBool(
      200,
      f
    );
  }
  f = message.getAutomatePreviewDialedScrubList();
  if (f) {
    writer.writeBool(
      201,
      f
    );
  }
  f = message.getAutomateResponseRules();
  if (f != null) {
    writer.writeMessage(
      202,
      f,
      proto.api.commons.org.CommunicationSettings.AutomateResponseRules.serializeBinaryToWriter
    );
  }
  f = message.getAutomateScrubListCallData();
  if (f != null) {
    writer.writeMessage(
      203,
      f,
      proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CommunicationSettings.ScrubListExpiration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.toObject = function(includeInstance, msg) {
  var f, obj = {
defaultExpiration: jspb.Message.getFieldWithDefault(msg, 1, 0),
limitExpiration: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
limitedExpirationsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration}
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CommunicationSettings.ScrubListExpiration;
  return proto.api.commons.org.CommunicationSettings.ScrubListExpiration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration}
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.CommunicationExpiration} */ (reader.readEnum());
      msg.setDefaultExpiration(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLimitExpiration(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.api.commons.CommunicationExpiration>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLimitedExpirations(values[i]);
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
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CommunicationSettings.ScrubListExpiration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultExpiration();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLimitExpiration();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLimitedExpirationsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


/**
 * optional api.commons.CommunicationExpiration default_expiration = 1;
 * @return {!proto.api.commons.CommunicationExpiration}
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.getDefaultExpiration = function() {
  return /** @type {!proto.api.commons.CommunicationExpiration} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.CommunicationExpiration} value
 * @return {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration} returns this
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.setDefaultExpiration = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool limit_expiration = 2;
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.getLimitExpiration = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration} returns this
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.setLimitExpiration = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated api.commons.CommunicationExpiration limited_expirations = 3;
 * @return {!Array<!proto.api.commons.CommunicationExpiration>}
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.getLimitedExpirationsList = function() {
  return /** @type {!Array<!proto.api.commons.CommunicationExpiration>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.api.commons.CommunicationExpiration>} value
 * @return {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration} returns this
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.setLimitedExpirationsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.api.commons.CommunicationExpiration} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration} returns this
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.addLimitedExpirations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CommunicationSettings.ScrubListExpiration} returns this
 */
proto.api.commons.org.CommunicationSettings.ScrubListExpiration.prototype.clearLimitedExpirationsList = function() {
  return this.setLimitedExpirationsList([]);
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
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CommunicationSettings.AutomateResponseRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateResponseRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
ruleSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateResponseRules}
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CommunicationSettings.AutomateResponseRules;
  return proto.api.commons.org.CommunicationSettings.AutomateResponseRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateResponseRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateResponseRules}
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRuleSid(value);
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
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CommunicationSettings.AutomateResponseRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateResponseRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRuleSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateResponseRules} returns this
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 rule_sid = 2;
 * @return {number}
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.prototype.getRuleSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateResponseRules} returns this
 */
proto.api.commons.org.CommunicationSettings.AutomateResponseRules.prototype.setRuleSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
scrubListDataFieldsList: jspb.Message.toObjectList(msg.getScrubListDataFieldsList(),
    proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData;
  return proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = new proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField;
      reader.readMessage(value,proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.deserializeBinaryFromReader);
      msg.addScrubListDataFields(value);
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
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getScrubListDataFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.serializeBinaryToWriter
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
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.toObject = function(includeInstance, msg) {
  var f, obj = {
scrubList: jspb.Message.getFieldWithDefault(msg, 1, ""),
callDataField: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField;
  return proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScrubList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallDataField(value);
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
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScrubList();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallDataField();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string scrub_list = 1;
 * @return {string}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.prototype.getScrubList = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField} returns this
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.prototype.setScrubList = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 call_data_field = 2;
 * @return {number}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.prototype.getCallDataField = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField} returns this
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField.prototype.setCallDataField = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData} returns this
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated ScrubListDataField scrub_list_data_fields = 2;
 * @return {!Array<!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField>}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.prototype.getScrubListDataFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField>} value
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData} returns this
*/
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.prototype.setScrubListDataFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField}
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.prototype.addScrubListDataFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData} returns this
 */
proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData.prototype.clearScrubListDataFieldsList = function() {
  return this.setScrubListDataFieldsList([]);
};


/**
 * optional bool enable_scrub_list_adding = 1;
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.getEnableScrubListAdding = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.setEnableScrubListAdding = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string scrub_lists = 2;
 * @return {!Array<string>}
 */
proto.api.commons.org.CommunicationSettings.prototype.getScrubListsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.setScrubListsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.addScrubLists = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.clearScrubListsList = function() {
  return this.setScrubListsList([]);
};


/**
 * optional bool enable_scrub_list_removal = 3;
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.getEnableScrubListRemoval = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.setEnableScrubListRemoval = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated string scrub_lists_removal_allowed = 4;
 * @return {!Array<string>}
 */
proto.api.commons.org.CommunicationSettings.prototype.getScrubListsRemovalAllowedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.setScrubListsRemovalAllowedList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.addScrubListsRemovalAllowed = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.clearScrubListsRemovalAllowedList = function() {
  return this.setScrubListsRemovalAllowedList([]);
};


/**
 * optional api.commons.Country compliance_default_country = 5;
 * @return {!proto.api.commons.Country}
 */
proto.api.commons.org.CommunicationSettings.prototype.getComplianceDefaultCountry = function() {
  return /** @type {!proto.api.commons.Country} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.Country} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.setComplianceDefaultCountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool display_options_in_wrapup = 6;
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.getDisplayOptionsInWrapup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.setDisplayOptionsInWrapup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional ScrubListExpiration inbound_scrub_list_expiration = 100;
 * @return {?proto.api.commons.org.CommunicationSettings.ScrubListExpiration}
 */
proto.api.commons.org.CommunicationSettings.prototype.getInboundScrubListExpiration = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings.ScrubListExpiration} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CommunicationSettings.ScrubListExpiration, 100));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings.ScrubListExpiration|undefined} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
*/
proto.api.commons.org.CommunicationSettings.prototype.setInboundScrubListExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.clearInboundScrubListExpiration = function() {
  return this.setInboundScrubListExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.hasInboundScrubListExpiration = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional ScrubListExpiration manual_scrub_list_expiration = 101;
 * @return {?proto.api.commons.org.CommunicationSettings.ScrubListExpiration}
 */
proto.api.commons.org.CommunicationSettings.prototype.getManualScrubListExpiration = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings.ScrubListExpiration} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CommunicationSettings.ScrubListExpiration, 101));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings.ScrubListExpiration|undefined} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
*/
proto.api.commons.org.CommunicationSettings.prototype.setManualScrubListExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 101, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.clearManualScrubListExpiration = function() {
  return this.setManualScrubListExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.hasManualScrubListExpiration = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional ScrubListExpiration outbound_scrub_list_expiration = 102;
 * @return {?proto.api.commons.org.CommunicationSettings.ScrubListExpiration}
 */
proto.api.commons.org.CommunicationSettings.prototype.getOutboundScrubListExpiration = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings.ScrubListExpiration} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CommunicationSettings.ScrubListExpiration, 102));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings.ScrubListExpiration|undefined} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
*/
proto.api.commons.org.CommunicationSettings.prototype.setOutboundScrubListExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 102, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.clearOutboundScrubListExpiration = function() {
  return this.setOutboundScrubListExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.hasOutboundScrubListExpiration = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional ScrubListExpiration preview_scrub_list_expiration = 103;
 * @return {?proto.api.commons.org.CommunicationSettings.ScrubListExpiration}
 */
proto.api.commons.org.CommunicationSettings.prototype.getPreviewScrubListExpiration = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings.ScrubListExpiration} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CommunicationSettings.ScrubListExpiration, 103));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings.ScrubListExpiration|undefined} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
*/
proto.api.commons.org.CommunicationSettings.prototype.setPreviewScrubListExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 103, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.clearPreviewScrubListExpiration = function() {
  return this.setPreviewScrubListExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.hasPreviewScrubListExpiration = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional bool automate_manually_dialed_scrub_list = 200;
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.getAutomateManuallyDialedScrubList = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 200, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.setAutomateManuallyDialedScrubList = function(value) {
  return jspb.Message.setProto3BooleanField(this, 200, value);
};


/**
 * optional bool automate_preview_dialed_scrub_list = 201;
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.getAutomatePreviewDialedScrubList = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 201, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.setAutomatePreviewDialedScrubList = function(value) {
  return jspb.Message.setProto3BooleanField(this, 201, value);
};


/**
 * optional AutomateResponseRules automate_response_rules = 202;
 * @return {?proto.api.commons.org.CommunicationSettings.AutomateResponseRules}
 */
proto.api.commons.org.CommunicationSettings.prototype.getAutomateResponseRules = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings.AutomateResponseRules} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CommunicationSettings.AutomateResponseRules, 202));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings.AutomateResponseRules|undefined} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
*/
proto.api.commons.org.CommunicationSettings.prototype.setAutomateResponseRules = function(value) {
  return jspb.Message.setWrapperField(this, 202, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.clearAutomateResponseRules = function() {
  return this.setAutomateResponseRules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.hasAutomateResponseRules = function() {
  return jspb.Message.getField(this, 202) != null;
};


/**
 * optional AutomateScrubListCallData automate_scrub_list_call_data = 203;
 * @return {?proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData}
 */
proto.api.commons.org.CommunicationSettings.prototype.getAutomateScrubListCallData = function() {
  return /** @type{?proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData, 203));
};


/**
 * @param {?proto.api.commons.org.CommunicationSettings.AutomateScrubListCallData|undefined} value
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
*/
proto.api.commons.org.CommunicationSettings.prototype.setAutomateScrubListCallData = function(value) {
  return jspb.Message.setWrapperField(this, 203, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CommunicationSettings} returns this
 */
proto.api.commons.org.CommunicationSettings.prototype.clearAutomateScrubListCallData = function() {
  return this.setAutomateScrubListCallData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CommunicationSettings.prototype.hasAutomateScrubListCallData = function() {
  return jspb.Message.getField(this, 203) != null;
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
proto.api.commons.org.CallbackSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CallbackSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CallbackSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CallbackSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enableCallbackScheduling: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
defaultCallbackRouting: (f = msg.getDefaultCallbackRouting()) && proto.api.commons.org.CallbackSettings.DefaultRouting.toObject(includeInstance, f),
enableCallbackCalling: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
enableAutomaticRetrieval: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
callbackRoutingDisallowed: (f = msg.getCallbackRoutingDisallowed()) && proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.toObject(includeInstance, f),
enableCustomizableCallerId: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
defaultCallerId: jspb.Message.getFieldWithDefault(msg, 7, ""),
enableCallbackCalendar: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CallbackSettings}
 */
proto.api.commons.org.CallbackSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CallbackSettings;
  return proto.api.commons.org.CallbackSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CallbackSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CallbackSettings}
 */
proto.api.commons.org.CallbackSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCallbackScheduling(value);
      break;
    case 2:
      var value = new proto.api.commons.org.CallbackSettings.DefaultRouting;
      reader.readMessage(value,proto.api.commons.org.CallbackSettings.DefaultRouting.deserializeBinaryFromReader);
      msg.setDefaultCallbackRouting(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCallbackCalling(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAutomaticRetrieval(value);
      break;
    case 5:
      var value = new proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed;
      reader.readMessage(value,proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.deserializeBinaryFromReader);
      msg.setCallbackRoutingDisallowed(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCustomizableCallerId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultCallerId(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCallbackCalendar(value);
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
proto.api.commons.org.CallbackSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CallbackSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CallbackSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CallbackSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableCallbackScheduling();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDefaultCallbackRouting();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.CallbackSettings.DefaultRouting.serializeBinaryToWriter
    );
  }
  f = message.getEnableCallbackCalling();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEnableAutomaticRetrieval();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCallbackRoutingDisallowed();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.serializeBinaryToWriter
    );
  }
  f = message.getEnableCustomizableCallerId();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDefaultCallerId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEnableCallbackCalendar();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CallbackSettings.DefaultRouting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CallbackSettings.DefaultRouting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.toObject = function(includeInstance, msg) {
  var f, obj = {
routingMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
agentSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
agentSkillsetsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting}
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CallbackSettings.DefaultRouting;
  return proto.api.commons.org.CallbackSettings.DefaultRouting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CallbackSettings.DefaultRouting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting}
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.DefaultCallbackRouting} */ (reader.readEnum());
      msg.setRoutingMode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentSid(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAgentSkillsets(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
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
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CallbackSettings.DefaultRouting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CallbackSettings.DefaultRouting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoutingMode();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getAgentSkillsetsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
};


/**
 * optional api.commons.DefaultCallbackRouting routing_mode = 1;
 * @return {!proto.api.commons.DefaultCallbackRouting}
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.getRoutingMode = function() {
  return /** @type {!proto.api.commons.DefaultCallbackRouting} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.DefaultCallbackRouting} value
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting} returns this
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.setRoutingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 agent_sid = 2;
 * @return {number}
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.getAgentSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting} returns this
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.setAgentSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated int64 agent_skillsets = 3;
 * @return {!Array<number>}
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.getAgentSkillsetsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting} returns this
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.setAgentSkillsetsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting} returns this
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.addAgentSkillsets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting} returns this
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.clearAgentSkillsetsList = function() {
  return this.setAgentSkillsetsList([]);
};


/**
 * repeated int64 hunt_group_sids = 4;
 * @return {!Array<number>}
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting} returns this
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting} returns this
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CallbackSettings.DefaultRouting} returns this
 */
proto.api.commons.org.CallbackSettings.DefaultRouting.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.toObject = function(includeInstance, msg) {
  var f, obj = {
useRoutingLimiting: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
agentSidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
agentSkillSidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed}
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed;
  return proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed}
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseRoutingLimiting(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAgentSids(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAgentSkillSids(values[i]);
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
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseRoutingLimiting();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAgentSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getAgentSkillSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
};


/**
 * optional bool use_routing_limiting = 1;
 * @return {boolean}
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.getUseRoutingLimiting = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.setUseRoutingLimiting = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated int64 agent_sids = 2;
 * @return {!Array<number>}
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.getAgentSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.setAgentSidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.addAgentSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.clearAgentSidsList = function() {
  return this.setAgentSidsList([]);
};


/**
 * repeated int64 hunt_group_sids = 3;
 * @return {!Array<number>}
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
};


/**
 * repeated int64 agent_skill_sids = 4;
 * @return {!Array<number>}
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.getAgentSkillSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.setAgentSkillSidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.addAgentSkillSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} returns this
 */
proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed.prototype.clearAgentSkillSidsList = function() {
  return this.setAgentSkillSidsList([]);
};


/**
 * optional bool enable_callback_scheduling = 1;
 * @return {boolean}
 */
proto.api.commons.org.CallbackSettings.prototype.getEnableCallbackScheduling = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CallbackSettings} returns this
 */
proto.api.commons.org.CallbackSettings.prototype.setEnableCallbackScheduling = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional DefaultRouting default_callback_routing = 2;
 * @return {?proto.api.commons.org.CallbackSettings.DefaultRouting}
 */
proto.api.commons.org.CallbackSettings.prototype.getDefaultCallbackRouting = function() {
  return /** @type{?proto.api.commons.org.CallbackSettings.DefaultRouting} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CallbackSettings.DefaultRouting, 2));
};


/**
 * @param {?proto.api.commons.org.CallbackSettings.DefaultRouting|undefined} value
 * @return {!proto.api.commons.org.CallbackSettings} returns this
*/
proto.api.commons.org.CallbackSettings.prototype.setDefaultCallbackRouting = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CallbackSettings} returns this
 */
proto.api.commons.org.CallbackSettings.prototype.clearDefaultCallbackRouting = function() {
  return this.setDefaultCallbackRouting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CallbackSettings.prototype.hasDefaultCallbackRouting = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool enable_callback_calling = 3;
 * @return {boolean}
 */
proto.api.commons.org.CallbackSettings.prototype.getEnableCallbackCalling = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CallbackSettings} returns this
 */
proto.api.commons.org.CallbackSettings.prototype.setEnableCallbackCalling = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool enable_automatic_retrieval = 4;
 * @return {boolean}
 */
proto.api.commons.org.CallbackSettings.prototype.getEnableAutomaticRetrieval = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CallbackSettings} returns this
 */
proto.api.commons.org.CallbackSettings.prototype.setEnableAutomaticRetrieval = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional CallbackRoutingDisallowed callback_routing_disallowed = 5;
 * @return {?proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed}
 */
proto.api.commons.org.CallbackSettings.prototype.getCallbackRoutingDisallowed = function() {
  return /** @type{?proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed, 5));
};


/**
 * @param {?proto.api.commons.org.CallbackSettings.CallbackRoutingDisallowed|undefined} value
 * @return {!proto.api.commons.org.CallbackSettings} returns this
*/
proto.api.commons.org.CallbackSettings.prototype.setCallbackRoutingDisallowed = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.CallbackSettings} returns this
 */
proto.api.commons.org.CallbackSettings.prototype.clearCallbackRoutingDisallowed = function() {
  return this.setCallbackRoutingDisallowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.CallbackSettings.prototype.hasCallbackRoutingDisallowed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enable_customizable_caller_id = 6;
 * @return {boolean}
 */
proto.api.commons.org.CallbackSettings.prototype.getEnableCustomizableCallerId = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CallbackSettings} returns this
 */
proto.api.commons.org.CallbackSettings.prototype.setEnableCustomizableCallerId = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string default_caller_id = 7;
 * @return {string}
 */
proto.api.commons.org.CallbackSettings.prototype.getDefaultCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CallbackSettings} returns this
 */
proto.api.commons.org.CallbackSettings.prototype.setDefaultCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool enable_callback_calendar = 8;
 * @return {boolean}
 */
proto.api.commons.org.CallbackSettings.prototype.getEnableCallbackCalendar = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.CallbackSettings} returns this
 */
proto.api.commons.org.CallbackSettings.prototype.setEnableCallbackCalendar = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.api.commons.org.PreviewDialSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.PreviewDialSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.PreviewDialSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.PreviewDialSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enablePreviewDialCancel: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
enableAutoPauseOnCancel: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
timeoutMinutes: jspb.Message.getFieldWithDefault(msg, 3, 0),
requireNumberConfirmation: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
previewQueueConfig: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.PreviewDialSettings}
 */
proto.api.commons.org.PreviewDialSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.PreviewDialSettings;
  return proto.api.commons.org.PreviewDialSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.PreviewDialSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.PreviewDialSettings}
 */
proto.api.commons.org.PreviewDialSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablePreviewDialCancel(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAutoPauseOnCancel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeoutMinutes(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireNumberConfirmation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreviewQueueConfig(value);
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
proto.api.commons.org.PreviewDialSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.PreviewDialSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.PreviewDialSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.PreviewDialSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnablePreviewDialCancel();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEnableAutoPauseOnCancel();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTimeoutMinutes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRequireNumberConfirmation();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPreviewQueueConfig();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool enable_preview_dial_cancel = 1;
 * @return {boolean}
 */
proto.api.commons.org.PreviewDialSettings.prototype.getEnablePreviewDialCancel = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PreviewDialSettings} returns this
 */
proto.api.commons.org.PreviewDialSettings.prototype.setEnablePreviewDialCancel = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool enable_auto_pause_on_cancel = 2;
 * @return {boolean}
 */
proto.api.commons.org.PreviewDialSettings.prototype.getEnableAutoPauseOnCancel = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PreviewDialSettings} returns this
 */
proto.api.commons.org.PreviewDialSettings.prototype.setEnableAutoPauseOnCancel = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 timeout_minutes = 3;
 * @return {number}
 */
proto.api.commons.org.PreviewDialSettings.prototype.getTimeoutMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.PreviewDialSettings} returns this
 */
proto.api.commons.org.PreviewDialSettings.prototype.setTimeoutMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool require_number_confirmation = 4;
 * @return {boolean}
 */
proto.api.commons.org.PreviewDialSettings.prototype.getRequireNumberConfirmation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.PreviewDialSettings} returns this
 */
proto.api.commons.org.PreviewDialSettings.prototype.setRequireNumberConfirmation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string preview_queue_config = 5;
 * @return {string}
 */
proto.api.commons.org.PreviewDialSettings.prototype.getPreviewQueueConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.PreviewDialSettings} returns this
 */
proto.api.commons.org.PreviewDialSettings.prototype.setPreviewQueueConfig = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.ManualDialSettings.repeatedFields_ = [27];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.ManualDialSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ManualDialSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ManualDialSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ManualDialSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enableManualDial: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
queueConfigurationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
defaultCallRecording: jspb.Message.getFieldWithDefault(msg, 3, 0),
cellPhoneScrub: jspb.Message.getFieldWithDefault(msg, 4, 0),
timeZoneRestriction: jspb.Message.getFieldWithDefault(msg, 5, 0),
timeZoneValidationPostalCode: jspb.Message.getFieldWithDefault(msg, 6, 0),
naturalComplianceScrub: (f = msg.getNaturalComplianceScrub()) && proto.api.commons.org.NaturalLanguageComplianceScrub.toObject(includeInstance, f),
scrubOverride: (f = msg.getScrubOverride()) && proto.api.commons.org.ManualDialSettings.ScrubOverride.toObject(includeInstance, f),
enableWhitelist: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
defaultOutboundCountry: jspb.Message.getFieldWithDefault(msg, 10, 0),
displayOutboundCountrySelection: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
displayOutboundNumberPhoneBook: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
defaultCallerIdCountry: jspb.Message.getFieldWithDefault(msg, 13, 0),
displayCallerIdCountrySelection: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
displayCallerIdPhoneBook: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
enableCustomizableCallerId: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
defaultCallerId: (f = msg.getDefaultCallerId()) && proto.api.commons.org.ManualDialSettings.DefaultCallerId.toObject(includeInstance, f),
enableCallerIdBucket: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
randomCallerIdBucket: jspb.Message.getFieldWithDefault(msg, 19, 0),
automateRandomCallerId: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
enableMaskCallerId: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
enableSipAddress: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
naturalLanguageComplianceMetadata: (f = msg.getNaturalLanguageComplianceMetadata()) && proto.api.commons.org.NaturalLanguageComplianceMetadata.toObject(includeInstance, f),
dataDipScope: jspb.Message.getFieldWithDefault(msg, 24, 0),
dataDipConfigSid: jspb.Message.getFieldWithDefault(msg, 25, 0),
dataDipResultHandling: jspb.Message.getFieldWithDefault(msg, 26, 0),
dataDipIntegrationMappingsList: jspb.Message.toObjectList(msg.getDataDipIntegrationMappingsList(),
    proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.toObject, includeInstance),
dataDipIntegrationHandling: jspb.Message.getFieldWithDefault(msg, 28, 0),
enableRejectOptionForApprovers: jspb.Message.getBooleanFieldWithDefault(msg, 29, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ManualDialSettings}
 */
proto.api.commons.org.ManualDialSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ManualDialSettings;
  return proto.api.commons.org.ManualDialSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ManualDialSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ManualDialSettings}
 */
proto.api.commons.org.ManualDialSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableManualDial(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueueConfigurationName(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.HuntGroupOrgDefaultCustom} */ (reader.readEnum());
      msg.setDefaultCallRecording(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.HuntGroupOrgDefaultCustom} */ (reader.readEnum());
      msg.setCellPhoneScrub(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.HuntGroupOrgDefaultCustom} */ (reader.readEnum());
      msg.setTimeZoneRestriction(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.ManualDialTimeZoneValidation} */ (reader.readEnum());
      msg.setTimeZoneValidationPostalCode(value);
      break;
    case 7:
      var value = new proto.api.commons.org.NaturalLanguageComplianceScrub;
      reader.readMessage(value,proto.api.commons.org.NaturalLanguageComplianceScrub.deserializeBinaryFromReader);
      msg.setNaturalComplianceScrub(value);
      break;
    case 8:
      var value = new proto.api.commons.org.ManualDialSettings.ScrubOverride;
      reader.readMessage(value,proto.api.commons.org.ManualDialSettings.ScrubOverride.deserializeBinaryFromReader);
      msg.setScrubOverride(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableWhitelist(value);
      break;
    case 10:
      var value = /** @type {!proto.api.commons.Country} */ (reader.readEnum());
      msg.setDefaultOutboundCountry(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayOutboundCountrySelection(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayOutboundNumberPhoneBook(value);
      break;
    case 13:
      var value = /** @type {!proto.api.commons.Country} */ (reader.readEnum());
      msg.setDefaultCallerIdCountry(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayCallerIdCountrySelection(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayCallerIdPhoneBook(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCustomizableCallerId(value);
      break;
    case 17:
      var value = new proto.api.commons.org.ManualDialSettings.DefaultCallerId;
      reader.readMessage(value,proto.api.commons.org.ManualDialSettings.DefaultCallerId.deserializeBinaryFromReader);
      msg.setDefaultCallerId(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCallerIdBucket(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRandomCallerIdBucket(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutomateRandomCallerId(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableMaskCallerId(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableSipAddress(value);
      break;
    case 23:
      var value = new proto.api.commons.org.NaturalLanguageComplianceMetadata;
      reader.readMessage(value,proto.api.commons.org.NaturalLanguageComplianceMetadata.deserializeBinaryFromReader);
      msg.setNaturalLanguageComplianceMetadata(value);
      break;
    case 24:
      var value = /** @type {!proto.api.commons.ManualDialDataDipScope} */ (reader.readEnum());
      msg.setDataDipScope(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDataDipConfigSid(value);
      break;
    case 26:
      var value = /** @type {!proto.api.commons.ManualDialDataDipHandling} */ (reader.readEnum());
      msg.setDataDipResultHandling(value);
      break;
    case 27:
      var value = new proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping;
      reader.readMessage(value,proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.deserializeBinaryFromReader);
      msg.addDataDipIntegrationMappings(value);
      break;
    case 28:
      var value = /** @type {!proto.api.commons.ManualDialDataDipHandling} */ (reader.readEnum());
      msg.setDataDipIntegrationHandling(value);
      break;
    case 29:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableRejectOptionForApprovers(value);
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
proto.api.commons.org.ManualDialSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ManualDialSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ManualDialSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ManualDialSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableManualDial();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getQueueConfigurationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefaultCallRecording();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCellPhoneScrub();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTimeZoneRestriction();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getTimeZoneValidationPostalCode();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getNaturalComplianceScrub();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.commons.org.NaturalLanguageComplianceScrub.serializeBinaryToWriter
    );
  }
  f = message.getScrubOverride();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.commons.org.ManualDialSettings.ScrubOverride.serializeBinaryToWriter
    );
  }
  f = message.getEnableWhitelist();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getDefaultOutboundCountry();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getDisplayOutboundCountrySelection();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDisplayOutboundNumberPhoneBook();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getDefaultCallerIdCountry();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getDisplayCallerIdCountrySelection();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getDisplayCallerIdPhoneBook();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getEnableCustomizableCallerId();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getDefaultCallerId();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.api.commons.org.ManualDialSettings.DefaultCallerId.serializeBinaryToWriter
    );
  }
  f = message.getEnableCallerIdBucket();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getRandomCallerIdBucket();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getAutomateRandomCallerId();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getEnableMaskCallerId();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getEnableSipAddress();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getNaturalLanguageComplianceMetadata();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.api.commons.org.NaturalLanguageComplianceMetadata.serializeBinaryToWriter
    );
  }
  f = message.getDataDipScope();
  if (f !== 0.0) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = message.getDataDipConfigSid();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getDataDipResultHandling();
  if (f !== 0.0) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = message.getDataDipIntegrationMappingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      27,
      f,
      proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.serializeBinaryToWriter
    );
  }
  f = message.getDataDipIntegrationHandling();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = message.getEnableRejectOptionForApprovers();
  if (f) {
    writer.writeBool(
      29,
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
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ManualDialSettings.ScrubOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ManualDialSettings.ScrubOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
enableDnclOverride: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
enableCellScrubOverride: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
enableTimeZoneScrubOverride: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
naturalComplianceOverride: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ManualDialSettings.ScrubOverride}
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ManualDialSettings.ScrubOverride;
  return proto.api.commons.org.ManualDialSettings.ScrubOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ManualDialSettings.ScrubOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ManualDialSettings.ScrubOverride}
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableDnclOverride(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCellScrubOverride(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableTimeZoneScrubOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNaturalComplianceOverride(value);
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
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ManualDialSettings.ScrubOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ManualDialSettings.ScrubOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableDnclOverride();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEnableCellScrubOverride();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEnableTimeZoneScrubOverride();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getNaturalComplianceOverride();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool enable_dncl_override = 1;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.getEnableDnclOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings.ScrubOverride} returns this
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.setEnableDnclOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool enable_cell_scrub_override = 2;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.getEnableCellScrubOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings.ScrubOverride} returns this
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.setEnableCellScrubOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool enable_time_zone_scrub_override = 3;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.getEnableTimeZoneScrubOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings.ScrubOverride} returns this
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.setEnableTimeZoneScrubOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool natural_compliance_override = 4;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.getNaturalComplianceOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings.ScrubOverride} returns this
 */
proto.api.commons.org.ManualDialSettings.ScrubOverride.prototype.setNaturalComplianceOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.api.commons.org.ManualDialSettings.DefaultCallerId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ManualDialSettings.DefaultCallerId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ManualDialSettings.DefaultCallerId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId.toObject = function(includeInstance, msg) {
  var f, obj = {
usage: jspb.Message.getFieldWithDefault(msg, 1, 0),
customCallerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ManualDialSettings.DefaultCallerId}
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ManualDialSettings.DefaultCallerId;
  return proto.api.commons.org.ManualDialSettings.DefaultCallerId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ManualDialSettings.DefaultCallerId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ManualDialSettings.DefaultCallerId}
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.DefaultManualDialCallerId} */ (reader.readEnum());
      msg.setUsage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomCallerId(value);
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
proto.api.commons.org.ManualDialSettings.DefaultCallerId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ManualDialSettings.DefaultCallerId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ManualDialSettings.DefaultCallerId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustomCallerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.DefaultManualDialCallerId usage = 1;
 * @return {!proto.api.commons.DefaultManualDialCallerId}
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId.prototype.getUsage = function() {
  return /** @type {!proto.api.commons.DefaultManualDialCallerId} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.DefaultManualDialCallerId} value
 * @return {!proto.api.commons.org.ManualDialSettings.DefaultCallerId} returns this
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId.prototype.setUsage = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string custom_caller_id = 2;
 * @return {string}
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId.prototype.getCustomCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ManualDialSettings.DefaultCallerId} returns this
 */
proto.api.commons.org.ManualDialSettings.DefaultCallerId.prototype.setCustomCallerId = function(value) {
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
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.toObject = function(includeInstance, msg) {
  var f, obj = {
mappingType: jspb.Message.getFieldWithDefault(msg, 1, 0),
dataDipReturnKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
contactFieldDescriptionSid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping}
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping;
  return proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping}
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.ManualDialDataDipIntegration} */ (reader.readEnum());
      msg.setMappingType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataDipReturnKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContactFieldDescriptionSid(value);
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
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMappingType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDataDipReturnKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContactFieldDescriptionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional api.commons.ManualDialDataDipIntegration mapping_type = 1;
 * @return {!proto.api.commons.ManualDialDataDipIntegration}
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.prototype.getMappingType = function() {
  return /** @type {!proto.api.commons.ManualDialDataDipIntegration} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.ManualDialDataDipIntegration} value
 * @return {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping} returns this
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.prototype.setMappingType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string data_dip_return_key = 2;
 * @return {string}
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.prototype.getDataDipReturnKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping} returns this
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.prototype.setDataDipReturnKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 contact_field_description_sid = 3;
 * @return {number}
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.prototype.getContactFieldDescriptionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping} returns this
 */
proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping.prototype.setContactFieldDescriptionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool enable_manual_dial = 1;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getEnableManualDial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setEnableManualDial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string queue_configuration_name = 2;
 * @return {string}
 */
proto.api.commons.org.ManualDialSettings.prototype.getQueueConfigurationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setQueueConfigurationName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.HuntGroupOrgDefaultCustom default_call_recording = 3;
 * @return {!proto.api.commons.HuntGroupOrgDefaultCustom}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDefaultCallRecording = function() {
  return /** @type {!proto.api.commons.HuntGroupOrgDefaultCustom} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.HuntGroupOrgDefaultCustom} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDefaultCallRecording = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional api.commons.HuntGroupOrgDefaultCustom cell_phone_scrub = 4;
 * @return {!proto.api.commons.HuntGroupOrgDefaultCustom}
 */
proto.api.commons.org.ManualDialSettings.prototype.getCellPhoneScrub = function() {
  return /** @type {!proto.api.commons.HuntGroupOrgDefaultCustom} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.HuntGroupOrgDefaultCustom} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setCellPhoneScrub = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional api.commons.HuntGroupOrgDefaultCustom time_zone_restriction = 5;
 * @return {!proto.api.commons.HuntGroupOrgDefaultCustom}
 */
proto.api.commons.org.ManualDialSettings.prototype.getTimeZoneRestriction = function() {
  return /** @type {!proto.api.commons.HuntGroupOrgDefaultCustom} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.HuntGroupOrgDefaultCustom} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setTimeZoneRestriction = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional api.commons.ManualDialTimeZoneValidation time_zone_validation_postal_code = 6;
 * @return {!proto.api.commons.ManualDialTimeZoneValidation}
 */
proto.api.commons.org.ManualDialSettings.prototype.getTimeZoneValidationPostalCode = function() {
  return /** @type {!proto.api.commons.ManualDialTimeZoneValidation} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.ManualDialTimeZoneValidation} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setTimeZoneValidationPostalCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional NaturalLanguageComplianceScrub natural_compliance_scrub = 7;
 * @return {?proto.api.commons.org.NaturalLanguageComplianceScrub}
 */
proto.api.commons.org.ManualDialSettings.prototype.getNaturalComplianceScrub = function() {
  return /** @type{?proto.api.commons.org.NaturalLanguageComplianceScrub} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.NaturalLanguageComplianceScrub, 7));
};


/**
 * @param {?proto.api.commons.org.NaturalLanguageComplianceScrub|undefined} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
*/
proto.api.commons.org.ManualDialSettings.prototype.setNaturalComplianceScrub = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.clearNaturalComplianceScrub = function() {
  return this.setNaturalComplianceScrub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.hasNaturalComplianceScrub = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ScrubOverride scrub_override = 8;
 * @return {?proto.api.commons.org.ManualDialSettings.ScrubOverride}
 */
proto.api.commons.org.ManualDialSettings.prototype.getScrubOverride = function() {
  return /** @type{?proto.api.commons.org.ManualDialSettings.ScrubOverride} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ManualDialSettings.ScrubOverride, 8));
};


/**
 * @param {?proto.api.commons.org.ManualDialSettings.ScrubOverride|undefined} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
*/
proto.api.commons.org.ManualDialSettings.prototype.setScrubOverride = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.clearScrubOverride = function() {
  return this.setScrubOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.hasScrubOverride = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool enable_whitelist = 9;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getEnableWhitelist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setEnableWhitelist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional api.commons.Country default_outbound_country = 10;
 * @return {!proto.api.commons.Country}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDefaultOutboundCountry = function() {
  return /** @type {!proto.api.commons.Country} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.Country} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDefaultOutboundCountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional bool display_outbound_country_selection = 11;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDisplayOutboundCountrySelection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDisplayOutboundCountrySelection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool display_outbound_number_phone_book = 12;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDisplayOutboundNumberPhoneBook = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDisplayOutboundNumberPhoneBook = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional api.commons.Country default_caller_id_country = 13;
 * @return {!proto.api.commons.Country}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDefaultCallerIdCountry = function() {
  return /** @type {!proto.api.commons.Country} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.api.commons.Country} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDefaultCallerIdCountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional bool display_caller_id_country_selection = 14;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDisplayCallerIdCountrySelection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDisplayCallerIdCountrySelection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool display_caller_id_phone_book = 15;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDisplayCallerIdPhoneBook = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDisplayCallerIdPhoneBook = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool enable_customizable_caller_id = 16;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getEnableCustomizableCallerId = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setEnableCustomizableCallerId = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional DefaultCallerId default_caller_id = 17;
 * @return {?proto.api.commons.org.ManualDialSettings.DefaultCallerId}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDefaultCallerId = function() {
  return /** @type{?proto.api.commons.org.ManualDialSettings.DefaultCallerId} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ManualDialSettings.DefaultCallerId, 17));
};


/**
 * @param {?proto.api.commons.org.ManualDialSettings.DefaultCallerId|undefined} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
*/
proto.api.commons.org.ManualDialSettings.prototype.setDefaultCallerId = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.clearDefaultCallerId = function() {
  return this.setDefaultCallerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.hasDefaultCallerId = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool enable_caller_id_bucket = 18;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getEnableCallerIdBucket = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setEnableCallerIdBucket = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional int64 random_caller_id_bucket = 19;
 * @return {number}
 */
proto.api.commons.org.ManualDialSettings.prototype.getRandomCallerIdBucket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setRandomCallerIdBucket = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional bool automate_random_caller_id = 20;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getAutomateRandomCallerId = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setAutomateRandomCallerId = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool enable_mask_caller_id = 21;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getEnableMaskCallerId = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setEnableMaskCallerId = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool enable_sip_address = 22;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getEnableSipAddress = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setEnableSipAddress = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional NaturalLanguageComplianceMetadata natural_language_compliance_metadata = 23;
 * @return {?proto.api.commons.org.NaturalLanguageComplianceMetadata}
 */
proto.api.commons.org.ManualDialSettings.prototype.getNaturalLanguageComplianceMetadata = function() {
  return /** @type{?proto.api.commons.org.NaturalLanguageComplianceMetadata} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.NaturalLanguageComplianceMetadata, 23));
};


/**
 * @param {?proto.api.commons.org.NaturalLanguageComplianceMetadata|undefined} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
*/
proto.api.commons.org.ManualDialSettings.prototype.setNaturalLanguageComplianceMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.clearNaturalLanguageComplianceMetadata = function() {
  return this.setNaturalLanguageComplianceMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.hasNaturalLanguageComplianceMetadata = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional api.commons.ManualDialDataDipScope data_dip_scope = 24;
 * @return {!proto.api.commons.ManualDialDataDipScope}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDataDipScope = function() {
  return /** @type {!proto.api.commons.ManualDialDataDipScope} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.api.commons.ManualDialDataDipScope} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDataDipScope = function(value) {
  return jspb.Message.setProto3EnumField(this, 24, value);
};


/**
 * optional int64 data_dip_config_sid = 25;
 * @return {number}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDataDipConfigSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDataDipConfigSid = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional api.commons.ManualDialDataDipHandling data_dip_result_handling = 26;
 * @return {!proto.api.commons.ManualDialDataDipHandling}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDataDipResultHandling = function() {
  return /** @type {!proto.api.commons.ManualDialDataDipHandling} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.api.commons.ManualDialDataDipHandling} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDataDipResultHandling = function(value) {
  return jspb.Message.setProto3EnumField(this, 26, value);
};


/**
 * repeated DataDipIntegrationMapping data_dip_integration_mappings = 27;
 * @return {!Array<!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping>}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDataDipIntegrationMappingsList = function() {
  return /** @type{!Array<!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping, 27));
};


/**
 * @param {!Array<!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping>} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
*/
proto.api.commons.org.ManualDialSettings.prototype.setDataDipIntegrationMappingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 27, value);
};


/**
 * @param {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping}
 */
proto.api.commons.org.ManualDialSettings.prototype.addDataDipIntegrationMappings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 27, opt_value, proto.api.commons.org.ManualDialSettings.DataDipIntegrationMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.clearDataDipIntegrationMappingsList = function() {
  return this.setDataDipIntegrationMappingsList([]);
};


/**
 * optional api.commons.ManualDialDataDipHandling data_dip_integration_handling = 28;
 * @return {!proto.api.commons.ManualDialDataDipHandling}
 */
proto.api.commons.org.ManualDialSettings.prototype.getDataDipIntegrationHandling = function() {
  return /** @type {!proto.api.commons.ManualDialDataDipHandling} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.api.commons.ManualDialDataDipHandling} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setDataDipIntegrationHandling = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
};


/**
 * optional bool enable_reject_option_for_approvers = 29;
 * @return {boolean}
 */
proto.api.commons.org.ManualDialSettings.prototype.getEnableRejectOptionForApprovers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 29, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ManualDialSettings} returns this
 */
proto.api.commons.org.ManualDialSettings.prototype.setEnableRejectOptionForApprovers = function(value) {
  return jspb.Message.setProto3BooleanField(this, 29, value);
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
proto.api.commons.org.NaturalLanguageComplianceScrub.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.NaturalLanguageComplianceScrub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.NaturalLanguageComplianceScrub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.NaturalLanguageComplianceScrub.toObject = function(includeInstance, msg) {
  var f, obj = {
complianceScrub: jspb.Message.getFieldWithDefault(msg, 1, 0),
ruleSetId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.NaturalLanguageComplianceScrub}
 */
proto.api.commons.org.NaturalLanguageComplianceScrub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.NaturalLanguageComplianceScrub;
  return proto.api.commons.org.NaturalLanguageComplianceScrub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.NaturalLanguageComplianceScrub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.NaturalLanguageComplianceScrub}
 */
proto.api.commons.org.NaturalLanguageComplianceScrub.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.HuntGroupOrgDefaultCustom} */ (reader.readEnum());
      msg.setComplianceScrub(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetId(value);
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
proto.api.commons.org.NaturalLanguageComplianceScrub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.NaturalLanguageComplianceScrub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.NaturalLanguageComplianceScrub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.NaturalLanguageComplianceScrub.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComplianceScrub();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.HuntGroupOrgDefaultCustom compliance_scrub = 1;
 * @return {!proto.api.commons.HuntGroupOrgDefaultCustom}
 */
proto.api.commons.org.NaturalLanguageComplianceScrub.prototype.getComplianceScrub = function() {
  return /** @type {!proto.api.commons.HuntGroupOrgDefaultCustom} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.HuntGroupOrgDefaultCustom} value
 * @return {!proto.api.commons.org.NaturalLanguageComplianceScrub} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceScrub.prototype.setComplianceScrub = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string rule_set_id = 2;
 * @return {string}
 */
proto.api.commons.org.NaturalLanguageComplianceScrub.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.NaturalLanguageComplianceScrub} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceScrub.prototype.setRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.NaturalLanguageComplianceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.NaturalLanguageComplianceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
optionalDataList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
requiredDataList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata}
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.NaturalLanguageComplianceMetadata;
  return proto.api.commons.org.NaturalLanguageComplianceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.NaturalLanguageComplianceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata}
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOptionalData(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRequiredData(values[i]);
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
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.NaturalLanguageComplianceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.NaturalLanguageComplianceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getOptionalDataList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getRequiredDataList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated int64 optional_data = 2;
 * @return {!Array<number>}
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.getOptionalDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.setOptionalDataList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.addOptionalData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.clearOptionalDataList = function() {
  return this.setOptionalDataList([]);
};


/**
 * repeated int64 required_data = 3;
 * @return {!Array<number>}
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.getRequiredDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.setRequiredDataList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.addRequiredData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.NaturalLanguageComplianceMetadata} returns this
 */
proto.api.commons.org.NaturalLanguageComplianceMetadata.prototype.clearRequiredDataList = function() {
  return this.setRequiredDataList([]);
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
proto.api.commons.org.CallerIdBucketData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CallerIdBucketData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CallerIdBucketData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CallerIdBucketData.toObject = function(includeInstance, msg) {
  var f, obj = {
xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 1, 0),
bucketName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CallerIdBucketData}
 */
proto.api.commons.org.CallerIdBucketData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CallerIdBucketData;
  return proto.api.commons.org.CallerIdBucketData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CallerIdBucketData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CallerIdBucketData}
 */
proto.api.commons.org.CallerIdBucketData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
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
proto.api.commons.org.CallerIdBucketData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CallerIdBucketData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CallerIdBucketData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CallerIdBucketData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 xml_client_property_sid = 1;
 * @return {number}
 */
proto.api.commons.org.CallerIdBucketData.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.CallerIdBucketData} returns this
 */
proto.api.commons.org.CallerIdBucketData.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string bucket_name = 2;
 * @return {string}
 */
proto.api.commons.org.CallerIdBucketData.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.CallerIdBucketData} returns this
 */
proto.api.commons.org.CallerIdBucketData.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.TransferCallSettings.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.TransferCallSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TransferCallSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TransferCallSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enableTransfer: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
handOffTypes: (f = msg.getHandOffTypes()) && proto.api.commons.org.TransferCallSettings.HandOffTypes.toObject(includeInstance, f),
recordingStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
transferTypes: (f = msg.getTransferTypes()) && proto.api.commons.org.TransferCallSettings.TransferTypes.toObject(includeInstance, f),
displayTransferNumberPhoneBook: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
enableTransferNumberEditing: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
defaultTransferNumber: jspb.Message.getFieldWithDefault(msg, 7, ""),
startRecordingNumbersList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
stopRecordingNumbersList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
transferNumberCountry: jspb.Message.getFieldWithDefault(msg, 10, 0),
displayTransferCountrySelection: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
displayCallerIdPhoneBook: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
enableCallerIdEditing: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
defaultCallerId: (f = msg.getDefaultCallerId()) && proto.api.commons.org.TransferCallSettings.DefaultCallerId.toObject(includeInstance, f),
callerIdCountry: jspb.Message.getFieldWithDefault(msg, 15, 0),
displayCallerIdCountrySelection: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
displayAgentTransferFiltering: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
defaultAgentTransferFiltering: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
enableHuntGroupFiltering: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
requeueQueueConfig: (f = msg.getRequeueQueueConfig()) && proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.toObject(includeInstance, f),
requeueTransferDisallowed: (f = msg.getRequeueTransferDisallowed()) && proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.toObject(includeInstance, f),
pbxTransferDisallowed: (f = msg.getPbxTransferDisallowed()) && proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.toObject(includeInstance, f),
enableScrubOverride: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
enableWhitelist: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
naturalComplianceScrub: (f = msg.getNaturalComplianceScrub()) && proto.api.commons.org.NaturalLanguageComplianceScrub.toObject(includeInstance, f),
naturalLanguageComplianceMetadata: (f = msg.getNaturalLanguageComplianceMetadata()) && proto.api.commons.org.NaturalLanguageComplianceMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TransferCallSettings}
 */
proto.api.commons.org.TransferCallSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TransferCallSettings;
  return proto.api.commons.org.TransferCallSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TransferCallSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TransferCallSettings}
 */
proto.api.commons.org.TransferCallSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableTransfer(value);
      break;
    case 2:
      var value = new proto.api.commons.org.TransferCallSettings.HandOffTypes;
      reader.readMessage(value,proto.api.commons.org.TransferCallSettings.HandOffTypes.deserializeBinaryFromReader);
      msg.setHandOffTypes(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.TransferRecordingStatus} */ (reader.readEnum());
      msg.setRecordingStatus(value);
      break;
    case 4:
      var value = new proto.api.commons.org.TransferCallSettings.TransferTypes;
      reader.readMessage(value,proto.api.commons.org.TransferCallSettings.TransferTypes.deserializeBinaryFromReader);
      msg.setTransferTypes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayTransferNumberPhoneBook(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableTransferNumberEditing(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultTransferNumber(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addStartRecordingNumbers(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addStopRecordingNumbers(value);
      break;
    case 10:
      var value = /** @type {!proto.api.commons.Country} */ (reader.readEnum());
      msg.setTransferNumberCountry(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayTransferCountrySelection(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayCallerIdPhoneBook(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCallerIdEditing(value);
      break;
    case 14:
      var value = new proto.api.commons.org.TransferCallSettings.DefaultCallerId;
      reader.readMessage(value,proto.api.commons.org.TransferCallSettings.DefaultCallerId.deserializeBinaryFromReader);
      msg.setDefaultCallerId(value);
      break;
    case 15:
      var value = /** @type {!proto.api.commons.Country} */ (reader.readEnum());
      msg.setCallerIdCountry(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayCallerIdCountrySelection(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayAgentTransferFiltering(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultAgentTransferFiltering(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableHuntGroupFiltering(value);
      break;
    case 20:
      var value = new proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration;
      reader.readMessage(value,proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.deserializeBinaryFromReader);
      msg.setRequeueQueueConfig(value);
      break;
    case 21:
      var value = new proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed;
      reader.readMessage(value,proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.deserializeBinaryFromReader);
      msg.setRequeueTransferDisallowed(value);
      break;
    case 22:
      var value = new proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed;
      reader.readMessage(value,proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.deserializeBinaryFromReader);
      msg.setPbxTransferDisallowed(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableScrubOverride(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableWhitelist(value);
      break;
    case 25:
      var value = new proto.api.commons.org.NaturalLanguageComplianceScrub;
      reader.readMessage(value,proto.api.commons.org.NaturalLanguageComplianceScrub.deserializeBinaryFromReader);
      msg.setNaturalComplianceScrub(value);
      break;
    case 26:
      var value = new proto.api.commons.org.NaturalLanguageComplianceMetadata;
      reader.readMessage(value,proto.api.commons.org.NaturalLanguageComplianceMetadata.deserializeBinaryFromReader);
      msg.setNaturalLanguageComplianceMetadata(value);
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
proto.api.commons.org.TransferCallSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TransferCallSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TransferCallSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableTransfer();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getHandOffTypes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.TransferCallSettings.HandOffTypes.serializeBinaryToWriter
    );
  }
  f = message.getRecordingStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTransferTypes();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.org.TransferCallSettings.TransferTypes.serializeBinaryToWriter
    );
  }
  f = message.getDisplayTransferNumberPhoneBook();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getEnableTransferNumberEditing();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDefaultTransferNumber();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStartRecordingNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getStopRecordingNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getTransferNumberCountry();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getDisplayTransferCountrySelection();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDisplayCallerIdPhoneBook();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getEnableCallerIdEditing();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getDefaultCallerId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.api.commons.org.TransferCallSettings.DefaultCallerId.serializeBinaryToWriter
    );
  }
  f = message.getCallerIdCountry();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getDisplayCallerIdCountrySelection();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getDisplayAgentTransferFiltering();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getDefaultAgentTransferFiltering();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getEnableHuntGroupFiltering();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getRequeueQueueConfig();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getRequeueTransferDisallowed();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.serializeBinaryToWriter
    );
  }
  f = message.getPbxTransferDisallowed();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.serializeBinaryToWriter
    );
  }
  f = message.getEnableScrubOverride();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getEnableWhitelist();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getNaturalComplianceScrub();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.api.commons.org.NaturalLanguageComplianceScrub.serializeBinaryToWriter
    );
  }
  f = message.getNaturalLanguageComplianceMetadata();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.api.commons.org.NaturalLanguageComplianceMetadata.serializeBinaryToWriter
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
proto.api.commons.org.TransferCallSettings.HandOffTypes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TransferCallSettings.HandOffTypes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TransferCallSettings.HandOffTypes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.toObject = function(includeInstance, msg) {
  var f, obj = {
enableConference: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
enableWarm: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
enableCold: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TransferCallSettings.HandOffTypes}
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TransferCallSettings.HandOffTypes;
  return proto.api.commons.org.TransferCallSettings.HandOffTypes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TransferCallSettings.HandOffTypes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TransferCallSettings.HandOffTypes}
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableConference(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableWarm(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCold(value);
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
proto.api.commons.org.TransferCallSettings.HandOffTypes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TransferCallSettings.HandOffTypes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TransferCallSettings.HandOffTypes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableConference();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEnableWarm();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEnableCold();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool enable_conference = 1;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.prototype.getEnableConference = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.HandOffTypes} returns this
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.prototype.setEnableConference = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool enable_warm = 2;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.prototype.getEnableWarm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.HandOffTypes} returns this
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.prototype.setEnableWarm = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool enable_cold = 3;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.prototype.getEnableCold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.HandOffTypes} returns this
 */
proto.api.commons.org.TransferCallSettings.HandOffTypes.prototype.setEnableCold = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TransferCallSettings.TransferTypes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TransferCallSettings.TransferTypes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.toObject = function(includeInstance, msg) {
  var f, obj = {
enableAgentTransfer: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
enableOpenTransfer: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
enableRequeueTransfer: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
enablePbxExtensionTransfer: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
enableVoicemailTransfer: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TransferCallSettings.TransferTypes}
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TransferCallSettings.TransferTypes;
  return proto.api.commons.org.TransferCallSettings.TransferTypes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TransferCallSettings.TransferTypes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TransferCallSettings.TransferTypes}
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAgentTransfer(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableOpenTransfer(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableRequeueTransfer(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablePbxExtensionTransfer(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableVoicemailTransfer(value);
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
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TransferCallSettings.TransferTypes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TransferCallSettings.TransferTypes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableAgentTransfer();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEnableOpenTransfer();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEnableRequeueTransfer();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEnablePbxExtensionTransfer();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getEnableVoicemailTransfer();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool enable_agent_transfer = 1;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.getEnableAgentTransfer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.TransferTypes} returns this
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.setEnableAgentTransfer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool enable_open_transfer = 2;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.getEnableOpenTransfer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.TransferTypes} returns this
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.setEnableOpenTransfer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool enable_requeue_transfer = 3;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.getEnableRequeueTransfer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.TransferTypes} returns this
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.setEnableRequeueTransfer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool enable_pbx_extension_transfer = 4;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.getEnablePbxExtensionTransfer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.TransferTypes} returns this
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.setEnablePbxExtensionTransfer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool enable_voicemail_transfer = 5;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.getEnableVoicemailTransfer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.TransferTypes} returns this
 */
proto.api.commons.org.TransferCallSettings.TransferTypes.prototype.setEnableVoicemailTransfer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.toObject = function(includeInstance, msg) {
  var f, obj = {
enable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
agentSkillSidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
huntGroupSidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed}
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed;
  return proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed}
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAgentSkillSids(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addHuntGroupSids(values[i]);
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
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAgentSkillSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
  f = message.getHuntGroupSidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
};


/**
 * optional bool enable = 1;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated int64 agent_skill_sids = 2;
 * @return {!Array<number>}
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.getAgentSkillSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.setAgentSkillSidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.addAgentSkillSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.clearAgentSkillSidsList = function() {
  return this.setAgentSkillSidsList([]);
};


/**
 * repeated int64 hunt_group_sids = 3;
 * @return {!Array<number>}
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.getHuntGroupSidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.setHuntGroupSidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.addHuntGroupSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed.prototype.clearHuntGroupSidsList = function() {
  return this.setHuntGroupSidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.toObject = function(includeInstance, msg) {
  var f, obj = {
enable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
extensionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed}
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed;
  return proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed}
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addExtensions(value);
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
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool enable = 1;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string extensions = 2;
 * @return {!Array<string>}
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.prototype.getExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.prototype.setExtensionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.prototype.addExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed} returns this
 */
proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
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
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
usage: jspb.Message.getFieldWithDefault(msg, 1, 0),
customName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration}
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration;
  return proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration}
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.RequeueTransferQueueConfig} */ (reader.readEnum());
      msg.setUsage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomName(value);
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
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustomName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.RequeueTransferQueueConfig usage = 1;
 * @return {!proto.api.commons.RequeueTransferQueueConfig}
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.prototype.getUsage = function() {
  return /** @type {!proto.api.commons.RequeueTransferQueueConfig} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.RequeueTransferQueueConfig} value
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.prototype.setUsage = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string custom_name = 2;
 * @return {string}
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.prototype.getCustomName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration} returns this
 */
proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration.prototype.setCustomName = function(value) {
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
proto.api.commons.org.TransferCallSettings.DefaultCallerId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TransferCallSettings.DefaultCallerId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TransferCallSettings.DefaultCallerId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId.toObject = function(includeInstance, msg) {
  var f, obj = {
usage: jspb.Message.getFieldWithDefault(msg, 1, 0),
customCallerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TransferCallSettings.DefaultCallerId}
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TransferCallSettings.DefaultCallerId;
  return proto.api.commons.org.TransferCallSettings.DefaultCallerId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TransferCallSettings.DefaultCallerId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TransferCallSettings.DefaultCallerId}
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.DefaultTransferCallerId} */ (reader.readEnum());
      msg.setUsage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomCallerId(value);
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
proto.api.commons.org.TransferCallSettings.DefaultCallerId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TransferCallSettings.DefaultCallerId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TransferCallSettings.DefaultCallerId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustomCallerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.DefaultTransferCallerId usage = 1;
 * @return {!proto.api.commons.DefaultTransferCallerId}
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId.prototype.getUsage = function() {
  return /** @type {!proto.api.commons.DefaultTransferCallerId} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.DefaultTransferCallerId} value
 * @return {!proto.api.commons.org.TransferCallSettings.DefaultCallerId} returns this
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId.prototype.setUsage = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string custom_caller_id = 2;
 * @return {string}
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId.prototype.getCustomCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.TransferCallSettings.DefaultCallerId} returns this
 */
proto.api.commons.org.TransferCallSettings.DefaultCallerId.prototype.setCustomCallerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool enable_transfer = 1;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getEnableTransfer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setEnableTransfer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional HandOffTypes hand_off_types = 2;
 * @return {?proto.api.commons.org.TransferCallSettings.HandOffTypes}
 */
proto.api.commons.org.TransferCallSettings.prototype.getHandOffTypes = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings.HandOffTypes} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TransferCallSettings.HandOffTypes, 2));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings.HandOffTypes|undefined} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
*/
proto.api.commons.org.TransferCallSettings.prototype.setHandOffTypes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearHandOffTypes = function() {
  return this.setHandOffTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.hasHandOffTypes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional api.commons.TransferRecordingStatus recording_status = 3;
 * @return {!proto.api.commons.TransferRecordingStatus}
 */
proto.api.commons.org.TransferCallSettings.prototype.getRecordingStatus = function() {
  return /** @type {!proto.api.commons.TransferRecordingStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.TransferRecordingStatus} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setRecordingStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional TransferTypes transfer_types = 4;
 * @return {?proto.api.commons.org.TransferCallSettings.TransferTypes}
 */
proto.api.commons.org.TransferCallSettings.prototype.getTransferTypes = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings.TransferTypes} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TransferCallSettings.TransferTypes, 4));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings.TransferTypes|undefined} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
*/
proto.api.commons.org.TransferCallSettings.prototype.setTransferTypes = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearTransferTypes = function() {
  return this.setTransferTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.hasTransferTypes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool display_transfer_number_phone_book = 5;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getDisplayTransferNumberPhoneBook = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setDisplayTransferNumberPhoneBook = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool enable_transfer_number_editing = 6;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getEnableTransferNumberEditing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setEnableTransferNumberEditing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string default_transfer_number = 7;
 * @return {string}
 */
proto.api.commons.org.TransferCallSettings.prototype.getDefaultTransferNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setDefaultTransferNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string start_recording_numbers = 8;
 * @return {!Array<string>}
 */
proto.api.commons.org.TransferCallSettings.prototype.getStartRecordingNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setStartRecordingNumbersList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.addStartRecordingNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearStartRecordingNumbersList = function() {
  return this.setStartRecordingNumbersList([]);
};


/**
 * repeated string stop_recording_numbers = 9;
 * @return {!Array<string>}
 */
proto.api.commons.org.TransferCallSettings.prototype.getStopRecordingNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setStopRecordingNumbersList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.addStopRecordingNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearStopRecordingNumbersList = function() {
  return this.setStopRecordingNumbersList([]);
};


/**
 * optional api.commons.Country transfer_number_country = 10;
 * @return {!proto.api.commons.Country}
 */
proto.api.commons.org.TransferCallSettings.prototype.getTransferNumberCountry = function() {
  return /** @type {!proto.api.commons.Country} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.Country} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setTransferNumberCountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional bool display_transfer_country_selection = 11;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getDisplayTransferCountrySelection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setDisplayTransferCountrySelection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool display_caller_id_phone_book = 12;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getDisplayCallerIdPhoneBook = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setDisplayCallerIdPhoneBook = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool enable_caller_id_editing = 13;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getEnableCallerIdEditing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setEnableCallerIdEditing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional DefaultCallerId default_caller_id = 14;
 * @return {?proto.api.commons.org.TransferCallSettings.DefaultCallerId}
 */
proto.api.commons.org.TransferCallSettings.prototype.getDefaultCallerId = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings.DefaultCallerId} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TransferCallSettings.DefaultCallerId, 14));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings.DefaultCallerId|undefined} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
*/
proto.api.commons.org.TransferCallSettings.prototype.setDefaultCallerId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearDefaultCallerId = function() {
  return this.setDefaultCallerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.hasDefaultCallerId = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional api.commons.Country caller_id_country = 15;
 * @return {!proto.api.commons.Country}
 */
proto.api.commons.org.TransferCallSettings.prototype.getCallerIdCountry = function() {
  return /** @type {!proto.api.commons.Country} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.api.commons.Country} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setCallerIdCountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional bool display_caller_id_country_selection = 16;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getDisplayCallerIdCountrySelection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setDisplayCallerIdCountrySelection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool display_agent_transfer_filtering = 17;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getDisplayAgentTransferFiltering = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setDisplayAgentTransferFiltering = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool default_agent_transfer_filtering = 18;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getDefaultAgentTransferFiltering = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setDefaultAgentTransferFiltering = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool enable_hunt_group_filtering = 19;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getEnableHuntGroupFiltering = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setEnableHuntGroupFiltering = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional RequeueQueueConfiguration requeue_queue_config = 20;
 * @return {?proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration}
 */
proto.api.commons.org.TransferCallSettings.prototype.getRequeueQueueConfig = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration, 20));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings.RequeueQueueConfiguration|undefined} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
*/
proto.api.commons.org.TransferCallSettings.prototype.setRequeueQueueConfig = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearRequeueQueueConfig = function() {
  return this.setRequeueQueueConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.hasRequeueQueueConfig = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional RequeueTransferDisallowed requeue_transfer_disallowed = 21;
 * @return {?proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed}
 */
proto.api.commons.org.TransferCallSettings.prototype.getRequeueTransferDisallowed = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed, 21));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings.RequeueTransferDisallowed|undefined} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
*/
proto.api.commons.org.TransferCallSettings.prototype.setRequeueTransferDisallowed = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearRequeueTransferDisallowed = function() {
  return this.setRequeueTransferDisallowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.hasRequeueTransferDisallowed = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional PbxTransferDisallowed pbx_transfer_disallowed = 22;
 * @return {?proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed}
 */
proto.api.commons.org.TransferCallSettings.prototype.getPbxTransferDisallowed = function() {
  return /** @type{?proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed, 22));
};


/**
 * @param {?proto.api.commons.org.TransferCallSettings.PbxTransferDisallowed|undefined} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
*/
proto.api.commons.org.TransferCallSettings.prototype.setPbxTransferDisallowed = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearPbxTransferDisallowed = function() {
  return this.setPbxTransferDisallowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.hasPbxTransferDisallowed = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool enable_scrub_override = 23;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getEnableScrubOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setEnableScrubOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional bool enable_whitelist = 24;
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.getEnableWhitelist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.setEnableWhitelist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional NaturalLanguageComplianceScrub natural_compliance_scrub = 25;
 * @return {?proto.api.commons.org.NaturalLanguageComplianceScrub}
 */
proto.api.commons.org.TransferCallSettings.prototype.getNaturalComplianceScrub = function() {
  return /** @type{?proto.api.commons.org.NaturalLanguageComplianceScrub} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.NaturalLanguageComplianceScrub, 25));
};


/**
 * @param {?proto.api.commons.org.NaturalLanguageComplianceScrub|undefined} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
*/
proto.api.commons.org.TransferCallSettings.prototype.setNaturalComplianceScrub = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearNaturalComplianceScrub = function() {
  return this.setNaturalComplianceScrub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.hasNaturalComplianceScrub = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional NaturalLanguageComplianceMetadata natural_language_compliance_metadata = 26;
 * @return {?proto.api.commons.org.NaturalLanguageComplianceMetadata}
 */
proto.api.commons.org.TransferCallSettings.prototype.getNaturalLanguageComplianceMetadata = function() {
  return /** @type{?proto.api.commons.org.NaturalLanguageComplianceMetadata} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.NaturalLanguageComplianceMetadata, 26));
};


/**
 * @param {?proto.api.commons.org.NaturalLanguageComplianceMetadata|undefined} value
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
*/
proto.api.commons.org.TransferCallSettings.prototype.setNaturalLanguageComplianceMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.TransferCallSettings} returns this
 */
proto.api.commons.org.TransferCallSettings.prototype.clearNaturalLanguageComplianceMetadata = function() {
  return this.setNaturalLanguageComplianceMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TransferCallSettings.prototype.hasNaturalLanguageComplianceMetadata = function() {
  return jspb.Message.getField(this, 26) != null;
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
proto.api.commons.org.NumberHistorySettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.NumberHistorySettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.NumberHistorySettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.NumberHistorySettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enableSearch: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
enableReportDownload: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
enableRecordingsDownload: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
enableAgentResponseEditing: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.NumberHistorySettings}
 */
proto.api.commons.org.NumberHistorySettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.NumberHistorySettings;
  return proto.api.commons.org.NumberHistorySettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.NumberHistorySettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.NumberHistorySettings}
 */
proto.api.commons.org.NumberHistorySettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableSearch(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableReportDownload(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableRecordingsDownload(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAgentResponseEditing(value);
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
proto.api.commons.org.NumberHistorySettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.NumberHistorySettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.NumberHistorySettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.NumberHistorySettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableSearch();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEnableReportDownload();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEnableRecordingsDownload();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEnableAgentResponseEditing();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool enable_search = 1;
 * @return {boolean}
 */
proto.api.commons.org.NumberHistorySettings.prototype.getEnableSearch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.NumberHistorySettings} returns this
 */
proto.api.commons.org.NumberHistorySettings.prototype.setEnableSearch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool enable_report_download = 2;
 * @return {boolean}
 */
proto.api.commons.org.NumberHistorySettings.prototype.getEnableReportDownload = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.NumberHistorySettings} returns this
 */
proto.api.commons.org.NumberHistorySettings.prototype.setEnableReportDownload = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool enable_recordings_download = 3;
 * @return {boolean}
 */
proto.api.commons.org.NumberHistorySettings.prototype.getEnableRecordingsDownload = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.NumberHistorySettings} returns this
 */
proto.api.commons.org.NumberHistorySettings.prototype.setEnableRecordingsDownload = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool enable_agent_response_editing = 4;
 * @return {boolean}
 */
proto.api.commons.org.NumberHistorySettings.prototype.getEnableAgentResponseEditing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.NumberHistorySettings} returns this
 */
proto.api.commons.org.NumberHistorySettings.prototype.setEnableAgentResponseEditing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.AgentResponseAutoRuleSet.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AgentResponseAutoRuleSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AgentResponseAutoRuleSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentResponseAutoRuleSet.toObject = function(includeInstance, msg) {
  var f, obj = {
rulesetSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
country: jspb.Message.getFieldWithDefault(msg, 4, 0),
responsesList: jspb.Message.toObjectList(msg.getResponsesList(),
    proto.api.commons.org.AutoResponseChoice.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AgentResponseAutoRuleSet;
  return proto.api.commons.org.AgentResponseAutoRuleSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AgentResponseAutoRuleSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRulesetSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.Country} */ (reader.readEnum());
      msg.setCountry(value);
      break;
    case 5:
      var value = new proto.api.commons.org.AutoResponseChoice;
      reader.readMessage(value,proto.api.commons.org.AutoResponseChoice.deserializeBinaryFromReader);
      msg.addResponses(value);
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
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AgentResponseAutoRuleSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AgentResponseAutoRuleSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentResponseAutoRuleSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesetSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getCountry();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.commons.org.AutoResponseChoice.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ruleset_sid = 1;
 * @return {number}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.getRulesetSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet} returns this
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.setRulesetSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet} returns this
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet} returns this
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.Country country = 4;
 * @return {!proto.api.commons.Country}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.getCountry = function() {
  return /** @type {!proto.api.commons.Country} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.Country} value
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet} returns this
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.setCountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated AutoResponseChoice responses = 5;
 * @return {!Array<!proto.api.commons.org.AutoResponseChoice>}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.getResponsesList = function() {
  return /** @type{!Array<!proto.api.commons.org.AutoResponseChoice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.AutoResponseChoice, 5));
};


/**
 * @param {!Array<!proto.api.commons.org.AutoResponseChoice>} value
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet} returns this
*/
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.setResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.commons.org.AutoResponseChoice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AutoResponseChoice}
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.addResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.commons.org.AutoResponseChoice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AgentResponseAutoRuleSet} returns this
 */
proto.api.commons.org.AgentResponseAutoRuleSet.prototype.clearResponsesList = function() {
  return this.setResponsesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.AutoResponseChoice.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.AutoResponseChoice.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AutoResponseChoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AutoResponseChoice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AutoResponseChoice.toObject = function(includeInstance, msg) {
  var f, obj = {
agentCallResponse: jspb.Message.getFieldWithDefault(msg, 1, ""),
comparitorsList: jspb.Message.toObjectList(msg.getComparitorsList(),
    proto.api.commons.org.AgentResponseComparitors.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.AutoResponseChoice}
 */
proto.api.commons.org.AutoResponseChoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AutoResponseChoice;
  return proto.api.commons.org.AutoResponseChoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AutoResponseChoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AutoResponseChoice}
 */
proto.api.commons.org.AutoResponseChoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentCallResponse(value);
      break;
    case 2:
      var value = new proto.api.commons.org.AgentResponseComparitors;
      reader.readMessage(value,proto.api.commons.org.AgentResponseComparitors.deserializeBinaryFromReader);
      msg.addComparitors(value);
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
proto.api.commons.org.AutoResponseChoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AutoResponseChoice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AutoResponseChoice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AutoResponseChoice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentCallResponse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getComparitorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.org.AgentResponseComparitors.serializeBinaryToWriter
    );
  }
};


/**
 * optional string agent_call_response = 1;
 * @return {string}
 */
proto.api.commons.org.AutoResponseChoice.prototype.getAgentCallResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AutoResponseChoice} returns this
 */
proto.api.commons.org.AutoResponseChoice.prototype.setAgentCallResponse = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated AgentResponseComparitors comparitors = 2;
 * @return {!Array<!proto.api.commons.org.AgentResponseComparitors>}
 */
proto.api.commons.org.AutoResponseChoice.prototype.getComparitorsList = function() {
  return /** @type{!Array<!proto.api.commons.org.AgentResponseComparitors>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.AgentResponseComparitors, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.AgentResponseComparitors>} value
 * @return {!proto.api.commons.org.AutoResponseChoice} returns this
*/
proto.api.commons.org.AutoResponseChoice.prototype.setComparitorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.AgentResponseComparitors=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.AgentResponseComparitors}
 */
proto.api.commons.org.AutoResponseChoice.prototype.addComparitors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.AgentResponseComparitors, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.AutoResponseChoice} returns this
 */
proto.api.commons.org.AutoResponseChoice.prototype.clearComparitorsList = function() {
  return this.setComparitorsList([]);
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
proto.api.commons.org.AgentResponseComparitors.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AgentResponseComparitors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AgentResponseComparitors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentResponseComparitors.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFieldWithDefault(msg, 1, ""),
expiration: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.AgentResponseComparitors}
 */
proto.api.commons.org.AgentResponseComparitors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AgentResponseComparitors;
  return proto.api.commons.org.AgentResponseComparitors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AgentResponseComparitors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AgentResponseComparitors}
 */
proto.api.commons.org.AgentResponseComparitors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiration(value);
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
proto.api.commons.org.AgentResponseComparitors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AgentResponseComparitors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AgentResponseComparitors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentResponseComparitors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpiration();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.api.commons.org.AgentResponseComparitors.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AgentResponseComparitors} returns this
 */
proto.api.commons.org.AgentResponseComparitors.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 expiration = 2;
 * @return {number}
 */
proto.api.commons.org.AgentResponseComparitors.prototype.getExpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.AgentResponseComparitors} returns this
 */
proto.api.commons.org.AgentResponseComparitors.prototype.setExpiration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.ClientInfoDisplayTemplate.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ClientInfoDisplayTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ClientInfoDisplayTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ClientInfoDisplayTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
templateSid: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
displayAllFields: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
dialedNumberFieldStyle: (f = msg.getDialedNumberFieldStyle()) && proto.api.commons.org.DialedNumberFieldStyle.toObject(includeInstance, f),
contactFieldStylesList: jspb.Message.toObjectList(msg.getContactFieldStylesList(),
    proto.api.commons.org.ContactFieldStyle.toObject, includeInstance),
templateCategory: jspb.Message.getFieldWithDefault(msg, 7, 0),
clientInfoDisplayTemplateSid: jspb.Message.getFieldWithDefault(msg, 8, 0),
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ClientInfoDisplayTemplate;
  return proto.api.commons.org.ClientInfoDisplayTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ClientInfoDisplayTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayAllFields(value);
      break;
    case 5:
      var value = new proto.api.commons.org.DialedNumberFieldStyle;
      reader.readMessage(value,proto.api.commons.org.DialedNumberFieldStyle.deserializeBinaryFromReader);
      msg.setDialedNumberFieldStyle(value);
      break;
    case 6:
      var value = new proto.api.commons.org.ContactFieldStyle;
      reader.readMessage(value,proto.api.commons.org.ContactFieldStyle.deserializeBinaryFromReader);
      msg.addContactFieldStyles(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.org.TemplateCategory} */ (reader.readEnum());
      msg.setTemplateCategory(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClientInfoDisplayTemplateSid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ClientInfoDisplayTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ClientInfoDisplayTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ClientInfoDisplayTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplateSid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getDisplayAllFields();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDialedNumberFieldStyle();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.org.DialedNumberFieldStyle.serializeBinaryToWriter
    );
  }
  f = message.getContactFieldStylesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.commons.org.ContactFieldStyle.serializeBinaryToWriter
    );
  }
  f = message.getTemplateCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getClientInfoDisplayTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional string template_sid = 1;
 * @return {string}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getTemplateSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setTemplateSid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool display_all_fields = 4;
 * @return {boolean}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getDisplayAllFields = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setDisplayAllFields = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional DialedNumberFieldStyle dialed_number_field_style = 5;
 * @return {?proto.api.commons.org.DialedNumberFieldStyle}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getDialedNumberFieldStyle = function() {
  return /** @type{?proto.api.commons.org.DialedNumberFieldStyle} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.DialedNumberFieldStyle, 5));
};


/**
 * @param {?proto.api.commons.org.DialedNumberFieldStyle|undefined} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
*/
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setDialedNumberFieldStyle = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.clearDialedNumberFieldStyle = function() {
  return this.setDialedNumberFieldStyle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.hasDialedNumberFieldStyle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated ContactFieldStyle contact_field_styles = 6;
 * @return {!Array<!proto.api.commons.org.ContactFieldStyle>}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getContactFieldStylesList = function() {
  return /** @type{!Array<!proto.api.commons.org.ContactFieldStyle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.ContactFieldStyle, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.ContactFieldStyle>} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
*/
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setContactFieldStylesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.ContactFieldStyle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.ContactFieldStyle}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.addContactFieldStyles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.ContactFieldStyle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.clearContactFieldStylesList = function() {
  return this.setContactFieldStylesList([]);
};


/**
 * optional TemplateCategory template_category = 7;
 * @return {!proto.api.commons.org.TemplateCategory}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getTemplateCategory = function() {
  return /** @type {!proto.api.commons.org.TemplateCategory} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.org.TemplateCategory} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setTemplateCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional int64 client_info_display_template_sid = 8;
 * @return {number}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getClientInfoDisplayTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setClientInfoDisplayTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 hunt_group_sid = 9;
 * @return {number}
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ClientInfoDisplayTemplate} returns this
 */
proto.api.commons.org.ClientInfoDisplayTemplate.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
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
proto.api.commons.org.FieldStyle.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.FieldStyle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.FieldStyle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.FieldStyle.toObject = function(includeInstance, msg) {
  var f, obj = {
textColor: jspb.Message.getFieldWithDefault(msg, 1, ""),
backgroundColor: jspb.Message.getFieldWithDefault(msg, 2, ""),
allowAgentCopy: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.FieldStyle}
 */
proto.api.commons.org.FieldStyle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.FieldStyle;
  return proto.api.commons.org.FieldStyle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.FieldStyle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.FieldStyle}
 */
proto.api.commons.org.FieldStyle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextColor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgroundColor(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowAgentCopy(value);
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
proto.api.commons.org.FieldStyle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.FieldStyle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.FieldStyle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.FieldStyle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextColor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBackgroundColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowAgentCopy();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string text_color = 1;
 * @return {string}
 */
proto.api.commons.org.FieldStyle.prototype.getTextColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.FieldStyle} returns this
 */
proto.api.commons.org.FieldStyle.prototype.setTextColor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string background_color = 2;
 * @return {string}
 */
proto.api.commons.org.FieldStyle.prototype.getBackgroundColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.FieldStyle} returns this
 */
proto.api.commons.org.FieldStyle.prototype.setBackgroundColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_agent_copy = 3;
 * @return {boolean}
 */
proto.api.commons.org.FieldStyle.prototype.getAllowAgentCopy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.FieldStyle} returns this
 */
proto.api.commons.org.FieldStyle.prototype.setAllowAgentCopy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.api.commons.org.ContactFieldStyle.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ContactFieldStyle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ContactFieldStyle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ContactFieldStyle.toObject = function(includeInstance, msg) {
  var f, obj = {
descriptionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
fieldStyle: (f = msg.getFieldStyle()) && proto.api.commons.org.FieldStyle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ContactFieldStyle}
 */
proto.api.commons.org.ContactFieldStyle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ContactFieldStyle;
  return proto.api.commons.org.ContactFieldStyle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ContactFieldStyle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ContactFieldStyle}
 */
proto.api.commons.org.ContactFieldStyle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDescriptionId(value);
      break;
    case 2:
      var value = new proto.api.commons.org.FieldStyle;
      reader.readMessage(value,proto.api.commons.org.FieldStyle.deserializeBinaryFromReader);
      msg.setFieldStyle(value);
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
proto.api.commons.org.ContactFieldStyle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ContactFieldStyle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ContactFieldStyle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ContactFieldStyle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescriptionId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFieldStyle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.FieldStyle.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 description_id = 1;
 * @return {number}
 */
proto.api.commons.org.ContactFieldStyle.prototype.getDescriptionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ContactFieldStyle} returns this
 */
proto.api.commons.org.ContactFieldStyle.prototype.setDescriptionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional FieldStyle field_style = 2;
 * @return {?proto.api.commons.org.FieldStyle}
 */
proto.api.commons.org.ContactFieldStyle.prototype.getFieldStyle = function() {
  return /** @type{?proto.api.commons.org.FieldStyle} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FieldStyle, 2));
};


/**
 * @param {?proto.api.commons.org.FieldStyle|undefined} value
 * @return {!proto.api.commons.org.ContactFieldStyle} returns this
*/
proto.api.commons.org.ContactFieldStyle.prototype.setFieldStyle = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ContactFieldStyle} returns this
 */
proto.api.commons.org.ContactFieldStyle.prototype.clearFieldStyle = function() {
  return this.setFieldStyle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ContactFieldStyle.prototype.hasFieldStyle = function() {
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
proto.api.commons.org.DialedNumberFieldStyle.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DialedNumberFieldStyle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DialedNumberFieldStyle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DialedNumberFieldStyle.toObject = function(includeInstance, msg) {
  var f, obj = {
fieldStyle: (f = msg.getFieldStyle()) && proto.api.commons.org.FieldStyle.toObject(includeInstance, f),
displayToAgent: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.DialedNumberFieldStyle}
 */
proto.api.commons.org.DialedNumberFieldStyle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DialedNumberFieldStyle;
  return proto.api.commons.org.DialedNumberFieldStyle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DialedNumberFieldStyle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DialedNumberFieldStyle}
 */
proto.api.commons.org.DialedNumberFieldStyle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.FieldStyle;
      reader.readMessage(value,proto.api.commons.org.FieldStyle.deserializeBinaryFromReader);
      msg.setFieldStyle(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayToAgent(value);
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
proto.api.commons.org.DialedNumberFieldStyle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DialedNumberFieldStyle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DialedNumberFieldStyle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DialedNumberFieldStyle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldStyle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.FieldStyle.serializeBinaryToWriter
    );
  }
  f = message.getDisplayToAgent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional FieldStyle field_style = 1;
 * @return {?proto.api.commons.org.FieldStyle}
 */
proto.api.commons.org.DialedNumberFieldStyle.prototype.getFieldStyle = function() {
  return /** @type{?proto.api.commons.org.FieldStyle} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.FieldStyle, 1));
};


/**
 * @param {?proto.api.commons.org.FieldStyle|undefined} value
 * @return {!proto.api.commons.org.DialedNumberFieldStyle} returns this
*/
proto.api.commons.org.DialedNumberFieldStyle.prototype.setFieldStyle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.DialedNumberFieldStyle} returns this
 */
proto.api.commons.org.DialedNumberFieldStyle.prototype.clearFieldStyle = function() {
  return this.setFieldStyle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.DialedNumberFieldStyle.prototype.hasFieldStyle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool display_to_agent = 2;
 * @return {boolean}
 */
proto.api.commons.org.DialedNumberFieldStyle.prototype.getDisplayToAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.DialedNumberFieldStyle} returns this
 */
proto.api.commons.org.DialedNumberFieldStyle.prototype.setDisplayToAgent = function(value) {
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
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupWithClientInfoTemplateData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.toObject = function(includeInstance, msg) {
  var f, obj = {
huntGroup: (f = msg.getHuntGroup()) && proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.toObject(includeInstance, f),
template: (f = msg.getTemplate()) && proto.api.commons.org.ClientInfoDisplayTemplate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupWithClientInfoTemplateData;
  return proto.api.commons.org.HuntGroupWithClientInfoTemplateData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup;
      reader.readMessage(value,proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.deserializeBinaryFromReader);
      msg.setHuntGroup(value);
      break;
    case 2:
      var value = new proto.api.commons.org.ClientInfoDisplayTemplate;
      reader.readMessage(value,proto.api.commons.org.ClientInfoDisplayTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
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
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupWithClientInfoTemplateData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHuntGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.serializeBinaryToWriter
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.ClientInfoDisplayTemplate.serializeBinaryToWriter
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
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
clientSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
huntGroupName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup;
  return proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setHuntGroupSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHuntGroupName(value);
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
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHuntGroupName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 client_sid = 1;
 * @return {number}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.prototype.getClientSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup} returns this
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.prototype.setClientSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 hunt_group_sid = 2;
 * @return {number}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup} returns this
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string hunt_group_name = 3;
 * @return {string}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.prototype.getHuntGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup} returns this
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup.prototype.setHuntGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional HuntGroup hunt_group = 1;
 * @return {?proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.getHuntGroup = function() {
  return /** @type{?proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup, 1));
};


/**
 * @param {?proto.api.commons.org.HuntGroupWithClientInfoTemplateData.HuntGroup|undefined} value
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData} returns this
*/
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.setHuntGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData} returns this
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.clearHuntGroup = function() {
  return this.setHuntGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.hasHuntGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ClientInfoDisplayTemplate template = 2;
 * @return {?proto.api.commons.org.ClientInfoDisplayTemplate}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.getTemplate = function() {
  return /** @type{?proto.api.commons.org.ClientInfoDisplayTemplate} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ClientInfoDisplayTemplate, 2));
};


/**
 * @param {?proto.api.commons.org.ClientInfoDisplayTemplate|undefined} value
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData} returns this
*/
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.HuntGroupWithClientInfoTemplateData} returns this
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupWithClientInfoTemplateData.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.WebLink.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.WebLink.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.WebLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.WebLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.WebLink.toObject = function(includeInstance, msg) {
  var f, obj = {
webLinkSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
linkType: jspb.Message.getFieldWithDefault(msg, 4, 0),
order: jspb.Message.getFieldWithDefault(msg, 5, 0),
baseUrlList: jspb.Message.toObjectList(msg.getBaseUrlList(),
    proto.api.commons.org.WebLinkComponent.toObject, includeInstance),
parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.api.commons.org.WebLinkParameter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.WebLink}
 */
proto.api.commons.org.WebLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.WebLink;
  return proto.api.commons.org.WebLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.WebLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.WebLink}
 */
proto.api.commons.org.WebLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWebLinkSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.org.WebLinkType} */ (reader.readEnum());
      msg.setLinkType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 6:
      var value = new proto.api.commons.org.WebLinkComponent;
      reader.readMessage(value,proto.api.commons.org.WebLinkComponent.deserializeBinaryFromReader);
      msg.addBaseUrl(value);
      break;
    case 7:
      var value = new proto.api.commons.org.WebLinkParameter;
      reader.readMessage(value,proto.api.commons.org.WebLinkParameter.deserializeBinaryFromReader);
      msg.addParameters(value);
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
proto.api.commons.org.WebLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.WebLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.WebLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.WebLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebLinkSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getLinkType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBaseUrlList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.commons.org.WebLinkComponent.serializeBinaryToWriter
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.api.commons.org.WebLinkParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 web_link_sid = 1;
 * @return {number}
 */
proto.api.commons.org.WebLink.prototype.getWebLinkSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.WebLink} returns this
 */
proto.api.commons.org.WebLink.prototype.setWebLinkSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.org.WebLink.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.WebLink} returns this
 */
proto.api.commons.org.WebLink.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.org.WebLink.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.WebLink} returns this
 */
proto.api.commons.org.WebLink.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional WebLinkType link_type = 4;
 * @return {!proto.api.commons.org.WebLinkType}
 */
proto.api.commons.org.WebLink.prototype.getLinkType = function() {
  return /** @type {!proto.api.commons.org.WebLinkType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.org.WebLinkType} value
 * @return {!proto.api.commons.org.WebLink} returns this
 */
proto.api.commons.org.WebLink.prototype.setLinkType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 order = 5;
 * @return {number}
 */
proto.api.commons.org.WebLink.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.WebLink} returns this
 */
proto.api.commons.org.WebLink.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated WebLinkComponent base_url = 6;
 * @return {!Array<!proto.api.commons.org.WebLinkComponent>}
 */
proto.api.commons.org.WebLink.prototype.getBaseUrlList = function() {
  return /** @type{!Array<!proto.api.commons.org.WebLinkComponent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.WebLinkComponent, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.WebLinkComponent>} value
 * @return {!proto.api.commons.org.WebLink} returns this
*/
proto.api.commons.org.WebLink.prototype.setBaseUrlList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.WebLinkComponent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.WebLinkComponent}
 */
proto.api.commons.org.WebLink.prototype.addBaseUrl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.WebLinkComponent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.WebLink} returns this
 */
proto.api.commons.org.WebLink.prototype.clearBaseUrlList = function() {
  return this.setBaseUrlList([]);
};


/**
 * repeated WebLinkParameter parameters = 7;
 * @return {!Array<!proto.api.commons.org.WebLinkParameter>}
 */
proto.api.commons.org.WebLink.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.api.commons.org.WebLinkParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.WebLinkParameter, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.WebLinkParameter>} value
 * @return {!proto.api.commons.org.WebLink} returns this
*/
proto.api.commons.org.WebLink.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.WebLinkParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.WebLinkParameter}
 */
proto.api.commons.org.WebLink.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.WebLinkParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.WebLink} returns this
 */
proto.api.commons.org.WebLink.prototype.clearParametersList = function() {
  return this.setParametersList([]);
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
proto.api.commons.org.WebLinkComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.WebLinkComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.WebLinkComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.WebLinkComponent.toObject = function(includeInstance, msg) {
  var f, obj = {
keyType: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.api.commons.org.WebLinkComponent}
 */
proto.api.commons.org.WebLinkComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.WebLinkComponent;
  return proto.api.commons.org.WebLinkComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.WebLinkComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.WebLinkComponent}
 */
proto.api.commons.org.WebLinkComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.org.WebLinkComponentKeyType} */ (reader.readEnum());
      msg.setKeyType(value);
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
proto.api.commons.org.WebLinkComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.WebLinkComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.WebLinkComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.WebLinkComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyType();
  if (f !== 0.0) {
    writer.writeEnum(
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
 * optional WebLinkComponentKeyType key_type = 1;
 * @return {!proto.api.commons.org.WebLinkComponentKeyType}
 */
proto.api.commons.org.WebLinkComponent.prototype.getKeyType = function() {
  return /** @type {!proto.api.commons.org.WebLinkComponentKeyType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.org.WebLinkComponentKeyType} value
 * @return {!proto.api.commons.org.WebLinkComponent} returns this
 */
proto.api.commons.org.WebLinkComponent.prototype.setKeyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.commons.org.WebLinkComponent.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.WebLinkComponent} returns this
 */
proto.api.commons.org.WebLinkComponent.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.WebLinkParameter.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.WebLinkParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.WebLinkParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.WebLinkParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.WebLinkParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
componentsList: jspb.Message.toObjectList(msg.getComponentsList(),
    proto.api.commons.org.WebLinkComponent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.WebLinkParameter}
 */
proto.api.commons.org.WebLinkParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.WebLinkParameter;
  return proto.api.commons.org.WebLinkParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.WebLinkParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.WebLinkParameter}
 */
proto.api.commons.org.WebLinkParameter.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.api.commons.org.WebLinkComponent;
      reader.readMessage(value,proto.api.commons.org.WebLinkComponent.deserializeBinaryFromReader);
      msg.addComponents(value);
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
proto.api.commons.org.WebLinkParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.WebLinkParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.WebLinkParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.WebLinkParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.org.WebLinkComponent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.api.commons.org.WebLinkParameter.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.WebLinkParameter} returns this
 */
proto.api.commons.org.WebLinkParameter.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated WebLinkComponent components = 2;
 * @return {!Array<!proto.api.commons.org.WebLinkComponent>}
 */
proto.api.commons.org.WebLinkParameter.prototype.getComponentsList = function() {
  return /** @type{!Array<!proto.api.commons.org.WebLinkComponent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.WebLinkComponent, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.WebLinkComponent>} value
 * @return {!proto.api.commons.org.WebLinkParameter} returns this
*/
proto.api.commons.org.WebLinkParameter.prototype.setComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.WebLinkComponent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.WebLinkComponent}
 */
proto.api.commons.org.WebLinkParameter.prototype.addComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.WebLinkComponent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.WebLinkParameter} returns this
 */
proto.api.commons.org.WebLinkParameter.prototype.clearComponentsList = function() {
  return this.setComponentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.DataDipConfig.repeatedFields_ = [4,5,6,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.DataDipConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DataDipConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DataDipConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
configName: jspb.Message.getFieldWithDefault(msg, 1, ""),
configType: jspb.Message.getFieldWithDefault(msg, 2, ""),
remoteUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
paramTypeValueTuplesList: jspb.Message.toObjectList(msg.getParamTypeValueTuplesList(),
    proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.toObject, includeInstance),
paramsList: jspb.Message.toObjectList(msg.getParamsList(),
    proto.api.commons.org.DataDipConfig.Param.toObject, includeInstance),
dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.api.commons.org.DataDipConfig.ReturnData.toObject, includeInstance),
requestMethod: jspb.Message.getFieldWithDefault(msg, 7, ""),
xmlClientPropertySid: jspb.Message.getFieldWithDefault(msg, 8, 0),
headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.api.commons.org.DataDipConfig.Header.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.DataDipConfig}
 */
proto.api.commons.org.DataDipConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DataDipConfig;
  return proto.api.commons.org.DataDipConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DataDipConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DataDipConfig}
 */
proto.api.commons.org.DataDipConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteUrl(value);
      break;
    case 4:
      var value = new proto.api.commons.org.DataDipConfig.ParamTypeValueTuple;
      reader.readMessage(value,proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.deserializeBinaryFromReader);
      msg.addParamTypeValueTuples(value);
      break;
    case 5:
      var value = new proto.api.commons.org.DataDipConfig.Param;
      reader.readMessage(value,proto.api.commons.org.DataDipConfig.Param.deserializeBinaryFromReader);
      msg.addParams(value);
      break;
    case 6:
      var value = new proto.api.commons.org.DataDipConfig.ReturnData;
      reader.readMessage(value,proto.api.commons.org.DataDipConfig.ReturnData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestMethod(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXmlClientPropertySid(value);
      break;
    case 9:
      var value = new proto.api.commons.org.DataDipConfig.Header;
      reader.readMessage(value,proto.api.commons.org.DataDipConfig.Header.deserializeBinaryFromReader);
      msg.addHeaders(value);
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
proto.api.commons.org.DataDipConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DataDipConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DataDipConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfigType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRemoteUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParamTypeValueTuplesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.serializeBinaryToWriter
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.commons.org.DataDipConfig.Param.serializeBinaryToWriter
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.commons.org.DataDipConfig.ReturnData.serializeBinaryToWriter
    );
  }
  f = message.getRequestMethod();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getXmlClientPropertySid();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.api.commons.org.DataDipConfig.Header.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.DataDipConfig.Param.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.DataDipConfig.Param.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DataDipConfig.Param.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DataDipConfig.Param} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.Param.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFieldWithDefault(msg, 2, ""),
paramType: jspb.Message.getFieldWithDefault(msg, 3, ""),
compositeValueList: jspb.Message.toObjectList(msg.getCompositeValueList(),
    proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.DataDipConfig.Param}
 */
proto.api.commons.org.DataDipConfig.Param.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DataDipConfig.Param;
  return proto.api.commons.org.DataDipConfig.Param.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DataDipConfig.Param} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DataDipConfig.Param}
 */
proto.api.commons.org.DataDipConfig.Param.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParamType(value);
      break;
    case 4:
      var value = new proto.api.commons.org.DataDipConfig.ParamTypeValueTuple;
      reader.readMessage(value,proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.deserializeBinaryFromReader);
      msg.addCompositeValue(value);
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
proto.api.commons.org.DataDipConfig.Param.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DataDipConfig.Param.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DataDipConfig.Param} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.Param.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
  f = message.getParamType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompositeValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.Param.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.Param} returns this
 */
proto.api.commons.org.DataDipConfig.Param.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.Param.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.Param} returns this
 */
proto.api.commons.org.DataDipConfig.Param.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string param_type = 3;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.Param.prototype.getParamType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.Param} returns this
 */
proto.api.commons.org.DataDipConfig.Param.prototype.setParamType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ParamTypeValueTuple composite_value = 4;
 * @return {!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>}
 */
proto.api.commons.org.DataDipConfig.Param.prototype.getCompositeValueList = function() {
  return /** @type{!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.DataDipConfig.ParamTypeValueTuple, 4));
};


/**
 * @param {!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>} value
 * @return {!proto.api.commons.org.DataDipConfig.Param} returns this
*/
proto.api.commons.org.DataDipConfig.Param.prototype.setCompositeValueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple}
 */
proto.api.commons.org.DataDipConfig.Param.prototype.addCompositeValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.commons.org.DataDipConfig.ParamTypeValueTuple, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.DataDipConfig.Param} returns this
 */
proto.api.commons.org.DataDipConfig.Param.prototype.clearCompositeValueList = function() {
  return this.setCompositeValueList([]);
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
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple}
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DataDipConfig.ParamTypeValueTuple;
  return proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple}
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
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
 * optional string key = 1;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple} returns this
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple} returns this
 */
proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.prototype.setValue = function(value) {
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
proto.api.commons.org.DataDipConfig.ReturnData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DataDipConfig.ReturnData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DataDipConfig.ReturnData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.ReturnData.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
accessType: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.DataDipConfig.ReturnData}
 */
proto.api.commons.org.DataDipConfig.ReturnData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DataDipConfig.ReturnData;
  return proto.api.commons.org.DataDipConfig.ReturnData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DataDipConfig.ReturnData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DataDipConfig.ReturnData}
 */
proto.api.commons.org.DataDipConfig.ReturnData.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAccessType(value);
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
proto.api.commons.org.DataDipConfig.ReturnData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DataDipConfig.ReturnData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DataDipConfig.ReturnData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.ReturnData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.ReturnData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.ReturnData} returns this
 */
proto.api.commons.org.DataDipConfig.ReturnData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string access_type = 2;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.ReturnData.prototype.getAccessType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.ReturnData} returns this
 */
proto.api.commons.org.DataDipConfig.ReturnData.prototype.setAccessType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.DataDipConfig.Header.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.DataDipConfig.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.DataDipConfig.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.DataDipConfig.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFieldWithDefault(msg, 2, ""),
headerType: jspb.Message.getFieldWithDefault(msg, 3, ""),
paramTypeValueTuplesList: jspb.Message.toObjectList(msg.getParamTypeValueTuplesList(),
    proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.DataDipConfig.Header}
 */
proto.api.commons.org.DataDipConfig.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.DataDipConfig.Header;
  return proto.api.commons.org.DataDipConfig.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.DataDipConfig.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.DataDipConfig.Header}
 */
proto.api.commons.org.DataDipConfig.Header.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeaderType(value);
      break;
    case 4:
      var value = new proto.api.commons.org.DataDipConfig.ParamTypeValueTuple;
      reader.readMessage(value,proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.deserializeBinaryFromReader);
      msg.addParamTypeValueTuples(value);
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
proto.api.commons.org.DataDipConfig.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.DataDipConfig.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.DataDipConfig.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.DataDipConfig.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
  f = message.getHeaderType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParamTypeValueTuplesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.commons.org.DataDipConfig.ParamTypeValueTuple.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.Header.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.Header} returns this
 */
proto.api.commons.org.DataDipConfig.Header.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.Header.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.Header} returns this
 */
proto.api.commons.org.DataDipConfig.Header.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string header_type = 3;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.Header.prototype.getHeaderType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig.Header} returns this
 */
proto.api.commons.org.DataDipConfig.Header.prototype.setHeaderType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ParamTypeValueTuple param_type_value_tuples = 4;
 * @return {!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>}
 */
proto.api.commons.org.DataDipConfig.Header.prototype.getParamTypeValueTuplesList = function() {
  return /** @type{!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.DataDipConfig.ParamTypeValueTuple, 4));
};


/**
 * @param {!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>} value
 * @return {!proto.api.commons.org.DataDipConfig.Header} returns this
*/
proto.api.commons.org.DataDipConfig.Header.prototype.setParamTypeValueTuplesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple}
 */
proto.api.commons.org.DataDipConfig.Header.prototype.addParamTypeValueTuples = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.commons.org.DataDipConfig.ParamTypeValueTuple, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.DataDipConfig.Header} returns this
 */
proto.api.commons.org.DataDipConfig.Header.prototype.clearParamTypeValueTuplesList = function() {
  return this.setParamTypeValueTuplesList([]);
};


/**
 * optional string config_name = 1;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.prototype.getConfigName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.setConfigName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string config_type = 2;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.prototype.getConfigType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.setConfigType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string remote_url = 3;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.prototype.getRemoteUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.setRemoteUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ParamTypeValueTuple param_type_value_tuples = 4;
 * @return {!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>}
 */
proto.api.commons.org.DataDipConfig.prototype.getParamTypeValueTuplesList = function() {
  return /** @type{!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.DataDipConfig.ParamTypeValueTuple, 4));
};


/**
 * @param {!Array<!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple>} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
*/
proto.api.commons.org.DataDipConfig.prototype.setParamTypeValueTuplesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DataDipConfig.ParamTypeValueTuple}
 */
proto.api.commons.org.DataDipConfig.prototype.addParamTypeValueTuples = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.commons.org.DataDipConfig.ParamTypeValueTuple, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.clearParamTypeValueTuplesList = function() {
  return this.setParamTypeValueTuplesList([]);
};


/**
 * repeated Param params = 5;
 * @return {!Array<!proto.api.commons.org.DataDipConfig.Param>}
 */
proto.api.commons.org.DataDipConfig.prototype.getParamsList = function() {
  return /** @type{!Array<!proto.api.commons.org.DataDipConfig.Param>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.DataDipConfig.Param, 5));
};


/**
 * @param {!Array<!proto.api.commons.org.DataDipConfig.Param>} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
*/
proto.api.commons.org.DataDipConfig.prototype.setParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.commons.org.DataDipConfig.Param=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DataDipConfig.Param}
 */
proto.api.commons.org.DataDipConfig.prototype.addParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.commons.org.DataDipConfig.Param, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * repeated ReturnData data = 6;
 * @return {!Array<!proto.api.commons.org.DataDipConfig.ReturnData>}
 */
proto.api.commons.org.DataDipConfig.prototype.getDataList = function() {
  return /** @type{!Array<!proto.api.commons.org.DataDipConfig.ReturnData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.DataDipConfig.ReturnData, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.DataDipConfig.ReturnData>} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
*/
proto.api.commons.org.DataDipConfig.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.DataDipConfig.ReturnData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DataDipConfig.ReturnData}
 */
proto.api.commons.org.DataDipConfig.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.DataDipConfig.ReturnData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional string request_method = 7;
 * @return {string}
 */
proto.api.commons.org.DataDipConfig.prototype.getRequestMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.setRequestMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 xml_client_property_sid = 8;
 * @return {number}
 */
proto.api.commons.org.DataDipConfig.prototype.getXmlClientPropertySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.setXmlClientPropertySid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated Header headers = 9;
 * @return {!Array<!proto.api.commons.org.DataDipConfig.Header>}
 */
proto.api.commons.org.DataDipConfig.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.api.commons.org.DataDipConfig.Header>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.DataDipConfig.Header, 9));
};


/**
 * @param {!Array<!proto.api.commons.org.DataDipConfig.Header>} value
 * @return {!proto.api.commons.org.DataDipConfig} returns this
*/
proto.api.commons.org.DataDipConfig.prototype.setHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.org.DataDipConfig.Header=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DataDipConfig.Header}
 */
proto.api.commons.org.DataDipConfig.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.org.DataDipConfig.Header, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.DataDipConfig} returns this
 */
proto.api.commons.org.DataDipConfig.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.IntegrationLink.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.IntegrationLink.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.IntegrationLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.IntegrationLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IntegrationLink.toObject = function(includeInstance, msg) {
  var f, obj = {
integrationId: jspb.Message.getFieldWithDefault(msg, 1, 0),
parameterSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
methodId: jspb.Message.getFieldWithDefault(msg, 5, 0),
order: jspb.Message.getFieldWithDefault(msg, 6, 0),
parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.api.commons.org.IntegrationLinkParameter.toObject, includeInstance),
configurationName: jspb.Message.getFieldWithDefault(msg, 8, ""),
huntGroupSid: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.IntegrationLink}
 */
proto.api.commons.org.IntegrationLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.IntegrationLink;
  return proto.api.commons.org.IntegrationLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.IntegrationLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.IntegrationLink}
 */
proto.api.commons.org.IntegrationLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntegrationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParameterSid(value);
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMethodId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 7:
      var value = new proto.api.commons.org.IntegrationLinkParameter;
      reader.readMessage(value,proto.api.commons.org.IntegrationLinkParameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigurationName(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHuntGroupSid(value);
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
proto.api.commons.org.IntegrationLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.IntegrationLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.IntegrationLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IntegrationLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntegrationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParameterSid();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getMethodId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.api.commons.org.IntegrationLinkParameter.serializeBinaryToWriter
    );
  }
  f = message.getConfigurationName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getHuntGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional int64 integration_id = 1;
 * @return {number}
 */
proto.api.commons.org.IntegrationLink.prototype.getIntegrationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.setIntegrationId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 parameter_sid = 2;
 * @return {number}
 */
proto.api.commons.org.IntegrationLink.prototype.getParameterSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.setParameterSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.commons.org.IntegrationLink.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.commons.org.IntegrationLink.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 method_id = 5;
 * @return {number}
 */
proto.api.commons.org.IntegrationLink.prototype.getMethodId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.setMethodId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 order = 6;
 * @return {number}
 */
proto.api.commons.org.IntegrationLink.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated IntegrationLinkParameter parameters = 7;
 * @return {!Array<!proto.api.commons.org.IntegrationLinkParameter>}
 */
proto.api.commons.org.IntegrationLink.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.api.commons.org.IntegrationLinkParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.IntegrationLinkParameter, 7));
};


/**
 * @param {!Array<!proto.api.commons.org.IntegrationLinkParameter>} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
*/
proto.api.commons.org.IntegrationLink.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.org.IntegrationLinkParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.IntegrationLinkParameter}
 */
proto.api.commons.org.IntegrationLink.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.org.IntegrationLinkParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * optional string configuration_name = 8;
 * @return {string}
 */
proto.api.commons.org.IntegrationLink.prototype.getConfigurationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.setConfigurationName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 hunt_group_sid = 9;
 * @return {number}
 */
proto.api.commons.org.IntegrationLink.prototype.getHuntGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.IntegrationLink} returns this
 */
proto.api.commons.org.IntegrationLink.prototype.setHuntGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.IntegrationLinkParameter.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.IntegrationLinkParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.IntegrationLinkParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.IntegrationLinkParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IntegrationLinkParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
subParametersList: jspb.Message.toObjectList(msg.getSubParametersList(),
    proto.api.commons.org.IntegrationLinkSubParameter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.IntegrationLinkParameter}
 */
proto.api.commons.org.IntegrationLinkParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.IntegrationLinkParameter;
  return proto.api.commons.org.IntegrationLinkParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.IntegrationLinkParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.IntegrationLinkParameter}
 */
proto.api.commons.org.IntegrationLinkParameter.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.api.commons.org.IntegrationLinkSubParameter;
      reader.readMessage(value,proto.api.commons.org.IntegrationLinkSubParameter.deserializeBinaryFromReader);
      msg.addSubParameters(value);
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
proto.api.commons.org.IntegrationLinkParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.IntegrationLinkParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.IntegrationLinkParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IntegrationLinkParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.org.IntegrationLinkSubParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.api.commons.org.IntegrationLinkParameter.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.IntegrationLinkParameter} returns this
 */
proto.api.commons.org.IntegrationLinkParameter.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated IntegrationLinkSubParameter sub_parameters = 2;
 * @return {!Array<!proto.api.commons.org.IntegrationLinkSubParameter>}
 */
proto.api.commons.org.IntegrationLinkParameter.prototype.getSubParametersList = function() {
  return /** @type{!Array<!proto.api.commons.org.IntegrationLinkSubParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.IntegrationLinkSubParameter, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.IntegrationLinkSubParameter>} value
 * @return {!proto.api.commons.org.IntegrationLinkParameter} returns this
*/
proto.api.commons.org.IntegrationLinkParameter.prototype.setSubParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.IntegrationLinkSubParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.IntegrationLinkSubParameter}
 */
proto.api.commons.org.IntegrationLinkParameter.prototype.addSubParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.IntegrationLinkSubParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.IntegrationLinkParameter} returns this
 */
proto.api.commons.org.IntegrationLinkParameter.prototype.clearSubParametersList = function() {
  return this.setSubParametersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.IntegrationLinkSubParameter.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.IntegrationLinkSubParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.IntegrationLinkSubParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.IntegrationLinkSubParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IntegrationLinkSubParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.api.commons.org.IntegrationLinkSubParameterPart.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.IntegrationLinkSubParameter}
 */
proto.api.commons.org.IntegrationLinkSubParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.IntegrationLinkSubParameter;
  return proto.api.commons.org.IntegrationLinkSubParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.IntegrationLinkSubParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.IntegrationLinkSubParameter}
 */
proto.api.commons.org.IntegrationLinkSubParameter.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.api.commons.org.IntegrationLinkSubParameterPart;
      reader.readMessage(value,proto.api.commons.org.IntegrationLinkSubParameterPart.deserializeBinaryFromReader);
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
proto.api.commons.org.IntegrationLinkSubParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.IntegrationLinkSubParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.IntegrationLinkSubParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IntegrationLinkSubParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.org.IntegrationLinkSubParameterPart.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.api.commons.org.IntegrationLinkSubParameter.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.IntegrationLinkSubParameter} returns this
 */
proto.api.commons.org.IntegrationLinkSubParameter.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated IntegrationLinkSubParameterPart parts = 2;
 * @return {!Array<!proto.api.commons.org.IntegrationLinkSubParameterPart>}
 */
proto.api.commons.org.IntegrationLinkSubParameter.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.api.commons.org.IntegrationLinkSubParameterPart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.IntegrationLinkSubParameterPart, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.IntegrationLinkSubParameterPart>} value
 * @return {!proto.api.commons.org.IntegrationLinkSubParameter} returns this
*/
proto.api.commons.org.IntegrationLinkSubParameter.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.IntegrationLinkSubParameterPart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.IntegrationLinkSubParameterPart}
 */
proto.api.commons.org.IntegrationLinkSubParameter.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.IntegrationLinkSubParameterPart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.IntegrationLinkSubParameter} returns this
 */
proto.api.commons.org.IntegrationLinkSubParameter.prototype.clearPartsList = function() {
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
proto.api.commons.org.IntegrationLinkSubParameterPart.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.IntegrationLinkSubParameterPart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.IntegrationLinkSubParameterPart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.toObject = function(includeInstance, msg) {
  var f, obj = {
contactFieldSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
helperValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
parameterSourceType: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.IntegrationLinkSubParameterPart}
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.IntegrationLinkSubParameterPart;
  return proto.api.commons.org.IntegrationLinkSubParameterPart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.IntegrationLinkSubParameterPart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.IntegrationLinkSubParameterPart}
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContactFieldSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelperValue(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.org.ParameterSourceType} */ (reader.readEnum());
      msg.setParameterSourceType(value);
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
proto.api.commons.org.IntegrationLinkSubParameterPart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.IntegrationLinkSubParameterPart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.IntegrationLinkSubParameterPart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactFieldSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHelperValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParameterSourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 contact_field_sid = 1;
 * @return {number}
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.prototype.getContactFieldSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.IntegrationLinkSubParameterPart} returns this
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.prototype.setContactFieldSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string helper_value = 2;
 * @return {string}
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.prototype.getHelperValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.IntegrationLinkSubParameterPart} returns this
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.prototype.setHelperValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ParameterSourceType parameter_source_type = 3;
 * @return {!proto.api.commons.org.ParameterSourceType}
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.prototype.getParameterSourceType = function() {
  return /** @type {!proto.api.commons.org.ParameterSourceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.org.ParameterSourceType} value
 * @return {!proto.api.commons.org.IntegrationLinkSubParameterPart} returns this
 */
proto.api.commons.org.IntegrationLinkSubParameterPart.prototype.setParameterSourceType = function(value) {
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
proto.api.commons.org.AgentTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AgentTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AgentTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
agentTriggerSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
agentStatusOption: (f = msg.getAgentStatusOption()) && proto.api.commons.org.AgentStatusOption.toObject(includeInstance, f),
triggerActionOption: (f = msg.getTriggerActionOption()) && proto.api.commons.org.TriggerActionOption.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.AgentTrigger}
 */
proto.api.commons.org.AgentTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AgentTrigger;
  return proto.api.commons.org.AgentTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AgentTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AgentTrigger}
 */
proto.api.commons.org.AgentTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentTriggerSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.api.commons.org.AgentStatusOption;
      reader.readMessage(value,proto.api.commons.org.AgentStatusOption.deserializeBinaryFromReader);
      msg.setAgentStatusOption(value);
      break;
    case 4:
      var value = new proto.api.commons.org.TriggerActionOption;
      reader.readMessage(value,proto.api.commons.org.TriggerActionOption.deserializeBinaryFromReader);
      msg.setTriggerActionOption(value);
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
proto.api.commons.org.AgentTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AgentTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AgentTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentTriggerSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAgentStatusOption();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.org.AgentStatusOption.serializeBinaryToWriter
    );
  }
  f = message.getTriggerActionOption();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.org.TriggerActionOption.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 agent_trigger_sid = 1;
 * @return {number}
 */
proto.api.commons.org.AgentTrigger.prototype.getAgentTriggerSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.AgentTrigger} returns this
 */
proto.api.commons.org.AgentTrigger.prototype.setAgentTriggerSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.commons.org.AgentTrigger.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.AgentTrigger} returns this
 */
proto.api.commons.org.AgentTrigger.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AgentStatusOption agent_status_option = 3;
 * @return {?proto.api.commons.org.AgentStatusOption}
 */
proto.api.commons.org.AgentTrigger.prototype.getAgentStatusOption = function() {
  return /** @type{?proto.api.commons.org.AgentStatusOption} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.AgentStatusOption, 3));
};


/**
 * @param {?proto.api.commons.org.AgentStatusOption|undefined} value
 * @return {!proto.api.commons.org.AgentTrigger} returns this
*/
proto.api.commons.org.AgentTrigger.prototype.setAgentStatusOption = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AgentTrigger} returns this
 */
proto.api.commons.org.AgentTrigger.prototype.clearAgentStatusOption = function() {
  return this.setAgentStatusOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AgentTrigger.prototype.hasAgentStatusOption = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TriggerActionOption trigger_action_option = 4;
 * @return {?proto.api.commons.org.TriggerActionOption}
 */
proto.api.commons.org.AgentTrigger.prototype.getTriggerActionOption = function() {
  return /** @type{?proto.api.commons.org.TriggerActionOption} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TriggerActionOption, 4));
};


/**
 * @param {?proto.api.commons.org.TriggerActionOption|undefined} value
 * @return {!proto.api.commons.org.AgentTrigger} returns this
*/
proto.api.commons.org.AgentTrigger.prototype.setTriggerActionOption = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AgentTrigger} returns this
 */
proto.api.commons.org.AgentTrigger.prototype.clearTriggerActionOption = function() {
  return this.setTriggerActionOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AgentTrigger.prototype.hasTriggerActionOption = function() {
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
proto.api.commons.org.AgentStatusOption.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.AgentStatusOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.AgentStatusOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentStatusOption.toObject = function(includeInstance, msg) {
  var f, obj = {
agentStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
pauseCode: (f = msg.getPauseCode()) && proto.api.commons.org.TriggerPauseCode.toObject(includeInstance, f),
callTypes: (f = msg.getCallTypes()) && proto.api.commons.org.TriggerCallTypes.toObject(includeInstance, f),
scheduledCallbackPresent: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.AgentStatusOption}
 */
proto.api.commons.org.AgentStatusOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.AgentStatusOption;
  return proto.api.commons.org.AgentStatusOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.AgentStatusOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.AgentStatusOption}
 */
proto.api.commons.org.AgentStatusOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.org.AgentStatus} */ (reader.readEnum());
      msg.setAgentStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 3:
      var value = new proto.api.commons.org.TriggerPauseCode;
      reader.readMessage(value,proto.api.commons.org.TriggerPauseCode.deserializeBinaryFromReader);
      msg.setPauseCode(value);
      break;
    case 4:
      var value = new proto.api.commons.org.TriggerCallTypes;
      reader.readMessage(value,proto.api.commons.org.TriggerCallTypes.deserializeBinaryFromReader);
      msg.setCallTypes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScheduledCallbackPresent(value);
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
proto.api.commons.org.AgentStatusOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.AgentStatusOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.AgentStatusOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.AgentStatusOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPauseCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.org.TriggerPauseCode.serializeBinaryToWriter
    );
  }
  f = message.getCallTypes();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.org.TriggerCallTypes.serializeBinaryToWriter
    );
  }
  f = message.getScheduledCallbackPresent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional AgentStatus agent_status = 1;
 * @return {!proto.api.commons.org.AgentStatus}
 */
proto.api.commons.org.AgentStatusOption.prototype.getAgentStatus = function() {
  return /** @type {!proto.api.commons.org.AgentStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.org.AgentStatus} value
 * @return {!proto.api.commons.org.AgentStatusOption} returns this
 */
proto.api.commons.org.AgentStatusOption.prototype.setAgentStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 duration = 2;
 * @return {number}
 */
proto.api.commons.org.AgentStatusOption.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.AgentStatusOption} returns this
 */
proto.api.commons.org.AgentStatusOption.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TriggerPauseCode pause_code = 3;
 * @return {?proto.api.commons.org.TriggerPauseCode}
 */
proto.api.commons.org.AgentStatusOption.prototype.getPauseCode = function() {
  return /** @type{?proto.api.commons.org.TriggerPauseCode} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TriggerPauseCode, 3));
};


/**
 * @param {?proto.api.commons.org.TriggerPauseCode|undefined} value
 * @return {!proto.api.commons.org.AgentStatusOption} returns this
*/
proto.api.commons.org.AgentStatusOption.prototype.setPauseCode = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AgentStatusOption} returns this
 */
proto.api.commons.org.AgentStatusOption.prototype.clearPauseCode = function() {
  return this.setPauseCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AgentStatusOption.prototype.hasPauseCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TriggerCallTypes call_types = 4;
 * @return {?proto.api.commons.org.TriggerCallTypes}
 */
proto.api.commons.org.AgentStatusOption.prototype.getCallTypes = function() {
  return /** @type{?proto.api.commons.org.TriggerCallTypes} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.TriggerCallTypes, 4));
};


/**
 * @param {?proto.api.commons.org.TriggerCallTypes|undefined} value
 * @return {!proto.api.commons.org.AgentStatusOption} returns this
*/
proto.api.commons.org.AgentStatusOption.prototype.setCallTypes = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.AgentStatusOption} returns this
 */
proto.api.commons.org.AgentStatusOption.prototype.clearCallTypes = function() {
  return this.setCallTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.AgentStatusOption.prototype.hasCallTypes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool scheduled_callback_present = 5;
 * @return {boolean}
 */
proto.api.commons.org.AgentStatusOption.prototype.getScheduledCallbackPresent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.AgentStatusOption} returns this
 */
proto.api.commons.org.AgentStatusOption.prototype.setScheduledCallbackPresent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.org.TriggerPauseCode.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api.commons.org.TriggerPauseCode.PauseCodeCase = {
  PAUSE_CODE_NOT_SET: 0,
  SYSTEM_PAUSE_CODE: 1,
  CUSTOM_PAUSE_CODE: 2
};

/**
 * @return {proto.api.commons.org.TriggerPauseCode.PauseCodeCase}
 */
proto.api.commons.org.TriggerPauseCode.prototype.getPauseCodeCase = function() {
  return /** @type {proto.api.commons.org.TriggerPauseCode.PauseCodeCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.org.TriggerPauseCode.oneofGroups_[0]));
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
proto.api.commons.org.TriggerPauseCode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TriggerPauseCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TriggerPauseCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TriggerPauseCode.toObject = function(includeInstance, msg) {
  var f, obj = {
systemPauseCode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
customPauseCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TriggerPauseCode}
 */
proto.api.commons.org.TriggerPauseCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TriggerPauseCode;
  return proto.api.commons.org.TriggerPauseCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TriggerPauseCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TriggerPauseCode}
 */
proto.api.commons.org.TriggerPauseCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.org.SystemPauseCode} */ (reader.readEnum());
      msg.setSystemPauseCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomPauseCode(value);
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
proto.api.commons.org.TriggerPauseCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TriggerPauseCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TriggerPauseCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TriggerPauseCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.api.commons.org.SystemPauseCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
 * optional SystemPauseCode system_pause_code = 1;
 * @return {!proto.api.commons.org.SystemPauseCode}
 */
proto.api.commons.org.TriggerPauseCode.prototype.getSystemPauseCode = function() {
  return /** @type {!proto.api.commons.org.SystemPauseCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.org.SystemPauseCode} value
 * @return {!proto.api.commons.org.TriggerPauseCode} returns this
 */
proto.api.commons.org.TriggerPauseCode.prototype.setSystemPauseCode = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.org.TriggerPauseCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.org.TriggerPauseCode} returns this
 */
proto.api.commons.org.TriggerPauseCode.prototype.clearSystemPauseCode = function() {
  return jspb.Message.setOneofField(this, 1, proto.api.commons.org.TriggerPauseCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TriggerPauseCode.prototype.hasSystemPauseCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string custom_pause_code = 2;
 * @return {string}
 */
proto.api.commons.org.TriggerPauseCode.prototype.getCustomPauseCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.TriggerPauseCode} returns this
 */
proto.api.commons.org.TriggerPauseCode.prototype.setCustomPauseCode = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.org.TriggerPauseCode.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api.commons.org.TriggerPauseCode} returns this
 */
proto.api.commons.org.TriggerPauseCode.prototype.clearCustomPauseCode = function() {
  return jspb.Message.setOneofField(this, 2, proto.api.commons.org.TriggerPauseCode.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.TriggerPauseCode.prototype.hasCustomPauseCode = function() {
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
proto.api.commons.org.TriggerCallTypes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TriggerCallTypes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TriggerCallTypes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TriggerCallTypes.toObject = function(includeInstance, msg) {
  var f, obj = {
outbound: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
inbound: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
manual: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
preview: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TriggerCallTypes}
 */
proto.api.commons.org.TriggerCallTypes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TriggerCallTypes;
  return proto.api.commons.org.TriggerCallTypes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TriggerCallTypes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TriggerCallTypes}
 */
proto.api.commons.org.TriggerCallTypes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutbound(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInbound(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setManual(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreview(value);
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
proto.api.commons.org.TriggerCallTypes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TriggerCallTypes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TriggerCallTypes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TriggerCallTypes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutbound();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getInbound();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getManual();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPreview();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool outbound = 1;
 * @return {boolean}
 */
proto.api.commons.org.TriggerCallTypes.prototype.getOutbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TriggerCallTypes} returns this
 */
proto.api.commons.org.TriggerCallTypes.prototype.setOutbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool inbound = 2;
 * @return {boolean}
 */
proto.api.commons.org.TriggerCallTypes.prototype.getInbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TriggerCallTypes} returns this
 */
proto.api.commons.org.TriggerCallTypes.prototype.setInbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool manual = 3;
 * @return {boolean}
 */
proto.api.commons.org.TriggerCallTypes.prototype.getManual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TriggerCallTypes} returns this
 */
proto.api.commons.org.TriggerCallTypes.prototype.setManual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool preview = 4;
 * @return {boolean}
 */
proto.api.commons.org.TriggerCallTypes.prototype.getPreview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.TriggerCallTypes} returns this
 */
proto.api.commons.org.TriggerCallTypes.prototype.setPreview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.api.commons.org.TriggerActionOption.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.TriggerActionOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.TriggerActionOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TriggerActionOption.toObject = function(includeInstance, msg) {
  var f, obj = {
action: jspb.Message.getFieldWithDefault(msg, 1, 0),
displayMessage: jspb.Message.getFieldWithDefault(msg, 2, ""),
advanceToStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
webLinkSid: jspb.Message.getFieldWithDefault(msg, 4, 0),
integrationLinkSid: jspb.Message.getFieldWithDefault(msg, 5, 0),
exileLinkSid: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.TriggerActionOption}
 */
proto.api.commons.org.TriggerActionOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.TriggerActionOption;
  return proto.api.commons.org.TriggerActionOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.TriggerActionOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.TriggerActionOption}
 */
proto.api.commons.org.TriggerActionOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.org.TriggerAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayMessage(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.org.AgentStatus} */ (reader.readEnum());
      msg.setAdvanceToStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWebLinkSid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntegrationLinkSid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExileLinkSid(value);
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
proto.api.commons.org.TriggerActionOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.TriggerActionOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.TriggerActionOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.TriggerActionOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDisplayMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdvanceToStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getWebLinkSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIntegrationLinkSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getExileLinkSid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional TriggerAction action = 1;
 * @return {!proto.api.commons.org.TriggerAction}
 */
proto.api.commons.org.TriggerActionOption.prototype.getAction = function() {
  return /** @type {!proto.api.commons.org.TriggerAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.org.TriggerAction} value
 * @return {!proto.api.commons.org.TriggerActionOption} returns this
 */
proto.api.commons.org.TriggerActionOption.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string display_message = 2;
 * @return {string}
 */
proto.api.commons.org.TriggerActionOption.prototype.getDisplayMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.TriggerActionOption} returns this
 */
proto.api.commons.org.TriggerActionOption.prototype.setDisplayMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AgentStatus advance_to_status = 3;
 * @return {!proto.api.commons.org.AgentStatus}
 */
proto.api.commons.org.TriggerActionOption.prototype.getAdvanceToStatus = function() {
  return /** @type {!proto.api.commons.org.AgentStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.org.AgentStatus} value
 * @return {!proto.api.commons.org.TriggerActionOption} returns this
 */
proto.api.commons.org.TriggerActionOption.prototype.setAdvanceToStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 web_link_sid = 4;
 * @return {number}
 */
proto.api.commons.org.TriggerActionOption.prototype.getWebLinkSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.TriggerActionOption} returns this
 */
proto.api.commons.org.TriggerActionOption.prototype.setWebLinkSid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 integration_link_sid = 5;
 * @return {number}
 */
proto.api.commons.org.TriggerActionOption.prototype.getIntegrationLinkSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.TriggerActionOption} returns this
 */
proto.api.commons.org.TriggerActionOption.prototype.setIntegrationLinkSid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 exile_link_sid = 6;
 * @return {number}
 */
proto.api.commons.org.TriggerActionOption.prototype.getExileLinkSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.TriggerActionOption} returns this
 */
proto.api.commons.org.TriggerActionOption.prototype.setExileLinkSid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.HuntGroupScript.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.HuntGroupScript.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.HuntGroupScript.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.HuntGroupScript} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupScript.toObject = function(includeInstance, msg) {
  var f, obj = {
scriptSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
autoScriptProgression: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
scriptCategory: jspb.Message.getFieldWithDefault(msg, 5, 0),
actsList: jspb.Message.toObjectList(msg.getActsList(),
    proto.api.commons.org.Act.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.HuntGroupScript}
 */
proto.api.commons.org.HuntGroupScript.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.HuntGroupScript;
  return proto.api.commons.org.HuntGroupScript.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.HuntGroupScript} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.HuntGroupScript}
 */
proto.api.commons.org.HuntGroupScript.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScriptSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoScriptProgression(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.org.ScriptCategory} */ (reader.readEnum());
      msg.setScriptCategory(value);
      break;
    case 6:
      var value = new proto.api.commons.org.Act;
      reader.readMessage(value,proto.api.commons.org.Act.deserializeBinaryFromReader);
      msg.addActs(value);
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
proto.api.commons.org.HuntGroupScript.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.HuntGroupScript.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.HuntGroupScript} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.HuntGroupScript.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScriptSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getAutoScriptProgression();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getScriptCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getActsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.commons.org.Act.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 script_sid = 1;
 * @return {number}
 */
proto.api.commons.org.HuntGroupScript.prototype.getScriptSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.HuntGroupScript} returns this
 */
proto.api.commons.org.HuntGroupScript.prototype.setScriptSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.org.HuntGroupScript.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupScript} returns this
 */
proto.api.commons.org.HuntGroupScript.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.org.HuntGroupScript.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.HuntGroupScript} returns this
 */
proto.api.commons.org.HuntGroupScript.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool auto_script_progression = 4;
 * @return {boolean}
 */
proto.api.commons.org.HuntGroupScript.prototype.getAutoScriptProgression = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.HuntGroupScript} returns this
 */
proto.api.commons.org.HuntGroupScript.prototype.setAutoScriptProgression = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional ScriptCategory script_category = 5;
 * @return {!proto.api.commons.org.ScriptCategory}
 */
proto.api.commons.org.HuntGroupScript.prototype.getScriptCategory = function() {
  return /** @type {!proto.api.commons.org.ScriptCategory} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.org.ScriptCategory} value
 * @return {!proto.api.commons.org.HuntGroupScript} returns this
 */
proto.api.commons.org.HuntGroupScript.prototype.setScriptCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated Act acts = 6;
 * @return {!Array<!proto.api.commons.org.Act>}
 */
proto.api.commons.org.HuntGroupScript.prototype.getActsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Act>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.Act, 6));
};


/**
 * @param {!Array<!proto.api.commons.org.Act>} value
 * @return {!proto.api.commons.org.HuntGroupScript} returns this
*/
proto.api.commons.org.HuntGroupScript.prototype.setActsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.org.Act=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Act}
 */
proto.api.commons.org.HuntGroupScript.prototype.addActs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.org.Act, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.HuntGroupScript} returns this
 */
proto.api.commons.org.HuntGroupScript.prototype.clearActsList = function() {
  return this.setActsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.Act.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.Act.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.Act.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.Act} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Act.toObject = function(includeInstance, msg) {
  var f, obj = {
dispositionsList: jspb.Message.toObjectList(msg.getDispositionsList(),
    proto.api.commons.org.Disposition.toObject, includeInstance),
verbiagesList: jspb.Message.toObjectList(msg.getVerbiagesList(),
    proto.api.commons.org.Verbiage.toObject, includeInstance),
conditionalNavigationsList: jspb.Message.toObjectList(msg.getConditionalNavigationsList(),
    proto.api.commons.org.ConditionalNavigation.toObject, includeInstance),
defaultConditionalNavigationTarget: jspb.Message.getFieldWithDefault(msg, 4, 0),
pageArrivalRecordingControl: jspb.Message.getFieldWithDefault(msg, 5, 0),
pageExitRecordingControl: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.Act}
 */
proto.api.commons.org.Act.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.Act;
  return proto.api.commons.org.Act.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.Act} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.Act}
 */
proto.api.commons.org.Act.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.Disposition;
      reader.readMessage(value,proto.api.commons.org.Disposition.deserializeBinaryFromReader);
      msg.addDispositions(value);
      break;
    case 2:
      var value = new proto.api.commons.org.Verbiage;
      reader.readMessage(value,proto.api.commons.org.Verbiage.deserializeBinaryFromReader);
      msg.addVerbiages(value);
      break;
    case 3:
      var value = new proto.api.commons.org.ConditionalNavigation;
      reader.readMessage(value,proto.api.commons.org.ConditionalNavigation.deserializeBinaryFromReader);
      msg.addConditionalNavigations(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefaultConditionalNavigationTarget(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageArrivalRecordingControl(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageExitRecordingControl(value);
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
proto.api.commons.org.Act.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.Act.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.Act} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Act.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDispositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.org.Disposition.serializeBinaryToWriter
    );
  }
  f = message.getVerbiagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.org.Verbiage.serializeBinaryToWriter
    );
  }
  f = message.getConditionalNavigationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.commons.org.ConditionalNavigation.serializeBinaryToWriter
    );
  }
  f = message.getDefaultConditionalNavigationTarget();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPageArrivalRecordingControl();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getPageExitRecordingControl();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * repeated Disposition dispositions = 1;
 * @return {!Array<!proto.api.commons.org.Disposition>}
 */
proto.api.commons.org.Act.prototype.getDispositionsList = function() {
  return /** @type{!Array<!proto.api.commons.org.Disposition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.Disposition, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.Disposition>} value
 * @return {!proto.api.commons.org.Act} returns this
*/
proto.api.commons.org.Act.prototype.setDispositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.Disposition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Disposition}
 */
proto.api.commons.org.Act.prototype.addDispositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.Disposition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.Act} returns this
 */
proto.api.commons.org.Act.prototype.clearDispositionsList = function() {
  return this.setDispositionsList([]);
};


/**
 * repeated Verbiage verbiages = 2;
 * @return {!Array<!proto.api.commons.org.Verbiage>}
 */
proto.api.commons.org.Act.prototype.getVerbiagesList = function() {
  return /** @type{!Array<!proto.api.commons.org.Verbiage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.Verbiage, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.Verbiage>} value
 * @return {!proto.api.commons.org.Act} returns this
*/
proto.api.commons.org.Act.prototype.setVerbiagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.Verbiage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Verbiage}
 */
proto.api.commons.org.Act.prototype.addVerbiages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.Verbiage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.Act} returns this
 */
proto.api.commons.org.Act.prototype.clearVerbiagesList = function() {
  return this.setVerbiagesList([]);
};


/**
 * repeated ConditionalNavigation conditional_navigations = 3;
 * @return {!Array<!proto.api.commons.org.ConditionalNavigation>}
 */
proto.api.commons.org.Act.prototype.getConditionalNavigationsList = function() {
  return /** @type{!Array<!proto.api.commons.org.ConditionalNavigation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.ConditionalNavigation, 3));
};


/**
 * @param {!Array<!proto.api.commons.org.ConditionalNavigation>} value
 * @return {!proto.api.commons.org.Act} returns this
*/
proto.api.commons.org.Act.prototype.setConditionalNavigationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.org.ConditionalNavigation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.ConditionalNavigation}
 */
proto.api.commons.org.Act.prototype.addConditionalNavigations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.org.ConditionalNavigation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.Act} returns this
 */
proto.api.commons.org.Act.prototype.clearConditionalNavigationsList = function() {
  return this.setConditionalNavigationsList([]);
};


/**
 * optional int64 default_conditional_navigation_target = 4;
 * @return {number}
 */
proto.api.commons.org.Act.prototype.getDefaultConditionalNavigationTarget = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Act} returns this
 */
proto.api.commons.org.Act.prototype.setDefaultConditionalNavigationTarget = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 page_arrival_recording_control = 5;
 * @return {number}
 */
proto.api.commons.org.Act.prototype.getPageArrivalRecordingControl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Act} returns this
 */
proto.api.commons.org.Act.prototype.setPageArrivalRecordingControl = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 page_exit_recording_control = 6;
 * @return {number}
 */
proto.api.commons.org.Act.prototype.getPageExitRecordingControl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Act} returns this
 */
proto.api.commons.org.Act.prototype.setPageExitRecordingControl = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.Disposition.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.Disposition.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.Disposition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.Disposition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Disposition.toObject = function(includeInstance, msg) {
  var f, obj = {
responseOptionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
header: jspb.Message.getFieldWithDefault(msg, 2, ""),
prompt: jspb.Message.getFieldWithDefault(msg, 3, ""),
order: jspb.Message.getFieldWithDefault(msg, 4, 0),
required: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
defaultValue: jspb.Message.getFieldWithDefault(msg, 6, ""),
bypassAutoScriptProgression: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
responseType: jspb.Message.getFieldWithDefault(msg, 8, 0),
responseEvaluator: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.Disposition}
 */
proto.api.commons.org.Disposition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.Disposition;
  return proto.api.commons.org.Disposition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.Disposition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.Disposition}
 */
proto.api.commons.org.Disposition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addResponseOptions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrompt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequired(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultValue(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBypassAutoScriptProgression(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.org.ScriptResponseType} */ (reader.readEnum());
      msg.setResponseType(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResponseEvaluator(value);
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
proto.api.commons.org.Disposition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.Disposition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.Disposition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Disposition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getHeader();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrompt();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRequired();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getDefaultValue();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBypassAutoScriptProgression();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getResponseType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getResponseEvaluator();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * repeated string response_options = 1;
 * @return {!Array<string>}
 */
proto.api.commons.org.Disposition.prototype.getResponseOptionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setResponseOptionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.addResponseOptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.clearResponseOptionsList = function() {
  return this.setResponseOptionsList([]);
};


/**
 * optional string header = 2;
 * @return {string}
 */
proto.api.commons.org.Disposition.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string prompt = 3;
 * @return {string}
 */
proto.api.commons.org.Disposition.prototype.getPrompt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setPrompt = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 order = 4;
 * @return {number}
 */
proto.api.commons.org.Disposition.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool required = 5;
 * @return {boolean}
 */
proto.api.commons.org.Disposition.prototype.getRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string default_value = 6;
 * @return {string}
 */
proto.api.commons.org.Disposition.prototype.getDefaultValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setDefaultValue = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool bypass_auto_script_progression = 7;
 * @return {boolean}
 */
proto.api.commons.org.Disposition.prototype.getBypassAutoScriptProgression = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setBypassAutoScriptProgression = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional ScriptResponseType response_type = 8;
 * @return {!proto.api.commons.org.ScriptResponseType}
 */
proto.api.commons.org.Disposition.prototype.getResponseType = function() {
  return /** @type {!proto.api.commons.org.ScriptResponseType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.org.ScriptResponseType} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setResponseType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional int64 response_evaluator = 9;
 * @return {number}
 */
proto.api.commons.org.Disposition.prototype.getResponseEvaluator = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Disposition} returns this
 */
proto.api.commons.org.Disposition.prototype.setResponseEvaluator = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
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
proto.api.commons.org.Verbiage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.Verbiage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.Verbiage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Verbiage.toObject = function(includeInstance, msg) {
  var f, obj = {
order: jspb.Message.getFieldWithDefault(msg, 1, 0),
header: jspb.Message.getFieldWithDefault(msg, 2, ""),
body: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.Verbiage}
 */
proto.api.commons.org.Verbiage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.Verbiage;
  return proto.api.commons.org.Verbiage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.Verbiage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.Verbiage}
 */
proto.api.commons.org.Verbiage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
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
proto.api.commons.org.Verbiage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.Verbiage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.Verbiage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.Verbiage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHeader();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 order = 1;
 * @return {number}
 */
proto.api.commons.org.Verbiage.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.Verbiage} returns this
 */
proto.api.commons.org.Verbiage.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string header = 2;
 * @return {string}
 */
proto.api.commons.org.Verbiage.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Verbiage} returns this
 */
proto.api.commons.org.Verbiage.prototype.setHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string body = 3;
 * @return {string}
 */
proto.api.commons.org.Verbiage.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.Verbiage} returns this
 */
proto.api.commons.org.Verbiage.prototype.setBody = function(value) {
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
proto.api.commons.org.ConditionalNavigation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ConditionalNavigation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ConditionalNavigation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ConditionalNavigation.toObject = function(includeInstance, msg) {
  var f, obj = {
targetActIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
complexBooleanExpressionList: (f = msg.getComplexBooleanExpressionList()) && proto.api.commons.org.ComplexBooleanExpressionList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ConditionalNavigation}
 */
proto.api.commons.org.ConditionalNavigation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ConditionalNavigation;
  return proto.api.commons.org.ConditionalNavigation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ConditionalNavigation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ConditionalNavigation}
 */
proto.api.commons.org.ConditionalNavigation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetActIndex(value);
      break;
    case 2:
      var value = new proto.api.commons.org.ComplexBooleanExpressionList;
      reader.readMessage(value,proto.api.commons.org.ComplexBooleanExpressionList.deserializeBinaryFromReader);
      msg.setComplexBooleanExpressionList(value);
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
proto.api.commons.org.ConditionalNavigation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ConditionalNavigation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ConditionalNavigation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ConditionalNavigation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetActIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getComplexBooleanExpressionList();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.org.ComplexBooleanExpressionList.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 target_act_index = 1;
 * @return {number}
 */
proto.api.commons.org.ConditionalNavigation.prototype.getTargetActIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.ConditionalNavigation} returns this
 */
proto.api.commons.org.ConditionalNavigation.prototype.setTargetActIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ComplexBooleanExpressionList complex_boolean_expression_list = 2;
 * @return {?proto.api.commons.org.ComplexBooleanExpressionList}
 */
proto.api.commons.org.ConditionalNavigation.prototype.getComplexBooleanExpressionList = function() {
  return /** @type{?proto.api.commons.org.ComplexBooleanExpressionList} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.ComplexBooleanExpressionList, 2));
};


/**
 * @param {?proto.api.commons.org.ComplexBooleanExpressionList|undefined} value
 * @return {!proto.api.commons.org.ConditionalNavigation} returns this
*/
proto.api.commons.org.ConditionalNavigation.prototype.setComplexBooleanExpressionList = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ConditionalNavigation} returns this
 */
proto.api.commons.org.ConditionalNavigation.prototype.clearComplexBooleanExpressionList = function() {
  return this.setComplexBooleanExpressionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ConditionalNavigation.prototype.hasComplexBooleanExpressionList = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.ComplexBooleanExpressionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.ComplexBooleanExpressionList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ComplexBooleanExpressionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ComplexBooleanExpressionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ComplexBooleanExpressionList.toObject = function(includeInstance, msg) {
  var f, obj = {
complexBooleanExpressionsList: jspb.Message.toObjectList(msg.getComplexBooleanExpressionsList(),
    proto.api.commons.org.ComplexBooleanExpression.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ComplexBooleanExpressionList}
 */
proto.api.commons.org.ComplexBooleanExpressionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ComplexBooleanExpressionList;
  return proto.api.commons.org.ComplexBooleanExpressionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ComplexBooleanExpressionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ComplexBooleanExpressionList}
 */
proto.api.commons.org.ComplexBooleanExpressionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.ComplexBooleanExpression;
      reader.readMessage(value,proto.api.commons.org.ComplexBooleanExpression.deserializeBinaryFromReader);
      msg.addComplexBooleanExpressions(value);
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
proto.api.commons.org.ComplexBooleanExpressionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ComplexBooleanExpressionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ComplexBooleanExpressionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ComplexBooleanExpressionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComplexBooleanExpressionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.org.ComplexBooleanExpression.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ComplexBooleanExpression complex_boolean_expressions = 1;
 * @return {!Array<!proto.api.commons.org.ComplexBooleanExpression>}
 */
proto.api.commons.org.ComplexBooleanExpressionList.prototype.getComplexBooleanExpressionsList = function() {
  return /** @type{!Array<!proto.api.commons.org.ComplexBooleanExpression>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.ComplexBooleanExpression, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.ComplexBooleanExpression>} value
 * @return {!proto.api.commons.org.ComplexBooleanExpressionList} returns this
*/
proto.api.commons.org.ComplexBooleanExpressionList.prototype.setComplexBooleanExpressionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.ComplexBooleanExpression=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.ComplexBooleanExpression}
 */
proto.api.commons.org.ComplexBooleanExpressionList.prototype.addComplexBooleanExpressions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.ComplexBooleanExpression, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.ComplexBooleanExpressionList} returns this
 */
proto.api.commons.org.ComplexBooleanExpressionList.prototype.clearComplexBooleanExpressionsList = function() {
  return this.setComplexBooleanExpressionsList([]);
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
proto.api.commons.org.ComplexBooleanExpression.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ComplexBooleanExpression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ComplexBooleanExpression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ComplexBooleanExpression.toObject = function(includeInstance, msg) {
  var f, obj = {
compareExpressionList: (f = msg.getCompareExpressionList()) && proto.api.commons.org.CompareExpressionList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ComplexBooleanExpression}
 */
proto.api.commons.org.ComplexBooleanExpression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ComplexBooleanExpression;
  return proto.api.commons.org.ComplexBooleanExpression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ComplexBooleanExpression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ComplexBooleanExpression}
 */
proto.api.commons.org.ComplexBooleanExpression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.CompareExpressionList;
      reader.readMessage(value,proto.api.commons.org.CompareExpressionList.deserializeBinaryFromReader);
      msg.setCompareExpressionList(value);
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
proto.api.commons.org.ComplexBooleanExpression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ComplexBooleanExpression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ComplexBooleanExpression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ComplexBooleanExpression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompareExpressionList();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.org.CompareExpressionList.serializeBinaryToWriter
    );
  }
};


/**
 * optional CompareExpressionList compare_expression_list = 1;
 * @return {?proto.api.commons.org.CompareExpressionList}
 */
proto.api.commons.org.ComplexBooleanExpression.prototype.getCompareExpressionList = function() {
  return /** @type{?proto.api.commons.org.CompareExpressionList} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.org.CompareExpressionList, 1));
};


/**
 * @param {?proto.api.commons.org.CompareExpressionList|undefined} value
 * @return {!proto.api.commons.org.ComplexBooleanExpression} returns this
*/
proto.api.commons.org.ComplexBooleanExpression.prototype.setCompareExpressionList = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.org.ComplexBooleanExpression} returns this
 */
proto.api.commons.org.ComplexBooleanExpression.prototype.clearCompareExpressionList = function() {
  return this.setCompareExpressionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.org.ComplexBooleanExpression.prototype.hasCompareExpressionList = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.org.CompareExpressionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.org.CompareExpressionList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.CompareExpressionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.CompareExpressionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CompareExpressionList.toObject = function(includeInstance, msg) {
  var f, obj = {
simpleCompareExpressionList: jspb.Message.toObjectList(msg.getSimpleCompareExpressionList(),
    proto.api.commons.org.SimpleCompareExpression.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.CompareExpressionList}
 */
proto.api.commons.org.CompareExpressionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.CompareExpressionList;
  return proto.api.commons.org.CompareExpressionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.CompareExpressionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.CompareExpressionList}
 */
proto.api.commons.org.CompareExpressionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.org.SimpleCompareExpression;
      reader.readMessage(value,proto.api.commons.org.SimpleCompareExpression.deserializeBinaryFromReader);
      msg.addSimpleCompareExpression(value);
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
proto.api.commons.org.CompareExpressionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.CompareExpressionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.CompareExpressionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.CompareExpressionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSimpleCompareExpressionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.org.SimpleCompareExpression.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SimpleCompareExpression simple_compare_expression = 1;
 * @return {!Array<!proto.api.commons.org.SimpleCompareExpression>}
 */
proto.api.commons.org.CompareExpressionList.prototype.getSimpleCompareExpressionList = function() {
  return /** @type{!Array<!proto.api.commons.org.SimpleCompareExpression>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.org.SimpleCompareExpression, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.SimpleCompareExpression>} value
 * @return {!proto.api.commons.org.CompareExpressionList} returns this
*/
proto.api.commons.org.CompareExpressionList.prototype.setSimpleCompareExpressionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.SimpleCompareExpression=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.SimpleCompareExpression}
 */
proto.api.commons.org.CompareExpressionList.prototype.addSimpleCompareExpression = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.SimpleCompareExpression, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.org.CompareExpressionList} returns this
 */
proto.api.commons.org.CompareExpressionList.prototype.clearSimpleCompareExpressionList = function() {
  return this.setSimpleCompareExpressionList([]);
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
proto.api.commons.org.SimpleCompareExpression.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.SimpleCompareExpression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.SimpleCompareExpression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.SimpleCompareExpression.toObject = function(includeInstance, msg) {
  var f, obj = {
operatorType: jspb.Message.getFieldWithDefault(msg, 1, 0),
actIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
dispositionHeader: jspb.Message.getFieldWithDefault(msg, 3, ""),
compareValue: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.SimpleCompareExpression}
 */
proto.api.commons.org.SimpleCompareExpression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.SimpleCompareExpression;
  return proto.api.commons.org.SimpleCompareExpression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.SimpleCompareExpression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.SimpleCompareExpression}
 */
proto.api.commons.org.SimpleCompareExpression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.org.CompareOperatorType} */ (reader.readEnum());
      msg.setOperatorType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDispositionHeader(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompareValue(value);
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
proto.api.commons.org.SimpleCompareExpression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.SimpleCompareExpression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.SimpleCompareExpression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.SimpleCompareExpression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperatorType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActIndex();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDispositionHeader();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompareValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional CompareOperatorType operator_type = 1;
 * @return {!proto.api.commons.org.CompareOperatorType}
 */
proto.api.commons.org.SimpleCompareExpression.prototype.getOperatorType = function() {
  return /** @type {!proto.api.commons.org.CompareOperatorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.org.CompareOperatorType} value
 * @return {!proto.api.commons.org.SimpleCompareExpression} returns this
 */
proto.api.commons.org.SimpleCompareExpression.prototype.setOperatorType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 act_index = 2;
 * @return {number}
 */
proto.api.commons.org.SimpleCompareExpression.prototype.getActIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.org.SimpleCompareExpression} returns this
 */
proto.api.commons.org.SimpleCompareExpression.prototype.setActIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string disposition_header = 3;
 * @return {string}
 */
proto.api.commons.org.SimpleCompareExpression.prototype.getDispositionHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.SimpleCompareExpression} returns this
 */
proto.api.commons.org.SimpleCompareExpression.prototype.setDispositionHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string compare_value = 4;
 * @return {string}
 */
proto.api.commons.org.SimpleCompareExpression.prototype.getCompareValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.SimpleCompareExpression} returns this
 */
proto.api.commons.org.SimpleCompareExpression.prototype.setCompareValue = function(value) {
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
proto.api.commons.org.ResponseEvaluator.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.org.ResponseEvaluator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.org.ResponseEvaluator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ResponseEvaluator.toObject = function(includeInstance, msg) {
  var f, obj = {
responseEvaluatorId: jspb.Message.getFieldWithDefault(msg, 1, ""),
orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
regularExpression: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.org.ResponseEvaluator}
 */
proto.api.commons.org.ResponseEvaluator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.org.ResponseEvaluator;
  return proto.api.commons.org.ResponseEvaluator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.org.ResponseEvaluator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.org.ResponseEvaluator}
 */
proto.api.commons.org.ResponseEvaluator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseEvaluatorId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
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
      msg.setRegularExpression(value);
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
proto.api.commons.org.ResponseEvaluator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.org.ResponseEvaluator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.org.ResponseEvaluator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.org.ResponseEvaluator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseEvaluatorId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getRegularExpression();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string response_evaluator_id = 1;
 * @return {string}
 */
proto.api.commons.org.ResponseEvaluator.prototype.getResponseEvaluatorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ResponseEvaluator} returns this
 */
proto.api.commons.org.ResponseEvaluator.prototype.setResponseEvaluatorId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.commons.org.ResponseEvaluator.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ResponseEvaluator} returns this
 */
proto.api.commons.org.ResponseEvaluator.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.commons.org.ResponseEvaluator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ResponseEvaluator} returns this
 */
proto.api.commons.org.ResponseEvaluator.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.commons.org.ResponseEvaluator.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ResponseEvaluator} returns this
 */
proto.api.commons.org.ResponseEvaluator.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string regular_expression = 5;
 * @return {string}
 */
proto.api.commons.org.ResponseEvaluator.prototype.getRegularExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.org.ResponseEvaluator} returns this
 */
proto.api.commons.org.ResponseEvaluator.prototype.setRegularExpression = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.api.commons.org.HuntGroupType = {
  HUNT_GROUP_TYPE_UNSPECIFIED: 0,
  HUNT_GROUP_TYPE_CONNECTED: 1,
  HUNT_GROUP_TYPE_SOFTPHONE: 2
};

/**
 * @enum {number}
 */
proto.api.commons.org.TemplateCategory = {
  TEMPLATE_CATEGORY_UNSPECIFIED: 0,
  TEMPLATE_CATEGORY_HUNT_GROUP: 1,
  TEMPLATE_CATEGORY_CAMPAIGN: 2
};

/**
 * @enum {number}
 */
proto.api.commons.org.WebLinkType = {
  WEB_LINK_TYPE_UNSPECIFIED: 0,
  WEB_LINK_STANDARD: 1,
  WEB_LINK_JAVASCRIPT: 2
};

/**
 * @enum {number}
 */
proto.api.commons.org.WebLinkComponentKeyType = {
  WEB_LINK_COMPONENT_KEY_TYPE_UNSPECIFIED: 0,
  WEB_LINK_COMPONENT_KEY_TYPE_STATIC_TEXT: 1,
  WEB_LINK_COMPONENT_KEY_TYPE_TTS_FIELD: 2,
  WEB_LINK_COMPONENT_KEY_TYPE_AGENT_INFO: 3,
  WEB_LINK_COMPONENT_KEY_TYPE_DATA_DIP: 4,
  WEB_LINK_COMPONENT_KEY_TYPE_IVR_DATA: 5,
  WEB_LINK_COMPONENT_KEY_TYPE_DATA_COLLECT: 6,
  WEB_LINK_COMPONENT_KEY_TYPE_PHONE_METADATA: 7,
  WEB_LINK_COMPONENT_KEY_TYPE_ZIP_POSTAL_METADATA: 8,
  WEB_LINK_COMPONENT_KEY_TYPE_CUSTOM_ACCOUNT_DATA_KEY: 9,
  WEB_LINK_COMPONENT_KEY_TYPE_SIP_HEADER_DATA: 10,
  WEB_LINK_COMPONENT_KEY_TYPE_INTEGRATION_DATA: 11,
  WEB_LINK_COMPONENT_KEY_TYPE_JOURNEY_DATA: 12
};

/**
 * @enum {number}
 */
proto.api.commons.org.ParameterSourceType = {
  PARAMETER_SOURCE_TYPE_UNSPECIFIED: 0,
  PARAMETER_SOURCE_TYPE_STATIC_TEXT: 1,
  PARAMETER_SOURCE_TYPE_CFD_ID: 100,
  PARAMETER_SOURCE_TYPE_AGENT_ID: 200,
  PARAMETER_SOURCE_TYPE_AGENT_FIRST_NAME: 201,
  PARAMETER_SOURCE_TYPE_AGENT_LAST_NAME: 202,
  PARAMETER_SOURCE_TYPE_AGENT_USERNAME: 203,
  PARAMETER_SOURCE_TYPE_PARTNER_AGENT_ID: 204,
  PARAMETER_SOURCE_TYPE_HG_ID: 205,
  PARAMETER_SOURCE_TYPE_HG_NAME: 206,
  PARAMETER_SOURCE_TYPE_HG_TYPE: 207,
  PARAMETER_SOURCE_TYPE_CONSUMER_PHONE: 208,
  PARAMETER_SOURCE_TYPE_CALLER_ID: 209,
  PARAMETER_SOURCE_TYPE_CALL_ID: 210,
  PARAMETER_SOURCE_TYPE_GROUP_ID: 211,
  PARAMETER_SOURCE_TYPE_AGENT_SESSION_ID: 212,
  PARAMETER_SOURCE_TYPE_DATA_DIP: 300,
  PARAMETER_SOURCE_TYPE_IVR_DATA: 400,
  PARAMETER_SOURCE_TYPE_DATA_COLLECT: 500,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_AREA_CODE: 600,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_CARRIER: 601,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_CENTRAL_OFFICE_CODE: 602,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_CITY: 603,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_COUNTRY_CODE: 604,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SUBSCRIBER_NUMBER: 605,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_ISO_CODE: 606,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_INTERNATIONAL_PREFIX: 607,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_LANGUAGE: 608,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_LATITUDE: 609,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_LONGITUDE: 610,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_MAXIMUM_BLOCK_NUMBER: 611,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_MINIMUM_BLOCK_NUMBER: 612,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_NATIONAL_DESTINATION: 613,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_NATIONAL_PREFIX: 614,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_NUMBER_BLOCK_ID: 615,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_NUMBER_TYPE: 616,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_USES_NDC: 617,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_DAYLIGHT_SAVINGS: 618,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_PREFIX: 619,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_REGION_CODE: 620,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_REGION_NAME: 621,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SPECIAL_SERVICE_CODE_1: 622,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SPECIAL_SERVICE_CODE_2: 623,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SPECIAL_SERVICE_CODE_3: 624,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_SPECIAL_SERVICE_CODE_4: 625,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_TIME_ZONE: 626,
  PARAMETER_SOURCE_TYPE_PHONE_METADATA_UTC_OFFSET: 627,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_CODE_1: 700,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_CODE_2: 701,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_CODE_3: 702,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_NAME_1: 703,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_NAME_2: 704,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ADMIN_NAME_3: 705,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_AREA_CODE: 706,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_CITY_NAME: 707,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_CITY_TYPE: 708,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_COUNTRY_CODE: 709,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_ISO_CODE: 710,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_COUNTRY_NAME: 711,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_COUNTRY_FPS_CODE: 712,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_LATITUDE: 713,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_POSITION_ACCURACY: 714,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_LONGITUDE: 715,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_METROPOLITAN_AREA: 716,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_DAYLIGHT_SAVINGS: 717,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_PLACE_NAME: 718,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_POSTAL_CODE: 719,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_POSTAL_CODE_KEY: 720,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_POSTAL_TYPE: 721,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_PROVICE_ABBREVIATION: 722,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_PROVINCE_NAME: 723,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_STATE_FPS_CODE: 724,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_TIME_ZONE: 725,
  PARAMETER_SOURCE_TYPE_ZIP_METADATA_UTC_OFFSET: 726,
  PARAMETER_SOURCE_TYPE_CUSTOM_ACCOUNT_DATA: 800,
  PARAMETER_SOURCE_TYPE_SIP_HEADER_DATA: 900,
  PARAMETER_SOURCE_TYPE_INTEGRATION_DATA: 1000,
  PARAMETER_SOURCE_TYPE_JOURNEY_DATA: 1100
};

/**
 * @enum {number}
 */
proto.api.commons.org.AgentStatus = {
  AGENT_STATUS_UNSPECIFIED: 0,
  AGENT_STATUS_LOGGED_IN: 1,
  AGENT_STATUS_WAITING: 2,
  AGENT_STATUS_PAUSED: 3,
  AGENT_STATUS_ON_CALL: 4,
  AGENT_STATUS_TRANSFER_CALL: 5,
  AGENT_STATUS_TRANSFER_LOST: 6,
  AGENT_STATUS_TRANSFER_TARGET_LOST: 7,
  AGENT_STATUS_PREVIEW_CALL: 8,
  AGENT_STATUS_MANUAL_DIAL_CALL: 9,
  AGENT_STATUS_WRAP_UP: 10
};

/**
 * @enum {number}
 */
proto.api.commons.org.SystemPauseCode = {
  SYSTEM_PAUSE_CODE_UNSPECIFIED: 0,
  SYSTEM_PAUSE_CODE_AGENT_TRIGGER_ADVANCE_TO_PAUSED: 1,
  SYSTEM_PAUSE_CODE_CHANGE_PASSWORD: 2,
  SYSTEM_PAUSE_CODE_CHECK_VOICE_MAIL: 3,
  SYSTEM_PAUSE_CODE_MANUALLY_APPROVE_CALLS: 4
};

/**
 * @enum {number}
 */
proto.api.commons.org.TriggerAction = {
  TRIGGER_ACTION_UNSPECIFIED: 0,
  TRIGGER_ACTION_ADVANCE_TO_STATUS: 1,
  TRIGGER_ACTION_DISPLAY_MESSAGE: 2,
  TRIGGER_ACTION_EJECT_AGENT: 3,
  TRIGGER_ACTION_EXECUTE_WEB_LINK: 4,
  TRIGGER_ACTION_EXECUTE_INTEGRATION_LINK: 5,
  TRIGGER_ACTION_EXECUTE_EXILE_LINK: 6
};

/**
 * @enum {number}
 */
proto.api.commons.org.ScriptCategory = {
  SCRIPT_CATEGORY_UNSPECIFIED: 0,
  SCRIPT_CATEGORY_HUNT_GROUP: 1,
  SCRIPT_CATEGORY_CAMPAIGN: 2
};

/**
 * @enum {number}
 */
proto.api.commons.org.ScriptResponseType = {
  SCRIPT_RESPONSE_TYPE_UNSPECIFIED: 0,
  SCRIPT_RESPONSE_TYPE_DROP_DOWN_SELECT_MENU: 1,
  SCRIPT_RESPONSE_TYPE_MULTIPLE_SELECT_MENU: 2,
  SCRIPT_RESPONSE_TYPE_CHECK_BOXES: 3,
  SCRIPT_RESPONSE_TYPE_RADIO_BUTTONS: 4,
  SCRIPT_RESPONSE_TYPE_TEXT_BOX: 5,
  SCRIPT_RESPONSE_TYPE_TEXT_BOX_ALPHANUMERIC: 6,
  SCRIPT_RESPONSE_TYPE_TEXT_BOX_NUMERICAL: 7,
  SCRIPT_RESPONSE_TYPE_TEXT_VERIFICATION_FIELD: 8,
  SCRIPT_RESPONSE_TYPE_TEXT_AREA: 9,
  SCRIPT_RESPONSE_TYPE_REGULAR_EXPRESSION_FIELD: 10,
  SCRIPT_RESPONSE_TYPE_REGULAR_EXPRESSION_AREA: 11
};

/**
 * @enum {number}
 */
proto.api.commons.org.CompareOperatorType = {
  COMPARE_OPERATOR_TYPE_UNSPECIFIED: 0,
  COMPARE_OPERATOR_TYPE_EQUALS: 1,
  COMPARE_OPERATOR_TYPE_NOT_EQUALS: 2,
  COMPARE_OPERATOR_TYPE_GREATER_THAN: 3,
  COMPARE_OPERATOR_TYPE_LESS_THAN: 4,
  COMPARE_OPERATOR_TYPE_GREATER_THAN_OR_EQUAL_TO: 5,
  COMPARE_OPERATOR_TYPE_LESS_THAN_OR_EQUAL_TO: 6,
  COMPARE_OPERATOR_TYPE_CONTAINS: 7,
  COMPARE_OPERATOR_TYPE_DOES_NOT_CONTAIN: 8,
  COMPARE_OPERATOR_TYPE_BLANK: 9,
  COMPARE_OPERATOR_TYPE_NOT_BALNK: 10,
  COMPARE_OPERATOR_TYPE_STARTS_WITH: 11,
  COMPARE_OPERATOR_TYPE_DOES_NOT_START_WITH: 12,
  COMPARE_OPERATOR_TYPE_ENDS_WITH: 13,
  COMPARE_OPERATOR_TYPE_DOES_NOT_END_WITH: 14
};

goog.object.extend(exports, proto.api.commons.org);
