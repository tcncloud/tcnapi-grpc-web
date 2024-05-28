// source: api/v1alpha1/org/organizations/preferences.proto
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
var localGlobalThis = require("../../../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_commons_org_pb = require('../../../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var api_commons_org_preferences_pb = require('../../../../api/commons/org/preferences_pb.js');
goog.object.extend(proto, api_commons_org_preferences_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.PhonePreferencesDB', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.PhonePreferencesDB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.PhonePreferencesDB.displayName = 'proto.api.v1alpha1.org.organizations.PhonePreferencesDB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.displayName = 'proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.displayName = 'proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.displayName = 'proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.displayName = 'proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.displayName = 'proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.displayName = 'proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.displayName = 'proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.displayName = 'proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.displayName = 'proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.displayName = 'proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.displayName = 'proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.displayName = 'proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse';
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
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationPreferences: (f = msg.getOrganizationPreferences()) && api_commons_org_preferences_pb.OrganizationPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.OrganizationPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.OrganizationPreferences.deserializeBinaryFromReader);
      msg.setOrganizationPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.OrganizationPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.OrganizationPreferences organization_preferences = 1;
 * @return {?proto.api.commons.org.OrganizationPreferences}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.prototype.getOrganizationPreferences = function() {
  return /** @type{?proto.api.commons.org.OrganizationPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.OrganizationPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.OrganizationPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.prototype.setOrganizationPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.prototype.clearOrganizationPreferences = function() {
  return this.setOrganizationPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetOrganizationPreferencesResponse.prototype.hasOrganizationPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationPreferences: (f = msg.getOrganizationPreferences()) && api_commons_org_preferences_pb.OrganizationPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.OrganizationPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.OrganizationPreferences.deserializeBinaryFromReader);
      msg.setOrganizationPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.OrganizationPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.OrganizationPreferences organization_preferences = 1;
 * @return {?proto.api.commons.org.OrganizationPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.getOrganizationPreferences = function() {
  return /** @type{?proto.api.commons.org.OrganizationPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.OrganizationPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.OrganizationPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.setOrganizationPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.clearOrganizationPreferences = function() {
  return this.setOrganizationPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.hasOrganizationPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateOrganizationPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentPreferences: (f = msg.getAgentPreferences()) && api_commons_org_preferences_pb.AgentPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.AgentPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.AgentPreferences.deserializeBinaryFromReader);
      msg.setAgentPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.AgentPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.AgentPreferences agent_preferences = 1;
 * @return {?proto.api.commons.org.AgentPreferences}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.prototype.getAgentPreferences = function() {
  return /** @type{?proto.api.commons.org.AgentPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AgentPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AgentPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.prototype.setAgentPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.prototype.clearAgentPreferences = function() {
  return this.setAgentPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetAgentPreferencesResponse.prototype.hasAgentPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentPreferences: (f = msg.getAgentPreferences()) && api_commons_org_preferences_pb.AgentPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.AgentPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.AgentPreferences.deserializeBinaryFromReader);
      msg.setAgentPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.AgentPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.AgentPreferences agent_preferences = 1;
 * @return {?proto.api.commons.org.AgentPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.getAgentPreferences = function() {
  return /** @type{?proto.api.commons.org.AgentPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AgentPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AgentPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.setAgentPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.clearAgentPreferences = function() {
  return this.setAgentPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.hasAgentPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAgentPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactPreferences: (f = msg.getContactPreferences()) && api_commons_org_preferences_pb.ContactPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.ContactPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.ContactPreferences.deserializeBinaryFromReader);
      msg.setContactPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.ContactPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.ContactPreferences contact_preferences = 1;
 * @return {?proto.api.commons.org.ContactPreferences}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.prototype.getContactPreferences = function() {
  return /** @type{?proto.api.commons.org.ContactPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.ContactPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.ContactPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.prototype.setContactPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.prototype.clearContactPreferences = function() {
  return this.setContactPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetContactPreferencesResponse.prototype.hasContactPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactPreferences: (f = msg.getContactPreferences()) && api_commons_org_preferences_pb.ContactPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.ContactPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.ContactPreferences.deserializeBinaryFromReader);
      msg.setContactPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.ContactPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.ContactPreferences contact_preferences = 1;
 * @return {?proto.api.commons.org.ContactPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.getContactPreferences = function() {
  return /** @type{?proto.api.commons.org.ContactPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.ContactPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.ContactPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.setContactPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.clearContactPreferences = function() {
  return this.setContactPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.hasContactPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateContactPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    authenticationPreferences: (f = msg.getAuthenticationPreferences()) && api_commons_org_preferences_pb.AuthenticationPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.AuthenticationPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.AuthenticationPreferences.deserializeBinaryFromReader);
      msg.setAuthenticationPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthenticationPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.AuthenticationPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.AuthenticationPreferences authentication_preferences = 1;
 * @return {?proto.api.commons.org.AuthenticationPreferences}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.prototype.getAuthenticationPreferences = function() {
  return /** @type{?proto.api.commons.org.AuthenticationPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AuthenticationPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AuthenticationPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.prototype.setAuthenticationPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.prototype.clearAuthenticationPreferences = function() {
  return this.setAuthenticationPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetAuthenticationPreferencesResponse.prototype.hasAuthenticationPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authenticationPreferences: (f = msg.getAuthenticationPreferences()) && api_commons_org_preferences_pb.AuthenticationPreferences.toObject(includeInstance, f),
    duoClientSecret: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.AuthenticationPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.AuthenticationPreferences.deserializeBinaryFromReader);
      msg.setAuthenticationPreferences(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuoClientSecret(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthenticationPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.AuthenticationPreferences.serializeBinaryToWriter
    );
  }
  f = message.getDuoClientSecret();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.AuthenticationPreferences authentication_preferences = 1;
 * @return {?proto.api.commons.org.AuthenticationPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.getAuthenticationPreferences = function() {
  return /** @type{?proto.api.commons.org.AuthenticationPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AuthenticationPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AuthenticationPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.setAuthenticationPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.clearAuthenticationPreferences = function() {
  return this.setAuthenticationPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.hasAuthenticationPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string duo_client_secret = 5;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.getDuoClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.setDuoClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAuthenticationPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhookPreferences: (f = msg.getWebhookPreferences()) && api_commons_org_preferences_pb.WebhookPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.WebhookPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.WebhookPreferences.deserializeBinaryFromReader);
      msg.setWebhookPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhookPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.WebhookPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.WebhookPreferences webhook_preferences = 1;
 * @return {?proto.api.commons.org.WebhookPreferences}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.prototype.getWebhookPreferences = function() {
  return /** @type{?proto.api.commons.org.WebhookPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.WebhookPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.WebhookPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.prototype.setWebhookPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.prototype.clearWebhookPreferences = function() {
  return this.setWebhookPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetWebhookPreferencesResponse.prototype.hasWebhookPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhookPreferences: (f = msg.getWebhookPreferences()) && api_commons_org_preferences_pb.WebhookPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.WebhookPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.WebhookPreferences.deserializeBinaryFromReader);
      msg.setWebhookPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhookPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.WebhookPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.WebhookPreferences webhook_preferences = 1;
 * @return {?proto.api.commons.org.WebhookPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.getWebhookPreferences = function() {
  return /** @type{?proto.api.commons.org.WebhookPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.WebhookPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.WebhookPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.setWebhookPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.clearWebhookPreferences = function() {
  return this.setWebhookPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.hasWebhookPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateWebhookPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dashboardPreferences: (f = msg.getDashboardPreferences()) && api_commons_org_preferences_pb.DashboardPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.DashboardPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.DashboardPreferences.deserializeBinaryFromReader);
      msg.setDashboardPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDashboardPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.DashboardPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.DashboardPreferences dashboard_preferences = 1;
 * @return {?proto.api.commons.org.DashboardPreferences}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.prototype.getDashboardPreferences = function() {
  return /** @type{?proto.api.commons.org.DashboardPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DashboardPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.DashboardPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.prototype.setDashboardPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.prototype.clearDashboardPreferences = function() {
  return this.setDashboardPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetDashboardGeneralPreferencesResponse.prototype.hasDashboardPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dashboardPreferences: (f = msg.getDashboardPreferences()) && api_commons_org_preferences_pb.DashboardPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.DashboardPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.DashboardPreferences.deserializeBinaryFromReader);
      msg.setDashboardPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDashboardPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.DashboardPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.DashboardPreferences dashboard_preferences = 1;
 * @return {?proto.api.commons.org.DashboardPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.getDashboardPreferences = function() {
  return /** @type{?proto.api.commons.org.DashboardPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DashboardPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.DashboardPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.setDashboardPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.clearDashboardPreferences = function() {
  return this.setDashboardPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.hasDashboardPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardGeneralPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dashboardQueuePreferences: (f = msg.getDashboardQueuePreferences()) && api_commons_org_preferences_pb.DashboardQueuePreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.DashboardQueuePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.DashboardQueuePreferences.deserializeBinaryFromReader);
      msg.setDashboardQueuePreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDashboardQueuePreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.DashboardQueuePreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.DashboardQueuePreferences dashboard_queue_preferences = 1;
 * @return {?proto.api.commons.org.DashboardQueuePreferences}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.prototype.getDashboardQueuePreferences = function() {
  return /** @type{?proto.api.commons.org.DashboardQueuePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DashboardQueuePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.DashboardQueuePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.prototype.setDashboardQueuePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.prototype.clearDashboardQueuePreferences = function() {
  return this.setDashboardQueuePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetDashboardQueuePreferencesResponse.prototype.hasDashboardQueuePreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dashboardQueuePreferences: (f = msg.getDashboardQueuePreferences()) && api_commons_org_preferences_pb.DashboardQueuePreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.DashboardQueuePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.DashboardQueuePreferences.deserializeBinaryFromReader);
      msg.setDashboardQueuePreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDashboardQueuePreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.DashboardQueuePreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.DashboardQueuePreferences dashboard_queue_preferences = 1;
 * @return {?proto.api.commons.org.DashboardQueuePreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.getDashboardQueuePreferences = function() {
  return /** @type{?proto.api.commons.org.DashboardQueuePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DashboardQueuePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.DashboardQueuePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.setDashboardQueuePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.clearDashboardQueuePreferences = function() {
  return this.setDashboardQueuePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.hasDashboardQueuePreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateDashboardQueuePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    phonePreferences: (f = msg.getPhonePreferences()) && api_commons_org_preferences_pb.PhonePreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.PhonePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.PhonePreferences.deserializeBinaryFromReader);
      msg.setPhonePreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhonePreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.PhonePreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.PhonePreferences phone_preferences = 1;
 * @return {?proto.api.commons.org.PhonePreferences}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.prototype.getPhonePreferences = function() {
  return /** @type{?proto.api.commons.org.PhonePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.PhonePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.PhonePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.prototype.setPhonePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.prototype.clearPhonePreferences = function() {
  return this.setPhonePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetPhonePreferencesResponse.prototype.hasPhonePreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    phonePreferences: (f = msg.getPhonePreferences()) && api_commons_org_preferences_pb.PhonePreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.PhonePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.PhonePreferences.deserializeBinaryFromReader);
      msg.setPhonePreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhonePreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.PhonePreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.PhonePreferences phone_preferences = 1;
 * @return {?proto.api.commons.org.PhonePreferences}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.getPhonePreferences = function() {
  return /** @type{?proto.api.commons.org.PhonePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.PhonePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.PhonePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.setPhonePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.clearPhonePreferences = function() {
  return this.setPhonePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.hasPhonePreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdatePhonePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.PhonePreferencesDB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.PhonePreferencesDB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    phonePreferencesJson: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.PhonePreferencesDB}
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.PhonePreferencesDB;
  return proto.api.v1alpha1.org.organizations.PhonePreferencesDB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.PhonePreferencesDB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.PhonePreferencesDB}
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonePreferencesJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.PhonePreferencesDB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.PhonePreferencesDB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhonePreferencesJson();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.PhonePreferencesDB} returns this
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone_preferences_json = 10;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.prototype.getPhonePreferencesJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.PhonePreferencesDB} returns this
 */
proto.api.v1alpha1.org.organizations.PhonePreferencesDB.prototype.setPhonePreferencesJson = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    compliancePreferences: (f = msg.getCompliancePreferences()) && api_commons_org_preferences_pb.CompliancePreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.CompliancePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.CompliancePreferences.deserializeBinaryFromReader);
      msg.setCompliancePreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompliancePreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.CompliancePreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.CompliancePreferences compliance_preferences = 1;
 * @return {?proto.api.commons.org.CompliancePreferences}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.prototype.getCompliancePreferences = function() {
  return /** @type{?proto.api.commons.org.CompliancePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.CompliancePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.CompliancePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.prototype.setCompliancePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.prototype.clearCompliancePreferences = function() {
  return this.setCompliancePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetCompliancePreferencesResponse.prototype.hasCompliancePreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    compliancePreferences: (f = msg.getCompliancePreferences()) && api_commons_org_preferences_pb.CompliancePreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.CompliancePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.CompliancePreferences.deserializeBinaryFromReader);
      msg.setCompliancePreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompliancePreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.CompliancePreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.CompliancePreferences compliance_preferences = 1;
 * @return {?proto.api.commons.org.CompliancePreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.getCompliancePreferences = function() {
  return /** @type{?proto.api.commons.org.CompliancePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.CompliancePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.CompliancePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.setCompliancePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.clearCompliancePreferences = function() {
  return this.setCompliancePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.hasCompliancePreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateCompliancePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    broadcastPreferences: (f = msg.getBroadcastPreferences()) && api_commons_org_preferences_pb.BroadcastPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.BroadcastPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.BroadcastPreferences.deserializeBinaryFromReader);
      msg.setBroadcastPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBroadcastPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.BroadcastPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.BroadcastPreferences broadcast_preferences = 1;
 * @return {?proto.api.commons.org.BroadcastPreferences}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.prototype.getBroadcastPreferences = function() {
  return /** @type{?proto.api.commons.org.BroadcastPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BroadcastPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.BroadcastPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.prototype.setBroadcastPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.prototype.clearBroadcastPreferences = function() {
  return this.setBroadcastPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetBroadcastPreferencesResponse.prototype.hasBroadcastPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    broadcastPreferences: (f = msg.getBroadcastPreferences()) && api_commons_org_preferences_pb.BroadcastPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.BroadcastPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.BroadcastPreferences.deserializeBinaryFromReader);
      msg.setBroadcastPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBroadcastPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.BroadcastPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.BroadcastPreferences broadcast_preferences = 1;
 * @return {?proto.api.commons.org.BroadcastPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.getBroadcastPreferences = function() {
  return /** @type{?proto.api.commons.org.BroadcastPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BroadcastPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.BroadcastPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.setBroadcastPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.clearBroadcastPreferences = function() {
  return this.setBroadcastPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.hasBroadcastPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBroadcastPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedulePreferences: (f = msg.getSchedulePreferences()) && api_commons_org_preferences_pb.SchedulePreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.SchedulePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.SchedulePreferences.deserializeBinaryFromReader);
      msg.setSchedulePreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedulePreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.SchedulePreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.SchedulePreferences schedule_preferences = 1;
 * @return {?proto.api.commons.org.SchedulePreferences}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.prototype.getSchedulePreferences = function() {
  return /** @type{?proto.api.commons.org.SchedulePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.SchedulePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.SchedulePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.prototype.setSchedulePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.prototype.clearSchedulePreferences = function() {
  return this.setSchedulePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetSchedulePreferencesResponse.prototype.hasSchedulePreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedulePreferences: (f = msg.getSchedulePreferences()) && api_commons_org_preferences_pb.SchedulePreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.SchedulePreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.SchedulePreferences.deserializeBinaryFromReader);
      msg.setSchedulePreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedulePreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.SchedulePreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.SchedulePreferences schedule_preferences = 1;
 * @return {?proto.api.commons.org.SchedulePreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.getSchedulePreferences = function() {
  return /** @type{?proto.api.commons.org.SchedulePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.SchedulePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.SchedulePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.setSchedulePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.clearSchedulePreferences = function() {
  return this.setSchedulePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.hasSchedulePreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateSchedulePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailSmsPreferences: (f = msg.getEmailSmsPreferences()) && api_commons_org_preferences_pb.EmailSmsPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.EmailSmsPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.EmailSmsPreferences.deserializeBinaryFromReader);
      msg.setEmailSmsPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailSmsPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.EmailSmsPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.EmailSmsPreferences email_sms_preferences = 1;
 * @return {?proto.api.commons.org.EmailSmsPreferences}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.prototype.getEmailSmsPreferences = function() {
  return /** @type{?proto.api.commons.org.EmailSmsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.EmailSmsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.EmailSmsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.prototype.setEmailSmsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.prototype.clearEmailSmsPreferences = function() {
  return this.setEmailSmsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetEmailSmsPreferencesResponse.prototype.hasEmailSmsPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailSmsPreferences: (f = msg.getEmailSmsPreferences()) && api_commons_org_preferences_pb.EmailSmsPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.EmailSmsPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.EmailSmsPreferences.deserializeBinaryFromReader);
      msg.setEmailSmsPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailSmsPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.EmailSmsPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.EmailSmsPreferences email_sms_preferences = 1;
 * @return {?proto.api.commons.org.EmailSmsPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.getEmailSmsPreferences = function() {
  return /** @type{?proto.api.commons.org.EmailSmsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.EmailSmsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.EmailSmsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.setEmailSmsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.clearEmailSmsPreferences = function() {
  return this.setEmailSmsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.hasEmailSmsPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateEmailSmsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessPreferences: (f = msg.getBusinessPreferences()) && api_commons_org_preferences_pb.BusinessPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.BusinessPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.BusinessPreferences.deserializeBinaryFromReader);
      msg.setBusinessPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.BusinessPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.BusinessPreferences business_preferences = 1;
 * @return {?proto.api.commons.org.BusinessPreferences}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.prototype.getBusinessPreferences = function() {
  return /** @type{?proto.api.commons.org.BusinessPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.BusinessPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.prototype.setBusinessPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.prototype.clearBusinessPreferences = function() {
  return this.setBusinessPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetBusinessPreferencesResponse.prototype.hasBusinessPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessPreferences: (f = msg.getBusinessPreferences()) && api_commons_org_preferences_pb.BusinessPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.BusinessPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.BusinessPreferences.deserializeBinaryFromReader);
      msg.setBusinessPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.BusinessPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.BusinessPreferences business_preferences = 1;
 * @return {?proto.api.commons.org.BusinessPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.getBusinessPreferences = function() {
  return /** @type{?proto.api.commons.org.BusinessPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.BusinessPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.setBusinessPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.clearBusinessPreferences = function() {
  return this.setBusinessPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.hasBusinessPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    businessPreferences: (f = msg.getBusinessPreferences()) && api_commons_org_preferences_pb.BusinessPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new api_commons_org_preferences_pb.BusinessPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.BusinessPreferences.deserializeBinaryFromReader);
      msg.setBusinessPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessPreferences();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_preferences_pb.BusinessPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.BusinessPreferences business_preferences = 2;
 * @return {?proto.api.commons.org.BusinessPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.getBusinessPreferences = function() {
  return /** @type{?proto.api.commons.org.BusinessPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessPreferences, 2));
};


/**
 * @param {?proto.api.commons.org.BusinessPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.setBusinessPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.clearBusinessPreferences = function() {
  return this.setBusinessPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.hasBusinessPreferences = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAdminBusinessPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scorecardsPreferences: (f = msg.getScorecardsPreferences()) && api_commons_org_preferences_pb.ScorecardsPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.ScorecardsPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.ScorecardsPreferences.deserializeBinaryFromReader);
      msg.setScorecardsPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScorecardsPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.ScorecardsPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.ScorecardsPreferences scorecards_preferences = 1;
 * @return {?proto.api.commons.org.ScorecardsPreferences}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.prototype.getScorecardsPreferences = function() {
  return /** @type{?proto.api.commons.org.ScorecardsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.ScorecardsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.ScorecardsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.prototype.setScorecardsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.prototype.clearScorecardsPreferences = function() {
  return this.setScorecardsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetScorecardsPreferencesResponse.prototype.hasScorecardsPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scorecardsPreferences: (f = msg.getScorecardsPreferences()) && api_commons_org_preferences_pb.ScorecardsPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new api_commons_org_preferences_pb.ScorecardsPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.ScorecardsPreferences.deserializeBinaryFromReader);
      msg.setScorecardsPreferences(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScorecardsPreferences();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_preferences_pb.ScorecardsPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.ScorecardsPreferences scorecards_preferences = 2;
 * @return {?proto.api.commons.org.ScorecardsPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.getScorecardsPreferences = function() {
  return /** @type{?proto.api.commons.org.ScorecardsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.ScorecardsPreferences, 2));
};


/**
 * @param {?proto.api.commons.org.ScorecardsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.setScorecardsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.clearScorecardsPreferences = function() {
  return this.setScorecardsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.hasScorecardsPreferences = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateScorecardsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    voiceAnalyticsPreferences: (f = msg.getVoiceAnalyticsPreferences()) && api_commons_org_preferences_pb.VoiceAnalyticsPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.VoiceAnalyticsPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.VoiceAnalyticsPreferences.deserializeBinaryFromReader);
      msg.setVoiceAnalyticsPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceAnalyticsPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.VoiceAnalyticsPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.VoiceAnalyticsPreferences voice_analytics_preferences = 1;
 * @return {?proto.api.commons.org.VoiceAnalyticsPreferences}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.prototype.getVoiceAnalyticsPreferences = function() {
  return /** @type{?proto.api.commons.org.VoiceAnalyticsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.VoiceAnalyticsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.VoiceAnalyticsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.prototype.setVoiceAnalyticsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.prototype.clearVoiceAnalyticsPreferences = function() {
  return this.setVoiceAnalyticsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetVoiceAnalyticsPreferencesResponse.prototype.hasVoiceAnalyticsPreferences = function() {
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
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    voiceAnalyticsPreferencesList: jspb.Message.toObjectList(msg.getVoiceAnalyticsPreferencesList(),
    api_commons_org_preferences_pb.VoiceAnalyticsPreferences.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.VoiceAnalyticsPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.VoiceAnalyticsPreferences.deserializeBinaryFromReader);
      msg.addVoiceAnalyticsPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceAnalyticsPreferencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_org_preferences_pb.VoiceAnalyticsPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.VoiceAnalyticsPreferences voice_analytics_preferences = 1;
 * @return {!Array<!proto.api.commons.org.VoiceAnalyticsPreferences>}
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.prototype.getVoiceAnalyticsPreferencesList = function() {
  return /** @type{!Array<!proto.api.commons.org.VoiceAnalyticsPreferences>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_preferences_pb.VoiceAnalyticsPreferences, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.VoiceAnalyticsPreferences>} value
 * @return {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.prototype.setVoiceAnalyticsPreferencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.VoiceAnalyticsPreferences=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences}
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.prototype.addVoiceAnalyticsPreferences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.VoiceAnalyticsPreferences, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.ListVoiceAnalyticsPreferencesResponse.prototype.clearVoiceAnalyticsPreferencesList = function() {
  return this.setVoiceAnalyticsPreferencesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    voiceAnalyticsPreferences: (f = msg.getVoiceAnalyticsPreferences()) && api_commons_org_preferences_pb.VoiceAnalyticsPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.VoiceAnalyticsPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.VoiceAnalyticsPreferences.deserializeBinaryFromReader);
      msg.setVoiceAnalyticsPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceAnalyticsPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.VoiceAnalyticsPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.VoiceAnalyticsPreferences voice_analytics_preferences = 1;
 * @return {?proto.api.commons.org.VoiceAnalyticsPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.getVoiceAnalyticsPreferences = function() {
  return /** @type{?proto.api.commons.org.VoiceAnalyticsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.VoiceAnalyticsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.VoiceAnalyticsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.setVoiceAnalyticsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.clearVoiceAnalyticsPreferences = function() {
  return this.setVoiceAnalyticsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.hasVoiceAnalyticsPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    endOfDayPreferences: (f = msg.getEndOfDayPreferences()) && api_commons_org_preferences_pb.EndOfDayPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.EndOfDayPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.EndOfDayPreferences.deserializeBinaryFromReader);
      msg.setEndOfDayPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndOfDayPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.EndOfDayPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.EndOfDayPreferences end_of_day_preferences = 1;
 * @return {?proto.api.commons.org.EndOfDayPreferences}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.prototype.getEndOfDayPreferences = function() {
  return /** @type{?proto.api.commons.org.EndOfDayPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.EndOfDayPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.EndOfDayPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.prototype.setEndOfDayPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.prototype.clearEndOfDayPreferences = function() {
  return this.setEndOfDayPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetEndOfDayPreferencesResponse.prototype.hasEndOfDayPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    endOfDayPreferences: (f = msg.getEndOfDayPreferences()) && api_commons_org_preferences_pb.EndOfDayPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.EndOfDayPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.EndOfDayPreferences.deserializeBinaryFromReader);
      msg.setEndOfDayPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndOfDayPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.EndOfDayPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.EndOfDayPreferences end_of_day_preferences = 1;
 * @return {?proto.api.commons.org.EndOfDayPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.getEndOfDayPreferences = function() {
  return /** @type{?proto.api.commons.org.EndOfDayPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.EndOfDayPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.EndOfDayPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.setEndOfDayPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.clearEndOfDayPreferences = function() {
  return this.setEndOfDayPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.hasEndOfDayPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateEndOfDayPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterPreferences: (f = msg.getFilterPreferences()) && api_commons_org_preferences_pb.FilterPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.FilterPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.FilterPreferences.deserializeBinaryFromReader);
      msg.setFilterPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.FilterPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.FilterPreferences filter_preferences = 1;
 * @return {?proto.api.commons.org.FilterPreferences}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.prototype.getFilterPreferences = function() {
  return /** @type{?proto.api.commons.org.FilterPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.FilterPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.FilterPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.prototype.setFilterPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.prototype.clearFilterPreferences = function() {
  return this.setFilterPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetFilterPreferencesResponse.prototype.hasFilterPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterPreferences: (f = msg.getFilterPreferences()) && api_commons_org_preferences_pb.FilterPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.FilterPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.FilterPreferences.deserializeBinaryFromReader);
      msg.setFilterPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.FilterPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.FilterPreferences filter_preferences = 1;
 * @return {?proto.api.commons.org.FilterPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.getFilterPreferences = function() {
  return /** @type{?proto.api.commons.org.FilterPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.FilterPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.FilterPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.setFilterPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.clearFilterPreferences = function() {
  return this.setFilterPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.hasFilterPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateFilterPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordingPreferences: (f = msg.getRecordingPreferences()) && api_commons_org_preferences_pb.RecordingPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.RecordingPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.RecordingPreferences.deserializeBinaryFromReader);
      msg.setRecordingPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordingPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.RecordingPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.RecordingPreferences recording_preferences = 1;
 * @return {?proto.api.commons.org.RecordingPreferences}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.prototype.getRecordingPreferences = function() {
  return /** @type{?proto.api.commons.org.RecordingPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.RecordingPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.RecordingPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.prototype.setRecordingPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.prototype.clearRecordingPreferences = function() {
  return this.setRecordingPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetRecordingPreferencesResponse.prototype.hasRecordingPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordingPreferences: (f = msg.getRecordingPreferences()) && api_commons_org_preferences_pb.RecordingPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.RecordingPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.RecordingPreferences.deserializeBinaryFromReader);
      msg.setRecordingPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordingPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.RecordingPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.RecordingPreferences recording_preferences = 1;
 * @return {?proto.api.commons.org.RecordingPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.getRecordingPreferences = function() {
  return /** @type{?proto.api.commons.org.RecordingPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.RecordingPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.RecordingPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.setRecordingPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.clearRecordingPreferences = function() {
  return this.setRecordingPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.hasRecordingPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateRecordingPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    adminClientPreferences: (f = msg.getAdminClientPreferences()) && api_commons_org_preferences_pb.AdminClientPreferences.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.AdminClientPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.AdminClientPreferences.deserializeBinaryFromReader);
      msg.setAdminClientPreferences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdminClientPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.AdminClientPreferences.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.AdminClientPreferences admin_client_preferences = 1;
 * @return {?proto.api.commons.org.AdminClientPreferences}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.prototype.getAdminClientPreferences = function() {
  return /** @type{?proto.api.commons.org.AdminClientPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AdminClientPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AdminClientPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.prototype.setAdminClientPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.prototype.clearAdminClientPreferences = function() {
  return this.setAdminClientPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetAdminClientPreferencesResponse.prototype.hasAdminClientPreferences = function() {
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
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    adminClientPreferences: (f = msg.getAdminClientPreferences()) && api_commons_org_preferences_pb.AdminClientPreferences.toObject(includeInstance, f),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest;
  return proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new api_commons_org_preferences_pb.AdminClientPreferences;
      reader.readMessage(value,api_commons_org_preferences_pb.AdminClientPreferences.deserializeBinaryFromReader);
      msg.setAdminClientPreferences(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAdminClientPreferences();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_preferences_pb.AdminClientPreferences.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.AdminClientPreferences admin_client_preferences = 2;
 * @return {?proto.api.commons.org.AdminClientPreferences}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.getAdminClientPreferences = function() {
  return /** @type{?proto.api.commons.org.AdminClientPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AdminClientPreferences, 2));
};


/**
 * @param {?proto.api.commons.org.AdminClientPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.setAdminClientPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.clearAdminClientPreferences = function() {
  return this.setAdminClientPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.hasAdminClientPreferences = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse;
  return proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateAdminClientPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest}
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest;
  return proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest}
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse}
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse;
  return proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse}
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.AcceptLinkbackRecordingTermsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest}
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest;
  return proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest}
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
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
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest} returns this
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse}
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse;
  return proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse}
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.LinkbackUpdateBroadcastTemplatesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest}
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest;
  return proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest}
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse}
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse;
  return proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse}
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.RecordEmailUnsubscribeAcknowledgementResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest}
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest;
  return proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest}
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse}
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse;
  return proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse}
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ClearEmailUnsubscribeAcknowledgementResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHours: (f = msg.getBusinessHours()) && api_commons_org_preferences_pb.BusinessHours.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.BusinessHours;
      reader.readMessage(value,api_commons_org_preferences_pb.BusinessHours.deserializeBinaryFromReader);
      msg.setBusinessHours(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHours();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.BusinessHours.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.BusinessHours business_hours = 1;
 * @return {?proto.api.commons.org.BusinessHours}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.prototype.getBusinessHours = function() {
  return /** @type{?proto.api.commons.org.BusinessHours} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessHours, 1));
};


/**
 * @param {?proto.api.commons.org.BusinessHours|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest} returns this
*/
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.prototype.setBusinessHours = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.prototype.clearBusinessHours = function() {
  return this.setBusinessHours(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursRequest.prototype.hasBusinessHours = function() {
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
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string business_hours_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse} returns this
 */
proto.api.v1alpha1.org.organizations.CreateBusinessHoursResponse.prototype.setBusinessHoursId = function(value) {
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
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHours: (f = msg.getBusinessHours()) && api_commons_org_preferences_pb.BusinessHours.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.BusinessHours;
      reader.readMessage(value,api_commons_org_preferences_pb.BusinessHours.deserializeBinaryFromReader);
      msg.setBusinessHours(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHours();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.BusinessHours.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.BusinessHours business_hours = 1;
 * @return {?proto.api.commons.org.BusinessHours}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.prototype.getBusinessHours = function() {
  return /** @type{?proto.api.commons.org.BusinessHours} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessHours, 1));
};


/**
 * @param {?proto.api.commons.org.BusinessHours|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.prototype.setBusinessHours = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.prototype.clearBusinessHours = function() {
  return this.setBusinessHours(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursRequest.prototype.hasBusinessHours = function() {
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
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursList: jspb.Message.toObjectList(msg.getBusinessHoursList(),
    api_commons_org_preferences_pb.BusinessHours.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new api_commons_org_preferences_pb.BusinessHours;
      reader.readMessage(value,api_commons_org_preferences_pb.BusinessHours.deserializeBinaryFromReader);
      msg.addBusinessHours(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_org_preferences_pb.BusinessHours.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.org.BusinessHours business_hours = 2;
 * @return {!Array<!proto.api.commons.org.BusinessHours>}
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.prototype.getBusinessHoursList = function() {
  return /** @type{!Array<!proto.api.commons.org.BusinessHours>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_preferences_pb.BusinessHours, 2));
};


/**
 * @param {!Array<!proto.api.commons.org.BusinessHours>} value
 * @return {!proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse} returns this
*/
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.prototype.setBusinessHoursList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.org.BusinessHours=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.BusinessHours}
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.prototype.addBusinessHours = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.org.BusinessHours, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse} returns this
 */
proto.api.v1alpha1.org.organizations.ListBusinessHoursResponse.prototype.clearBusinessHoursList = function() {
  return this.setBusinessHoursList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string business_hours_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursRequest.prototype.setBusinessHoursId = function(value) {
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
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHours: (f = msg.getBusinessHours()) && api_commons_org_preferences_pb.BusinessHours.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_org_preferences_pb.BusinessHours;
      reader.readMessage(value,api_commons_org_preferences_pb.BusinessHours.deserializeBinaryFromReader);
      msg.setBusinessHours(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHours();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.BusinessHours.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.org.BusinessHours business_hours = 1;
 * @return {?proto.api.commons.org.BusinessHours}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.prototype.getBusinessHours = function() {
  return /** @type{?proto.api.commons.org.BusinessHours} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessHours, 1));
};


/**
 * @param {?proto.api.commons.org.BusinessHours|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse} returns this
*/
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.prototype.setBusinessHours = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse} returns this
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.prototype.clearBusinessHours = function() {
  return this.setBusinessHours(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.GetBusinessHoursResponse.prototype.hasBusinessHours = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dayIntervalsList: jspb.Message.toObjectList(msg.getDayIntervalsList(),
    api_commons_org_preferences_pb.DayInterval.toObject, includeInstance),
    timezone: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new api_commons_org_preferences_pb.DayInterval;
      reader.readMessage(value,api_commons_org_preferences_pb.DayInterval.deserializeBinaryFromReader);
      msg.addDayIntervals(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.TimeZone} */ (reader.readEnum());
      msg.setTimezone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursName();
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
  f = message.getDayIntervalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      api_commons_org_preferences_pb.DayInterval.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string business_hours_name = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.getBusinessHoursName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.setBusinessHoursName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated api.commons.org.DayInterval day_intervals = 3;
 * @return {!Array<!proto.api.commons.org.DayInterval>}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.getDayIntervalsList = function() {
  return /** @type{!Array<!proto.api.commons.org.DayInterval>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_preferences_pb.DayInterval, 3));
};


/**
 * @param {!Array<!proto.api.commons.org.DayInterval>} value
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest} returns this
*/
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.setDayIntervalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.org.DayInterval=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.DayInterval}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.addDayIntervals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.org.DayInterval, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.clearDayIntervalsList = function() {
  return this.setDayIntervalsList([]);
};


/**
 * optional api.commons.TimeZone timezone = 4;
 * @return {!proto.api.commons.TimeZone}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.getTimezone = function() {
  return /** @type {!proto.api.commons.TimeZone} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.TimeZone} value
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursRequest.prototype.setTimezone = function(value) {
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
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string business_hours_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse} returns this
 */
proto.api.v1alpha1.org.organizations.SetBusinessHoursResponse.prototype.setBusinessHoursId = function(value) {
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
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dayInterval: (f = msg.getDayInterval()) && api_commons_org_preferences_pb.DayInterval.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    case 2:
      var value = new api_commons_org_preferences_pb.DayInterval;
      reader.readMessage(value,api_commons_org_preferences_pb.DayInterval.deserializeBinaryFromReader);
      msg.setDayInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDayInterval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_preferences_pb.DayInterval.serializeBinaryToWriter
    );
  }
};


/**
 * optional string business_hours_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.prototype.setBusinessHoursId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.DayInterval day_interval = 2;
 * @return {?proto.api.commons.org.DayInterval}
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.prototype.getDayInterval = function() {
  return /** @type{?proto.api.commons.org.DayInterval} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DayInterval, 2));
};


/**
 * @param {?proto.api.commons.org.DayInterval|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest} returns this
*/
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.prototype.setDayInterval = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.prototype.clearDayInterval = function() {
  return this.setDayInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursRequest.prototype.hasDayInterval = function() {
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
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.AddIntervalToBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dayInterval: (f = msg.getDayInterval()) && api_commons_org_preferences_pb.DayInterval.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    case 2:
      var value = new api_commons_org_preferences_pb.DayInterval;
      reader.readMessage(value,api_commons_org_preferences_pb.DayInterval.deserializeBinaryFromReader);
      msg.setDayInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDayInterval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_org_preferences_pb.DayInterval.serializeBinaryToWriter
    );
  }
};


/**
 * optional string business_hours_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.prototype.setBusinessHoursId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.DayInterval day_interval = 2;
 * @return {?proto.api.commons.org.DayInterval}
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.prototype.getDayInterval = function() {
  return /** @type{?proto.api.commons.org.DayInterval} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DayInterval, 2));
};


/**
 * @param {?proto.api.commons.org.DayInterval|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest} returns this
*/
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.prototype.setDayInterval = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.prototype.clearDayInterval = function() {
  return this.setDayInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursRequest.prototype.hasDayInterval = function() {
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
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.RemoveIntervalFromBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    businessHoursName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest;
  return proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.TimeZone} */ (reader.readEnum());
      msg.setTimezone(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessHoursName();
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
  f = message.getTimezone();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string business_hours_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.setBusinessHoursId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_hours_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.getBusinessHoursName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.setBusinessHoursName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.TimeZone timezone = 4;
 * @return {!proto.api.commons.TimeZone}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.getTimezone = function() {
  return /** @type {!proto.api.commons.TimeZone} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.TimeZone} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} returns this
*/
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest} returns this
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse;
  return proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse}
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.UpdateBusinessHoursInfoResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string business_hours_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursRequest.prototype.setBusinessHoursId = function(value) {
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
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.DeleteBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessHoursId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest;
  return proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest}
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessHoursId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessHoursId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string business_hours_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.prototype.getBusinessHoursId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest} returns this
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursRequest.prototype.setBusinessHoursId = function(value) {
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
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    withinRange: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse;
  return proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse}
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithinRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithinRange();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool within_range = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.prototype.getWithinRange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse} returns this
 */
proto.api.v1alpha1.org.organizations.EvaluateBusinessHoursResponse.prototype.setWithinRange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.api.v1alpha1.org.organizations);
