// source: api/v0alpha/compliance.proto
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

var annotations_authz_pb = require('../../annotations/authz_pb.js');
goog.object.extend(proto, annotations_authz_pb);
var api_commons_acd_pb = require('../../api/commons/acd_pb.js');
goog.object.extend(proto, api_commons_acd_pb);
var api_commons_communication_pb = require('../../api/commons/communication_pb.js');
goog.object.extend(proto, api_commons_communication_pb);
var api_commons_compliance_pb = require('../../api/commons/compliance_pb.js');
goog.object.extend(proto, api_commons_compliance_pb);
var api_commons_enums_pb = require('../../api/commons/enums_pb.js');
goog.object.extend(proto, api_commons_enums_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_longrunning_operations_pb = require('../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.v0alpha.AddScrubListEntriesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.AssignRuleSetReq', null, global);
goog.exportSymbol('proto.api.v0alpha.AssignRuleSetRes', null, global);
goog.exportSymbol('proto.api.v0alpha.AssignScenarioReq', null, global);
goog.exportSymbol('proto.api.v0alpha.AssignedScenario', null, global);
goog.exportSymbol('proto.api.v0alpha.CheckRuleSetReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CheckRuleSetRes', null, global);
goog.exportSymbol('proto.api.v0alpha.Consent', null, global);
goog.exportSymbol('proto.api.v0alpha.ConsentByContent', null, global);
goog.exportSymbol('proto.api.v0alpha.ConsentCondition', null, global);
goog.exportSymbol('proto.api.v0alpha.ConsentProfile', null, global);
goog.exportSymbol('proto.api.v0alpha.ConsentTopic', null, global);
goog.exportSymbol('proto.api.v0alpha.CountryCode', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateConsentProfileReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateConsentProfileRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateConsentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateConsentRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateRuleSetReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateScenarioReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateScenarioRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateScrubListReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteConsentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteScenarioReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteScenarioRes', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteScrubListEntriesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteScrubListReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DisableConsentProfileReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DisableRuleSetReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DisableRuleSetRes', null, global);
goog.exportSymbol('proto.api.v0alpha.DisableScenarioReq', null, global);
goog.exportSymbol('proto.api.v0alpha.Empty', null, global);
goog.exportSymbol('proto.api.v0alpha.EnableConsentProfileReq', null, global);
goog.exportSymbol('proto.api.v0alpha.EnableRuleSetReq', null, global);
goog.exportSymbol('proto.api.v0alpha.EnableRuleSetRes', null, global);
goog.exportSymbol('proto.api.v0alpha.EnableScenarioReq', null, global);
goog.exportSymbol('proto.api.v0alpha.EvaluationResults', null, global);
goog.exportSymbol('proto.api.v0alpha.ExpireConsentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ExportScrubListReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ExportScrubListRes', null, global);
goog.exportSymbol('proto.api.v0alpha.FieldNames', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentByContentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentByContentRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentByProfileAndContentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentByProfileAndContentRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentProfileReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentTopicReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentUploadUrlReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConsentUploadUrlRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetDefaultRulesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetDefaultRulesRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetFieldNamesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetResultDescriptionsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetRuleSetByNameReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetRuleSetReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetScenarioReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetScenarioRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetScrubListReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetScrubListUploadUrlReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetScrubListUploadUrlRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetScrubListsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListAllScenariosReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListAllScenariosRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListAssignedRuleSetsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListAssignedRuleSetsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListAssignedScenariosReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListAssignedScenariosRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConsentProfile', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConsentProfilesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConsentProfilesRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConsentTopicsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConsentTopicsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListRuleSetsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListRuleSetsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListUnassignedScenariosReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListUnassignedScenariosRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessConsentListDeleteUploadMeta', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessConsentListDeleteUploadReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessConsentListDeleteUploadRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessConsentUploadReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessConsentUploadRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessOutboundCallReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessScrubListDeleteUploadReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessScrubListDeleteUploadRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessScrubListUploadReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ProcessScrubListUploadRes', null, global);
goog.exportSymbol('proto.api.v0alpha.PurgeScrubListReq', null, global);
goog.exportSymbol('proto.api.v0alpha.PurgeScrubListRes', null, global);
goog.exportSymbol('proto.api.v0alpha.RenameRuleSetReq', null, global);
goog.exportSymbol('proto.api.v0alpha.RenameRuleSetRes', null, global);
goog.exportSymbol('proto.api.v0alpha.RevokeConsentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.Rule', null, global);
goog.exportSymbol('proto.api.v0alpha.RuleAutoCompleteReq', null, global);
goog.exportSymbol('proto.api.v0alpha.RuleAutoCompleteRes', null, global);
goog.exportSymbol('proto.api.v0alpha.RuleResponse', null, global);
goog.exportSymbol('proto.api.v0alpha.RuleSet', null, global);
goog.exportSymbol('proto.api.v0alpha.RunAssignedScenariosReq', null, global);
goog.exportSymbol('proto.api.v0alpha.RunAssignedScenariosRes', null, global);
goog.exportSymbol('proto.api.v0alpha.Scenario', null, global);
goog.exportSymbol('proto.api.v0alpha.ScenarioData', null, global);
goog.exportSymbol('proto.api.v0alpha.ScenarioResult', null, global);
goog.exportSymbol('proto.api.v0alpha.ScenarioRuleResponse', null, global);
goog.exportSymbol('proto.api.v0alpha.ScrubEntry', null, global);
goog.exportSymbol('proto.api.v0alpha.ScrubEntryDetails', null, global);
goog.exportSymbol('proto.api.v0alpha.ScrubList', null, global);
goog.exportSymbol('proto.api.v0alpha.ScrubListRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ScrubListsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.SearchConsentByContentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SearchConsentByContentRes', null, global);
goog.exportSymbol('proto.api.v0alpha.SearchScrubListReq', null, global);
goog.exportSymbol('proto.api.v0alpha.Selector', null, global);
goog.exportSymbol('proto.api.v0alpha.Selector.SelectionRuleCase', null, global);
goog.exportSymbol('proto.api.v0alpha.UnassignScenarioReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateConsentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateConsentTopicReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateScenarioReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateScenarioRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateScrubEntryReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateScrubEntryRes', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessOutboundCallReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessOutboundCallReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessOutboundCallReq.displayName = 'proto.api.v0alpha.ProcessOutboundCallReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RuleResponse.displayName = 'proto.api.v0alpha.RuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ProcessRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ProcessRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessRes.displayName = 'proto.api.v0alpha.ProcessRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScrubList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ScrubList.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ScrubList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScrubList.displayName = 'proto.api.v0alpha.ScrubList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScrubEntryDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ScrubEntryDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScrubEntryDetails.displayName = 'proto.api.v0alpha.ScrubEntryDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateScrubListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CreateScrubListReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CreateScrubListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateScrubListReq.displayName = 'proto.api.v0alpha.CreateScrubListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AddScrubListEntriesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.AddScrubListEntriesReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.AddScrubListEntriesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AddScrubListEntriesReq.displayName = 'proto.api.v0alpha.AddScrubListEntriesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateScrubEntryReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateScrubEntryReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateScrubEntryReq.displayName = 'proto.api.v0alpha.UpdateScrubEntryReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateScrubEntryRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateScrubEntryRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateScrubEntryRes.displayName = 'proto.api.v0alpha.UpdateScrubEntryRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteScrubListEntriesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.DeleteScrubListEntriesReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.DeleteScrubListEntriesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteScrubListEntriesReq.displayName = 'proto.api.v0alpha.DeleteScrubListEntriesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetScrubListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetScrubListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetScrubListReq.displayName = 'proto.api.v0alpha.GetScrubListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetScrubListsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetScrubListsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetScrubListsReq.displayName = 'proto.api.v0alpha.GetScrubListsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScrubListsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ScrubListsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ScrubListsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScrubListsRes.displayName = 'proto.api.v0alpha.ScrubListsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScrubListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ScrubListRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ScrubListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScrubListRes.displayName = 'proto.api.v0alpha.ScrubListRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteScrubListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteScrubListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteScrubListReq.displayName = 'proto.api.v0alpha.DeleteScrubListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SearchScrubListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SearchScrubListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SearchScrubListReq.displayName = 'proto.api.v0alpha.SearchScrubListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScrubEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ScrubEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScrubEntry.displayName = 'proto.api.v0alpha.ScrubEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RuleAutoCompleteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RuleAutoCompleteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RuleAutoCompleteReq.displayName = 'proto.api.v0alpha.RuleAutoCompleteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RuleAutoCompleteRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.RuleAutoCompleteRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.RuleAutoCompleteRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RuleAutoCompleteRes.displayName = 'proto.api.v0alpha.RuleAutoCompleteRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CheckRuleSetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CheckRuleSetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CheckRuleSetReq.displayName = 'proto.api.v0alpha.CheckRuleSetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CheckRuleSetRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CheckRuleSetRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CheckRuleSetRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CheckRuleSetRes.displayName = 'proto.api.v0alpha.CheckRuleSetRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListRuleSetsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListRuleSetsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListRuleSetsReq.displayName = 'proto.api.v0alpha.ListRuleSetsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListRuleSetsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListRuleSetsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListRuleSetsRes.displayName = 'proto.api.v0alpha.ListRuleSetsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetRuleSetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetRuleSetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetRuleSetReq.displayName = 'proto.api.v0alpha.GetRuleSetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetRuleSetByNameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetRuleSetByNameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetRuleSetByNameReq.displayName = 'proto.api.v0alpha.GetRuleSetByNameReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AssignRuleSetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AssignRuleSetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AssignRuleSetReq.displayName = 'proto.api.v0alpha.AssignRuleSetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AssignRuleSetRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AssignRuleSetRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AssignRuleSetRes.displayName = 'proto.api.v0alpha.AssignRuleSetRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RenameRuleSetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RenameRuleSetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RenameRuleSetReq.displayName = 'proto.api.v0alpha.RenameRuleSetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RenameRuleSetRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RenameRuleSetRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RenameRuleSetRes.displayName = 'proto.api.v0alpha.RenameRuleSetRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateRuleSetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CreateRuleSetReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CreateRuleSetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateRuleSetReq.displayName = 'proto.api.v0alpha.CreateRuleSetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.EnableRuleSetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.EnableRuleSetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.EnableRuleSetReq.displayName = 'proto.api.v0alpha.EnableRuleSetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DisableRuleSetReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DisableRuleSetReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DisableRuleSetReq.displayName = 'proto.api.v0alpha.DisableRuleSetReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.EnableRuleSetRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.EnableRuleSetRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.EnableRuleSetRes.displayName = 'proto.api.v0alpha.EnableRuleSetRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DisableRuleSetRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DisableRuleSetRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DisableRuleSetRes.displayName = 'proto.api.v0alpha.DisableRuleSetRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.EvaluationResults = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.EvaluationResults, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.EvaluationResults.displayName = 'proto.api.v0alpha.EvaluationResults';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RuleSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.RuleSet.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.RuleSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RuleSet.displayName = 'proto.api.v0alpha.RuleSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.Rule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.Rule.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.Rule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.Rule.displayName = 'proto.api.v0alpha.Rule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.Selector.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.Selector.displayName = 'proto.api.v0alpha.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetDefaultRulesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetDefaultRulesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetDefaultRulesReq.displayName = 'proto.api.v0alpha.GetDefaultRulesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetDefaultRulesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.GetDefaultRulesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.GetDefaultRulesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetDefaultRulesRes.displayName = 'proto.api.v0alpha.GetDefaultRulesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetScrubListUploadUrlReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetScrubListUploadUrlReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetScrubListUploadUrlReq.displayName = 'proto.api.v0alpha.GetScrubListUploadUrlReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetScrubListUploadUrlRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetScrubListUploadUrlRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetScrubListUploadUrlRes.displayName = 'proto.api.v0alpha.GetScrubListUploadUrlRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessScrubListUploadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessScrubListUploadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessScrubListUploadReq.displayName = 'proto.api.v0alpha.ProcessScrubListUploadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessScrubListUploadRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ProcessScrubListUploadRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ProcessScrubListUploadRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessScrubListUploadRes.displayName = 'proto.api.v0alpha.ProcessScrubListUploadRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessScrubListDeleteUploadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessScrubListDeleteUploadReq.displayName = 'proto.api.v0alpha.ProcessScrubListDeleteUploadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessScrubListDeleteUploadRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessScrubListDeleteUploadRes.displayName = 'proto.api.v0alpha.ProcessScrubListDeleteUploadRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ExportScrubListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ExportScrubListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ExportScrubListReq.displayName = 'proto.api.v0alpha.ExportScrubListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ExportScrubListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ExportScrubListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ExportScrubListRes.displayName = 'proto.api.v0alpha.ExportScrubListRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CountryCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CountryCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CountryCode.displayName = 'proto.api.v0alpha.CountryCode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.Scenario = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.Scenario, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.Scenario.displayName = 'proto.api.v0alpha.Scenario';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScenarioData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ScenarioData.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ScenarioData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScenarioData.displayName = 'proto.api.v0alpha.ScenarioData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateScenarioReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateScenarioReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateScenarioReq.displayName = 'proto.api.v0alpha.CreateScenarioReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateScenarioRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateScenarioRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateScenarioRes.displayName = 'proto.api.v0alpha.CreateScenarioRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetScenarioReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetScenarioReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetScenarioReq.displayName = 'proto.api.v0alpha.GetScenarioReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetScenarioRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetScenarioRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetScenarioRes.displayName = 'proto.api.v0alpha.GetScenarioRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateScenarioReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateScenarioReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateScenarioReq.displayName = 'proto.api.v0alpha.UpdateScenarioReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateScenarioRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateScenarioRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateScenarioRes.displayName = 'proto.api.v0alpha.UpdateScenarioRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteScenarioReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteScenarioReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteScenarioReq.displayName = 'proto.api.v0alpha.DeleteScenarioReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteScenarioRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteScenarioRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteScenarioRes.displayName = 'proto.api.v0alpha.DeleteScenarioRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RunAssignedScenariosReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RunAssignedScenariosReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RunAssignedScenariosReq.displayName = 'proto.api.v0alpha.RunAssignedScenariosReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RunAssignedScenariosRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.RunAssignedScenariosRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.RunAssignedScenariosRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RunAssignedScenariosRes.displayName = 'proto.api.v0alpha.RunAssignedScenariosRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScenarioResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ScenarioResult.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ScenarioResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScenarioResult.displayName = 'proto.api.v0alpha.ScenarioResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScenarioRuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ScenarioRuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScenarioRuleResponse.displayName = 'proto.api.v0alpha.ScenarioRuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListAllScenariosReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListAllScenariosReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListAllScenariosReq.displayName = 'proto.api.v0alpha.ListAllScenariosReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListAllScenariosRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListAllScenariosRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListAllScenariosRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListAllScenariosRes.displayName = 'proto.api.v0alpha.ListAllScenariosRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListAssignedRuleSetsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListAssignedRuleSetsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListAssignedRuleSetsReq.displayName = 'proto.api.v0alpha.ListAssignedRuleSetsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListAssignedRuleSetsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListAssignedRuleSetsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListAssignedRuleSetsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListAssignedRuleSetsRes.displayName = 'proto.api.v0alpha.ListAssignedRuleSetsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListAssignedScenariosReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListAssignedScenariosReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListAssignedScenariosReq.displayName = 'proto.api.v0alpha.ListAssignedScenariosReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AssignedScenario = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AssignedScenario, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AssignedScenario.displayName = 'proto.api.v0alpha.AssignedScenario';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListAssignedScenariosRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListAssignedScenariosRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListAssignedScenariosRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListAssignedScenariosRes.displayName = 'proto.api.v0alpha.ListAssignedScenariosRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListUnassignedScenariosReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListUnassignedScenariosReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListUnassignedScenariosReq.displayName = 'proto.api.v0alpha.ListUnassignedScenariosReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListUnassignedScenariosRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListUnassignedScenariosRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListUnassignedScenariosRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListUnassignedScenariosRes.displayName = 'proto.api.v0alpha.ListUnassignedScenariosRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.AssignScenarioReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.AssignScenarioReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.AssignScenarioReq.displayName = 'proto.api.v0alpha.AssignScenarioReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UnassignScenarioReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UnassignScenarioReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UnassignScenarioReq.displayName = 'proto.api.v0alpha.UnassignScenarioReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.EnableScenarioReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.EnableScenarioReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.EnableScenarioReq.displayName = 'proto.api.v0alpha.EnableScenarioReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DisableScenarioReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DisableScenarioReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DisableScenarioReq.displayName = 'proto.api.v0alpha.DisableScenarioReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateConsentProfileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateConsentProfileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateConsentProfileReq.displayName = 'proto.api.v0alpha.CreateConsentProfileReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateConsentProfileRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateConsentProfileRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateConsentProfileRes.displayName = 'proto.api.v0alpha.CreateConsentProfileRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConsentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentReq.displayName = 'proto.api.v0alpha.GetConsentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateConsentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CreateConsentReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CreateConsentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateConsentReq.displayName = 'proto.api.v0alpha.CreateConsentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateConsentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateConsentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateConsentRes.displayName = 'proto.api.v0alpha.CreateConsentRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ConsentProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ConsentProfile.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ConsentProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ConsentProfile.displayName = 'proto.api.v0alpha.ConsentProfile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.Consent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.Consent.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.Consent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.Consent.displayName = 'proto.api.v0alpha.Consent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ConsentCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ConsentCondition.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ConsentCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ConsentCondition.displayName = 'proto.api.v0alpha.ConsentCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentProfileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConsentProfileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentProfileReq.displayName = 'proto.api.v0alpha.GetConsentProfileReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateConsentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.UpdateConsentReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.UpdateConsentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateConsentReq.displayName = 'proto.api.v0alpha.UpdateConsentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ExpireConsentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ExpireConsentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ExpireConsentReq.displayName = 'proto.api.v0alpha.ExpireConsentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RevokeConsentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RevokeConsentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RevokeConsentReq.displayName = 'proto.api.v0alpha.RevokeConsentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.EnableConsentProfileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.EnableConsentProfileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.EnableConsentProfileReq.displayName = 'proto.api.v0alpha.EnableConsentProfileReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DisableConsentProfileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DisableConsentProfileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DisableConsentProfileReq.displayName = 'proto.api.v0alpha.DisableConsentProfileReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConsentProfilesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListConsentProfilesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConsentProfilesReq.displayName = 'proto.api.v0alpha.ListConsentProfilesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConsentProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListConsentProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConsentProfile.displayName = 'proto.api.v0alpha.ListConsentProfile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConsentProfilesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListConsentProfilesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListConsentProfilesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConsentProfilesRes.displayName = 'proto.api.v0alpha.ListConsentProfilesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentUploadUrlReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConsentUploadUrlReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentUploadUrlReq.displayName = 'proto.api.v0alpha.GetConsentUploadUrlReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentUploadUrlRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConsentUploadUrlRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentUploadUrlRes.displayName = 'proto.api.v0alpha.GetConsentUploadUrlRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteConsentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteConsentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteConsentReq.displayName = 'proto.api.v0alpha.DeleteConsentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessConsentUploadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessConsentUploadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessConsentUploadReq.displayName = 'proto.api.v0alpha.ProcessConsentUploadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessConsentUploadRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessConsentUploadRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessConsentUploadRes.displayName = 'proto.api.v0alpha.ProcessConsentUploadRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetFieldNamesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetFieldNamesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetFieldNamesReq.displayName = 'proto.api.v0alpha.GetFieldNamesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.FieldNames = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.FieldNames.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.FieldNames, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.FieldNames.displayName = 'proto.api.v0alpha.FieldNames';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetResultDescriptionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetResultDescriptionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetResultDescriptionsReq.displayName = 'proto.api.v0alpha.GetResultDescriptionsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PurgeScrubListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PurgeScrubListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PurgeScrubListReq.displayName = 'proto.api.v0alpha.PurgeScrubListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PurgeScrubListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PurgeScrubListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PurgeScrubListRes.displayName = 'proto.api.v0alpha.PurgeScrubListRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.Empty.displayName = 'proto.api.v0alpha.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ConsentTopic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ConsentTopic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ConsentTopic.displayName = 'proto.api.v0alpha.ConsentTopic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConsentTopicsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListConsentTopicsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConsentTopicsReq.displayName = 'proto.api.v0alpha.ListConsentTopicsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConsentTopicsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListConsentTopicsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListConsentTopicsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConsentTopicsRes.displayName = 'proto.api.v0alpha.ListConsentTopicsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentTopicReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConsentTopicReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentTopicReq.displayName = 'proto.api.v0alpha.GetConsentTopicReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateConsentTopicReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateConsentTopicReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateConsentTopicReq.displayName = 'proto.api.v0alpha.UpdateConsentTopicReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SearchConsentByContentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SearchConsentByContentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SearchConsentByContentReq.displayName = 'proto.api.v0alpha.SearchConsentByContentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ConsentByContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ConsentByContent.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ConsentByContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ConsentByContent.displayName = 'proto.api.v0alpha.ConsentByContent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SearchConsentByContentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SearchConsentByContentRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SearchConsentByContentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SearchConsentByContentRes.displayName = 'proto.api.v0alpha.SearchConsentByContentRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConsentByProfileAndContentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentByProfileAndContentReq.displayName = 'proto.api.v0alpha.GetConsentByProfileAndContentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.GetConsentByProfileAndContentRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.GetConsentByProfileAndContentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentByProfileAndContentRes.displayName = 'proto.api.v0alpha.GetConsentByProfileAndContentRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentByContentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConsentByContentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentByContentReq.displayName = 'proto.api.v0alpha.GetConsentByContentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConsentByContentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConsentByContentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConsentByContentRes.displayName = 'proto.api.v0alpha.GetConsentByContentRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessConsentListDeleteUploadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessConsentListDeleteUploadReq.displayName = 'proto.api.v0alpha.ProcessConsentListDeleteUploadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessConsentListDeleteUploadRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessConsentListDeleteUploadRes.displayName = 'proto.api.v0alpha.ProcessConsentListDeleteUploadRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ProcessConsentListDeleteUploadMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.displayName = 'proto.api.v0alpha.ProcessConsentListDeleteUploadMeta';
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
proto.api.v0alpha.ProcessOutboundCallReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessOutboundCallReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessOutboundCallReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessOutboundCallReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
    callMetadataMap: (f = msg.getCallMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    sourceId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sourceField: jspb.Message.getFieldWithDefault(msg, 6, 0),
    callerId: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq}
 */
proto.api.v0alpha.ProcessOutboundCallReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessOutboundCallReq;
  return proto.api.v0alpha.ProcessOutboundCallReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessOutboundCallReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq}
 */
proto.api.v0alpha.ProcessOutboundCallReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 4:
      var value = msg.getCallMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSourceId(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.CallType.Enum} */ (reader.readEnum());
      msg.setSourceField(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessOutboundCallReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessOutboundCallReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessOutboundCallReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCallMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSourceId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSourceField();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCallerId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string rule_set_name = 1;
 * @return {string}
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.getRuleSetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq} returns this
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.setRuleSetName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string country_code = 2;
 * @return {string}
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq} returns this
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phone_number = 3;
 * @return {string}
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq} returns this
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> call_metadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.getCallMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq} returns this
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.clearCallMetadataMap = function() {
  this.getCallMetadataMap().clear();
  return this;
};


/**
 * optional int64 source_id = 5;
 * @return {number}
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.getSourceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq} returns this
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional api.commons.CallType.Enum source_field = 6;
 * @return {!proto.api.commons.CallType.Enum}
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.getSourceField = function() {
  return /** @type {!proto.api.commons.CallType.Enum} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.CallType.Enum} value
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq} returns this
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.setSourceField = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string caller_id = 7;
 * @return {string}
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.getCallerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessOutboundCallReq} returns this
 */
proto.api.v0alpha.ProcessOutboundCallReq.prototype.setCallerId = function(value) {
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
proto.api.v0alpha.RuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permit: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pluginResponse: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RuleResponse}
 */
proto.api.v0alpha.RuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RuleResponse;
  return proto.api.v0alpha.RuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RuleResponse}
 */
proto.api.v0alpha.RuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleText(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPermit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermit();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPluginResponse();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string rule_text = 1;
 * @return {string}
 */
proto.api.v0alpha.RuleResponse.prototype.getRuleText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RuleResponse} returns this
 */
proto.api.v0alpha.RuleResponse.prototype.setRuleText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool permit = 2;
 * @return {boolean}
 */
proto.api.v0alpha.RuleResponse.prototype.getPermit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.RuleResponse} returns this
 */
proto.api.v0alpha.RuleResponse.prototype.setPermit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string plugin_response = 3;
 * @return {string}
 */
proto.api.v0alpha.RuleResponse.prototype.getPluginResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RuleResponse} returns this
 */
proto.api.v0alpha.RuleResponse.prototype.setPluginResponse = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ProcessRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ProcessRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    permit: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    ruleResponsesList: jspb.Message.toObjectList(msg.getRuleResponsesList(),
    proto.api.v0alpha.RuleResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessRes}
 */
proto.api.v0alpha.ProcessRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessRes;
  return proto.api.v0alpha.ProcessRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessRes}
 */
proto.api.v0alpha.ProcessRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPermit(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.RuleResponse;
      reader.readMessage(value,proto.api.v0alpha.RuleResponse.deserializeBinaryFromReader);
      msg.addRuleResponses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermit();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRuleResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.RuleResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool permit = 1;
 * @return {boolean}
 */
proto.api.v0alpha.ProcessRes.prototype.getPermit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ProcessRes} returns this
 */
proto.api.v0alpha.ProcessRes.prototype.setPermit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated RuleResponse rule_responses = 2;
 * @return {!Array<!proto.api.v0alpha.RuleResponse>}
 */
proto.api.v0alpha.ProcessRes.prototype.getRuleResponsesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.RuleResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.RuleResponse, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.RuleResponse>} value
 * @return {!proto.api.v0alpha.ProcessRes} returns this
*/
proto.api.v0alpha.ProcessRes.prototype.setRuleResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.RuleResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.RuleResponse}
 */
proto.api.v0alpha.ProcessRes.prototype.addRuleResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.RuleResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ProcessRes} returns this
 */
proto.api.v0alpha.ProcessRes.prototype.clearRuleResponsesList = function() {
  return this.setRuleResponsesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ScrubList.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ScrubList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScrubList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScrubList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubList.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.api.v0alpha.ScrubEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScrubList}
 */
proto.api.v0alpha.ScrubList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScrubList;
  return proto.api.v0alpha.ScrubList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScrubList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScrubList}
 */
proto.api.v0alpha.ScrubList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.ScrubEntry;
      reader.readMessage(value,proto.api.v0alpha.ScrubEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScrubList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScrubList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScrubList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v0alpha.ScrubEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string list_id = 2;
 * @return {string}
 */
proto.api.v0alpha.ScrubList.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScrubList} returns this
 */
proto.api.v0alpha.ScrubList.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ScrubEntry entries = 3;
 * @return {!Array<!proto.api.v0alpha.ScrubEntry>}
 */
proto.api.v0alpha.ScrubList.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ScrubEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ScrubEntry, 3));
};


/**
 * @param {!Array<!proto.api.v0alpha.ScrubEntry>} value
 * @return {!proto.api.v0alpha.ScrubList} returns this
*/
proto.api.v0alpha.ScrubList.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v0alpha.ScrubEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScrubEntry}
 */
proto.api.v0alpha.ScrubList.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v0alpha.ScrubEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ScrubList} returns this
 */
proto.api.v0alpha.ScrubList.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
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
proto.api.v0alpha.ScrubEntryDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScrubEntryDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScrubEntryDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubEntryDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScrubEntryDetails}
 */
proto.api.v0alpha.ScrubEntryDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScrubEntryDetails;
  return proto.api.v0alpha.ScrubEntryDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScrubEntryDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScrubEntryDetails}
 */
proto.api.v0alpha.ScrubEntryDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScrubEntryDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScrubEntryDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScrubEntryDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubEntryDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.api.v0alpha.ScrubEntryDetails.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScrubEntryDetails} returns this
 */
proto.api.v0alpha.ScrubEntryDetails.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ScrubEntryDetails.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ScrubEntryDetails} returns this
*/
proto.api.v0alpha.ScrubEntryDetails.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScrubEntryDetails} returns this
 */
proto.api.v0alpha.ScrubEntryDetails.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScrubEntryDetails.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CreateScrubListReq.repeatedFields_ = [10,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateScrubListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateScrubListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateScrubListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateScrubListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    contentType: jspb.Message.getFieldWithDefault(msg, 11, 0),
    countryCode: jspb.Message.getFieldWithDefault(msg, 12, ""),
    scrubEntryDetailsList: jspb.Message.toObjectList(msg.getScrubEntryDetailsList(),
    proto.api.v0alpha.ScrubEntryDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateScrubListReq}
 */
proto.api.v0alpha.CreateScrubListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateScrubListReq;
  return proto.api.v0alpha.CreateScrubListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateScrubListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateScrubListReq}
 */
proto.api.v0alpha.CreateScrubListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addList(value);
      break;
    case 11:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 13:
      var value = new proto.api.v0alpha.ScrubEntryDetails;
      reader.readMessage(value,proto.api.v0alpha.ScrubEntryDetails.deserializeBinaryFromReader);
      msg.addScrubEntryDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateScrubListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateScrubListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateScrubListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateScrubListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getScrubEntryDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.api.v0alpha.ScrubEntryDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional string list_id = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateScrubListReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateScrubListReq} returns this
 */
proto.api.v0alpha.CreateScrubListReq.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string list = 10;
 * @return {!Array<string>}
 */
proto.api.v0alpha.CreateScrubListReq.prototype.getListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.CreateScrubListReq} returns this
 */
proto.api.v0alpha.CreateScrubListReq.prototype.setListList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CreateScrubListReq} returns this
 */
proto.api.v0alpha.CreateScrubListReq.prototype.addList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateScrubListReq} returns this
 */
proto.api.v0alpha.CreateScrubListReq.prototype.clearListList = function() {
  return this.setListList([]);
};


/**
 * optional api.commons.ContentType content_type = 11;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.CreateScrubListReq.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.CreateScrubListReq} returns this
 */
proto.api.v0alpha.CreateScrubListReq.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string country_code = 12;
 * @return {string}
 */
proto.api.v0alpha.CreateScrubListReq.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateScrubListReq} returns this
 */
proto.api.v0alpha.CreateScrubListReq.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated ScrubEntryDetails scrub_entry_details = 13;
 * @return {!Array<!proto.api.v0alpha.ScrubEntryDetails>}
 */
proto.api.v0alpha.CreateScrubListReq.prototype.getScrubEntryDetailsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ScrubEntryDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ScrubEntryDetails, 13));
};


/**
 * @param {!Array<!proto.api.v0alpha.ScrubEntryDetails>} value
 * @return {!proto.api.v0alpha.CreateScrubListReq} returns this
*/
proto.api.v0alpha.CreateScrubListReq.prototype.setScrubEntryDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.api.v0alpha.ScrubEntryDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScrubEntryDetails}
 */
proto.api.v0alpha.CreateScrubListReq.prototype.addScrubEntryDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.api.v0alpha.ScrubEntryDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateScrubListReq} returns this
 */
proto.api.v0alpha.CreateScrubListReq.prototype.clearScrubEntryDetailsList = function() {
  return this.setScrubEntryDetailsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.AddScrubListEntriesReq.repeatedFields_ = [10,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AddScrubListEntriesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AddScrubListEntriesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AddScrubListEntriesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    contentType: jspb.Message.getFieldWithDefault(msg, 11, 0),
    countryCode: jspb.Message.getFieldWithDefault(msg, 12, ""),
    scrubEntryDetailsList: jspb.Message.toObjectList(msg.getScrubEntryDetailsList(),
    proto.api.v0alpha.ScrubEntryDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq}
 */
proto.api.v0alpha.AddScrubListEntriesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AddScrubListEntriesReq;
  return proto.api.v0alpha.AddScrubListEntriesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AddScrubListEntriesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq}
 */
proto.api.v0alpha.AddScrubListEntriesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addList(value);
      break;
    case 11:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 13:
      var value = new proto.api.v0alpha.ScrubEntryDetails;
      reader.readMessage(value,proto.api.v0alpha.ScrubEntryDetails.deserializeBinaryFromReader);
      msg.addScrubEntryDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AddScrubListEntriesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AddScrubListEntriesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AddScrubListEntriesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getScrubEntryDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.api.v0alpha.ScrubEntryDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional string list_id = 2;
 * @return {string}
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq} returns this
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string list = 10;
 * @return {!Array<string>}
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.getListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq} returns this
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.setListList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq} returns this
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.addList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq} returns this
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.clearListList = function() {
  return this.setListList([]);
};


/**
 * optional api.commons.ContentType content_type = 11;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq} returns this
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string country_code = 12;
 * @return {string}
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq} returns this
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated ScrubEntryDetails scrub_entry_details = 13;
 * @return {!Array<!proto.api.v0alpha.ScrubEntryDetails>}
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.getScrubEntryDetailsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ScrubEntryDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ScrubEntryDetails, 13));
};


/**
 * @param {!Array<!proto.api.v0alpha.ScrubEntryDetails>} value
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq} returns this
*/
proto.api.v0alpha.AddScrubListEntriesReq.prototype.setScrubEntryDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.api.v0alpha.ScrubEntryDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScrubEntryDetails}
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.addScrubEntryDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.api.v0alpha.ScrubEntryDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.AddScrubListEntriesReq} returns this
 */
proto.api.v0alpha.AddScrubListEntriesReq.prototype.clearScrubEntryDetailsList = function() {
  return this.setScrubEntryDetailsList([]);
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
proto.api.v0alpha.UpdateScrubEntryReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateScrubEntryReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateScrubEntryReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateScrubEntryReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    notes: (f = msg.getNotes()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    content: (f = msg.getContent()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    countryCode: (f = msg.getCountryCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq}
 */
proto.api.v0alpha.UpdateScrubEntryReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateScrubEntryReq;
  return proto.api.v0alpha.UpdateScrubEntryReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateScrubEntryReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq}
 */
proto.api.v0alpha.UpdateScrubEntryReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setNotes(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountryCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateScrubEntryReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateScrubEntryReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateScrubEntryReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNotes();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCountryCode();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string list_id = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue notes = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.getNotes = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
*/
proto.api.v0alpha.UpdateScrubEntryReq.prototype.setNotes = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.clearNotes = function() {
  return this.setNotes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.hasNotes = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.StringValue content = 11;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.getContent = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 11));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
*/
proto.api.v0alpha.UpdateScrubEntryReq.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.hasContent = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp expiration_date = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
*/
proto.api.v0alpha.UpdateScrubEntryReq.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.StringValue country_code = 13;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.getCountryCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 13));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
*/
proto.api.v0alpha.UpdateScrubEntryReq.prototype.setCountryCode = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateScrubEntryReq} returns this
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.clearCountryCode = function() {
  return this.setCountryCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateScrubEntryReq.prototype.hasCountryCode = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.api.v0alpha.UpdateScrubEntryRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateScrubEntryRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateScrubEntryRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateScrubEntryRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateScrubEntryRes}
 */
proto.api.v0alpha.UpdateScrubEntryRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateScrubEntryRes;
  return proto.api.v0alpha.UpdateScrubEntryRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateScrubEntryRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateScrubEntryRes}
 */
proto.api.v0alpha.UpdateScrubEntryRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateScrubEntryRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateScrubEntryRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateScrubEntryRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateScrubEntryRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteScrubListEntriesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteScrubListEntriesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteScrubListEntriesReq}
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteScrubListEntriesReq;
  return proto.api.v0alpha.DeleteScrubListEntriesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteScrubListEntriesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteScrubListEntriesReq}
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteScrubListEntriesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteScrubListEntriesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * optional string list_id = 2;
 * @return {string}
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteScrubListEntriesReq} returns this
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string list = 10;
 * @return {!Array<string>}
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.prototype.getListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.DeleteScrubListEntriesReq} returns this
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.prototype.setListList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.DeleteScrubListEntriesReq} returns this
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.prototype.addList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.DeleteScrubListEntriesReq} returns this
 */
proto.api.v0alpha.DeleteScrubListEntriesReq.prototype.clearListList = function() {
  return this.setListList([]);
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
proto.api.v0alpha.GetScrubListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetScrubListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetScrubListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScrubListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetScrubListReq}
 */
proto.api.v0alpha.GetScrubListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetScrubListReq;
  return proto.api.v0alpha.GetScrubListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetScrubListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetScrubListReq}
 */
proto.api.v0alpha.GetScrubListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetScrubListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetScrubListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetScrubListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScrubListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string list_id = 2;
 * @return {string}
 */
proto.api.v0alpha.GetScrubListReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetScrubListReq} returns this
 */
proto.api.v0alpha.GetScrubListReq.prototype.setListId = function(value) {
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
proto.api.v0alpha.GetScrubListsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetScrubListsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetScrubListsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScrubListsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetScrubListsReq}
 */
proto.api.v0alpha.GetScrubListsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetScrubListsReq;
  return proto.api.v0alpha.GetScrubListsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetScrubListsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetScrubListsReq}
 */
proto.api.v0alpha.GetScrubListsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetScrubListsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetScrubListsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetScrubListsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScrubListsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ScrubListsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ScrubListsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScrubListsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScrubListsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubListsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    listsList: jspb.Message.toObjectList(msg.getListsList(),
    proto.api.v0alpha.ScrubListRes.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScrubListsRes}
 */
proto.api.v0alpha.ScrubListsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScrubListsRes;
  return proto.api.v0alpha.ScrubListsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScrubListsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScrubListsRes}
 */
proto.api.v0alpha.ScrubListsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.ScrubListRes;
      reader.readMessage(value,proto.api.v0alpha.ScrubListRes.deserializeBinaryFromReader);
      msg.addLists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScrubListsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScrubListsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScrubListsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubListsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.ScrubListRes.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ScrubListRes lists = 1;
 * @return {!Array<!proto.api.v0alpha.ScrubListRes>}
 */
proto.api.v0alpha.ScrubListsRes.prototype.getListsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ScrubListRes>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ScrubListRes, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.ScrubListRes>} value
 * @return {!proto.api.v0alpha.ScrubListsRes} returns this
*/
proto.api.v0alpha.ScrubListsRes.prototype.setListsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.ScrubListRes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScrubListRes}
 */
proto.api.v0alpha.ScrubListsRes.prototype.addLists = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.ScrubListRes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ScrubListsRes} returns this
 */
proto.api.v0alpha.ScrubListsRes.prototype.clearListsList = function() {
  return this.setListsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ScrubListRes.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ScrubListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScrubListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScrubListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    readOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    contentType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    entriesAdded: jspb.Message.getFieldWithDefault(msg, 4, 0),
    invalidEntriesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScrubListRes}
 */
proto.api.v0alpha.ScrubListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScrubListRes;
  return proto.api.v0alpha.ScrubListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScrubListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScrubListRes}
 */
proto.api.v0alpha.ScrubListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadOnly(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEntriesAdded(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addInvalidEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScrubListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScrubListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScrubListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReadOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getEntriesAdded();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getInvalidEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string list_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ScrubListRes.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScrubListRes} returns this
 */
proto.api.v0alpha.ScrubListRes.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool read_only = 2;
 * @return {boolean}
 */
proto.api.v0alpha.ScrubListRes.prototype.getReadOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ScrubListRes} returns this
 */
proto.api.v0alpha.ScrubListRes.prototype.setReadOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional api.commons.ContentType content_type = 3;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.ScrubListRes.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.ScrubListRes} returns this
 */
proto.api.v0alpha.ScrubListRes.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 entries_added = 4;
 * @return {number}
 */
proto.api.v0alpha.ScrubListRes.prototype.getEntriesAdded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScrubListRes} returns this
 */
proto.api.v0alpha.ScrubListRes.prototype.setEntriesAdded = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string invalid_entries = 5;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ScrubListRes.prototype.getInvalidEntriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ScrubListRes} returns this
 */
proto.api.v0alpha.ScrubListRes.prototype.setInvalidEntriesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScrubListRes} returns this
 */
proto.api.v0alpha.ScrubListRes.prototype.addInvalidEntries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ScrubListRes} returns this
 */
proto.api.v0alpha.ScrubListRes.prototype.clearInvalidEntriesList = function() {
  return this.setInvalidEntriesList([]);
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
proto.api.v0alpha.DeleteScrubListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteScrubListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteScrubListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteScrubListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteScrubListReq}
 */
proto.api.v0alpha.DeleteScrubListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteScrubListReq;
  return proto.api.v0alpha.DeleteScrubListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteScrubListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteScrubListReq}
 */
proto.api.v0alpha.DeleteScrubListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteScrubListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteScrubListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteScrubListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteScrubListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string list_id = 2;
 * @return {string}
 */
proto.api.v0alpha.DeleteScrubListReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteScrubListReq} returns this
 */
proto.api.v0alpha.DeleteScrubListReq.prototype.setListId = function(value) {
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
proto.api.v0alpha.SearchScrubListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SearchScrubListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SearchScrubListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchScrubListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    term: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SearchScrubListReq}
 */
proto.api.v0alpha.SearchScrubListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SearchScrubListReq;
  return proto.api.v0alpha.SearchScrubListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SearchScrubListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SearchScrubListReq}
 */
proto.api.v0alpha.SearchScrubListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SearchScrubListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SearchScrubListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SearchScrubListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchScrubListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string list_id = 2;
 * @return {string}
 */
proto.api.v0alpha.SearchScrubListReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchScrubListReq} returns this
 */
proto.api.v0alpha.SearchScrubListReq.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string term = 3;
 * @return {string}
 */
proto.api.v0alpha.SearchScrubListReq.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchScrubListReq} returns this
 */
proto.api.v0alpha.SearchScrubListReq.prototype.setTerm = function(value) {
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
proto.api.v0alpha.ScrubEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScrubEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScrubEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    countrySid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    listId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sourceId: jspb.Message.getFieldWithDefault(msg, 7, 0),
    sourceField: jspb.Message.getFieldWithDefault(msg, 8, ""),
    notes: (f = msg.getNotes()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    content: (f = msg.getContent()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    result: (f = msg.getResult()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 14, 0),
    countryCode: (f = msg.getCountryCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: (f = msg.getCreatedBy()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScrubEntry}
 */
proto.api.v0alpha.ScrubEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScrubEntry;
  return proto.api.v0alpha.ScrubEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScrubEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScrubEntry}
 */
proto.api.v0alpha.ScrubEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountrySid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSourceId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceField(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setNotes(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 14:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 15:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountryCode(value);
      break;
    case 200:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 201:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCreatedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScrubEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScrubEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScrubEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScrubEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountrySid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSourceId();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getSourceField();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getNotes();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getCountryCode();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      200,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f != null) {
    writer.writeMessage(
      201,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 country_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.ScrubEntry.prototype.getCountrySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.setCountrySid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string list_id = 6;
 * @return {string}
 */
proto.api.v0alpha.ScrubEntry.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 source_id = 7;
 * @return {number}
 */
proto.api.v0alpha.ScrubEntry.prototype.getSourceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string source_field = 8;
 * @return {string}
 */
proto.api.v0alpha.ScrubEntry.prototype.getSourceField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.setSourceField = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional google.protobuf.StringValue notes = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.ScrubEntry.prototype.getNotes = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
*/
proto.api.v0alpha.ScrubEntry.prototype.setNotes = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.clearNotes = function() {
  return this.setNotes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScrubEntry.prototype.hasNotes = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.StringValue content = 11;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.ScrubEntry.prototype.getContent = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 11));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
*/
proto.api.v0alpha.ScrubEntry.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScrubEntry.prototype.hasContent = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp expiration_date = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ScrubEntry.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
*/
proto.api.v0alpha.ScrubEntry.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScrubEntry.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.StringValue result = 13;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.ScrubEntry.prototype.getResult = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 13));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
*/
proto.api.v0alpha.ScrubEntry.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScrubEntry.prototype.hasResult = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional api.commons.ContentType type = 14;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.ScrubEntry.prototype.getType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional google.protobuf.StringValue country_code = 15;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.ScrubEntry.prototype.getCountryCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 15));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
*/
proto.api.v0alpha.ScrubEntry.prototype.setCountryCode = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.clearCountryCode = function() {
  return this.setCountryCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScrubEntry.prototype.hasCountryCode = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 200;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ScrubEntry.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 200));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
*/
proto.api.v0alpha.ScrubEntry.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 200, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScrubEntry.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 200) != null;
};


/**
 * optional google.protobuf.StringValue created_by = 201;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.ScrubEntry.prototype.getCreatedBy = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 201));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
*/
proto.api.v0alpha.ScrubEntry.prototype.setCreatedBy = function(value) {
  return jspb.Message.setWrapperField(this, 201, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScrubEntry} returns this
 */
proto.api.v0alpha.ScrubEntry.prototype.clearCreatedBy = function() {
  return this.setCreatedBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScrubEntry.prototype.hasCreatedBy = function() {
  return jspb.Message.getField(this, 201) != null;
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
proto.api.v0alpha.RuleAutoCompleteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RuleAutoCompleteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RuleAutoCompleteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RuleAutoCompleteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    phrase: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cursor: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RuleAutoCompleteReq}
 */
proto.api.v0alpha.RuleAutoCompleteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RuleAutoCompleteReq;
  return proto.api.v0alpha.RuleAutoCompleteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RuleAutoCompleteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RuleAutoCompleteReq}
 */
proto.api.v0alpha.RuleAutoCompleteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhrase(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCursor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RuleAutoCompleteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RuleAutoCompleteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RuleAutoCompleteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RuleAutoCompleteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhrase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCursor();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string phrase = 1;
 * @return {string}
 */
proto.api.v0alpha.RuleAutoCompleteReq.prototype.getPhrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RuleAutoCompleteReq} returns this
 */
proto.api.v0alpha.RuleAutoCompleteReq.prototype.setPhrase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 cursor = 2;
 * @return {number}
 */
proto.api.v0alpha.RuleAutoCompleteReq.prototype.getCursor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.RuleAutoCompleteReq} returns this
 */
proto.api.v0alpha.RuleAutoCompleteReq.prototype.setCursor = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.RuleAutoCompleteRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.RuleAutoCompleteRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RuleAutoCompleteRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RuleAutoCompleteRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RuleAutoCompleteRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RuleAutoCompleteRes}
 */
proto.api.v0alpha.RuleAutoCompleteRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RuleAutoCompleteRes;
  return proto.api.v0alpha.RuleAutoCompleteRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RuleAutoCompleteRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RuleAutoCompleteRes}
 */
proto.api.v0alpha.RuleAutoCompleteRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RuleAutoCompleteRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RuleAutoCompleteRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RuleAutoCompleteRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RuleAutoCompleteRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string options = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.RuleAutoCompleteRes.prototype.getOptionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.RuleAutoCompleteRes} returns this
 */
proto.api.v0alpha.RuleAutoCompleteRes.prototype.setOptionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.RuleAutoCompleteRes} returns this
 */
proto.api.v0alpha.RuleAutoCompleteRes.prototype.addOptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.RuleAutoCompleteRes} returns this
 */
proto.api.v0alpha.RuleAutoCompleteRes.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
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
proto.api.v0alpha.CheckRuleSetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CheckRuleSetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CheckRuleSetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CheckRuleSetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    phrase: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CheckRuleSetReq}
 */
proto.api.v0alpha.CheckRuleSetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CheckRuleSetReq;
  return proto.api.v0alpha.CheckRuleSetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CheckRuleSetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CheckRuleSetReq}
 */
proto.api.v0alpha.CheckRuleSetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhrase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CheckRuleSetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CheckRuleSetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CheckRuleSetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CheckRuleSetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhrase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string phrase = 1;
 * @return {string}
 */
proto.api.v0alpha.CheckRuleSetReq.prototype.getPhrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CheckRuleSetReq} returns this
 */
proto.api.v0alpha.CheckRuleSetReq.prototype.setPhrase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CheckRuleSetRes.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CheckRuleSetRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CheckRuleSetRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CheckRuleSetRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.api.v0alpha.Rule.toObject, includeInstance),
    warningsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CheckRuleSetRes}
 */
proto.api.v0alpha.CheckRuleSetRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CheckRuleSetRes;
  return proto.api.v0alpha.CheckRuleSetRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CheckRuleSetRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CheckRuleSetRes}
 */
proto.api.v0alpha.CheckRuleSetRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Rule;
      reader.readMessage(value,proto.api.v0alpha.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addWarnings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CheckRuleSetRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CheckRuleSetRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CheckRuleSetRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.Rule.serializeBinaryToWriter
    );
  }
  f = message.getWarningsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated Rule rules = 1;
 * @return {!Array<!proto.api.v0alpha.Rule>}
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Rule, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.Rule>} value
 * @return {!proto.api.v0alpha.CheckRuleSetRes} returns this
*/
proto.api.v0alpha.CheckRuleSetRes.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Rule}
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CheckRuleSetRes} returns this
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


/**
 * repeated string warnings = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.getWarningsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.CheckRuleSetRes} returns this
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.setWarningsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CheckRuleSetRes} returns this
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.addWarnings = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CheckRuleSetRes} returns this
 */
proto.api.v0alpha.CheckRuleSetRes.prototype.clearWarningsList = function() {
  return this.setWarningsList([]);
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
proto.api.v0alpha.ListRuleSetsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListRuleSetsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListRuleSetsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListRuleSetsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListRuleSetsReq}
 */
proto.api.v0alpha.ListRuleSetsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListRuleSetsReq;
  return proto.api.v0alpha.ListRuleSetsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListRuleSetsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListRuleSetsReq}
 */
proto.api.v0alpha.ListRuleSetsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListRuleSetsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListRuleSetsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListRuleSetsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListRuleSetsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeDisabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool include_disabled = 2;
 * @return {boolean}
 */
proto.api.v0alpha.ListRuleSetsReq.prototype.getIncludeDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ListRuleSetsReq} returns this
 */
proto.api.v0alpha.ListRuleSetsReq.prototype.setIncludeDisabled = function(value) {
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
proto.api.v0alpha.ListRuleSetsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListRuleSetsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListRuleSetsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListRuleSetsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ruleCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListRuleSetsRes}
 */
proto.api.v0alpha.ListRuleSetsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListRuleSetsRes;
  return proto.api.v0alpha.ListRuleSetsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListRuleSetsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListRuleSetsRes}
 */
proto.api.v0alpha.ListRuleSetsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRuleCount(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListRuleSetsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListRuleSetsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListRuleSetsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetId();
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
  f = message.getRuleCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string rule_set_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListRuleSetsRes} returns this
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.setRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListRuleSetsRes} returns this
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 rule_count = 4;
 * @return {number}
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.getRuleCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListRuleSetsRes} returns this
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.setRuleCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool disabled = 5;
 * @return {boolean}
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ListRuleSetsRes} returns this
 */
proto.api.v0alpha.ListRuleSetsRes.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.api.v0alpha.GetRuleSetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetRuleSetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetRuleSetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetRuleSetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ruleSetSha: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetRuleSetReq}
 */
proto.api.v0alpha.GetRuleSetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetRuleSetReq;
  return proto.api.v0alpha.GetRuleSetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetRuleSetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetRuleSetReq}
 */
proto.api.v0alpha.GetRuleSetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetSha(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetRuleSetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetRuleSetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetRuleSetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetRuleSetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRuleSetSha();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string rule_set_id = 1;
 * @return {string}
 */
proto.api.v0alpha.GetRuleSetReq.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetRuleSetReq} returns this
 */
proto.api.v0alpha.GetRuleSetReq.prototype.setRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string rule_set_sha = 2;
 * @return {string}
 */
proto.api.v0alpha.GetRuleSetReq.prototype.getRuleSetSha = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetRuleSetReq} returns this
 */
proto.api.v0alpha.GetRuleSetReq.prototype.setRuleSetSha = function(value) {
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
proto.api.v0alpha.GetRuleSetByNameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetRuleSetByNameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetRuleSetByNameReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetRuleSetByNameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetRuleSetByNameReq}
 */
proto.api.v0alpha.GetRuleSetByNameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetRuleSetByNameReq;
  return proto.api.v0alpha.GetRuleSetByNameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetRuleSetByNameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetRuleSetByNameReq}
 */
proto.api.v0alpha.GetRuleSetByNameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
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
proto.api.v0alpha.GetRuleSetByNameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetRuleSetByNameReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetRuleSetByNameReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetRuleSetByNameReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v0alpha.GetRuleSetByNameReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetRuleSetByNameReq} returns this
 */
proto.api.v0alpha.GetRuleSetByNameReq.prototype.setName = function(value) {
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
proto.api.v0alpha.AssignRuleSetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AssignRuleSetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AssignRuleSetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AssignRuleSetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    commType: (f = msg.getCommType()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    commId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ruleSetId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AssignRuleSetReq}
 */
proto.api.v0alpha.AssignRuleSetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AssignRuleSetReq;
  return proto.api.v0alpha.AssignRuleSetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AssignRuleSetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AssignRuleSetReq}
 */
proto.api.v0alpha.AssignRuleSetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setCommType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommId(value);
      break;
    case 3:
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
proto.api.v0alpha.AssignRuleSetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AssignRuleSetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AssignRuleSetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AssignRuleSetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getCommId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional api.commons.CommType comm_type = 1;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.AssignRuleSetReq.prototype.getCommType = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 1));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.AssignRuleSetReq} returns this
*/
proto.api.v0alpha.AssignRuleSetReq.prototype.setCommType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.AssignRuleSetReq} returns this
 */
proto.api.v0alpha.AssignRuleSetReq.prototype.clearCommType = function() {
  return this.setCommType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.AssignRuleSetReq.prototype.hasCommType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string comm_id = 2;
 * @return {string}
 */
proto.api.v0alpha.AssignRuleSetReq.prototype.getCommId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AssignRuleSetReq} returns this
 */
proto.api.v0alpha.AssignRuleSetReq.prototype.setCommId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string rule_set_id = 3;
 * @return {string}
 */
proto.api.v0alpha.AssignRuleSetReq.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AssignRuleSetReq} returns this
 */
proto.api.v0alpha.AssignRuleSetReq.prototype.setRuleSetId = function(value) {
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
proto.api.v0alpha.AssignRuleSetRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AssignRuleSetRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AssignRuleSetRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AssignRuleSetRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplRuleSetAssignmentId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AssignRuleSetRes}
 */
proto.api.v0alpha.AssignRuleSetRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AssignRuleSetRes;
  return proto.api.v0alpha.AssignRuleSetRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AssignRuleSetRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AssignRuleSetRes}
 */
proto.api.v0alpha.AssignRuleSetRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetAssignmentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.AssignRuleSetRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AssignRuleSetRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AssignRuleSetRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AssignRuleSetRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplRuleSetAssignmentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cpl_rule_set_assignment_id = 1;
 * @return {string}
 */
proto.api.v0alpha.AssignRuleSetRes.prototype.getCplRuleSetAssignmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AssignRuleSetRes} returns this
 */
proto.api.v0alpha.AssignRuleSetRes.prototype.setCplRuleSetAssignmentId = function(value) {
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
proto.api.v0alpha.RenameRuleSetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RenameRuleSetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RenameRuleSetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RenameRuleSetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RenameRuleSetReq}
 */
proto.api.v0alpha.RenameRuleSetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RenameRuleSetReq;
  return proto.api.v0alpha.RenameRuleSetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RenameRuleSetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RenameRuleSetReq}
 */
proto.api.v0alpha.RenameRuleSetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetId(value);
      break;
    case 3:
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
proto.api.v0alpha.RenameRuleSetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RenameRuleSetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RenameRuleSetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RenameRuleSetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetId();
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
};


/**
 * optional string rule_set_id = 2;
 * @return {string}
 */
proto.api.v0alpha.RenameRuleSetReq.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RenameRuleSetReq} returns this
 */
proto.api.v0alpha.RenameRuleSetReq.prototype.setRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v0alpha.RenameRuleSetReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RenameRuleSetReq} returns this
 */
proto.api.v0alpha.RenameRuleSetReq.prototype.setName = function(value) {
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
proto.api.v0alpha.RenameRuleSetRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RenameRuleSetRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RenameRuleSetRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RenameRuleSetRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.RenameRuleSetRes}
 */
proto.api.v0alpha.RenameRuleSetRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RenameRuleSetRes;
  return proto.api.v0alpha.RenameRuleSetRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RenameRuleSetRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RenameRuleSetRes}
 */
proto.api.v0alpha.RenameRuleSetRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.RenameRuleSetRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RenameRuleSetRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RenameRuleSetRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RenameRuleSetRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CreateRuleSetReq.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateRuleSetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateRuleSetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateRuleSetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rulesText: jspb.Message.getFieldWithDefault(msg, 6, ""),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.api.v0alpha.Rule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateRuleSetReq}
 */
proto.api.v0alpha.CreateRuleSetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateRuleSetReq;
  return proto.api.v0alpha.CreateRuleSetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateRuleSetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateRuleSetReq}
 */
proto.api.v0alpha.CreateRuleSetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRulesText(value);
      break;
    case 7:
      var value = new proto.api.v0alpha.Rule;
      reader.readMessage(value,proto.api.v0alpha.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateRuleSetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateRuleSetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateRuleSetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      1,
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
  f = message.getRulesText();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.api.v0alpha.Rule.serializeBinaryToWriter
    );
  }
};


/**
 * optional string rule_set_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateRuleSetReq} returns this
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.setRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateRuleSetReq} returns this
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string rules_text = 6;
 * @return {string}
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.getRulesText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateRuleSetReq} returns this
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.setRulesText = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Rule rules = 7;
 * @return {!Array<!proto.api.v0alpha.Rule>}
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Rule, 7));
};


/**
 * @param {!Array<!proto.api.v0alpha.Rule>} value
 * @return {!proto.api.v0alpha.CreateRuleSetReq} returns this
*/
proto.api.v0alpha.CreateRuleSetReq.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.v0alpha.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Rule}
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.v0alpha.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateRuleSetReq} returns this
 */
proto.api.v0alpha.CreateRuleSetReq.prototype.clearRulesList = function() {
  return this.setRulesList([]);
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
proto.api.v0alpha.EnableRuleSetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.EnableRuleSetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.EnableRuleSetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EnableRuleSetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ruleSetSha: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.EnableRuleSetReq}
 */
proto.api.v0alpha.EnableRuleSetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.EnableRuleSetReq;
  return proto.api.v0alpha.EnableRuleSetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.EnableRuleSetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.EnableRuleSetReq}
 */
proto.api.v0alpha.EnableRuleSetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetSha(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.EnableRuleSetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.EnableRuleSetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.EnableRuleSetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EnableRuleSetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRuleSetSha();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string rule_set_id = 2;
 * @return {string}
 */
proto.api.v0alpha.EnableRuleSetReq.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.EnableRuleSetReq} returns this
 */
proto.api.v0alpha.EnableRuleSetReq.prototype.setRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string rule_set_sha = 3;
 * @return {string}
 */
proto.api.v0alpha.EnableRuleSetReq.prototype.getRuleSetSha = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.EnableRuleSetReq} returns this
 */
proto.api.v0alpha.EnableRuleSetReq.prototype.setRuleSetSha = function(value) {
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
proto.api.v0alpha.DisableRuleSetReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DisableRuleSetReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DisableRuleSetReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DisableRuleSetReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ruleSetSha: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DisableRuleSetReq}
 */
proto.api.v0alpha.DisableRuleSetReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DisableRuleSetReq;
  return proto.api.v0alpha.DisableRuleSetReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DisableRuleSetReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DisableRuleSetReq}
 */
proto.api.v0alpha.DisableRuleSetReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetSha(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DisableRuleSetReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DisableRuleSetReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DisableRuleSetReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DisableRuleSetReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRuleSetSha();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string rule_set_id = 2;
 * @return {string}
 */
proto.api.v0alpha.DisableRuleSetReq.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DisableRuleSetReq} returns this
 */
proto.api.v0alpha.DisableRuleSetReq.prototype.setRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string rule_set_sha = 3;
 * @return {string}
 */
proto.api.v0alpha.DisableRuleSetReq.prototype.getRuleSetSha = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DisableRuleSetReq} returns this
 */
proto.api.v0alpha.DisableRuleSetReq.prototype.setRuleSetSha = function(value) {
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
proto.api.v0alpha.EnableRuleSetRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.EnableRuleSetRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.EnableRuleSetRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EnableRuleSetRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.EnableRuleSetRes}
 */
proto.api.v0alpha.EnableRuleSetRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.EnableRuleSetRes;
  return proto.api.v0alpha.EnableRuleSetRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.EnableRuleSetRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.EnableRuleSetRes}
 */
proto.api.v0alpha.EnableRuleSetRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.EnableRuleSetRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.EnableRuleSetRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.EnableRuleSetRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EnableRuleSetRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DisableRuleSetRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DisableRuleSetRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DisableRuleSetRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DisableRuleSetRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DisableRuleSetRes}
 */
proto.api.v0alpha.DisableRuleSetRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DisableRuleSetRes;
  return proto.api.v0alpha.DisableRuleSetRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DisableRuleSetRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DisableRuleSetRes}
 */
proto.api.v0alpha.DisableRuleSetRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DisableRuleSetRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DisableRuleSetRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DisableRuleSetRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DisableRuleSetRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.EvaluationResults.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.EvaluationResults.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.EvaluationResults} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EvaluationResults.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.EvaluationResults}
 */
proto.api.v0alpha.EvaluationResults.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.EvaluationResults;
  return proto.api.v0alpha.EvaluationResults.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.EvaluationResults} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.EvaluationResults}
 */
proto.api.v0alpha.EvaluationResults.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.EvaluationResults.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.EvaluationResults.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.EvaluationResults} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EvaluationResults.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.RuleSet.repeatedFields_ = [20];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.RuleSet.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RuleSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RuleSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RuleSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    head: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    rulesText: jspb.Message.getFieldWithDefault(msg, 9, ""),
    sha: jspb.Message.getFieldWithDefault(msg, 10, ""),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.api.v0alpha.Rule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RuleSet}
 */
proto.api.v0alpha.RuleSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RuleSet;
  return proto.api.v0alpha.RuleSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RuleSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RuleSet}
 */
proto.api.v0alpha.RuleSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleSetId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHead(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRulesText(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSha(value);
      break;
    case 20:
      var value = new proto.api.v0alpha.Rule;
      reader.readMessage(value,proto.api.v0alpha.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RuleSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RuleSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RuleSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RuleSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      1,
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
  f = message.getHead();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRulesText();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSha();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.api.v0alpha.Rule.serializeBinaryToWriter
    );
  }
};


/**
 * optional string rule_set_id = 1;
 * @return {string}
 */
proto.api.v0alpha.RuleSet.prototype.getRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RuleSet} returns this
 */
proto.api.v0alpha.RuleSet.prototype.setRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.api.v0alpha.RuleSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RuleSet} returns this
 */
proto.api.v0alpha.RuleSet.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool head = 5;
 * @return {boolean}
 */
proto.api.v0alpha.RuleSet.prototype.getHead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.RuleSet} returns this
 */
proto.api.v0alpha.RuleSet.prototype.setHead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool disabled = 6;
 * @return {boolean}
 */
proto.api.v0alpha.RuleSet.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.RuleSet} returns this
 */
proto.api.v0alpha.RuleSet.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string rules_text = 9;
 * @return {string}
 */
proto.api.v0alpha.RuleSet.prototype.getRulesText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RuleSet} returns this
 */
proto.api.v0alpha.RuleSet.prototype.setRulesText = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string sha = 10;
 * @return {string}
 */
proto.api.v0alpha.RuleSet.prototype.getSha = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RuleSet} returns this
 */
proto.api.v0alpha.RuleSet.prototype.setSha = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated Rule rules = 20;
 * @return {!Array<!proto.api.v0alpha.Rule>}
 */
proto.api.v0alpha.RuleSet.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Rule, 20));
};


/**
 * @param {!Array<!proto.api.v0alpha.Rule>} value
 * @return {!proto.api.v0alpha.RuleSet} returns this
*/
proto.api.v0alpha.RuleSet.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.api.v0alpha.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Rule}
 */
proto.api.v0alpha.RuleSet.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.api.v0alpha.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.RuleSet} returns this
 */
proto.api.v0alpha.RuleSet.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.Rule.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.Rule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.Rule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.Rule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Rule.toObject = function(includeInstance, msg) {
  var f, obj = {
    verb: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subEntity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    selectorsList: jspb.Message.toObjectList(msg.getSelectorsList(),
    proto.api.v0alpha.Selector.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.Rule}
 */
proto.api.v0alpha.Rule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.Rule;
  return proto.api.v0alpha.Rule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.Rule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.Rule}
 */
proto.api.v0alpha.Rule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.Verb} */ (reader.readEnum());
      msg.setVerb(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.Entity} */ (reader.readEnum());
      msg.setEntity(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.SubEntity} */ (reader.readEnum());
      msg.setSubEntity(value);
      break;
    case 4:
      var value = new proto.api.v0alpha.Selector;
      reader.readMessage(value,proto.api.v0alpha.Selector.deserializeBinaryFromReader);
      msg.addSelectors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.Rule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.Rule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.Rule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Rule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerb();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntity();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSubEntity();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSelectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.v0alpha.Selector.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Verb verb = 1;
 * @return {!proto.api.commons.Verb}
 */
proto.api.v0alpha.Rule.prototype.getVerb = function() {
  return /** @type {!proto.api.commons.Verb} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.Verb} value
 * @return {!proto.api.v0alpha.Rule} returns this
 */
proto.api.v0alpha.Rule.prototype.setVerb = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional api.commons.Entity entity = 2;
 * @return {!proto.api.commons.Entity}
 */
proto.api.v0alpha.Rule.prototype.getEntity = function() {
  return /** @type {!proto.api.commons.Entity} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.Entity} value
 * @return {!proto.api.v0alpha.Rule} returns this
 */
proto.api.v0alpha.Rule.prototype.setEntity = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional api.commons.SubEntity sub_entity = 3;
 * @return {!proto.api.commons.SubEntity}
 */
proto.api.v0alpha.Rule.prototype.getSubEntity = function() {
  return /** @type {!proto.api.commons.SubEntity} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.SubEntity} value
 * @return {!proto.api.v0alpha.Rule} returns this
 */
proto.api.v0alpha.Rule.prototype.setSubEntity = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated Selector selectors = 4;
 * @return {!Array<!proto.api.v0alpha.Selector>}
 */
proto.api.v0alpha.Rule.prototype.getSelectorsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Selector>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Selector, 4));
};


/**
 * @param {!Array<!proto.api.v0alpha.Selector>} value
 * @return {!proto.api.v0alpha.Rule} returns this
*/
proto.api.v0alpha.Rule.prototype.setSelectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.v0alpha.Selector=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Selector}
 */
proto.api.v0alpha.Rule.prototype.addSelectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.v0alpha.Selector, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.Rule} returns this
 */
proto.api.v0alpha.Rule.prototype.clearSelectorsList = function() {
  return this.setSelectorsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.Selector.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11]];

/**
 * @enum {number}
 */
proto.api.v0alpha.Selector.SelectionRuleCase = {
  SELECTION_RULE_NOT_SET: 0,
  TIME: 1,
  WEEK: 2,
  DNCL: 3,
  FREQUENCY: 4,
  LOCATION: 5,
  PHONE_TYPE: 6,
  MONTH: 7,
  HOLIDAY: 8,
  DATE: 9,
  META: 10,
  PLUGIN: 11
};

/**
 * @return {proto.api.v0alpha.Selector.SelectionRuleCase}
 */
proto.api.v0alpha.Selector.prototype.getSelectionRuleCase = function() {
  return /** @type {proto.api.v0alpha.Selector.SelectionRuleCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.Selector.oneofGroups_[0]));
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
proto.api.v0alpha.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && api_commons_compliance_pb.TimeExp.toObject(includeInstance, f),
    week: (f = msg.getWeek()) && api_commons_compliance_pb.WeekdayExp.toObject(includeInstance, f),
    dncl: (f = msg.getDncl()) && api_commons_compliance_pb.DnclExp.toObject(includeInstance, f),
    frequency: (f = msg.getFrequency()) && api_commons_compliance_pb.FrequencyExp.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && api_commons_compliance_pb.LocationExp.toObject(includeInstance, f),
    phoneType: (f = msg.getPhoneType()) && api_commons_compliance_pb.PhoneTypeExp.toObject(includeInstance, f),
    month: (f = msg.getMonth()) && api_commons_compliance_pb.MonthExp.toObject(includeInstance, f),
    holiday: (f = msg.getHoliday()) && api_commons_compliance_pb.HolidayExp.toObject(includeInstance, f),
    date: (f = msg.getDate()) && api_commons_compliance_pb.DateExp.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && api_commons_compliance_pb.MetaFieldExp.toObject(includeInstance, f),
    plugin: (f = msg.getPlugin()) && api_commons_compliance_pb.PluginExp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.Selector}
 */
proto.api.v0alpha.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.Selector;
  return proto.api.v0alpha.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.Selector}
 */
proto.api.v0alpha.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_compliance_pb.TimeExp;
      reader.readMessage(value,api_commons_compliance_pb.TimeExp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = new api_commons_compliance_pb.WeekdayExp;
      reader.readMessage(value,api_commons_compliance_pb.WeekdayExp.deserializeBinaryFromReader);
      msg.setWeek(value);
      break;
    case 3:
      var value = new api_commons_compliance_pb.DnclExp;
      reader.readMessage(value,api_commons_compliance_pb.DnclExp.deserializeBinaryFromReader);
      msg.setDncl(value);
      break;
    case 4:
      var value = new api_commons_compliance_pb.FrequencyExp;
      reader.readMessage(value,api_commons_compliance_pb.FrequencyExp.deserializeBinaryFromReader);
      msg.setFrequency(value);
      break;
    case 5:
      var value = new api_commons_compliance_pb.LocationExp;
      reader.readMessage(value,api_commons_compliance_pb.LocationExp.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 6:
      var value = new api_commons_compliance_pb.PhoneTypeExp;
      reader.readMessage(value,api_commons_compliance_pb.PhoneTypeExp.deserializeBinaryFromReader);
      msg.setPhoneType(value);
      break;
    case 7:
      var value = new api_commons_compliance_pb.MonthExp;
      reader.readMessage(value,api_commons_compliance_pb.MonthExp.deserializeBinaryFromReader);
      msg.setMonth(value);
      break;
    case 8:
      var value = new api_commons_compliance_pb.HolidayExp;
      reader.readMessage(value,api_commons_compliance_pb.HolidayExp.deserializeBinaryFromReader);
      msg.setHoliday(value);
      break;
    case 9:
      var value = new api_commons_compliance_pb.DateExp;
      reader.readMessage(value,api_commons_compliance_pb.DateExp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 10:
      var value = new api_commons_compliance_pb.MetaFieldExp;
      reader.readMessage(value,api_commons_compliance_pb.MetaFieldExp.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 11:
      var value = new api_commons_compliance_pb.PluginExp;
      reader.readMessage(value,api_commons_compliance_pb.PluginExp.deserializeBinaryFromReader);
      msg.setPlugin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_compliance_pb.TimeExp.serializeBinaryToWriter
    );
  }
  f = message.getWeek();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_compliance_pb.WeekdayExp.serializeBinaryToWriter
    );
  }
  f = message.getDncl();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_compliance_pb.DnclExp.serializeBinaryToWriter
    );
  }
  f = message.getFrequency();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_compliance_pb.FrequencyExp.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_compliance_pb.LocationExp.serializeBinaryToWriter
    );
  }
  f = message.getPhoneType();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_compliance_pb.PhoneTypeExp.serializeBinaryToWriter
    );
  }
  f = message.getMonth();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_compliance_pb.MonthExp.serializeBinaryToWriter
    );
  }
  f = message.getHoliday();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      api_commons_compliance_pb.HolidayExp.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      api_commons_compliance_pb.DateExp.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      api_commons_compliance_pb.MetaFieldExp.serializeBinaryToWriter
    );
  }
  f = message.getPlugin();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      api_commons_compliance_pb.PluginExp.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.TimeExp time = 1;
 * @return {?proto.api.commons.TimeExp}
 */
proto.api.v0alpha.Selector.prototype.getTime = function() {
  return /** @type{?proto.api.commons.TimeExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.TimeExp, 1));
};


/**
 * @param {?proto.api.commons.TimeExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional api.commons.WeekdayExp week = 2;
 * @return {?proto.api.commons.WeekdayExp}
 */
proto.api.v0alpha.Selector.prototype.getWeek = function() {
  return /** @type{?proto.api.commons.WeekdayExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.WeekdayExp, 2));
};


/**
 * @param {?proto.api.commons.WeekdayExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setWeek = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearWeek = function() {
  return this.setWeek(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasWeek = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional api.commons.DnclExp dncl = 3;
 * @return {?proto.api.commons.DnclExp}
 */
proto.api.v0alpha.Selector.prototype.getDncl = function() {
  return /** @type{?proto.api.commons.DnclExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.DnclExp, 3));
};


/**
 * @param {?proto.api.commons.DnclExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setDncl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearDncl = function() {
  return this.setDncl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasDncl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional api.commons.FrequencyExp frequency = 4;
 * @return {?proto.api.commons.FrequencyExp}
 */
proto.api.v0alpha.Selector.prototype.getFrequency = function() {
  return /** @type{?proto.api.commons.FrequencyExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.FrequencyExp, 4));
};


/**
 * @param {?proto.api.commons.FrequencyExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setFrequency = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearFrequency = function() {
  return this.setFrequency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasFrequency = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.LocationExp location = 5;
 * @return {?proto.api.commons.LocationExp}
 */
proto.api.v0alpha.Selector.prototype.getLocation = function() {
  return /** @type{?proto.api.commons.LocationExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.LocationExp, 5));
};


/**
 * @param {?proto.api.commons.LocationExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional api.commons.PhoneTypeExp phone_type = 6;
 * @return {?proto.api.commons.PhoneTypeExp}
 */
proto.api.v0alpha.Selector.prototype.getPhoneType = function() {
  return /** @type{?proto.api.commons.PhoneTypeExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.PhoneTypeExp, 6));
};


/**
 * @param {?proto.api.commons.PhoneTypeExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setPhoneType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearPhoneType = function() {
  return this.setPhoneType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasPhoneType = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional api.commons.MonthExp month = 7;
 * @return {?proto.api.commons.MonthExp}
 */
proto.api.v0alpha.Selector.prototype.getMonth = function() {
  return /** @type{?proto.api.commons.MonthExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.MonthExp, 7));
};


/**
 * @param {?proto.api.commons.MonthExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setMonth = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearMonth = function() {
  return this.setMonth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional api.commons.HolidayExp holiday = 8;
 * @return {?proto.api.commons.HolidayExp}
 */
proto.api.v0alpha.Selector.prototype.getHoliday = function() {
  return /** @type{?proto.api.commons.HolidayExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.HolidayExp, 8));
};


/**
 * @param {?proto.api.commons.HolidayExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setHoliday = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearHoliday = function() {
  return this.setHoliday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasHoliday = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional api.commons.DateExp date = 9;
 * @return {?proto.api.commons.DateExp}
 */
proto.api.v0alpha.Selector.prototype.getDate = function() {
  return /** @type{?proto.api.commons.DateExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.DateExp, 9));
};


/**
 * @param {?proto.api.commons.DateExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setDate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasDate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional api.commons.MetaFieldExp meta = 10;
 * @return {?proto.api.commons.MetaFieldExp}
 */
proto.api.v0alpha.Selector.prototype.getMeta = function() {
  return /** @type{?proto.api.commons.MetaFieldExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.MetaFieldExp, 10));
};


/**
 * @param {?proto.api.commons.MetaFieldExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setMeta = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional api.commons.PluginExp plugin = 11;
 * @return {?proto.api.commons.PluginExp}
 */
proto.api.v0alpha.Selector.prototype.getPlugin = function() {
  return /** @type{?proto.api.commons.PluginExp} */ (
    jspb.Message.getWrapperField(this, api_commons_compliance_pb.PluginExp, 11));
};


/**
 * @param {?proto.api.commons.PluginExp|undefined} value
 * @return {!proto.api.v0alpha.Selector} returns this
*/
proto.api.v0alpha.Selector.prototype.setPlugin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.api.v0alpha.Selector.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Selector} returns this
 */
proto.api.v0alpha.Selector.prototype.clearPlugin = function() {
  return this.setPlugin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Selector.prototype.hasPlugin = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.api.v0alpha.GetDefaultRulesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetDefaultRulesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetDefaultRulesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetDefaultRulesReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetDefaultRulesReq}
 */
proto.api.v0alpha.GetDefaultRulesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetDefaultRulesReq;
  return proto.api.v0alpha.GetDefaultRulesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetDefaultRulesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetDefaultRulesReq}
 */
proto.api.v0alpha.GetDefaultRulesReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetDefaultRulesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetDefaultRulesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetDefaultRulesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetDefaultRulesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.GetDefaultRulesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetDefaultRulesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetDefaultRulesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetDefaultRulesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetDefaultRulesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetDefaultRulesRes}
 */
proto.api.v0alpha.GetDefaultRulesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetDefaultRulesRes;
  return proto.api.v0alpha.GetDefaultRulesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetDefaultRulesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetDefaultRulesRes}
 */
proto.api.v0alpha.GetDefaultRulesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetDefaultRulesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetDefaultRulesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetDefaultRulesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetDefaultRulesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string rules = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.GetDefaultRulesRes.prototype.getRulesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.GetDefaultRulesRes} returns this
 */
proto.api.v0alpha.GetDefaultRulesRes.prototype.setRulesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.GetDefaultRulesRes} returns this
 */
proto.api.v0alpha.GetDefaultRulesRes.prototype.addRules = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetDefaultRulesRes} returns this
 */
proto.api.v0alpha.GetDefaultRulesRes.prototype.clearRulesList = function() {
  return this.setRulesList([]);
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
proto.api.v0alpha.GetScrubListUploadUrlReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetScrubListUploadUrlReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetScrubListUploadUrlReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScrubListUploadUrlReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetScrubListUploadUrlReq}
 */
proto.api.v0alpha.GetScrubListUploadUrlReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetScrubListUploadUrlReq;
  return proto.api.v0alpha.GetScrubListUploadUrlReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetScrubListUploadUrlReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetScrubListUploadUrlReq}
 */
proto.api.v0alpha.GetScrubListUploadUrlReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetScrubListUploadUrlReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetScrubListUploadUrlReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetScrubListUploadUrlReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScrubListUploadUrlReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.GetScrubListUploadUrlReq.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetScrubListUploadUrlReq} returns this
 */
proto.api.v0alpha.GetScrubListUploadUrlReq.prototype.setOrgId = function(value) {
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
proto.api.v0alpha.GetScrubListUploadUrlRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetScrubListUploadUrlRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetScrubListUploadUrlRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bucket: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetScrubListUploadUrlRes}
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetScrubListUploadUrlRes;
  return proto.api.v0alpha.GetScrubListUploadUrlRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetScrubListUploadUrlRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetScrubListUploadUrlRes}
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetScrubListUploadUrlRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetScrubListUploadUrlRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBucket();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetScrubListUploadUrlRes} returns this
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filename = 2;
 * @return {string}
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetScrubListUploadUrlRes} returns this
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bucket = 3;
 * @return {string}
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetScrubListUploadUrlRes} returns this
 */
proto.api.v0alpha.GetScrubListUploadUrlRes.prototype.setBucket = function(value) {
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
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessScrubListUploadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessScrubListUploadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessScrubListUploadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 10, 0),
    notificationMessage: jspb.Message.getFieldWithDefault(msg, 11, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessScrubListUploadReq}
 */
proto.api.v0alpha.ProcessScrubListUploadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessScrubListUploadReq;
  return proto.api.v0alpha.ProcessScrubListUploadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessScrubListUploadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessScrubListUploadReq}
 */
proto.api.v0alpha.ProcessScrubListUploadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 10:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotificationMessage(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessScrubListUploadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessScrubListUploadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessScrubListUploadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getNotificationMessage();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string filename = 2;
 * @return {string}
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessScrubListUploadReq} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string list_id = 4;
 * @return {string}
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessScrubListUploadReq} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.ContentType content_type = 10;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.ProcessScrubListUploadReq} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string notification_message = 11;
 * @return {string}
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.getNotificationMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessScrubListUploadReq} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.setNotificationMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string country_code = 12;
 * @return {string}
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessScrubListUploadReq} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadReq.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ProcessScrubListUploadRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ProcessScrubListUploadRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessScrubListUploadRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessScrubListUploadRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessScrubListUploadRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesAdded: jspb.Message.getFieldWithDefault(msg, 1, 0),
    invalidEntriesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessScrubListUploadRes}
 */
proto.api.v0alpha.ProcessScrubListUploadRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessScrubListUploadRes;
  return proto.api.v0alpha.ProcessScrubListUploadRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessScrubListUploadRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessScrubListUploadRes}
 */
proto.api.v0alpha.ProcessScrubListUploadRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEntriesAdded(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addInvalidEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessScrubListUploadRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessScrubListUploadRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessScrubListUploadRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessScrubListUploadRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesAdded();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInvalidEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional int64 entries_added = 1;
 * @return {number}
 */
proto.api.v0alpha.ProcessScrubListUploadRes.prototype.getEntriesAdded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ProcessScrubListUploadRes} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadRes.prototype.setEntriesAdded = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string invalid_entries = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ProcessScrubListUploadRes.prototype.getInvalidEntriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ProcessScrubListUploadRes} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadRes.prototype.setInvalidEntriesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ProcessScrubListUploadRes} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadRes.prototype.addInvalidEntries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ProcessScrubListUploadRes} returns this
 */
proto.api.v0alpha.ProcessScrubListUploadRes.prototype.clearInvalidEntriesList = function() {
  return this.setInvalidEntriesList([]);
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
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessScrubListDeleteUploadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessScrubListDeleteUploadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    filename: jspb.Message.getFieldWithDefault(msg, 11, ""),
    notificationMessage: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessScrubListDeleteUploadReq}
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessScrubListDeleteUploadReq;
  return proto.api.v0alpha.ProcessScrubListDeleteUploadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessScrubListDeleteUploadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessScrubListDeleteUploadReq}
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotificationMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessScrubListDeleteUploadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessScrubListDeleteUploadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getNotificationMessage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string list_id = 10;
 * @return {string}
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessScrubListDeleteUploadReq} returns this
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.prototype.setListId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string filename = 11;
 * @return {string}
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessScrubListDeleteUploadReq} returns this
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string notification_message = 12;
 * @return {string}
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.prototype.getNotificationMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessScrubListDeleteUploadReq} returns this
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadReq.prototype.setNotificationMessage = function(value) {
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
proto.api.v0alpha.ProcessScrubListDeleteUploadRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessScrubListDeleteUploadRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessScrubListDeleteUploadRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ProcessScrubListDeleteUploadRes}
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessScrubListDeleteUploadRes;
  return proto.api.v0alpha.ProcessScrubListDeleteUploadRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessScrubListDeleteUploadRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessScrubListDeleteUploadRes}
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ProcessScrubListDeleteUploadRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessScrubListDeleteUploadRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessScrubListDeleteUploadRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessScrubListDeleteUploadRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ExportScrubListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ExportScrubListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ExportScrubListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExportScrubListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ExportScrubListReq}
 */
proto.api.v0alpha.ExportScrubListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ExportScrubListReq;
  return proto.api.v0alpha.ExportScrubListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ExportScrubListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ExportScrubListReq}
 */
proto.api.v0alpha.ExportScrubListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ExportScrubListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ExportScrubListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ExportScrubListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExportScrubListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string list_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ExportScrubListReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ExportScrubListReq} returns this
 */
proto.api.v0alpha.ExportScrubListReq.prototype.setListId = function(value) {
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
proto.api.v0alpha.ExportScrubListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ExportScrubListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ExportScrubListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExportScrubListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ExportScrubListRes}
 */
proto.api.v0alpha.ExportScrubListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ExportScrubListRes;
  return proto.api.v0alpha.ExportScrubListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ExportScrubListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ExportScrubListRes}
 */
proto.api.v0alpha.ExportScrubListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ExportScrubListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ExportScrubListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ExportScrubListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExportScrubListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.ExportScrubListRes.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ExportScrubListRes} returns this
 */
proto.api.v0alpha.ExportScrubListRes.prototype.setUrl = function(value) {
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
proto.api.v0alpha.CountryCode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CountryCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CountryCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CountryCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    countryCode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    countryName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    countryId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CountryCode}
 */
proto.api.v0alpha.CountryCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CountryCode;
  return proto.api.v0alpha.CountryCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CountryCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CountryCode}
 */
proto.api.v0alpha.CountryCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountryCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CountryCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CountryCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CountryCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CountryCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountryCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCountryName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCountryId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 country_code = 1;
 * @return {number}
 */
proto.api.v0alpha.CountryCode.prototype.getCountryCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CountryCode} returns this
 */
proto.api.v0alpha.CountryCode.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string country_name = 2;
 * @return {string}
 */
proto.api.v0alpha.CountryCode.prototype.getCountryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CountryCode} returns this
 */
proto.api.v0alpha.CountryCode.prototype.setCountryName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string country_id = 3;
 * @return {string}
 */
proto.api.v0alpha.CountryCode.prototype.getCountryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CountryCode} returns this
 */
proto.api.v0alpha.CountryCode.prototype.setCountryId = function(value) {
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
proto.api.v0alpha.Scenario.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.Scenario.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.Scenario} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Scenario.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplScenarioId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shouldAllow: (f = msg.getShouldAllow()) && proto.api.v0alpha.ScenarioData.toObject(includeInstance, f),
    shouldDeny: (f = msg.getShouldDeny()) && proto.api.v0alpha.ScenarioData.toObject(includeInstance, f),
    lastExecutionResult: (f = msg.getLastExecutionResult()) && proto.api.v0alpha.ScenarioResult.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.Scenario.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.Scenario;
  return proto.api.v0alpha.Scenario.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.Scenario} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.Scenario.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCplScenarioId(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.ScenarioData;
      reader.readMessage(value,proto.api.v0alpha.ScenarioData.deserializeBinaryFromReader);
      msg.setShouldAllow(value);
      break;
    case 4:
      var value = new proto.api.v0alpha.ScenarioData;
      reader.readMessage(value,proto.api.v0alpha.ScenarioData.deserializeBinaryFromReader);
      msg.setShouldDeny(value);
      break;
    case 5:
      var value = new proto.api.v0alpha.ScenarioResult;
      reader.readMessage(value,proto.api.v0alpha.ScenarioResult.deserializeBinaryFromReader);
      msg.setLastExecutionResult(value);
      break;
    case 6:
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
proto.api.v0alpha.Scenario.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.Scenario.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.Scenario} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Scenario.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplScenarioId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getShouldAllow();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v0alpha.ScenarioData.serializeBinaryToWriter
    );
  }
  f = message.getShouldDeny();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v0alpha.ScenarioData.serializeBinaryToWriter
    );
  }
  f = message.getLastExecutionResult();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v0alpha.ScenarioResult.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int64 cpl_scenario_id = 1;
 * @return {number}
 */
proto.api.v0alpha.Scenario.prototype.getCplScenarioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.Scenario} returns this
 */
proto.api.v0alpha.Scenario.prototype.setCplScenarioId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ScenarioData should_allow = 3;
 * @return {?proto.api.v0alpha.ScenarioData}
 */
proto.api.v0alpha.Scenario.prototype.getShouldAllow = function() {
  return /** @type{?proto.api.v0alpha.ScenarioData} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ScenarioData, 3));
};


/**
 * @param {?proto.api.v0alpha.ScenarioData|undefined} value
 * @return {!proto.api.v0alpha.Scenario} returns this
*/
proto.api.v0alpha.Scenario.prototype.setShouldAllow = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Scenario} returns this
 */
proto.api.v0alpha.Scenario.prototype.clearShouldAllow = function() {
  return this.setShouldAllow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Scenario.prototype.hasShouldAllow = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ScenarioData should_deny = 4;
 * @return {?proto.api.v0alpha.ScenarioData}
 */
proto.api.v0alpha.Scenario.prototype.getShouldDeny = function() {
  return /** @type{?proto.api.v0alpha.ScenarioData} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ScenarioData, 4));
};


/**
 * @param {?proto.api.v0alpha.ScenarioData|undefined} value
 * @return {!proto.api.v0alpha.Scenario} returns this
*/
proto.api.v0alpha.Scenario.prototype.setShouldDeny = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Scenario} returns this
 */
proto.api.v0alpha.Scenario.prototype.clearShouldDeny = function() {
  return this.setShouldDeny(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Scenario.prototype.hasShouldDeny = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ScenarioResult last_execution_result = 5;
 * @return {?proto.api.v0alpha.ScenarioResult}
 */
proto.api.v0alpha.Scenario.prototype.getLastExecutionResult = function() {
  return /** @type{?proto.api.v0alpha.ScenarioResult} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ScenarioResult, 5));
};


/**
 * @param {?proto.api.v0alpha.ScenarioResult|undefined} value
 * @return {!proto.api.v0alpha.Scenario} returns this
*/
proto.api.v0alpha.Scenario.prototype.setLastExecutionResult = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Scenario} returns this
 */
proto.api.v0alpha.Scenario.prototype.clearLastExecutionResult = function() {
  return this.setLastExecutionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Scenario.prototype.hasLastExecutionResult = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.api.v0alpha.Scenario.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Scenario} returns this
 */
proto.api.v0alpha.Scenario.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ScenarioData.repeatedFields_ = [17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ScenarioData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScenarioData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScenarioData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScenarioData.toObject = function(includeInstance, msg) {
  var f, obj = {
    commType: (f = msg.getCommType()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    callMetadataMap: (f = msg.getCallMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    timeOfCall: (f = msg.getTimeOfCall()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    frequencyCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    frequencyDuration: jspb.Message.getFieldWithDefault(msg, 8, 0),
    dnclBlocks: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    country: jspb.Message.getFieldWithDefault(msg, 10, ""),
    state: jspb.Message.getFieldWithDefault(msg, 11, ""),
    county: jspb.Message.getFieldWithDefault(msg, 12, ""),
    city: jspb.Message.getFieldWithDefault(msg, 13, ""),
    province: jspb.Message.getFieldWithDefault(msg, 14, ""),
    phoneType: jspb.Message.getFieldWithDefault(msg, 15, 0),
    timeZone: jspb.Message.getFieldWithDefault(msg, 16, ""),
    holidaysList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    countryCodeData: (f = msg.getCountryCodeData()) && proto.api.v0alpha.CountryCode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScenarioData}
 */
proto.api.v0alpha.ScenarioData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScenarioData;
  return proto.api.v0alpha.ScenarioData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScenarioData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScenarioData}
 */
proto.api.v0alpha.ScenarioData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setCommType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = msg.getCallMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeOfCall(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrequencyCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrequencyDuration(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDnclBlocks(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCounty(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvince(value);
      break;
    case 15:
      var value = /** @type {!proto.api.commons.PhoneType} */ (reader.readEnum());
      msg.setPhoneType(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addHolidays(value);
      break;
    case 18:
      var value = new proto.api.v0alpha.CountryCode;
      reader.readMessage(value,proto.api.v0alpha.CountryCode.deserializeBinaryFromReader);
      msg.setCountryCodeData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScenarioData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScenarioData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScenarioData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScenarioData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCallMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTimeOfCall();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFrequencyCount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getFrequencyDuration();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getDnclBlocks();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCounty();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getProvince();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPhoneType();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getHolidaysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getCountryCodeData();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.api.v0alpha.CountryCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.CommType comm_type = 1;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.ScenarioData.prototype.getCommType = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 1));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
*/
proto.api.v0alpha.ScenarioData.prototype.setCommType = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.clearCommType = function() {
  return this.setCommType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScenarioData.prototype.hasCommType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string phone_number = 2;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string country_code = 3;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> call_metadata = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api.v0alpha.ScenarioData.prototype.getCallMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.clearCallMetadataMap = function() {
  this.getCallMetadataMap().clear();
  return this;
};


/**
 * optional google.protobuf.Timestamp time_of_call = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ScenarioData.prototype.getTimeOfCall = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
*/
proto.api.v0alpha.ScenarioData.prototype.setTimeOfCall = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.clearTimeOfCall = function() {
  return this.setTimeOfCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScenarioData.prototype.hasTimeOfCall = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 frequency_count = 7;
 * @return {number}
 */
proto.api.v0alpha.ScenarioData.prototype.getFrequencyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setFrequencyCount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 frequency_duration = 8;
 * @return {number}
 */
proto.api.v0alpha.ScenarioData.prototype.getFrequencyDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setFrequencyDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool dncl_blocks = 9;
 * @return {boolean}
 */
proto.api.v0alpha.ScenarioData.prototype.getDnclBlocks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setDnclBlocks = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string country = 10;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string state = 11;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string county = 12;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getCounty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setCounty = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string city = 13;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string province = 14;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getProvince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setProvince = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional api.commons.PhoneType phone_type = 15;
 * @return {!proto.api.commons.PhoneType}
 */
proto.api.v0alpha.ScenarioData.prototype.getPhoneType = function() {
  return /** @type {!proto.api.commons.PhoneType} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.api.commons.PhoneType} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setPhoneType = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional string time_zone = 16;
 * @return {string}
 */
proto.api.v0alpha.ScenarioData.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * repeated string holidays = 17;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ScenarioData.prototype.getHolidaysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.setHolidaysList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.addHolidays = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.clearHolidaysList = function() {
  return this.setHolidaysList([]);
};


/**
 * optional CountryCode country_code_data = 18;
 * @return {?proto.api.v0alpha.CountryCode}
 */
proto.api.v0alpha.ScenarioData.prototype.getCountryCodeData = function() {
  return /** @type{?proto.api.v0alpha.CountryCode} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.CountryCode, 18));
};


/**
 * @param {?proto.api.v0alpha.CountryCode|undefined} value
 * @return {!proto.api.v0alpha.ScenarioData} returns this
*/
proto.api.v0alpha.ScenarioData.prototype.setCountryCodeData = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScenarioData} returns this
 */
proto.api.v0alpha.ScenarioData.prototype.clearCountryCodeData = function() {
  return this.setCountryCodeData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScenarioData.prototype.hasCountryCodeData = function() {
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
proto.api.v0alpha.CreateScenarioReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateScenarioReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateScenarioReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateScenarioReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    shouldAllow: (f = msg.getShouldAllow()) && proto.api.v0alpha.ScenarioData.toObject(includeInstance, f),
    shouldDeny: (f = msg.getShouldDeny()) && proto.api.v0alpha.ScenarioData.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateScenarioReq}
 */
proto.api.v0alpha.CreateScenarioReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateScenarioReq;
  return proto.api.v0alpha.CreateScenarioReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateScenarioReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateScenarioReq}
 */
proto.api.v0alpha.CreateScenarioReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.api.v0alpha.ScenarioData;
      reader.readMessage(value,proto.api.v0alpha.ScenarioData.deserializeBinaryFromReader);
      msg.setShouldAllow(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.ScenarioData;
      reader.readMessage(value,proto.api.v0alpha.ScenarioData.deserializeBinaryFromReader);
      msg.setShouldDeny(value);
      break;
    case 4:
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
proto.api.v0alpha.CreateScenarioReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateScenarioReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateScenarioReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateScenarioReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShouldAllow();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v0alpha.ScenarioData.serializeBinaryToWriter
    );
  }
  f = message.getShouldDeny();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v0alpha.ScenarioData.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ScenarioData should_allow = 2;
 * @return {?proto.api.v0alpha.ScenarioData}
 */
proto.api.v0alpha.CreateScenarioReq.prototype.getShouldAllow = function() {
  return /** @type{?proto.api.v0alpha.ScenarioData} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ScenarioData, 2));
};


/**
 * @param {?proto.api.v0alpha.ScenarioData|undefined} value
 * @return {!proto.api.v0alpha.CreateScenarioReq} returns this
*/
proto.api.v0alpha.CreateScenarioReq.prototype.setShouldAllow = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateScenarioReq} returns this
 */
proto.api.v0alpha.CreateScenarioReq.prototype.clearShouldAllow = function() {
  return this.setShouldAllow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateScenarioReq.prototype.hasShouldAllow = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ScenarioData should_deny = 3;
 * @return {?proto.api.v0alpha.ScenarioData}
 */
proto.api.v0alpha.CreateScenarioReq.prototype.getShouldDeny = function() {
  return /** @type{?proto.api.v0alpha.ScenarioData} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ScenarioData, 3));
};


/**
 * @param {?proto.api.v0alpha.ScenarioData|undefined} value
 * @return {!proto.api.v0alpha.CreateScenarioReq} returns this
*/
proto.api.v0alpha.CreateScenarioReq.prototype.setShouldDeny = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateScenarioReq} returns this
 */
proto.api.v0alpha.CreateScenarioReq.prototype.clearShouldDeny = function() {
  return this.setShouldDeny(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateScenarioReq.prototype.hasShouldDeny = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.api.v0alpha.CreateScenarioReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateScenarioReq} returns this
 */
proto.api.v0alpha.CreateScenarioReq.prototype.setName = function(value) {
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
proto.api.v0alpha.CreateScenarioRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateScenarioRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateScenarioRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateScenarioRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenario: (f = msg.getScenario()) && proto.api.v0alpha.Scenario.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateScenarioRes}
 */
proto.api.v0alpha.CreateScenarioRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateScenarioRes;
  return proto.api.v0alpha.CreateScenarioRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateScenarioRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateScenarioRes}
 */
proto.api.v0alpha.CreateScenarioRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Scenario;
      reader.readMessage(value,proto.api.v0alpha.Scenario.deserializeBinaryFromReader);
      msg.setScenario(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateScenarioRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateScenarioRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateScenarioRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateScenarioRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScenario();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.Scenario.serializeBinaryToWriter
    );
  }
};


/**
 * optional Scenario scenario = 1;
 * @return {?proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.CreateScenarioRes.prototype.getScenario = function() {
  return /** @type{?proto.api.v0alpha.Scenario} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Scenario, 1));
};


/**
 * @param {?proto.api.v0alpha.Scenario|undefined} value
 * @return {!proto.api.v0alpha.CreateScenarioRes} returns this
*/
proto.api.v0alpha.CreateScenarioRes.prototype.setScenario = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateScenarioRes} returns this
 */
proto.api.v0alpha.CreateScenarioRes.prototype.clearScenario = function() {
  return this.setScenario(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateScenarioRes.prototype.hasScenario = function() {
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
proto.api.v0alpha.GetScenarioReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetScenarioReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetScenarioReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScenarioReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplScenarioId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetScenarioReq}
 */
proto.api.v0alpha.GetScenarioReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetScenarioReq;
  return proto.api.v0alpha.GetScenarioReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetScenarioReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetScenarioReq}
 */
proto.api.v0alpha.GetScenarioReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCplScenarioId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetScenarioReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetScenarioReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetScenarioReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScenarioReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplScenarioId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 cpl_scenario_id = 1;
 * @return {number}
 */
proto.api.v0alpha.GetScenarioReq.prototype.getCplScenarioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetScenarioReq} returns this
 */
proto.api.v0alpha.GetScenarioReq.prototype.setCplScenarioId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v0alpha.GetScenarioRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetScenarioRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetScenarioRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScenarioRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenario: (f = msg.getScenario()) && proto.api.v0alpha.Scenario.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetScenarioRes}
 */
proto.api.v0alpha.GetScenarioRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetScenarioRes;
  return proto.api.v0alpha.GetScenarioRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetScenarioRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetScenarioRes}
 */
proto.api.v0alpha.GetScenarioRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Scenario;
      reader.readMessage(value,proto.api.v0alpha.Scenario.deserializeBinaryFromReader);
      msg.setScenario(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetScenarioRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetScenarioRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetScenarioRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetScenarioRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScenario();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.Scenario.serializeBinaryToWriter
    );
  }
};


/**
 * optional Scenario scenario = 1;
 * @return {?proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.GetScenarioRes.prototype.getScenario = function() {
  return /** @type{?proto.api.v0alpha.Scenario} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Scenario, 1));
};


/**
 * @param {?proto.api.v0alpha.Scenario|undefined} value
 * @return {!proto.api.v0alpha.GetScenarioRes} returns this
*/
proto.api.v0alpha.GetScenarioRes.prototype.setScenario = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetScenarioRes} returns this
 */
proto.api.v0alpha.GetScenarioRes.prototype.clearScenario = function() {
  return this.setScenario(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetScenarioRes.prototype.hasScenario = function() {
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
proto.api.v0alpha.UpdateScenarioReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateScenarioReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateScenarioReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateScenarioReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenario: (f = msg.getScenario()) && proto.api.v0alpha.Scenario.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateScenarioReq}
 */
proto.api.v0alpha.UpdateScenarioReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateScenarioReq;
  return proto.api.v0alpha.UpdateScenarioReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateScenarioReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateScenarioReq}
 */
proto.api.v0alpha.UpdateScenarioReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Scenario;
      reader.readMessage(value,proto.api.v0alpha.Scenario.deserializeBinaryFromReader);
      msg.setScenario(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateScenarioReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateScenarioReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateScenarioReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateScenarioReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScenario();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.Scenario.serializeBinaryToWriter
    );
  }
};


/**
 * optional Scenario scenario = 1;
 * @return {?proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.UpdateScenarioReq.prototype.getScenario = function() {
  return /** @type{?proto.api.v0alpha.Scenario} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Scenario, 1));
};


/**
 * @param {?proto.api.v0alpha.Scenario|undefined} value
 * @return {!proto.api.v0alpha.UpdateScenarioReq} returns this
*/
proto.api.v0alpha.UpdateScenarioReq.prototype.setScenario = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateScenarioReq} returns this
 */
proto.api.v0alpha.UpdateScenarioReq.prototype.clearScenario = function() {
  return this.setScenario(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateScenarioReq.prototype.hasScenario = function() {
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
proto.api.v0alpha.UpdateScenarioRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateScenarioRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateScenarioRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateScenarioRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenario: (f = msg.getScenario()) && proto.api.v0alpha.Scenario.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateScenarioRes}
 */
proto.api.v0alpha.UpdateScenarioRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateScenarioRes;
  return proto.api.v0alpha.UpdateScenarioRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateScenarioRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateScenarioRes}
 */
proto.api.v0alpha.UpdateScenarioRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Scenario;
      reader.readMessage(value,proto.api.v0alpha.Scenario.deserializeBinaryFromReader);
      msg.setScenario(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateScenarioRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateScenarioRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateScenarioRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateScenarioRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScenario();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.Scenario.serializeBinaryToWriter
    );
  }
};


/**
 * optional Scenario scenario = 1;
 * @return {?proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.UpdateScenarioRes.prototype.getScenario = function() {
  return /** @type{?proto.api.v0alpha.Scenario} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Scenario, 1));
};


/**
 * @param {?proto.api.v0alpha.Scenario|undefined} value
 * @return {!proto.api.v0alpha.UpdateScenarioRes} returns this
*/
proto.api.v0alpha.UpdateScenarioRes.prototype.setScenario = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateScenarioRes} returns this
 */
proto.api.v0alpha.UpdateScenarioRes.prototype.clearScenario = function() {
  return this.setScenario(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateScenarioRes.prototype.hasScenario = function() {
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
proto.api.v0alpha.DeleteScenarioReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteScenarioReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteScenarioReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteScenarioReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplScenarioId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteScenarioReq}
 */
proto.api.v0alpha.DeleteScenarioReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteScenarioReq;
  return proto.api.v0alpha.DeleteScenarioReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteScenarioReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteScenarioReq}
 */
proto.api.v0alpha.DeleteScenarioReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCplScenarioId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteScenarioReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteScenarioReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteScenarioReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteScenarioReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplScenarioId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 cpl_scenario_id = 1;
 * @return {number}
 */
proto.api.v0alpha.DeleteScenarioReq.prototype.getCplScenarioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DeleteScenarioReq} returns this
 */
proto.api.v0alpha.DeleteScenarioReq.prototype.setCplScenarioId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v0alpha.DeleteScenarioRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteScenarioRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteScenarioRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteScenarioRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteScenarioRes}
 */
proto.api.v0alpha.DeleteScenarioRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteScenarioRes;
  return proto.api.v0alpha.DeleteScenarioRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteScenarioRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteScenarioRes}
 */
proto.api.v0alpha.DeleteScenarioRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteScenarioRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteScenarioRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteScenarioRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteScenarioRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.RunAssignedScenariosReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RunAssignedScenariosReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RunAssignedScenariosReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RunAssignedScenariosReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplRuleSetId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RunAssignedScenariosReq}
 */
proto.api.v0alpha.RunAssignedScenariosReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RunAssignedScenariosReq;
  return proto.api.v0alpha.RunAssignedScenariosReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RunAssignedScenariosReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RunAssignedScenariosReq}
 */
proto.api.v0alpha.RunAssignedScenariosReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RunAssignedScenariosReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RunAssignedScenariosReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RunAssignedScenariosReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RunAssignedScenariosReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cpl_rule_set_id = 1;
 * @return {string}
 */
proto.api.v0alpha.RunAssignedScenariosReq.prototype.getCplRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RunAssignedScenariosReq} returns this
 */
proto.api.v0alpha.RunAssignedScenariosReq.prototype.setCplRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.RunAssignedScenariosRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RunAssignedScenariosRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RunAssignedScenariosRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RunAssignedScenariosRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.api.v0alpha.ScenarioResult.toObject, includeInstance),
    passedValue: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    cplRuleSetName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RunAssignedScenariosRes}
 */
proto.api.v0alpha.RunAssignedScenariosRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RunAssignedScenariosRes;
  return proto.api.v0alpha.RunAssignedScenariosRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RunAssignedScenariosRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RunAssignedScenariosRes}
 */
proto.api.v0alpha.RunAssignedScenariosRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.api.v0alpha.ScenarioResult;
      reader.readMessage(value,proto.api.v0alpha.ScenarioResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassedValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RunAssignedScenariosRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RunAssignedScenariosRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RunAssignedScenariosRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.ScenarioResult.serializeBinaryToWriter
    );
  }
  f = message.getPassedValue();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCplRuleSetName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated ScenarioResult results = 2;
 * @return {!Array<!proto.api.v0alpha.ScenarioResult>}
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ScenarioResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ScenarioResult, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.ScenarioResult>} value
 * @return {!proto.api.v0alpha.RunAssignedScenariosRes} returns this
*/
proto.api.v0alpha.RunAssignedScenariosRes.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.ScenarioResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScenarioResult}
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.ScenarioResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.RunAssignedScenariosRes} returns this
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional bool passed_value = 4;
 * @return {boolean}
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.getPassedValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.RunAssignedScenariosRes} returns this
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.setPassedValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string cpl_rule_set_name = 3;
 * @return {string}
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.getCplRuleSetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RunAssignedScenariosRes} returns this
 */
proto.api.v0alpha.RunAssignedScenariosRes.prototype.setCplRuleSetName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ScenarioResult.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ScenarioResult.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScenarioResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScenarioResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScenarioResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    passedValue: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    shouldAllowResponsesList: jspb.Message.toObjectList(msg.getShouldAllowResponsesList(),
    proto.api.v0alpha.ScenarioRuleResponse.toObject, includeInstance),
    shouldDenyResponsesList: jspb.Message.toObjectList(msg.getShouldDenyResponsesList(),
    proto.api.v0alpha.ScenarioRuleResponse.toObject, includeInstance),
    scenarioName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScenarioResult}
 */
proto.api.v0alpha.ScenarioResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScenarioResult;
  return proto.api.v0alpha.ScenarioResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScenarioResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScenarioResult}
 */
proto.api.v0alpha.ScenarioResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassedValue(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.ScenarioRuleResponse;
      reader.readMessage(value,proto.api.v0alpha.ScenarioRuleResponse.deserializeBinaryFromReader);
      msg.addShouldAllowResponses(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.ScenarioRuleResponse;
      reader.readMessage(value,proto.api.v0alpha.ScenarioRuleResponse.deserializeBinaryFromReader);
      msg.addShouldDenyResponses(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setScenarioName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScenarioResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScenarioResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScenarioResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScenarioResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassedValue();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getShouldAllowResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.ScenarioRuleResponse.serializeBinaryToWriter
    );
  }
  f = message.getShouldDenyResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v0alpha.ScenarioRuleResponse.serializeBinaryToWriter
    );
  }
  f = message.getScenarioName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool passed_value = 5;
 * @return {boolean}
 */
proto.api.v0alpha.ScenarioResult.prototype.getPassedValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ScenarioResult} returns this
 */
proto.api.v0alpha.ScenarioResult.prototype.setPassedValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated ScenarioRuleResponse should_allow_responses = 2;
 * @return {!Array<!proto.api.v0alpha.ScenarioRuleResponse>}
 */
proto.api.v0alpha.ScenarioResult.prototype.getShouldAllowResponsesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ScenarioRuleResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ScenarioRuleResponse, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.ScenarioRuleResponse>} value
 * @return {!proto.api.v0alpha.ScenarioResult} returns this
*/
proto.api.v0alpha.ScenarioResult.prototype.setShouldAllowResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.ScenarioRuleResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScenarioRuleResponse}
 */
proto.api.v0alpha.ScenarioResult.prototype.addShouldAllowResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.ScenarioRuleResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ScenarioResult} returns this
 */
proto.api.v0alpha.ScenarioResult.prototype.clearShouldAllowResponsesList = function() {
  return this.setShouldAllowResponsesList([]);
};


/**
 * repeated ScenarioRuleResponse should_deny_responses = 3;
 * @return {!Array<!proto.api.v0alpha.ScenarioRuleResponse>}
 */
proto.api.v0alpha.ScenarioResult.prototype.getShouldDenyResponsesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ScenarioRuleResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ScenarioRuleResponse, 3));
};


/**
 * @param {!Array<!proto.api.v0alpha.ScenarioRuleResponse>} value
 * @return {!proto.api.v0alpha.ScenarioResult} returns this
*/
proto.api.v0alpha.ScenarioResult.prototype.setShouldDenyResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v0alpha.ScenarioRuleResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ScenarioRuleResponse}
 */
proto.api.v0alpha.ScenarioResult.prototype.addShouldDenyResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v0alpha.ScenarioRuleResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ScenarioResult} returns this
 */
proto.api.v0alpha.ScenarioResult.prototype.clearShouldDenyResponsesList = function() {
  return this.setShouldDenyResponsesList([]);
};


/**
 * optional string scenario_name = 4;
 * @return {string}
 */
proto.api.v0alpha.ScenarioResult.prototype.getScenarioName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioResult} returns this
 */
proto.api.v0alpha.ScenarioResult.prototype.setScenarioName = function(value) {
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
proto.api.v0alpha.ScenarioRuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScenarioRuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScenarioRuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScenarioRuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permitValue: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScenarioRuleResponse}
 */
proto.api.v0alpha.ScenarioRuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScenarioRuleResponse;
  return proto.api.v0alpha.ScenarioRuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScenarioRuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScenarioRuleResponse}
 */
proto.api.v0alpha.ScenarioRuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuleText(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPermitValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScenarioRuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScenarioRuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScenarioRuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScenarioRuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermitValue();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string rule_text = 1;
 * @return {string}
 */
proto.api.v0alpha.ScenarioRuleResponse.prototype.getRuleText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScenarioRuleResponse} returns this
 */
proto.api.v0alpha.ScenarioRuleResponse.prototype.setRuleText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool permit_value = 3;
 * @return {boolean}
 */
proto.api.v0alpha.ScenarioRuleResponse.prototype.getPermitValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ScenarioRuleResponse} returns this
 */
proto.api.v0alpha.ScenarioRuleResponse.prototype.setPermitValue = function(value) {
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
proto.api.v0alpha.ListAllScenariosReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListAllScenariosReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListAllScenariosReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAllScenariosReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListAllScenariosReq}
 */
proto.api.v0alpha.ListAllScenariosReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListAllScenariosReq;
  return proto.api.v0alpha.ListAllScenariosReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListAllScenariosReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListAllScenariosReq}
 */
proto.api.v0alpha.ListAllScenariosReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListAllScenariosReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListAllScenariosReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListAllScenariosReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAllScenariosReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListAllScenariosRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListAllScenariosRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListAllScenariosRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListAllScenariosRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAllScenariosRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenariosList: jspb.Message.toObjectList(msg.getScenariosList(),
    proto.api.v0alpha.Scenario.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListAllScenariosRes}
 */
proto.api.v0alpha.ListAllScenariosRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListAllScenariosRes;
  return proto.api.v0alpha.ListAllScenariosRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListAllScenariosRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListAllScenariosRes}
 */
proto.api.v0alpha.ListAllScenariosRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Scenario;
      reader.readMessage(value,proto.api.v0alpha.Scenario.deserializeBinaryFromReader);
      msg.addScenarios(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListAllScenariosRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListAllScenariosRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListAllScenariosRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAllScenariosRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScenariosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.Scenario.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Scenario scenarios = 1;
 * @return {!Array<!proto.api.v0alpha.Scenario>}
 */
proto.api.v0alpha.ListAllScenariosRes.prototype.getScenariosList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Scenario>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Scenario, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.Scenario>} value
 * @return {!proto.api.v0alpha.ListAllScenariosRes} returns this
*/
proto.api.v0alpha.ListAllScenariosRes.prototype.setScenariosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.Scenario=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.ListAllScenariosRes.prototype.addScenarios = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.Scenario, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListAllScenariosRes} returns this
 */
proto.api.v0alpha.ListAllScenariosRes.prototype.clearScenariosList = function() {
  return this.setScenariosList([]);
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
proto.api.v0alpha.ListAssignedRuleSetsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListAssignedRuleSetsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListAssignedRuleSetsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAssignedRuleSetsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplScenarioId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListAssignedRuleSetsReq}
 */
proto.api.v0alpha.ListAssignedRuleSetsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListAssignedRuleSetsReq;
  return proto.api.v0alpha.ListAssignedRuleSetsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListAssignedRuleSetsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListAssignedRuleSetsReq}
 */
proto.api.v0alpha.ListAssignedRuleSetsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCplScenarioId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListAssignedRuleSetsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListAssignedRuleSetsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListAssignedRuleSetsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAssignedRuleSetsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplScenarioId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 cpl_scenario_id = 3;
 * @return {number}
 */
proto.api.v0alpha.ListAssignedRuleSetsReq.prototype.getCplScenarioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListAssignedRuleSetsReq} returns this
 */
proto.api.v0alpha.ListAssignedRuleSetsReq.prototype.setCplScenarioId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListAssignedRuleSetsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListAssignedRuleSetsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleSetsList: jspb.Message.toObjectList(msg.getRuleSetsList(),
    proto.api.v0alpha.RuleSet.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListAssignedRuleSetsRes}
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListAssignedRuleSetsRes;
  return proto.api.v0alpha.ListAssignedRuleSetsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListAssignedRuleSetsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListAssignedRuleSetsRes}
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.RuleSet;
      reader.readMessage(value,proto.api.v0alpha.RuleSet.deserializeBinaryFromReader);
      msg.addRuleSets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListAssignedRuleSetsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListAssignedRuleSetsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleSetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.RuleSet.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RuleSet rule_sets = 1;
 * @return {!Array<!proto.api.v0alpha.RuleSet>}
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.prototype.getRuleSetsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.RuleSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.RuleSet, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.RuleSet>} value
 * @return {!proto.api.v0alpha.ListAssignedRuleSetsRes} returns this
*/
proto.api.v0alpha.ListAssignedRuleSetsRes.prototype.setRuleSetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.RuleSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.RuleSet}
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.prototype.addRuleSets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.RuleSet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListAssignedRuleSetsRes} returns this
 */
proto.api.v0alpha.ListAssignedRuleSetsRes.prototype.clearRuleSetsList = function() {
  return this.setRuleSetsList([]);
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
proto.api.v0alpha.ListAssignedScenariosReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListAssignedScenariosReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListAssignedScenariosReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAssignedScenariosReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplRuleSetId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListAssignedScenariosReq}
 */
proto.api.v0alpha.ListAssignedScenariosReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListAssignedScenariosReq;
  return proto.api.v0alpha.ListAssignedScenariosReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListAssignedScenariosReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListAssignedScenariosReq}
 */
proto.api.v0alpha.ListAssignedScenariosReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListAssignedScenariosReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListAssignedScenariosReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListAssignedScenariosReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAssignedScenariosReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cpl_rule_set_id = 3;
 * @return {string}
 */
proto.api.v0alpha.ListAssignedScenariosReq.prototype.getCplRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListAssignedScenariosReq} returns this
 */
proto.api.v0alpha.ListAssignedScenariosReq.prototype.setCplRuleSetId = function(value) {
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
proto.api.v0alpha.AssignedScenario.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AssignedScenario.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AssignedScenario} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AssignedScenario.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenario: (f = msg.getScenario()) && proto.api.v0alpha.Scenario.toObject(includeInstance, f),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    lastExecutionResult: (f = msg.getLastExecutionResult()) && proto.api.v0alpha.ScenarioResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AssignedScenario}
 */
proto.api.v0alpha.AssignedScenario.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AssignedScenario;
  return proto.api.v0alpha.AssignedScenario.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AssignedScenario} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AssignedScenario}
 */
proto.api.v0alpha.AssignedScenario.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Scenario;
      reader.readMessage(value,proto.api.v0alpha.Scenario.deserializeBinaryFromReader);
      msg.setScenario(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.ScenarioResult;
      reader.readMessage(value,proto.api.v0alpha.ScenarioResult.deserializeBinaryFromReader);
      msg.setLastExecutionResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.AssignedScenario.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AssignedScenario.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AssignedScenario} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AssignedScenario.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScenario();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.Scenario.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLastExecutionResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v0alpha.ScenarioResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional Scenario scenario = 1;
 * @return {?proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.AssignedScenario.prototype.getScenario = function() {
  return /** @type{?proto.api.v0alpha.Scenario} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Scenario, 1));
};


/**
 * @param {?proto.api.v0alpha.Scenario|undefined} value
 * @return {!proto.api.v0alpha.AssignedScenario} returns this
*/
proto.api.v0alpha.AssignedScenario.prototype.setScenario = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.AssignedScenario} returns this
 */
proto.api.v0alpha.AssignedScenario.prototype.clearScenario = function() {
  return this.setScenario(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.AssignedScenario.prototype.hasScenario = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.api.v0alpha.AssignedScenario.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.AssignedScenario} returns this
 */
proto.api.v0alpha.AssignedScenario.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional ScenarioResult last_execution_result = 3;
 * @return {?proto.api.v0alpha.ScenarioResult}
 */
proto.api.v0alpha.AssignedScenario.prototype.getLastExecutionResult = function() {
  return /** @type{?proto.api.v0alpha.ScenarioResult} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ScenarioResult, 3));
};


/**
 * @param {?proto.api.v0alpha.ScenarioResult|undefined} value
 * @return {!proto.api.v0alpha.AssignedScenario} returns this
*/
proto.api.v0alpha.AssignedScenario.prototype.setLastExecutionResult = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.AssignedScenario} returns this
 */
proto.api.v0alpha.AssignedScenario.prototype.clearLastExecutionResult = function() {
  return this.setLastExecutionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.AssignedScenario.prototype.hasLastExecutionResult = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListAssignedScenariosRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListAssignedScenariosRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListAssignedScenariosRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListAssignedScenariosRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAssignedScenariosRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    assignedScenariosList: jspb.Message.toObjectList(msg.getAssignedScenariosList(),
    proto.api.v0alpha.AssignedScenario.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListAssignedScenariosRes}
 */
proto.api.v0alpha.ListAssignedScenariosRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListAssignedScenariosRes;
  return proto.api.v0alpha.ListAssignedScenariosRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListAssignedScenariosRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListAssignedScenariosRes}
 */
proto.api.v0alpha.ListAssignedScenariosRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.AssignedScenario;
      reader.readMessage(value,proto.api.v0alpha.AssignedScenario.deserializeBinaryFromReader);
      msg.addAssignedScenarios(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListAssignedScenariosRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListAssignedScenariosRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListAssignedScenariosRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListAssignedScenariosRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssignedScenariosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.AssignedScenario.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AssignedScenario assigned_scenarios = 1;
 * @return {!Array<!proto.api.v0alpha.AssignedScenario>}
 */
proto.api.v0alpha.ListAssignedScenariosRes.prototype.getAssignedScenariosList = function() {
  return /** @type{!Array<!proto.api.v0alpha.AssignedScenario>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.AssignedScenario, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.AssignedScenario>} value
 * @return {!proto.api.v0alpha.ListAssignedScenariosRes} returns this
*/
proto.api.v0alpha.ListAssignedScenariosRes.prototype.setAssignedScenariosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.AssignedScenario=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.AssignedScenario}
 */
proto.api.v0alpha.ListAssignedScenariosRes.prototype.addAssignedScenarios = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.AssignedScenario, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListAssignedScenariosRes} returns this
 */
proto.api.v0alpha.ListAssignedScenariosRes.prototype.clearAssignedScenariosList = function() {
  return this.setAssignedScenariosList([]);
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
proto.api.v0alpha.ListUnassignedScenariosReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListUnassignedScenariosReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListUnassignedScenariosReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListUnassignedScenariosReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplRuleSetId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListUnassignedScenariosReq}
 */
proto.api.v0alpha.ListUnassignedScenariosReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListUnassignedScenariosReq;
  return proto.api.v0alpha.ListUnassignedScenariosReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListUnassignedScenariosReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListUnassignedScenariosReq}
 */
proto.api.v0alpha.ListUnassignedScenariosReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListUnassignedScenariosReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListUnassignedScenariosReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListUnassignedScenariosReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListUnassignedScenariosReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cpl_rule_set_id = 3;
 * @return {string}
 */
proto.api.v0alpha.ListUnassignedScenariosReq.prototype.getCplRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListUnassignedScenariosReq} returns this
 */
proto.api.v0alpha.ListUnassignedScenariosReq.prototype.setCplRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListUnassignedScenariosRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListUnassignedScenariosRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListUnassignedScenariosRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListUnassignedScenariosRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListUnassignedScenariosRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenariosList: jspb.Message.toObjectList(msg.getScenariosList(),
    proto.api.v0alpha.Scenario.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListUnassignedScenariosRes}
 */
proto.api.v0alpha.ListUnassignedScenariosRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListUnassignedScenariosRes;
  return proto.api.v0alpha.ListUnassignedScenariosRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListUnassignedScenariosRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListUnassignedScenariosRes}
 */
proto.api.v0alpha.ListUnassignedScenariosRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Scenario;
      reader.readMessage(value,proto.api.v0alpha.Scenario.deserializeBinaryFromReader);
      msg.addScenarios(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListUnassignedScenariosRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListUnassignedScenariosRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListUnassignedScenariosRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListUnassignedScenariosRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScenariosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.Scenario.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Scenario scenarios = 1;
 * @return {!Array<!proto.api.v0alpha.Scenario>}
 */
proto.api.v0alpha.ListUnassignedScenariosRes.prototype.getScenariosList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Scenario>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Scenario, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.Scenario>} value
 * @return {!proto.api.v0alpha.ListUnassignedScenariosRes} returns this
*/
proto.api.v0alpha.ListUnassignedScenariosRes.prototype.setScenariosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.Scenario=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Scenario}
 */
proto.api.v0alpha.ListUnassignedScenariosRes.prototype.addScenarios = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.Scenario, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListUnassignedScenariosRes} returns this
 */
proto.api.v0alpha.ListUnassignedScenariosRes.prototype.clearScenariosList = function() {
  return this.setScenariosList([]);
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
proto.api.v0alpha.AssignScenarioReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.AssignScenarioReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.AssignScenarioReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AssignScenarioReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplRuleSetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cplScenarioId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.AssignScenarioReq}
 */
proto.api.v0alpha.AssignScenarioReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.AssignScenarioReq;
  return proto.api.v0alpha.AssignScenarioReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.AssignScenarioReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.AssignScenarioReq}
 */
proto.api.v0alpha.AssignScenarioReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCplScenarioId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.AssignScenarioReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.AssignScenarioReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.AssignScenarioReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.AssignScenarioReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCplScenarioId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string cpl_rule_set_id = 3;
 * @return {string}
 */
proto.api.v0alpha.AssignScenarioReq.prototype.getCplRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.AssignScenarioReq} returns this
 */
proto.api.v0alpha.AssignScenarioReq.prototype.setCplRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 cpl_scenario_id = 4;
 * @return {number}
 */
proto.api.v0alpha.AssignScenarioReq.prototype.getCplScenarioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.AssignScenarioReq} returns this
 */
proto.api.v0alpha.AssignScenarioReq.prototype.setCplScenarioId = function(value) {
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
proto.api.v0alpha.UnassignScenarioReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UnassignScenarioReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UnassignScenarioReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UnassignScenarioReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplRuleSetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cplScenarioId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UnassignScenarioReq}
 */
proto.api.v0alpha.UnassignScenarioReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UnassignScenarioReq;
  return proto.api.v0alpha.UnassignScenarioReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UnassignScenarioReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UnassignScenarioReq}
 */
proto.api.v0alpha.UnassignScenarioReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCplScenarioId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UnassignScenarioReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UnassignScenarioReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UnassignScenarioReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UnassignScenarioReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCplScenarioId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string cpl_rule_set_id = 3;
 * @return {string}
 */
proto.api.v0alpha.UnassignScenarioReq.prototype.getCplRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UnassignScenarioReq} returns this
 */
proto.api.v0alpha.UnassignScenarioReq.prototype.setCplRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 cpl_scenario_id = 4;
 * @return {number}
 */
proto.api.v0alpha.UnassignScenarioReq.prototype.getCplScenarioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UnassignScenarioReq} returns this
 */
proto.api.v0alpha.UnassignScenarioReq.prototype.setCplScenarioId = function(value) {
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
proto.api.v0alpha.EnableScenarioReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.EnableScenarioReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.EnableScenarioReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EnableScenarioReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplRuleSetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cplScenarioId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.EnableScenarioReq}
 */
proto.api.v0alpha.EnableScenarioReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.EnableScenarioReq;
  return proto.api.v0alpha.EnableScenarioReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.EnableScenarioReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.EnableScenarioReq}
 */
proto.api.v0alpha.EnableScenarioReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCplScenarioId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.EnableScenarioReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.EnableScenarioReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.EnableScenarioReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EnableScenarioReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCplScenarioId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string cpl_rule_set_id = 3;
 * @return {string}
 */
proto.api.v0alpha.EnableScenarioReq.prototype.getCplRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.EnableScenarioReq} returns this
 */
proto.api.v0alpha.EnableScenarioReq.prototype.setCplRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 cpl_scenario_id = 4;
 * @return {number}
 */
proto.api.v0alpha.EnableScenarioReq.prototype.getCplScenarioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.EnableScenarioReq} returns this
 */
proto.api.v0alpha.EnableScenarioReq.prototype.setCplScenarioId = function(value) {
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
proto.api.v0alpha.DisableScenarioReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DisableScenarioReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DisableScenarioReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DisableScenarioReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    cplRuleSetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cplScenarioId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DisableScenarioReq}
 */
proto.api.v0alpha.DisableScenarioReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DisableScenarioReq;
  return proto.api.v0alpha.DisableScenarioReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DisableScenarioReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DisableScenarioReq}
 */
proto.api.v0alpha.DisableScenarioReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCplRuleSetId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCplScenarioId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DisableScenarioReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DisableScenarioReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DisableScenarioReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DisableScenarioReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCplRuleSetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCplScenarioId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string cpl_rule_set_id = 3;
 * @return {string}
 */
proto.api.v0alpha.DisableScenarioReq.prototype.getCplRuleSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DisableScenarioReq} returns this
 */
proto.api.v0alpha.DisableScenarioReq.prototype.setCplRuleSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 cpl_scenario_id = 4;
 * @return {number}
 */
proto.api.v0alpha.DisableScenarioReq.prototype.getCplScenarioId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DisableScenarioReq} returns this
 */
proto.api.v0alpha.DisableScenarioReq.prototype.setCplScenarioId = function(value) {
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
proto.api.v0alpha.CreateConsentProfileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateConsentProfileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateConsentProfileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConsentProfileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    channel: (f = msg.getChannel()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateConsentProfileReq}
 */
proto.api.v0alpha.CreateConsentProfileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateConsentProfileReq;
  return proto.api.v0alpha.CreateConsentProfileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateConsentProfileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateConsentProfileReq}
 */
proto.api.v0alpha.CreateConsentProfileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileName(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 12:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateConsentProfileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateConsentProfileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConsentProfileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfileName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string consent_profile_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentProfileReq} returns this
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string profile_name = 10;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.getProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentProfileReq} returns this
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.setProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool disabled = 11;
 * @return {boolean}
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.CreateConsentProfileReq} returns this
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional api.commons.CommType channel = 12;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.getChannel = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 12));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.CreateConsentProfileReq} returns this
*/
proto.api.v0alpha.CreateConsentProfileReq.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateConsentProfileReq} returns this
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string created_by = 50;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentProfileReq} returns this
 */
proto.api.v0alpha.CreateConsentProfileReq.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
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
proto.api.v0alpha.CreateConsentProfileRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateConsentProfileRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateConsentProfileRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConsentProfileRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateConsentProfileRes}
 */
proto.api.v0alpha.CreateConsentProfileRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateConsentProfileRes;
  return proto.api.v0alpha.CreateConsentProfileRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateConsentProfileRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateConsentProfileRes}
 */
proto.api.v0alpha.CreateConsentProfileRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateConsentProfileRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateConsentProfileRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateConsentProfileRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConsentProfileRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string consent_profile_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentProfileRes.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentProfileRes} returns this
 */
proto.api.v0alpha.CreateConsentProfileRes.prototype.setConsentProfileId = function(value) {
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
proto.api.v0alpha.GetConsentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConsentReq}
 */
proto.api.v0alpha.GetConsentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentReq;
  return proto.api.v0alpha.GetConsentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentReq}
 */
proto.api.v0alpha.GetConsentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConsentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 consent_id = 1;
 * @return {number}
 */
proto.api.v0alpha.GetConsentReq.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetConsentReq} returns this
 */
proto.api.v0alpha.GetConsentReq.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CreateConsentReq.repeatedFields_ = [20,26];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateConsentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateConsentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateConsentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConsentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 10, ""),
    recorded: (f = msg.getRecorded()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expire: (f = msg.getExpire()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    referringUrl: jspb.Message.getFieldWithDefault(msg, 13, ""),
    channel: (f = msg.getChannel()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    topic: jspb.Message.getFieldWithDefault(msg, 16, ""),
    revokedReason: jspb.Message.getFieldWithDefault(msg, 17, ""),
    grantedReason: jspb.Message.getFieldWithDefault(msg, 18, ""),
    proof: jspb.Message.getFieldWithDefault(msg, 19, ""),
    conditionDaysOfTheWeekList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    conditionTimeOfDayFrom: jspb.Message.getFieldWithDefault(msg, 21, ""),
    conditionTimeOfDayTo: jspb.Message.getFieldWithDefault(msg, 22, ""),
    conditionFrom: (f = msg.getConditionFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conditionTo: (f = msg.getConditionTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    notes: jspb.Message.getFieldWithDefault(msg, 25, ""),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.api.v0alpha.ConsentCondition.toObject, includeInstance),
    contentType: jspb.Message.getFieldWithDefault(msg, 27, 0),
    channelType: jspb.Message.getFieldWithDefault(msg, 28, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateConsentReq}
 */
proto.api.v0alpha.CreateConsentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateConsentReq;
  return proto.api.v0alpha.CreateConsentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateConsentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateConsentReq}
 */
proto.api.v0alpha.CreateConsentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRecorded(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpire(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferringUrl(value);
      break;
    case 15:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevokedReason(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedReason(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setProof(value);
      break;
    case 20:
      var values = /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConditionDaysOfTheWeek(values[i]);
      }
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayFrom(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayTo(value);
      break;
    case 23:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionFrom(value);
      break;
    case 24:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionTo(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 26:
      var value = new proto.api.v0alpha.ConsentCondition;
      reader.readMessage(value,proto.api.v0alpha.ConsentCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    case 27:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 28:
      var value = /** @type {!proto.api.commons.Channel} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateConsentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateConsentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateConsentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConsentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRecorded();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpire();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReferringUrl();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getRevokedReason();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getGrantedReason();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getProof();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getConditionDaysOfTheWeekList();
  if (f.length > 0) {
    writer.writePackedEnum(
      20,
      f
    );
  }
  f = message.getConditionTimeOfDayFrom();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getConditionTimeOfDayTo();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getConditionFrom();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConditionTo();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.api.v0alpha.ConsentCondition.serializeBinaryToWriter
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
};


/**
 * optional string consent_profile_id = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 10;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp recorded = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getRecorded = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
*/
proto.api.v0alpha.CreateConsentReq.prototype.setRecorded = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.clearRecorded = function() {
  return this.setRecorded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateConsentReq.prototype.hasRecorded = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp expire = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getExpire = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
*/
proto.api.v0alpha.CreateConsentReq.prototype.setExpire = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.clearExpire = function() {
  return this.setExpire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateConsentReq.prototype.hasExpire = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string referring_url = 13;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getReferringUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setReferringUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional api.commons.CommType channel = 15;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getChannel = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 15));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
*/
proto.api.v0alpha.CreateConsentReq.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateConsentReq.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string topic = 16;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string revoked_reason = 17;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getRevokedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setRevokedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string granted_reason = 18;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getGrantedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setGrantedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string proof = 19;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getProof = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setProof = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * repeated api.commons.Weekday.Enum condition_days_of_the_week = 20;
 * @return {!Array<!proto.api.commons.Weekday.Enum>}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getConditionDaysOfTheWeekList = function() {
  return /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<!proto.api.commons.Weekday.Enum>} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setConditionDaysOfTheWeekList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.addConditionDaysOfTheWeek = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.clearConditionDaysOfTheWeekList = function() {
  return this.setConditionDaysOfTheWeekList([]);
};


/**
 * optional string condition_time_of_day_from = 21;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getConditionTimeOfDayFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setConditionTimeOfDayFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string condition_time_of_day_to = 22;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getConditionTimeOfDayTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setConditionTimeOfDayTo = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional google.protobuf.Timestamp condition_from = 23;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getConditionFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 23));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
*/
proto.api.v0alpha.CreateConsentReq.prototype.setConditionFrom = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.clearConditionFrom = function() {
  return this.setConditionFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateConsentReq.prototype.hasConditionFrom = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional google.protobuf.Timestamp condition_to = 24;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getConditionTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 24));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
*/
proto.api.v0alpha.CreateConsentReq.prototype.setConditionTo = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.clearConditionTo = function() {
  return this.setConditionTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateConsentReq.prototype.hasConditionTo = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string notes = 25;
 * @return {string}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * repeated ConsentCondition conditions = 26;
 * @return {!Array<!proto.api.v0alpha.ConsentCondition>}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ConsentCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ConsentCondition, 26));
};


/**
 * @param {!Array<!proto.api.v0alpha.ConsentCondition>} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
*/
proto.api.v0alpha.CreateConsentReq.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.api.v0alpha.ConsentCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentCondition}
 */
proto.api.v0alpha.CreateConsentReq.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.api.v0alpha.ConsentCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};


/**
 * optional api.commons.ContentType content_type = 27;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 27, value);
};


/**
 * optional api.commons.Channel channel_type = 28;
 * @return {!proto.api.commons.Channel}
 */
proto.api.v0alpha.CreateConsentReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.Channel} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.api.commons.Channel} value
 * @return {!proto.api.v0alpha.CreateConsentReq} returns this
 */
proto.api.v0alpha.CreateConsentReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
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
proto.api.v0alpha.CreateConsentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateConsentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateConsentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConsentRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateConsentRes}
 */
proto.api.v0alpha.CreateConsentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateConsentRes;
  return proto.api.v0alpha.CreateConsentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateConsentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateConsentRes}
 */
proto.api.v0alpha.CreateConsentRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateConsentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateConsentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateConsentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConsentRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 consent_id = 1;
 * @return {number}
 */
proto.api.v0alpha.CreateConsentRes.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateConsentRes} returns this
 */
proto.api.v0alpha.CreateConsentRes.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ConsentProfile.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ConsentProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ConsentProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ConsentProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ConsentProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    consentsList: jspb.Message.toObjectList(msg.getConsentsList(),
    proto.api.v0alpha.Consent.toObject, includeInstance),
    channel: (f = msg.getChannel()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 51, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ConsentProfile}
 */
proto.api.v0alpha.ConsentProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ConsentProfile;
  return proto.api.v0alpha.ConsentProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ConsentProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ConsentProfile}
 */
proto.api.v0alpha.ConsentProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileName(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 12:
      var value = new proto.api.v0alpha.Consent;
      reader.readMessage(value,proto.api.v0alpha.Consent.deserializeBinaryFromReader);
      msg.addConsents(value);
      break;
    case 13:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 50:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ConsentProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ConsentProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ConsentProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ConsentProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfileName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getConsentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.api.v0alpha.Consent.serializeBinaryToWriter
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      51,
      f
    );
  }
};


/**
 * optional string consent_profile_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ConsentProfile.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
 */
proto.api.v0alpha.ConsentProfile.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string profile_name = 10;
 * @return {string}
 */
proto.api.v0alpha.ConsentProfile.prototype.getProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
 */
proto.api.v0alpha.ConsentProfile.prototype.setProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool disabled = 11;
 * @return {boolean}
 */
proto.api.v0alpha.ConsentProfile.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
 */
proto.api.v0alpha.ConsentProfile.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated Consent consents = 12;
 * @return {!Array<!proto.api.v0alpha.Consent>}
 */
proto.api.v0alpha.ConsentProfile.prototype.getConsentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Consent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Consent, 12));
};


/**
 * @param {!Array<!proto.api.v0alpha.Consent>} value
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
*/
proto.api.v0alpha.ConsentProfile.prototype.setConsentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.api.v0alpha.Consent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Consent}
 */
proto.api.v0alpha.ConsentProfile.prototype.addConsents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.api.v0alpha.Consent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
 */
proto.api.v0alpha.ConsentProfile.prototype.clearConsentsList = function() {
  return this.setConsentsList([]);
};


/**
 * optional api.commons.CommType channel = 13;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.ConsentProfile.prototype.getChannel = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 13));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
*/
proto.api.v0alpha.ConsentProfile.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
 */
proto.api.v0alpha.ConsentProfile.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentProfile.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 50;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ConsentProfile.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 50));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
*/
proto.api.v0alpha.ConsentProfile.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 50, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
 */
proto.api.v0alpha.ConsentProfile.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentProfile.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional string created_by = 51;
 * @return {string}
 */
proto.api.v0alpha.ConsentProfile.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentProfile} returns this
 */
proto.api.v0alpha.ConsentProfile.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 51, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.Consent.repeatedFields_ = [20,26];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.Consent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.Consent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.Consent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Consent.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    deletedOn: (f = msg.getDeletedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 10, ""),
    recorded: (f = msg.getRecorded()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    revoked: (f = msg.getRevoked()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expire: (f = msg.getExpire()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    referringUrl: jspb.Message.getFieldWithDefault(msg, 14, ""),
    channel: (f = msg.getChannel()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    topic: jspb.Message.getFieldWithDefault(msg, 16, ""),
    revokedReason: jspb.Message.getFieldWithDefault(msg, 17, ""),
    grantedReason: jspb.Message.getFieldWithDefault(msg, 18, ""),
    proof: jspb.Message.getFieldWithDefault(msg, 19, ""),
    conditionDaysOfTheWeekList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    conditionTimeOfDayFrom: jspb.Message.getFieldWithDefault(msg, 21, ""),
    conditionTimeOfDayTo: jspb.Message.getFieldWithDefault(msg, 22, ""),
    conditionFrom: (f = msg.getConditionFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conditionTo: (f = msg.getConditionTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    notes: jspb.Message.getFieldWithDefault(msg, 25, ""),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.api.v0alpha.ConsentCondition.toObject, includeInstance),
    contentType: jspb.Message.getFieldWithDefault(msg, 27, 0),
    channelType: jspb.Message.getFieldWithDefault(msg, 28, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.Consent}
 */
proto.api.v0alpha.Consent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.Consent;
  return proto.api.v0alpha.Consent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.Consent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.Consent}
 */
proto.api.v0alpha.Consent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletedOn(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRecorded(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRevoked(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpire(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferringUrl(value);
      break;
    case 15:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevokedReason(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedReason(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setProof(value);
      break;
    case 20:
      var values = /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConditionDaysOfTheWeek(values[i]);
      }
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayFrom(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayTo(value);
      break;
    case 23:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionFrom(value);
      break;
    case 24:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionTo(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 26:
      var value = new proto.api.v0alpha.ConsentCondition;
      reader.readMessage(value,proto.api.v0alpha.ConsentCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    case 27:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 28:
      var value = /** @type {!proto.api.commons.Channel} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.Consent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.Consent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.Consent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Consent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDeletedOn();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRecorded();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRevoked();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpire();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReferringUrl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getRevokedReason();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getGrantedReason();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getProof();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getConditionDaysOfTheWeekList();
  if (f.length > 0) {
    writer.writePackedEnum(
      20,
      f
    );
  }
  f = message.getConditionTimeOfDayFrom();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getConditionTimeOfDayTo();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getConditionFrom();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConditionTo();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.api.v0alpha.ConsentCondition.serializeBinaryToWriter
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
};


/**
 * optional int64 consent_id = 1;
 * @return {number}
 */
proto.api.v0alpha.Consent.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string consent_profile_id = 2;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool deleted = 4;
 * @return {boolean}
 */
proto.api.v0alpha.Consent.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp deleted_on = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.Consent.prototype.getDeletedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.Consent} returns this
*/
proto.api.v0alpha.Consent.prototype.setDeletedOn = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearDeletedOn = function() {
  return this.setDeletedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Consent.prototype.hasDeletedOn = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string content = 10;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp recorded = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.Consent.prototype.getRecorded = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.Consent} returns this
*/
proto.api.v0alpha.Consent.prototype.setRecorded = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearRecorded = function() {
  return this.setRecorded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Consent.prototype.hasRecorded = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp revoked = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.Consent.prototype.getRevoked = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.Consent} returns this
*/
proto.api.v0alpha.Consent.prototype.setRevoked = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearRevoked = function() {
  return this.setRevoked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Consent.prototype.hasRevoked = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp expire = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.Consent.prototype.getExpire = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.Consent} returns this
*/
proto.api.v0alpha.Consent.prototype.setExpire = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearExpire = function() {
  return this.setExpire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Consent.prototype.hasExpire = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string referring_url = 14;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getReferringUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setReferringUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional api.commons.CommType channel = 15;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.Consent.prototype.getChannel = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 15));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.Consent} returns this
*/
proto.api.v0alpha.Consent.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Consent.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string topic = 16;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string revoked_reason = 17;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getRevokedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setRevokedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string granted_reason = 18;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getGrantedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setGrantedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string proof = 19;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getProof = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setProof = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * repeated api.commons.Weekday.Enum condition_days_of_the_week = 20;
 * @return {!Array<!proto.api.commons.Weekday.Enum>}
 */
proto.api.v0alpha.Consent.prototype.getConditionDaysOfTheWeekList = function() {
  return /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<!proto.api.commons.Weekday.Enum>} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setConditionDaysOfTheWeekList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.addConditionDaysOfTheWeek = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearConditionDaysOfTheWeekList = function() {
  return this.setConditionDaysOfTheWeekList([]);
};


/**
 * optional string condition_time_of_day_from = 21;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getConditionTimeOfDayFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setConditionTimeOfDayFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string condition_time_of_day_to = 22;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getConditionTimeOfDayTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setConditionTimeOfDayTo = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional google.protobuf.Timestamp condition_from = 23;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.Consent.prototype.getConditionFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 23));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.Consent} returns this
*/
proto.api.v0alpha.Consent.prototype.setConditionFrom = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearConditionFrom = function() {
  return this.setConditionFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Consent.prototype.hasConditionFrom = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional google.protobuf.Timestamp condition_to = 24;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.Consent.prototype.getConditionTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 24));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.Consent} returns this
*/
proto.api.v0alpha.Consent.prototype.setConditionTo = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearConditionTo = function() {
  return this.setConditionTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Consent.prototype.hasConditionTo = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string notes = 25;
 * @return {string}
 */
proto.api.v0alpha.Consent.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * repeated ConsentCondition conditions = 26;
 * @return {!Array<!proto.api.v0alpha.ConsentCondition>}
 */
proto.api.v0alpha.Consent.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ConsentCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ConsentCondition, 26));
};


/**
 * @param {!Array<!proto.api.v0alpha.ConsentCondition>} value
 * @return {!proto.api.v0alpha.Consent} returns this
*/
proto.api.v0alpha.Consent.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.api.v0alpha.ConsentCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentCondition}
 */
proto.api.v0alpha.Consent.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.api.v0alpha.ConsentCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};


/**
 * optional api.commons.ContentType content_type = 27;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.Consent.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 27, value);
};


/**
 * optional api.commons.Channel channel_type = 28;
 * @return {!proto.api.commons.Channel}
 */
proto.api.v0alpha.Consent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.Channel} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.api.commons.Channel} value
 * @return {!proto.api.v0alpha.Consent} returns this
 */
proto.api.v0alpha.Consent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ConsentCondition.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ConsentCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ConsentCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ConsentCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ConsentCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentConditionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    consentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    daysOfTheWeekList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    timeOfDayFrom: jspb.Message.getFieldWithDefault(msg, 11, ""),
    timeOfDayTo: jspb.Message.getFieldWithDefault(msg, 12, ""),
    fromDate: (f = msg.getFromDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    toDate: (f = msg.getToDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ConsentCondition}
 */
proto.api.v0alpha.ConsentCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ConsentCondition;
  return proto.api.v0alpha.ConsentCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ConsentCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ConsentCondition}
 */
proto.api.v0alpha.ConsentCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentConditionId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    case 10:
      var values = /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDaysOfTheWeek(values[i]);
      }
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeOfDayFrom(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeOfDayTo(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromDate(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ConsentCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ConsentCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ConsentCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ConsentCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentConditionId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDaysOfTheWeekList();
  if (f.length > 0) {
    writer.writePackedEnum(
      10,
      f
    );
  }
  f = message.getTimeOfDayFrom();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTimeOfDayTo();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getFromDate();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToDate();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 consent_condition_id = 1;
 * @return {number}
 */
proto.api.v0alpha.ConsentCondition.prototype.getConsentConditionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.setConsentConditionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 consent_id = 2;
 * @return {number}
 */
proto.api.v0alpha.ConsentCondition.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated api.commons.Weekday.Enum days_of_the_week = 10;
 * @return {!Array<!proto.api.commons.Weekday.Enum>}
 */
proto.api.v0alpha.ConsentCondition.prototype.getDaysOfTheWeekList = function() {
  return /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<!proto.api.commons.Weekday.Enum>} value
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.setDaysOfTheWeekList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.addDaysOfTheWeek = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.clearDaysOfTheWeekList = function() {
  return this.setDaysOfTheWeekList([]);
};


/**
 * optional string time_of_day_from = 11;
 * @return {string}
 */
proto.api.v0alpha.ConsentCondition.prototype.getTimeOfDayFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.setTimeOfDayFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string time_of_day_to = 12;
 * @return {string}
 */
proto.api.v0alpha.ConsentCondition.prototype.getTimeOfDayTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.setTimeOfDayTo = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp from_date = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ConsentCondition.prototype.getFromDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
*/
proto.api.v0alpha.ConsentCondition.prototype.setFromDate = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.clearFromDate = function() {
  return this.setFromDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentCondition.prototype.hasFromDate = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp to_date = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ConsentCondition.prototype.getToDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
*/
proto.api.v0alpha.ConsentCondition.prototype.setToDate = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentCondition} returns this
 */
proto.api.v0alpha.ConsentCondition.prototype.clearToDate = function() {
  return this.setToDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentCondition.prototype.hasToDate = function() {
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
proto.api.v0alpha.GetConsentProfileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentProfileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentProfileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentProfileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConsentProfileReq}
 */
proto.api.v0alpha.GetConsentProfileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentProfileReq;
  return proto.api.v0alpha.GetConsentProfileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentProfileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentProfileReq}
 */
proto.api.v0alpha.GetConsentProfileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConsentProfileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentProfileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentProfileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentProfileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string consent_profile_id = 1;
 * @return {string}
 */
proto.api.v0alpha.GetConsentProfileReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentProfileReq} returns this
 */
proto.api.v0alpha.GetConsentProfileReq.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.UpdateConsentReq.repeatedFields_ = [20,26];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateConsentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateConsentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateConsentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 10, ""),
    recorded: (f = msg.getRecorded()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    revoked: (f = msg.getRevoked()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expire: (f = msg.getExpire()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    referringUrl: jspb.Message.getFieldWithDefault(msg, 14, ""),
    channel: (f = msg.getChannel()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    topic: jspb.Message.getFieldWithDefault(msg, 16, ""),
    revokedReason: jspb.Message.getFieldWithDefault(msg, 17, ""),
    grantedReason: jspb.Message.getFieldWithDefault(msg, 18, ""),
    proof: jspb.Message.getFieldWithDefault(msg, 19, ""),
    conditionDaysOfTheWeekList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    conditionTimeOfDayFrom: jspb.Message.getFieldWithDefault(msg, 21, ""),
    conditionTimeOfDayTo: jspb.Message.getFieldWithDefault(msg, 22, ""),
    conditionFrom: (f = msg.getConditionFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conditionTo: (f = msg.getConditionTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    notes: jspb.Message.getFieldWithDefault(msg, 25, ""),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.api.v0alpha.ConsentCondition.toObject, includeInstance),
    contentType: jspb.Message.getFieldWithDefault(msg, 27, 0),
    channelType: jspb.Message.getFieldWithDefault(msg, 28, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateConsentReq}
 */
proto.api.v0alpha.UpdateConsentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateConsentReq;
  return proto.api.v0alpha.UpdateConsentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateConsentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateConsentReq}
 */
proto.api.v0alpha.UpdateConsentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRecorded(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRevoked(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpire(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferringUrl(value);
      break;
    case 15:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevokedReason(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedReason(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setProof(value);
      break;
    case 20:
      var values = /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConditionDaysOfTheWeek(values[i]);
      }
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayFrom(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayTo(value);
      break;
    case 23:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionFrom(value);
      break;
    case 24:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionTo(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 26:
      var value = new proto.api.v0alpha.ConsentCondition;
      reader.readMessage(value,proto.api.v0alpha.ConsentCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    case 27:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 28:
      var value = /** @type {!proto.api.commons.Channel} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateConsentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateConsentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateConsentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRecorded();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRevoked();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpire();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReferringUrl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getRevokedReason();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getGrantedReason();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getProof();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getConditionDaysOfTheWeekList();
  if (f.length > 0) {
    writer.writePackedEnum(
      20,
      f
    );
  }
  f = message.getConditionTimeOfDayFrom();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getConditionTimeOfDayTo();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getConditionFrom();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConditionTo();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.api.v0alpha.ConsentCondition.serializeBinaryToWriter
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
};


/**
 * optional int64 consent_id = 1;
 * @return {number}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string consent_profile_id = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 10;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp recorded = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getRecorded = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
*/
proto.api.v0alpha.UpdateConsentReq.prototype.setRecorded = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.clearRecorded = function() {
  return this.setRecorded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.hasRecorded = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp revoked = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getRevoked = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
*/
proto.api.v0alpha.UpdateConsentReq.prototype.setRevoked = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.clearRevoked = function() {
  return this.setRevoked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.hasRevoked = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp expire = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getExpire = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
*/
proto.api.v0alpha.UpdateConsentReq.prototype.setExpire = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.clearExpire = function() {
  return this.setExpire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.hasExpire = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string referring_url = 14;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getReferringUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setReferringUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional api.commons.CommType channel = 15;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getChannel = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 15));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
*/
proto.api.v0alpha.UpdateConsentReq.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string topic = 16;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string revoked_reason = 17;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getRevokedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setRevokedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string granted_reason = 18;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getGrantedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setGrantedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string proof = 19;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getProof = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setProof = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * repeated api.commons.Weekday.Enum condition_days_of_the_week = 20;
 * @return {!Array<!proto.api.commons.Weekday.Enum>}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getConditionDaysOfTheWeekList = function() {
  return /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<!proto.api.commons.Weekday.Enum>} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setConditionDaysOfTheWeekList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.addConditionDaysOfTheWeek = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.clearConditionDaysOfTheWeekList = function() {
  return this.setConditionDaysOfTheWeekList([]);
};


/**
 * optional string condition_time_of_day_from = 21;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getConditionTimeOfDayFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setConditionTimeOfDayFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string condition_time_of_day_to = 22;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getConditionTimeOfDayTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setConditionTimeOfDayTo = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional google.protobuf.Timestamp condition_from = 23;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getConditionFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 23));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
*/
proto.api.v0alpha.UpdateConsentReq.prototype.setConditionFrom = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.clearConditionFrom = function() {
  return this.setConditionFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.hasConditionFrom = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional google.protobuf.Timestamp condition_to = 24;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getConditionTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 24));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
*/
proto.api.v0alpha.UpdateConsentReq.prototype.setConditionTo = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.clearConditionTo = function() {
  return this.setConditionTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.hasConditionTo = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string notes = 25;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * repeated ConsentCondition conditions = 26;
 * @return {!Array<!proto.api.v0alpha.ConsentCondition>}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ConsentCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ConsentCondition, 26));
};


/**
 * @param {!Array<!proto.api.v0alpha.ConsentCondition>} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
*/
proto.api.v0alpha.UpdateConsentReq.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.api.v0alpha.ConsentCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentCondition}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.api.v0alpha.ConsentCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};


/**
 * optional api.commons.ContentType content_type = 27;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 27, value);
};


/**
 * optional api.commons.Channel channel_type = 28;
 * @return {!proto.api.commons.Channel}
 */
proto.api.v0alpha.UpdateConsentReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.Channel} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.api.commons.Channel} value
 * @return {!proto.api.v0alpha.UpdateConsentReq} returns this
 */
proto.api.v0alpha.UpdateConsentReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
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
proto.api.v0alpha.ExpireConsentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ExpireConsentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ExpireConsentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExpireConsentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    expire: (f = msg.getExpire()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ExpireConsentReq}
 */
proto.api.v0alpha.ExpireConsentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ExpireConsentReq;
  return proto.api.v0alpha.ExpireConsentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ExpireConsentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ExpireConsentReq}
 */
proto.api.v0alpha.ExpireConsentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpire(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ExpireConsentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ExpireConsentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ExpireConsentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ExpireConsentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getExpire();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 consent_id = 1;
 * @return {number}
 */
proto.api.v0alpha.ExpireConsentReq.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ExpireConsentReq} returns this
 */
proto.api.v0alpha.ExpireConsentReq.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp expire = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ExpireConsentReq.prototype.getExpire = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ExpireConsentReq} returns this
*/
proto.api.v0alpha.ExpireConsentReq.prototype.setExpire = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ExpireConsentReq} returns this
 */
proto.api.v0alpha.ExpireConsentReq.prototype.clearExpire = function() {
  return this.setExpire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ExpireConsentReq.prototype.hasExpire = function() {
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
proto.api.v0alpha.RevokeConsentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RevokeConsentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RevokeConsentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RevokeConsentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    revoked: (f = msg.getRevoked()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    revokedReason: jspb.Message.getFieldWithDefault(msg, 7, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RevokeConsentReq}
 */
proto.api.v0alpha.RevokeConsentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RevokeConsentReq;
  return proto.api.v0alpha.RevokeConsentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RevokeConsentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RevokeConsentReq}
 */
proto.api.v0alpha.RevokeConsentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRevoked(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.Channel} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevokedReason(value);
      break;
    case 8:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RevokeConsentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RevokeConsentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RevokeConsentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRevoked();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getRevokedReason();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional int64 consent_id = 1;
 * @return {number}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.RevokeConsentReq} returns this
 */
proto.api.v0alpha.RevokeConsentReq.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp revoked = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.getRevoked = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.RevokeConsentReq} returns this
*/
proto.api.v0alpha.RevokeConsentReq.prototype.setRevoked = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.RevokeConsentReq} returns this
 */
proto.api.v0alpha.RevokeConsentReq.prototype.clearRevoked = function() {
  return this.setRevoked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.hasRevoked = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string consent_profile_id = 4;
 * @return {string}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RevokeConsentReq} returns this
 */
proto.api.v0alpha.RevokeConsentReq.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RevokeConsentReq} returns this
 */
proto.api.v0alpha.RevokeConsentReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional api.commons.Channel channel_type = 6;
 * @return {!proto.api.commons.Channel}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.Channel} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.Channel} value
 * @return {!proto.api.v0alpha.RevokeConsentReq} returns this
 */
proto.api.v0alpha.RevokeConsentReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string revoked_reason = 7;
 * @return {string}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.getRevokedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RevokeConsentReq} returns this
 */
proto.api.v0alpha.RevokeConsentReq.prototype.setRevokedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional api.commons.ContentType content_type = 8;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.RevokeConsentReq.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.RevokeConsentReq} returns this
 */
proto.api.v0alpha.RevokeConsentReq.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
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
proto.api.v0alpha.EnableConsentProfileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.EnableConsentProfileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.EnableConsentProfileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EnableConsentProfileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.EnableConsentProfileReq}
 */
proto.api.v0alpha.EnableConsentProfileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.EnableConsentProfileReq;
  return proto.api.v0alpha.EnableConsentProfileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.EnableConsentProfileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.EnableConsentProfileReq}
 */
proto.api.v0alpha.EnableConsentProfileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.EnableConsentProfileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.EnableConsentProfileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.EnableConsentProfileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EnableConsentProfileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string consent_profile_id = 1;
 * @return {string}
 */
proto.api.v0alpha.EnableConsentProfileReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.EnableConsentProfileReq} returns this
 */
proto.api.v0alpha.EnableConsentProfileReq.prototype.setConsentProfileId = function(value) {
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
proto.api.v0alpha.DisableConsentProfileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DisableConsentProfileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DisableConsentProfileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DisableConsentProfileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DisableConsentProfileReq}
 */
proto.api.v0alpha.DisableConsentProfileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DisableConsentProfileReq;
  return proto.api.v0alpha.DisableConsentProfileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DisableConsentProfileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DisableConsentProfileReq}
 */
proto.api.v0alpha.DisableConsentProfileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DisableConsentProfileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DisableConsentProfileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DisableConsentProfileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DisableConsentProfileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string consent_profile_id = 1;
 * @return {string}
 */
proto.api.v0alpha.DisableConsentProfileReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DisableConsentProfileReq} returns this
 */
proto.api.v0alpha.DisableConsentProfileReq.prototype.setConsentProfileId = function(value) {
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
proto.api.v0alpha.ListConsentProfilesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConsentProfilesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConsentProfilesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentProfilesReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListConsentProfilesReq}
 */
proto.api.v0alpha.ListConsentProfilesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConsentProfilesReq;
  return proto.api.v0alpha.ListConsentProfilesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConsentProfilesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConsentProfilesReq}
 */
proto.api.v0alpha.ListConsentProfilesReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListConsentProfilesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConsentProfilesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConsentProfilesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentProfilesReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ListConsentProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConsentProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConsentProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    channel: (f = msg.getChannel()) && api_commons_communication_pb.CommType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConsentProfile}
 */
proto.api.v0alpha.ListConsentProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConsentProfile;
  return proto.api.v0alpha.ListConsentProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConsentProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConsentProfile}
 */
proto.api.v0alpha.ListConsentProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 5:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConsentProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConsentProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConsentProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfileName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
};


/**
 * optional string consent_profile_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ListConsentProfile.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListConsentProfile} returns this
 */
proto.api.v0alpha.ListConsentProfile.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string profile_name = 2;
 * @return {string}
 */
proto.api.v0alpha.ListConsentProfile.prototype.getProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListConsentProfile} returns this
 */
proto.api.v0alpha.ListConsentProfile.prototype.setProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 count = 3;
 * @return {number}
 */
proto.api.v0alpha.ListConsentProfile.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListConsentProfile} returns this
 */
proto.api.v0alpha.ListConsentProfile.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool disabled = 4;
 * @return {boolean}
 */
proto.api.v0alpha.ListConsentProfile.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ListConsentProfile} returns this
 */
proto.api.v0alpha.ListConsentProfile.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional api.commons.CommType channel = 5;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.ListConsentProfile.prototype.getChannel = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 5));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.ListConsentProfile} returns this
*/
proto.api.v0alpha.ListConsentProfile.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConsentProfile} returns this
 */
proto.api.v0alpha.ListConsentProfile.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConsentProfile.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListConsentProfilesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListConsentProfilesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConsentProfilesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConsentProfilesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentProfilesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfilesList: jspb.Message.toObjectList(msg.getConsentProfilesList(),
    proto.api.v0alpha.ListConsentProfile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConsentProfilesRes}
 */
proto.api.v0alpha.ListConsentProfilesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConsentProfilesRes;
  return proto.api.v0alpha.ListConsentProfilesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConsentProfilesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConsentProfilesRes}
 */
proto.api.v0alpha.ListConsentProfilesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.ListConsentProfile;
      reader.readMessage(value,proto.api.v0alpha.ListConsentProfile.deserializeBinaryFromReader);
      msg.addConsentProfiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConsentProfilesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConsentProfilesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConsentProfilesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentProfilesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.ListConsentProfile.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ListConsentProfile consent_profiles = 1;
 * @return {!Array<!proto.api.v0alpha.ListConsentProfile>}
 */
proto.api.v0alpha.ListConsentProfilesRes.prototype.getConsentProfilesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ListConsentProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ListConsentProfile, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.ListConsentProfile>} value
 * @return {!proto.api.v0alpha.ListConsentProfilesRes} returns this
*/
proto.api.v0alpha.ListConsentProfilesRes.prototype.setConsentProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.ListConsentProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListConsentProfile}
 */
proto.api.v0alpha.ListConsentProfilesRes.prototype.addConsentProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.ListConsentProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConsentProfilesRes} returns this
 */
proto.api.v0alpha.ListConsentProfilesRes.prototype.clearConsentProfilesList = function() {
  return this.setConsentProfilesList([]);
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
proto.api.v0alpha.GetConsentUploadUrlReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentUploadUrlReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentUploadUrlReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentUploadUrlReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetConsentUploadUrlReq}
 */
proto.api.v0alpha.GetConsentUploadUrlReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentUploadUrlReq;
  return proto.api.v0alpha.GetConsentUploadUrlReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentUploadUrlReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentUploadUrlReq}
 */
proto.api.v0alpha.GetConsentUploadUrlReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetConsentUploadUrlReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentUploadUrlReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentUploadUrlReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentUploadUrlReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.GetConsentUploadUrlRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentUploadUrlRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentUploadUrlRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentUploadUrlRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bucket: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConsentUploadUrlRes}
 */
proto.api.v0alpha.GetConsentUploadUrlRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentUploadUrlRes;
  return proto.api.v0alpha.GetConsentUploadUrlRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentUploadUrlRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentUploadUrlRes}
 */
proto.api.v0alpha.GetConsentUploadUrlRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConsentUploadUrlRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentUploadUrlRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentUploadUrlRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentUploadUrlRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBucket();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api.v0alpha.GetConsentUploadUrlRes.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentUploadUrlRes} returns this
 */
proto.api.v0alpha.GetConsentUploadUrlRes.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filename = 2;
 * @return {string}
 */
proto.api.v0alpha.GetConsentUploadUrlRes.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentUploadUrlRes} returns this
 */
proto.api.v0alpha.GetConsentUploadUrlRes.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bucket = 3;
 * @return {string}
 */
proto.api.v0alpha.GetConsentUploadUrlRes.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentUploadUrlRes} returns this
 */
proto.api.v0alpha.GetConsentUploadUrlRes.prototype.setBucket = function(value) {
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
proto.api.v0alpha.DeleteConsentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteConsentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteConsentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteConsentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteConsentReq}
 */
proto.api.v0alpha.DeleteConsentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteConsentReq;
  return proto.api.v0alpha.DeleteConsentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteConsentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteConsentReq}
 */
proto.api.v0alpha.DeleteConsentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteConsentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteConsentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteConsentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteConsentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 consent_id = 1;
 * @return {number}
 */
proto.api.v0alpha.DeleteConsentReq.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DeleteConsentReq} returns this
 */
proto.api.v0alpha.DeleteConsentReq.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v0alpha.ProcessConsentUploadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessConsentUploadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessConsentUploadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentUploadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessConsentUploadReq}
 */
proto.api.v0alpha.ProcessConsentUploadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessConsentUploadReq;
  return proto.api.v0alpha.ProcessConsentUploadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessConsentUploadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessConsentUploadReq}
 */
proto.api.v0alpha.ProcessConsentUploadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessConsentUploadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessConsentUploadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessConsentUploadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentUploadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string filename = 2;
 * @return {string}
 */
proto.api.v0alpha.ProcessConsentUploadReq.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessConsentUploadReq} returns this
 */
proto.api.v0alpha.ProcessConsentUploadReq.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string consent_profile_id = 3;
 * @return {string}
 */
proto.api.v0alpha.ProcessConsentUploadReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessConsentUploadReq} returns this
 */
proto.api.v0alpha.ProcessConsentUploadReq.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string user_id = 4;
 * @return {string}
 */
proto.api.v0alpha.ProcessConsentUploadReq.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessConsentUploadReq} returns this
 */
proto.api.v0alpha.ProcessConsentUploadReq.prototype.setUserId = function(value) {
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
proto.api.v0alpha.ProcessConsentUploadRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessConsentUploadRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessConsentUploadRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentUploadRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesAdded: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessConsentUploadRes}
 */
proto.api.v0alpha.ProcessConsentUploadRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessConsentUploadRes;
  return proto.api.v0alpha.ProcessConsentUploadRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessConsentUploadRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessConsentUploadRes}
 */
proto.api.v0alpha.ProcessConsentUploadRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEntriesAdded(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessConsentUploadRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessConsentUploadRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessConsentUploadRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentUploadRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesAdded();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 entries_added = 1;
 * @return {number}
 */
proto.api.v0alpha.ProcessConsentUploadRes.prototype.getEntriesAdded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ProcessConsentUploadRes} returns this
 */
proto.api.v0alpha.ProcessConsentUploadRes.prototype.setEntriesAdded = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v0alpha.GetFieldNamesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetFieldNamesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetFieldNamesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetFieldNamesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    phoneOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetFieldNamesReq}
 */
proto.api.v0alpha.GetFieldNamesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetFieldNamesReq;
  return proto.api.v0alpha.GetFieldNamesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetFieldNamesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetFieldNamesReq}
 */
proto.api.v0alpha.GetFieldNamesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPhoneOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetFieldNamesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetFieldNamesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetFieldNamesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetFieldNamesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhoneOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool phone_only = 2;
 * @return {boolean}
 */
proto.api.v0alpha.GetFieldNamesReq.prototype.getPhoneOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.GetFieldNamesReq} returns this
 */
proto.api.v0alpha.GetFieldNamesReq.prototype.setPhoneOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.FieldNames.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.FieldNames.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.FieldNames.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.FieldNames} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.FieldNames.toObject = function(includeInstance, msg) {
  var f, obj = {
    namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.FieldNames}
 */
proto.api.v0alpha.FieldNames.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.FieldNames;
  return proto.api.v0alpha.FieldNames.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.FieldNames} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.FieldNames}
 */
proto.api.v0alpha.FieldNames.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.api.v0alpha.FieldNames.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.FieldNames.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.FieldNames} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.FieldNames.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.FieldNames.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.FieldNames} returns this
 */
proto.api.v0alpha.FieldNames.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.FieldNames} returns this
 */
proto.api.v0alpha.FieldNames.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.FieldNames} returns this
 */
proto.api.v0alpha.FieldNames.prototype.clearNamesList = function() {
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
proto.api.v0alpha.GetResultDescriptionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetResultDescriptionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetResultDescriptionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetResultDescriptionsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetResultDescriptionsReq}
 */
proto.api.v0alpha.GetResultDescriptionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetResultDescriptionsReq;
  return proto.api.v0alpha.GetResultDescriptionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetResultDescriptionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetResultDescriptionsReq}
 */
proto.api.v0alpha.GetResultDescriptionsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetResultDescriptionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetResultDescriptionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetResultDescriptionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetResultDescriptionsReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.PurgeScrubListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PurgeScrubListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PurgeScrubListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PurgeScrubListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    listId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PurgeScrubListReq}
 */
proto.api.v0alpha.PurgeScrubListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PurgeScrubListReq;
  return proto.api.v0alpha.PurgeScrubListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PurgeScrubListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PurgeScrubListReq}
 */
proto.api.v0alpha.PurgeScrubListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setListId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.PurgeScrubListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PurgeScrubListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PurgeScrubListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PurgeScrubListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string list_id = 1;
 * @return {string}
 */
proto.api.v0alpha.PurgeScrubListReq.prototype.getListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.PurgeScrubListReq} returns this
 */
proto.api.v0alpha.PurgeScrubListReq.prototype.setListId = function(value) {
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
proto.api.v0alpha.PurgeScrubListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PurgeScrubListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PurgeScrubListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PurgeScrubListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesFound: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PurgeScrubListRes}
 */
proto.api.v0alpha.PurgeScrubListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PurgeScrubListRes;
  return proto.api.v0alpha.PurgeScrubListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PurgeScrubListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PurgeScrubListRes}
 */
proto.api.v0alpha.PurgeScrubListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEntriesFound(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.PurgeScrubListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PurgeScrubListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PurgeScrubListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PurgeScrubListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesFound();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 entries_found = 1;
 * @return {number}
 */
proto.api.v0alpha.PurgeScrubListRes.prototype.getEntriesFound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.PurgeScrubListRes} returns this
 */
proto.api.v0alpha.PurgeScrubListRes.prototype.setEntriesFound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.api.v0alpha.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Empty.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.Empty}
 */
proto.api.v0alpha.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.Empty;
  return proto.api.v0alpha.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.Empty}
 */
proto.api.v0alpha.Empty.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Empty.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ConsentTopic.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ConsentTopic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ConsentTopic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ConsentTopic.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ConsentTopic}
 */
proto.api.v0alpha.ConsentTopic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ConsentTopic;
  return proto.api.v0alpha.ConsentTopic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ConsentTopic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ConsentTopic}
 */
proto.api.v0alpha.ConsentTopic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ConsentTopic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ConsentTopic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ConsentTopic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ConsentTopic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
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
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.api.v0alpha.ConsentTopic.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentTopic} returns this
 */
proto.api.v0alpha.ConsentTopic.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.api.v0alpha.ConsentTopic.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentTopic} returns this
 */
proto.api.v0alpha.ConsentTopic.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool deleted = 3;
 * @return {boolean}
 */
proto.api.v0alpha.ConsentTopic.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ConsentTopic} returns this
 */
proto.api.v0alpha.ConsentTopic.prototype.setDeleted = function(value) {
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
proto.api.v0alpha.ListConsentTopicsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConsentTopicsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConsentTopicsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentTopicsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListConsentTopicsReq}
 */
proto.api.v0alpha.ListConsentTopicsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConsentTopicsReq;
  return proto.api.v0alpha.ListConsentTopicsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConsentTopicsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConsentTopicsReq}
 */
proto.api.v0alpha.ListConsentTopicsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListConsentTopicsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConsentTopicsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConsentTopicsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentTopicsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListConsentTopicsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListConsentTopicsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConsentTopicsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConsentTopicsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentTopicsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicsList: jspb.Message.toObjectList(msg.getTopicsList(),
    proto.api.v0alpha.ConsentTopic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConsentTopicsRes}
 */
proto.api.v0alpha.ListConsentTopicsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConsentTopicsRes;
  return proto.api.v0alpha.ListConsentTopicsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConsentTopicsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConsentTopicsRes}
 */
proto.api.v0alpha.ListConsentTopicsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.ConsentTopic;
      reader.readMessage(value,proto.api.v0alpha.ConsentTopic.deserializeBinaryFromReader);
      msg.addTopics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConsentTopicsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConsentTopicsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConsentTopicsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConsentTopicsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.ConsentTopic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ConsentTopic topics = 1;
 * @return {!Array<!proto.api.v0alpha.ConsentTopic>}
 */
proto.api.v0alpha.ListConsentTopicsRes.prototype.getTopicsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ConsentTopic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ConsentTopic, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.ConsentTopic>} value
 * @return {!proto.api.v0alpha.ListConsentTopicsRes} returns this
*/
proto.api.v0alpha.ListConsentTopicsRes.prototype.setTopicsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.ConsentTopic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentTopic}
 */
proto.api.v0alpha.ListConsentTopicsRes.prototype.addTopics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.ConsentTopic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConsentTopicsRes} returns this
 */
proto.api.v0alpha.ListConsentTopicsRes.prototype.clearTopicsList = function() {
  return this.setTopicsList([]);
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
proto.api.v0alpha.GetConsentTopicReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentTopicReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentTopicReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentTopicReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConsentTopicReq}
 */
proto.api.v0alpha.GetConsentTopicReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentTopicReq;
  return proto.api.v0alpha.GetConsentTopicReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentTopicReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentTopicReq}
 */
proto.api.v0alpha.GetConsentTopicReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConsentTopicReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentTopicReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentTopicReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentTopicReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.api.v0alpha.GetConsentTopicReq.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentTopicReq} returns this
 */
proto.api.v0alpha.GetConsentTopicReq.prototype.setTopic = function(value) {
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
proto.api.v0alpha.UpdateConsentTopicReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateConsentTopicReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateConsentTopicReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateConsentTopicReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    originalTopic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newTopic: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateConsentTopicReq}
 */
proto.api.v0alpha.UpdateConsentTopicReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateConsentTopicReq;
  return proto.api.v0alpha.UpdateConsentTopicReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateConsentTopicReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateConsentTopicReq}
 */
proto.api.v0alpha.UpdateConsentTopicReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalTopic(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateConsentTopicReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateConsentTopicReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateConsentTopicReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateConsentTopicReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginalTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewTopic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string original_topic = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentTopicReq.prototype.getOriginalTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentTopicReq} returns this
 */
proto.api.v0alpha.UpdateConsentTopicReq.prototype.setOriginalTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_topic = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateConsentTopicReq.prototype.getNewTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateConsentTopicReq} returns this
 */
proto.api.v0alpha.UpdateConsentTopicReq.prototype.setNewTopic = function(value) {
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
proto.api.v0alpha.SearchConsentByContentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SearchConsentByContentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SearchConsentByContentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchConsentByContentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SearchConsentByContentReq}
 */
proto.api.v0alpha.SearchConsentByContentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SearchConsentByContentReq;
  return proto.api.v0alpha.SearchConsentByContentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SearchConsentByContentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SearchConsentByContentReq}
 */
proto.api.v0alpha.SearchConsentByContentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SearchConsentByContentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SearchConsentByContentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SearchConsentByContentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchConsentByContentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.api.v0alpha.SearchConsentByContentReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchConsentByContentReq} returns this
 */
proto.api.v0alpha.SearchConsentByContentReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string consent_profile_id = 3;
 * @return {string}
 */
proto.api.v0alpha.SearchConsentByContentReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SearchConsentByContentReq} returns this
 */
proto.api.v0alpha.SearchConsentByContentReq.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ConsentByContent.repeatedFields_ = [15,22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ConsentByContent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ConsentByContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ConsentByContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ConsentByContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profileName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    consentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    revoked: (f = msg.getRevoked()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expire: (f = msg.getExpire()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    channel: (f = msg.getChannel()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    topic: jspb.Message.getFieldWithDefault(msg, 14, ""),
    conditionDaysOfTheWeekList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    conditionTimeOfDayFrom: jspb.Message.getFieldWithDefault(msg, 16, ""),
    conditionTimeOfDayTo: jspb.Message.getFieldWithDefault(msg, 17, ""),
    conditionFrom: (f = msg.getConditionFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conditionTo: (f = msg.getConditionTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    notes: jspb.Message.getFieldWithDefault(msg, 20, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 21, 0),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.api.v0alpha.ConsentCondition.toObject, includeInstance),
    channelType: jspb.Message.getFieldWithDefault(msg, 23, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ConsentByContent}
 */
proto.api.v0alpha.ConsentByContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ConsentByContent;
  return proto.api.v0alpha.ConsentByContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ConsentByContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ConsentByContent}
 */
proto.api.v0alpha.ConsentByContent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRevoked(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpire(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 13:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 15:
      var values = /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConditionDaysOfTheWeek(values[i]);
      }
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayFrom(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayTo(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionFrom(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionTo(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 21:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 22:
      var value = new proto.api.v0alpha.ConsentCondition;
      reader.readMessage(value,proto.api.v0alpha.ConsentCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    case 23:
      var value = /** @type {!proto.api.commons.Channel} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ConsentByContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ConsentByContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ConsentByContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ConsentByContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProfileName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRevoked();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpire();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getConditionDaysOfTheWeekList();
  if (f.length > 0) {
    writer.writePackedEnum(
      15,
      f
    );
  }
  f = message.getConditionTimeOfDayFrom();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getConditionTimeOfDayTo();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getConditionFrom();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConditionTo();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.api.v0alpha.ConsentCondition.serializeBinaryToWriter
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      23,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ConsentByContent.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string profile_id = 2;
 * @return {string}
 */
proto.api.v0alpha.ConsentByContent.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string profile_name = 3;
 * @return {string}
 */
proto.api.v0alpha.ConsentByContent.prototype.getProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 consent_id = 4;
 * @return {number}
 */
proto.api.v0alpha.ConsentByContent.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.api.v0alpha.ConsentByContent.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp revoked = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ConsentByContent.prototype.getRevoked = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
*/
proto.api.v0alpha.ConsentByContent.prototype.setRevoked = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.clearRevoked = function() {
  return this.setRevoked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentByContent.prototype.hasRevoked = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp expire = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ConsentByContent.prototype.getExpire = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
*/
proto.api.v0alpha.ConsentByContent.prototype.setExpire = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.clearExpire = function() {
  return this.setExpire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentByContent.prototype.hasExpire = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool disabled = 12;
 * @return {boolean}
 */
proto.api.v0alpha.ConsentByContent.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional api.commons.CommType channel = 13;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.ConsentByContent.prototype.getChannel = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 13));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
*/
proto.api.v0alpha.ConsentByContent.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentByContent.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string topic = 14;
 * @return {string}
 */
proto.api.v0alpha.ConsentByContent.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated api.commons.Weekday.Enum condition_days_of_the_week = 15;
 * @return {!Array<!proto.api.commons.Weekday.Enum>}
 */
proto.api.v0alpha.ConsentByContent.prototype.getConditionDaysOfTheWeekList = function() {
  return /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<!proto.api.commons.Weekday.Enum>} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setConditionDaysOfTheWeekList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.addConditionDaysOfTheWeek = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.clearConditionDaysOfTheWeekList = function() {
  return this.setConditionDaysOfTheWeekList([]);
};


/**
 * optional string condition_time_of_day_from = 16;
 * @return {string}
 */
proto.api.v0alpha.ConsentByContent.prototype.getConditionTimeOfDayFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setConditionTimeOfDayFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string condition_time_of_day_to = 17;
 * @return {string}
 */
proto.api.v0alpha.ConsentByContent.prototype.getConditionTimeOfDayTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setConditionTimeOfDayTo = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional google.protobuf.Timestamp condition_from = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ConsentByContent.prototype.getConditionFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
*/
proto.api.v0alpha.ConsentByContent.prototype.setConditionFrom = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.clearConditionFrom = function() {
  return this.setConditionFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentByContent.prototype.hasConditionFrom = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp condition_to = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ConsentByContent.prototype.getConditionTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
*/
proto.api.v0alpha.ConsentByContent.prototype.setConditionTo = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.clearConditionTo = function() {
  return this.setConditionTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ConsentByContent.prototype.hasConditionTo = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string notes = 20;
 * @return {string}
 */
proto.api.v0alpha.ConsentByContent.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional api.commons.ContentType content_type = 21;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.ConsentByContent.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * repeated ConsentCondition conditions = 22;
 * @return {!Array<!proto.api.v0alpha.ConsentCondition>}
 */
proto.api.v0alpha.ConsentByContent.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ConsentCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ConsentCondition, 22));
};


/**
 * @param {!Array<!proto.api.v0alpha.ConsentCondition>} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
*/
proto.api.v0alpha.ConsentByContent.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.api.v0alpha.ConsentCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentCondition}
 */
proto.api.v0alpha.ConsentByContent.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.api.v0alpha.ConsentCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};


/**
 * optional api.commons.Channel channel_type = 23;
 * @return {!proto.api.commons.Channel}
 */
proto.api.v0alpha.ConsentByContent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.Channel} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.api.commons.Channel} value
 * @return {!proto.api.v0alpha.ConsentByContent} returns this
 */
proto.api.v0alpha.ConsentByContent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 23, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SearchConsentByContentRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SearchConsentByContentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SearchConsentByContentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SearchConsentByContentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchConsentByContentRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentsList: jspb.Message.toObjectList(msg.getConsentsList(),
    proto.api.v0alpha.ConsentByContent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SearchConsentByContentRes}
 */
proto.api.v0alpha.SearchConsentByContentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SearchConsentByContentRes;
  return proto.api.v0alpha.SearchConsentByContentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SearchConsentByContentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SearchConsentByContentRes}
 */
proto.api.v0alpha.SearchConsentByContentRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.ConsentByContent;
      reader.readMessage(value,proto.api.v0alpha.ConsentByContent.deserializeBinaryFromReader);
      msg.addConsents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SearchConsentByContentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SearchConsentByContentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SearchConsentByContentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SearchConsentByContentRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.ConsentByContent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ConsentByContent consents = 1;
 * @return {!Array<!proto.api.v0alpha.ConsentByContent>}
 */
proto.api.v0alpha.SearchConsentByContentRes.prototype.getConsentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ConsentByContent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ConsentByContent, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.ConsentByContent>} value
 * @return {!proto.api.v0alpha.SearchConsentByContentRes} returns this
*/
proto.api.v0alpha.SearchConsentByContentRes.prototype.setConsentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.ConsentByContent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentByContent}
 */
proto.api.v0alpha.SearchConsentByContentRes.prototype.addConsents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.ConsentByContent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SearchConsentByContentRes} returns this
 */
proto.api.v0alpha.SearchConsentByContentRes.prototype.clearConsentsList = function() {
  return this.setConsentsList([]);
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
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentByProfileAndContentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentByProfileAndContentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    profileId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentReq}
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentByProfileAndContentReq;
  return proto.api.v0alpha.GetConsentByProfileAndContentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentByProfileAndContentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentReq}
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentByProfileAndContentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentByProfileAndContentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string profile_name = 2;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.getProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentReq} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.setProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentReq} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string profile_id = 4;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentReq} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.ContentType content_type = 5;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentReq} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentReq.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.repeatedFields_ = [15,22];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentByProfileAndContentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentByProfileAndContentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profileName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    consentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    revoked: (f = msg.getRevoked()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expire: (f = msg.getExpire()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    channel: (f = msg.getChannel()) && api_commons_communication_pb.CommType.toObject(includeInstance, f),
    topic: jspb.Message.getFieldWithDefault(msg, 14, ""),
    conditionDaysOfTheWeekList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    conditionTimeOfDayFrom: jspb.Message.getFieldWithDefault(msg, 16, ""),
    conditionTimeOfDayTo: jspb.Message.getFieldWithDefault(msg, 17, ""),
    conditionFrom: (f = msg.getConditionFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conditionTo: (f = msg.getConditionTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    notes: jspb.Message.getFieldWithDefault(msg, 20, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 21, 0),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.api.v0alpha.ConsentCondition.toObject, includeInstance),
    channelType: jspb.Message.getFieldWithDefault(msg, 23, 0),
    revokedReason: jspb.Message.getFieldWithDefault(msg, 24, ""),
    grantedReason: jspb.Message.getFieldWithDefault(msg, 25, ""),
    proof: jspb.Message.getFieldWithDefault(msg, 26, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentByProfileAndContentRes;
  return proto.api.v0alpha.GetConsentByProfileAndContentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentByProfileAndContentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProfileId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConsentId(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRevoked(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpire(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 13:
      var value = new api_commons_communication_pb.CommType;
      reader.readMessage(value,api_commons_communication_pb.CommType.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 15:
      var values = /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConditionDaysOfTheWeek(values[i]);
      }
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayFrom(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setConditionTimeOfDayTo(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionFrom(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setConditionTo(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 21:
      var value = /** @type {!proto.api.commons.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 22:
      var value = new proto.api.v0alpha.ConsentCondition;
      reader.readMessage(value,proto.api.v0alpha.ConsentCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    case 23:
      var value = /** @type {!proto.api.commons.Channel} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevokedReason(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedReason(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setProof(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentByProfileAndContentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentByProfileAndContentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProfileName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConsentId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRevoked();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpire();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getChannel();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      api_commons_communication_pb.CommType.serializeBinaryToWriter
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getConditionDaysOfTheWeekList();
  if (f.length > 0) {
    writer.writePackedEnum(
      15,
      f
    );
  }
  f = message.getConditionTimeOfDayFrom();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getConditionTimeOfDayTo();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getConditionFrom();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConditionTo();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.api.v0alpha.ConsentCondition.serializeBinaryToWriter
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = message.getRevokedReason();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getGrantedReason();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getProof();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string profile_id = 2;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string profile_name = 3;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 consent_id = 4;
 * @return {number}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getConsentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setConsentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp revoked = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getRevoked = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
*/
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setRevoked = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.clearRevoked = function() {
  return this.setRevoked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.hasRevoked = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp expire = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getExpire = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
*/
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setExpire = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.clearExpire = function() {
  return this.setExpire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.hasExpire = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool disabled = 12;
 * @return {boolean}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional api.commons.CommType channel = 13;
 * @return {?proto.api.commons.CommType}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getChannel = function() {
  return /** @type{?proto.api.commons.CommType} */ (
    jspb.Message.getWrapperField(this, api_commons_communication_pb.CommType, 13));
};


/**
 * @param {?proto.api.commons.CommType|undefined} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
*/
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setChannel = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.clearChannel = function() {
  return this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string topic = 14;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated api.commons.Weekday.Enum condition_days_of_the_week = 15;
 * @return {!Array<!proto.api.commons.Weekday.Enum>}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getConditionDaysOfTheWeekList = function() {
  return /** @type {!Array<!proto.api.commons.Weekday.Enum>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<!proto.api.commons.Weekday.Enum>} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setConditionDaysOfTheWeekList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.addConditionDaysOfTheWeek = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.clearConditionDaysOfTheWeekList = function() {
  return this.setConditionDaysOfTheWeekList([]);
};


/**
 * optional string condition_time_of_day_from = 16;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getConditionTimeOfDayFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setConditionTimeOfDayFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string condition_time_of_day_to = 17;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getConditionTimeOfDayTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setConditionTimeOfDayTo = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional google.protobuf.Timestamp condition_from = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getConditionFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
*/
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setConditionFrom = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.clearConditionFrom = function() {
  return this.setConditionFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.hasConditionFrom = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp condition_to = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getConditionTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
*/
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setConditionTo = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.clearConditionTo = function() {
  return this.setConditionTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.hasConditionTo = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string notes = 20;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional api.commons.ContentType content_type = 21;
 * @return {!proto.api.commons.ContentType}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getContentType = function() {
  return /** @type {!proto.api.commons.ContentType} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.api.commons.ContentType} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * repeated ConsentCondition conditions = 22;
 * @return {!Array<!proto.api.v0alpha.ConsentCondition>}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ConsentCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ConsentCondition, 22));
};


/**
 * @param {!Array<!proto.api.v0alpha.ConsentCondition>} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
*/
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.api.v0alpha.ConsentCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ConsentCondition}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.api.v0alpha.ConsentCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};


/**
 * optional api.commons.Channel channel_type = 23;
 * @return {!proto.api.commons.Channel}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.Channel} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.api.commons.Channel} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 23, value);
};


/**
 * optional string revoked_reason = 24;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getRevokedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setRevokedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string granted_reason = 25;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getGrantedReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setGrantedReason = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string proof = 26;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.getProof = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByProfileAndContentRes} returns this
 */
proto.api.v0alpha.GetConsentByProfileAndContentRes.prototype.setProof = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
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
proto.api.v0alpha.GetConsentByContentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentByContentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentByContentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentByContentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    profileId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConsentByContentReq}
 */
proto.api.v0alpha.GetConsentByContentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentByContentReq;
  return proto.api.v0alpha.GetConsentByContentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentByContentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentByContentReq}
 */
proto.api.v0alpha.GetConsentByContentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileId(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.Channel} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentByContentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentByContentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentByContentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProfileId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string profile_name = 2;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.getProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByContentReq} returns this
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.setProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByContentReq} returns this
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string profile_id = 4;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.getProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByContentReq} returns this
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.setProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.Channel channel_type = 5;
 * @return {!proto.api.commons.Channel}
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.Channel} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.Channel} value
 * @return {!proto.api.v0alpha.GetConsentByContentReq} returns this
 */
proto.api.v0alpha.GetConsentByContentReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
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
proto.api.v0alpha.GetConsentByContentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConsentByContentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConsentByContentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentByContentRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    consent: (f = msg.getConsent()) && proto.api.v0alpha.Consent.toObject(includeInstance, f),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConsentByContentRes}
 */
proto.api.v0alpha.GetConsentByContentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConsentByContentRes;
  return proto.api.v0alpha.GetConsentByContentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConsentByContentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConsentByContentRes}
 */
proto.api.v0alpha.GetConsentByContentRes.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProfileName(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.Consent;
      reader.readMessage(value,proto.api.v0alpha.Consent.deserializeBinaryFromReader);
      msg.setConsent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConsentByContentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConsentByContentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConsentByContentRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfileName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConsent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v0alpha.Consent.serializeBinaryToWriter
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByContentRes} returns this
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string profile_name = 2;
 * @return {string}
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.getProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConsentByContentRes} returns this
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.setProfileName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Consent consent = 3;
 * @return {?proto.api.v0alpha.Consent}
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.getConsent = function() {
  return /** @type{?proto.api.v0alpha.Consent} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Consent, 3));
};


/**
 * @param {?proto.api.v0alpha.Consent|undefined} value
 * @return {!proto.api.v0alpha.GetConsentByContentRes} returns this
*/
proto.api.v0alpha.GetConsentByContentRes.prototype.setConsent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetConsentByContentRes} returns this
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.clearConsent = function() {
  return this.setConsent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.hasConsent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool disabled = 4;
 * @return {boolean}
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.GetConsentByContentRes} returns this
 */
proto.api.v0alpha.GetConsentByContentRes.prototype.setDisabled = function(value) {
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
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessConsentListDeleteUploadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    consentProfileId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    filename: jspb.Message.getFieldWithDefault(msg, 11, ""),
    notificationMessage: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadReq}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessConsentListDeleteUploadReq;
  return proto.api.v0alpha.ProcessConsentListDeleteUploadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadReq}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsentProfileId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotificationMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessConsentListDeleteUploadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsentProfileId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getNotificationMessage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string consent_profile_id = 10;
 * @return {string}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.prototype.getConsentProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadReq} returns this
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.prototype.setConsentProfileId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string filename = 11;
 * @return {string}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadReq} returns this
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string notification_message = 12;
 * @return {string}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.prototype.getNotificationMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadReq} returns this
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadReq.prototype.setNotificationMessage = function(value) {
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
proto.api.v0alpha.ProcessConsentListDeleteUploadRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessConsentListDeleteUploadRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadRes}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessConsentListDeleteUploadRes;
  return proto.api.v0alpha.ProcessConsentListDeleteUploadRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadRes}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ProcessConsentListDeleteUploadRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessConsentListDeleteUploadRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeStarted: (f = msg.getTimeStarted()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadMeta}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ProcessConsentListDeleteUploadMeta;
  return proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadMeta}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeStarted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ProcessConsentListDeleteUploadMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeStarted();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp time_started = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.prototype.getTimeStarted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadMeta} returns this
*/
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.prototype.setTimeStarted = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ProcessConsentListDeleteUploadMeta} returns this
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.prototype.clearTimeStarted = function() {
  return this.setTimeStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ProcessConsentListDeleteUploadMeta.prototype.hasTimeStarted = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.api.v0alpha);
