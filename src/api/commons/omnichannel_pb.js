// source: api/commons/omnichannel.proto
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
var localGlobalThis = require("../../global.js");
var proto = localGlobalThis.proto;
var goog = jspb;
var global = localGlobalThis || 
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var api_commons_chat_pb = require('../../api/commons/chat_pb.js');
goog.object.extend(proto, api_commons_chat_pb);
var api_commons_enums_pb = require('../../api/commons/enums_pb.js');
goog.object.extend(proto, api_commons_enums_pb);
var api_commons_lms_pb = require('../../api/commons/lms_pb.js');
goog.object.extend(proto, api_commons_lms_pb);
var api_commons_org_pb = require('../../api/commons/org_pb.js');
goog.object.extend(proto, api_commons_org_pb);
var api_commons_types_pb = require('../../api/commons/types_pb.js');
goog.object.extend(proto, api_commons_types_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.commons.AgentAssignmentActiveSearchType', null, global);
goog.exportSymbol('proto.api.commons.AgentChatWidgetMessage', null, global);
goog.exportSymbol('proto.api.commons.AgentConversationAssignmentStatus', null, global);
goog.exportSymbol('proto.api.commons.AgentConversationAssignmentType', null, global);
goog.exportSymbol('proto.api.commons.CampaignDirection', null, global);
goog.exportSymbol('proto.api.commons.CampaignStatus', null, global);
goog.exportSymbol('proto.api.commons.ChannelType', null, global);
goog.exportSymbol('proto.api.commons.ComplianceRule', null, global);
goog.exportSymbol('proto.api.commons.ComplianceRuleSet', null, global);
goog.exportSymbol('proto.api.commons.ConnectedInbox', null, global);
goog.exportSymbol('proto.api.commons.ConnectedInboxAuthenticationType', null, global);
goog.exportSymbol('proto.api.commons.ConnectedInboxOAuthConfig', null, global);
goog.exportSymbol('proto.api.commons.ContactEntry', null, global);
goog.exportSymbol('proto.api.commons.ContactList', null, global);
goog.exportSymbol('proto.api.commons.ContactList.Metadata', null, global);
goog.exportSymbol('proto.api.commons.ConversationCollectedData', null, global);
goog.exportSymbol('proto.api.commons.ConversationCollectedData_Item', null, global);
goog.exportSymbol('proto.api.commons.ConversationCustomerInformation', null, global);
goog.exportSymbol('proto.api.commons.ConversationStateChangeTimerName', null, global);
goog.exportSymbol('proto.api.commons.ConversationStatus', null, global);
goog.exportSymbol('proto.api.commons.CustomerChatWidgetMessage', null, global);
goog.exportSymbol('proto.api.commons.CustomerCollectedData', null, global);
goog.exportSymbol('proto.api.commons.CustomerCollectedDataItem', null, global);
goog.exportSymbol('proto.api.commons.Disposition', null, global);
goog.exportSymbol('proto.api.commons.GetQueuesDetailsRes', null, global);
goog.exportSymbol('proto.api.commons.GetQueuesDetailsRes.QueueDetails', null, global);
goog.exportSymbol('proto.api.commons.OmniAssignConversation', null, global);
goog.exportSymbol('proto.api.commons.OmniAttachment', null, global);
goog.exportSymbol('proto.api.commons.OmniAttachmentUploadURL', null, global);
goog.exportSymbol('proto.api.commons.OmniCampaign', null, global);
goog.exportSymbol('proto.api.commons.OmniCampaignDirection', null, global);
goog.exportSymbol('proto.api.commons.OmniCampaignModule', null, global);
goog.exportSymbol('proto.api.commons.OmniCampaignModule.Details', null, global);
goog.exportSymbol('proto.api.commons.OmniCampaignModuleConfig', null, global);
goog.exportSymbol('proto.api.commons.OmniCampaignModuleStatus', null, global);
goog.exportSymbol('proto.api.commons.OmniCampaignModuleType', null, global);
goog.exportSymbol('proto.api.commons.OmniCampaignStatus', null, global);
goog.exportSymbol('proto.api.commons.OmniCannedMessage', null, global);
goog.exportSymbol('proto.api.commons.OmniCloseConversation', null, global);
goog.exportSymbol('proto.api.commons.OmniComplianceAction', null, global);
goog.exportSymbol('proto.api.commons.OmniComplianceConfig', null, global);
goog.exportSymbol('proto.api.commons.OmniConversation', null, global);
goog.exportSymbol('proto.api.commons.OmniConversation.ConversationDetails', null, global);
goog.exportSymbol('proto.api.commons.OmniConversationAssignment', null, global);
goog.exportSymbol('proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails', null, global);
goog.exportSymbol('proto.api.commons.OmniConversationMetadataName', null, global);
goog.exportSymbol('proto.api.commons.OmniConversationResult', null, global);
goog.exportSymbol('proto.api.commons.OmniConversationSkills', null, global);
goog.exportSymbol('proto.api.commons.OmniConversationUserInformation', null, global);
goog.exportSymbol('proto.api.commons.OmniCustomUnsubscribeLink', null, global);
goog.exportSymbol('proto.api.commons.OmniDataField', null, global);
goog.exportSymbol('proto.api.commons.OmniFinishWrapUp', null, global);
goog.exportSymbol('proto.api.commons.OmniMessage', null, global);
goog.exportSymbol('proto.api.commons.OmniMessagePayload', null, global);
goog.exportSymbol('proto.api.commons.OmniMessagePayload.PayloadCase', null, global);
goog.exportSymbol('proto.api.commons.OmniMessageStatus', null, global);
goog.exportSymbol('proto.api.commons.OmniOffLoadedTextMessage', null, global);
goog.exportSymbol('proto.api.commons.OmniProjectComplianceConfig', null, global);
goog.exportSymbol('proto.api.commons.OmniQueueInformation', null, global);
goog.exportSymbol('proto.api.commons.OmniReassignmentNotification', null, global);
goog.exportSymbol('proto.api.commons.OmniRequestAttachmentUploadURL', null, global);
goog.exportSymbol('proto.api.commons.OmniRequestQueueInformation', null, global);
goog.exportSymbol('proto.api.commons.OmniSenderType', null, global);
goog.exportSymbol('proto.api.commons.OmniStartWrapUp', null, global);
goog.exportSymbol('proto.api.commons.OmniSuspend', null, global);
goog.exportSymbol('proto.api.commons.OmniTask', null, global);
goog.exportSymbol('proto.api.commons.OmniTask.Details', null, global);
goog.exportSymbol('proto.api.commons.OmniTaskConfig', null, global);
goog.exportSymbol('proto.api.commons.OmniTaskState', null, global);
goog.exportSymbol('proto.api.commons.OmniTaskState.Entry', null, global);
goog.exportSymbol('proto.api.commons.OmniTaskStatus', null, global);
goog.exportSymbol('proto.api.commons.OmniTextMessage', null, global);
goog.exportSymbol('proto.api.commons.OmniTypingNotification', null, global);
goog.exportSymbol('proto.api.commons.OmniUnassignConversation', null, global);
goog.exportSymbol('proto.api.commons.ProjectStatus', null, global);
goog.exportSymbol('proto.api.commons.SLATimeouts', null, global);
goog.exportSymbol('proto.api.commons.Signature', null, global);
goog.exportSymbol('proto.api.commons.SmsNumber', null, global);
goog.exportSymbol('proto.api.commons.SmsNumberProvider', null, global);
goog.exportSymbol('proto.api.commons.SmsNumberType', null, global);
goog.exportSymbol('proto.api.commons.VerifiedEmail', null, global);
goog.exportSymbol('proto.api.commons.WeekdayTimeRange', null, global);
goog.exportSymbol('proto.api.commons.WeekdayTimeRangeEntry', null, global);
goog.exportSymbol('proto.api.commons.WhatsAppNumber', null, global);
goog.exportSymbol('proto.api.commons.WhatsAppNumberProvider', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniCampaign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniCampaign.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniCampaign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniCampaign.displayName = 'proto.api.commons.OmniCampaign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniCampaignModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniCampaignModule.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniCampaignModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniCampaignModule.displayName = 'proto.api.commons.OmniCampaignModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniCampaignModule.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniCampaignModule.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniCampaignModule.Details.displayName = 'proto.api.commons.OmniCampaignModule.Details';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniCampaignModuleConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniCampaignModuleConfig.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniCampaignModuleConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniCampaignModuleConfig.displayName = 'proto.api.commons.OmniCampaignModuleConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.SmsNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.SmsNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.SmsNumber.displayName = 'proto.api.commons.SmsNumber';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ConversationCustomerInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ConversationCustomerInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ConversationCustomerInformation.displayName = 'proto.api.commons.ConversationCustomerInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.SLATimeouts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.SLATimeouts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.SLATimeouts.displayName = 'proto.api.commons.SLATimeouts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ConversationCollectedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.ConversationCollectedData.repeatedFields_, null);
};
goog.inherits(proto.api.commons.ConversationCollectedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ConversationCollectedData.displayName = 'proto.api.commons.ConversationCollectedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ConversationCollectedData_Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ConversationCollectedData_Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ConversationCollectedData_Item.displayName = 'proto.api.commons.ConversationCollectedData_Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniMessage.displayName = 'proto.api.commons.OmniMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.CustomerChatWidgetMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.CustomerChatWidgetMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.CustomerChatWidgetMessage.displayName = 'proto.api.commons.CustomerChatWidgetMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.AgentChatWidgetMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.AgentChatWidgetMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.AgentChatWidgetMessage.displayName = 'proto.api.commons.AgentChatWidgetMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniMessagePayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.commons.OmniMessagePayload.oneofGroups_);
};
goog.inherits(proto.api.commons.OmniMessagePayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniMessagePayload.displayName = 'proto.api.commons.OmniMessagePayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniTextMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniTextMessage.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniTextMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniTextMessage.displayName = 'proto.api.commons.OmniTextMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniOffLoadedTextMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniOffLoadedTextMessage.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniOffLoadedTextMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniOffLoadedTextMessage.displayName = 'proto.api.commons.OmniOffLoadedTextMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniTypingNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniTypingNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniTypingNotification.displayName = 'proto.api.commons.OmniTypingNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniAssignConversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniAssignConversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniAssignConversation.displayName = 'proto.api.commons.OmniAssignConversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniReassignmentNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniReassignmentNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniReassignmentNotification.displayName = 'proto.api.commons.OmniReassignmentNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniUnassignConversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniUnassignConversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniUnassignConversation.displayName = 'proto.api.commons.OmniUnassignConversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniRequestAttachmentUploadURL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniRequestAttachmentUploadURL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniRequestAttachmentUploadURL.displayName = 'proto.api.commons.OmniRequestAttachmentUploadURL';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniAttachmentUploadURL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniAttachmentUploadURL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniAttachmentUploadURL.displayName = 'proto.api.commons.OmniAttachmentUploadURL';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniAttachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniAttachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniAttachment.displayName = 'proto.api.commons.OmniAttachment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniStartWrapUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniStartWrapUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniStartWrapUp.displayName = 'proto.api.commons.OmniStartWrapUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniFinishWrapUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniFinishWrapUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniFinishWrapUp.displayName = 'proto.api.commons.OmniFinishWrapUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniSuspend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniSuspend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniSuspend.displayName = 'proto.api.commons.OmniSuspend';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniCloseConversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniCloseConversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniCloseConversation.displayName = 'proto.api.commons.OmniCloseConversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniQueueInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniQueueInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniQueueInformation.displayName = 'proto.api.commons.OmniQueueInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniRequestQueueInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniRequestQueueInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniRequestQueueInformation.displayName = 'proto.api.commons.OmniRequestQueueInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniCannedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniCannedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniCannedMessage.displayName = 'proto.api.commons.OmniCannedMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniConversationUserInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniConversationUserInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniConversationUserInformation.displayName = 'proto.api.commons.OmniConversationUserInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.CustomerCollectedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.CustomerCollectedData.repeatedFields_, null);
};
goog.inherits(proto.api.commons.CustomerCollectedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.CustomerCollectedData.displayName = 'proto.api.commons.CustomerCollectedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.CustomerCollectedDataItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.CustomerCollectedDataItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.CustomerCollectedDataItem.displayName = 'proto.api.commons.CustomerCollectedDataItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniConversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniConversation.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniConversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniConversation.displayName = 'proto.api.commons.OmniConversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniConversation.ConversationDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniConversation.ConversationDetails.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniConversation.ConversationDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniConversation.ConversationDetails.displayName = 'proto.api.commons.OmniConversation.ConversationDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniConversationAssignment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniConversationAssignment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniConversationAssignment.displayName = 'proto.api.commons.OmniConversationAssignment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.displayName = 'proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniConversationSkills = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniConversationSkills, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniConversationSkills.displayName = 'proto.api.commons.OmniConversationSkills';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.WeekdayTimeRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.WeekdayTimeRange.repeatedFields_, null);
};
goog.inherits(proto.api.commons.WeekdayTimeRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.WeekdayTimeRange.displayName = 'proto.api.commons.WeekdayTimeRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.WeekdayTimeRangeEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.WeekdayTimeRangeEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.WeekdayTimeRangeEntry.displayName = 'proto.api.commons.WeekdayTimeRangeEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.Disposition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.Disposition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.Disposition.displayName = 'proto.api.commons.Disposition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.GetQueuesDetailsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.GetQueuesDetailsRes.repeatedFields_, null);
};
goog.inherits(proto.api.commons.GetQueuesDetailsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.GetQueuesDetailsRes.displayName = 'proto.api.commons.GetQueuesDetailsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.GetQueuesDetailsRes.QueueDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.GetQueuesDetailsRes.QueueDetails.displayName = 'proto.api.commons.GetQueuesDetailsRes.QueueDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniCustomUnsubscribeLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniCustomUnsubscribeLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniCustomUnsubscribeLink.displayName = 'proto.api.commons.OmniCustomUnsubscribeLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ContactList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.ContactList.repeatedFields_, null);
};
goog.inherits(proto.api.commons.ContactList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ContactList.displayName = 'proto.api.commons.ContactList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ContactList.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ContactList.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ContactList.Metadata.displayName = 'proto.api.commons.ContactList.Metadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ContactEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.ContactEntry.repeatedFields_, null);
};
goog.inherits(proto.api.commons.ContactEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ContactEntry.displayName = 'proto.api.commons.ContactEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniTask.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniTask.displayName = 'proto.api.commons.OmniTask';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniTask.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniTask.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniTask.Details.displayName = 'proto.api.commons.OmniTask.Details';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniTaskConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniTaskConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniTaskConfig.displayName = 'proto.api.commons.OmniTaskConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniTaskState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniTaskState.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniTaskState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniTaskState.displayName = 'proto.api.commons.OmniTaskState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniTaskState.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniTaskState.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniTaskState.Entry.displayName = 'proto.api.commons.OmniTaskState.Entry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ComplianceRuleSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.ComplianceRuleSet.repeatedFields_, null);
};
goog.inherits(proto.api.commons.ComplianceRuleSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ComplianceRuleSet.displayName = 'proto.api.commons.ComplianceRuleSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ComplianceRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ComplianceRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ComplianceRule.displayName = 'proto.api.commons.ComplianceRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniDataField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniDataField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniDataField.displayName = 'proto.api.commons.OmniDataField';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ConnectedInbox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ConnectedInbox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ConnectedInbox.displayName = 'proto.api.commons.ConnectedInbox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.ConnectedInboxOAuthConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.ConnectedInboxOAuthConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.ConnectedInboxOAuthConfig.displayName = 'proto.api.commons.ConnectedInboxOAuthConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.VerifiedEmail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.VerifiedEmail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.VerifiedEmail.displayName = 'proto.api.commons.VerifiedEmail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.Signature.displayName = 'proto.api.commons.Signature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniProjectComplianceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniProjectComplianceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniProjectComplianceConfig.displayName = 'proto.api.commons.OmniProjectComplianceConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniComplianceAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.commons.OmniComplianceAction.repeatedFields_, null);
};
goog.inherits(proto.api.commons.OmniComplianceAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniComplianceAction.displayName = 'proto.api.commons.OmniComplianceAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.OmniComplianceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.OmniComplianceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.OmniComplianceConfig.displayName = 'proto.api.commons.OmniComplianceConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.WhatsAppNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.WhatsAppNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.WhatsAppNumber.displayName = 'proto.api.commons.WhatsAppNumber';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniCampaign.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniCampaign.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniCampaign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniCampaign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCampaign.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    skills: (f = msg.getSkills()) && proto.api.commons.OmniConversationSkills.toObject(includeInstance, f),
    startDate: (f = msg.getStartDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    channelType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    projectSid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    modulesList: jspb.Message.toObjectList(msg.getModulesList(),
    proto.api.commons.OmniCampaignModule.toObject, includeInstance),
    timeZone: (f = msg.getTimeZone()) && api_commons_org_pb.TimeZoneWrapper.toObject(includeInstance, f),
    shortenUrl: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    complianceConfig: (f = msg.getComplianceConfig()) && proto.api.commons.OmniComplianceConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniCampaign}
 */
proto.api.commons.OmniCampaign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniCampaign;
  return proto.api.commons.OmniCampaign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniCampaign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniCampaign}
 */
proto.api.commons.OmniCampaign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
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
      var value = new proto.api.commons.OmniConversationSkills;
      reader.readMessage(value,proto.api.commons.OmniConversationSkills.deserializeBinaryFromReader);
      msg.setSkills(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.OmniCampaignStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectSid(value);
      break;
    case 11:
      var value = new proto.api.commons.OmniCampaignModule;
      reader.readMessage(value,proto.api.commons.OmniCampaignModule.deserializeBinaryFromReader);
      msg.addModules(value);
      break;
    case 12:
      var value = new api_commons_org_pb.TimeZoneWrapper;
      reader.readMessage(value,api_commons_org_pb.TimeZoneWrapper.deserializeBinaryFromReader);
      msg.setTimeZone(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShortenUrl(value);
      break;
    case 14:
      var value = new proto.api.commons.OmniComplianceConfig;
      reader.readMessage(value,proto.api.commons.OmniComplianceConfig.deserializeBinaryFromReader);
      msg.setComplianceConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniCampaign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniCampaign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniCampaign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCampaign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getSkills();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.OmniConversationSkills.serializeBinaryToWriter
    );
  }
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getProjectSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      10,
      f
    );
  }
  f = message.getModulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.api.commons.OmniCampaignModule.serializeBinaryToWriter
    );
  }
  f = message.getTimeZone();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      api_commons_org_pb.TimeZoneWrapper.serializeBinaryToWriter
    );
  }
  f = message.getShortenUrl();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getComplianceConfig();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.api.commons.OmniComplianceConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniCampaign.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.OmniCampaign.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.OmniCampaign.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional OmniConversationSkills skills = 4;
 * @return {?proto.api.commons.OmniConversationSkills}
 */
proto.api.commons.OmniCampaign.prototype.getSkills = function() {
  return /** @type{?proto.api.commons.OmniConversationSkills} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniConversationSkills, 4));
};


/**
 * @param {?proto.api.commons.OmniConversationSkills|undefined} value
 * @return {!proto.api.commons.OmniCampaign} returns this
*/
proto.api.commons.OmniCampaign.prototype.setSkills = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.clearSkills = function() {
  return this.setSkills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaign.prototype.hasSkills = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp start_date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCampaign.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCampaign} returns this
*/
proto.api.commons.OmniCampaign.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaign.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OmniCampaignStatus status = 6;
 * @return {!proto.api.commons.OmniCampaignStatus}
 */
proto.api.commons.OmniCampaign.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.OmniCampaignStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.OmniCampaignStatus} value
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ChannelType channel_type = 7;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.OmniCampaign.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCampaign.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCampaign} returns this
*/
proto.api.commons.OmniCampaign.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaign.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCampaign.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCampaign} returns this
*/
proto.api.commons.OmniCampaign.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaign.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 project_sid = 10;
 * @return {string}
 */
proto.api.commons.OmniCampaign.prototype.getProjectSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.setProjectSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * repeated OmniCampaignModule modules = 11;
 * @return {!Array<!proto.api.commons.OmniCampaignModule>}
 */
proto.api.commons.OmniCampaign.prototype.getModulesList = function() {
  return /** @type{!Array<!proto.api.commons.OmniCampaignModule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniCampaignModule, 11));
};


/**
 * @param {!Array<!proto.api.commons.OmniCampaignModule>} value
 * @return {!proto.api.commons.OmniCampaign} returns this
*/
proto.api.commons.OmniCampaign.prototype.setModulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.api.commons.OmniCampaignModule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniCampaignModule}
 */
proto.api.commons.OmniCampaign.prototype.addModules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.api.commons.OmniCampaignModule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.clearModulesList = function() {
  return this.setModulesList([]);
};


/**
 * optional TimeZoneWrapper time_zone = 12;
 * @return {?proto.api.commons.TimeZoneWrapper}
 */
proto.api.commons.OmniCampaign.prototype.getTimeZone = function() {
  return /** @type{?proto.api.commons.TimeZoneWrapper} */ (
    jspb.Message.getWrapperField(this, api_commons_org_pb.TimeZoneWrapper, 12));
};


/**
 * @param {?proto.api.commons.TimeZoneWrapper|undefined} value
 * @return {!proto.api.commons.OmniCampaign} returns this
*/
proto.api.commons.OmniCampaign.prototype.setTimeZone = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.clearTimeZone = function() {
  return this.setTimeZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaign.prototype.hasTimeZone = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool shorten_url = 13;
 * @return {boolean}
 */
proto.api.commons.OmniCampaign.prototype.getShortenUrl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.setShortenUrl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional OmniComplianceConfig compliance_config = 14;
 * @return {?proto.api.commons.OmniComplianceConfig}
 */
proto.api.commons.OmniCampaign.prototype.getComplianceConfig = function() {
  return /** @type{?proto.api.commons.OmniComplianceConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniComplianceConfig, 14));
};


/**
 * @param {?proto.api.commons.OmniComplianceConfig|undefined} value
 * @return {!proto.api.commons.OmniCampaign} returns this
*/
proto.api.commons.OmniCampaign.prototype.setComplianceConfig = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaign} returns this
 */
proto.api.commons.OmniCampaign.prototype.clearComplianceConfig = function() {
  return this.setComplianceConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaign.prototype.hasComplianceConfig = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniCampaignModule.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniCampaignModule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniCampaignModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniCampaignModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCampaignModule.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignModuleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    moduleType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    config: (f = msg.getConfig()) && proto.api.commons.OmniCampaignModuleConfig.toObject(includeInstance, f),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    scheduledStopDate: (f = msg.getScheduledStopDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    actualStopDate: (f = msg.getActualStopDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    hoursOfOperation: (f = msg.getHoursOfOperation()) && proto.api.commons.WeekdayTimeRange.toObject(includeInstance, f),
    details: (f = msg.getDetails()) && proto.api.commons.OmniCampaignModule.Details.toObject(includeInstance, f),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.api.commons.OmniAttachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniCampaignModule}
 */
proto.api.commons.OmniCampaignModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniCampaignModule;
  return proto.api.commons.OmniCampaignModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniCampaignModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniCampaignModule}
 */
proto.api.commons.OmniCampaignModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignModuleSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.OmniCampaignModuleType} */ (reader.readEnum());
      msg.setModuleType(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.OmniCampaignModuleStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new proto.api.commons.OmniCampaignModuleConfig;
      reader.readMessage(value,proto.api.commons.OmniCampaignModuleConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduledStopDate(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setActualStopDate(value);
      break;
    case 10:
      var value = new proto.api.commons.WeekdayTimeRange;
      reader.readMessage(value,proto.api.commons.WeekdayTimeRange.deserializeBinaryFromReader);
      msg.setHoursOfOperation(value);
      break;
    case 11:
      var value = new proto.api.commons.OmniCampaignModule.Details;
      reader.readMessage(value,proto.api.commons.OmniCampaignModule.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 12:
      var value = new proto.api.commons.OmniAttachment;
      reader.readMessage(value,proto.api.commons.OmniAttachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniCampaignModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniCampaignModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniCampaignModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCampaignModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getModuleType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.OmniCampaignModuleConfig.serializeBinaryToWriter
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getScheduledStopDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getActualStopDate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHoursOfOperation();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.commons.WeekdayTimeRange.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.commons.OmniCampaignModule.Details.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.api.commons.OmniAttachment.serializeBinaryToWriter
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
proto.api.commons.OmniCampaignModule.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniCampaignModule.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniCampaignModule.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCampaignModule.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalTaskCount: (f = msg.getTotalTaskCount()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    completedTaskCount: (f = msg.getCompletedTaskCount()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    connectedInboxAddress: (f = msg.getConnectedInboxAddress()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    verifiedEmailAddress: (f = msg.getVerifiedEmailAddress()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    pendingTaskCount: (f = msg.getPendingTaskCount()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    failedTaskCount: (f = msg.getFailedTaskCount()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniCampaignModule.Details}
 */
proto.api.commons.OmniCampaignModule.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniCampaignModule.Details;
  return proto.api.commons.OmniCampaignModule.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniCampaignModule.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniCampaignModule.Details}
 */
proto.api.commons.OmniCampaignModule.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setTotalTaskCount(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setCompletedTaskCount(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setConnectedInboxAddress(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setVerifiedEmailAddress(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPendingTaskCount(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setFailedTaskCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniCampaignModule.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniCampaignModule.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCampaignModule.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalTaskCount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getCompletedTaskCount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getConnectedInboxAddress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getVerifiedEmailAddress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPendingTaskCount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getFailedTaskCount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value total_task_count = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.getTotalTaskCount = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
*/
proto.api.commons.OmniCampaignModule.Details.prototype.setTotalTaskCount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
 */
proto.api.commons.OmniCampaignModule.Details.prototype.clearTotalTaskCount = function() {
  return this.setTotalTaskCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.hasTotalTaskCount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int64Value completed_task_count = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.getCompletedTaskCount = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
*/
proto.api.commons.OmniCampaignModule.Details.prototype.setCompletedTaskCount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
 */
proto.api.commons.OmniCampaignModule.Details.prototype.clearCompletedTaskCount = function() {
  return this.setCompletedTaskCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.hasCompletedTaskCount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue connected_inbox_address = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.getConnectedInboxAddress = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
*/
proto.api.commons.OmniCampaignModule.Details.prototype.setConnectedInboxAddress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
 */
proto.api.commons.OmniCampaignModule.Details.prototype.clearConnectedInboxAddress = function() {
  return this.setConnectedInboxAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.hasConnectedInboxAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue verified_email_address = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.getVerifiedEmailAddress = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
*/
proto.api.commons.OmniCampaignModule.Details.prototype.setVerifiedEmailAddress = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
 */
proto.api.commons.OmniCampaignModule.Details.prototype.clearVerifiedEmailAddress = function() {
  return this.setVerifiedEmailAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.hasVerifiedEmailAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int64Value pending_task_count = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.getPendingTaskCount = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
*/
proto.api.commons.OmniCampaignModule.Details.prototype.setPendingTaskCount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
 */
proto.api.commons.OmniCampaignModule.Details.prototype.clearPendingTaskCount = function() {
  return this.setPendingTaskCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.hasPendingTaskCount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value failed_task_count = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.getFailedTaskCount = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
*/
proto.api.commons.OmniCampaignModule.Details.prototype.setFailedTaskCount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule.Details} returns this
 */
proto.api.commons.OmniCampaignModule.Details.prototype.clearFailedTaskCount = function() {
  return this.setFailedTaskCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.Details.prototype.hasFailedTaskCount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 campaign_module_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniCampaignModule.prototype.getCampaignModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.setCampaignModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {string}
 */
proto.api.commons.OmniCampaignModule.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional OmniCampaignModuleType module_type = 3;
 * @return {!proto.api.commons.OmniCampaignModuleType}
 */
proto.api.commons.OmniCampaignModule.prototype.getModuleType = function() {
  return /** @type {!proto.api.commons.OmniCampaignModuleType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.OmniCampaignModuleType} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.setModuleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional OmniCampaignModuleStatus status = 4;
 * @return {!proto.api.commons.OmniCampaignModuleStatus}
 */
proto.api.commons.OmniCampaignModule.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.OmniCampaignModuleStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.OmniCampaignModuleStatus} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional OmniCampaignModuleConfig config = 5;
 * @return {?proto.api.commons.OmniCampaignModuleConfig}
 */
proto.api.commons.OmniCampaignModule.prototype.getConfig = function() {
  return /** @type{?proto.api.commons.OmniCampaignModuleConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniCampaignModuleConfig, 5));
};


/**
 * @param {?proto.api.commons.OmniCampaignModuleConfig|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
*/
proto.api.commons.OmniCampaignModule.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp date_created = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCampaignModule.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
*/
proto.api.commons.OmniCampaignModule.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCampaignModule.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
*/
proto.api.commons.OmniCampaignModule.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp scheduled_stop_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCampaignModule.prototype.getScheduledStopDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
*/
proto.api.commons.OmniCampaignModule.prototype.setScheduledStopDate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.clearScheduledStopDate = function() {
  return this.setScheduledStopDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.prototype.hasScheduledStopDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp actual_stop_date = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCampaignModule.prototype.getActualStopDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
*/
proto.api.commons.OmniCampaignModule.prototype.setActualStopDate = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.clearActualStopDate = function() {
  return this.setActualStopDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.prototype.hasActualStopDate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional WeekdayTimeRange hours_of_operation = 10;
 * @return {?proto.api.commons.WeekdayTimeRange}
 */
proto.api.commons.OmniCampaignModule.prototype.getHoursOfOperation = function() {
  return /** @type{?proto.api.commons.WeekdayTimeRange} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.WeekdayTimeRange, 10));
};


/**
 * @param {?proto.api.commons.WeekdayTimeRange|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
*/
proto.api.commons.OmniCampaignModule.prototype.setHoursOfOperation = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.clearHoursOfOperation = function() {
  return this.setHoursOfOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.prototype.hasHoursOfOperation = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Details details = 11;
 * @return {?proto.api.commons.OmniCampaignModule.Details}
 */
proto.api.commons.OmniCampaignModule.prototype.getDetails = function() {
  return /** @type{?proto.api.commons.OmniCampaignModule.Details} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniCampaignModule.Details, 11));
};


/**
 * @param {?proto.api.commons.OmniCampaignModule.Details|undefined} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
*/
proto.api.commons.OmniCampaignModule.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModule.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated OmniAttachment attachments = 12;
 * @return {!Array<!proto.api.commons.OmniAttachment>}
 */
proto.api.commons.OmniCampaignModule.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniAttachment, 12));
};


/**
 * @param {!Array<!proto.api.commons.OmniAttachment>} value
 * @return {!proto.api.commons.OmniCampaignModule} returns this
*/
proto.api.commons.OmniCampaignModule.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.api.commons.OmniAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.commons.OmniCampaignModule.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.api.commons.OmniAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniCampaignModule} returns this
 */
proto.api.commons.OmniCampaignModule.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniCampaignModuleConfig.repeatedFields_ = [5,17,19];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniCampaignModuleConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniCampaignModuleConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCampaignModuleConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiKeyPrimary: (f = msg.getApiKeyPrimary()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    apiKeySecondary: (f = msg.getApiKeySecondary()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    colorProperties: (f = msg.getColorProperties()) && api_commons_chat_pb.ChatColorProperties.toObject(includeInstance, f),
    connectedInboxSid: (f = msg.getConnectedInboxSid()) && api_commons_types_pb.Int64Id.toObject(includeInstance, f),
    dispositionsList: jspb.Message.toObjectList(msg.getDispositionsList(),
    proto.api.commons.Disposition.toObject, includeInstance),
    email: (f = msg.getEmail()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    messageBody: (f = msg.getMessageBody()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    emailSubject: (f = msg.getEmailSubject()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    smsNumber: (f = msg.getSmsNumber()) && proto.api.commons.SmsNumber.toObject(includeInstance, f),
    header: (f = msg.getHeader()) && api_commons_chat_pb.ChatHeader.toObject(includeInstance, f),
    slaTimeouts: (f = msg.getSlaTimeouts()) && proto.api.commons.SLATimeouts.toObject(includeInstance, f),
    sendsPerHour: (f = msg.getSendsPerHour()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    unsubscribeLinkSid: (f = msg.getUnsubscribeLinkSid()) && api_commons_types_pb.Int64Id.toObject(includeInstance, f),
    verifiedEmailSid: (f = msg.getVerifiedEmailSid()) && api_commons_types_pb.Int64Id.toObject(includeInstance, f),
    stopOnTaskDeplete: (f = msg.getStopOnTaskDeplete()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.api.commons.OmniAttachment.toObject, includeInstance),
    complianceRuleSetId: (f = msg.getComplianceRuleSetId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    paymentPortalIdsList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
    flowId: (f = msg.getFlowId()) && api_commons_types_pb.Int64Id.toObject(includeInstance, f),
    skills: (f = msg.getSkills()) && proto.api.commons.OmniConversationSkills.toObject(includeInstance, f),
    whatsappNumber: (f = msg.getWhatsappNumber()) && proto.api.commons.WhatsAppNumber.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniCampaignModuleConfig}
 */
proto.api.commons.OmniCampaignModuleConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniCampaignModuleConfig;
  return proto.api.commons.OmniCampaignModuleConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniCampaignModuleConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniCampaignModuleConfig}
 */
proto.api.commons.OmniCampaignModuleConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setApiKeyPrimary(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setApiKeySecondary(value);
      break;
    case 3:
      var value = new api_commons_chat_pb.ChatColorProperties;
      reader.readMessage(value,api_commons_chat_pb.ChatColorProperties.deserializeBinaryFromReader);
      msg.setColorProperties(value);
      break;
    case 4:
      var value = new api_commons_types_pb.Int64Id;
      reader.readMessage(value,api_commons_types_pb.Int64Id.deserializeBinaryFromReader);
      msg.setConnectedInboxSid(value);
      break;
    case 5:
      var value = new proto.api.commons.Disposition;
      reader.readMessage(value,proto.api.commons.Disposition.deserializeBinaryFromReader);
      msg.addDispositions(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setMessageBody(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setEmailSubject(value);
      break;
    case 9:
      var value = new proto.api.commons.SmsNumber;
      reader.readMessage(value,proto.api.commons.SmsNumber.deserializeBinaryFromReader);
      msg.setSmsNumber(value);
      break;
    case 10:
      var value = new api_commons_chat_pb.ChatHeader;
      reader.readMessage(value,api_commons_chat_pb.ChatHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 11:
      var value = new proto.api.commons.SLATimeouts;
      reader.readMessage(value,proto.api.commons.SLATimeouts.deserializeBinaryFromReader);
      msg.setSlaTimeouts(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setSendsPerHour(value);
      break;
    case 13:
      var value = new api_commons_types_pb.Int64Id;
      reader.readMessage(value,api_commons_types_pb.Int64Id.deserializeBinaryFromReader);
      msg.setUnsubscribeLinkSid(value);
      break;
    case 15:
      var value = new api_commons_types_pb.Int64Id;
      reader.readMessage(value,api_commons_types_pb.Int64Id.deserializeBinaryFromReader);
      msg.setVerifiedEmailSid(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setStopOnTaskDeplete(value);
      break;
    case 17:
      var value = new proto.api.commons.OmniAttachment;
      reader.readMessage(value,proto.api.commons.OmniAttachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    case 18:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setComplianceRuleSetId(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addPaymentPortalIds(value);
      break;
    case 20:
      var value = new api_commons_types_pb.Int64Id;
      reader.readMessage(value,api_commons_types_pb.Int64Id.deserializeBinaryFromReader);
      msg.setFlowId(value);
      break;
    case 21:
      var value = new proto.api.commons.OmniConversationSkills;
      reader.readMessage(value,proto.api.commons.OmniConversationSkills.deserializeBinaryFromReader);
      msg.setSkills(value);
      break;
    case 22:
      var value = new proto.api.commons.WhatsAppNumber;
      reader.readMessage(value,proto.api.commons.WhatsAppNumber.deserializeBinaryFromReader);
      msg.setWhatsappNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniCampaignModuleConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniCampaignModuleConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCampaignModuleConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiKeyPrimary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getApiKeySecondary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getColorProperties();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_chat_pb.ChatColorProperties.serializeBinaryToWriter
    );
  }
  f = message.getConnectedInboxSid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_types_pb.Int64Id.serializeBinaryToWriter
    );
  }
  f = message.getDispositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.commons.Disposition.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMessageBody();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getEmailSubject();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getSmsNumber();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.api.commons.SmsNumber.serializeBinaryToWriter
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      api_commons_chat_pb.ChatHeader.serializeBinaryToWriter
    );
  }
  f = message.getSlaTimeouts();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.commons.SLATimeouts.serializeBinaryToWriter
    );
  }
  f = message.getSendsPerHour();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getUnsubscribeLinkSid();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      api_commons_types_pb.Int64Id.serializeBinaryToWriter
    );
  }
  f = message.getVerifiedEmailSid();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      api_commons_types_pb.Int64Id.serializeBinaryToWriter
    );
  }
  f = message.getStopOnTaskDeplete();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.api.commons.OmniAttachment.serializeBinaryToWriter
    );
  }
  f = message.getComplianceRuleSetId();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPaymentPortalIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
      f
    );
  }
  f = message.getFlowId();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      api_commons_types_pb.Int64Id.serializeBinaryToWriter
    );
  }
  f = message.getSkills();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.api.commons.OmniConversationSkills.serializeBinaryToWriter
    );
  }
  f = message.getWhatsappNumber();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.api.commons.WhatsAppNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue api_key_primary = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getApiKeyPrimary = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setApiKeyPrimary = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearApiKeyPrimary = function() {
  return this.setApiKeyPrimary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasApiKeyPrimary = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue api_key_secondary = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getApiKeySecondary = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setApiKeySecondary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearApiKeySecondary = function() {
  return this.setApiKeySecondary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasApiKeySecondary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ChatColorProperties color_properties = 3;
 * @return {?proto.api.commons.ChatColorProperties}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getColorProperties = function() {
  return /** @type{?proto.api.commons.ChatColorProperties} */ (
    jspb.Message.getWrapperField(this, api_commons_chat_pb.ChatColorProperties, 3));
};


/**
 * @param {?proto.api.commons.ChatColorProperties|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setColorProperties = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearColorProperties = function() {
  return this.setColorProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasColorProperties = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Int64Id connected_inbox_sid = 4;
 * @return {?proto.api.commons.Int64Id}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getConnectedInboxSid = function() {
  return /** @type{?proto.api.commons.Int64Id} */ (
    jspb.Message.getWrapperField(this, api_commons_types_pb.Int64Id, 4));
};


/**
 * @param {?proto.api.commons.Int64Id|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setConnectedInboxSid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearConnectedInboxSid = function() {
  return this.setConnectedInboxSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasConnectedInboxSid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Disposition dispositions = 5;
 * @return {!Array<!proto.api.commons.Disposition>}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getDispositionsList = function() {
  return /** @type{!Array<!proto.api.commons.Disposition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.Disposition, 5));
};


/**
 * @param {!Array<!proto.api.commons.Disposition>} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setDispositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.commons.Disposition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Disposition}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.addDispositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.commons.Disposition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearDispositionsList = function() {
  return this.setDispositionsList([]);
};


/**
 * optional google.protobuf.StringValue email = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getEmail = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.StringValue message_body = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getMessageBody = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setMessageBody = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearMessageBody = function() {
  return this.setMessageBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasMessageBody = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.StringValue email_subject = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getEmailSubject = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setEmailSubject = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearEmailSubject = function() {
  return this.setEmailSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasEmailSubject = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SmsNumber sms_number = 9;
 * @return {?proto.api.commons.SmsNumber}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getSmsNumber = function() {
  return /** @type{?proto.api.commons.SmsNumber} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.SmsNumber, 9));
};


/**
 * @param {?proto.api.commons.SmsNumber|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setSmsNumber = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearSmsNumber = function() {
  return this.setSmsNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasSmsNumber = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ChatHeader header = 10;
 * @return {?proto.api.commons.ChatHeader}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getHeader = function() {
  return /** @type{?proto.api.commons.ChatHeader} */ (
    jspb.Message.getWrapperField(this, api_commons_chat_pb.ChatHeader, 10));
};


/**
 * @param {?proto.api.commons.ChatHeader|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional SLATimeouts sla_timeouts = 11;
 * @return {?proto.api.commons.SLATimeouts}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getSlaTimeouts = function() {
  return /** @type{?proto.api.commons.SLATimeouts} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.SLATimeouts, 11));
};


/**
 * @param {?proto.api.commons.SLATimeouts|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setSlaTimeouts = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearSlaTimeouts = function() {
  return this.setSlaTimeouts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasSlaTimeouts = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Int64Value sends_per_hour = 12;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getSendsPerHour = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 12));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setSendsPerHour = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearSendsPerHour = function() {
  return this.setSendsPerHour(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasSendsPerHour = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Int64Id unsubscribe_link_sid = 13;
 * @return {?proto.api.commons.Int64Id}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getUnsubscribeLinkSid = function() {
  return /** @type{?proto.api.commons.Int64Id} */ (
    jspb.Message.getWrapperField(this, api_commons_types_pb.Int64Id, 13));
};


/**
 * @param {?proto.api.commons.Int64Id|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setUnsubscribeLinkSid = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearUnsubscribeLinkSid = function() {
  return this.setUnsubscribeLinkSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasUnsubscribeLinkSid = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Int64Id verified_email_sid = 15;
 * @return {?proto.api.commons.Int64Id}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getVerifiedEmailSid = function() {
  return /** @type{?proto.api.commons.Int64Id} */ (
    jspb.Message.getWrapperField(this, api_commons_types_pb.Int64Id, 15));
};


/**
 * @param {?proto.api.commons.Int64Id|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setVerifiedEmailSid = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearVerifiedEmailSid = function() {
  return this.setVerifiedEmailSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasVerifiedEmailSid = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.BoolValue stop_on_task_deplete = 16;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getStopOnTaskDeplete = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 16));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setStopOnTaskDeplete = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearStopOnTaskDeplete = function() {
  return this.setStopOnTaskDeplete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasStopOnTaskDeplete = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated OmniAttachment attachments = 17;
 * @return {!Array<!proto.api.commons.OmniAttachment>}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniAttachment, 17));
};


/**
 * @param {!Array<!proto.api.commons.OmniAttachment>} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.api.commons.OmniAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.api.commons.OmniAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional google.protobuf.StringValue compliance_rule_set_id = 18;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getComplianceRuleSetId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 18));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setComplianceRuleSetId = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearComplianceRuleSetId = function() {
  return this.setComplianceRuleSetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasComplianceRuleSetId = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * repeated string payment_portal_ids = 19;
 * @return {!Array<string>}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getPaymentPortalIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.setPaymentPortalIdsList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.addPaymentPortalIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearPaymentPortalIdsList = function() {
  return this.setPaymentPortalIdsList([]);
};


/**
 * optional Int64Id flow_id = 20;
 * @return {?proto.api.commons.Int64Id}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getFlowId = function() {
  return /** @type{?proto.api.commons.Int64Id} */ (
    jspb.Message.getWrapperField(this, api_commons_types_pb.Int64Id, 20));
};


/**
 * @param {?proto.api.commons.Int64Id|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setFlowId = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearFlowId = function() {
  return this.setFlowId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasFlowId = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional OmniConversationSkills skills = 21;
 * @return {?proto.api.commons.OmniConversationSkills}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getSkills = function() {
  return /** @type{?proto.api.commons.OmniConversationSkills} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniConversationSkills, 21));
};


/**
 * @param {?proto.api.commons.OmniConversationSkills|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setSkills = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearSkills = function() {
  return this.setSkills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasSkills = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional WhatsAppNumber whatsapp_number = 22;
 * @return {?proto.api.commons.WhatsAppNumber}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.getWhatsappNumber = function() {
  return /** @type{?proto.api.commons.WhatsAppNumber} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.WhatsAppNumber, 22));
};


/**
 * @param {?proto.api.commons.WhatsAppNumber|undefined} value
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
*/
proto.api.commons.OmniCampaignModuleConfig.prototype.setWhatsappNumber = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCampaignModuleConfig} returns this
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.clearWhatsappNumber = function() {
  return this.setWhatsappNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCampaignModuleConfig.prototype.hasWhatsappNumber = function() {
  return jspb.Message.getField(this, 22) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.SmsNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.SmsNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.SmsNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SmsNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    provider: jspb.Message.getFieldWithDefault(msg, 3, 0),
    countryCode: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.SmsNumber}
 */
proto.api.commons.SmsNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.SmsNumber;
  return proto.api.commons.SmsNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.SmsNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.SmsNumber}
 */
proto.api.commons.SmsNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.SmsNumberType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.SmsNumberProvider} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
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
proto.api.commons.SmsNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.SmsNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.SmsNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SmsNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCountryCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string number = 1;
 * @return {string}
 */
proto.api.commons.SmsNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.SmsNumber} returns this
 */
proto.api.commons.SmsNumber.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SmsNumberType type = 2;
 * @return {!proto.api.commons.SmsNumberType}
 */
proto.api.commons.SmsNumber.prototype.getType = function() {
  return /** @type {!proto.api.commons.SmsNumberType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.SmsNumberType} value
 * @return {!proto.api.commons.SmsNumber} returns this
 */
proto.api.commons.SmsNumber.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SmsNumberProvider provider = 3;
 * @return {!proto.api.commons.SmsNumberProvider}
 */
proto.api.commons.SmsNumber.prototype.getProvider = function() {
  return /** @type {!proto.api.commons.SmsNumberProvider} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.SmsNumberProvider} value
 * @return {!proto.api.commons.SmsNumber} returns this
 */
proto.api.commons.SmsNumber.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 country_code = 4;
 * @return {number}
 */
proto.api.commons.SmsNumber.prototype.getCountryCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SmsNumber} returns this
 */
proto.api.commons.SmsNumber.prototype.setCountryCode = function(value) {
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
proto.api.commons.ConversationCustomerInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ConversationCustomerInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ConversationCustomerInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConversationCustomerInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    emailAddress: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ConversationCustomerInformation}
 */
proto.api.commons.ConversationCustomerInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ConversationCustomerInformation;
  return proto.api.commons.ConversationCustomerInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ConversationCustomerInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ConversationCustomerInformation}
 */
proto.api.commons.ConversationCustomerInformation.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPhoneNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.ConversationCustomerInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ConversationCustomerInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ConversationCustomerInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConversationCustomerInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.ConversationCustomerInformation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConversationCustomerInformation} returns this
 */
proto.api.commons.ConversationCustomerInformation.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone_number = 2;
 * @return {string}
 */
proto.api.commons.ConversationCustomerInformation.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConversationCustomerInformation} returns this
 */
proto.api.commons.ConversationCustomerInformation.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email_address = 3;
 * @return {string}
 */
proto.api.commons.ConversationCustomerInformation.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConversationCustomerInformation} returns this
 */
proto.api.commons.ConversationCustomerInformation.prototype.setEmailAddress = function(value) {
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
proto.api.commons.SLATimeouts.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.SLATimeouts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.SLATimeouts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SLATimeouts.toObject = function(includeInstance, msg) {
  var f, obj = {
    t1: jspb.Message.getFieldWithDefault(msg, 1, 0),
    t2: jspb.Message.getFieldWithDefault(msg, 2, 0),
    t3: jspb.Message.getFieldWithDefault(msg, 3, 0),
    t10: jspb.Message.getFieldWithDefault(msg, 10, 0),
    t11: jspb.Message.getFieldWithDefault(msg, 11, 0),
    t12: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.SLATimeouts}
 */
proto.api.commons.SLATimeouts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.SLATimeouts;
  return proto.api.commons.SLATimeouts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.SLATimeouts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.SLATimeouts}
 */
proto.api.commons.SLATimeouts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setT1(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setT2(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setT3(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setT10(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setT11(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setT12(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.SLATimeouts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.SLATimeouts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.SLATimeouts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.SLATimeouts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getT1();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getT2();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getT3();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getT10();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getT11();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getT12();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
};


/**
 * optional int64 t1 = 1;
 * @return {number}
 */
proto.api.commons.SLATimeouts.prototype.getT1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SLATimeouts} returns this
 */
proto.api.commons.SLATimeouts.prototype.setT1 = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 t2 = 2;
 * @return {number}
 */
proto.api.commons.SLATimeouts.prototype.getT2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SLATimeouts} returns this
 */
proto.api.commons.SLATimeouts.prototype.setT2 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 t3 = 3;
 * @return {number}
 */
proto.api.commons.SLATimeouts.prototype.getT3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SLATimeouts} returns this
 */
proto.api.commons.SLATimeouts.prototype.setT3 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 t10 = 10;
 * @return {number}
 */
proto.api.commons.SLATimeouts.prototype.getT10 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SLATimeouts} returns this
 */
proto.api.commons.SLATimeouts.prototype.setT10 = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 t11 = 11;
 * @return {number}
 */
proto.api.commons.SLATimeouts.prototype.getT11 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SLATimeouts} returns this
 */
proto.api.commons.SLATimeouts.prototype.setT11 = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 t12 = 12;
 * @return {number}
 */
proto.api.commons.SLATimeouts.prototype.getT12 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.SLATimeouts} returns this
 */
proto.api.commons.SLATimeouts.prototype.setT12 = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.ConversationCollectedData.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.ConversationCollectedData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ConversationCollectedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ConversationCollectedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConversationCollectedData.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.api.commons.ConversationCollectedData_Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ConversationCollectedData}
 */
proto.api.commons.ConversationCollectedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ConversationCollectedData;
  return proto.api.commons.ConversationCollectedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ConversationCollectedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ConversationCollectedData}
 */
proto.api.commons.ConversationCollectedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.ConversationCollectedData_Item;
      reader.readMessage(value,proto.api.commons.ConversationCollectedData_Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.ConversationCollectedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ConversationCollectedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ConversationCollectedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConversationCollectedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.ConversationCollectedData_Item.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ConversationCollectedData_Item items = 1;
 * @return {!Array<!proto.api.commons.ConversationCollectedData_Item>}
 */
proto.api.commons.ConversationCollectedData.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.api.commons.ConversationCollectedData_Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.ConversationCollectedData_Item, 1));
};


/**
 * @param {!Array<!proto.api.commons.ConversationCollectedData_Item>} value
 * @return {!proto.api.commons.ConversationCollectedData} returns this
*/
proto.api.commons.ConversationCollectedData.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.ConversationCollectedData_Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ConversationCollectedData_Item}
 */
proto.api.commons.ConversationCollectedData.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.ConversationCollectedData_Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ConversationCollectedData} returns this
 */
proto.api.commons.ConversationCollectedData.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ConversationCollectedData_Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ConversationCollectedData_Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConversationCollectedData_Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationCollectedDataSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    conversationSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    dataName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dataValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
    collectionTime: (f = msg.getCollectionTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    userId: (f = msg.getUserId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ConversationCollectedData_Item}
 */
proto.api.commons.ConversationCollectedData_Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ConversationCollectedData_Item;
  return proto.api.commons.ConversationCollectedData_Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ConversationCollectedData_Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ConversationCollectedData_Item}
 */
proto.api.commons.ConversationCollectedData_Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationCollectedDataSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataValue(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCollectionTime(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
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
proto.api.commons.ConversationCollectedData_Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ConversationCollectedData_Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ConversationCollectedData_Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConversationCollectedData_Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationCollectedDataSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getDataName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDataValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCollectionTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_collected_data_sid = 1;
 * @return {string}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.getConversationCollectedDataSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConversationCollectedData_Item} returns this
 */
proto.api.commons.ConversationCollectedData_Item.prototype.setConversationCollectedDataSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 conversation_sid = 2;
 * @return {string}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConversationCollectedData_Item} returns this
 */
proto.api.commons.ConversationCollectedData_Item.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string data_name = 3;
 * @return {string}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.getDataName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConversationCollectedData_Item} returns this
 */
proto.api.commons.ConversationCollectedData_Item.prototype.setDataName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string data_value = 4;
 * @return {string}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.getDataValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConversationCollectedData_Item} returns this
 */
proto.api.commons.ConversationCollectedData_Item.prototype.setDataValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp collection_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.getCollectionTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ConversationCollectedData_Item} returns this
*/
proto.api.commons.ConversationCollectedData_Item.prototype.setCollectionTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConversationCollectedData_Item} returns this
 */
proto.api.commons.ConversationCollectedData_Item.prototype.clearCollectionTime = function() {
  return this.setCollectionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.hasCollectionTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue user_id = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.getUserId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.ConversationCollectedData_Item} returns this
*/
proto.api.commons.ConversationCollectedData_Item.prototype.setUserId = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConversationCollectedData_Item} returns this
 */
proto.api.commons.ConversationCollectedData_Item.prototype.clearUserId = function() {
  return this.setUserId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConversationCollectedData_Item.prototype.hasUserId = function() {
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
proto.api.commons.OmniMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    userId: (f = msg.getUserId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    sentFrom: jspb.Message.getFieldWithDefault(msg, 5, ""),
    sentTo: jspb.Message.getFieldWithDefault(msg, 6, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    referenceId: (f = msg.getReferenceId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    uiReferenceId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    payload: (f = msg.getPayload()) && proto.api.commons.OmniMessagePayload.toObject(includeInstance, f),
    conversationSid: (f = msg.getConversationSid()) && api_commons_types_pb.Int64Id.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 14, 0),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 17, "0"),
    subject: (f = msg.getSubject()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    senderType: jspb.Message.getFieldWithDefault(msg, 21, 0),
    statusMessage: (f = msg.getStatusMessage()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniMessage}
 */
proto.api.commons.OmniMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniMessage;
  return proto.api.commons.OmniMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniMessage}
 */
proto.api.commons.OmniMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setMessageSid(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setUserId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSentFrom(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSentTo(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setReferenceId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUiReferenceId(value);
      break;
    case 11:
      var value = new proto.api.commons.OmniMessagePayload;
      reader.readMessage(value,proto.api.commons.OmniMessagePayload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 12:
      var value = new api_commons_types_pb.Int64Id;
      reader.readMessage(value,api_commons_types_pb.Int64Id.deserializeBinaryFromReader);
      msg.setConversationSid(value);
      break;
    case 14:
      var value = /** @type {!proto.api.commons.OmniMessageStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 19:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    case 21:
      var value = /** @type {!proto.api.commons.OmniSenderType} */ (reader.readEnum());
      msg.setSenderType(value);
      break;
    case 22:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setStatusMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getSentFrom();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSentTo();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getReferenceId();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getUiReferenceId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.commons.OmniMessagePayload.serializeBinaryToWriter
    );
  }
  f = message.getConversationSid();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      api_commons_types_pb.Int64Id.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      17,
      f
    );
  }
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getSenderType();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getStatusMessage();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 message_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniMessage.prototype.getMessageSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.setMessageSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue user_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniMessage.prototype.getUserId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniMessage} returns this
*/
proto.api.commons.OmniMessage.prototype.setUserId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.clearUserId = function() {
  return this.setUserId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessage.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string sent_from = 5;
 * @return {string}
 */
proto.api.commons.OmniMessage.prototype.getSentFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.setSentFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string sent_to = 6;
 * @return {string}
 */
proto.api.commons.OmniMessage.prototype.getSentTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.setSentTo = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ChannelType channel_type = 7;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.OmniMessage.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.StringValue reference_id = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniMessage.prototype.getReferenceId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniMessage} returns this
*/
proto.api.commons.OmniMessage.prototype.setReferenceId = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.clearReferenceId = function() {
  return this.setReferenceId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessage.prototype.hasReferenceId = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string ui_reference_id = 10;
 * @return {string}
 */
proto.api.commons.OmniMessage.prototype.getUiReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.setUiReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional OmniMessagePayload payload = 11;
 * @return {?proto.api.commons.OmniMessagePayload}
 */
proto.api.commons.OmniMessage.prototype.getPayload = function() {
  return /** @type{?proto.api.commons.OmniMessagePayload} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniMessagePayload, 11));
};


/**
 * @param {?proto.api.commons.OmniMessagePayload|undefined} value
 * @return {!proto.api.commons.OmniMessage} returns this
*/
proto.api.commons.OmniMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Int64Id conversation_sid = 12;
 * @return {?proto.api.commons.Int64Id}
 */
proto.api.commons.OmniMessage.prototype.getConversationSid = function() {
  return /** @type{?proto.api.commons.Int64Id} */ (
    jspb.Message.getWrapperField(this, api_commons_types_pb.Int64Id, 12));
};


/**
 * @param {?proto.api.commons.Int64Id|undefined} value
 * @return {!proto.api.commons.OmniMessage} returns this
*/
proto.api.commons.OmniMessage.prototype.setConversationSid = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.clearConversationSid = function() {
  return this.setConversationSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessage.prototype.hasConversationSid = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional OmniMessageStatus status = 14;
 * @return {!proto.api.commons.OmniMessageStatus}
 */
proto.api.commons.OmniMessage.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.OmniMessageStatus} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.api.commons.OmniMessageStatus} value
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniMessage.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniMessage} returns this
*/
proto.api.commons.OmniMessage.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessage.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniMessage.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniMessage} returns this
*/
proto.api.commons.OmniMessage.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessage.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int64 campaign_sid = 17;
 * @return {string}
 */
proto.api.commons.OmniMessage.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 17, value);
};


/**
 * optional google.protobuf.StringValue subject = 19;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniMessage.prototype.getSubject = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 19));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniMessage} returns this
*/
proto.api.commons.OmniMessage.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessage.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional OmniSenderType sender_type = 21;
 * @return {!proto.api.commons.OmniSenderType}
 */
proto.api.commons.OmniMessage.prototype.getSenderType = function() {
  return /** @type {!proto.api.commons.OmniSenderType} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.api.commons.OmniSenderType} value
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.setSenderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * optional google.protobuf.StringValue status_message = 22;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniMessage.prototype.getStatusMessage = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 22));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniMessage} returns this
*/
proto.api.commons.OmniMessage.prototype.setStatusMessage = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessage} returns this
 */
proto.api.commons.OmniMessage.prototype.clearStatusMessage = function() {
  return this.setStatusMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessage.prototype.hasStatusMessage = function() {
  return jspb.Message.getField(this, 22) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.CustomerChatWidgetMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.CustomerChatWidgetMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CustomerChatWidgetMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    payload: (f = msg.getPayload()) && proto.api.commons.OmniMessagePayload.toObject(includeInstance, f),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    uiReferenceId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    customerInformation: (f = msg.getCustomerInformation()) && proto.api.commons.ConversationCustomerInformation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.CustomerChatWidgetMessage}
 */
proto.api.commons.CustomerChatWidgetMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.CustomerChatWidgetMessage;
  return proto.api.commons.CustomerChatWidgetMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.CustomerChatWidgetMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.CustomerChatWidgetMessage}
 */
proto.api.commons.CustomerChatWidgetMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setMessageSid(value);
      break;
    case 2:
      var value = new proto.api.commons.OmniMessagePayload;
      reader.readMessage(value,proto.api.commons.OmniMessagePayload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUiReferenceId(value);
      break;
    case 5:
      var value = new proto.api.commons.ConversationCustomerInformation;
      reader.readMessage(value,proto.api.commons.ConversationCustomerInformation.deserializeBinaryFromReader);
      msg.setCustomerInformation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.CustomerChatWidgetMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.CustomerChatWidgetMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CustomerChatWidgetMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.OmniMessagePayload.serializeBinaryToWriter
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUiReferenceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCustomerInformation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.ConversationCustomerInformation.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 message_sid = 1;
 * @return {string}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.getMessageSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.CustomerChatWidgetMessage} returns this
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.setMessageSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional OmniMessagePayload payload = 2;
 * @return {?proto.api.commons.OmniMessagePayload}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.getPayload = function() {
  return /** @type{?proto.api.commons.OmniMessagePayload} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniMessagePayload, 2));
};


/**
 * @param {?proto.api.commons.OmniMessagePayload|undefined} value
 * @return {!proto.api.commons.CustomerChatWidgetMessage} returns this
*/
proto.api.commons.CustomerChatWidgetMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.CustomerChatWidgetMessage} returns this
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp date_created = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.CustomerChatWidgetMessage} returns this
*/
proto.api.commons.CustomerChatWidgetMessage.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.CustomerChatWidgetMessage} returns this
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ui_reference_id = 4;
 * @return {string}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.getUiReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.CustomerChatWidgetMessage} returns this
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.setUiReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ConversationCustomerInformation customer_information = 5;
 * @return {?proto.api.commons.ConversationCustomerInformation}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.getCustomerInformation = function() {
  return /** @type{?proto.api.commons.ConversationCustomerInformation} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ConversationCustomerInformation, 5));
};


/**
 * @param {?proto.api.commons.ConversationCustomerInformation|undefined} value
 * @return {!proto.api.commons.CustomerChatWidgetMessage} returns this
*/
proto.api.commons.CustomerChatWidgetMessage.prototype.setCustomerInformation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.CustomerChatWidgetMessage} returns this
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.clearCustomerInformation = function() {
  return this.setCustomerInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.CustomerChatWidgetMessage.prototype.hasCustomerInformation = function() {
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
proto.api.commons.AgentChatWidgetMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.AgentChatWidgetMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.AgentChatWidgetMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AgentChatWidgetMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    payload: (f = msg.getPayload()) && proto.api.commons.OmniMessagePayload.toObject(includeInstance, f),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    uiReferenceId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userInformation: (f = msg.getUserInformation()) && proto.api.commons.OmniConversationUserInformation.toObject(includeInstance, f),
    senderType: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.AgentChatWidgetMessage}
 */
proto.api.commons.AgentChatWidgetMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.AgentChatWidgetMessage;
  return proto.api.commons.AgentChatWidgetMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.AgentChatWidgetMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.AgentChatWidgetMessage}
 */
proto.api.commons.AgentChatWidgetMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setMessageSid(value);
      break;
    case 2:
      var value = new proto.api.commons.OmniMessagePayload;
      reader.readMessage(value,proto.api.commons.OmniMessagePayload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUiReferenceId(value);
      break;
    case 5:
      var value = new proto.api.commons.OmniConversationUserInformation;
      reader.readMessage(value,proto.api.commons.OmniConversationUserInformation.deserializeBinaryFromReader);
      msg.setUserInformation(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.OmniSenderType} */ (reader.readEnum());
      msg.setSenderType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.AgentChatWidgetMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.AgentChatWidgetMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.AgentChatWidgetMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.OmniMessagePayload.serializeBinaryToWriter
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUiReferenceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserInformation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.OmniConversationUserInformation.serializeBinaryToWriter
    );
  }
  f = message.getSenderType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional int64 message_sid = 1;
 * @return {string}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.getMessageSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
 */
proto.api.commons.AgentChatWidgetMessage.prototype.setMessageSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional OmniMessagePayload payload = 2;
 * @return {?proto.api.commons.OmniMessagePayload}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.getPayload = function() {
  return /** @type{?proto.api.commons.OmniMessagePayload} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniMessagePayload, 2));
};


/**
 * @param {?proto.api.commons.OmniMessagePayload|undefined} value
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
*/
proto.api.commons.AgentChatWidgetMessage.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
 */
proto.api.commons.AgentChatWidgetMessage.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp date_created = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
*/
proto.api.commons.AgentChatWidgetMessage.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
 */
proto.api.commons.AgentChatWidgetMessage.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ui_reference_id = 4;
 * @return {string}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.getUiReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
 */
proto.api.commons.AgentChatWidgetMessage.prototype.setUiReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional OmniConversationUserInformation user_information = 5;
 * @return {?proto.api.commons.OmniConversationUserInformation}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.getUserInformation = function() {
  return /** @type{?proto.api.commons.OmniConversationUserInformation} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniConversationUserInformation, 5));
};


/**
 * @param {?proto.api.commons.OmniConversationUserInformation|undefined} value
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
*/
proto.api.commons.AgentChatWidgetMessage.prototype.setUserInformation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
 */
proto.api.commons.AgentChatWidgetMessage.prototype.clearUserInformation = function() {
  return this.setUserInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.hasUserInformation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OmniSenderType sender_type = 6;
 * @return {!proto.api.commons.OmniSenderType}
 */
proto.api.commons.AgentChatWidgetMessage.prototype.getSenderType = function() {
  return /** @type {!proto.api.commons.OmniSenderType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.OmniSenderType} value
 * @return {!proto.api.commons.AgentChatWidgetMessage} returns this
 */
proto.api.commons.AgentChatWidgetMessage.prototype.setSenderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.commons.OmniMessagePayload.oneofGroups_ = [[100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115]];

/**
 * @enum {number}
 */
proto.api.commons.OmniMessagePayload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  TEXT_MESSAGE: 100,
  TYPING_NOTIFICATION: 101,
  REASSIGNMENT: 102,
  REQUEST_ATTACHMENT_UPLOAD_URL: 103,
  ATTACHMENT_UPLOAD_URL: 104,
  ATTACHMENT: 105,
  CLOSE_CONVERSATION: 106,
  ASSIGN_CONVERSATION: 107,
  UNASSIGN_CONVERSATION: 108,
  FINISH_WRAP_UP: 109,
  SUSPEND: 110,
  START_WRAP_UP: 111,
  QUEUE_INFORMATION: 112,
  REQUEST_QUEUE_INFORMATION: 113,
  OFF_LOADED_TEXT_MESSAGE: 114,
  CANNED_MESSAGE: 115
};

/**
 * @return {proto.api.commons.OmniMessagePayload.PayloadCase}
 */
proto.api.commons.OmniMessagePayload.prototype.getPayloadCase = function() {
  return /** @type {proto.api.commons.OmniMessagePayload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.api.commons.OmniMessagePayload.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniMessagePayload.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniMessagePayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniMessagePayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniMessagePayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    textMessage: (f = msg.getTextMessage()) && proto.api.commons.OmniTextMessage.toObject(includeInstance, f),
    typingNotification: (f = msg.getTypingNotification()) && proto.api.commons.OmniTypingNotification.toObject(includeInstance, f),
    reassignment: (f = msg.getReassignment()) && proto.api.commons.OmniReassignmentNotification.toObject(includeInstance, f),
    requestAttachmentUploadUrl: (f = msg.getRequestAttachmentUploadUrl()) && proto.api.commons.OmniRequestAttachmentUploadURL.toObject(includeInstance, f),
    attachmentUploadUrl: (f = msg.getAttachmentUploadUrl()) && proto.api.commons.OmniAttachmentUploadURL.toObject(includeInstance, f),
    attachment: (f = msg.getAttachment()) && proto.api.commons.OmniAttachment.toObject(includeInstance, f),
    closeConversation: (f = msg.getCloseConversation()) && proto.api.commons.OmniCloseConversation.toObject(includeInstance, f),
    assignConversation: (f = msg.getAssignConversation()) && proto.api.commons.OmniAssignConversation.toObject(includeInstance, f),
    unassignConversation: (f = msg.getUnassignConversation()) && proto.api.commons.OmniUnassignConversation.toObject(includeInstance, f),
    finishWrapUp: (f = msg.getFinishWrapUp()) && proto.api.commons.OmniFinishWrapUp.toObject(includeInstance, f),
    suspend: (f = msg.getSuspend()) && proto.api.commons.OmniSuspend.toObject(includeInstance, f),
    startWrapUp: (f = msg.getStartWrapUp()) && proto.api.commons.OmniStartWrapUp.toObject(includeInstance, f),
    queueInformation: (f = msg.getQueueInformation()) && proto.api.commons.OmniQueueInformation.toObject(includeInstance, f),
    requestQueueInformation: (f = msg.getRequestQueueInformation()) && proto.api.commons.OmniRequestQueueInformation.toObject(includeInstance, f),
    offLoadedTextMessage: (f = msg.getOffLoadedTextMessage()) && proto.api.commons.OmniOffLoadedTextMessage.toObject(includeInstance, f),
    cannedMessage: (f = msg.getCannedMessage()) && proto.api.commons.OmniCannedMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniMessagePayload}
 */
proto.api.commons.OmniMessagePayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniMessagePayload;
  return proto.api.commons.OmniMessagePayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniMessagePayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniMessagePayload}
 */
proto.api.commons.OmniMessagePayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 100:
      var value = new proto.api.commons.OmniTextMessage;
      reader.readMessage(value,proto.api.commons.OmniTextMessage.deserializeBinaryFromReader);
      msg.setTextMessage(value);
      break;
    case 101:
      var value = new proto.api.commons.OmniTypingNotification;
      reader.readMessage(value,proto.api.commons.OmniTypingNotification.deserializeBinaryFromReader);
      msg.setTypingNotification(value);
      break;
    case 102:
      var value = new proto.api.commons.OmniReassignmentNotification;
      reader.readMessage(value,proto.api.commons.OmniReassignmentNotification.deserializeBinaryFromReader);
      msg.setReassignment(value);
      break;
    case 103:
      var value = new proto.api.commons.OmniRequestAttachmentUploadURL;
      reader.readMessage(value,proto.api.commons.OmniRequestAttachmentUploadURL.deserializeBinaryFromReader);
      msg.setRequestAttachmentUploadUrl(value);
      break;
    case 104:
      var value = new proto.api.commons.OmniAttachmentUploadURL;
      reader.readMessage(value,proto.api.commons.OmniAttachmentUploadURL.deserializeBinaryFromReader);
      msg.setAttachmentUploadUrl(value);
      break;
    case 105:
      var value = new proto.api.commons.OmniAttachment;
      reader.readMessage(value,proto.api.commons.OmniAttachment.deserializeBinaryFromReader);
      msg.setAttachment(value);
      break;
    case 106:
      var value = new proto.api.commons.OmniCloseConversation;
      reader.readMessage(value,proto.api.commons.OmniCloseConversation.deserializeBinaryFromReader);
      msg.setCloseConversation(value);
      break;
    case 107:
      var value = new proto.api.commons.OmniAssignConversation;
      reader.readMessage(value,proto.api.commons.OmniAssignConversation.deserializeBinaryFromReader);
      msg.setAssignConversation(value);
      break;
    case 108:
      var value = new proto.api.commons.OmniUnassignConversation;
      reader.readMessage(value,proto.api.commons.OmniUnassignConversation.deserializeBinaryFromReader);
      msg.setUnassignConversation(value);
      break;
    case 109:
      var value = new proto.api.commons.OmniFinishWrapUp;
      reader.readMessage(value,proto.api.commons.OmniFinishWrapUp.deserializeBinaryFromReader);
      msg.setFinishWrapUp(value);
      break;
    case 110:
      var value = new proto.api.commons.OmniSuspend;
      reader.readMessage(value,proto.api.commons.OmniSuspend.deserializeBinaryFromReader);
      msg.setSuspend(value);
      break;
    case 111:
      var value = new proto.api.commons.OmniStartWrapUp;
      reader.readMessage(value,proto.api.commons.OmniStartWrapUp.deserializeBinaryFromReader);
      msg.setStartWrapUp(value);
      break;
    case 112:
      var value = new proto.api.commons.OmniQueueInformation;
      reader.readMessage(value,proto.api.commons.OmniQueueInformation.deserializeBinaryFromReader);
      msg.setQueueInformation(value);
      break;
    case 113:
      var value = new proto.api.commons.OmniRequestQueueInformation;
      reader.readMessage(value,proto.api.commons.OmniRequestQueueInformation.deserializeBinaryFromReader);
      msg.setRequestQueueInformation(value);
      break;
    case 114:
      var value = new proto.api.commons.OmniOffLoadedTextMessage;
      reader.readMessage(value,proto.api.commons.OmniOffLoadedTextMessage.deserializeBinaryFromReader);
      msg.setOffLoadedTextMessage(value);
      break;
    case 115:
      var value = new proto.api.commons.OmniCannedMessage;
      reader.readMessage(value,proto.api.commons.OmniCannedMessage.deserializeBinaryFromReader);
      msg.setCannedMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniMessagePayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniMessagePayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniMessagePayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniMessagePayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextMessage();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.commons.OmniTextMessage.serializeBinaryToWriter
    );
  }
  f = message.getTypingNotification();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.api.commons.OmniTypingNotification.serializeBinaryToWriter
    );
  }
  f = message.getReassignment();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.api.commons.OmniReassignmentNotification.serializeBinaryToWriter
    );
  }
  f = message.getRequestAttachmentUploadUrl();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      proto.api.commons.OmniRequestAttachmentUploadURL.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentUploadUrl();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      proto.api.commons.OmniAttachmentUploadURL.serializeBinaryToWriter
    );
  }
  f = message.getAttachment();
  if (f != null) {
    writer.writeMessage(
      105,
      f,
      proto.api.commons.OmniAttachment.serializeBinaryToWriter
    );
  }
  f = message.getCloseConversation();
  if (f != null) {
    writer.writeMessage(
      106,
      f,
      proto.api.commons.OmniCloseConversation.serializeBinaryToWriter
    );
  }
  f = message.getAssignConversation();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      proto.api.commons.OmniAssignConversation.serializeBinaryToWriter
    );
  }
  f = message.getUnassignConversation();
  if (f != null) {
    writer.writeMessage(
      108,
      f,
      proto.api.commons.OmniUnassignConversation.serializeBinaryToWriter
    );
  }
  f = message.getFinishWrapUp();
  if (f != null) {
    writer.writeMessage(
      109,
      f,
      proto.api.commons.OmniFinishWrapUp.serializeBinaryToWriter
    );
  }
  f = message.getSuspend();
  if (f != null) {
    writer.writeMessage(
      110,
      f,
      proto.api.commons.OmniSuspend.serializeBinaryToWriter
    );
  }
  f = message.getStartWrapUp();
  if (f != null) {
    writer.writeMessage(
      111,
      f,
      proto.api.commons.OmniStartWrapUp.serializeBinaryToWriter
    );
  }
  f = message.getQueueInformation();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      proto.api.commons.OmniQueueInformation.serializeBinaryToWriter
    );
  }
  f = message.getRequestQueueInformation();
  if (f != null) {
    writer.writeMessage(
      113,
      f,
      proto.api.commons.OmniRequestQueueInformation.serializeBinaryToWriter
    );
  }
  f = message.getOffLoadedTextMessage();
  if (f != null) {
    writer.writeMessage(
      114,
      f,
      proto.api.commons.OmniOffLoadedTextMessage.serializeBinaryToWriter
    );
  }
  f = message.getCannedMessage();
  if (f != null) {
    writer.writeMessage(
      115,
      f,
      proto.api.commons.OmniCannedMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional OmniTextMessage text_message = 100;
 * @return {?proto.api.commons.OmniTextMessage}
 */
proto.api.commons.OmniMessagePayload.prototype.getTextMessage = function() {
  return /** @type{?proto.api.commons.OmniTextMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniTextMessage, 100));
};


/**
 * @param {?proto.api.commons.OmniTextMessage|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setTextMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearTextMessage = function() {
  return this.setTextMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasTextMessage = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional OmniTypingNotification typing_notification = 101;
 * @return {?proto.api.commons.OmniTypingNotification}
 */
proto.api.commons.OmniMessagePayload.prototype.getTypingNotification = function() {
  return /** @type{?proto.api.commons.OmniTypingNotification} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniTypingNotification, 101));
};


/**
 * @param {?proto.api.commons.OmniTypingNotification|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setTypingNotification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearTypingNotification = function() {
  return this.setTypingNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasTypingNotification = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional OmniReassignmentNotification reassignment = 102;
 * @return {?proto.api.commons.OmniReassignmentNotification}
 */
proto.api.commons.OmniMessagePayload.prototype.getReassignment = function() {
  return /** @type{?proto.api.commons.OmniReassignmentNotification} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniReassignmentNotification, 102));
};


/**
 * @param {?proto.api.commons.OmniReassignmentNotification|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setReassignment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearReassignment = function() {
  return this.setReassignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasReassignment = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional OmniRequestAttachmentUploadURL request_attachment_upload_url = 103;
 * @return {?proto.api.commons.OmniRequestAttachmentUploadURL}
 */
proto.api.commons.OmniMessagePayload.prototype.getRequestAttachmentUploadUrl = function() {
  return /** @type{?proto.api.commons.OmniRequestAttachmentUploadURL} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniRequestAttachmentUploadURL, 103));
};


/**
 * @param {?proto.api.commons.OmniRequestAttachmentUploadURL|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setRequestAttachmentUploadUrl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 103, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearRequestAttachmentUploadUrl = function() {
  return this.setRequestAttachmentUploadUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasRequestAttachmentUploadUrl = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional OmniAttachmentUploadURL attachment_upload_url = 104;
 * @return {?proto.api.commons.OmniAttachmentUploadURL}
 */
proto.api.commons.OmniMessagePayload.prototype.getAttachmentUploadUrl = function() {
  return /** @type{?proto.api.commons.OmniAttachmentUploadURL} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniAttachmentUploadURL, 104));
};


/**
 * @param {?proto.api.commons.OmniAttachmentUploadURL|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setAttachmentUploadUrl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearAttachmentUploadUrl = function() {
  return this.setAttachmentUploadUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasAttachmentUploadUrl = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * optional OmniAttachment attachment = 105;
 * @return {?proto.api.commons.OmniAttachment}
 */
proto.api.commons.OmniMessagePayload.prototype.getAttachment = function() {
  return /** @type{?proto.api.commons.OmniAttachment} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniAttachment, 105));
};


/**
 * @param {?proto.api.commons.OmniAttachment|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setAttachment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 105, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearAttachment = function() {
  return this.setAttachment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasAttachment = function() {
  return jspb.Message.getField(this, 105) != null;
};


/**
 * optional OmniCloseConversation close_conversation = 106;
 * @return {?proto.api.commons.OmniCloseConversation}
 */
proto.api.commons.OmniMessagePayload.prototype.getCloseConversation = function() {
  return /** @type{?proto.api.commons.OmniCloseConversation} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniCloseConversation, 106));
};


/**
 * @param {?proto.api.commons.OmniCloseConversation|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setCloseConversation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 106, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearCloseConversation = function() {
  return this.setCloseConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasCloseConversation = function() {
  return jspb.Message.getField(this, 106) != null;
};


/**
 * optional OmniAssignConversation assign_conversation = 107;
 * @return {?proto.api.commons.OmniAssignConversation}
 */
proto.api.commons.OmniMessagePayload.prototype.getAssignConversation = function() {
  return /** @type{?proto.api.commons.OmniAssignConversation} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniAssignConversation, 107));
};


/**
 * @param {?proto.api.commons.OmniAssignConversation|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setAssignConversation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 107, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearAssignConversation = function() {
  return this.setAssignConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasAssignConversation = function() {
  return jspb.Message.getField(this, 107) != null;
};


/**
 * optional OmniUnassignConversation unassign_conversation = 108;
 * @return {?proto.api.commons.OmniUnassignConversation}
 */
proto.api.commons.OmniMessagePayload.prototype.getUnassignConversation = function() {
  return /** @type{?proto.api.commons.OmniUnassignConversation} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniUnassignConversation, 108));
};


/**
 * @param {?proto.api.commons.OmniUnassignConversation|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setUnassignConversation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 108, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearUnassignConversation = function() {
  return this.setUnassignConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasUnassignConversation = function() {
  return jspb.Message.getField(this, 108) != null;
};


/**
 * optional OmniFinishWrapUp finish_wrap_up = 109;
 * @return {?proto.api.commons.OmniFinishWrapUp}
 */
proto.api.commons.OmniMessagePayload.prototype.getFinishWrapUp = function() {
  return /** @type{?proto.api.commons.OmniFinishWrapUp} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniFinishWrapUp, 109));
};


/**
 * @param {?proto.api.commons.OmniFinishWrapUp|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setFinishWrapUp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 109, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearFinishWrapUp = function() {
  return this.setFinishWrapUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasFinishWrapUp = function() {
  return jspb.Message.getField(this, 109) != null;
};


/**
 * optional OmniSuspend suspend = 110;
 * @return {?proto.api.commons.OmniSuspend}
 */
proto.api.commons.OmniMessagePayload.prototype.getSuspend = function() {
  return /** @type{?proto.api.commons.OmniSuspend} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniSuspend, 110));
};


/**
 * @param {?proto.api.commons.OmniSuspend|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setSuspend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 110, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearSuspend = function() {
  return this.setSuspend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasSuspend = function() {
  return jspb.Message.getField(this, 110) != null;
};


/**
 * optional OmniStartWrapUp start_wrap_up = 111;
 * @return {?proto.api.commons.OmniStartWrapUp}
 */
proto.api.commons.OmniMessagePayload.prototype.getStartWrapUp = function() {
  return /** @type{?proto.api.commons.OmniStartWrapUp} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniStartWrapUp, 111));
};


/**
 * @param {?proto.api.commons.OmniStartWrapUp|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setStartWrapUp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 111, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearStartWrapUp = function() {
  return this.setStartWrapUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasStartWrapUp = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional OmniQueueInformation queue_information = 112;
 * @return {?proto.api.commons.OmniQueueInformation}
 */
proto.api.commons.OmniMessagePayload.prototype.getQueueInformation = function() {
  return /** @type{?proto.api.commons.OmniQueueInformation} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniQueueInformation, 112));
};


/**
 * @param {?proto.api.commons.OmniQueueInformation|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setQueueInformation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 112, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearQueueInformation = function() {
  return this.setQueueInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasQueueInformation = function() {
  return jspb.Message.getField(this, 112) != null;
};


/**
 * optional OmniRequestQueueInformation request_queue_information = 113;
 * @return {?proto.api.commons.OmniRequestQueueInformation}
 */
proto.api.commons.OmniMessagePayload.prototype.getRequestQueueInformation = function() {
  return /** @type{?proto.api.commons.OmniRequestQueueInformation} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniRequestQueueInformation, 113));
};


/**
 * @param {?proto.api.commons.OmniRequestQueueInformation|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setRequestQueueInformation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 113, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearRequestQueueInformation = function() {
  return this.setRequestQueueInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasRequestQueueInformation = function() {
  return jspb.Message.getField(this, 113) != null;
};


/**
 * optional OmniOffLoadedTextMessage off_loaded_text_message = 114;
 * @return {?proto.api.commons.OmniOffLoadedTextMessage}
 */
proto.api.commons.OmniMessagePayload.prototype.getOffLoadedTextMessage = function() {
  return /** @type{?proto.api.commons.OmniOffLoadedTextMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniOffLoadedTextMessage, 114));
};


/**
 * @param {?proto.api.commons.OmniOffLoadedTextMessage|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setOffLoadedTextMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 114, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearOffLoadedTextMessage = function() {
  return this.setOffLoadedTextMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasOffLoadedTextMessage = function() {
  return jspb.Message.getField(this, 114) != null;
};


/**
 * optional OmniCannedMessage canned_message = 115;
 * @return {?proto.api.commons.OmniCannedMessage}
 */
proto.api.commons.OmniMessagePayload.prototype.getCannedMessage = function() {
  return /** @type{?proto.api.commons.OmniCannedMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniCannedMessage, 115));
};


/**
 * @param {?proto.api.commons.OmniCannedMessage|undefined} value
 * @return {!proto.api.commons.OmniMessagePayload} returns this
*/
proto.api.commons.OmniMessagePayload.prototype.setCannedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 115, proto.api.commons.OmniMessagePayload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniMessagePayload} returns this
 */
proto.api.commons.OmniMessagePayload.prototype.clearCannedMessage = function() {
  return this.setCannedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniMessagePayload.prototype.hasCannedMessage = function() {
  return jspb.Message.getField(this, 115) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniTextMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniTextMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniTextMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniTextMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTextMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.api.commons.OmniAttachment.toObject, includeInstance),
    primaryAsmSessionSid: (f = msg.getPrimaryAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniTextMessage}
 */
proto.api.commons.OmniTextMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniTextMessage;
  return proto.api.commons.OmniTextMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniTextMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniTextMessage}
 */
proto.api.commons.OmniTextMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = new proto.api.commons.OmniAttachment;
      reader.readMessage(value,proto.api.commons.OmniAttachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPrimaryAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniTextMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniTextMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniTextMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTextMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.OmniAttachment.serializeBinaryToWriter
    );
  }
  f = message.getPrimaryAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.api.commons.OmniTextMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniTextMessage} returns this
 */
proto.api.commons.OmniTextMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated OmniAttachment attachments = 2;
 * @return {!Array<!proto.api.commons.OmniAttachment>}
 */
proto.api.commons.OmniTextMessage.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniAttachment, 2));
};


/**
 * @param {!Array<!proto.api.commons.OmniAttachment>} value
 * @return {!proto.api.commons.OmniTextMessage} returns this
*/
proto.api.commons.OmniTextMessage.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.OmniAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.commons.OmniTextMessage.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.OmniAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniTextMessage} returns this
 */
proto.api.commons.OmniTextMessage.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional google.protobuf.Int64Value primary_asm_session_sid = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniTextMessage.prototype.getPrimaryAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniTextMessage} returns this
*/
proto.api.commons.OmniTextMessage.prototype.setPrimaryAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTextMessage} returns this
 */
proto.api.commons.OmniTextMessage.prototype.clearPrimaryAsmSessionSid = function() {
  return this.setPrimaryAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTextMessage.prototype.hasPrimaryAsmSessionSid = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniOffLoadedTextMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniOffLoadedTextMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniOffLoadedTextMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniOffLoadedTextMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniOffLoadedTextMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.api.commons.OmniAttachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniOffLoadedTextMessage}
 */
proto.api.commons.OmniOffLoadedTextMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniOffLoadedTextMessage;
  return proto.api.commons.OmniOffLoadedTextMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniOffLoadedTextMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniOffLoadedTextMessage}
 */
proto.api.commons.OmniOffLoadedTextMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 2:
      var value = new proto.api.commons.OmniAttachment;
      reader.readMessage(value,proto.api.commons.OmniAttachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniOffLoadedTextMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniOffLoadedTextMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniOffLoadedTextMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniOffLoadedTextMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.OmniAttachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.api.commons.OmniOffLoadedTextMessage.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniOffLoadedTextMessage} returns this
 */
proto.api.commons.OmniOffLoadedTextMessage.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated OmniAttachment attachments = 2;
 * @return {!Array<!proto.api.commons.OmniAttachment>}
 */
proto.api.commons.OmniOffLoadedTextMessage.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniAttachment, 2));
};


/**
 * @param {!Array<!proto.api.commons.OmniAttachment>} value
 * @return {!proto.api.commons.OmniOffLoadedTextMessage} returns this
*/
proto.api.commons.OmniOffLoadedTextMessage.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.OmniAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.commons.OmniOffLoadedTextMessage.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.OmniAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniOffLoadedTextMessage} returns this
 */
proto.api.commons.OmniOffLoadedTextMessage.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniTypingNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniTypingNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniTypingNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTypingNotification.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.commons.OmniTypingNotification}
 */
proto.api.commons.OmniTypingNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniTypingNotification;
  return proto.api.commons.OmniTypingNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniTypingNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniTypingNotification}
 */
proto.api.commons.OmniTypingNotification.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.OmniTypingNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniTypingNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniTypingNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTypingNotification.serializeBinaryToWriter = function(message, writer) {
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
proto.api.commons.OmniAssignConversation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniAssignConversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniAssignConversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniAssignConversation.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    primaryAsmSessionSid: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniAssignConversation}
 */
proto.api.commons.OmniAssignConversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniAssignConversation;
  return proto.api.commons.OmniAssignConversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniAssignConversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniAssignConversation}
 */
proto.api.commons.OmniAssignConversation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrimaryAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniAssignConversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniAssignConversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniAssignConversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniAssignConversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrimaryAsmSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.commons.OmniAssignConversation.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAssignConversation} returns this
 */
proto.api.commons.OmniAssignConversation.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_name = 2;
 * @return {string}
 */
proto.api.commons.OmniAssignConversation.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAssignConversation} returns this
 */
proto.api.commons.OmniAssignConversation.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 primary_asm_session_sid = 5;
 * @return {number}
 */
proto.api.commons.OmniAssignConversation.prototype.getPrimaryAsmSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.OmniAssignConversation} returns this
 */
proto.api.commons.OmniAssignConversation.prototype.setPrimaryAsmSessionSid = function(value) {
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
proto.api.commons.OmniReassignmentNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniReassignmentNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniReassignmentNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniReassignmentNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentUserId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currentUserName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newUserId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newUserName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    newUserAsmSessionSid: (f = msg.getNewUserAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniReassignmentNotification}
 */
proto.api.commons.OmniReassignmentNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniReassignmentNotification;
  return proto.api.commons.OmniReassignmentNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniReassignmentNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniReassignmentNotification}
 */
proto.api.commons.OmniReassignmentNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentUserName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewUserName(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setNewUserAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniReassignmentNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniReassignmentNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniReassignmentNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniReassignmentNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrentUserName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewUserName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNewUserAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string current_user_id = 1;
 * @return {string}
 */
proto.api.commons.OmniReassignmentNotification.prototype.getCurrentUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniReassignmentNotification} returns this
 */
proto.api.commons.OmniReassignmentNotification.prototype.setCurrentUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string current_user_name = 2;
 * @return {string}
 */
proto.api.commons.OmniReassignmentNotification.prototype.getCurrentUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniReassignmentNotification} returns this
 */
proto.api.commons.OmniReassignmentNotification.prototype.setCurrentUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_user_id = 3;
 * @return {string}
 */
proto.api.commons.OmniReassignmentNotification.prototype.getNewUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniReassignmentNotification} returns this
 */
proto.api.commons.OmniReassignmentNotification.prototype.setNewUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string new_user_name = 4;
 * @return {string}
 */
proto.api.commons.OmniReassignmentNotification.prototype.getNewUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniReassignmentNotification} returns this
 */
proto.api.commons.OmniReassignmentNotification.prototype.setNewUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Int64Value new_user_asm_session_sid = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniReassignmentNotification.prototype.getNewUserAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniReassignmentNotification} returns this
*/
proto.api.commons.OmniReassignmentNotification.prototype.setNewUserAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniReassignmentNotification} returns this
 */
proto.api.commons.OmniReassignmentNotification.prototype.clearNewUserAsmSessionSid = function() {
  return this.setNewUserAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniReassignmentNotification.prototype.hasNewUserAsmSessionSid = function() {
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
proto.api.commons.OmniUnassignConversation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniUnassignConversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniUnassignConversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniUnassignConversation.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: (f = msg.getUserId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    userName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    primaryAsmSessionSid: (f = msg.getPrimaryAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniUnassignConversation}
 */
proto.api.commons.OmniUnassignConversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniUnassignConversation;
  return proto.api.commons.OmniUnassignConversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniUnassignConversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniUnassignConversation}
 */
proto.api.commons.OmniUnassignConversation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPrimaryAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniUnassignConversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniUnassignConversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniUnassignConversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniUnassignConversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPrimaryAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue user_id = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniUnassignConversation.prototype.getUserId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniUnassignConversation} returns this
*/
proto.api.commons.OmniUnassignConversation.prototype.setUserId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniUnassignConversation} returns this
 */
proto.api.commons.OmniUnassignConversation.prototype.clearUserId = function() {
  return this.setUserId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniUnassignConversation.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_name = 4;
 * @return {string}
 */
proto.api.commons.OmniUnassignConversation.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniUnassignConversation} returns this
 */
proto.api.commons.OmniUnassignConversation.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool all = 2;
 * @return {boolean}
 */
proto.api.commons.OmniUnassignConversation.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.OmniUnassignConversation} returns this
 */
proto.api.commons.OmniUnassignConversation.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.protobuf.Int64Value primary_asm_session_sid = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniUnassignConversation.prototype.getPrimaryAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniUnassignConversation} returns this
*/
proto.api.commons.OmniUnassignConversation.prototype.setPrimaryAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniUnassignConversation} returns this
 */
proto.api.commons.OmniUnassignConversation.prototype.clearPrimaryAsmSessionSid = function() {
  return this.setPrimaryAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniUnassignConversation.prototype.hasPrimaryAsmSessionSid = function() {
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
proto.api.commons.OmniRequestAttachmentUploadURL.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniRequestAttachmentUploadURL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniRequestAttachmentUploadURL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniRequestAttachmentUploadURL.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.commons.OmniRequestAttachmentUploadURL}
 */
proto.api.commons.OmniRequestAttachmentUploadURL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniRequestAttachmentUploadURL;
  return proto.api.commons.OmniRequestAttachmentUploadURL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniRequestAttachmentUploadURL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniRequestAttachmentUploadURL}
 */
proto.api.commons.OmniRequestAttachmentUploadURL.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.OmniRequestAttachmentUploadURL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniRequestAttachmentUploadURL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniRequestAttachmentUploadURL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniRequestAttachmentUploadURL.serializeBinaryToWriter = function(message, writer) {
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
proto.api.commons.OmniAttachmentUploadURL.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniAttachmentUploadURL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniAttachmentUploadURL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniAttachmentUploadURL.toObject = function(includeInstance, msg) {
  var f, obj = {
    uploadUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniAttachmentUploadURL}
 */
proto.api.commons.OmniAttachmentUploadURL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniAttachmentUploadURL;
  return proto.api.commons.OmniAttachmentUploadURL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniAttachmentUploadURL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniAttachmentUploadURL}
 */
proto.api.commons.OmniAttachmentUploadURL.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadUrl(value);
      break;
    case 2:
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
proto.api.commons.OmniAttachmentUploadURL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniAttachmentUploadURL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniAttachmentUploadURL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniAttachmentUploadURL.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUploadUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string upload_url = 1;
 * @return {string}
 */
proto.api.commons.OmniAttachmentUploadURL.prototype.getUploadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAttachmentUploadURL} returns this
 */
proto.api.commons.OmniAttachmentUploadURL.prototype.setUploadUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.api.commons.OmniAttachmentUploadURL.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAttachmentUploadURL} returns this
 */
proto.api.commons.OmniAttachmentUploadURL.prototype.setId = function(value) {
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
proto.api.commons.OmniAttachment.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniAttachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniAttachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniAttachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    omniAttachmentSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fileSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    path: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tempId: (f = msg.getTempId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    downloadUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    contentId: (f = msg.getContentId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    width: (f = msg.getWidth()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    height: (f = msg.getHeight()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.commons.OmniAttachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniAttachment;
  return proto.api.commons.OmniAttachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniAttachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.commons.OmniAttachment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setOmniAttachmentSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTempId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadUrl(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setContentId(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setWidth(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniAttachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniAttachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniAttachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniAttachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOmniAttachmentSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getFileType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTempId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDownloadUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContentId();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getWidth();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 omni_attachment_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniAttachment.prototype.getOmniAttachmentSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.setOmniAttachmentSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.OmniAttachment.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string file_type = 3;
 * @return {string}
 */
proto.api.commons.OmniAttachment.prototype.getFileType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.setFileType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 file_size = 4;
 * @return {number}
 */
proto.api.commons.OmniAttachment.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string path = 5;
 * @return {string}
 */
proto.api.commons.OmniAttachment.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.StringValue temp_id = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniAttachment.prototype.getTempId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniAttachment} returns this
*/
proto.api.commons.OmniAttachment.prototype.setTempId = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.clearTempId = function() {
  return this.setTempId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniAttachment.prototype.hasTempId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string download_url = 7;
 * @return {string}
 */
proto.api.commons.OmniAttachment.prototype.getDownloadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.setDownloadUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniAttachment.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniAttachment} returns this
*/
proto.api.commons.OmniAttachment.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniAttachment.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniAttachment.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniAttachment} returns this
*/
proto.api.commons.OmniAttachment.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniAttachment.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.StringValue content_id = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniAttachment.prototype.getContentId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniAttachment} returns this
*/
proto.api.commons.OmniAttachment.prototype.setContentId = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.clearContentId = function() {
  return this.setContentId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniAttachment.prototype.hasContentId = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.StringValue width = 11;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniAttachment.prototype.getWidth = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 11));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniAttachment} returns this
*/
proto.api.commons.OmniAttachment.prototype.setWidth = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.clearWidth = function() {
  return this.setWidth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniAttachment.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.StringValue height = 12;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniAttachment.prototype.getHeight = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 12));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniAttachment} returns this
*/
proto.api.commons.OmniAttachment.prototype.setHeight = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniAttachment} returns this
 */
proto.api.commons.OmniAttachment.prototype.clearHeight = function() {
  return this.setHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniAttachment.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniStartWrapUp.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniStartWrapUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniStartWrapUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniStartWrapUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    primaryAsmSessionSid: (f = msg.getPrimaryAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniStartWrapUp}
 */
proto.api.commons.OmniStartWrapUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniStartWrapUp;
  return proto.api.commons.OmniStartWrapUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniStartWrapUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniStartWrapUp}
 */
proto.api.commons.OmniStartWrapUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPrimaryAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniStartWrapUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniStartWrapUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniStartWrapUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniStartWrapUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimaryAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value primary_asm_session_sid = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniStartWrapUp.prototype.getPrimaryAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniStartWrapUp} returns this
*/
proto.api.commons.OmniStartWrapUp.prototype.setPrimaryAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniStartWrapUp} returns this
 */
proto.api.commons.OmniStartWrapUp.prototype.clearPrimaryAsmSessionSid = function() {
  return this.setPrimaryAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniStartWrapUp.prototype.hasPrimaryAsmSessionSid = function() {
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
proto.api.commons.OmniFinishWrapUp.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniFinishWrapUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniFinishWrapUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniFinishWrapUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    primaryAsmSessionSid: (f = msg.getPrimaryAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniFinishWrapUp}
 */
proto.api.commons.OmniFinishWrapUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniFinishWrapUp;
  return proto.api.commons.OmniFinishWrapUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniFinishWrapUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniFinishWrapUp}
 */
proto.api.commons.OmniFinishWrapUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPrimaryAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniFinishWrapUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniFinishWrapUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniFinishWrapUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniFinishWrapUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimaryAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value primary_asm_session_sid = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniFinishWrapUp.prototype.getPrimaryAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniFinishWrapUp} returns this
*/
proto.api.commons.OmniFinishWrapUp.prototype.setPrimaryAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniFinishWrapUp} returns this
 */
proto.api.commons.OmniFinishWrapUp.prototype.clearPrimaryAsmSessionSid = function() {
  return this.setPrimaryAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniFinishWrapUp.prototype.hasPrimaryAsmSessionSid = function() {
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
proto.api.commons.OmniSuspend.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniSuspend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniSuspend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniSuspend.toObject = function(includeInstance, msg) {
  var f, obj = {
    primaryAsmSessionSid: (f = msg.getPrimaryAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniSuspend}
 */
proto.api.commons.OmniSuspend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniSuspend;
  return proto.api.commons.OmniSuspend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniSuspend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniSuspend}
 */
proto.api.commons.OmniSuspend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPrimaryAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniSuspend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniSuspend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniSuspend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniSuspend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimaryAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value primary_asm_session_sid = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniSuspend.prototype.getPrimaryAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniSuspend} returns this
*/
proto.api.commons.OmniSuspend.prototype.setPrimaryAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniSuspend} returns this
 */
proto.api.commons.OmniSuspend.prototype.clearPrimaryAsmSessionSid = function() {
  return this.setPrimaryAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniSuspend.prototype.hasPrimaryAsmSessionSid = function() {
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
proto.api.commons.OmniCloseConversation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniCloseConversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniCloseConversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCloseConversation.toObject = function(includeInstance, msg) {
  var f, obj = {
    primaryAsmSessionSid: (f = msg.getPrimaryAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniCloseConversation}
 */
proto.api.commons.OmniCloseConversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniCloseConversation;
  return proto.api.commons.OmniCloseConversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniCloseConversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniCloseConversation}
 */
proto.api.commons.OmniCloseConversation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPrimaryAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniCloseConversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniCloseConversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniCloseConversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCloseConversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimaryAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value primary_asm_session_sid = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.OmniCloseConversation.prototype.getPrimaryAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.OmniCloseConversation} returns this
*/
proto.api.commons.OmniCloseConversation.prototype.setPrimaryAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCloseConversation} returns this
 */
proto.api.commons.OmniCloseConversation.prototype.clearPrimaryAsmSessionSid = function() {
  return this.setPrimaryAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCloseConversation.prototype.hasPrimaryAsmSessionSid = function() {
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
proto.api.commons.OmniQueueInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniQueueInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniQueueInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniQueueInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniQueueInformation}
 */
proto.api.commons.OmniQueueInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniQueueInformation;
  return proto.api.commons.OmniQueueInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniQueueInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniQueueInformation}
 */
proto.api.commons.OmniQueueInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniQueueInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniQueueInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniQueueInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniQueueInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 position = 1;
 * @return {number}
 */
proto.api.commons.OmniQueueInformation.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.OmniQueueInformation} returns this
 */
proto.api.commons.OmniQueueInformation.prototype.setPosition = function(value) {
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
proto.api.commons.OmniRequestQueueInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniRequestQueueInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniRequestQueueInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniRequestQueueInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniRequestQueueInformation}
 */
proto.api.commons.OmniRequestQueueInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniRequestQueueInformation;
  return proto.api.commons.OmniRequestQueueInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniRequestQueueInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniRequestQueueInformation}
 */
proto.api.commons.OmniRequestQueueInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniRequestQueueInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniRequestQueueInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniRequestQueueInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniRequestQueueInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool position = 1;
 * @return {boolean}
 */
proto.api.commons.OmniRequestQueueInformation.prototype.getPosition = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.OmniRequestQueueInformation} returns this
 */
proto.api.commons.OmniRequestQueueInformation.prototype.setPosition = function(value) {
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
proto.api.commons.OmniCannedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniCannedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniCannedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCannedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    cannedMessageId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniCannedMessage}
 */
proto.api.commons.OmniCannedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniCannedMessage;
  return proto.api.commons.OmniCannedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniCannedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniCannedMessage}
 */
proto.api.commons.OmniCannedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniCannedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniCannedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniCannedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCannedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string canned_message_id = 1;
 * @return {string}
 */
proto.api.commons.OmniCannedMessage.prototype.getCannedMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCannedMessage} returns this
 */
proto.api.commons.OmniCannedMessage.prototype.setCannedMessageId = function(value) {
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
proto.api.commons.OmniConversationUserInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniConversationUserInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniConversationUserInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversationUserInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniConversationUserInformation}
 */
proto.api.commons.OmniConversationUserInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniConversationUserInformation;
  return proto.api.commons.OmniConversationUserInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniConversationUserInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniConversationUserInformation}
 */
proto.api.commons.OmniConversationUserInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
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
proto.api.commons.OmniConversationUserInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniConversationUserInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniConversationUserInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversationUserInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
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
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.commons.OmniConversationUserInformation.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversationUserInformation} returns this
 */
proto.api.commons.OmniConversationUserInformation.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.OmniConversationUserInformation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversationUserInformation} returns this
 */
proto.api.commons.OmniConversationUserInformation.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.CustomerCollectedData.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.CustomerCollectedData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.CustomerCollectedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.CustomerCollectedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CustomerCollectedData.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.api.commons.CustomerCollectedDataItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.CustomerCollectedData}
 */
proto.api.commons.CustomerCollectedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.CustomerCollectedData;
  return proto.api.commons.CustomerCollectedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.CustomerCollectedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.CustomerCollectedData}
 */
proto.api.commons.CustomerCollectedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.CustomerCollectedDataItem;
      reader.readMessage(value,proto.api.commons.CustomerCollectedDataItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.CustomerCollectedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.CustomerCollectedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.CustomerCollectedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CustomerCollectedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.CustomerCollectedDataItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerCollectedDataItem items = 1;
 * @return {!Array<!proto.api.commons.CustomerCollectedDataItem>}
 */
proto.api.commons.CustomerCollectedData.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.api.commons.CustomerCollectedDataItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.CustomerCollectedDataItem, 1));
};


/**
 * @param {!Array<!proto.api.commons.CustomerCollectedDataItem>} value
 * @return {!proto.api.commons.CustomerCollectedData} returns this
*/
proto.api.commons.CustomerCollectedData.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.CustomerCollectedDataItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.CustomerCollectedDataItem}
 */
proto.api.commons.CustomerCollectedData.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.CustomerCollectedDataItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.CustomerCollectedData} returns this
 */
proto.api.commons.CustomerCollectedData.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.CustomerCollectedDataItem.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.CustomerCollectedDataItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.CustomerCollectedDataItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CustomerCollectedDataItem.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.commons.CustomerCollectedDataItem}
 */
proto.api.commons.CustomerCollectedDataItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.CustomerCollectedDataItem;
  return proto.api.commons.CustomerCollectedDataItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.CustomerCollectedDataItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.CustomerCollectedDataItem}
 */
proto.api.commons.CustomerCollectedDataItem.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.CustomerCollectedDataItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.CustomerCollectedDataItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.CustomerCollectedDataItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.CustomerCollectedDataItem.serializeBinaryToWriter = function(message, writer) {
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
proto.api.commons.CustomerCollectedDataItem.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.CustomerCollectedDataItem} returns this
 */
proto.api.commons.CustomerCollectedDataItem.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.commons.CustomerCollectedDataItem.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.CustomerCollectedDataItem} returns this
 */
proto.api.commons.CustomerCollectedDataItem.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniConversation.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniConversation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniConversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniConversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversation.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    skills: (f = msg.getSkills()) && proto.api.commons.OmniConversationSkills.toObject(includeInstance, f),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    customerEmailAddress: (f = msg.getCustomerEmailAddress()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    customerPhoneNumber: (f = msg.getCustomerPhoneNumber()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    customerName: (f = msg.getCustomerName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    referenceId: (f = msg.getReferenceId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    lastMessageTime: (f = msg.getLastMessageTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    conversationCollectedData: (f = msg.getConversationCollectedData()) && proto.api.commons.ConversationCollectedData.toObject(includeInstance, f),
    slaTimeouts: (f = msg.getSlaTimeouts()) && proto.api.commons.SLATimeouts.toObject(includeInstance, f),
    conversationAssignmentsList: jspb.Message.toObjectList(msg.getConversationAssignmentsList(),
    proto.api.commons.OmniConversationAssignment.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && proto.api.commons.OmniConversation.ConversationDetails.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    campaignModuleSid: jspb.Message.getFieldWithDefault(msg, 19, "0"),
    lastMessageGroupTime: (f = msg.getLastMessageGroupTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastMessageGroupType: jspb.Message.getFieldWithDefault(msg, 21, 0),
    result: jspb.Message.getFieldWithDefault(msg, 22, 0),
    lastStateChangedTime: (f = msg.getLastStateChangedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniConversation}
 */
proto.api.commons.OmniConversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniConversation;
  return proto.api.commons.OmniConversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniConversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniConversation}
 */
proto.api.commons.OmniConversation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 3:
      var value = new proto.api.commons.OmniConversationSkills;
      reader.readMessage(value,proto.api.commons.OmniConversationSkills.deserializeBinaryFromReader);
      msg.setSkills(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.ConversationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerEmailAddress(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerPhoneNumber(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCustomerName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setReferenceId(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastMessageTime(value);
      break;
    case 13:
      var value = new proto.api.commons.ConversationCollectedData;
      reader.readMessage(value,proto.api.commons.ConversationCollectedData.deserializeBinaryFromReader);
      msg.setConversationCollectedData(value);
      break;
    case 14:
      var value = new proto.api.commons.SLATimeouts;
      reader.readMessage(value,proto.api.commons.SLATimeouts.deserializeBinaryFromReader);
      msg.setSlaTimeouts(value);
      break;
    case 15:
      var value = new proto.api.commons.OmniConversationAssignment;
      reader.readMessage(value,proto.api.commons.OmniConversationAssignment.deserializeBinaryFromReader);
      msg.addConversationAssignments(value);
      break;
    case 16:
      var value = new proto.api.commons.OmniConversation.ConversationDetails;
      reader.readMessage(value,proto.api.commons.OmniConversation.ConversationDetails.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignModuleSid(value);
      break;
    case 20:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastMessageGroupTime(value);
      break;
    case 21:
      var value = /** @type {!proto.api.commons.OmniSenderType} */ (reader.readEnum());
      msg.setLastMessageGroupType(value);
      break;
    case 22:
      var value = /** @type {!proto.api.commons.OmniConversationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 23:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastStateChangedTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniConversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniConversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniConversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSkills();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.OmniConversationSkills.serializeBinaryToWriter
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCustomerEmailAddress();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCustomerPhoneNumber();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCustomerName();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      10,
      f
    );
  }
  f = message.getReferenceId();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getLastMessageTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConversationCollectedData();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.commons.ConversationCollectedData.serializeBinaryToWriter
    );
  }
  f = message.getSlaTimeouts();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.api.commons.SLATimeouts.serializeBinaryToWriter
    );
  }
  f = message.getConversationAssignmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.api.commons.OmniConversationAssignment.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.api.commons.OmniConversation.ConversationDetails.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCampaignModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      19,
      f
    );
  }
  f = message.getLastMessageGroupTime();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastMessageGroupType();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getLastStateChangedTime();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniConversation.ConversationDetails.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniConversation.ConversationDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniConversation.ConversationDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversation.ConversationDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    supportEmail: jspb.Message.getFieldWithDefault(msg, 2, ""),
    campaignShortenUrl: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    paymentPortalIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniConversation.ConversationDetails}
 */
proto.api.commons.OmniConversation.ConversationDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniConversation.ConversationDetails;
  return proto.api.commons.OmniConversation.ConversationDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniConversation.ConversationDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniConversation.ConversationDetails}
 */
proto.api.commons.OmniConversation.ConversationDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCampaignName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupportEmail(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCampaignShortenUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPaymentPortalIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniConversation.ConversationDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniConversation.ConversationDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversation.ConversationDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSupportEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCampaignShortenUrl();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPaymentPortalIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string campaign_name = 1;
 * @return {string}
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.getCampaignName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversation.ConversationDetails} returns this
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.setCampaignName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string support_email = 2;
 * @return {string}
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.getSupportEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversation.ConversationDetails} returns this
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.setSupportEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool campaign_shorten_url = 3;
 * @return {boolean}
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.getCampaignShortenUrl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.OmniConversation.ConversationDetails} returns this
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.setCampaignShortenUrl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated string payment_portal_ids = 4;
 * @return {!Array<string>}
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.getPaymentPortalIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.OmniConversation.ConversationDetails} returns this
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.setPaymentPortalIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniConversation.ConversationDetails} returns this
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.addPaymentPortalIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniConversation.ConversationDetails} returns this
 */
proto.api.commons.OmniConversation.ConversationDetails.prototype.clearPaymentPortalIdsList = function() {
  return this.setPaymentPortalIdsList([]);
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniConversation.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional ChannelType channel_type = 2;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.OmniConversation.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional OmniConversationSkills skills = 3;
 * @return {?proto.api.commons.OmniConversationSkills}
 */
proto.api.commons.OmniConversation.prototype.getSkills = function() {
  return /** @type{?proto.api.commons.OmniConversationSkills} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniConversationSkills, 3));
};


/**
 * @param {?proto.api.commons.OmniConversationSkills|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setSkills = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearSkills = function() {
  return this.setSkills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasSkills = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp date_created = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniConversation.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniConversation.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ConversationStatus status = 6;
 * @return {!proto.api.commons.ConversationStatus}
 */
proto.api.commons.OmniConversation.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.ConversationStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.ConversationStatus} value
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.StringValue customer_email_address = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniConversation.prototype.getCustomerEmailAddress = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setCustomerEmailAddress = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearCustomerEmailAddress = function() {
  return this.setCustomerEmailAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasCustomerEmailAddress = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.StringValue customer_phone_number = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniConversation.prototype.getCustomerPhoneNumber = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setCustomerPhoneNumber = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearCustomerPhoneNumber = function() {
  return this.setCustomerPhoneNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasCustomerPhoneNumber = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.StringValue customer_name = 9;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniConversation.prototype.getCustomerName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 9));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setCustomerName = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearCustomerName = function() {
  return this.setCustomerName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasCustomerName = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 campaign_sid = 10;
 * @return {string}
 */
proto.api.commons.OmniConversation.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional google.protobuf.StringValue reference_id = 11;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniConversation.prototype.getReferenceId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 11));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setReferenceId = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearReferenceId = function() {
  return this.setReferenceId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasReferenceId = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp last_message_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniConversation.prototype.getLastMessageTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setLastMessageTime = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearLastMessageTime = function() {
  return this.setLastMessageTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasLastMessageTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ConversationCollectedData conversation_collected_data = 13;
 * @return {?proto.api.commons.ConversationCollectedData}
 */
proto.api.commons.OmniConversation.prototype.getConversationCollectedData = function() {
  return /** @type{?proto.api.commons.ConversationCollectedData} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ConversationCollectedData, 13));
};


/**
 * @param {?proto.api.commons.ConversationCollectedData|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setConversationCollectedData = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearConversationCollectedData = function() {
  return this.setConversationCollectedData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasConversationCollectedData = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional SLATimeouts sla_timeouts = 14;
 * @return {?proto.api.commons.SLATimeouts}
 */
proto.api.commons.OmniConversation.prototype.getSlaTimeouts = function() {
  return /** @type{?proto.api.commons.SLATimeouts} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.SLATimeouts, 14));
};


/**
 * @param {?proto.api.commons.SLATimeouts|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setSlaTimeouts = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearSlaTimeouts = function() {
  return this.setSlaTimeouts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasSlaTimeouts = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated OmniConversationAssignment conversation_assignments = 15;
 * @return {!Array<!proto.api.commons.OmniConversationAssignment>}
 */
proto.api.commons.OmniConversation.prototype.getConversationAssignmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniConversationAssignment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniConversationAssignment, 15));
};


/**
 * @param {!Array<!proto.api.commons.OmniConversationAssignment>} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setConversationAssignmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.api.commons.OmniConversationAssignment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniConversationAssignment}
 */
proto.api.commons.OmniConversation.prototype.addConversationAssignments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.api.commons.OmniConversationAssignment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearConversationAssignmentsList = function() {
  return this.setConversationAssignmentsList([]);
};


/**
 * optional ConversationDetails metadata = 16;
 * @return {?proto.api.commons.OmniConversation.ConversationDetails}
 */
proto.api.commons.OmniConversation.prototype.getMetadata = function() {
  return /** @type{?proto.api.commons.OmniConversation.ConversationDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniConversation.ConversationDetails, 16));
};


/**
 * @param {?proto.api.commons.OmniConversation.ConversationDetails|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniConversation.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int64 campaign_module_sid = 19;
 * @return {string}
 */
proto.api.commons.OmniConversation.prototype.getCampaignModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.setCampaignModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 19, value);
};


/**
 * optional google.protobuf.Timestamp last_message_group_time = 20;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniConversation.prototype.getLastMessageGroupTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 20));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setLastMessageGroupTime = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearLastMessageGroupTime = function() {
  return this.setLastMessageGroupTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasLastMessageGroupTime = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional OmniSenderType last_message_group_type = 21;
 * @return {!proto.api.commons.OmniSenderType}
 */
proto.api.commons.OmniConversation.prototype.getLastMessageGroupType = function() {
  return /** @type {!proto.api.commons.OmniSenderType} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.api.commons.OmniSenderType} value
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.setLastMessageGroupType = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * optional OmniConversationResult result = 22;
 * @return {!proto.api.commons.OmniConversationResult}
 */
proto.api.commons.OmniConversation.prototype.getResult = function() {
  return /** @type {!proto.api.commons.OmniConversationResult} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.api.commons.OmniConversationResult} value
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * optional google.protobuf.Timestamp last_state_changed_time = 23;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniConversation.prototype.getLastStateChangedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 23));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniConversation} returns this
*/
proto.api.commons.OmniConversation.prototype.setLastStateChangedTime = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversation} returns this
 */
proto.api.commons.OmniConversation.prototype.clearLastStateChangedTime = function() {
  return this.setLastStateChangedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversation.prototype.hasLastStateChangedTime = function() {
  return jspb.Message.getField(this, 23) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniConversationAssignment.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniConversationAssignment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniConversationAssignment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversationAssignment.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationAssignmentSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    conversationSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    assignmentType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    metadata: (f = msg.getMetadata()) && proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.toObject(includeInstance, f),
    asmSessionSid: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniConversationAssignment}
 */
proto.api.commons.OmniConversationAssignment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniConversationAssignment;
  return proto.api.commons.OmniConversationAssignment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniConversationAssignment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniConversationAssignment}
 */
proto.api.commons.OmniConversationAssignment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationAssignmentSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationSid(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.AgentConversationAssignmentType} */ (reader.readEnum());
      msg.setAssignmentType(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 10:
      var value = new proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails;
      reader.readMessage(value,proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAsmSessionSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniConversationAssignment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniConversationAssignment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniConversationAssignment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversationAssignment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationAssignmentSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAssignmentType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      11,
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
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    userName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails}
 */
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails;
  return proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails}
 */
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails} returns this
 */
proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 conversation_assignment_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniConversationAssignment.prototype.getConversationAssignmentSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.setConversationAssignmentSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 conversation_sid = 2;
 * @return {string}
 */
proto.api.commons.OmniConversationAssignment.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional bool is_active = 5;
 * @return {boolean}
 */
proto.api.commons.OmniConversationAssignment.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional AgentConversationAssignmentType assignment_type = 6;
 * @return {!proto.api.commons.AgentConversationAssignmentType}
 */
proto.api.commons.OmniConversationAssignment.prototype.getAssignmentType = function() {
  return /** @type {!proto.api.commons.AgentConversationAssignmentType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.AgentConversationAssignmentType} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.setAssignmentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniConversationAssignment.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
*/
proto.api.commons.OmniConversationAssignment.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversationAssignment.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniConversationAssignment.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
*/
proto.api.commons.OmniConversationAssignment.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversationAssignment.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string user_id = 9;
 * @return {string}
 */
proto.api.commons.OmniConversationAssignment.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional ConversationAssignmentDetails metadata = 10;
 * @return {?proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails}
 */
proto.api.commons.OmniConversationAssignment.prototype.getMetadata = function() {
  return /** @type{?proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails, 10));
};


/**
 * @param {?proto.api.commons.OmniConversationAssignment.ConversationAssignmentDetails|undefined} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
*/
proto.api.commons.OmniConversationAssignment.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniConversationAssignment.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 asm_session_sid = 11;
 * @return {number}
 */
proto.api.commons.OmniConversationAssignment.prototype.getAsmSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.OmniConversationAssignment} returns this
 */
proto.api.commons.OmniConversationAssignment.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniConversationSkills.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniConversationSkills.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniConversationSkills} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversationSkills.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillsMap: (f = msg.getSkillsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniConversationSkills}
 */
proto.api.commons.OmniConversationSkills.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniConversationSkills;
  return proto.api.commons.OmniConversationSkills.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniConversationSkills} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniConversationSkills}
 */
proto.api.commons.OmniConversationSkills.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSkillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
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
proto.api.commons.OmniConversationSkills.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniConversationSkills.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniConversationSkills} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniConversationSkills.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
};


/**
 * map<string, bool> skills = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api.commons.OmniConversationSkills.prototype.getSkillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.commons.OmniConversationSkills} returns this
 */
proto.api.commons.OmniConversationSkills.prototype.clearSkillsMap = function() {
  this.getSkillsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.WeekdayTimeRange.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.WeekdayTimeRange.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.WeekdayTimeRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.WeekdayTimeRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.WeekdayTimeRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.api.commons.WeekdayTimeRangeEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.WeekdayTimeRange}
 */
proto.api.commons.WeekdayTimeRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.WeekdayTimeRange;
  return proto.api.commons.WeekdayTimeRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.WeekdayTimeRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.WeekdayTimeRange}
 */
proto.api.commons.WeekdayTimeRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.WeekdayTimeRangeEntry;
      reader.readMessage(value,proto.api.commons.WeekdayTimeRangeEntry.deserializeBinaryFromReader);
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
proto.api.commons.WeekdayTimeRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.WeekdayTimeRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.WeekdayTimeRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.WeekdayTimeRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.WeekdayTimeRangeEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WeekdayTimeRangeEntry entries = 1;
 * @return {!Array<!proto.api.commons.WeekdayTimeRangeEntry>}
 */
proto.api.commons.WeekdayTimeRange.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.api.commons.WeekdayTimeRangeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.WeekdayTimeRangeEntry, 1));
};


/**
 * @param {!Array<!proto.api.commons.WeekdayTimeRangeEntry>} value
 * @return {!proto.api.commons.WeekdayTimeRange} returns this
*/
proto.api.commons.WeekdayTimeRange.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.WeekdayTimeRangeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.WeekdayTimeRangeEntry}
 */
proto.api.commons.WeekdayTimeRange.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.WeekdayTimeRangeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.WeekdayTimeRange} returns this
 */
proto.api.commons.WeekdayTimeRange.prototype.clearEntriesList = function() {
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
proto.api.commons.WeekdayTimeRangeEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.WeekdayTimeRangeEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.WeekdayTimeRangeEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.WeekdayTimeRangeEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    startDay: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startHour: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startMinute: jspb.Message.getFieldWithDefault(msg, 3, 0),
    endDay: jspb.Message.getFieldWithDefault(msg, 4, 0),
    endHour: jspb.Message.getFieldWithDefault(msg, 5, 0),
    endMinute: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.WeekdayTimeRangeEntry}
 */
proto.api.commons.WeekdayTimeRangeEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.WeekdayTimeRangeEntry;
  return proto.api.commons.WeekdayTimeRangeEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.WeekdayTimeRangeEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.WeekdayTimeRangeEntry}
 */
proto.api.commons.WeekdayTimeRangeEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.Weekday.Enum} */ (reader.readEnum());
      msg.setStartDay(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartHour(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartMinute(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.Weekday.Enum} */ (reader.readEnum());
      msg.setEndDay(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndHour(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndMinute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.WeekdayTimeRangeEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.WeekdayTimeRangeEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.WeekdayTimeRangeEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartDay();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStartHour();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStartMinute();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEndDay();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getEndHour();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getEndMinute();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional Weekday.Enum start_day = 1;
 * @return {!proto.api.commons.Weekday.Enum}
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.getStartDay = function() {
  return /** @type {!proto.api.commons.Weekday.Enum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @return {!proto.api.commons.WeekdayTimeRangeEntry} returns this
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.setStartDay = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 start_hour = 2;
 * @return {number}
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.getStartHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.WeekdayTimeRangeEntry} returns this
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.setStartHour = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 start_minute = 3;
 * @return {number}
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.getStartMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.WeekdayTimeRangeEntry} returns this
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.setStartMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Weekday.Enum end_day = 4;
 * @return {!proto.api.commons.Weekday.Enum}
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.getEndDay = function() {
  return /** @type {!proto.api.commons.Weekday.Enum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.Weekday.Enum} value
 * @return {!proto.api.commons.WeekdayTimeRangeEntry} returns this
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.setEndDay = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 end_hour = 5;
 * @return {number}
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.getEndHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.WeekdayTimeRangeEntry} returns this
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.setEndHour = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 end_minute = 6;
 * @return {number}
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.getEndMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.WeekdayTimeRangeEntry} returns this
 */
proto.api.commons.WeekdayTimeRangeEntry.prototype.setEndMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.Disposition.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.Disposition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.Disposition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.Disposition.toObject = function(includeInstance, msg) {
  var f, obj = {
    dispositionSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    disposition: jspb.Message.getFieldWithDefault(msg, 4, ""),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.Disposition}
 */
proto.api.commons.Disposition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.Disposition;
  return proto.api.commons.Disposition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.Disposition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.Disposition}
 */
proto.api.commons.Disposition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setDispositionSid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisposition(value);
      break;
    case 5:
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
proto.api.commons.Disposition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.Disposition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.Disposition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.Disposition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDispositionSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDisposition();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int64 disposition_sid = 1;
 * @return {string}
 */
proto.api.commons.Disposition.prototype.getDispositionSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.Disposition} returns this
 */
proto.api.commons.Disposition.prototype.setDispositionSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.Disposition.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.Disposition} returns this
*/
proto.api.commons.Disposition.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.Disposition} returns this
 */
proto.api.commons.Disposition.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.Disposition.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.Disposition.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.Disposition} returns this
*/
proto.api.commons.Disposition.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.Disposition} returns this
 */
proto.api.commons.Disposition.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.Disposition.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string disposition = 4;
 * @return {string}
 */
proto.api.commons.Disposition.prototype.getDisposition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.Disposition} returns this
 */
proto.api.commons.Disposition.prototype.setDisposition = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool deleted = 5;
 * @return {boolean}
 */
proto.api.commons.Disposition.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.Disposition} returns this
 */
proto.api.commons.Disposition.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.GetQueuesDetailsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.GetQueuesDetailsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.GetQueuesDetailsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.GetQueuesDetailsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.GetQueuesDetailsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    queueDetailsList: jspb.Message.toObjectList(msg.getQueueDetailsList(),
    proto.api.commons.GetQueuesDetailsRes.QueueDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.GetQueuesDetailsRes}
 */
proto.api.commons.GetQueuesDetailsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.GetQueuesDetailsRes;
  return proto.api.commons.GetQueuesDetailsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.GetQueuesDetailsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.GetQueuesDetailsRes}
 */
proto.api.commons.GetQueuesDetailsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.GetQueuesDetailsRes.QueueDetails;
      reader.readMessage(value,proto.api.commons.GetQueuesDetailsRes.QueueDetails.deserializeBinaryFromReader);
      msg.addQueueDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.GetQueuesDetailsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.GetQueuesDetailsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.GetQueuesDetailsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.GetQueuesDetailsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueueDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.GetQueuesDetailsRes.QueueDetails.serializeBinaryToWriter
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
proto.api.commons.GetQueuesDetailsRes.QueueDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.GetQueuesDetailsRes.QueueDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.GetQueuesDetailsRes.QueueDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    queuesize: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.GetQueuesDetailsRes.QueueDetails}
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.GetQueuesDetailsRes.QueueDetails;
  return proto.api.commons.GetQueuesDetailsRes.QueueDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.GetQueuesDetailsRes.QueueDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.GetQueuesDetailsRes.QueueDetails}
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQueuesize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.GetQueuesDetailsRes.QueueDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.GetQueuesDetailsRes.QueueDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getQueuesize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ChannelType channel_type = 1;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.GetQueuesDetailsRes.QueueDetails} returns this
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 queueSize = 2;
 * @return {number}
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.prototype.getQueuesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.GetQueuesDetailsRes.QueueDetails} returns this
 */
proto.api.commons.GetQueuesDetailsRes.QueueDetails.prototype.setQueuesize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated QueueDetails queue_details = 1;
 * @return {!Array<!proto.api.commons.GetQueuesDetailsRes.QueueDetails>}
 */
proto.api.commons.GetQueuesDetailsRes.prototype.getQueueDetailsList = function() {
  return /** @type{!Array<!proto.api.commons.GetQueuesDetailsRes.QueueDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.GetQueuesDetailsRes.QueueDetails, 1));
};


/**
 * @param {!Array<!proto.api.commons.GetQueuesDetailsRes.QueueDetails>} value
 * @return {!proto.api.commons.GetQueuesDetailsRes} returns this
*/
proto.api.commons.GetQueuesDetailsRes.prototype.setQueueDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.GetQueuesDetailsRes.QueueDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.GetQueuesDetailsRes.QueueDetails}
 */
proto.api.commons.GetQueuesDetailsRes.prototype.addQueueDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.GetQueuesDetailsRes.QueueDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.GetQueuesDetailsRes} returns this
 */
proto.api.commons.GetQueuesDetailsRes.prototype.clearQueueDetailsList = function() {
  return this.setQueueDetailsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniCustomUnsubscribeLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniCustomUnsubscribeLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCustomUnsubscribeLink.toObject = function(includeInstance, msg) {
  var f, obj = {
    customUnsubscribeLinkSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    linkName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    linkUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    validated: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateValidated: (f = msg.getDateValidated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink}
 */
proto.api.commons.OmniCustomUnsubscribeLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniCustomUnsubscribeLink;
  return proto.api.commons.OmniCustomUnsubscribeLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniCustomUnsubscribeLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink}
 */
proto.api.commons.OmniCustomUnsubscribeLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCustomUnsubscribeLinkSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkUrl(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidated(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateValidated(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
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
proto.api.commons.OmniCustomUnsubscribeLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniCustomUnsubscribeLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniCustomUnsubscribeLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniCustomUnsubscribeLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomUnsubscribeLinkSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getLinkName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLinkUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValidated();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateValidated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional int64 custom_unsubscribe_link_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getCustomUnsubscribeLinkSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setCustomUnsubscribeLinkSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string link_name = 2;
 * @return {string}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getLinkName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setLinkName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string link_url = 3;
 * @return {string}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getLinkUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setLinkUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool validated = 4;
 * @return {boolean}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getValidated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setValidated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
*/
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
*/
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp date_validated = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getDateValidated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
*/
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setDateValidated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.clearDateValidated = function() {
  return this.setDateValidated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.hasDateValidated = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool deleted = 10;
 * @return {boolean}
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink} returns this
 */
proto.api.commons.OmniCustomUnsubscribeLink.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.ContactList.repeatedFields_ = [4,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.ContactList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ContactList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ContactList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactList.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactListSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fieldNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    projectSid: (f = msg.getProjectSid()) && api_commons_types_pb.Int64Id.toObject(includeInstance, f),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    contactEntriesList: jspb.Message.toObjectList(msg.getContactEntriesList(),
    proto.api.commons.ContactEntry.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && proto.api.commons.ContactList.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ContactList}
 */
proto.api.commons.ContactList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ContactList;
  return proto.api.commons.ContactList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ContactList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ContactList}
 */
proto.api.commons.ContactList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setContactListSid(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.addFieldNames(value);
      break;
    case 6:
      var value = new api_commons_types_pb.Int64Id;
      reader.readMessage(value,api_commons_types_pb.Int64Id.deserializeBinaryFromReader);
      msg.setProjectSid(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 9:
      var value = new proto.api.commons.ContactEntry;
      reader.readMessage(value,proto.api.commons.ContactEntry.deserializeBinaryFromReader);
      msg.addContactEntries(value);
      break;
    case 10:
      var value = new proto.api.commons.ContactList.Metadata;
      reader.readMessage(value,proto.api.commons.ContactList.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.ContactList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ContactList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ContactList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactListSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getFieldNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getProjectSid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_types_pb.Int64Id.serializeBinaryToWriter
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContactEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.api.commons.ContactEntry.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.commons.ContactList.Metadata.serializeBinaryToWriter
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
proto.api.commons.ContactList.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ContactList.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ContactList.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactList.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    entryCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ContactList.Metadata}
 */
proto.api.commons.ContactList.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ContactList.Metadata;
  return proto.api.commons.ContactList.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ContactList.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ContactList.Metadata}
 */
proto.api.commons.ContactList.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEntryCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.ContactList.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ContactList.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ContactList.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactList.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntryCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 entry_count = 1;
 * @return {number}
 */
proto.api.commons.ContactList.Metadata.prototype.getEntryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ContactList.Metadata} returns this
 */
proto.api.commons.ContactList.Metadata.prototype.setEntryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 contact_list_sid = 1;
 * @return {string}
 */
proto.api.commons.ContactList.prototype.getContactListSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.setContactListSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.ContactList.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.ContactList.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string field_names = 4;
 * @return {!Array<string>}
 */
proto.api.commons.ContactList.prototype.getFieldNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.setFieldNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.addFieldNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.clearFieldNamesList = function() {
  return this.setFieldNamesList([]);
};


/**
 * optional Int64Id project_sid = 6;
 * @return {?proto.api.commons.Int64Id}
 */
proto.api.commons.ContactList.prototype.getProjectSid = function() {
  return /** @type{?proto.api.commons.Int64Id} */ (
    jspb.Message.getWrapperField(this, api_commons_types_pb.Int64Id, 6));
};


/**
 * @param {?proto.api.commons.Int64Id|undefined} value
 * @return {!proto.api.commons.ContactList} returns this
*/
proto.api.commons.ContactList.prototype.setProjectSid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.clearProjectSid = function() {
  return this.setProjectSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ContactList.prototype.hasProjectSid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp date_created = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ContactList.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ContactList} returns this
*/
proto.api.commons.ContactList.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ContactList.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ContactList.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ContactList} returns this
*/
proto.api.commons.ContactList.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ContactList.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated ContactEntry contact_entries = 9;
 * @return {!Array<!proto.api.commons.ContactEntry>}
 */
proto.api.commons.ContactList.prototype.getContactEntriesList = function() {
  return /** @type{!Array<!proto.api.commons.ContactEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.ContactEntry, 9));
};


/**
 * @param {!Array<!proto.api.commons.ContactEntry>} value
 * @return {!proto.api.commons.ContactList} returns this
*/
proto.api.commons.ContactList.prototype.setContactEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.ContactEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ContactEntry}
 */
proto.api.commons.ContactList.prototype.addContactEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.ContactEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.clearContactEntriesList = function() {
  return this.setContactEntriesList([]);
};


/**
 * optional Metadata metadata = 10;
 * @return {?proto.api.commons.ContactList.Metadata}
 */
proto.api.commons.ContactList.prototype.getMetadata = function() {
  return /** @type{?proto.api.commons.ContactList.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ContactList.Metadata, 10));
};


/**
 * @param {?proto.api.commons.ContactList.Metadata|undefined} value
 * @return {!proto.api.commons.ContactList} returns this
*/
proto.api.commons.ContactList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ContactList} returns this
 */
proto.api.commons.ContactList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ContactList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.ContactEntry.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.ContactEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ContactEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ContactEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactEntrySid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    contactListSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    fieldNamesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    dataFieldsList: jspb.Message.toObjectList(msg.getDataFieldsList(),
    proto.api.commons.OmniDataField.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ContactEntry}
 */
proto.api.commons.ContactEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ContactEntry;
  return proto.api.commons.ContactEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ContactEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ContactEntry}
 */
proto.api.commons.ContactEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setContactEntrySid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setContactListSid(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFieldNames(value);
      break;
    case 6:
      var value = new proto.api.commons.OmniDataField;
      reader.readMessage(value,proto.api.commons.OmniDataField.deserializeBinaryFromReader);
      msg.addDataFields(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.ContactEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ContactEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ContactEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ContactEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactEntrySid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getContactListSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFieldNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getDataFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.api.commons.OmniDataField.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 contact_entry_sid = 1;
 * @return {string}
 */
proto.api.commons.ContactEntry.prototype.getContactEntrySid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactEntry} returns this
 */
proto.api.commons.ContactEntry.prototype.setContactEntrySid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 contact_list_sid = 2;
 * @return {string}
 */
proto.api.commons.ContactEntry.prototype.getContactListSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ContactEntry} returns this
 */
proto.api.commons.ContactEntry.prototype.setContactListSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ContactEntry.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ContactEntry} returns this
*/
proto.api.commons.ContactEntry.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ContactEntry} returns this
 */
proto.api.commons.ContactEntry.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ContactEntry.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ContactEntry.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ContactEntry} returns this
*/
proto.api.commons.ContactEntry.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ContactEntry} returns this
 */
proto.api.commons.ContactEntry.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ContactEntry.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string field_names = 5;
 * @return {!Array<string>}
 */
proto.api.commons.ContactEntry.prototype.getFieldNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.ContactEntry} returns this
 */
proto.api.commons.ContactEntry.prototype.setFieldNamesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ContactEntry} returns this
 */
proto.api.commons.ContactEntry.prototype.addFieldNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ContactEntry} returns this
 */
proto.api.commons.ContactEntry.prototype.clearFieldNamesList = function() {
  return this.setFieldNamesList([]);
};


/**
 * repeated OmniDataField data_fields = 6;
 * @return {!Array<!proto.api.commons.OmniDataField>}
 */
proto.api.commons.ContactEntry.prototype.getDataFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniDataField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniDataField, 6));
};


/**
 * @param {!Array<!proto.api.commons.OmniDataField>} value
 * @return {!proto.api.commons.ContactEntry} returns this
*/
proto.api.commons.ContactEntry.prototype.setDataFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.OmniDataField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniDataField}
 */
proto.api.commons.ContactEntry.prototype.addDataFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.OmniDataField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ContactEntry} returns this
 */
proto.api.commons.ContactEntry.prototype.clearDataFieldsList = function() {
  return this.setDataFieldsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniTask.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniTask.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    campaignModuleSid: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    contactEntrySid: (f = msg.getContactEntrySid()) && api_commons_types_pb.Int64Id.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.api.commons.OmniTaskState.toObject(includeInstance, f),
    dataFieldsList: jspb.Message.toObjectList(msg.getDataFieldsList(),
    proto.api.commons.OmniDataField.toObject, includeInstance),
    details: (f = msg.getDetails()) && proto.api.commons.OmniTask.Details.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 11, ""),
    statusMessage: (f = msg.getStatusMessage()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    scheduledTime: (f = msg.getScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    taskConfig: (f = msg.getTaskConfig()) && proto.api.commons.OmniTaskConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniTask}
 */
proto.api.commons.OmniTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniTask;
  return proto.api.commons.OmniTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniTask}
 */
proto.api.commons.OmniTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTaskSid(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.OmniTaskStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignModuleSid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 7:
      var value = new api_commons_types_pb.Int64Id;
      reader.readMessage(value,api_commons_types_pb.Int64Id.deserializeBinaryFromReader);
      msg.setContactEntrySid(value);
      break;
    case 8:
      var value = new proto.api.commons.OmniTaskState;
      reader.readMessage(value,proto.api.commons.OmniTaskState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 9:
      var value = new proto.api.commons.OmniDataField;
      reader.readMessage(value,proto.api.commons.OmniDataField.deserializeBinaryFromReader);
      msg.addDataFields(value);
      break;
    case 10:
      var value = new proto.api.commons.OmniTask.Details;
      reader.readMessage(value,proto.api.commons.OmniTask.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setStatusMessage(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduledTime(value);
      break;
    case 15:
      var value = new proto.api.commons.OmniTaskConfig;
      reader.readMessage(value,proto.api.commons.OmniTaskConfig.deserializeBinaryFromReader);
      msg.setTaskConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCampaignModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
    );
  }
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      6,
      f
    );
  }
  f = message.getContactEntrySid();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_types_pb.Int64Id.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.api.commons.OmniTaskState.serializeBinaryToWriter
    );
  }
  f = message.getDataFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.api.commons.OmniDataField.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.commons.OmniTask.Details.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getStatusMessage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getScheduledTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTaskConfig();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.api.commons.OmniTaskConfig.serializeBinaryToWriter
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
proto.api.commons.OmniTask.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniTask.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniTask.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTask.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactListName: (f = msg.getContactListName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniTask.Details}
 */
proto.api.commons.OmniTask.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniTask.Details;
  return proto.api.commons.OmniTask.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniTask.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniTask.Details}
 */
proto.api.commons.OmniTask.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setContactListName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniTask.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniTask.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniTask.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTask.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactListName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue contact_list_name = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniTask.Details.prototype.getContactListName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniTask.Details} returns this
*/
proto.api.commons.OmniTask.Details.prototype.setContactListName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask.Details} returns this
 */
proto.api.commons.OmniTask.Details.prototype.clearContactListName = function() {
  return this.setContactListName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.Details.prototype.hasContactListName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 task_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniTask.prototype.getTaskSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.setTaskSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional OmniTaskStatus status = 2;
 * @return {!proto.api.commons.OmniTaskStatus}
 */
proto.api.commons.OmniTask.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.OmniTaskStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.OmniTaskStatus} value
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniTask.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniTask.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 campaign_module_sid = 5;
 * @return {string}
 */
proto.api.commons.OmniTask.prototype.getCampaignModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.setCampaignModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional int64 campaign_sid = 6;
 * @return {string}
 */
proto.api.commons.OmniTask.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional Int64Id contact_entry_sid = 7;
 * @return {?proto.api.commons.Int64Id}
 */
proto.api.commons.OmniTask.prototype.getContactEntrySid = function() {
  return /** @type{?proto.api.commons.Int64Id} */ (
    jspb.Message.getWrapperField(this, api_commons_types_pb.Int64Id, 7));
};


/**
 * @param {?proto.api.commons.Int64Id|undefined} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setContactEntrySid = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearContactEntrySid = function() {
  return this.setContactEntrySid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.prototype.hasContactEntrySid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional OmniTaskState state = 8;
 * @return {?proto.api.commons.OmniTaskState}
 */
proto.api.commons.OmniTask.prototype.getState = function() {
  return /** @type{?proto.api.commons.OmniTaskState} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniTaskState, 8));
};


/**
 * @param {?proto.api.commons.OmniTaskState|undefined} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.prototype.hasState = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated OmniDataField data_fields = 9;
 * @return {!Array<!proto.api.commons.OmniDataField>}
 */
proto.api.commons.OmniTask.prototype.getDataFieldsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniDataField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniDataField, 9));
};


/**
 * @param {!Array<!proto.api.commons.OmniDataField>} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setDataFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.OmniDataField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniDataField}
 */
proto.api.commons.OmniTask.prototype.addDataFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.OmniDataField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearDataFieldsList = function() {
  return this.setDataFieldsList([]);
};


/**
 * optional Details details = 10;
 * @return {?proto.api.commons.OmniTask.Details}
 */
proto.api.commons.OmniTask.prototype.getDetails = function() {
  return /** @type{?proto.api.commons.OmniTask.Details} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniTask.Details, 10));
};


/**
 * @param {?proto.api.commons.OmniTask.Details|undefined} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string name = 11;
 * @return {string}
 */
proto.api.commons.OmniTask.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.StringValue status_message = 12;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniTask.prototype.getStatusMessage = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 12));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setStatusMessage = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearStatusMessage = function() {
  return this.setStatusMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.prototype.hasStatusMessage = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp scheduled_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniTask.prototype.getScheduledTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setScheduledTime = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearScheduledTime = function() {
  return this.setScheduledTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.prototype.hasScheduledTime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional OmniTaskConfig task_config = 15;
 * @return {?proto.api.commons.OmniTaskConfig}
 */
proto.api.commons.OmniTask.prototype.getTaskConfig = function() {
  return /** @type{?proto.api.commons.OmniTaskConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniTaskConfig, 15));
};


/**
 * @param {?proto.api.commons.OmniTaskConfig|undefined} value
 * @return {!proto.api.commons.OmniTask} returns this
*/
proto.api.commons.OmniTask.prototype.setTaskConfig = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTask} returns this
 */
proto.api.commons.OmniTask.prototype.clearTaskConfig = function() {
  return this.setTaskConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTask.prototype.hasTaskConfig = function() {
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
proto.api.commons.OmniTaskConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniTaskConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniTaskConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTaskConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    skills: (f = msg.getSkills()) && proto.api.commons.OmniConversationSkills.toObject(includeInstance, f),
    absoluteTimeoutDuration: (f = msg.getAbsoluteTimeoutDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    agentTimeoutDuration: (f = msg.getAgentTimeoutDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    subject: jspb.Message.getFieldWithDefault(msg, 4, ""),
    message: (f = msg.getMessage()) && proto.api.commons.OmniMessagePayload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniTaskConfig}
 */
proto.api.commons.OmniTaskConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniTaskConfig;
  return proto.api.commons.OmniTaskConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniTaskConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniTaskConfig}
 */
proto.api.commons.OmniTaskConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.OmniConversationSkills;
      reader.readMessage(value,proto.api.commons.OmniConversationSkills.deserializeBinaryFromReader);
      msg.setSkills(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAbsoluteTimeoutDuration(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAgentTimeoutDuration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 5:
      var value = new proto.api.commons.OmniMessagePayload;
      reader.readMessage(value,proto.api.commons.OmniMessagePayload.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniTaskConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniTaskConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniTaskConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTaskConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkills();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.OmniConversationSkills.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteTimeoutDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAgentTimeoutDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.commons.OmniMessagePayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional OmniConversationSkills skills = 1;
 * @return {?proto.api.commons.OmniConversationSkills}
 */
proto.api.commons.OmniTaskConfig.prototype.getSkills = function() {
  return /** @type{?proto.api.commons.OmniConversationSkills} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniConversationSkills, 1));
};


/**
 * @param {?proto.api.commons.OmniConversationSkills|undefined} value
 * @return {!proto.api.commons.OmniTaskConfig} returns this
*/
proto.api.commons.OmniTaskConfig.prototype.setSkills = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTaskConfig} returns this
 */
proto.api.commons.OmniTaskConfig.prototype.clearSkills = function() {
  return this.setSkills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTaskConfig.prototype.hasSkills = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration absolute_timeout_duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.api.commons.OmniTaskConfig.prototype.getAbsoluteTimeoutDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.api.commons.OmniTaskConfig} returns this
*/
proto.api.commons.OmniTaskConfig.prototype.setAbsoluteTimeoutDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTaskConfig} returns this
 */
proto.api.commons.OmniTaskConfig.prototype.clearAbsoluteTimeoutDuration = function() {
  return this.setAbsoluteTimeoutDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTaskConfig.prototype.hasAbsoluteTimeoutDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration agent_timeout_duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.api.commons.OmniTaskConfig.prototype.getAgentTimeoutDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.api.commons.OmniTaskConfig} returns this
*/
proto.api.commons.OmniTaskConfig.prototype.setAgentTimeoutDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTaskConfig} returns this
 */
proto.api.commons.OmniTaskConfig.prototype.clearAgentTimeoutDuration = function() {
  return this.setAgentTimeoutDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTaskConfig.prototype.hasAgentTimeoutDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string subject = 4;
 * @return {string}
 */
proto.api.commons.OmniTaskConfig.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniTaskConfig} returns this
 */
proto.api.commons.OmniTaskConfig.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional OmniMessagePayload message = 5;
 * @return {?proto.api.commons.OmniMessagePayload}
 */
proto.api.commons.OmniTaskConfig.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessagePayload} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniMessagePayload, 5));
};


/**
 * @param {?proto.api.commons.OmniMessagePayload|undefined} value
 * @return {!proto.api.commons.OmniTaskConfig} returns this
*/
proto.api.commons.OmniTaskConfig.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTaskConfig} returns this
 */
proto.api.commons.OmniTaskConfig.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTaskConfig.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniTaskState.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniTaskState.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniTaskState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniTaskState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTaskState.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationsList: jspb.Message.toObjectList(msg.getDestinationsList(),
    proto.api.commons.OmniTaskState.Entry.toObject, includeInstance),
    sourcesList: jspb.Message.toObjectList(msg.getSourcesList(),
    proto.api.commons.OmniTaskState.Entry.toObject, includeInstance),
    ruleSet: (f = msg.getRuleSet()) && proto.api.commons.ComplianceRuleSet.toObject(includeInstance, f),
    scrubListId: (f = msg.getScrubListId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniTaskState}
 */
proto.api.commons.OmniTaskState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniTaskState;
  return proto.api.commons.OmniTaskState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniTaskState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniTaskState}
 */
proto.api.commons.OmniTaskState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.OmniTaskState.Entry;
      reader.readMessage(value,proto.api.commons.OmniTaskState.Entry.deserializeBinaryFromReader);
      msg.addDestinations(value);
      break;
    case 2:
      var value = new proto.api.commons.OmniTaskState.Entry;
      reader.readMessage(value,proto.api.commons.OmniTaskState.Entry.deserializeBinaryFromReader);
      msg.addSources(value);
      break;
    case 3:
      var value = new proto.api.commons.ComplianceRuleSet;
      reader.readMessage(value,proto.api.commons.ComplianceRuleSet.deserializeBinaryFromReader);
      msg.setRuleSet(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setScrubListId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniTaskState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniTaskState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniTaskState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTaskState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.commons.OmniTaskState.Entry.serializeBinaryToWriter
    );
  }
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.commons.OmniTaskState.Entry.serializeBinaryToWriter
    );
  }
  f = message.getRuleSet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.ComplianceRuleSet.serializeBinaryToWriter
    );
  }
  f = message.getScrubListId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
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
proto.api.commons.OmniTaskState.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniTaskState.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniTaskState.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTaskState.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timesUsed: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lastUsed: (f = msg.getLastUsed()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniTaskState.Entry}
 */
proto.api.commons.OmniTaskState.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniTaskState.Entry;
  return proto.api.commons.OmniTaskState.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniTaskState.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniTaskState.Entry}
 */
proto.api.commons.OmniTaskState.Entry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimesUsed(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUsed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniTaskState.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniTaskState.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniTaskState.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniTaskState.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimesUsed();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLastUsed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.api.commons.OmniTaskState.Entry.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniTaskState.Entry} returns this
 */
proto.api.commons.OmniTaskState.Entry.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 times_used = 2;
 * @return {number}
 */
proto.api.commons.OmniTaskState.Entry.prototype.getTimesUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.OmniTaskState.Entry} returns this
 */
proto.api.commons.OmniTaskState.Entry.prototype.setTimesUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp last_used = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.OmniTaskState.Entry.prototype.getLastUsed = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.OmniTaskState.Entry} returns this
*/
proto.api.commons.OmniTaskState.Entry.prototype.setLastUsed = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTaskState.Entry} returns this
 */
proto.api.commons.OmniTaskState.Entry.prototype.clearLastUsed = function() {
  return this.setLastUsed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTaskState.Entry.prototype.hasLastUsed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Entry destinations = 1;
 * @return {!Array<!proto.api.commons.OmniTaskState.Entry>}
 */
proto.api.commons.OmniTaskState.prototype.getDestinationsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniTaskState.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniTaskState.Entry, 1));
};


/**
 * @param {!Array<!proto.api.commons.OmniTaskState.Entry>} value
 * @return {!proto.api.commons.OmniTaskState} returns this
*/
proto.api.commons.OmniTaskState.prototype.setDestinationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.OmniTaskState.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniTaskState.Entry}
 */
proto.api.commons.OmniTaskState.prototype.addDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.OmniTaskState.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniTaskState} returns this
 */
proto.api.commons.OmniTaskState.prototype.clearDestinationsList = function() {
  return this.setDestinationsList([]);
};


/**
 * repeated Entry sources = 2;
 * @return {!Array<!proto.api.commons.OmniTaskState.Entry>}
 */
proto.api.commons.OmniTaskState.prototype.getSourcesList = function() {
  return /** @type{!Array<!proto.api.commons.OmniTaskState.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.OmniTaskState.Entry, 2));
};


/**
 * @param {!Array<!proto.api.commons.OmniTaskState.Entry>} value
 * @return {!proto.api.commons.OmniTaskState} returns this
*/
proto.api.commons.OmniTaskState.prototype.setSourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.OmniTaskState.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniTaskState.Entry}
 */
proto.api.commons.OmniTaskState.prototype.addSources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.OmniTaskState.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniTaskState} returns this
 */
proto.api.commons.OmniTaskState.prototype.clearSourcesList = function() {
  return this.setSourcesList([]);
};


/**
 * optional ComplianceRuleSet rule_set = 3;
 * @return {?proto.api.commons.ComplianceRuleSet}
 */
proto.api.commons.OmniTaskState.prototype.getRuleSet = function() {
  return /** @type{?proto.api.commons.ComplianceRuleSet} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ComplianceRuleSet, 3));
};


/**
 * @param {?proto.api.commons.ComplianceRuleSet|undefined} value
 * @return {!proto.api.commons.OmniTaskState} returns this
*/
proto.api.commons.OmniTaskState.prototype.setRuleSet = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTaskState} returns this
 */
proto.api.commons.OmniTaskState.prototype.clearRuleSet = function() {
  return this.setRuleSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTaskState.prototype.hasRuleSet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue scrub_list_id = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniTaskState.prototype.getScrubListId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniTaskState} returns this
*/
proto.api.commons.OmniTaskState.prototype.setScrubListId = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniTaskState} returns this
 */
proto.api.commons.OmniTaskState.prototype.clearScrubListId = function() {
  return this.setScrubListId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniTaskState.prototype.hasScrubListId = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.ComplianceRuleSet.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.ComplianceRuleSet.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ComplianceRuleSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ComplianceRuleSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ComplianceRuleSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sha: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.api.commons.ComplianceRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ComplianceRuleSet}
 */
proto.api.commons.ComplianceRuleSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ComplianceRuleSet;
  return proto.api.commons.ComplianceRuleSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ComplianceRuleSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ComplianceRuleSet}
 */
proto.api.commons.ComplianceRuleSet.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSha(value);
      break;
    case 4:
      var value = new proto.api.commons.ComplianceRule;
      reader.readMessage(value,proto.api.commons.ComplianceRule.deserializeBinaryFromReader);
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
proto.api.commons.ComplianceRuleSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ComplianceRuleSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ComplianceRuleSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ComplianceRuleSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
  f = message.getSha();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.commons.ComplianceRule.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.api.commons.ComplianceRuleSet.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ComplianceRuleSet} returns this
 */
proto.api.commons.ComplianceRuleSet.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.ComplianceRuleSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ComplianceRuleSet} returns this
 */
proto.api.commons.ComplianceRuleSet.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sha = 3;
 * @return {string}
 */
proto.api.commons.ComplianceRuleSet.prototype.getSha = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ComplianceRuleSet} returns this
 */
proto.api.commons.ComplianceRuleSet.prototype.setSha = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ComplianceRule rules = 4;
 * @return {!Array<!proto.api.commons.ComplianceRule>}
 */
proto.api.commons.ComplianceRuleSet.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.api.commons.ComplianceRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.commons.ComplianceRule, 4));
};


/**
 * @param {!Array<!proto.api.commons.ComplianceRule>} value
 * @return {!proto.api.commons.ComplianceRuleSet} returns this
*/
proto.api.commons.ComplianceRuleSet.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.commons.ComplianceRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ComplianceRule}
 */
proto.api.commons.ComplianceRuleSet.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.commons.ComplianceRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.ComplianceRuleSet} returns this
 */
proto.api.commons.ComplianceRuleSet.prototype.clearRulesList = function() {
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
proto.api.commons.ComplianceRule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ComplianceRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ComplianceRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ComplianceRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.api.commons.ComplianceRule}
 */
proto.api.commons.ComplianceRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ComplianceRule;
  return proto.api.commons.ComplianceRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ComplianceRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ComplianceRule}
 */
proto.api.commons.ComplianceRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.api.commons.ComplianceRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ComplianceRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ComplianceRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ComplianceRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
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
 * optional string text = 1;
 * @return {string}
 */
proto.api.commons.ComplianceRule.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ComplianceRule} returns this
 */
proto.api.commons.ComplianceRule.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool permit = 2;
 * @return {boolean}
 */
proto.api.commons.ComplianceRule.prototype.getPermit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.ComplianceRule} returns this
 */
proto.api.commons.ComplianceRule.prototype.setPermit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string plugin_response = 3;
 * @return {string}
 */
proto.api.commons.ComplianceRule.prototype.getPluginResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ComplianceRule} returns this
 */
proto.api.commons.ComplianceRule.prototype.setPluginResponse = function(value) {
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
proto.api.commons.OmniDataField.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniDataField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniDataField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniDataField.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    parentSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniDataField}
 */
proto.api.commons.OmniDataField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniDataField;
  return proto.api.commons.OmniDataField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniDataField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniDataField}
 */
proto.api.commons.OmniDataField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setFieldSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setParentSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.FieldType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniDataField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniDataField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniDataField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniDataField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getParentSid();
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
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional int64 field_sid = 1;
 * @return {string}
 */
proto.api.commons.OmniDataField.prototype.getFieldSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniDataField} returns this
 */
proto.api.commons.OmniDataField.prototype.setFieldSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 parent_sid = 2;
 * @return {string}
 */
proto.api.commons.OmniDataField.prototype.getParentSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniDataField} returns this
 */
proto.api.commons.OmniDataField.prototype.setParentSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.commons.OmniDataField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniDataField} returns this
 */
proto.api.commons.OmniDataField.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string value = 4;
 * @return {string}
 */
proto.api.commons.OmniDataField.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniDataField} returns this
 */
proto.api.commons.OmniDataField.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional FieldType type = 5;
 * @return {!proto.api.commons.FieldType}
 */
proto.api.commons.OmniDataField.prototype.getType = function() {
  return /** @type {!proto.api.commons.FieldType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.FieldType} value
 * @return {!proto.api.commons.OmniDataField} returns this
 */
proto.api.commons.OmniDataField.prototype.setType = function(value) {
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
proto.api.commons.ConnectedInbox.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ConnectedInbox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ConnectedInbox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConnectedInbox.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectedInboxSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    emailAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    username: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    checkFrequencyMinutes: jspb.Message.getFieldWithDefault(msg, 5, 0),
    serverName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    serverPort: jspb.Message.getFieldWithDefault(msg, 7, 0),
    lastScheduledTime: (f = msg.getLastScheduledTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastChecked: (f = msg.getLastChecked()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    purgeThreshold: jspb.Message.getFieldWithDefault(msg, 10, 0),
    emailSalt: jspb.Message.getFieldWithDefault(msg, 11, ""),
    numConsecutiveFailures: jspb.Message.getFieldWithDefault(msg, 12, 0),
    lastError: (f = msg.getLastError()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    standbyErrorTime: (f = msg.getStandbyErrorTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    maxMessageSize: jspb.Message.getFieldWithDefault(msg, 16, 0),
    maxMessages: jspb.Message.getFieldWithDefault(msg, 17, 0),
    googleXoauth2RefreshToken: (f = msg.getGoogleXoauth2RefreshToken()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    googleXoauth2AccessToken: (f = msg.getGoogleXoauth2AccessToken()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    googleXoauth2AccessTokenExpiration: (f = msg.getGoogleXoauth2AccessTokenExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    authenticationType: jspb.Message.getFieldWithDefault(msg, 21, 0),
    oauthReferenceId: (f = msg.getOauthReferenceId()) && proto.api.commons.ConnectedInboxOAuthConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ConnectedInbox}
 */
proto.api.commons.ConnectedInbox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ConnectedInbox;
  return proto.api.commons.ConnectedInbox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ConnectedInbox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ConnectedInbox}
 */
proto.api.commons.ConnectedInbox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConnectedInboxSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCheckFrequencyMinutes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerName(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setServerPort(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastScheduledTime(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastChecked(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurgeThreshold(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailSalt(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumConsecutiveFailures(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setLastError(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStandbyErrorTime(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxMessageSize(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxMessages(value);
      break;
    case 18:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGoogleXoauth2RefreshToken(value);
      break;
    case 19:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGoogleXoauth2AccessToken(value);
      break;
    case 20:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setGoogleXoauth2AccessTokenExpiration(value);
      break;
    case 21:
      var value = /** @type {!proto.api.commons.ConnectedInboxAuthenticationType} */ (reader.readEnum());
      msg.setAuthenticationType(value);
      break;
    case 22:
      var value = new proto.api.commons.ConnectedInboxOAuthConfig;
      reader.readMessage(value,proto.api.commons.ConnectedInboxOAuthConfig.deserializeBinaryFromReader);
      msg.setOauthReferenceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.ConnectedInbox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ConnectedInbox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ConnectedInbox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConnectedInbox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectedInboxSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCheckFrequencyMinutes();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getServerName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getServerPort();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getLastScheduledTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastChecked();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPurgeThreshold();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getEmailSalt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getNumConsecutiveFailures();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getLastError();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getStandbyErrorTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMaxMessageSize();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getMaxMessages();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getGoogleXoauth2RefreshToken();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGoogleXoauth2AccessToken();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGoogleXoauth2AccessTokenExpiration();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuthenticationType();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getOauthReferenceId();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.api.commons.ConnectedInboxOAuthConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 connected_inbox_sid = 1;
 * @return {string}
 */
proto.api.commons.ConnectedInbox.prototype.getConnectedInboxSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setConnectedInboxSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string email_address = 2;
 * @return {string}
 */
proto.api.commons.ConnectedInbox.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setEmailAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string username = 3;
 * @return {string}
 */
proto.api.commons.ConnectedInbox.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.api.commons.ConnectedInbox.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 check_frequency_minutes = 5;
 * @return {number}
 */
proto.api.commons.ConnectedInbox.prototype.getCheckFrequencyMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setCheckFrequencyMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string server_name = 6;
 * @return {string}
 */
proto.api.commons.ConnectedInbox.prototype.getServerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setServerName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 server_port = 7;
 * @return {number}
 */
proto.api.commons.ConnectedInbox.prototype.getServerPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setServerPort = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp last_scheduled_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ConnectedInbox.prototype.getLastScheduledTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setLastScheduledTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearLastScheduledTime = function() {
  return this.setLastScheduledTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasLastScheduledTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp last_checked = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ConnectedInbox.prototype.getLastChecked = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setLastChecked = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearLastChecked = function() {
  return this.setLastChecked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasLastChecked = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 purge_threshold = 10;
 * @return {number}
 */
proto.api.commons.ConnectedInbox.prototype.getPurgeThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setPurgeThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string email_salt = 11;
 * @return {string}
 */
proto.api.commons.ConnectedInbox.prototype.getEmailSalt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setEmailSalt = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 num_consecutive_failures = 12;
 * @return {number}
 */
proto.api.commons.ConnectedInbox.prototype.getNumConsecutiveFailures = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setNumConsecutiveFailures = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional google.protobuf.StringValue last_error = 13;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.ConnectedInbox.prototype.getLastError = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 13));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setLastError = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearLastError = function() {
  return this.setLastError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasLastError = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp standby_error_time = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ConnectedInbox.prototype.getStandbyErrorTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setStandbyErrorTime = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearStandbyErrorTime = function() {
  return this.setStandbyErrorTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasStandbyErrorTime = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ConnectedInbox.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 max_message_size = 16;
 * @return {number}
 */
proto.api.commons.ConnectedInbox.prototype.getMaxMessageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setMaxMessageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 max_messages = 17;
 * @return {number}
 */
proto.api.commons.ConnectedInbox.prototype.getMaxMessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setMaxMessages = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional google.protobuf.StringValue google_xoauth2_refresh_token = 18;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.ConnectedInbox.prototype.getGoogleXoauth2RefreshToken = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 18));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setGoogleXoauth2RefreshToken = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearGoogleXoauth2RefreshToken = function() {
  return this.setGoogleXoauth2RefreshToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasGoogleXoauth2RefreshToken = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.StringValue google_xoauth2_access_token = 19;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.ConnectedInbox.prototype.getGoogleXoauth2AccessToken = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 19));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setGoogleXoauth2AccessToken = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearGoogleXoauth2AccessToken = function() {
  return this.setGoogleXoauth2AccessToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasGoogleXoauth2AccessToken = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional google.protobuf.Timestamp google_xoauth2_access_token_expiration = 20;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.ConnectedInbox.prototype.getGoogleXoauth2AccessTokenExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 20));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setGoogleXoauth2AccessTokenExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearGoogleXoauth2AccessTokenExpiration = function() {
  return this.setGoogleXoauth2AccessTokenExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasGoogleXoauth2AccessTokenExpiration = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ConnectedInboxAuthenticationType authentication_type = 21;
 * @return {!proto.api.commons.ConnectedInboxAuthenticationType}
 */
proto.api.commons.ConnectedInbox.prototype.getAuthenticationType = function() {
  return /** @type {!proto.api.commons.ConnectedInboxAuthenticationType} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.api.commons.ConnectedInboxAuthenticationType} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.setAuthenticationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * optional ConnectedInboxOAuthConfig oauth_reference_id = 22;
 * @return {?proto.api.commons.ConnectedInboxOAuthConfig}
 */
proto.api.commons.ConnectedInbox.prototype.getOauthReferenceId = function() {
  return /** @type{?proto.api.commons.ConnectedInboxOAuthConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.ConnectedInboxOAuthConfig, 22));
};


/**
 * @param {?proto.api.commons.ConnectedInboxOAuthConfig|undefined} value
 * @return {!proto.api.commons.ConnectedInbox} returns this
*/
proto.api.commons.ConnectedInbox.prototype.setOauthReferenceId = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.ConnectedInbox} returns this
 */
proto.api.commons.ConnectedInbox.prototype.clearOauthReferenceId = function() {
  return this.setOauthReferenceId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.ConnectedInbox.prototype.hasOauthReferenceId = function() {
  return jspb.Message.getField(this, 22) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.ConnectedInboxOAuthConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.ConnectedInboxOAuthConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConnectedInboxOAuthConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refreshToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    expiresAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    referenceId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.ConnectedInboxOAuthConfig}
 */
proto.api.commons.ConnectedInboxOAuthConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.ConnectedInboxOAuthConfig;
  return proto.api.commons.ConnectedInboxOAuthConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.ConnectedInboxOAuthConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.ConnectedInboxOAuthConfig}
 */
proto.api.commons.ConnectedInboxOAuthConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiresAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.ConnectedInboxOAuthConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.ConnectedInboxOAuthConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.ConnectedInboxOAuthConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpiresAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string access_token = 1;
 * @return {string}
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInboxOAuthConfig} returns this
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_token = 2;
 * @return {string}
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.getRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInboxOAuthConfig} returns this
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.setRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 expires_at = 3;
 * @return {number}
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.getExpiresAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.ConnectedInboxOAuthConfig} returns this
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.setExpiresAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string reference_id = 4;
 * @return {string}
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.ConnectedInboxOAuthConfig} returns this
 */
proto.api.commons.ConnectedInboxOAuthConfig.prototype.setReferenceId = function(value) {
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
proto.api.commons.VerifiedEmail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.VerifiedEmail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.VerifiedEmail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.VerifiedEmail.toObject = function(includeInstance, msg) {
  var f, obj = {
    verifiedEmailSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    emailAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    verifiedOn: (f = msg.getVerifiedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    description: (f = msg.getDescription()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.VerifiedEmail}
 */
proto.api.commons.VerifiedEmail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.VerifiedEmail;
  return proto.api.commons.VerifiedEmail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.VerifiedEmail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.VerifiedEmail}
 */
proto.api.commons.VerifiedEmail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setVerifiedEmailSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAddress(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setVerifiedOn(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
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
proto.api.commons.VerifiedEmail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.VerifiedEmail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.VerifiedEmail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.VerifiedEmail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerifiedEmailSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVerifiedOn();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 verified_email_sid = 1;
 * @return {string}
 */
proto.api.commons.VerifiedEmail.prototype.getVerifiedEmailSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.VerifiedEmail} returns this
 */
proto.api.commons.VerifiedEmail.prototype.setVerifiedEmailSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string email_address = 3;
 * @return {string}
 */
proto.api.commons.VerifiedEmail.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.VerifiedEmail} returns this
 */
proto.api.commons.VerifiedEmail.prototype.setEmailAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool verified = 4;
 * @return {boolean}
 */
proto.api.commons.VerifiedEmail.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.VerifiedEmail} returns this
 */
proto.api.commons.VerifiedEmail.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.VerifiedEmail.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.VerifiedEmail} returns this
*/
proto.api.commons.VerifiedEmail.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.VerifiedEmail} returns this
 */
proto.api.commons.VerifiedEmail.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.VerifiedEmail.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp verified_on = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.VerifiedEmail.prototype.getVerifiedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.VerifiedEmail} returns this
*/
proto.api.commons.VerifiedEmail.prototype.setVerifiedOn = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.VerifiedEmail} returns this
 */
proto.api.commons.VerifiedEmail.prototype.clearVerifiedOn = function() {
  return this.setVerifiedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.VerifiedEmail.prototype.hasVerifiedOn = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool deleted = 7;
 * @return {boolean}
 */
proto.api.commons.VerifiedEmail.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.commons.VerifiedEmail} returns this
 */
proto.api.commons.VerifiedEmail.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional google.protobuf.StringValue description = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.VerifiedEmail.prototype.getDescription = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.VerifiedEmail} returns this
*/
proto.api.commons.VerifiedEmail.prototype.setDescription = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.VerifiedEmail} returns this
 */
proto.api.commons.VerifiedEmail.prototype.clearDescription = function() {
  return this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.VerifiedEmail.prototype.hasDescription = function() {
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
proto.api.commons.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    signatureSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    signature: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deletedOn: (f = msg.getDeletedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    description: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.Signature}
 */
proto.api.commons.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.Signature;
  return proto.api.commons.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.Signature}
 */
proto.api.commons.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSignatureSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletedOn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
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
proto.api.commons.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignatureSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
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
};


/**
 * optional int64 signature_sid = 1;
 * @return {string}
 */
proto.api.commons.Signature.prototype.getSignatureSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.Signature} returns this
 */
proto.api.commons.Signature.prototype.setSignatureSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.api.commons.Signature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.Signature} returns this
 */
proto.api.commons.Signature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.Signature.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.Signature} returns this
*/
proto.api.commons.Signature.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.Signature} returns this
 */
proto.api.commons.Signature.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.Signature.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.Signature.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.Signature} returns this
*/
proto.api.commons.Signature.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.Signature} returns this
 */
proto.api.commons.Signature.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.Signature.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp deleted_on = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.Signature.prototype.getDeletedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.Signature} returns this
*/
proto.api.commons.Signature.prototype.setDeletedOn = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.Signature} returns this
 */
proto.api.commons.Signature.prototype.clearDeletedOn = function() {
  return this.setDeletedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.Signature.prototype.hasDeletedOn = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.api.commons.Signature.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.Signature} returns this
 */
proto.api.commons.Signature.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.api.commons.Signature.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.Signature} returns this
 */
proto.api.commons.Signature.prototype.setDescription = function(value) {
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
proto.api.commons.OmniProjectComplianceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniProjectComplianceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniProjectComplianceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniProjectComplianceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: (f = msg.getEmail()) && proto.api.commons.OmniComplianceConfig.toObject(includeInstance, f),
    sms: (f = msg.getSms()) && proto.api.commons.OmniComplianceConfig.toObject(includeInstance, f),
    whatsapp: (f = msg.getWhatsapp()) && proto.api.commons.OmniComplianceConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniProjectComplianceConfig}
 */
proto.api.commons.OmniProjectComplianceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniProjectComplianceConfig;
  return proto.api.commons.OmniProjectComplianceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniProjectComplianceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniProjectComplianceConfig}
 */
proto.api.commons.OmniProjectComplianceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.OmniComplianceConfig;
      reader.readMessage(value,proto.api.commons.OmniComplianceConfig.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 2:
      var value = new proto.api.commons.OmniComplianceConfig;
      reader.readMessage(value,proto.api.commons.OmniComplianceConfig.deserializeBinaryFromReader);
      msg.setSms(value);
      break;
    case 3:
      var value = new proto.api.commons.OmniComplianceConfig;
      reader.readMessage(value,proto.api.commons.OmniComplianceConfig.deserializeBinaryFromReader);
      msg.setWhatsapp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniProjectComplianceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniProjectComplianceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniProjectComplianceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.OmniComplianceConfig.serializeBinaryToWriter
    );
  }
  f = message.getSms();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.OmniComplianceConfig.serializeBinaryToWriter
    );
  }
  f = message.getWhatsapp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.OmniComplianceConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional OmniComplianceConfig email = 1;
 * @return {?proto.api.commons.OmniComplianceConfig}
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.getEmail = function() {
  return /** @type{?proto.api.commons.OmniComplianceConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniComplianceConfig, 1));
};


/**
 * @param {?proto.api.commons.OmniComplianceConfig|undefined} value
 * @return {!proto.api.commons.OmniProjectComplianceConfig} returns this
*/
proto.api.commons.OmniProjectComplianceConfig.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniProjectComplianceConfig} returns this
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OmniComplianceConfig sms = 2;
 * @return {?proto.api.commons.OmniComplianceConfig}
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.getSms = function() {
  return /** @type{?proto.api.commons.OmniComplianceConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniComplianceConfig, 2));
};


/**
 * @param {?proto.api.commons.OmniComplianceConfig|undefined} value
 * @return {!proto.api.commons.OmniProjectComplianceConfig} returns this
*/
proto.api.commons.OmniProjectComplianceConfig.prototype.setSms = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniProjectComplianceConfig} returns this
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.clearSms = function() {
  return this.setSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.hasSms = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OmniComplianceConfig whatsapp = 3;
 * @return {?proto.api.commons.OmniComplianceConfig}
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.getWhatsapp = function() {
  return /** @type{?proto.api.commons.OmniComplianceConfig} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniComplianceConfig, 3));
};


/**
 * @param {?proto.api.commons.OmniComplianceConfig|undefined} value
 * @return {!proto.api.commons.OmniProjectComplianceConfig} returns this
*/
proto.api.commons.OmniProjectComplianceConfig.prototype.setWhatsapp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniProjectComplianceConfig} returns this
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.clearWhatsapp = function() {
  return this.setWhatsapp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniProjectComplianceConfig.prototype.hasWhatsapp = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.commons.OmniComplianceAction.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.OmniComplianceAction.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniComplianceAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniComplianceAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniComplianceAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    keywordsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    confirmationMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniComplianceAction}
 */
proto.api.commons.OmniComplianceAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniComplianceAction;
  return proto.api.commons.OmniComplianceAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniComplianceAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniComplianceAction}
 */
proto.api.commons.OmniComplianceAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeywords(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfirmationMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.OmniComplianceAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniComplianceAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniComplianceAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniComplianceAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeywordsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getConfirmationMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string keywords = 1;
 * @return {!Array<string>}
 */
proto.api.commons.OmniComplianceAction.prototype.getKeywordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.commons.OmniComplianceAction} returns this
 */
proto.api.commons.OmniComplianceAction.prototype.setKeywordsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniComplianceAction} returns this
 */
proto.api.commons.OmniComplianceAction.prototype.addKeywords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.commons.OmniComplianceAction} returns this
 */
proto.api.commons.OmniComplianceAction.prototype.clearKeywordsList = function() {
  return this.setKeywordsList([]);
};


/**
 * optional string confirmation_message = 2;
 * @return {string}
 */
proto.api.commons.OmniComplianceAction.prototype.getConfirmationMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniComplianceAction} returns this
 */
proto.api.commons.OmniComplianceAction.prototype.setConfirmationMessage = function(value) {
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
proto.api.commons.OmniComplianceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.OmniComplianceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.OmniComplianceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniComplianceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    optIn: (f = msg.getOptIn()) && proto.api.commons.OmniComplianceAction.toObject(includeInstance, f),
    optOut: (f = msg.getOptOut()) && proto.api.commons.OmniComplianceAction.toObject(includeInstance, f),
    help: (f = msg.getHelp()) && proto.api.commons.OmniComplianceAction.toObject(includeInstance, f),
    information: (f = msg.getInformation()) && proto.api.commons.OmniComplianceAction.toObject(includeInstance, f),
    scrubListId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    ruleSetId: (f = msg.getRuleSetId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.OmniComplianceConfig}
 */
proto.api.commons.OmniComplianceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.OmniComplianceConfig;
  return proto.api.commons.OmniComplianceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.OmniComplianceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.OmniComplianceConfig}
 */
proto.api.commons.OmniComplianceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.commons.OmniComplianceAction;
      reader.readMessage(value,proto.api.commons.OmniComplianceAction.deserializeBinaryFromReader);
      msg.setOptIn(value);
      break;
    case 2:
      var value = new proto.api.commons.OmniComplianceAction;
      reader.readMessage(value,proto.api.commons.OmniComplianceAction.deserializeBinaryFromReader);
      msg.setOptOut(value);
      break;
    case 3:
      var value = new proto.api.commons.OmniComplianceAction;
      reader.readMessage(value,proto.api.commons.OmniComplianceAction.deserializeBinaryFromReader);
      msg.setHelp(value);
      break;
    case 4:
      var value = new proto.api.commons.OmniComplianceAction;
      reader.readMessage(value,proto.api.commons.OmniComplianceAction.deserializeBinaryFromReader);
      msg.setInformation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setScrubListId(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
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
proto.api.commons.OmniComplianceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.OmniComplianceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.OmniComplianceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.OmniComplianceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptIn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.commons.OmniComplianceAction.serializeBinaryToWriter
    );
  }
  f = message.getOptOut();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.commons.OmniComplianceAction.serializeBinaryToWriter
    );
  }
  f = message.getHelp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.commons.OmniComplianceAction.serializeBinaryToWriter
    );
  }
  f = message.getInformation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.commons.OmniComplianceAction.serializeBinaryToWriter
    );
  }
  f = message.getScrubListId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRuleSetId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional OmniComplianceAction opt_in = 1;
 * @return {?proto.api.commons.OmniComplianceAction}
 */
proto.api.commons.OmniComplianceConfig.prototype.getOptIn = function() {
  return /** @type{?proto.api.commons.OmniComplianceAction} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniComplianceAction, 1));
};


/**
 * @param {?proto.api.commons.OmniComplianceAction|undefined} value
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
*/
proto.api.commons.OmniComplianceConfig.prototype.setOptIn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
 */
proto.api.commons.OmniComplianceConfig.prototype.clearOptIn = function() {
  return this.setOptIn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniComplianceConfig.prototype.hasOptIn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OmniComplianceAction opt_out = 2;
 * @return {?proto.api.commons.OmniComplianceAction}
 */
proto.api.commons.OmniComplianceConfig.prototype.getOptOut = function() {
  return /** @type{?proto.api.commons.OmniComplianceAction} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniComplianceAction, 2));
};


/**
 * @param {?proto.api.commons.OmniComplianceAction|undefined} value
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
*/
proto.api.commons.OmniComplianceConfig.prototype.setOptOut = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
 */
proto.api.commons.OmniComplianceConfig.prototype.clearOptOut = function() {
  return this.setOptOut(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniComplianceConfig.prototype.hasOptOut = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OmniComplianceAction help = 3;
 * @return {?proto.api.commons.OmniComplianceAction}
 */
proto.api.commons.OmniComplianceConfig.prototype.getHelp = function() {
  return /** @type{?proto.api.commons.OmniComplianceAction} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniComplianceAction, 3));
};


/**
 * @param {?proto.api.commons.OmniComplianceAction|undefined} value
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
*/
proto.api.commons.OmniComplianceConfig.prototype.setHelp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
 */
proto.api.commons.OmniComplianceConfig.prototype.clearHelp = function() {
  return this.setHelp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniComplianceConfig.prototype.hasHelp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OmniComplianceAction information = 4;
 * @return {?proto.api.commons.OmniComplianceAction}
 */
proto.api.commons.OmniComplianceConfig.prototype.getInformation = function() {
  return /** @type{?proto.api.commons.OmniComplianceAction} */ (
    jspb.Message.getWrapperField(this, proto.api.commons.OmniComplianceAction, 4));
};


/**
 * @param {?proto.api.commons.OmniComplianceAction|undefined} value
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
*/
proto.api.commons.OmniComplianceConfig.prototype.setInformation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
 */
proto.api.commons.OmniComplianceConfig.prototype.clearInformation = function() {
  return this.setInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniComplianceConfig.prototype.hasInformation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string scrub_list_id = 5;
 * @return {string}
 */
proto.api.commons.OmniComplianceConfig.prototype.getScrubListId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
 */
proto.api.commons.OmniComplianceConfig.prototype.setScrubListId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.StringValue rule_set_id = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.commons.OmniComplianceConfig.prototype.getRuleSetId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
*/
proto.api.commons.OmniComplianceConfig.prototype.setRuleSetId = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.OmniComplianceConfig} returns this
 */
proto.api.commons.OmniComplianceConfig.prototype.clearRuleSetId = function() {
  return this.setRuleSetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.OmniComplianceConfig.prototype.hasRuleSetId = function() {
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
proto.api.commons.WhatsAppNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.WhatsAppNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.WhatsAppNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.WhatsAppNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: jspb.Message.getFieldWithDefault(msg, 1, ""),
    provider: jspb.Message.getFieldWithDefault(msg, 2, 0),
    countryCode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    whatsappNumberSid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    displayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateModified: (f = msg.getDateModified()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.WhatsAppNumber}
 */
proto.api.commons.WhatsAppNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.WhatsAppNumber;
  return proto.api.commons.WhatsAppNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.WhatsAppNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.WhatsAppNumber}
 */
proto.api.commons.WhatsAppNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {!proto.api.commons.WhatsAppNumberProvider} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountryCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setWhatsappNumberSid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateModified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.WhatsAppNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.WhatsAppNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.WhatsAppNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.WhatsAppNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCountryCode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWhatsappNumberSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
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
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateModified();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string number = 1;
 * @return {string}
 */
proto.api.commons.WhatsAppNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.WhatsAppNumber} returns this
 */
proto.api.commons.WhatsAppNumber.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional WhatsAppNumberProvider provider = 2;
 * @return {!proto.api.commons.WhatsAppNumberProvider}
 */
proto.api.commons.WhatsAppNumber.prototype.getProvider = function() {
  return /** @type {!proto.api.commons.WhatsAppNumberProvider} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.WhatsAppNumberProvider} value
 * @return {!proto.api.commons.WhatsAppNumber} returns this
 */
proto.api.commons.WhatsAppNumber.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 country_code = 3;
 * @return {number}
 */
proto.api.commons.WhatsAppNumber.prototype.getCountryCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.WhatsAppNumber} returns this
 */
proto.api.commons.WhatsAppNumber.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 whatsapp_number_sid = 4;
 * @return {string}
 */
proto.api.commons.WhatsAppNumber.prototype.getWhatsappNumberSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.WhatsAppNumber} returns this
 */
proto.api.commons.WhatsAppNumber.prototype.setWhatsappNumberSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional string display_name = 5;
 * @return {string}
 */
proto.api.commons.WhatsAppNumber.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.WhatsAppNumber} returns this
 */
proto.api.commons.WhatsAppNumber.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.WhatsAppNumber.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.WhatsAppNumber} returns this
*/
proto.api.commons.WhatsAppNumber.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.WhatsAppNumber} returns this
 */
proto.api.commons.WhatsAppNumber.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.WhatsAppNumber.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp date_modified = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.commons.WhatsAppNumber.prototype.getDateModified = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.commons.WhatsAppNumber} returns this
*/
proto.api.commons.WhatsAppNumber.prototype.setDateModified = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.WhatsAppNumber} returns this
 */
proto.api.commons.WhatsAppNumber.prototype.clearDateModified = function() {
  return this.setDateModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.WhatsAppNumber.prototype.hasDateModified = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * @enum {number}
 */
proto.api.commons.SmsNumberType = {
  SMS_SHORT_CODE_TYPE: 0,
  SMS_ALPHANUMERIC_TYPE: 1,
  SMS_NUMBER_TYPE: 2
};

/**
 * @enum {number}
 */
proto.api.commons.SmsNumberProvider = {
  UNKNOWN_PROVIDER: 0,
  BANDWIDTH_PROVIDER: 1,
  BURST_SMS_PROVIDER: 2,
  PLIVO_PROVIDER: 3,
  APEIRON_PROVIDER: 4,
  AUSBURST_SMS_PROVIDER: 5,
  MEDIASAT_SMS_PROVIDER: 6,
  TEXTLOCAL_SMS_PROVIDER: 7
};

/**
 * @enum {number}
 */
proto.api.commons.OmniCampaignModuleType = {
  MODULE_TYPE_INBOUND: 0,
  MODULE_TYPE_OUTBOUND: 1,
  MODULE_TYPE_MANUAL_APPROVAL: 2,
  MODULE_TYPE_MANUAL: 3
};

/**
 * @enum {number}
 */
proto.api.commons.ChannelType = {
  CHANNEL_TYPE_EMAIL: 0,
  CHANNEL_TYPE_SMS: 1,
  CHANNEL_TYPE_CHAT: 2,
  CHANNEL_TYPE_VOICE: 3,
  CHANNEL_TYPE_WHATSAPP: 4
};

/**
 * @enum {number}
 */
proto.api.commons.OmniCampaignDirection = {
  INBOUND: 0,
  OUTBOUND: 1
};

/**
 * @enum {number}
 */
proto.api.commons.OmniCampaignStatus = {
  SCHEDULING: 0,
  RUNNING: 200,
  PAUSED: 400,
  COMPLETED: 600,
  ARCHIVED: 800
};

/**
 * @enum {number}
 */
proto.api.commons.OmniCampaignModuleStatus = {
  MODULE_PREPARING: 0,
  MODULE_SCHEDULING: 100,
  MODULE_RUNNING: 200,
  MODULE_RUNNING_ERROR: 250,
  MODULE_ERROR_STANDBY: 300,
  MODULE_PAUSED: 400,
  MODULE_RESUMING: 500,
  MODULE_COMPLETED: 600,
  MODULE_ARCHIVED: 700
};

/**
 * @enum {number}
 */
proto.api.commons.ConversationStatus = {
  CONVERSATION_STATUS_NEW: 0,
  CONVERSATION_STATUS_AWAITING_REPLY_FROM_CUSTOMER: 1,
  CONVERSATION_STATUS_AWAITING_REPLY_FROM_AGENT: 2,
  CONVERSATION_STATUS_CLOSED_TIMEOUT: 3,
  CONVERSATION_STATUS_CLOSED_AGENT: 4,
  CONVERSATION_STATUS_CLOSED_CUSTOMER: 5,
  CONVERSATION_STATUS_SUSPENDED_AWAITING_REPLY_FROM_CUSTOMER: 6,
  CONVERSATION_STATUS_AWAITING_ASSIGNMENT: 7,
  CONVERSATION_STATUS_NEWLY_ASSIGNED: 8,
  CONVERSATION_STATUS_WRAP_UP_CUSTOMER: 9,
  CONVERSATION_STATUS_WRAP_UP_TIMEOUT: 10,
  CONVERSATION_STATUS_CLOSED_MANAGER: 11,
  CONVERSATION_STATUS_NEW_PENDING_CUSTOMER_REPLY: 12,
  CONVERSATION_STATUS_FLOW: 13,
  CONVERSATION_STATUS_CLOSED_DUPLICATE_THREAD: 14
};

/**
 * @enum {number}
 */
proto.api.commons.AgentAssignmentActiveSearchType = {
  AGENT_ASSIGNMENT_ACTIVE_SEARCH_TYPE_ACTIVE: 0,
  AGENT_ASSIGNMENT_ACTIVE_SEARCH_TYPE_INACTIVE: 1,
  AGENT_ASSIGNMENT_ACTIVE_SEARCH_TYPE_ALL: 2
};

/**
 * @enum {number}
 */
proto.api.commons.AgentConversationAssignmentStatus = {
  ACTIVE_AGENT: 0,
  INACTIVE_AGENT: 1
};

/**
 * @enum {number}
 */
proto.api.commons.AgentConversationAssignmentType = {
  PRIMARY_AGENT: 0,
  SECONDARY_AGENT: 1
};

/**
 * @enum {number}
 */
proto.api.commons.OmniMessageStatus = {
  OMNI_MESSAGE_CREATED: 0,
  OMNI_INBOUND_MESSAGE_RECEIVED: 16000,
  OMNI_OUTBOUND_MESSAGE_RECEIVED: 16010,
  OMNI_OUTBOUND_MESSAGE_WAITING: 16100,
  OMNI_OUTBOUND_MESSAGE_PROCESSING: 16110,
  OMNI_OUTBOUND_MESSAGE_DNC: 16120,
  OMNI_OUTBOUND_MESSAGE_INVALID: 16130,
  OMNI_OUTBOUND_MESSAGE_ATTACHMENT_ERROR: 16140,
  OMNI_OUTBOUND_MESSAGE_CANCELLED: 16150,
  OMNI_OUTBOUND_MESSAGE_QUEUED: 16160,
  OMNI_OUTBOUND_MESSAGE_DELIVERED: 16170,
  OMNI_OUTBOUND_MESSAGE_DROPPED: 16180,
  OMNI_OUTBOUND_MESSAGE_DEFERRED: 16190,
  OMNI_OUTBOUND_MESSAGE_BOUNCED: 16200,
  OMNI_OUTBOUND_MESSAGE_OPENED: 16210,
  OMNI_OUTBOUND_MESSAGE_CLICKED: 16220,
  OMNI_OUTBOUND_MESSAGE_UNSUBSCRIBED: 16230,
  OMNI_OUTBOUND_MESSAGE_MARKED_AS_SPAM: 16240,
  OMNI_OUTBOUND_MESSAGE_BLOCKED: 16250,
  OMNI_SYSTEM_MESSAGE: 16050
};

/**
 * @enum {number}
 */
proto.api.commons.OmniConversationResult = {
  NONE: 0,
  ABANDONED: 1
};

/**
 * @enum {number}
 */
proto.api.commons.OmniTaskStatus = {
  OMNI_TASK_WAITING: 0,
  OMNI_TASK_WAITING_FOR_QUEUE: 1,
  OMNI_TASK_WAITING_FOR_APPROVAL: 2,
  OMNI_TASK_SENDING: 100,
  OMNI_TASK_SENDING_FAILED: 110,
  OMNI_TASK_SENDING_INCOMPLETE: 111,
  OMNI_TASK_SENT: 120,
  OMNI_TASK_RECEIVED: 130
};

/**
 * @enum {number}
 */
proto.api.commons.OmniSenderType = {
  OMNI_SENDER_TYPE_AGENT: 0,
  OMNI_SENDER_TYPE_CUSTOMER: 1,
  OMNI_SENDER_TYPE_SYSTEM: 2,
  OMNI_SENDER_TYPE_MANAGER: 3,
  OMNI_SENDER_TYPE_FLOW: 4
};

/**
 * @enum {number}
 */
proto.api.commons.ConnectedInboxAuthenticationType = {
  CONNECTED_INBOX_AUTHENTICATION_TYPE_PASSWORD: 0,
  CONNECTED_INBOX_AUTHENTICATION_TYPE_GOOGLE_XOAUTH2: 1,
  CONNECTED_INBOX_AUTHENTICATION_TYPE_MICROSOFT_365: 2
};

/**
 * @enum {number}
 */
proto.api.commons.ConversationStateChangeTimerName = {
  CONVERSATION_STATE_CHANGE_TIMER_NAME_WAIT: 0,
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK: 100,
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK_INITIAL_AGENT_RESPONSE: 101,
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK_AGENT_RESPONSE: 102,
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK_CUSTOMER_RESPONSE: 103,
  CONVERSATION_STATE_CHANGE_TIMER_NAME_TALK_SUSPENDED: 104,
  CONVERSATION_STATE_CHANGE_TIMER_NAME_WRAP_UP: 200,
  CONVERSATION_STATE_CHANGE_TIMER_NAME_IDLE: 300
};

/**
 * @enum {number}
 */
proto.api.commons.OmniConversationMetadataName = {
  AGENT_RESPONSE_TIME: 0,
  CUSTOMER_WAIT_TIME: 1,
  HANDLE_TIME: 2,
  TRANSCRIPT_PATH: 3,
  OMNI_CONVERSATION_METADATA_NAME_FLOW_DATA: 4,
  OMNI_CONVERSATION_METADATA_NAME_TIMER_WAIT: 10,
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK: 100,
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK_INITIAL_AGENT_RESPONSE: 101,
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK_AGENT_RESPONSE: 102,
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK_CUSTOMER_RESPONSE: 103,
  OMNI_CONVERSATION_METADATA_NAME_TIMER_TALK_SUSPENDED: 104,
  OMNI_CONVERSATION_METADATA_NAME_TIMER_WRAP_UP: 200,
  OMNI_CONVERSATION_METADATA_NAME_TIMER_IDLE: 300
};

/**
 * @enum {number}
 */
proto.api.commons.ProjectStatus = {
  PROJECT_STATUS_UNKNOWN: 0,
  PROJECT_STATUS_OPEN: 17000,
  PROJECT_STATUS_CLOSED: 17010
};

/**
 * @enum {number}
 */
proto.api.commons.CampaignStatus = {
  CAMPAIGN_STATUS_SCHEDULED: 0,
  CAMPAIGN_STATUS_RUNNING: 1,
  CAMPAIGN_STATUS_PAUSED: 2,
  CAMPAIGN_STATUS_COMPLETED: 3,
  CAMPAIGN_STATUS_CANCELED: 4,
  CAMPAIGN_STATUS_ERROR_PAUSED: 5
};

/**
 * @enum {number}
 */
proto.api.commons.CampaignDirection = {
  CAMPAIGN_DIRECTION_INBOUND: 0,
  CAMPAIGN_DIRECTION_OUTBOUND: 1
};

/**
 * @enum {number}
 */
proto.api.commons.WhatsAppNumberProvider = {
  UNKNOWN_WHATSAPP_PROVIDER: 0,
  WHATSAPP_SMS_PROVIDER: 1
};

goog.object.extend(exports, proto.api.commons);
