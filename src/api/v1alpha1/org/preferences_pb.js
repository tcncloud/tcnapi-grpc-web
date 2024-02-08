// source: api/v1alpha1/org/preferences.proto
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
var globalThis = require("../../../global.js");
var proto = globalThis.proto;
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_commons_org_preferences_pb = require('../../../api/commons/org/preferences_pb.js');
goog.object.extend(proto, api_commons_org_preferences_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetAdminClientPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetAdminClientPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetAgentPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetAgentPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetBroadcastPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetBroadcastPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetBusinessPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetBusinessPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetCompliancePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetCompliancePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetContactPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetContactPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetFilterPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetFilterPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetOrganizationPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetOrganizationPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetPhonePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetPhonePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetRecordingPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetRecordingPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetSchedulePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetSchedulePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetScorecardsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetScorecardsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetWebhookPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.GetWebhookPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.PhonePreferencesDB', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAgentPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAgentPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateContactPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateContactPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateFilterPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateFilterPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdatePhonePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdatePhonePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetOrganizationPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetOrganizationPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetOrganizationPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetOrganizationPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetAgentPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetAgentPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetAgentPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetAgentPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetAgentPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetAgentPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetAgentPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetAgentPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAgentPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateAgentPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAgentPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateAgentPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetContactPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetContactPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetContactPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetContactPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetContactPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetContactPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetContactPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetContactPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateContactPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateContactPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateContactPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateContactPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateContactPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateContactPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateContactPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetWebhookPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetWebhookPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetWebhookPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetWebhookPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetWebhookPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetWebhookPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetWebhookPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetWebhookPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetPhonePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetPhonePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetPhonePreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetPhonePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetPhonePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetPhonePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetPhonePreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetPhonePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdatePhonePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdatePhonePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdatePhonePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdatePhonePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.PhonePreferencesDB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.PhonePreferencesDB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.PhonePreferencesDB.displayName = 'proto.api.v1alpha1.org.PhonePreferencesDB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetCompliancePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetCompliancePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetCompliancePreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetCompliancePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetCompliancePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetCompliancePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetCompliancePreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetCompliancePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetBroadcastPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetBroadcastPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetBroadcastPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetBroadcastPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetSchedulePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetSchedulePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetSchedulePreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetSchedulePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetSchedulePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetSchedulePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetSchedulePreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetSchedulePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetBusinessPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetBusinessPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetBusinessPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetBusinessPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetBusinessPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetBusinessPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetBusinessPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetBusinessPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetScorecardsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetScorecardsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetScorecardsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetScorecardsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetFilterPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetFilterPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetFilterPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetFilterPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetFilterPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetFilterPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetFilterPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetFilterPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateFilterPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateFilterPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateFilterPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateFilterPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetRecordingPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetRecordingPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetRecordingPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetRecordingPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetRecordingPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetRecordingPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetRecordingPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetRecordingPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetAdminClientPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.displayName = 'proto.api.v1alpha1.org.GetAdminClientPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.GetAdminClientPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.displayName = 'proto.api.v1alpha1.org.GetAdminClientPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.displayName = 'proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.displayName = 'proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.displayName = 'proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.displayName = 'proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.displayName = 'proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.displayName = 'proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.displayName = 'proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.displayName = 'proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.displayName = 'proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.displayName = 'proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse';
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
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetOrganizationPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetOrganizationPreferencesRequest}
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetOrganizationPreferencesRequest;
  return proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetOrganizationPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetOrganizationPreferencesRequest}
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetOrganizationPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetOrganizationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetOrganizationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetOrganizationPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetOrganizationPreferencesResponse}
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetOrganizationPreferencesResponse;
  return proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetOrganizationPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetOrganizationPreferencesResponse}
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetOrganizationPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.prototype.getOrganizationPreferences = function() {
  return /** @type{?proto.api.commons.org.OrganizationPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.OrganizationPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.OrganizationPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetOrganizationPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.prototype.setOrganizationPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetOrganizationPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.prototype.clearOrganizationPreferences = function() {
  return this.setOrganizationPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetOrganizationPreferencesResponse.prototype.hasOrganizationPreferences = function() {
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
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.getOrganizationPreferences = function() {
  return /** @type{?proto.api.commons.org.OrganizationPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.OrganizationPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.OrganizationPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.setOrganizationPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.clearOrganizationPreferences = function() {
  return this.setOrganizationPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.hasOrganizationPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateOrganizationPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAgentPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetAgentPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetAgentPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAgentPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetAgentPreferencesRequest}
 */
proto.api.v1alpha1.org.GetAgentPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetAgentPreferencesRequest;
  return proto.api.v1alpha1.org.GetAgentPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetAgentPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetAgentPreferencesRequest}
 */
proto.api.v1alpha1.org.GetAgentPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetAgentPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetAgentPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetAgentPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAgentPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAgentPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetAgentPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetAgentPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetAgentPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetAgentPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetAgentPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetAgentPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetAgentPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetAgentPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAgentPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetAgentPreferencesResponse}
 */
proto.api.v1alpha1.org.GetAgentPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetAgentPreferencesResponse;
  return proto.api.v1alpha1.org.GetAgentPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetAgentPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetAgentPreferencesResponse}
 */
proto.api.v1alpha1.org.GetAgentPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetAgentPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetAgentPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetAgentPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAgentPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAgentPreferencesResponse.prototype.getAgentPreferences = function() {
  return /** @type{?proto.api.commons.org.AgentPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AgentPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AgentPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetAgentPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetAgentPreferencesResponse.prototype.setAgentPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetAgentPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetAgentPreferencesResponse.prototype.clearAgentPreferences = function() {
  return this.setAgentPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetAgentPreferencesResponse.prototype.hasAgentPreferences = function() {
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
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAgentPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.getAgentPreferences = function() {
  return /** @type{?proto.api.commons.org.AgentPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AgentPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AgentPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.setAgentPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.clearAgentPreferences = function() {
  return this.setAgentPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.hasAgentPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAgentPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAgentPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAgentPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAgentPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAgentPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAgentPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAgentPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAgentPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetContactPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetContactPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetContactPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetContactPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetContactPreferencesRequest}
 */
proto.api.v1alpha1.org.GetContactPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetContactPreferencesRequest;
  return proto.api.v1alpha1.org.GetContactPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetContactPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetContactPreferencesRequest}
 */
proto.api.v1alpha1.org.GetContactPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetContactPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetContactPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetContactPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetContactPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetContactPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetContactPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetContactPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetContactPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetContactPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetContactPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetContactPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetContactPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetContactPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetContactPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetContactPreferencesResponse}
 */
proto.api.v1alpha1.org.GetContactPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetContactPreferencesResponse;
  return proto.api.v1alpha1.org.GetContactPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetContactPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetContactPreferencesResponse}
 */
proto.api.v1alpha1.org.GetContactPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetContactPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetContactPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetContactPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetContactPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetContactPreferencesResponse.prototype.getContactPreferences = function() {
  return /** @type{?proto.api.commons.org.ContactPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.ContactPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.ContactPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetContactPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetContactPreferencesResponse.prototype.setContactPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetContactPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetContactPreferencesResponse.prototype.clearContactPreferences = function() {
  return this.setContactPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetContactPreferencesResponse.prototype.hasContactPreferences = function() {
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
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateContactPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateContactPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateContactPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateContactPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.getContactPreferences = function() {
  return /** @type{?proto.api.commons.org.ContactPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.ContactPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.ContactPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.setContactPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.clearContactPreferences = function() {
  return this.setContactPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.hasContactPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateContactPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateContactPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateContactPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateContactPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateContactPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateContactPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateContactPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateContactPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateContactPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateContactPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateContactPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateContactPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateContactPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateContactPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateContactPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateContactPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateContactPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest}
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest;
  return proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest}
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse}
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse;
  return proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse}
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.prototype.getAuthenticationPreferences = function() {
  return /** @type{?proto.api.commons.org.AuthenticationPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AuthenticationPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AuthenticationPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.prototype.setAuthenticationPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.prototype.clearAuthenticationPreferences = function() {
  return this.setAuthenticationPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetAuthenticationPreferencesResponse.prototype.hasAuthenticationPreferences = function() {
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
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authenticationPreferences: (f = msg.getAuthenticationPreferences()) && api_commons_org_preferences_pb.AuthenticationPreferences.toObject(includeInstance, f),
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
 * @return {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthenticationPreferences();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_org_preferences_pb.AuthenticationPreferences.serializeBinaryToWriter
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
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.getAuthenticationPreferences = function() {
  return /** @type{?proto.api.commons.org.AuthenticationPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AuthenticationPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AuthenticationPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.setAuthenticationPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.clearAuthenticationPreferences = function() {
  return this.setAuthenticationPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.hasAuthenticationPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAuthenticationPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetWebhookPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetWebhookPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetWebhookPreferencesRequest}
 */
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetWebhookPreferencesRequest;
  return proto.api.v1alpha1.org.GetWebhookPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetWebhookPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetWebhookPreferencesRequest}
 */
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetWebhookPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetWebhookPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetWebhookPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetWebhookPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetWebhookPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetWebhookPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetWebhookPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetWebhookPreferencesResponse}
 */
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetWebhookPreferencesResponse;
  return proto.api.v1alpha1.org.GetWebhookPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetWebhookPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetWebhookPreferencesResponse}
 */
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetWebhookPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetWebhookPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.prototype.getWebhookPreferences = function() {
  return /** @type{?proto.api.commons.org.WebhookPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.WebhookPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.WebhookPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetWebhookPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.prototype.setWebhookPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetWebhookPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.prototype.clearWebhookPreferences = function() {
  return this.setWebhookPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetWebhookPreferencesResponse.prototype.hasWebhookPreferences = function() {
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
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.getWebhookPreferences = function() {
  return /** @type{?proto.api.commons.org.WebhookPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.WebhookPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.WebhookPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.setWebhookPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.clearWebhookPreferences = function() {
  return this.setWebhookPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.hasWebhookPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateWebhookPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest}
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest;
  return proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest}
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse}
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse;
  return proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse}
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.prototype.getDashboardPreferences = function() {
  return /** @type{?proto.api.commons.org.DashboardPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DashboardPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.DashboardPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.prototype.setDashboardPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.prototype.clearDashboardPreferences = function() {
  return this.setDashboardPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetDashboardGeneralPreferencesResponse.prototype.hasDashboardPreferences = function() {
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
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.getDashboardPreferences = function() {
  return /** @type{?proto.api.commons.org.DashboardPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DashboardPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.DashboardPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.setDashboardPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.clearDashboardPreferences = function() {
  return this.setDashboardPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.hasDashboardPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest}
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest;
  return proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest}
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse}
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse;
  return proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse}
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.prototype.getDashboardQueuePreferences = function() {
  return /** @type{?proto.api.commons.org.DashboardQueuePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DashboardQueuePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.DashboardQueuePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.prototype.setDashboardQueuePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.prototype.clearDashboardQueuePreferences = function() {
  return this.setDashboardQueuePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetDashboardQueuePreferencesResponse.prototype.hasDashboardQueuePreferences = function() {
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
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest;
  return proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.getDashboardQueuePreferences = function() {
  return /** @type{?proto.api.commons.org.DashboardQueuePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.DashboardQueuePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.DashboardQueuePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.setDashboardQueuePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.clearDashboardQueuePreferences = function() {
  return this.setDashboardQueuePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.hasDashboardQueuePreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse;
  return proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetPhonePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetPhonePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetPhonePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetPhonePreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetPhonePreferencesRequest}
 */
proto.api.v1alpha1.org.GetPhonePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetPhonePreferencesRequest;
  return proto.api.v1alpha1.org.GetPhonePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetPhonePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetPhonePreferencesRequest}
 */
proto.api.v1alpha1.org.GetPhonePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetPhonePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetPhonePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetPhonePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetPhonePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetPhonePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetPhonePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetPhonePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetPhonePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetPhonePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetPhonePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetPhonePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetPhonePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetPhonePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetPhonePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetPhonePreferencesResponse}
 */
proto.api.v1alpha1.org.GetPhonePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetPhonePreferencesResponse;
  return proto.api.v1alpha1.org.GetPhonePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetPhonePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetPhonePreferencesResponse}
 */
proto.api.v1alpha1.org.GetPhonePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetPhonePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetPhonePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetPhonePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetPhonePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetPhonePreferencesResponse.prototype.getPhonePreferences = function() {
  return /** @type{?proto.api.commons.org.PhonePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.PhonePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.PhonePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetPhonePreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetPhonePreferencesResponse.prototype.setPhonePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetPhonePreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetPhonePreferencesResponse.prototype.clearPhonePreferences = function() {
  return this.setPhonePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetPhonePreferencesResponse.prototype.hasPhonePreferences = function() {
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
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest}
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdatePhonePreferencesRequest;
  return proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest}
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.getPhonePreferences = function() {
  return /** @type{?proto.api.commons.org.PhonePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.PhonePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.PhonePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.setPhonePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.clearPhonePreferences = function() {
  return this.setPhonePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.hasPhonePreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdatePhonePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdatePhonePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdatePhonePreferencesResponse}
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdatePhonePreferencesResponse;
  return proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdatePhonePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdatePhonePreferencesResponse}
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdatePhonePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdatePhonePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.PhonePreferencesDB.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.PhonePreferencesDB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.PhonePreferencesDB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.PhonePreferencesDB.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.PhonePreferencesDB}
 */
proto.api.v1alpha1.org.PhonePreferencesDB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.PhonePreferencesDB;
  return proto.api.v1alpha1.org.PhonePreferencesDB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.PhonePreferencesDB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.PhonePreferencesDB}
 */
proto.api.v1alpha1.org.PhonePreferencesDB.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.PhonePreferencesDB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.PhonePreferencesDB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.PhonePreferencesDB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.PhonePreferencesDB.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.PhonePreferencesDB.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.PhonePreferencesDB} returns this
 */
proto.api.v1alpha1.org.PhonePreferencesDB.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone_preferences_json = 10;
 * @return {string}
 */
proto.api.v1alpha1.org.PhonePreferencesDB.prototype.getPhonePreferencesJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.PhonePreferencesDB} returns this
 */
proto.api.v1alpha1.org.PhonePreferencesDB.prototype.setPhonePreferencesJson = function(value) {
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
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetCompliancePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetCompliancePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetCompliancePreferencesRequest}
 */
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetCompliancePreferencesRequest;
  return proto.api.v1alpha1.org.GetCompliancePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetCompliancePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetCompliancePreferencesRequest}
 */
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetCompliancePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetCompliancePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetCompliancePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetCompliancePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetCompliancePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetCompliancePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetCompliancePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetCompliancePreferencesResponse}
 */
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetCompliancePreferencesResponse;
  return proto.api.v1alpha1.org.GetCompliancePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetCompliancePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetCompliancePreferencesResponse}
 */
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetCompliancePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetCompliancePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.prototype.getCompliancePreferences = function() {
  return /** @type{?proto.api.commons.org.CompliancePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.CompliancePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.CompliancePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetCompliancePreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.prototype.setCompliancePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetCompliancePreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.prototype.clearCompliancePreferences = function() {
  return this.setCompliancePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetCompliancePreferencesResponse.prototype.hasCompliancePreferences = function() {
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
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest;
  return proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.getCompliancePreferences = function() {
  return /** @type{?proto.api.commons.org.CompliancePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.CompliancePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.CompliancePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.setCompliancePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.clearCompliancePreferences = function() {
  return this.setCompliancePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.hasCompliancePreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse;
  return proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateCompliancePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetBroadcastPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetBroadcastPreferencesRequest}
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetBroadcastPreferencesRequest;
  return proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetBroadcastPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetBroadcastPreferencesRequest}
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetBroadcastPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetBroadcastPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetBroadcastPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetBroadcastPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetBroadcastPreferencesResponse}
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetBroadcastPreferencesResponse;
  return proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetBroadcastPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetBroadcastPreferencesResponse}
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetBroadcastPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.prototype.getBroadcastPreferences = function() {
  return /** @type{?proto.api.commons.org.BroadcastPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BroadcastPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.BroadcastPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetBroadcastPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.prototype.setBroadcastPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetBroadcastPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.prototype.clearBroadcastPreferences = function() {
  return this.setBroadcastPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetBroadcastPreferencesResponse.prototype.hasBroadcastPreferences = function() {
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
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.getBroadcastPreferences = function() {
  return /** @type{?proto.api.commons.org.BroadcastPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BroadcastPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.BroadcastPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.setBroadcastPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.clearBroadcastPreferences = function() {
  return this.setBroadcastPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.hasBroadcastPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateBroadcastPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetSchedulePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetSchedulePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetSchedulePreferencesRequest}
 */
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetSchedulePreferencesRequest;
  return proto.api.v1alpha1.org.GetSchedulePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetSchedulePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetSchedulePreferencesRequest}
 */
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetSchedulePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetSchedulePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetSchedulePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetSchedulePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetSchedulePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetSchedulePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetSchedulePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetSchedulePreferencesResponse}
 */
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetSchedulePreferencesResponse;
  return proto.api.v1alpha1.org.GetSchedulePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetSchedulePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetSchedulePreferencesResponse}
 */
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetSchedulePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetSchedulePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.prototype.getSchedulePreferences = function() {
  return /** @type{?proto.api.commons.org.SchedulePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.SchedulePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.SchedulePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetSchedulePreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.prototype.setSchedulePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetSchedulePreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.prototype.clearSchedulePreferences = function() {
  return this.setSchedulePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetSchedulePreferencesResponse.prototype.hasSchedulePreferences = function() {
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
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest;
  return proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.getSchedulePreferences = function() {
  return /** @type{?proto.api.commons.org.SchedulePreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.SchedulePreferences, 1));
};


/**
 * @param {?proto.api.commons.org.SchedulePreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.setSchedulePreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.clearSchedulePreferences = function() {
  return this.setSchedulePreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.hasSchedulePreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse;
  return proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateSchedulePreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest}
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest;
  return proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest}
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse}
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse;
  return proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse}
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.prototype.getEmailSmsPreferences = function() {
  return /** @type{?proto.api.commons.org.EmailSmsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.EmailSmsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.EmailSmsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.prototype.setEmailSmsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.prototype.clearEmailSmsPreferences = function() {
  return this.setEmailSmsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetEmailSmsPreferencesResponse.prototype.hasEmailSmsPreferences = function() {
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
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.getEmailSmsPreferences = function() {
  return /** @type{?proto.api.commons.org.EmailSmsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.EmailSmsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.EmailSmsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.setEmailSmsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.clearEmailSmsPreferences = function() {
  return this.setEmailSmsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.hasEmailSmsPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateEmailSmsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetBusinessPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetBusinessPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetBusinessPreferencesRequest;
  return proto.api.v1alpha1.org.GetBusinessPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetBusinessPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetBusinessPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetBusinessPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetBusinessPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetBusinessPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetBusinessPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetBusinessPreferencesResponse;
  return proto.api.v1alpha1.org.GetBusinessPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetBusinessPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetBusinessPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetBusinessPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.prototype.getBusinessPreferences = function() {
  return /** @type{?proto.api.commons.org.BusinessPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.BusinessPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetBusinessPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.prototype.setBusinessPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetBusinessPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.prototype.clearBusinessPreferences = function() {
  return this.setBusinessPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetBusinessPreferencesResponse.prototype.hasBusinessPreferences = function() {
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
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.getBusinessPreferences = function() {
  return /** @type{?proto.api.commons.org.BusinessPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.BusinessPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.setBusinessPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.clearBusinessPreferences = function() {
  return this.setBusinessPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.hasBusinessPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateBusinessPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.BusinessPreferences business_preferences = 2;
 * @return {?proto.api.commons.org.BusinessPreferences}
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.getBusinessPreferences = function() {
  return /** @type{?proto.api.commons.org.BusinessPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.BusinessPreferences, 2));
};


/**
 * @param {?proto.api.commons.org.BusinessPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.setBusinessPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.clearBusinessPreferences = function() {
  return this.setBusinessPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.hasBusinessPreferences = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAdminBusinessPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetScorecardsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesRequest}
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetScorecardsPreferencesRequest;
  return proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetScorecardsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesRequest}
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetScorecardsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetScorecardsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesResponse}
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetScorecardsPreferencesResponse;
  return proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetScorecardsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesResponse}
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetScorecardsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.prototype.getScorecardsPreferences = function() {
  return /** @type{?proto.api.commons.org.ScorecardsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.ScorecardsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.ScorecardsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.prototype.setScorecardsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetScorecardsPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.prototype.clearScorecardsPreferences = function() {
  return this.setScorecardsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetScorecardsPreferencesResponse.prototype.hasScorecardsPreferences = function() {
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
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.ScorecardsPreferences scorecards_preferences = 2;
 * @return {?proto.api.commons.org.ScorecardsPreferences}
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.getScorecardsPreferences = function() {
  return /** @type{?proto.api.commons.org.ScorecardsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.ScorecardsPreferences, 2));
};


/**
 * @param {?proto.api.commons.org.ScorecardsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.setScorecardsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.clearScorecardsPreferences = function() {
  return this.setScorecardsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.hasScorecardsPreferences = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateScorecardsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest;
  return proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse;
  return proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.prototype.getVoiceAnalyticsPreferences = function() {
  return /** @type{?proto.api.commons.org.VoiceAnalyticsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.VoiceAnalyticsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.VoiceAnalyticsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.prototype.setVoiceAnalyticsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.prototype.clearVoiceAnalyticsPreferences = function() {
  return this.setVoiceAnalyticsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse.prototype.hasVoiceAnalyticsPreferences = function() {
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
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest;
  return proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse;
  return proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.prototype.getVoiceAnalyticsPreferencesList = function() {
  return /** @type{!Array<!proto.api.commons.org.VoiceAnalyticsPreferences>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_org_preferences_pb.VoiceAnalyticsPreferences, 1));
};


/**
 * @param {!Array<!proto.api.commons.org.VoiceAnalyticsPreferences>} value
 * @return {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.prototype.setVoiceAnalyticsPreferencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.org.VoiceAnalyticsPreferences=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.org.VoiceAnalyticsPreferences}
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.prototype.addVoiceAnalyticsPreferences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.org.VoiceAnalyticsPreferences, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse.prototype.clearVoiceAnalyticsPreferencesList = function() {
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
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.getVoiceAnalyticsPreferences = function() {
  return /** @type{?proto.api.commons.org.VoiceAnalyticsPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.VoiceAnalyticsPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.VoiceAnalyticsPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.setVoiceAnalyticsPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.clearVoiceAnalyticsPreferences = function() {
  return this.setVoiceAnalyticsPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.hasVoiceAnalyticsPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest}
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest;
  return proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest}
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse}
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse;
  return proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse}
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.prototype.getEndOfDayPreferences = function() {
  return /** @type{?proto.api.commons.org.EndOfDayPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.EndOfDayPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.EndOfDayPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.prototype.setEndOfDayPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.prototype.clearEndOfDayPreferences = function() {
  return this.setEndOfDayPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetEndOfDayPreferencesResponse.prototype.hasEndOfDayPreferences = function() {
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
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.getEndOfDayPreferences = function() {
  return /** @type{?proto.api.commons.org.EndOfDayPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.EndOfDayPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.EndOfDayPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.setEndOfDayPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.clearEndOfDayPreferences = function() {
  return this.setEndOfDayPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.hasEndOfDayPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateEndOfDayPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetFilterPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetFilterPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetFilterPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetFilterPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetFilterPreferencesRequest}
 */
proto.api.v1alpha1.org.GetFilterPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetFilterPreferencesRequest;
  return proto.api.v1alpha1.org.GetFilterPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetFilterPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetFilterPreferencesRequest}
 */
proto.api.v1alpha1.org.GetFilterPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetFilterPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetFilterPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetFilterPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetFilterPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetFilterPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetFilterPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetFilterPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetFilterPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetFilterPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetFilterPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetFilterPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetFilterPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetFilterPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetFilterPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetFilterPreferencesResponse}
 */
proto.api.v1alpha1.org.GetFilterPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetFilterPreferencesResponse;
  return proto.api.v1alpha1.org.GetFilterPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetFilterPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetFilterPreferencesResponse}
 */
proto.api.v1alpha1.org.GetFilterPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetFilterPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetFilterPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetFilterPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetFilterPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetFilterPreferencesResponse.prototype.getFilterPreferences = function() {
  return /** @type{?proto.api.commons.org.FilterPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.FilterPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.FilterPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetFilterPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetFilterPreferencesResponse.prototype.setFilterPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetFilterPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetFilterPreferencesResponse.prototype.clearFilterPreferences = function() {
  return this.setFilterPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetFilterPreferencesResponse.prototype.hasFilterPreferences = function() {
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
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateFilterPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.getFilterPreferences = function() {
  return /** @type{?proto.api.commons.org.FilterPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.FilterPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.FilterPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.setFilterPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.clearFilterPreferences = function() {
  return this.setFilterPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.hasFilterPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateFilterPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateFilterPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateFilterPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateFilterPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateFilterPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateFilterPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateFilterPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateFilterPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetRecordingPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetRecordingPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetRecordingPreferencesRequest}
 */
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetRecordingPreferencesRequest;
  return proto.api.v1alpha1.org.GetRecordingPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetRecordingPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetRecordingPreferencesRequest}
 */
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetRecordingPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetRecordingPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetRecordingPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetRecordingPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetRecordingPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetRecordingPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetRecordingPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetRecordingPreferencesResponse}
 */
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetRecordingPreferencesResponse;
  return proto.api.v1alpha1.org.GetRecordingPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetRecordingPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetRecordingPreferencesResponse}
 */
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetRecordingPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetRecordingPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.prototype.getRecordingPreferences = function() {
  return /** @type{?proto.api.commons.org.RecordingPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.RecordingPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.RecordingPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetRecordingPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.prototype.setRecordingPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetRecordingPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.prototype.clearRecordingPreferences = function() {
  return this.setRecordingPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetRecordingPreferencesResponse.prototype.hasRecordingPreferences = function() {
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
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.getRecordingPreferences = function() {
  return /** @type{?proto.api.commons.org.RecordingPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.RecordingPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.RecordingPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.setRecordingPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.clearRecordingPreferences = function() {
  return this.setRecordingPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.hasRecordingPreferences = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateRecordingPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetAdminClientPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesRequest}
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetAdminClientPreferencesRequest;
  return proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetAdminClientPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesRequest}
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetAdminClientPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.GetAdminClientPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesResponse}
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.GetAdminClientPreferencesResponse;
  return proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.GetAdminClientPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesResponse}
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.GetAdminClientPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.prototype.getAdminClientPreferences = function() {
  return /** @type{?proto.api.commons.org.AdminClientPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AdminClientPreferences, 1));
};


/**
 * @param {?proto.api.commons.org.AdminClientPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesResponse} returns this
*/
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.prototype.setAdminClientPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.GetAdminClientPreferencesResponse} returns this
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.prototype.clearAdminClientPreferences = function() {
  return this.setAdminClientPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.GetAdminClientPreferencesResponse.prototype.hasAdminClientPreferences = function() {
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
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest;
  return proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest}
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.org.AdminClientPreferences admin_client_preferences = 2;
 * @return {?proto.api.commons.org.AdminClientPreferences}
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.getAdminClientPreferences = function() {
  return /** @type{?proto.api.commons.org.AdminClientPreferences} */ (
    jspb.Message.getWrapperField(this, api_commons_org_preferences_pb.AdminClientPreferences, 2));
};


/**
 * @param {?proto.api.commons.org.AdminClientPreferences|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.setAdminClientPreferences = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.clearAdminClientPreferences = function() {
  return this.setAdminClientPreferences(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.hasAdminClientPreferences = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest} returns this
*/
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest} returns this
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesRequest.prototype.hasFieldMask = function() {
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
proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse;
  return proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse}
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.UpdateAdminClientPreferencesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest}
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest;
  return proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest}
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse}
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse;
  return proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse}
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest}
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest;
  return proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest}
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest} returns this
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest.prototype.setValue = function(value) {
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
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse}
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse;
  return proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse}
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest}
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest;
  return proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest}
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse}
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse;
  return proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse}
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest}
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest;
  return proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest}
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse}
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse;
  return proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse}
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.api.v1alpha1.org);
