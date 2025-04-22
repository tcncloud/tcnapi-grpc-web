// source: api/v0alpha/omniapi.proto
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

var annotations_authz_pb = require('../../annotations/authz_pb.js');
goog.object.extend(proto, annotations_authz_pb);
var api_commons_lms_pb = require('../../api/commons/lms_pb.js');
goog.object.extend(proto, api_commons_lms_pb);
var api_commons_omnichannel_pb = require('../../api/commons/omnichannel_pb.js');
goog.object.extend(proto, api_commons_omnichannel_pb);
var api_commons_types_pb = require('../../api/commons/types_pb.js');
goog.object.extend(proto, api_commons_types_pb);
var api_commons_wfm_pb = require('../../api/commons/wfm_pb.js');
goog.object.extend(proto, api_commons_wfm_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.v0alpha.ApproveTaskRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.ApproveTaskResponse', null, global);
goog.exportSymbol('proto.api.v0alpha.ArchiveCampaignReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ArchiveCampaignRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CannedMessage', null, global);
goog.exportSymbol('proto.api.v0alpha.CannedMessageGroup', null, global);
goog.exportSymbol('proto.api.v0alpha.CannedMessageWithGroup', null, global);
goog.exportSymbol('proto.api.v0alpha.ChatMessageUserInformation', null, global);
goog.exportSymbol('proto.api.v0alpha.CloseProjectByIdReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CloseProjectByIdRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ContactListDataSource', null, global);
goog.exportSymbol('proto.api.v0alpha.ContactListsDataSource', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateCampaignReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateCampaignReq.CampaignModule', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateCampaignReq.CampaignModule.DataSourceCase', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateCannedMessageGroupReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateCannedMessageReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateConnectedInboxRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateCustomUnsubscribeLinkRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateDispositionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateDispositionRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateManualTaskReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateManualTaskRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateProjectReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateProjectRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateSignatureReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateSignatureRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateTasksReq', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateTasksReq.DataSourceCase', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateTasksRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateVerifiedEmailRes', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateWhatsAppNumberRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.CreateWhatsAppNumberResponse', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteCannedMessageByIdReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteCannedMessageByIdRes', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteCannedMessageGroupReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteCannedMessageGroupRes', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteConnectedInboxBySidReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteDispositionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteSignatureReq', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteSignatureRes', null, global);
goog.exportSymbol('proto.api.v0alpha.DeleteVerifiedEmailReq', null, global);
goog.exportSymbol('proto.api.v0alpha.EditProjectByIdReq', null, global);
goog.exportSymbol('proto.api.v0alpha.EditProjectByIdRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetAvailableHeadersReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetAvailableHeadersRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetCampaignByIdReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetCannedMessageByIdReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetCannedMessageGroupByIdReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetConnectedInboxBySidReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetFieldsForElementRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.GetFieldsForElementResult', null, global);
goog.exportSymbol('proto.api.v0alpha.GetNextQueuedTaskRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.GetNextQueuedTaskResponse', null, global);
goog.exportSymbol('proto.api.v0alpha.GetOffLoadedTextMessageReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetOffLoadedTextMessageRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetOmniAttachmentReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid', null, global);
goog.exportSymbol('proto.api.v0alpha.GetOmniAttachmentReq.FilterCase', null, global);
goog.exportSymbol('proto.api.v0alpha.GetOmniExchangeElementsRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.GetOmniExchangeElementsResult', null, global);
goog.exportSymbol('proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes', null, global);
goog.exportSymbol('proto.api.v0alpha.GetProjectByIdReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetTaskReq', null, global);
goog.exportSymbol('proto.api.v0alpha.GetTaskReq.ByConversation', null, global);
goog.exportSymbol('proto.api.v0alpha.GetTaskReq.FilterCase', null, global);
goog.exportSymbol('proto.api.v0alpha.GetVerifiedEmailBySidReq', null, global);
goog.exportSymbol('proto.api.v0alpha.Header', null, global);
goog.exportSymbol('proto.api.v0alpha.HeaderGroup', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByIds', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByModuleType', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByProject', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.BySmsNumber', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByTime', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByWhatsApp', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsReq.FilterCase', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCampaignsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCannedMessageGroupsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCannedMessageGroupsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCannedMessagesByGroupIdReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCannedMessagesByGroupIdRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCannedMessagesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCannedMessagesRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConnectedInboxesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConnectedInboxesRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox', null, global);
goog.exportSymbol('proto.api.v0alpha.ListContactListsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListContactListsReq.ByProject', null, global);
goog.exportSymbol('proto.api.v0alpha.ListContactListsReq.FilterCase', null, global);
goog.exportSymbol('proto.api.v0alpha.ListContactListsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConversationsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConversationsReq.ByAssignedUser', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConversationsReq.ByConversationSids', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConversationsReq.ByTime', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConversationsReq.FilterCase', null, global);
goog.exportSymbol('proto.api.v0alpha.ListConversationsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListCustomUnsubscribeLinksRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListDispositionsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListDispositionsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListMessagesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListMessagesReq.ByConversationSid', null, global);
goog.exportSymbol('proto.api.v0alpha.ListMessagesReq.FilterCase', null, global);
goog.exportSymbol('proto.api.v0alpha.ListProjectsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListProjectsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListSignaturesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListSignaturesRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListTasksReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListTasksReq.ByCampaign', null, global);
goog.exportSymbol('proto.api.v0alpha.ListTasksReq.FilterCase', null, global);
goog.exportSymbol('proto.api.v0alpha.ListTasksRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListUserSkillsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListUserSkillsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListVerifiedEmailsReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListVerifiedEmailsRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ListWhatsAppNumbersReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ListWhatsAppNumbersRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ManagerListMessagesReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid', null, global);
goog.exportSymbol('proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid', null, global);
goog.exportSymbol('proto.api.v0alpha.ManagerListMessagesReq.FilterCase', null, global);
goog.exportSymbol('proto.api.v0alpha.OmniExchange', null, global);
goog.exportSymbol('proto.api.v0alpha.OmniSkill', null, global);
goog.exportSymbol('proto.api.v0alpha.PauseCampaignReq', null, global);
goog.exportSymbol('proto.api.v0alpha.PauseCampaignRes', null, global);
goog.exportSymbol('proto.api.v0alpha.Project', null, global);
goog.exportSymbol('proto.api.v0alpha.RejectTaskRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.RejectTaskResponse', null, global);
goog.exportSymbol('proto.api.v0alpha.RequeueTaskRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.RequeueTaskResponse', null, global);
goog.exportSymbol('proto.api.v0alpha.ResendVerifiedEmailReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ResendVerifiedEmailRes', null, global);
goog.exportSymbol('proto.api.v0alpha.ResumeCampaignReq', null, global);
goog.exportSymbol('proto.api.v0alpha.ResumeCampaignRes', null, global);
goog.exportSymbol('proto.api.v0alpha.SendEmailNotificationReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SendEmailNotificationRes', null, global);
goog.exportSymbol('proto.api.v0alpha.SendFeedbackEmailReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SendFeedbackEmailRes', null, global);
goog.exportSymbol('proto.api.v0alpha.SendOmniMessageReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SendgridAccountByClientReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SendgridAccountByClientRes', null, global);
goog.exportSymbol('proto.api.v0alpha.SuggestResponseReq', null, global);
goog.exportSymbol('proto.api.v0alpha.SuggestResponseRes', null, global);
goog.exportSymbol('proto.api.v0alpha.TestConnectedInboxRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCampaignPacingSpeedReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCampaignPacingSpeedRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCampaignReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCampaignRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCannedMessageGroupReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCannedMessageGroupRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCannedMessageReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateConnectedInboxReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateDispositionReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateSignatureReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateSignatureRes', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateVerifiedEmailReq', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateWhatsAppNumberRequest', null, global);
goog.exportSymbol('proto.api.v0alpha.UpdateWhatsAppNumberResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SuggestResponseReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SuggestResponseReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SuggestResponseReq.displayName = 'proto.api.v0alpha.SuggestResponseReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SuggestResponseRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SuggestResponseRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SuggestResponseRes.displayName = 'proto.api.v0alpha.SuggestResponseRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateCampaignReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CreateCampaignReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CreateCampaignReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateCampaignReq.displayName = 'proto.api.v0alpha.CreateCampaignReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.CreateCampaignReq.CampaignModule.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.CreateCampaignReq.CampaignModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateCampaignReq.CampaignModule.displayName = 'proto.api.v0alpha.CreateCampaignReq.CampaignModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ContactListsDataSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ContactListsDataSource.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ContactListsDataSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ContactListsDataSource.displayName = 'proto.api.v0alpha.ContactListsDataSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ContactListDataSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ContactListDataSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ContactListDataSource.displayName = 'proto.api.v0alpha.ContactListDataSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListCampaignsReq.repeatedFields_, proto.api.v0alpha.ListCampaignsReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.displayName = 'proto.api.v0alpha.ListCampaignsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByIds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListCampaignsReq.ByIds.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByIds.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByIds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByProject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByProject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByProject.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByProject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByTime.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.BySmsNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.BySmsNumber.displayName = 'proto.api.v0alpha.ListCampaignsReq.BySmsNumber';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByWhatsApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByWhatsApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListCampaignsReq.ByModuleType.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsReq.ByModuleType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsReq.ByModuleType.displayName = 'proto.api.v0alpha.ListCampaignsReq.ByModuleType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCampaignsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListCampaignsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListCampaignsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCampaignsRes.displayName = 'proto.api.v0alpha.ListCampaignsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetCampaignByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetCampaignByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetCampaignByIdReq.displayName = 'proto.api.v0alpha.GetCampaignByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetOffLoadedTextMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetOffLoadedTextMessageReq.displayName = 'proto.api.v0alpha.GetOffLoadedTextMessageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetOffLoadedTextMessageRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetOffLoadedTextMessageRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetOffLoadedTextMessageRes.displayName = 'proto.api.v0alpha.GetOffLoadedTextMessageRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ManagerListMessagesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.ManagerListMessagesReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.ManagerListMessagesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ManagerListMessagesReq.displayName = 'proto.api.v0alpha.ManagerListMessagesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.displayName = 'proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.displayName = 'proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListMessagesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.ListMessagesReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.ListMessagesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListMessagesReq.displayName = 'proto.api.v0alpha.ListMessagesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListMessagesReq.ByConversationSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListMessagesReq.ByConversationSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListMessagesReq.ByConversationSid.displayName = 'proto.api.v0alpha.ListMessagesReq.ByConversationSid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ChatMessageUserInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ChatMessageUserInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ChatMessageUserInformation.displayName = 'proto.api.v0alpha.ChatMessageUserInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendOmniMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SendOmniMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendOmniMessageReq.displayName = 'proto.api.v0alpha.SendOmniMessageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCampaignReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateCampaignReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCampaignReq.displayName = 'proto.api.v0alpha.UpdateCampaignReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCampaignRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateCampaignRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCampaignRes.displayName = 'proto.api.v0alpha.UpdateCampaignRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConversationsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListConversationsReq.repeatedFields_, proto.api.v0alpha.ListConversationsReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.ListConversationsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConversationsReq.displayName = 'proto.api.v0alpha.ListConversationsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConversationsReq.ByTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListConversationsReq.ByTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConversationsReq.ByTime.displayName = 'proto.api.v0alpha.ListConversationsReq.ByTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListConversationsReq.ByAssignedUser.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListConversationsReq.ByAssignedUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConversationsReq.ByAssignedUser.displayName = 'proto.api.v0alpha.ListConversationsReq.ByAssignedUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListConversationsReq.ByConversationSids.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListConversationsReq.ByConversationSids, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConversationsReq.ByConversationSids.displayName = 'proto.api.v0alpha.ListConversationsReq.ByConversationSids';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConversationsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListConversationsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListConversationsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConversationsRes.displayName = 'proto.api.v0alpha.ListConversationsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateDispositionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateDispositionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateDispositionReq.displayName = 'proto.api.v0alpha.CreateDispositionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateDispositionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateDispositionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateDispositionRes.displayName = 'proto.api.v0alpha.CreateDispositionRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteDispositionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteDispositionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteDispositionReq.displayName = 'proto.api.v0alpha.DeleteDispositionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListDispositionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListDispositionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListDispositionsReq.displayName = 'proto.api.v0alpha.ListDispositionsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListDispositionsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListDispositionsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListDispositionsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListDispositionsRes.displayName = 'proto.api.v0alpha.ListDispositionsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateDispositionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateDispositionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateDispositionReq.displayName = 'proto.api.v0alpha.UpdateDispositionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListCustomUnsubscribeLinksRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListCustomUnsubscribeLinksRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCustomUnsubscribeLinksRes.displayName = 'proto.api.v0alpha.ListCustomUnsubscribeLinksRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateCustomUnsubscribeLinkRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.displayName = 'proto.api.v0alpha.CreateCustomUnsubscribeLinkRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.displayName = 'proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.displayName = 'proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.displayName = 'proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PauseCampaignReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PauseCampaignReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PauseCampaignReq.displayName = 'proto.api.v0alpha.PauseCampaignReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.PauseCampaignRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.PauseCampaignRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.PauseCampaignRes.displayName = 'proto.api.v0alpha.PauseCampaignRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ResumeCampaignReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ResumeCampaignReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ResumeCampaignReq.displayName = 'proto.api.v0alpha.ResumeCampaignReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ResumeCampaignRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ResumeCampaignRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ResumeCampaignRes.displayName = 'proto.api.v0alpha.ResumeCampaignRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ArchiveCampaignReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ArchiveCampaignReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ArchiveCampaignReq.displayName = 'proto.api.v0alpha.ArchiveCampaignReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ArchiveCampaignRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ArchiveCampaignRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ArchiveCampaignRes.displayName = 'proto.api.v0alpha.ArchiveCampaignRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateCampaignPacingSpeedReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCampaignPacingSpeedReq.displayName = 'proto.api.v0alpha.UpdateCampaignPacingSpeedReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateCampaignPacingSpeedRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCampaignPacingSpeedRes.displayName = 'proto.api.v0alpha.UpdateCampaignPacingSpeedRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListContactListsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.ListContactListsReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.ListContactListsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListContactListsReq.displayName = 'proto.api.v0alpha.ListContactListsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListContactListsReq.ByProject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListContactListsReq.ByProject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListContactListsReq.ByProject.displayName = 'proto.api.v0alpha.ListContactListsReq.ByProject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListContactListsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListContactListsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListContactListsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListContactListsRes.displayName = 'proto.api.v0alpha.ListContactListsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetAvailableHeadersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetAvailableHeadersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetAvailableHeadersReq.displayName = 'proto.api.v0alpha.GetAvailableHeadersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetAvailableHeadersRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.GetAvailableHeadersRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.GetAvailableHeadersRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetAvailableHeadersRes.displayName = 'proto.api.v0alpha.GetAvailableHeadersRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetOmniExchangeElementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetOmniExchangeElementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetOmniExchangeElementsRequest.displayName = 'proto.api.v0alpha.GetOmniExchangeElementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetOmniExchangeElementsResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.GetOmniExchangeElementsResult.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.GetOmniExchangeElementsResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetOmniExchangeElementsResult.displayName = 'proto.api.v0alpha.GetOmniExchangeElementsResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.OmniExchange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.OmniExchange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.OmniExchange.displayName = 'proto.api.v0alpha.OmniExchange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetFieldsForElementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetFieldsForElementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetFieldsForElementRequest.displayName = 'proto.api.v0alpha.GetFieldsForElementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetFieldsForElementResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.GetFieldsForElementResult.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.GetFieldsForElementResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetFieldsForElementResult.displayName = 'proto.api.v0alpha.GetFieldsForElementResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.Header.displayName = 'proto.api.v0alpha.Header';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.HeaderGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.HeaderGroup.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.HeaderGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.HeaderGroup.displayName = 'proto.api.v0alpha.HeaderGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ApproveTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ApproveTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ApproveTaskRequest.displayName = 'proto.api.v0alpha.ApproveTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ApproveTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ApproveTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ApproveTaskResponse.displayName = 'proto.api.v0alpha.ApproveTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetNextQueuedTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetNextQueuedTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetNextQueuedTaskRequest.displayName = 'proto.api.v0alpha.GetNextQueuedTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetNextQueuedTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetNextQueuedTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetNextQueuedTaskResponse.displayName = 'proto.api.v0alpha.GetNextQueuedTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetTaskReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.GetTaskReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.GetTaskReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetTaskReq.displayName = 'proto.api.v0alpha.GetTaskReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetTaskReq.ByConversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetTaskReq.ByConversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetTaskReq.ByConversation.displayName = 'proto.api.v0alpha.GetTaskReq.ByConversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListTasksReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.ListTasksReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.ListTasksReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListTasksReq.displayName = 'proto.api.v0alpha.ListTasksReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListTasksReq.ByCampaign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListTasksReq.ByCampaign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListTasksReq.ByCampaign.displayName = 'proto.api.v0alpha.ListTasksReq.ByCampaign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListTasksRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListTasksRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListTasksRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListTasksRes.displayName = 'proto.api.v0alpha.ListTasksRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RejectTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RejectTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RejectTaskRequest.displayName = 'proto.api.v0alpha.RejectTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RejectTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RejectTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RejectTaskResponse.displayName = 'proto.api.v0alpha.RejectTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RequeueTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RequeueTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RequeueTaskRequest.displayName = 'proto.api.v0alpha.RequeueTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.RequeueTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.RequeueTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.RequeueTaskResponse.displayName = 'proto.api.v0alpha.RequeueTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateConnectedInboxRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateConnectedInboxRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateConnectedInboxRes.displayName = 'proto.api.v0alpha.CreateConnectedInboxRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteConnectedInboxBySidReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteConnectedInboxBySidReq.displayName = 'proto.api.v0alpha.DeleteConnectedInboxBySidReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetConnectedInboxBySidReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetConnectedInboxBySidReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetConnectedInboxBySidReq.displayName = 'proto.api.v0alpha.GetConnectedInboxBySidReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendgridAccountByClientReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SendgridAccountByClientReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendgridAccountByClientReq.displayName = 'proto.api.v0alpha.SendgridAccountByClientReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendgridAccountByClientRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SendgridAccountByClientRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendgridAccountByClientRes.displayName = 'proto.api.v0alpha.SendgridAccountByClientRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConnectedInboxesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListConnectedInboxesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConnectedInboxesReq.displayName = 'proto.api.v0alpha.ListConnectedInboxesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConnectedInboxesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListConnectedInboxesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListConnectedInboxesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConnectedInboxesRes.displayName = 'proto.api.v0alpha.ListConnectedInboxesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.displayName = 'proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.TestConnectedInboxRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.TestConnectedInboxRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.TestConnectedInboxRes.displayName = 'proto.api.v0alpha.TestConnectedInboxRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateConnectedInboxReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateConnectedInboxReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateConnectedInboxReq.displayName = 'proto.api.v0alpha.UpdateConnectedInboxReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateVerifiedEmailRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateVerifiedEmailRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateVerifiedEmailRes.displayName = 'proto.api.v0alpha.CreateVerifiedEmailRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendEmailNotificationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SendEmailNotificationReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SendEmailNotificationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendEmailNotificationReq.displayName = 'proto.api.v0alpha.SendEmailNotificationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendEmailNotificationRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SendEmailNotificationRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendEmailNotificationRes.displayName = 'proto.api.v0alpha.SendEmailNotificationRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetVerifiedEmailBySidReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetVerifiedEmailBySidReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetVerifiedEmailBySidReq.displayName = 'proto.api.v0alpha.GetVerifiedEmailBySidReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteVerifiedEmailReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteVerifiedEmailReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteVerifiedEmailReq.displayName = 'proto.api.v0alpha.DeleteVerifiedEmailReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListVerifiedEmailsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListVerifiedEmailsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListVerifiedEmailsReq.displayName = 'proto.api.v0alpha.ListVerifiedEmailsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListVerifiedEmailsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListVerifiedEmailsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListVerifiedEmailsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListVerifiedEmailsRes.displayName = 'proto.api.v0alpha.ListVerifiedEmailsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ResendVerifiedEmailReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ResendVerifiedEmailReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ResendVerifiedEmailReq.displayName = 'proto.api.v0alpha.ResendVerifiedEmailReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ResendVerifiedEmailRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ResendVerifiedEmailRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ResendVerifiedEmailRes.displayName = 'proto.api.v0alpha.ResendVerifiedEmailRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateVerifiedEmailReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateVerifiedEmailReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateVerifiedEmailReq.displayName = 'proto.api.v0alpha.UpdateVerifiedEmailReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.displayName = 'proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.displayName = 'proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendFeedbackEmailReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SendFeedbackEmailReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendFeedbackEmailReq.displayName = 'proto.api.v0alpha.SendFeedbackEmailReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendFeedbackEmailRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SendFeedbackEmailRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendFeedbackEmailRes.displayName = 'proto.api.v0alpha.SendFeedbackEmailRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetOmniAttachmentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.GetOmniAttachmentReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.GetOmniAttachmentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetOmniAttachmentReq.displayName = 'proto.api.v0alpha.GetOmniAttachmentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.displayName = 'proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateTasksReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v0alpha.CreateTasksReq.oneofGroups_);
};
goog.inherits(proto.api.v0alpha.CreateTasksReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateTasksReq.displayName = 'proto.api.v0alpha.CreateTasksReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateTasksRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateTasksRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateTasksRes.displayName = 'proto.api.v0alpha.CreateTasksRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSignatureReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSignatureReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSignatureReq.displayName = 'proto.api.v0alpha.CreateSignatureReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSignatureRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSignatureRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSignatureRes.displayName = 'proto.api.v0alpha.CreateSignatureRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSignatureReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSignatureReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSignatureReq.displayName = 'proto.api.v0alpha.DeleteSignatureReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSignatureRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSignatureRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSignatureRes.displayName = 'proto.api.v0alpha.DeleteSignatureRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSignaturesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSignaturesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSignaturesReq.displayName = 'proto.api.v0alpha.ListSignaturesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSignaturesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSignaturesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSignaturesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSignaturesRes.displayName = 'proto.api.v0alpha.ListSignaturesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSignatureReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSignatureReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSignatureReq.displayName = 'proto.api.v0alpha.UpdateSignatureReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSignatureRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSignatureRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSignatureRes.displayName = 'proto.api.v0alpha.UpdateSignatureRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateProjectReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateProjectReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateProjectReq.displayName = 'proto.api.v0alpha.CreateProjectReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateProjectRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateProjectRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateProjectRes.displayName = 'proto.api.v0alpha.CreateProjectRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.Project.displayName = 'proto.api.v0alpha.Project';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListProjectsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListProjectsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListProjectsReq.displayName = 'proto.api.v0alpha.ListProjectsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListProjectsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListProjectsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListProjectsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListProjectsRes.displayName = 'proto.api.v0alpha.ListProjectsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.EditProjectByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.EditProjectByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.EditProjectByIdReq.displayName = 'proto.api.v0alpha.EditProjectByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.EditProjectByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.EditProjectByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.EditProjectByIdRes.displayName = 'proto.api.v0alpha.EditProjectByIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CloseProjectByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CloseProjectByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CloseProjectByIdReq.displayName = 'proto.api.v0alpha.CloseProjectByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CloseProjectByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CloseProjectByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CloseProjectByIdRes.displayName = 'proto.api.v0alpha.CloseProjectByIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetProjectByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetProjectByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetProjectByIdReq.displayName = 'proto.api.v0alpha.GetProjectByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateCannedMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CreateCannedMessageReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CreateCannedMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateCannedMessageReq.displayName = 'proto.api.v0alpha.CreateCannedMessageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CannedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CannedMessage.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CannedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CannedMessage.displayName = 'proto.api.v0alpha.CannedMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCannedMessagesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCannedMessagesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCannedMessagesReq.displayName = 'proto.api.v0alpha.ListCannedMessagesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCannedMessagesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListCannedMessagesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListCannedMessagesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCannedMessagesRes.displayName = 'proto.api.v0alpha.ListCannedMessagesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCannedMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.UpdateCannedMessageReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.UpdateCannedMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCannedMessageReq.displayName = 'proto.api.v0alpha.UpdateCannedMessageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetCannedMessageByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetCannedMessageByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetCannedMessageByIdReq.displayName = 'proto.api.v0alpha.GetCannedMessageByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteCannedMessageByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteCannedMessageByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteCannedMessageByIdReq.displayName = 'proto.api.v0alpha.DeleteCannedMessageByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteCannedMessageByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteCannedMessageByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteCannedMessageByIdRes.displayName = 'proto.api.v0alpha.DeleteCannedMessageByIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateCannedMessageGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateCannedMessageGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateCannedMessageGroupReq.displayName = 'proto.api.v0alpha.CreateCannedMessageGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CannedMessageGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CannedMessageGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CannedMessageGroup.displayName = 'proto.api.v0alpha.CannedMessageGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CannedMessageWithGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CannedMessageWithGroup.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CannedMessageWithGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CannedMessageWithGroup.displayName = 'proto.api.v0alpha.CannedMessageWithGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCannedMessageGroupsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCannedMessageGroupsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCannedMessageGroupsReq.displayName = 'proto.api.v0alpha.ListCannedMessageGroupsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCannedMessageGroupsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListCannedMessageGroupsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListCannedMessageGroupsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCannedMessageGroupsRes.displayName = 'proto.api.v0alpha.ListCannedMessageGroupsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateCannedMessageGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCannedMessageGroupReq.displayName = 'proto.api.v0alpha.UpdateCannedMessageGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateCannedMessageGroupRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateCannedMessageGroupRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateCannedMessageGroupRes.displayName = 'proto.api.v0alpha.UpdateCannedMessageGroupRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteCannedMessageGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteCannedMessageGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteCannedMessageGroupReq.displayName = 'proto.api.v0alpha.DeleteCannedMessageGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteCannedMessageGroupRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteCannedMessageGroupRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteCannedMessageGroupRes.displayName = 'proto.api.v0alpha.DeleteCannedMessageGroupRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListCannedMessagesByGroupIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCannedMessagesByGroupIdReq.displayName = 'proto.api.v0alpha.ListCannedMessagesByGroupIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListCannedMessagesByGroupIdRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListCannedMessagesByGroupIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListCannedMessagesByGroupIdRes.displayName = 'proto.api.v0alpha.ListCannedMessagesByGroupIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetCannedMessageGroupByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetCannedMessageGroupByIdReq.displayName = 'proto.api.v0alpha.GetCannedMessageGroupByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListUserSkillsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListUserSkillsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListUserSkillsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListUserSkillsReq.displayName = 'proto.api.v0alpha.ListUserSkillsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListUserSkillsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListUserSkillsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListUserSkillsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListUserSkillsRes.displayName = 'proto.api.v0alpha.ListUserSkillsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.OmniSkill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.OmniSkill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.OmniSkill.displayName = 'proto.api.v0alpha.OmniSkill';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListWhatsAppNumbersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListWhatsAppNumbersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListWhatsAppNumbersReq.displayName = 'proto.api.v0alpha.ListWhatsAppNumbersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListWhatsAppNumbersRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListWhatsAppNumbersRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListWhatsAppNumbersRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListWhatsAppNumbersRes.displayName = 'proto.api.v0alpha.ListWhatsAppNumbersRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateWhatsAppNumberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateWhatsAppNumberRequest.displayName = 'proto.api.v0alpha.CreateWhatsAppNumberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateWhatsAppNumberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateWhatsAppNumberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateWhatsAppNumberResponse.displayName = 'proto.api.v0alpha.CreateWhatsAppNumberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateWhatsAppNumberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateWhatsAppNumberRequest.displayName = 'proto.api.v0alpha.UpdateWhatsAppNumberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateWhatsAppNumberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateWhatsAppNumberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateWhatsAppNumberResponse.displayName = 'proto.api.v0alpha.UpdateWhatsAppNumberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateManualTaskReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateManualTaskReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateManualTaskReq.displayName = 'proto.api.v0alpha.CreateManualTaskReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateManualTaskRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateManualTaskRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateManualTaskRes.displayName = 'proto.api.v0alpha.CreateManualTaskRes';
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
proto.api.v0alpha.SuggestResponseReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SuggestResponseReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SuggestResponseReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SuggestResponseReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SuggestResponseReq}
 */
proto.api.v0alpha.SuggestResponseReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SuggestResponseReq;
  return proto.api.v0alpha.SuggestResponseReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SuggestResponseReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SuggestResponseReq}
 */
proto.api.v0alpha.SuggestResponseReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SuggestResponseReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SuggestResponseReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SuggestResponseReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SuggestResponseReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.SuggestResponseReq.prototype.getConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SuggestResponseReq} returns this
 */
proto.api.v0alpha.SuggestResponseReq.prototype.setConversationId = function(value) {
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
proto.api.v0alpha.SuggestResponseRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SuggestResponseRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SuggestResponseRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SuggestResponseRes.toObject = function(includeInstance, msg) {
  var f, obj = {
suggestedResponse: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SuggestResponseRes}
 */
proto.api.v0alpha.SuggestResponseRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SuggestResponseRes;
  return proto.api.v0alpha.SuggestResponseRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SuggestResponseRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SuggestResponseRes}
 */
proto.api.v0alpha.SuggestResponseRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuggestedResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SuggestResponseRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SuggestResponseRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SuggestResponseRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SuggestResponseRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuggestedResponse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string suggested_response = 1;
 * @return {string}
 */
proto.api.v0alpha.SuggestResponseRes.prototype.getSuggestedResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SuggestResponseRes} returns this
 */
proto.api.v0alpha.SuggestResponseRes.prototype.setSuggestedResponse = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CreateCampaignReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateCampaignReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateCampaignReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateCampaignReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCampaignReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaign: (f = msg.getCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f),
modulesList: jspb.Message.toObjectList(msg.getModulesList(),
    proto.api.v0alpha.CreateCampaignReq.CampaignModule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateCampaignReq}
 */
proto.api.v0alpha.CreateCampaignReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateCampaignReq;
  return proto.api.v0alpha.CreateCampaignReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateCampaignReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateCampaignReq}
 */
proto.api.v0alpha.CreateCampaignReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.CreateCampaignReq.CampaignModule;
      reader.readMessage(value,proto.api.v0alpha.CreateCampaignReq.CampaignModule.deserializeBinaryFromReader);
      msg.addModules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateCampaignReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateCampaignReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateCampaignReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCampaignReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
  f = message.getModulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.CreateCampaignReq.CampaignModule.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.DataSourceCase = {
  DATA_SOURCE_NOT_SET: 0,
  OMNI_CONTACT_LIST: 100
};

/**
 * @return {proto.api.v0alpha.CreateCampaignReq.CampaignModule.DataSourceCase}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.getDataSourceCase = function() {
  return /** @type {proto.api.v0alpha.CreateCampaignReq.CampaignModule.DataSourceCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.CreateCampaignReq.CampaignModule.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateCampaignReq.CampaignModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateCampaignReq.CampaignModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.toObject = function(includeInstance, msg) {
  var f, obj = {
module: (f = msg.getModule()) && api_commons_omnichannel_pb.OmniCampaignModule.toObject(includeInstance, f),
omniContactList: (f = msg.getOmniContactList()) && proto.api.v0alpha.ContactListsDataSource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateCampaignReq.CampaignModule}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateCampaignReq.CampaignModule;
  return proto.api.v0alpha.CreateCampaignReq.CampaignModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateCampaignReq.CampaignModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateCampaignReq.CampaignModule}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniCampaignModule;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaignModule.deserializeBinaryFromReader);
      msg.setModule(value);
      break;
    case 100:
      var value = new proto.api.v0alpha.ContactListsDataSource;
      reader.readMessage(value,proto.api.v0alpha.ContactListsDataSource.deserializeBinaryFromReader);
      msg.setOmniContactList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateCampaignReq.CampaignModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateCampaignReq.CampaignModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModule();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniCampaignModule.serializeBinaryToWriter
    );
  }
  f = message.getOmniContactList();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.v0alpha.ContactListsDataSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.OmniCampaignModule module = 1;
 * @return {?proto.api.commons.OmniCampaignModule}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.getModule = function() {
  return /** @type{?proto.api.commons.OmniCampaignModule} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaignModule, 1));
};


/**
 * @param {?proto.api.commons.OmniCampaignModule|undefined} value
 * @return {!proto.api.v0alpha.CreateCampaignReq.CampaignModule} returns this
*/
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.setModule = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateCampaignReq.CampaignModule} returns this
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.clearModule = function() {
  return this.setModule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.hasModule = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContactListsDataSource omni_contact_list = 100;
 * @return {?proto.api.v0alpha.ContactListsDataSource}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.getOmniContactList = function() {
  return /** @type{?proto.api.v0alpha.ContactListsDataSource} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ContactListsDataSource, 100));
};


/**
 * @param {?proto.api.v0alpha.ContactListsDataSource|undefined} value
 * @return {!proto.api.v0alpha.CreateCampaignReq.CampaignModule} returns this
*/
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.setOmniContactList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.v0alpha.CreateCampaignReq.CampaignModule.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateCampaignReq.CampaignModule} returns this
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.clearOmniContactList = function() {
  return this.setOmniContactList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateCampaignReq.CampaignModule.prototype.hasOmniContactList = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional api.commons.OmniCampaign campaign = 1;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.v0alpha.CreateCampaignReq.prototype.getCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 1));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.v0alpha.CreateCampaignReq} returns this
*/
proto.api.v0alpha.CreateCampaignReq.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateCampaignReq} returns this
 */
proto.api.v0alpha.CreateCampaignReq.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateCampaignReq.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CampaignModule modules = 2;
 * @return {!Array<!proto.api.v0alpha.CreateCampaignReq.CampaignModule>}
 */
proto.api.v0alpha.CreateCampaignReq.prototype.getModulesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.CreateCampaignReq.CampaignModule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.CreateCampaignReq.CampaignModule, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.CreateCampaignReq.CampaignModule>} value
 * @return {!proto.api.v0alpha.CreateCampaignReq} returns this
*/
proto.api.v0alpha.CreateCampaignReq.prototype.setModulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.CreateCampaignReq.CampaignModule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CreateCampaignReq.CampaignModule}
 */
proto.api.v0alpha.CreateCampaignReq.prototype.addModules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.CreateCampaignReq.CampaignModule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateCampaignReq} returns this
 */
proto.api.v0alpha.CreateCampaignReq.prototype.clearModulesList = function() {
  return this.setModulesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ContactListsDataSource.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ContactListsDataSource.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ContactListsDataSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ContactListsDataSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContactListsDataSource.toObject = function(includeInstance, msg) {
  var f, obj = {
contactListsDataSourceList: jspb.Message.toObjectList(msg.getContactListsDataSourceList(),
    proto.api.v0alpha.ContactListDataSource.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ContactListsDataSource}
 */
proto.api.v0alpha.ContactListsDataSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ContactListsDataSource;
  return proto.api.v0alpha.ContactListsDataSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ContactListsDataSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ContactListsDataSource}
 */
proto.api.v0alpha.ContactListsDataSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.ContactListDataSource;
      reader.readMessage(value,proto.api.v0alpha.ContactListDataSource.deserializeBinaryFromReader);
      msg.addContactListsDataSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ContactListsDataSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ContactListsDataSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ContactListsDataSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContactListsDataSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactListsDataSourceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.ContactListDataSource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ContactListDataSource contact_lists_data_source = 1;
 * @return {!Array<!proto.api.v0alpha.ContactListDataSource>}
 */
proto.api.v0alpha.ContactListsDataSource.prototype.getContactListsDataSourceList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ContactListDataSource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ContactListDataSource, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.ContactListDataSource>} value
 * @return {!proto.api.v0alpha.ContactListsDataSource} returns this
*/
proto.api.v0alpha.ContactListsDataSource.prototype.setContactListsDataSourceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.ContactListDataSource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ContactListDataSource}
 */
proto.api.v0alpha.ContactListsDataSource.prototype.addContactListsDataSource = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.ContactListDataSource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ContactListsDataSource} returns this
 */
proto.api.v0alpha.ContactListsDataSource.prototype.clearContactListsDataSourceList = function() {
  return this.setContactListsDataSourceList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ContactListDataSource.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ContactListDataSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ContactListDataSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContactListDataSource.toObject = function(includeInstance, msg) {
  var f, obj = {
contactListSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ContactListDataSource}
 */
proto.api.v0alpha.ContactListDataSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ContactListDataSource;
  return proto.api.v0alpha.ContactListDataSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ContactListDataSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ContactListDataSource}
 */
proto.api.v0alpha.ContactListDataSource.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ContactListDataSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ContactListDataSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ContactListDataSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ContactListDataSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactListSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 contact_list_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ContactListDataSource.prototype.getContactListSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ContactListDataSource} returns this
 */
proto.api.v0alpha.ContactListDataSource.prototype.setContactListSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListCampaignsReq.repeatedFields_ = [1];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.ListCampaignsReq.oneofGroups_ = [[100,101,102,103,104,105,106,107,108,109]];

/**
 * @enum {number}
 */
proto.api.v0alpha.ListCampaignsReq.FilterCase = {
  FILTER_NOT_SET: 0,
  BY_IDS: 100,
  BY_PROJECT: 101,
  BY_TIME: 102,
  BY_UNSUBSCRIBE_LINK: 103,
  BY_CONNECTED_INBOX: 104,
  BY_VERIFIED_EMAIL: 105,
  BY_SMS_NUMBER: 106,
  BY_WHATSAPP_NUMBER: 107,
  BY_WHATS_APP: 108,
  BY_MODULE_TYPE: 109
};

/**
 * @return {proto.api.v0alpha.ListCampaignsReq.FilterCase}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getFilterCase = function() {
  return /** @type {proto.api.v0alpha.ListCampaignsReq.FilterCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
statusesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
byIds: (f = msg.getByIds()) && proto.api.v0alpha.ListCampaignsReq.ByIds.toObject(includeInstance, f),
byProject: (f = msg.getByProject()) && proto.api.v0alpha.ListCampaignsReq.ByProject.toObject(includeInstance, f),
byTime: (f = msg.getByTime()) && proto.api.v0alpha.ListCampaignsReq.ByTime.toObject(includeInstance, f),
byUnsubscribeLink: (f = msg.getByUnsubscribeLink()) && proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.toObject(includeInstance, f),
byConnectedInbox: (f = msg.getByConnectedInbox()) && proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.toObject(includeInstance, f),
byVerifiedEmail: (f = msg.getByVerifiedEmail()) && proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.toObject(includeInstance, f),
bySmsNumber: (f = msg.getBySmsNumber()) && proto.api.v0alpha.ListCampaignsReq.BySmsNumber.toObject(includeInstance, f),
byWhatsappNumber: (f = msg.getByWhatsappNumber()) && proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.toObject(includeInstance, f),
byWhatsApp: (f = msg.getByWhatsApp()) && proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.toObject(includeInstance, f),
byModuleType: (f = msg.getByModuleType()) && proto.api.v0alpha.ListCampaignsReq.ByModuleType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq}
 */
proto.api.v0alpha.ListCampaignsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq;
  return proto.api.v0alpha.ListCampaignsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq}
 */
proto.api.v0alpha.ListCampaignsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.OmniCampaignStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStatuses(values[i]);
      }
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 100:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByIds;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByIds.deserializeBinaryFromReader);
      msg.setByIds(value);
      break;
    case 101:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByProject;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByProject.deserializeBinaryFromReader);
      msg.setByProject(value);
      break;
    case 102:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByTime;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByTime.deserializeBinaryFromReader);
      msg.setByTime(value);
      break;
    case 103:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.deserializeBinaryFromReader);
      msg.setByUnsubscribeLink(value);
      break;
    case 104:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.deserializeBinaryFromReader);
      msg.setByConnectedInbox(value);
      break;
    case 105:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.deserializeBinaryFromReader);
      msg.setByVerifiedEmail(value);
      break;
    case 106:
      var value = new proto.api.v0alpha.ListCampaignsReq.BySmsNumber;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.BySmsNumber.deserializeBinaryFromReader);
      msg.setBySmsNumber(value);
      break;
    case 107:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.deserializeBinaryFromReader);
      msg.setByWhatsappNumber(value);
      break;
    case 108:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByWhatsApp;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.deserializeBinaryFromReader);
      msg.setByWhatsApp(value);
      break;
    case 109:
      var value = new proto.api.v0alpha.ListCampaignsReq.ByModuleType;
      reader.readMessage(value,proto.api.v0alpha.ListCampaignsReq.ByModuleType.deserializeBinaryFromReader);
      msg.setByModuleType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusesList();
  if (f.length > 0) {
    writer.writePackedEnum(
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
  f = message.getByIds();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByIds.serializeBinaryToWriter
    );
  }
  f = message.getByProject();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByProject.serializeBinaryToWriter
    );
  }
  f = message.getByTime();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByTime.serializeBinaryToWriter
    );
  }
  f = message.getByUnsubscribeLink();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.serializeBinaryToWriter
    );
  }
  f = message.getByConnectedInbox();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.serializeBinaryToWriter
    );
  }
  f = message.getByVerifiedEmail();
  if (f != null) {
    writer.writeMessage(
      105,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.serializeBinaryToWriter
    );
  }
  f = message.getBySmsNumber();
  if (f != null) {
    writer.writeMessage(
      106,
      f,
      proto.api.v0alpha.ListCampaignsReq.BySmsNumber.serializeBinaryToWriter
    );
  }
  f = message.getByWhatsappNumber();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.serializeBinaryToWriter
    );
  }
  f = message.getByWhatsApp();
  if (f != null) {
    writer.writeMessage(
      108,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.serializeBinaryToWriter
    );
  }
  f = message.getByModuleType();
  if (f != null) {
    writer.writeMessage(
      109,
      f,
      proto.api.v0alpha.ListCampaignsReq.ByModuleType.serializeBinaryToWriter
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
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.toObject = function(includeInstance, msg) {
  var f, obj = {
inboxSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox}
 */
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox;
  return proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox}
 */
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInboxSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboxSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 inbox_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.prototype.getInboxSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox.prototype.setInboxSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByIds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByIds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByIds}
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByIds;
  return proto.api.v0alpha.ListCampaignsReq.ByIds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByIds}
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<string>} */ (reader.isDelimited() ? reader.readPackedInt64String() : [reader.readInt64String()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCampaignSids(values[i]);
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
proto.api.v0alpha.ListCampaignsReq.ByIds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSidsList();
  if (f.length > 0) {
    writer.writePackedInt64String(
      1,
      f
    );
  }
};


/**
 * repeated int64 campaign_sids = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.prototype.getCampaignSidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByIds} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.prototype.setCampaignSidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByIds} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.prototype.addCampaignSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByIds} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByIds.prototype.clearCampaignSidsList = function() {
  return this.setCampaignSidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCampaignsReq.ByProject.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByProject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByProject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByProject.toObject = function(includeInstance, msg) {
  var f, obj = {
projectSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByProject}
 */
proto.api.v0alpha.ListCampaignsReq.ByProject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByProject;
  return proto.api.v0alpha.ListCampaignsReq.ByProject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByProject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByProject}
 */
proto.api.v0alpha.ListCampaignsReq.ByProject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.ByProject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByProject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByProject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByProject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 project_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ListCampaignsReq.ByProject.prototype.getProjectSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByProject} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByProject.prototype.setProjectSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.toObject = function(includeInstance, msg) {
  var f, obj = {
searchFrom: (f = msg.getSearchFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
searchTo: (f = msg.getSearchTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByTime}
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByTime;
  return proto.api.v0alpha.ListCampaignsReq.ByTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByTime}
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSearchFrom(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSearchTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSearchTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp search_from = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.getSearchFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByTime} returns this
*/
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.setSearchFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByTime} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.clearSearchFrom = function() {
  return this.setSearchFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.hasSearchFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp search_to = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.getSearchTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByTime} returns this
*/
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.setSearchTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByTime} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.clearSearchTo = function() {
  return this.setSearchTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.ByTime.prototype.hasSearchTo = function() {
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
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.toObject = function(includeInstance, msg) {
  var f, obj = {
linkSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink}
 */
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink;
  return proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink}
 */
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setLinkSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinkSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 link_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.prototype.getLinkSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink.prototype.setLinkSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.toObject = function(includeInstance, msg) {
  var f, obj = {
emailSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail}
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail;
  return proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail}
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setEmailSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 email_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.prototype.getEmailSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail.prototype.setEmailSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.BySmsNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.BySmsNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
number: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.BySmsNumber}
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.BySmsNumber;
  return proto.api.v0alpha.ListCampaignsReq.BySmsNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.BySmsNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.BySmsNumber}
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.BySmsNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.BySmsNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string number = 1;
 * @return {string}
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.BySmsNumber} returns this
 */
proto.api.v0alpha.ListCampaignsReq.BySmsNumber.prototype.setNumber = function(value) {
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
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
number: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber}
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber;
  return proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber}
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string number = 1;
 * @return {string}
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber.prototype.setNumber = function(value) {
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
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByWhatsApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.toObject = function(includeInstance, msg) {
  var f, obj = {
number: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByWhatsApp}
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByWhatsApp;
  return proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByWhatsApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByWhatsApp}
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByWhatsApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string number = 1;
 * @return {string}
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByWhatsApp} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByWhatsApp.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsReq.ByModuleType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.toObject = function(includeInstance, msg) {
  var f, obj = {
moduleTypeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
channelTypeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByModuleType}
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsReq.ByModuleType;
  return proto.api.v0alpha.ListCampaignsReq.ByModuleType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByModuleType}
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.OmniCampaignModuleType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addModuleType(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<!proto.api.commons.ChannelType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addChannelType(values[i]);
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
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsReq.ByModuleType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getChannelTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * repeated api.commons.OmniCampaignModuleType module_type = 1;
 * @return {!Array<!proto.api.commons.OmniCampaignModuleType>}
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.getModuleTypeList = function() {
  return /** @type {!Array<!proto.api.commons.OmniCampaignModuleType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.OmniCampaignModuleType>} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.setModuleTypeList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.OmniCampaignModuleType} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.addModuleType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.clearModuleTypeList = function() {
  return this.setModuleTypeList([]);
};


/**
 * repeated api.commons.ChannelType channel_type = 2;
 * @return {!Array<!proto.api.commons.ChannelType>}
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.getChannelTypeList = function() {
  return /** @type {!Array<!proto.api.commons.ChannelType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.api.commons.ChannelType>} value
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.setChannelTypeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.addChannelType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCampaignsReq.ByModuleType} returns this
 */
proto.api.v0alpha.ListCampaignsReq.ByModuleType.prototype.clearChannelTypeList = function() {
  return this.setChannelTypeList([]);
};


/**
 * repeated api.commons.OmniCampaignStatus statuses = 1;
 * @return {!Array<!proto.api.commons.OmniCampaignStatus>}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getStatusesList = function() {
  return /** @type {!Array<!proto.api.commons.OmniCampaignStatus>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.OmniCampaignStatus>} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.setStatusesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.OmniCampaignStatus} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.addStatuses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearStatusesList = function() {
  return this.setStatusesList([]);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ByIds by_ids = 100;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByIds}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByIds = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByIds} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByIds, 100));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByIds|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByIds = function() {
  return this.setByIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByIds = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional ByProject by_project = 101;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByProject}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByProject = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByProject} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByProject, 101));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByProject|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByProject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByProject = function() {
  return this.setByProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByProject = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional ByTime by_time = 102;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByTime}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByTime = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByTime} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByTime, 102));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByTime|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByTime = function() {
  return this.setByTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByTime = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional ByUnsubscribeLink by_unsubscribe_link = 103;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByUnsubscribeLink = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink, 103));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByUnsubscribeLink|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByUnsubscribeLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 103, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByUnsubscribeLink = function() {
  return this.setByUnsubscribeLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByUnsubscribeLink = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional ByConnectedInbox by_connected_inbox = 104;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByConnectedInbox = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox, 104));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByConnectedInbox|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByConnectedInbox = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByConnectedInbox = function() {
  return this.setByConnectedInbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByConnectedInbox = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * optional ByVerifiedEmail by_verified_email = 105;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByVerifiedEmail = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail, 105));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByVerifiedEmail|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByVerifiedEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 105, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByVerifiedEmail = function() {
  return this.setByVerifiedEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByVerifiedEmail = function() {
  return jspb.Message.getField(this, 105) != null;
};


/**
 * optional BySmsNumber by_sms_number = 106;
 * @return {?proto.api.v0alpha.ListCampaignsReq.BySmsNumber}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getBySmsNumber = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.BySmsNumber} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.BySmsNumber, 106));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.BySmsNumber|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setBySmsNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 106, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearBySmsNumber = function() {
  return this.setBySmsNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasBySmsNumber = function() {
  return jspb.Message.getField(this, 106) != null;
};


/**
 * optional ByWhatsAppNumber by_whatsapp_number = 107;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByWhatsappNumber = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber, 107));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByWhatsAppNumber|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByWhatsappNumber = function(value) {
  return jspb.Message.setOneofWrapperField(this, 107, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByWhatsappNumber = function() {
  return this.setByWhatsappNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByWhatsappNumber = function() {
  return jspb.Message.getField(this, 107) != null;
};


/**
 * optional ByWhatsApp by_whats_app = 108;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByWhatsApp}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByWhatsApp = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByWhatsApp} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByWhatsApp, 108));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByWhatsApp|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByWhatsApp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 108, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByWhatsApp = function() {
  return this.setByWhatsApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByWhatsApp = function() {
  return jspb.Message.getField(this, 108) != null;
};


/**
 * optional ByModuleType by_module_type = 109;
 * @return {?proto.api.v0alpha.ListCampaignsReq.ByModuleType}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.getByModuleType = function() {
  return /** @type{?proto.api.v0alpha.ListCampaignsReq.ByModuleType} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListCampaignsReq.ByModuleType, 109));
};


/**
 * @param {?proto.api.v0alpha.ListCampaignsReq.ByModuleType|undefined} value
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
*/
proto.api.v0alpha.ListCampaignsReq.prototype.setByModuleType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 109, proto.api.v0alpha.ListCampaignsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListCampaignsReq} returns this
 */
proto.api.v0alpha.ListCampaignsReq.prototype.clearByModuleType = function() {
  return this.setByModuleType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListCampaignsReq.prototype.hasByModuleType = function() {
  return jspb.Message.getField(this, 109) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListCampaignsRes.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCampaignsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCampaignsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCampaignsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignsList: jspb.Message.toObjectList(msg.getCampaignsList(),
    api_commons_omnichannel_pb.OmniCampaign.toObject, includeInstance),
modulesList: jspb.Message.toObjectList(msg.getModulesList(),
    api_commons_omnichannel_pb.OmniCampaignModule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCampaignsRes}
 */
proto.api.v0alpha.ListCampaignsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCampaignsRes;
  return proto.api.v0alpha.ListCampaignsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCampaignsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCampaignsRes}
 */
proto.api.v0alpha.ListCampaignsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.addCampaigns(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaignModule;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaignModule.deserializeBinaryFromReader);
      msg.addModules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCampaignsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCampaignsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCampaignsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCampaignsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
  f = message.getModulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaignModule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.OmniCampaign campaigns = 1;
 * @return {!Array<!proto.api.commons.OmniCampaign>}
 */
proto.api.v0alpha.ListCampaignsRes.prototype.getCampaignsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniCampaign>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 1));
};


/**
 * @param {!Array<!proto.api.commons.OmniCampaign>} value
 * @return {!proto.api.v0alpha.ListCampaignsRes} returns this
*/
proto.api.v0alpha.ListCampaignsRes.prototype.setCampaignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.OmniCampaign=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniCampaign}
 */
proto.api.v0alpha.ListCampaignsRes.prototype.addCampaigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.OmniCampaign, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCampaignsRes} returns this
 */
proto.api.v0alpha.ListCampaignsRes.prototype.clearCampaignsList = function() {
  return this.setCampaignsList([]);
};


/**
 * repeated api.commons.OmniCampaignModule modules = 2;
 * @return {!Array<!proto.api.commons.OmniCampaignModule>}
 */
proto.api.v0alpha.ListCampaignsRes.prototype.getModulesList = function() {
  return /** @type{!Array<!proto.api.commons.OmniCampaignModule>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniCampaignModule, 2));
};


/**
 * @param {!Array<!proto.api.commons.OmniCampaignModule>} value
 * @return {!proto.api.v0alpha.ListCampaignsRes} returns this
*/
proto.api.v0alpha.ListCampaignsRes.prototype.setModulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.OmniCampaignModule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniCampaignModule}
 */
proto.api.v0alpha.ListCampaignsRes.prototype.addModules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.OmniCampaignModule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCampaignsRes} returns this
 */
proto.api.v0alpha.ListCampaignsRes.prototype.clearModulesList = function() {
  return this.setModulesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetCampaignByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetCampaignByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetCampaignByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCampaignByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetCampaignByIdReq}
 */
proto.api.v0alpha.GetCampaignByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetCampaignByIdReq;
  return proto.api.v0alpha.GetCampaignByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetCampaignByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetCampaignByIdReq}
 */
proto.api.v0alpha.GetCampaignByIdReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetCampaignByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetCampaignByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetCampaignByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCampaignByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.GetCampaignByIdReq.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetCampaignByIdReq} returns this
 */
proto.api.v0alpha.GetCampaignByIdReq.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetOffLoadedTextMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetOffLoadedTextMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
location: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetOffLoadedTextMessageReq}
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetOffLoadedTextMessageReq;
  return proto.api.v0alpha.GetOffLoadedTextMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetOffLoadedTextMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetOffLoadedTextMessageReq}
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetOffLoadedTextMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetOffLoadedTextMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetOffLoadedTextMessageReq} returns this
 */
proto.api.v0alpha.GetOffLoadedTextMessageReq.prototype.setLocation = function(value) {
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
proto.api.v0alpha.GetOffLoadedTextMessageRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetOffLoadedTextMessageRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetOffLoadedTextMessageRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOffLoadedTextMessageRes.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetOffLoadedTextMessageRes}
 */
proto.api.v0alpha.GetOffLoadedTextMessageRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetOffLoadedTextMessageRes;
  return proto.api.v0alpha.GetOffLoadedTextMessageRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetOffLoadedTextMessageRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetOffLoadedTextMessageRes}
 */
proto.api.v0alpha.GetOffLoadedTextMessageRes.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetOffLoadedTextMessageRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetOffLoadedTextMessageRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetOffLoadedTextMessageRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOffLoadedTextMessageRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.api.v0alpha.GetOffLoadedTextMessageRes.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetOffLoadedTextMessageRes} returns this
 */
proto.api.v0alpha.GetOffLoadedTextMessageRes.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.ManagerListMessagesReq.oneofGroups_ = [[101,102]];

/**
 * @enum {number}
 */
proto.api.v0alpha.ManagerListMessagesReq.FilterCase = {
  FILTER_NOT_SET: 0,
  BY_CONVERSATION_SID: 101,
  BY_TASK_SID: 102
};

/**
 * @return {proto.api.v0alpha.ManagerListMessagesReq.FilterCase}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.getFilterCase = function() {
  return /** @type {proto.api.v0alpha.ManagerListMessagesReq.FilterCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.ManagerListMessagesReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ManagerListMessagesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ManagerListMessagesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerListMessagesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
live: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
channelType: jspb.Message.getFieldWithDefault(msg, 5, 0),
byConversationSid: (f = msg.getByConversationSid()) && proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.toObject(includeInstance, f),
byTaskSid: (f = msg.getByTaskSid()) && proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq}
 */
proto.api.v0alpha.ManagerListMessagesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ManagerListMessagesReq;
  return proto.api.v0alpha.ManagerListMessagesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ManagerListMessagesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq}
 */
proto.api.v0alpha.ManagerListMessagesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLive(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 101:
      var value = new proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid;
      reader.readMessage(value,proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.deserializeBinaryFromReader);
      msg.setByConversationSid(value);
      break;
    case 102:
      var value = new proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid;
      reader.readMessage(value,proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.deserializeBinaryFromReader);
      msg.setByTaskSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ManagerListMessagesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ManagerListMessagesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerListMessagesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLive();
  if (f) {
    writer.writeBool(
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
  f = message.getByConversationSid();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.serializeBinaryToWriter
    );
  }
  f = message.getByTaskSid();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.serializeBinaryToWriter
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
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid;
  return proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid} returns this
 */
proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.toObject = function(includeInstance, msg) {
  var f, obj = {
taskSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid;
  return proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 task_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.prototype.getTaskSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid} returns this
 */
proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid.prototype.setTaskSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
*/
proto.api.v0alpha.ManagerListMessagesReq.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool live = 4;
 * @return {boolean}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.getLive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.setLive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional api.commons.ChannelType channel_type = 5;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ByConversationSid by_conversation_sid = 101;
 * @return {?proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.getByConversationSid = function() {
  return /** @type{?proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid, 101));
};


/**
 * @param {?proto.api.v0alpha.ManagerListMessagesReq.ByConversationSid|undefined} value
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
*/
proto.api.v0alpha.ManagerListMessagesReq.prototype.setByConversationSid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.api.v0alpha.ManagerListMessagesReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.clearByConversationSid = function() {
  return this.setByConversationSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.hasByConversationSid = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional ByTaskSid by_task_sid = 102;
 * @return {?proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.getByTaskSid = function() {
  return /** @type{?proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid, 102));
};


/**
 * @param {?proto.api.v0alpha.ManagerListMessagesReq.ByTaskSid|undefined} value
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
*/
proto.api.v0alpha.ManagerListMessagesReq.prototype.setByTaskSid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.api.v0alpha.ManagerListMessagesReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ManagerListMessagesReq} returns this
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.clearByTaskSid = function() {
  return this.setByTaskSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ManagerListMessagesReq.prototype.hasByTaskSid = function() {
  return jspb.Message.getField(this, 102) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.ListMessagesReq.oneofGroups_ = [[101]];

/**
 * @enum {number}
 */
proto.api.v0alpha.ListMessagesReq.FilterCase = {
  FILTER_NOT_SET: 0,
  BY_CONVERSATION_SID: 101
};

/**
 * @return {proto.api.v0alpha.ListMessagesReq.FilterCase}
 */
proto.api.v0alpha.ListMessagesReq.prototype.getFilterCase = function() {
  return /** @type {proto.api.v0alpha.ListMessagesReq.FilterCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.ListMessagesReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListMessagesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListMessagesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListMessagesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListMessagesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
live: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
channelType: jspb.Message.getFieldWithDefault(msg, 6, 0),
byConversationSid: (f = msg.getByConversationSid()) && proto.api.v0alpha.ListMessagesReq.ByConversationSid.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListMessagesReq}
 */
proto.api.v0alpha.ListMessagesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListMessagesReq;
  return proto.api.v0alpha.ListMessagesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListMessagesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListMessagesReq}
 */
proto.api.v0alpha.ListMessagesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLive(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 101:
      var value = new proto.api.v0alpha.ListMessagesReq.ByConversationSid;
      reader.readMessage(value,proto.api.v0alpha.ListMessagesReq.ByConversationSid.deserializeBinaryFromReader);
      msg.setByConversationSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListMessagesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListMessagesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListMessagesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListMessagesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLive();
  if (f) {
    writer.writeBool(
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
  f = message.getByConversationSid();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.api.v0alpha.ListMessagesReq.ByConversationSid.serializeBinaryToWriter
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
proto.api.v0alpha.ListMessagesReq.ByConversationSid.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListMessagesReq.ByConversationSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListMessagesReq.ByConversationSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListMessagesReq.ByConversationSid.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListMessagesReq.ByConversationSid}
 */
proto.api.v0alpha.ListMessagesReq.ByConversationSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListMessagesReq.ByConversationSid;
  return proto.api.v0alpha.ListMessagesReq.ByConversationSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListMessagesReq.ByConversationSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListMessagesReq.ByConversationSid}
 */
proto.api.v0alpha.ListMessagesReq.ByConversationSid.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListMessagesReq.ByConversationSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListMessagesReq.ByConversationSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListMessagesReq.ByConversationSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListMessagesReq.ByConversationSid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ListMessagesReq.ByConversationSid.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListMessagesReq.ByConversationSid} returns this
 */
proto.api.v0alpha.ListMessagesReq.ByConversationSid.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListMessagesReq.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListMessagesReq} returns this
*/
proto.api.v0alpha.ListMessagesReq.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListMessagesReq} returns this
 */
proto.api.v0alpha.ListMessagesReq.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListMessagesReq.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool live = 5;
 * @return {boolean}
 */
proto.api.v0alpha.ListMessagesReq.prototype.getLive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ListMessagesReq} returns this
 */
proto.api.v0alpha.ListMessagesReq.prototype.setLive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional api.commons.ChannelType channel_type = 6;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.v0alpha.ListMessagesReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.v0alpha.ListMessagesReq} returns this
 */
proto.api.v0alpha.ListMessagesReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ByConversationSid by_conversation_sid = 101;
 * @return {?proto.api.v0alpha.ListMessagesReq.ByConversationSid}
 */
proto.api.v0alpha.ListMessagesReq.prototype.getByConversationSid = function() {
  return /** @type{?proto.api.v0alpha.ListMessagesReq.ByConversationSid} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListMessagesReq.ByConversationSid, 101));
};


/**
 * @param {?proto.api.v0alpha.ListMessagesReq.ByConversationSid|undefined} value
 * @return {!proto.api.v0alpha.ListMessagesReq} returns this
*/
proto.api.v0alpha.ListMessagesReq.prototype.setByConversationSid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.api.v0alpha.ListMessagesReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListMessagesReq} returns this
 */
proto.api.v0alpha.ListMessagesReq.prototype.clearByConversationSid = function() {
  return this.setByConversationSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListMessagesReq.prototype.hasByConversationSid = function() {
  return jspb.Message.getField(this, 101) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ChatMessageUserInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ChatMessageUserInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ChatMessageUserInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ChatMessageUserInformation.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ChatMessageUserInformation}
 */
proto.api.v0alpha.ChatMessageUserInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ChatMessageUserInformation;
  return proto.api.v0alpha.ChatMessageUserInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ChatMessageUserInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ChatMessageUserInformation}
 */
proto.api.v0alpha.ChatMessageUserInformation.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ChatMessageUserInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ChatMessageUserInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ChatMessageUserInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ChatMessageUserInformation.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ChatMessageUserInformation.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ChatMessageUserInformation} returns this
 */
proto.api.v0alpha.ChatMessageUserInformation.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.ChatMessageUserInformation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ChatMessageUserInformation} returns this
 */
proto.api.v0alpha.ChatMessageUserInformation.prototype.setName = function(value) {
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
proto.api.v0alpha.SendOmniMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendOmniMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendOmniMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendOmniMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
payload: (f = msg.getPayload()) && api_commons_omnichannel_pb.OmniMessagePayload.toObject(includeInstance, f),
campaignSid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
uiReferenceId: jspb.Message.getFieldWithDefault(msg, 5, ""),
channelType: jspb.Message.getFieldWithDefault(msg, 6, 0),
messageFormat: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SendOmniMessageReq}
 */
proto.api.v0alpha.SendOmniMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendOmniMessageReq;
  return proto.api.v0alpha.SendOmniMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendOmniMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendOmniMessageReq}
 */
proto.api.v0alpha.SendOmniMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new api_commons_omnichannel_pb.OmniMessagePayload;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessagePayload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUiReferenceId(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 7:
      var value = /** @type {!proto.api.commons.MessageFormat} */ (reader.readEnum());
      msg.setMessageFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendOmniMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendOmniMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendOmniMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_omnichannel_pb.OmniMessagePayload.serializeBinaryToWriter
    );
  }
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
  f = message.getUiReferenceId();
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
  f = message.getMessageFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendOmniMessageReq} returns this
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniMessagePayload payload = 3;
 * @return {?proto.api.commons.OmniMessagePayload}
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.getPayload = function() {
  return /** @type{?proto.api.commons.OmniMessagePayload} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessagePayload, 3));
};


/**
 * @param {?proto.api.commons.OmniMessagePayload|undefined} value
 * @return {!proto.api.v0alpha.SendOmniMessageReq} returns this
*/
proto.api.v0alpha.SendOmniMessageReq.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SendOmniMessageReq} returns this
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 campaign_sid = 4;
 * @return {string}
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendOmniMessageReq} returns this
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional string ui_reference_id = 5;
 * @return {string}
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.getUiReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendOmniMessageReq} returns this
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.setUiReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional api.commons.ChannelType channel_type = 6;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.v0alpha.SendOmniMessageReq} returns this
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional api.commons.MessageFormat message_format = 7;
 * @return {!proto.api.commons.MessageFormat}
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.getMessageFormat = function() {
  return /** @type {!proto.api.commons.MessageFormat} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.api.commons.MessageFormat} value
 * @return {!proto.api.v0alpha.SendOmniMessageReq} returns this
 */
proto.api.v0alpha.SendOmniMessageReq.prototype.setMessageFormat = function(value) {
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
proto.api.v0alpha.UpdateCampaignReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCampaignReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCampaignReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCampaignReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaign: (f = msg.getCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f),
userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.api.v0alpha.UpdateCampaignReq}
 */
proto.api.v0alpha.UpdateCampaignReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCampaignReq;
  return proto.api.v0alpha.UpdateCampaignReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCampaignReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCampaignReq}
 */
proto.api.v0alpha.UpdateCampaignReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 100:
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
proto.api.v0alpha.UpdateCampaignReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCampaignReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCampaignReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCampaignReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.OmniCampaign campaign = 1;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.v0alpha.UpdateCampaignReq.prototype.getCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 1));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.v0alpha.UpdateCampaignReq} returns this
*/
proto.api.v0alpha.UpdateCampaignReq.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateCampaignReq} returns this
 */
proto.api.v0alpha.UpdateCampaignReq.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateCampaignReq.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateCampaignReq.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCampaignReq} returns this
 */
proto.api.v0alpha.UpdateCampaignReq.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 100;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.UpdateCampaignReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 100));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.UpdateCampaignReq} returns this
*/
proto.api.v0alpha.UpdateCampaignReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateCampaignReq} returns this
 */
proto.api.v0alpha.UpdateCampaignReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateCampaignReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 100) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateCampaignRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCampaignRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCampaignRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCampaignRes.toObject = function(includeInstance, msg) {
  var f, obj = {
notifierId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateCampaignRes}
 */
proto.api.v0alpha.UpdateCampaignRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCampaignRes;
  return proto.api.v0alpha.UpdateCampaignRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCampaignRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCampaignRes}
 */
proto.api.v0alpha.UpdateCampaignRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotifierId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateCampaignRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCampaignRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCampaignRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCampaignRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotifierId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string notifier_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateCampaignRes.prototype.getNotifierId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCampaignRes} returns this
 */
proto.api.v0alpha.UpdateCampaignRes.prototype.setNotifierId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListConversationsReq.repeatedFields_ = [1,3];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.ListConversationsReq.oneofGroups_ = [[100,101,102]];

/**
 * @enum {number}
 */
proto.api.v0alpha.ListConversationsReq.FilterCase = {
  FILTER_NOT_SET: 0,
  BY_TIME: 100,
  BY_ASSIGNED_USER: 101,
  BY_CONVERSATION_SIDS: 102
};

/**
 * @return {proto.api.v0alpha.ListConversationsReq.FilterCase}
 */
proto.api.v0alpha.ListConversationsReq.prototype.getFilterCase = function() {
  return /** @type {proto.api.v0alpha.ListConversationsReq.FilterCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.ListConversationsReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListConversationsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConversationsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConversationsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
channelTypesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
statusesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
byTime: (f = msg.getByTime()) && proto.api.v0alpha.ListConversationsReq.ByTime.toObject(includeInstance, f),
byAssignedUser: (f = msg.getByAssignedUser()) && proto.api.v0alpha.ListConversationsReq.ByAssignedUser.toObject(includeInstance, f),
byConversationSids: (f = msg.getByConversationSids()) && proto.api.v0alpha.ListConversationsReq.ByConversationSids.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConversationsReq}
 */
proto.api.v0alpha.ListConversationsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConversationsReq;
  return proto.api.v0alpha.ListConversationsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConversationsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConversationsReq}
 */
proto.api.v0alpha.ListConversationsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.ChannelType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addChannelTypes(values[i]);
      }
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.api.commons.ConversationStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStatuses(values[i]);
      }
      break;
    case 100:
      var value = new proto.api.v0alpha.ListConversationsReq.ByTime;
      reader.readMessage(value,proto.api.v0alpha.ListConversationsReq.ByTime.deserializeBinaryFromReader);
      msg.setByTime(value);
      break;
    case 101:
      var value = new proto.api.v0alpha.ListConversationsReq.ByAssignedUser;
      reader.readMessage(value,proto.api.v0alpha.ListConversationsReq.ByAssignedUser.deserializeBinaryFromReader);
      msg.setByAssignedUser(value);
      break;
    case 102:
      var value = new proto.api.v0alpha.ListConversationsReq.ByConversationSids;
      reader.readMessage(value,proto.api.v0alpha.ListConversationsReq.ByConversationSids.deserializeBinaryFromReader);
      msg.setByConversationSids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConversationsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConversationsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConversationsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
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
  f = message.getStatusesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getByTime();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.v0alpha.ListConversationsReq.ByTime.serializeBinaryToWriter
    );
  }
  f = message.getByAssignedUser();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.api.v0alpha.ListConversationsReq.ByAssignedUser.serializeBinaryToWriter
    );
  }
  f = message.getByConversationSids();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.api.v0alpha.ListConversationsReq.ByConversationSids.serializeBinaryToWriter
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
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConversationsReq.ByTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConversationsReq.ByTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsReq.ByTime.toObject = function(includeInstance, msg) {
  var f, obj = {
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByTime}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConversationsReq.ByTime;
  return proto.api.v0alpha.ListConversationsReq.ByTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConversationsReq.ByTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByTime}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConversationsReq.ByTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConversationsReq.ByTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsReq.ByTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp start_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByTime} returns this
*/
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByTime} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByTime} returns this
*/
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByTime} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 page_size = 4;
 * @return {number}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByTime} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByTime} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByTime.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConversationsReq.ByAssignedUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
statusesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser}
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConversationsReq.ByAssignedUser;
  return proto.api.v0alpha.ListConversationsReq.ByAssignedUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser}
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<!proto.api.commons.ConversationStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStatuses(values[i]);
      }
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConversationsReq.ByAssignedUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatusesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated api.commons.ConversationStatus statuses = 2;
 * @return {!Array<!proto.api.commons.ConversationStatus>}
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.getStatusesList = function() {
  return /** @type {!Array<!proto.api.commons.ConversationStatus>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.api.commons.ConversationStatus>} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.setStatusesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.api.commons.ConversationStatus} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.addStatuses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.clearStatusesList = function() {
  return this.setStatusesList([]);
};


/**
 * optional uint32 page_size = 4;
 * @return {number}
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByAssignedUser} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByAssignedUser.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConversationsReq.ByConversationSids.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConversationsReq.ByConversationSids} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationSidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByConversationSids}
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConversationsReq.ByConversationSids;
  return proto.api.v0alpha.ListConversationsReq.ByConversationSids.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConversationsReq.ByConversationSids} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByConversationSids}
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addConversationSids(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConversationsReq.ByConversationSids.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConversationsReq.ByConversationSids} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * repeated string conversation_sids = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.getConversationSidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByConversationSids} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.setConversationSidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListConversationsReq.ByConversationSids} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.addConversationSids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConversationsReq.ByConversationSids} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.clearConversationSidsList = function() {
  return this.setConversationSidsList([]);
};


/**
 * optional uint32 page_size = 4;
 * @return {number}
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByConversationSids} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListConversationsReq.ByConversationSids} returns this
 */
proto.api.v0alpha.ListConversationsReq.ByConversationSids.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated api.commons.ChannelType channel_types = 1;
 * @return {!Array<!proto.api.commons.ChannelType>}
 */
proto.api.v0alpha.ListConversationsReq.prototype.getChannelTypesList = function() {
  return /** @type {!Array<!proto.api.commons.ChannelType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.ChannelType>} value
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.setChannelTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.addChannelTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.clearChannelTypesList = function() {
  return this.setChannelTypesList([]);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.ListConversationsReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
*/
proto.api.v0alpha.ListConversationsReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConversationsReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated api.commons.ConversationStatus statuses = 3;
 * @return {!Array<!proto.api.commons.ConversationStatus>}
 */
proto.api.v0alpha.ListConversationsReq.prototype.getStatusesList = function() {
  return /** @type {!Array<!proto.api.commons.ConversationStatus>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.api.commons.ConversationStatus>} value
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.setStatusesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.api.commons.ConversationStatus} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.addStatuses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.clearStatusesList = function() {
  return this.setStatusesList([]);
};


/**
 * optional ByTime by_time = 100;
 * @return {?proto.api.v0alpha.ListConversationsReq.ByTime}
 */
proto.api.v0alpha.ListConversationsReq.prototype.getByTime = function() {
  return /** @type{?proto.api.v0alpha.ListConversationsReq.ByTime} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListConversationsReq.ByTime, 100));
};


/**
 * @param {?proto.api.v0alpha.ListConversationsReq.ByTime|undefined} value
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
*/
proto.api.v0alpha.ListConversationsReq.prototype.setByTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.v0alpha.ListConversationsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.clearByTime = function() {
  return this.setByTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConversationsReq.prototype.hasByTime = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional ByAssignedUser by_assigned_user = 101;
 * @return {?proto.api.v0alpha.ListConversationsReq.ByAssignedUser}
 */
proto.api.v0alpha.ListConversationsReq.prototype.getByAssignedUser = function() {
  return /** @type{?proto.api.v0alpha.ListConversationsReq.ByAssignedUser} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListConversationsReq.ByAssignedUser, 101));
};


/**
 * @param {?proto.api.v0alpha.ListConversationsReq.ByAssignedUser|undefined} value
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
*/
proto.api.v0alpha.ListConversationsReq.prototype.setByAssignedUser = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.api.v0alpha.ListConversationsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.clearByAssignedUser = function() {
  return this.setByAssignedUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConversationsReq.prototype.hasByAssignedUser = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional ByConversationSids by_conversation_sids = 102;
 * @return {?proto.api.v0alpha.ListConversationsReq.ByConversationSids}
 */
proto.api.v0alpha.ListConversationsReq.prototype.getByConversationSids = function() {
  return /** @type{?proto.api.v0alpha.ListConversationsReq.ByConversationSids} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListConversationsReq.ByConversationSids, 102));
};


/**
 * @param {?proto.api.v0alpha.ListConversationsReq.ByConversationSids|undefined} value
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
*/
proto.api.v0alpha.ListConversationsReq.prototype.setByConversationSids = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.api.v0alpha.ListConversationsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConversationsReq} returns this
 */
proto.api.v0alpha.ListConversationsReq.prototype.clearByConversationSids = function() {
  return this.setByConversationSids(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConversationsReq.prototype.hasByConversationSids = function() {
  return jspb.Message.getField(this, 102) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListConversationsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListConversationsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConversationsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConversationsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationsList: jspb.Message.toObjectList(msg.getConversationsList(),
    api_commons_omnichannel_pb.OmniConversation.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConversationsRes}
 */
proto.api.v0alpha.ListConversationsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConversationsRes;
  return proto.api.v0alpha.ListConversationsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConversationsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConversationsRes}
 */
proto.api.v0alpha.ListConversationsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.addConversations(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConversationsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConversationsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConversationsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConversationsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated api.commons.OmniConversation conversations = 1;
 * @return {!Array<!proto.api.commons.OmniConversation>}
 */
proto.api.v0alpha.ListConversationsRes.prototype.getConversationsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniConversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 1));
};


/**
 * @param {!Array<!proto.api.commons.OmniConversation>} value
 * @return {!proto.api.v0alpha.ListConversationsRes} returns this
*/
proto.api.v0alpha.ListConversationsRes.prototype.setConversationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.OmniConversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniConversation}
 */
proto.api.v0alpha.ListConversationsRes.prototype.addConversations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.OmniConversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConversationsRes} returns this
 */
proto.api.v0alpha.ListConversationsRes.prototype.clearConversationsList = function() {
  return this.setConversationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.api.v0alpha.ListConversationsRes.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListConversationsRes} returns this
 */
proto.api.v0alpha.ListConversationsRes.prototype.setNextPageToken = function(value) {
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
proto.api.v0alpha.CreateDispositionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateDispositionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateDispositionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateDispositionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
disposition: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateDispositionReq}
 */
proto.api.v0alpha.CreateDispositionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateDispositionReq;
  return proto.api.v0alpha.CreateDispositionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateDispositionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateDispositionReq}
 */
proto.api.v0alpha.CreateDispositionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisposition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateDispositionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateDispositionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateDispositionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateDispositionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisposition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string disposition = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateDispositionReq.prototype.getDisposition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateDispositionReq} returns this
 */
proto.api.v0alpha.CreateDispositionReq.prototype.setDisposition = function(value) {
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
proto.api.v0alpha.CreateDispositionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateDispositionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateDispositionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateDispositionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
dispositionSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateDispositionRes}
 */
proto.api.v0alpha.CreateDispositionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateDispositionRes;
  return proto.api.v0alpha.CreateDispositionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateDispositionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateDispositionRes}
 */
proto.api.v0alpha.CreateDispositionRes.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateDispositionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateDispositionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateDispositionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateDispositionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDispositionSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 disposition_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateDispositionRes.prototype.getDispositionSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateDispositionRes} returns this
 */
proto.api.v0alpha.CreateDispositionRes.prototype.setDispositionSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.DeleteDispositionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteDispositionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteDispositionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteDispositionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
disposition: (f = msg.getDisposition()) && api_commons_omnichannel_pb.Disposition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteDispositionReq}
 */
proto.api.v0alpha.DeleteDispositionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteDispositionReq;
  return proto.api.v0alpha.DeleteDispositionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteDispositionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteDispositionReq}
 */
proto.api.v0alpha.DeleteDispositionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.Disposition;
      reader.readMessage(value,api_commons_omnichannel_pb.Disposition.deserializeBinaryFromReader);
      msg.setDisposition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteDispositionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteDispositionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteDispositionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteDispositionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisposition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.Disposition.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Disposition disposition = 1;
 * @return {?proto.api.commons.Disposition}
 */
proto.api.v0alpha.DeleteDispositionReq.prototype.getDisposition = function() {
  return /** @type{?proto.api.commons.Disposition} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.Disposition, 1));
};


/**
 * @param {?proto.api.commons.Disposition|undefined} value
 * @return {!proto.api.v0alpha.DeleteDispositionReq} returns this
*/
proto.api.v0alpha.DeleteDispositionReq.prototype.setDisposition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.DeleteDispositionReq} returns this
 */
proto.api.v0alpha.DeleteDispositionReq.prototype.clearDisposition = function() {
  return this.setDisposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.DeleteDispositionReq.prototype.hasDisposition = function() {
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
proto.api.v0alpha.ListDispositionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListDispositionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListDispositionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListDispositionsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListDispositionsReq}
 */
proto.api.v0alpha.ListDispositionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListDispositionsReq;
  return proto.api.v0alpha.ListDispositionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListDispositionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListDispositionsReq}
 */
proto.api.v0alpha.ListDispositionsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListDispositionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListDispositionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListDispositionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListDispositionsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListDispositionsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListDispositionsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListDispositionsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListDispositionsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListDispositionsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
dispositionsList: jspb.Message.toObjectList(msg.getDispositionsList(),
    api_commons_omnichannel_pb.Disposition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListDispositionsRes}
 */
proto.api.v0alpha.ListDispositionsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListDispositionsRes;
  return proto.api.v0alpha.ListDispositionsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListDispositionsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListDispositionsRes}
 */
proto.api.v0alpha.ListDispositionsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.Disposition;
      reader.readMessage(value,api_commons_omnichannel_pb.Disposition.deserializeBinaryFromReader);
      msg.addDispositions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListDispositionsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListDispositionsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListDispositionsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListDispositionsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDispositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.Disposition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.Disposition dispositions = 1;
 * @return {!Array<!proto.api.commons.Disposition>}
 */
proto.api.v0alpha.ListDispositionsRes.prototype.getDispositionsList = function() {
  return /** @type{!Array<!proto.api.commons.Disposition>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.Disposition, 1));
};


/**
 * @param {!Array<!proto.api.commons.Disposition>} value
 * @return {!proto.api.v0alpha.ListDispositionsRes} returns this
*/
proto.api.v0alpha.ListDispositionsRes.prototype.setDispositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.Disposition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Disposition}
 */
proto.api.v0alpha.ListDispositionsRes.prototype.addDispositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.Disposition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListDispositionsRes} returns this
 */
proto.api.v0alpha.ListDispositionsRes.prototype.clearDispositionsList = function() {
  return this.setDispositionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateDispositionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateDispositionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateDispositionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateDispositionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
dispositionSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
disposition: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateDispositionReq}
 */
proto.api.v0alpha.UpdateDispositionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateDispositionReq;
  return proto.api.v0alpha.UpdateDispositionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateDispositionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateDispositionReq}
 */
proto.api.v0alpha.UpdateDispositionReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDisposition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateDispositionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateDispositionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateDispositionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateDispositionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDispositionSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getDisposition();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 disposition_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateDispositionReq.prototype.getDispositionSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateDispositionReq} returns this
 */
proto.api.v0alpha.UpdateDispositionReq.prototype.setDispositionSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string disposition = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateDispositionReq.prototype.getDisposition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateDispositionReq} returns this
 */
proto.api.v0alpha.UpdateDispositionReq.prototype.setDisposition = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCustomUnsubscribeLinksRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCustomUnsubscribeLinksRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.toObject = function(includeInstance, msg) {
  var f, obj = {
customUnsubscribeLinksList: jspb.Message.toObjectList(msg.getCustomUnsubscribeLinksList(),
    api_commons_omnichannel_pb.OmniCustomUnsubscribeLink.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCustomUnsubscribeLinksRes}
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCustomUnsubscribeLinksRes;
  return proto.api.v0alpha.ListCustomUnsubscribeLinksRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCustomUnsubscribeLinksRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCustomUnsubscribeLinksRes}
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniCustomUnsubscribeLink;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCustomUnsubscribeLink.deserializeBinaryFromReader);
      msg.addCustomUnsubscribeLinks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCustomUnsubscribeLinksRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCustomUnsubscribeLinksRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomUnsubscribeLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniCustomUnsubscribeLink.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.OmniCustomUnsubscribeLink custom_unsubscribe_links = 1;
 * @return {!Array<!proto.api.commons.OmniCustomUnsubscribeLink>}
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.prototype.getCustomUnsubscribeLinksList = function() {
  return /** @type{!Array<!proto.api.commons.OmniCustomUnsubscribeLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniCustomUnsubscribeLink, 1));
};


/**
 * @param {!Array<!proto.api.commons.OmniCustomUnsubscribeLink>} value
 * @return {!proto.api.v0alpha.ListCustomUnsubscribeLinksRes} returns this
*/
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.prototype.setCustomUnsubscribeLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.OmniCustomUnsubscribeLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniCustomUnsubscribeLink}
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.prototype.addCustomUnsubscribeLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.OmniCustomUnsubscribeLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCustomUnsubscribeLinksRes} returns this
 */
proto.api.v0alpha.ListCustomUnsubscribeLinksRes.prototype.clearCustomUnsubscribeLinksList = function() {
  return this.setCustomUnsubscribeLinksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateCustomUnsubscribeLinkRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.toObject = function(includeInstance, msg) {
  var f, obj = {
customUnsubscribeLinkSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
validated: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateCustomUnsubscribeLinkRes}
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateCustomUnsubscribeLinkRes;
  return proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateCustomUnsubscribeLinkRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateCustomUnsubscribeLinkRes}
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateCustomUnsubscribeLinkRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomUnsubscribeLinkSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getValidated();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 custom_unsubscribe_link_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.prototype.getCustomUnsubscribeLinkSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateCustomUnsubscribeLinkRes} returns this
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.prototype.setCustomUnsubscribeLinkSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional bool validated = 2;
 * @return {boolean}
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.prototype.getValidated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.CreateCustomUnsubscribeLinkRes} returns this
 */
proto.api.v0alpha.CreateCustomUnsubscribeLinkRes.prototype.setValidated = function(value) {
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
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
customUnsubscribeLinkSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
linkName: jspb.Message.getFieldWithDefault(msg, 2, ""),
linkUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq;
  return proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 custom_unsubscribe_link_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.getCustomUnsubscribeLinkSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq} returns this
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.setCustomUnsubscribeLinkSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string link_name = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.getLinkName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq} returns this
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.setLinkName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string link_url = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.getLinkUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq} returns this
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.setLinkUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq} returns this
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkReq.prototype.setDescription = function(value) {
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
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.toObject = function(includeInstance, msg) {
  var f, obj = {
validated: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
dateValidated: (f = msg.getDateValidated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes;
  return proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidated(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateValidated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidated();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDateValidated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool validated = 1;
 * @return {boolean}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.prototype.getValidated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes} returns this
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.prototype.setValidated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date_validated = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.prototype.getDateValidated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes} returns this
*/
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.prototype.setDateValidated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes} returns this
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.prototype.clearDateValidated = function() {
  return this.setDateValidated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateCustomUnsubscribeLinkRes.prototype.hasDateValidated = function() {
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
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.toObject = function(includeInstance, msg) {
  var f, obj = {
customUnsubscribeLinkSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq}
 */
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq;
  return proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq}
 */
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomUnsubscribeLinkSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 custom_unsubscribe_link_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.prototype.getCustomUnsubscribeLinkSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq} returns this
 */
proto.api.v0alpha.DeleteCustomUnsubscribeLinkReq.prototype.setCustomUnsubscribeLinkSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.PauseCampaignReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PauseCampaignReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PauseCampaignReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PauseCampaignReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
channelType: jspb.Message.getFieldWithDefault(msg, 2, 0),
campaignDirection: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PauseCampaignReq}
 */
proto.api.v0alpha.PauseCampaignReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PauseCampaignReq;
  return proto.api.v0alpha.PauseCampaignReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PauseCampaignReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PauseCampaignReq}
 */
proto.api.v0alpha.PauseCampaignReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.OmniCampaignDirection} */ (reader.readEnum());
      msg.setCampaignDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.PauseCampaignReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PauseCampaignReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PauseCampaignReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PauseCampaignReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
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
  f = message.getCampaignDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.PauseCampaignReq.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.PauseCampaignReq} returns this
 */
proto.api.v0alpha.PauseCampaignReq.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.ChannelType channel_type = 2;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.v0alpha.PauseCampaignReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.v0alpha.PauseCampaignReq} returns this
 */
proto.api.v0alpha.PauseCampaignReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional api.commons.OmniCampaignDirection campaign_direction = 3;
 * @return {!proto.api.commons.OmniCampaignDirection}
 */
proto.api.v0alpha.PauseCampaignReq.prototype.getCampaignDirection = function() {
  return /** @type {!proto.api.commons.OmniCampaignDirection} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.OmniCampaignDirection} value
 * @return {!proto.api.v0alpha.PauseCampaignReq} returns this
 */
proto.api.v0alpha.PauseCampaignReq.prototype.setCampaignDirection = function(value) {
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
proto.api.v0alpha.PauseCampaignRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.PauseCampaignRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.PauseCampaignRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PauseCampaignRes.toObject = function(includeInstance, msg) {
  var f, obj = {
referenceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.PauseCampaignRes}
 */
proto.api.v0alpha.PauseCampaignRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.PauseCampaignRes;
  return proto.api.v0alpha.PauseCampaignRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.PauseCampaignRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.PauseCampaignRes}
 */
proto.api.v0alpha.PauseCampaignRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.api.v0alpha.PauseCampaignRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.PauseCampaignRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.PauseCampaignRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.PauseCampaignRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference_id = 1;
 * @return {string}
 */
proto.api.v0alpha.PauseCampaignRes.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.PauseCampaignRes} returns this
 */
proto.api.v0alpha.PauseCampaignRes.prototype.setReferenceId = function(value) {
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
proto.api.v0alpha.ResumeCampaignReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ResumeCampaignReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ResumeCampaignReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResumeCampaignReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
channelType: jspb.Message.getFieldWithDefault(msg, 2, 0),
campaignDirection: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ResumeCampaignReq}
 */
proto.api.v0alpha.ResumeCampaignReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ResumeCampaignReq;
  return proto.api.v0alpha.ResumeCampaignReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ResumeCampaignReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ResumeCampaignReq}
 */
proto.api.v0alpha.ResumeCampaignReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.OmniCampaignDirection} */ (reader.readEnum());
      msg.setCampaignDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ResumeCampaignReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ResumeCampaignReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ResumeCampaignReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResumeCampaignReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
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
  f = message.getCampaignDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ResumeCampaignReq.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ResumeCampaignReq} returns this
 */
proto.api.v0alpha.ResumeCampaignReq.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.ChannelType channel_type = 2;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.v0alpha.ResumeCampaignReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.v0alpha.ResumeCampaignReq} returns this
 */
proto.api.v0alpha.ResumeCampaignReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional api.commons.OmniCampaignDirection campaign_direction = 3;
 * @return {!proto.api.commons.OmniCampaignDirection}
 */
proto.api.v0alpha.ResumeCampaignReq.prototype.getCampaignDirection = function() {
  return /** @type {!proto.api.commons.OmniCampaignDirection} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.OmniCampaignDirection} value
 * @return {!proto.api.v0alpha.ResumeCampaignReq} returns this
 */
proto.api.v0alpha.ResumeCampaignReq.prototype.setCampaignDirection = function(value) {
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
proto.api.v0alpha.ResumeCampaignRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ResumeCampaignRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ResumeCampaignRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResumeCampaignRes.toObject = function(includeInstance, msg) {
  var f, obj = {
referenceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ResumeCampaignRes}
 */
proto.api.v0alpha.ResumeCampaignRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ResumeCampaignRes;
  return proto.api.v0alpha.ResumeCampaignRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ResumeCampaignRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ResumeCampaignRes}
 */
proto.api.v0alpha.ResumeCampaignRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.api.v0alpha.ResumeCampaignRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ResumeCampaignRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ResumeCampaignRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResumeCampaignRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ResumeCampaignRes.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ResumeCampaignRes} returns this
 */
proto.api.v0alpha.ResumeCampaignRes.prototype.setReferenceId = function(value) {
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
proto.api.v0alpha.ArchiveCampaignReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ArchiveCampaignReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ArchiveCampaignReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ArchiveCampaignReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
channelType: jspb.Message.getFieldWithDefault(msg, 2, 0),
campaignDirection: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ArchiveCampaignReq}
 */
proto.api.v0alpha.ArchiveCampaignReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ArchiveCampaignReq;
  return proto.api.v0alpha.ArchiveCampaignReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ArchiveCampaignReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ArchiveCampaignReq}
 */
proto.api.v0alpha.ArchiveCampaignReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.OmniCampaignDirection} */ (reader.readEnum());
      msg.setCampaignDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ArchiveCampaignReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ArchiveCampaignReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ArchiveCampaignReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ArchiveCampaignReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
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
  f = message.getCampaignDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ArchiveCampaignReq.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ArchiveCampaignReq} returns this
 */
proto.api.v0alpha.ArchiveCampaignReq.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.ChannelType channel_type = 2;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.v0alpha.ArchiveCampaignReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.v0alpha.ArchiveCampaignReq} returns this
 */
proto.api.v0alpha.ArchiveCampaignReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional api.commons.OmniCampaignDirection campaign_direction = 3;
 * @return {!proto.api.commons.OmniCampaignDirection}
 */
proto.api.v0alpha.ArchiveCampaignReq.prototype.getCampaignDirection = function() {
  return /** @type {!proto.api.commons.OmniCampaignDirection} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.OmniCampaignDirection} value
 * @return {!proto.api.v0alpha.ArchiveCampaignReq} returns this
 */
proto.api.v0alpha.ArchiveCampaignReq.prototype.setCampaignDirection = function(value) {
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
proto.api.v0alpha.ArchiveCampaignRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ArchiveCampaignRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ArchiveCampaignRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ArchiveCampaignRes.toObject = function(includeInstance, msg) {
  var f, obj = {
referenceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ArchiveCampaignRes}
 */
proto.api.v0alpha.ArchiveCampaignRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ArchiveCampaignRes;
  return proto.api.v0alpha.ArchiveCampaignRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ArchiveCampaignRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ArchiveCampaignRes}
 */
proto.api.v0alpha.ArchiveCampaignRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.api.v0alpha.ArchiveCampaignRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ArchiveCampaignRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ArchiveCampaignRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ArchiveCampaignRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ArchiveCampaignRes.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ArchiveCampaignRes} returns this
 */
proto.api.v0alpha.ArchiveCampaignRes.prototype.setReferenceId = function(value) {
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
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCampaignPacingSpeedReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
channelType: jspb.Message.getFieldWithDefault(msg, 2, 0),
campaignDirection: jspb.Message.getFieldWithDefault(msg, 3, 0),
sendsPerHour: jspb.Message.getFieldWithDefault(msg, 4, 0),
campaignModuleSid: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCampaignPacingSpeedReq;
  return proto.api.v0alpha.UpdateCampaignPacingSpeedReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.OmniCampaignDirection} */ (reader.readEnum());
      msg.setCampaignDirection(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSendsPerHour(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignModuleSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCampaignPacingSpeedReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
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
  f = message.getCampaignDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSendsPerHour();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCampaignModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq} returns this
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.ChannelType channel_type = 2;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq} returns this
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional api.commons.OmniCampaignDirection campaign_direction = 3;
 * @return {!proto.api.commons.OmniCampaignDirection}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.getCampaignDirection = function() {
  return /** @type {!proto.api.commons.OmniCampaignDirection} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.OmniCampaignDirection} value
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq} returns this
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.setCampaignDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 sends_per_hour = 4;
 * @return {number}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.getSendsPerHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq} returns this
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.setSendsPerHour = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 campaign_module_sid = 5;
 * @return {string}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.getCampaignModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedReq} returns this
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedReq.prototype.setCampaignModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCampaignPacingSpeedRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCampaignPacingSpeedRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedRes.toObject = function(includeInstance, msg) {
  var f, obj = {
referenceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedRes}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCampaignPacingSpeedRes;
  return proto.api.v0alpha.UpdateCampaignPacingSpeedRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCampaignPacingSpeedRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedRes}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.api.v0alpha.UpdateCampaignPacingSpeedRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCampaignPacingSpeedRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCampaignPacingSpeedRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedRes.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCampaignPacingSpeedRes} returns this
 */
proto.api.v0alpha.UpdateCampaignPacingSpeedRes.prototype.setReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.ListContactListsReq.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.api.v0alpha.ListContactListsReq.FilterCase = {
  FILTER_NOT_SET: 0,
  BY_PROJECT: 100
};

/**
 * @return {proto.api.v0alpha.ListContactListsReq.FilterCase}
 */
proto.api.v0alpha.ListContactListsReq.prototype.getFilterCase = function() {
  return /** @type {proto.api.v0alpha.ListContactListsReq.FilterCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.ListContactListsReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListContactListsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListContactListsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListContactListsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListContactListsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
byProject: (f = msg.getByProject()) && proto.api.v0alpha.ListContactListsReq.ByProject.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListContactListsReq}
 */
proto.api.v0alpha.ListContactListsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListContactListsReq;
  return proto.api.v0alpha.ListContactListsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListContactListsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListContactListsReq}
 */
proto.api.v0alpha.ListContactListsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 100:
      var value = new proto.api.v0alpha.ListContactListsReq.ByProject;
      reader.readMessage(value,proto.api.v0alpha.ListContactListsReq.ByProject.deserializeBinaryFromReader);
      msg.setByProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListContactListsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListContactListsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListContactListsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListContactListsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getByProject();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.v0alpha.ListContactListsReq.ByProject.serializeBinaryToWriter
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
proto.api.v0alpha.ListContactListsReq.ByProject.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListContactListsReq.ByProject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListContactListsReq.ByProject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListContactListsReq.ByProject.toObject = function(includeInstance, msg) {
  var f, obj = {
projectSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListContactListsReq.ByProject}
 */
proto.api.v0alpha.ListContactListsReq.ByProject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListContactListsReq.ByProject;
  return proto.api.v0alpha.ListContactListsReq.ByProject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListContactListsReq.ByProject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListContactListsReq.ByProject}
 */
proto.api.v0alpha.ListContactListsReq.ByProject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListContactListsReq.ByProject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListContactListsReq.ByProject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListContactListsReq.ByProject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListContactListsReq.ByProject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 project_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ListContactListsReq.ByProject.prototype.getProjectSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListContactListsReq.ByProject} returns this
 */
proto.api.v0alpha.ListContactListsReq.ByProject.prototype.setProjectSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.api.v0alpha.ListContactListsReq.ByProject.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListContactListsReq.ByProject} returns this
 */
proto.api.v0alpha.ListContactListsReq.ByProject.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.api.v0alpha.ListContactListsReq.ByProject.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListContactListsReq.ByProject} returns this
 */
proto.api.v0alpha.ListContactListsReq.ByProject.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.ListContactListsReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.ListContactListsReq} returns this
*/
proto.api.v0alpha.ListContactListsReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListContactListsReq} returns this
 */
proto.api.v0alpha.ListContactListsReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListContactListsReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ByProject by_project = 100;
 * @return {?proto.api.v0alpha.ListContactListsReq.ByProject}
 */
proto.api.v0alpha.ListContactListsReq.prototype.getByProject = function() {
  return /** @type{?proto.api.v0alpha.ListContactListsReq.ByProject} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListContactListsReq.ByProject, 100));
};


/**
 * @param {?proto.api.v0alpha.ListContactListsReq.ByProject|undefined} value
 * @return {!proto.api.v0alpha.ListContactListsReq} returns this
*/
proto.api.v0alpha.ListContactListsReq.prototype.setByProject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.v0alpha.ListContactListsReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListContactListsReq} returns this
 */
proto.api.v0alpha.ListContactListsReq.prototype.clearByProject = function() {
  return this.setByProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListContactListsReq.prototype.hasByProject = function() {
  return jspb.Message.getField(this, 100) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListContactListsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListContactListsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListContactListsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListContactListsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListContactListsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
contactListsList: jspb.Message.toObjectList(msg.getContactListsList(),
    api_commons_omnichannel_pb.ContactList.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListContactListsRes}
 */
proto.api.v0alpha.ListContactListsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListContactListsRes;
  return proto.api.v0alpha.ListContactListsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListContactListsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListContactListsRes}
 */
proto.api.v0alpha.ListContactListsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.ContactList;
      reader.readMessage(value,api_commons_omnichannel_pb.ContactList.deserializeBinaryFromReader);
      msg.addContactLists(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListContactListsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListContactListsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListContactListsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListContactListsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactListsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.ContactList.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated api.commons.ContactList contact_lists = 1;
 * @return {!Array<!proto.api.commons.ContactList>}
 */
proto.api.v0alpha.ListContactListsRes.prototype.getContactListsList = function() {
  return /** @type{!Array<!proto.api.commons.ContactList>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.ContactList, 1));
};


/**
 * @param {!Array<!proto.api.commons.ContactList>} value
 * @return {!proto.api.v0alpha.ListContactListsRes} returns this
*/
proto.api.v0alpha.ListContactListsRes.prototype.setContactListsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.ContactList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ContactList}
 */
proto.api.v0alpha.ListContactListsRes.prototype.addContactLists = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.ContactList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListContactListsRes} returns this
 */
proto.api.v0alpha.ListContactListsRes.prototype.clearContactListsList = function() {
  return this.setContactListsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.api.v0alpha.ListContactListsRes.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListContactListsRes} returns this
 */
proto.api.v0alpha.ListContactListsRes.prototype.setNextPageToken = function(value) {
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
proto.api.v0alpha.GetAvailableHeadersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetAvailableHeadersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetAvailableHeadersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetAvailableHeadersReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetAvailableHeadersReq}
 */
proto.api.v0alpha.GetAvailableHeadersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetAvailableHeadersReq;
  return proto.api.v0alpha.GetAvailableHeadersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetAvailableHeadersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetAvailableHeadersReq}
 */
proto.api.v0alpha.GetAvailableHeadersReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetAvailableHeadersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetAvailableHeadersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetAvailableHeadersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetAvailableHeadersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.GetAvailableHeadersRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetAvailableHeadersRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetAvailableHeadersRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetAvailableHeadersRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetAvailableHeadersRes.toObject = function(includeInstance, msg) {
  var f, obj = {
headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.api.v0alpha.HeaderGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetAvailableHeadersRes}
 */
proto.api.v0alpha.GetAvailableHeadersRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetAvailableHeadersRes;
  return proto.api.v0alpha.GetAvailableHeadersRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetAvailableHeadersRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetAvailableHeadersRes}
 */
proto.api.v0alpha.GetAvailableHeadersRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.HeaderGroup;
      reader.readMessage(value,proto.api.v0alpha.HeaderGroup.deserializeBinaryFromReader);
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
proto.api.v0alpha.GetAvailableHeadersRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetAvailableHeadersRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetAvailableHeadersRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetAvailableHeadersRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.HeaderGroup.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HeaderGroup headers = 1;
 * @return {!Array<!proto.api.v0alpha.HeaderGroup>}
 */
proto.api.v0alpha.GetAvailableHeadersRes.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.api.v0alpha.HeaderGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.HeaderGroup, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.HeaderGroup>} value
 * @return {!proto.api.v0alpha.GetAvailableHeadersRes} returns this
*/
proto.api.v0alpha.GetAvailableHeadersRes.prototype.setHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.HeaderGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.HeaderGroup}
 */
proto.api.v0alpha.GetAvailableHeadersRes.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.HeaderGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetAvailableHeadersRes} returns this
 */
proto.api.v0alpha.GetAvailableHeadersRes.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetOmniExchangeElementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetOmniExchangeElementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetOmniExchangeElementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOmniExchangeElementsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetOmniExchangeElementsRequest}
 */
proto.api.v0alpha.GetOmniExchangeElementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetOmniExchangeElementsRequest;
  return proto.api.v0alpha.GetOmniExchangeElementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetOmniExchangeElementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetOmniExchangeElementsRequest}
 */
proto.api.v0alpha.GetOmniExchangeElementsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetOmniExchangeElementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetOmniExchangeElementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetOmniExchangeElementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOmniExchangeElementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetOmniExchangeElementsResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetOmniExchangeElementsResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.toObject = function(includeInstance, msg) {
  var f, obj = {
headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.api.v0alpha.OmniExchange.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetOmniExchangeElementsResult}
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetOmniExchangeElementsResult;
  return proto.api.v0alpha.GetOmniExchangeElementsResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetOmniExchangeElementsResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetOmniExchangeElementsResult}
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.OmniExchange;
      reader.readMessage(value,proto.api.v0alpha.OmniExchange.deserializeBinaryFromReader);
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
proto.api.v0alpha.GetOmniExchangeElementsResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetOmniExchangeElementsResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetOmniExchangeElementsResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.OmniExchange.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OmniExchange headers = 1;
 * @return {!Array<!proto.api.v0alpha.OmniExchange>}
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.api.v0alpha.OmniExchange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.OmniExchange, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.OmniExchange>} value
 * @return {!proto.api.v0alpha.GetOmniExchangeElementsResult} returns this
*/
proto.api.v0alpha.GetOmniExchangeElementsResult.prototype.setHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.OmniExchange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.OmniExchange}
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.OmniExchange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetOmniExchangeElementsResult} returns this
 */
proto.api.v0alpha.GetOmniExchangeElementsResult.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.OmniExchange.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.OmniExchange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.OmniExchange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.OmniExchange.toObject = function(includeInstance, msg) {
  var f, obj = {
exchangeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.api.v0alpha.OmniExchange}
 */
proto.api.v0alpha.OmniExchange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.OmniExchange;
  return proto.api.v0alpha.OmniExchange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.OmniExchange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.OmniExchange}
 */
proto.api.v0alpha.OmniExchange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchangeId(value);
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
proto.api.v0alpha.OmniExchange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.OmniExchange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.OmniExchange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.OmniExchange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExchangeId();
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
 * optional string exchange_id = 1;
 * @return {string}
 */
proto.api.v0alpha.OmniExchange.prototype.getExchangeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.OmniExchange} returns this
 */
proto.api.v0alpha.OmniExchange.prototype.setExchangeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.OmniExchange.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.OmniExchange} returns this
 */
proto.api.v0alpha.OmniExchange.prototype.setName = function(value) {
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
proto.api.v0alpha.GetFieldsForElementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetFieldsForElementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetFieldsForElementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetFieldsForElementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
exchange: (f = msg.getExchange()) && proto.api.v0alpha.OmniExchange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetFieldsForElementRequest}
 */
proto.api.v0alpha.GetFieldsForElementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetFieldsForElementRequest;
  return proto.api.v0alpha.GetFieldsForElementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetFieldsForElementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetFieldsForElementRequest}
 */
proto.api.v0alpha.GetFieldsForElementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.OmniExchange;
      reader.readMessage(value,proto.api.v0alpha.OmniExchange.deserializeBinaryFromReader);
      msg.setExchange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetFieldsForElementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetFieldsForElementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetFieldsForElementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetFieldsForElementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExchange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.OmniExchange.serializeBinaryToWriter
    );
  }
};


/**
 * optional OmniExchange exchange = 1;
 * @return {?proto.api.v0alpha.OmniExchange}
 */
proto.api.v0alpha.GetFieldsForElementRequest.prototype.getExchange = function() {
  return /** @type{?proto.api.v0alpha.OmniExchange} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.OmniExchange, 1));
};


/**
 * @param {?proto.api.v0alpha.OmniExchange|undefined} value
 * @return {!proto.api.v0alpha.GetFieldsForElementRequest} returns this
*/
proto.api.v0alpha.GetFieldsForElementRequest.prototype.setExchange = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetFieldsForElementRequest} returns this
 */
proto.api.v0alpha.GetFieldsForElementRequest.prototype.clearExchange = function() {
  return this.setExchange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetFieldsForElementRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.GetFieldsForElementResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetFieldsForElementResult.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetFieldsForElementResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetFieldsForElementResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetFieldsForElementResult.toObject = function(includeInstance, msg) {
  var f, obj = {
headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.api.v0alpha.Header.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetFieldsForElementResult}
 */
proto.api.v0alpha.GetFieldsForElementResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetFieldsForElementResult;
  return proto.api.v0alpha.GetFieldsForElementResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetFieldsForElementResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetFieldsForElementResult}
 */
proto.api.v0alpha.GetFieldsForElementResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Header;
      reader.readMessage(value,proto.api.v0alpha.Header.deserializeBinaryFromReader);
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
proto.api.v0alpha.GetFieldsForElementResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetFieldsForElementResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetFieldsForElementResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetFieldsForElementResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.Header.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Header headers = 1;
 * @return {!Array<!proto.api.v0alpha.Header>}
 */
proto.api.v0alpha.GetFieldsForElementResult.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Header>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Header, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.Header>} value
 * @return {!proto.api.v0alpha.GetFieldsForElementResult} returns this
*/
proto.api.v0alpha.GetFieldsForElementResult.prototype.setHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.Header=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Header}
 */
proto.api.v0alpha.GetFieldsForElementResult.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.Header, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetFieldsForElementResult} returns this
 */
proto.api.v0alpha.GetFieldsForElementResult.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.Header}
 */
proto.api.v0alpha.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.Header;
  return proto.api.v0alpha.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.Header}
 */
proto.api.v0alpha.Header.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v0alpha.Header.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Header} returns this
 */
proto.api.v0alpha.Header.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional api.commons.FieldType type = 2;
 * @return {!proto.api.commons.FieldType}
 */
proto.api.v0alpha.Header.prototype.getType = function() {
  return /** @type {!proto.api.commons.FieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.FieldType} value
 * @return {!proto.api.v0alpha.Header} returns this
 */
proto.api.v0alpha.Header.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.HeaderGroup.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.HeaderGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.HeaderGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.HeaderGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.HeaderGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
headersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
listHeadersList: jspb.Message.toObjectList(msg.getListHeadersList(),
    proto.api.v0alpha.Header.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.HeaderGroup}
 */
proto.api.v0alpha.HeaderGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.HeaderGroup;
  return proto.api.v0alpha.HeaderGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.HeaderGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.HeaderGroup}
 */
proto.api.v0alpha.HeaderGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addHeaders(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.Header;
      reader.readMessage(value,proto.api.v0alpha.Header.deserializeBinaryFromReader);
      msg.addListHeaders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.HeaderGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.HeaderGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.HeaderGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.HeaderGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getListHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api.v0alpha.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v0alpha.HeaderGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.HeaderGroup} returns this
 */
proto.api.v0alpha.HeaderGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string headers = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.HeaderGroup.prototype.getHeadersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.HeaderGroup} returns this
 */
proto.api.v0alpha.HeaderGroup.prototype.setHeadersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.HeaderGroup} returns this
 */
proto.api.v0alpha.HeaderGroup.prototype.addHeaders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.HeaderGroup} returns this
 */
proto.api.v0alpha.HeaderGroup.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};


/**
 * repeated Header list_headers = 3;
 * @return {!Array<!proto.api.v0alpha.Header>}
 */
proto.api.v0alpha.HeaderGroup.prototype.getListHeadersList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Header>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Header, 3));
};


/**
 * @param {!Array<!proto.api.v0alpha.Header>} value
 * @return {!proto.api.v0alpha.HeaderGroup} returns this
*/
proto.api.v0alpha.HeaderGroup.prototype.setListHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.v0alpha.Header=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Header}
 */
proto.api.v0alpha.HeaderGroup.prototype.addListHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.v0alpha.Header, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.HeaderGroup} returns this
 */
proto.api.v0alpha.HeaderGroup.prototype.clearListHeadersList = function() {
  return this.setListHeadersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ApproveTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ApproveTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ApproveTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ApproveTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
taskSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ApproveTaskRequest}
 */
proto.api.v0alpha.ApproveTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ApproveTaskRequest;
  return proto.api.v0alpha.ApproveTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ApproveTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ApproveTaskRequest}
 */
proto.api.v0alpha.ApproveTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ApproveTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ApproveTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ApproveTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ApproveTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 task_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ApproveTaskRequest.prototype.getTaskSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ApproveTaskRequest} returns this
 */
proto.api.v0alpha.ApproveTaskRequest.prototype.setTaskSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ApproveTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ApproveTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ApproveTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ApproveTaskResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ApproveTaskResponse}
 */
proto.api.v0alpha.ApproveTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ApproveTaskResponse;
  return proto.api.v0alpha.ApproveTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ApproveTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ApproveTaskResponse}
 */
proto.api.v0alpha.ApproveTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ApproveTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ApproveTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ApproveTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ApproveTaskResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.GetNextQueuedTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetNextQueuedTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetNextQueuedTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
skills: (f = msg.getSkills()) && api_commons_omnichannel_pb.OmniConversationSkills.toObject(includeInstance, f),
agentSkillsMap: (f = msg.getAgentSkillsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetNextQueuedTaskRequest}
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetNextQueuedTaskRequest;
  return proto.api.v0alpha.GetNextQueuedTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetNextQueuedTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetNextQueuedTaskRequest}
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniConversationSkills;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversationSkills.deserializeBinaryFromReader);
      msg.setSkills(value);
      break;
    case 2:
      var value = msg.getAgentSkillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
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
proto.api.v0alpha.GetNextQueuedTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetNextQueuedTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetNextQueuedTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkills();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniConversationSkills.serializeBinaryToWriter
    );
  }
  f = message.getAgentSkillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * optional api.commons.OmniConversationSkills skills = 1;
 * @return {?proto.api.commons.OmniConversationSkills}
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.prototype.getSkills = function() {
  return /** @type{?proto.api.commons.OmniConversationSkills} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversationSkills, 1));
};


/**
 * @param {?proto.api.commons.OmniConversationSkills|undefined} value
 * @return {!proto.api.v0alpha.GetNextQueuedTaskRequest} returns this
*/
proto.api.v0alpha.GetNextQueuedTaskRequest.prototype.setSkills = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetNextQueuedTaskRequest} returns this
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.prototype.clearSkills = function() {
  return this.setSkills(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.prototype.hasSkills = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, int64> agent_skills = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.prototype.getAgentSkillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.v0alpha.GetNextQueuedTaskRequest} returns this
 */
proto.api.v0alpha.GetNextQueuedTaskRequest.prototype.clearAgentSkillsMap = function() {
  this.getAgentSkillsMap().clear();
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
proto.api.v0alpha.GetNextQueuedTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetNextQueuedTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetNextQueuedTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetNextQueuedTaskResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
task: (f = msg.getTask()) && api_commons_omnichannel_pb.OmniTask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetNextQueuedTaskResponse}
 */
proto.api.v0alpha.GetNextQueuedTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetNextQueuedTaskResponse;
  return proto.api.v0alpha.GetNextQueuedTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetNextQueuedTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetNextQueuedTaskResponse}
 */
proto.api.v0alpha.GetNextQueuedTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniTask;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniTask.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetNextQueuedTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetNextQueuedTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetNextQueuedTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetNextQueuedTaskResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniTask.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.OmniTask task = 1;
 * @return {?proto.api.commons.OmniTask}
 */
proto.api.v0alpha.GetNextQueuedTaskResponse.prototype.getTask = function() {
  return /** @type{?proto.api.commons.OmniTask} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniTask, 1));
};


/**
 * @param {?proto.api.commons.OmniTask|undefined} value
 * @return {!proto.api.v0alpha.GetNextQueuedTaskResponse} returns this
*/
proto.api.v0alpha.GetNextQueuedTaskResponse.prototype.setTask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetNextQueuedTaskResponse} returns this
 */
proto.api.v0alpha.GetNextQueuedTaskResponse.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetNextQueuedTaskResponse.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.GetTaskReq.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.api.v0alpha.GetTaskReq.FilterCase = {
  FILTER_NOT_SET: 0,
  BY_CONVERSATION: 100
};

/**
 * @return {proto.api.v0alpha.GetTaskReq.FilterCase}
 */
proto.api.v0alpha.GetTaskReq.prototype.getFilterCase = function() {
  return /** @type {proto.api.v0alpha.GetTaskReq.FilterCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.GetTaskReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetTaskReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetTaskReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetTaskReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetTaskReq.toObject = function(includeInstance, msg) {
  var f, obj = {
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
byConversation: (f = msg.getByConversation()) && proto.api.v0alpha.GetTaskReq.ByConversation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetTaskReq}
 */
proto.api.v0alpha.GetTaskReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetTaskReq;
  return proto.api.v0alpha.GetTaskReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetTaskReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetTaskReq}
 */
proto.api.v0alpha.GetTaskReq.deserializeBinaryFromReader = function(msg, reader) {
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
    case 100:
      var value = new proto.api.v0alpha.GetTaskReq.ByConversation;
      reader.readMessage(value,proto.api.v0alpha.GetTaskReq.ByConversation.deserializeBinaryFromReader);
      msg.setByConversation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetTaskReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetTaskReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetTaskReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetTaskReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getByConversation();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.v0alpha.GetTaskReq.ByConversation.serializeBinaryToWriter
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
proto.api.v0alpha.GetTaskReq.ByConversation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetTaskReq.ByConversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetTaskReq.ByConversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetTaskReq.ByConversation.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetTaskReq.ByConversation}
 */
proto.api.v0alpha.GetTaskReq.ByConversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetTaskReq.ByConversation;
  return proto.api.v0alpha.GetTaskReq.ByConversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetTaskReq.ByConversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetTaskReq.ByConversation}
 */
proto.api.v0alpha.GetTaskReq.ByConversation.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetTaskReq.ByConversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetTaskReq.ByConversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetTaskReq.ByConversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetTaskReq.ByConversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.GetTaskReq.ByConversation.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetTaskReq.ByConversation} returns this
 */
proto.api.v0alpha.GetTaskReq.ByConversation.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.GetTaskReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.GetTaskReq} returns this
*/
proto.api.v0alpha.GetTaskReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetTaskReq} returns this
 */
proto.api.v0alpha.GetTaskReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetTaskReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ByConversation by_conversation = 100;
 * @return {?proto.api.v0alpha.GetTaskReq.ByConversation}
 */
proto.api.v0alpha.GetTaskReq.prototype.getByConversation = function() {
  return /** @type{?proto.api.v0alpha.GetTaskReq.ByConversation} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.GetTaskReq.ByConversation, 100));
};


/**
 * @param {?proto.api.v0alpha.GetTaskReq.ByConversation|undefined} value
 * @return {!proto.api.v0alpha.GetTaskReq} returns this
*/
proto.api.v0alpha.GetTaskReq.prototype.setByConversation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.v0alpha.GetTaskReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetTaskReq} returns this
 */
proto.api.v0alpha.GetTaskReq.prototype.clearByConversation = function() {
  return this.setByConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetTaskReq.prototype.hasByConversation = function() {
  return jspb.Message.getField(this, 100) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.ListTasksReq.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.api.v0alpha.ListTasksReq.FilterCase = {
  FILTER_NOT_SET: 0,
  BY_CAMPAIGN: 100
};

/**
 * @return {proto.api.v0alpha.ListTasksReq.FilterCase}
 */
proto.api.v0alpha.ListTasksReq.prototype.getFilterCase = function() {
  return /** @type {proto.api.v0alpha.ListTasksReq.FilterCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.ListTasksReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListTasksReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListTasksReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListTasksReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListTasksReq.toObject = function(includeInstance, msg) {
  var f, obj = {
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
byCampaign: (f = msg.getByCampaign()) && proto.api.v0alpha.ListTasksReq.ByCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListTasksReq}
 */
proto.api.v0alpha.ListTasksReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListTasksReq;
  return proto.api.v0alpha.ListTasksReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListTasksReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListTasksReq}
 */
proto.api.v0alpha.ListTasksReq.deserializeBinaryFromReader = function(msg, reader) {
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
    case 100:
      var value = new proto.api.v0alpha.ListTasksReq.ByCampaign;
      reader.readMessage(value,proto.api.v0alpha.ListTasksReq.ByCampaign.deserializeBinaryFromReader);
      msg.setByCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListTasksReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListTasksReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListTasksReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListTasksReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getByCampaign();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.v0alpha.ListTasksReq.ByCampaign.serializeBinaryToWriter
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
proto.api.v0alpha.ListTasksReq.ByCampaign.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListTasksReq.ByCampaign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListTasksReq.ByCampaign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListTasksReq.ByCampaign}
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListTasksReq.ByCampaign;
  return proto.api.v0alpha.ListTasksReq.ByCampaign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListTasksReq.ByCampaign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListTasksReq.ByCampaign}
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListTasksReq.ByCampaign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListTasksReq.ByCampaign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListTasksReq.ByCampaign} returns this
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint32 page_size = 2;
 * @return {number}
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListTasksReq.ByCampaign} returns this
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListTasksReq.ByCampaign} returns this
 */
proto.api.v0alpha.ListTasksReq.ByCampaign.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.ListTasksReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.ListTasksReq} returns this
*/
proto.api.v0alpha.ListTasksReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListTasksReq} returns this
 */
proto.api.v0alpha.ListTasksReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListTasksReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ByCampaign by_campaign = 100;
 * @return {?proto.api.v0alpha.ListTasksReq.ByCampaign}
 */
proto.api.v0alpha.ListTasksReq.prototype.getByCampaign = function() {
  return /** @type{?proto.api.v0alpha.ListTasksReq.ByCampaign} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ListTasksReq.ByCampaign, 100));
};


/**
 * @param {?proto.api.v0alpha.ListTasksReq.ByCampaign|undefined} value
 * @return {!proto.api.v0alpha.ListTasksReq} returns this
*/
proto.api.v0alpha.ListTasksReq.prototype.setByCampaign = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.v0alpha.ListTasksReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListTasksReq} returns this
 */
proto.api.v0alpha.ListTasksReq.prototype.clearByCampaign = function() {
  return this.setByCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListTasksReq.prototype.hasByCampaign = function() {
  return jspb.Message.getField(this, 100) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListTasksRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListTasksRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListTasksRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListTasksRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListTasksRes.toObject = function(includeInstance, msg) {
  var f, obj = {
nextPageToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
tasksList: jspb.Message.toObjectList(msg.getTasksList(),
    api_commons_omnichannel_pb.OmniTask.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListTasksRes}
 */
proto.api.v0alpha.ListTasksRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListTasksRes;
  return proto.api.v0alpha.ListTasksRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListTasksRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListTasksRes}
 */
proto.api.v0alpha.ListTasksRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniTask;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniTask.deserializeBinaryFromReader);
      msg.addTasks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListTasksRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListTasksRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListTasksRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListTasksRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniTask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string next_page_token = 1;
 * @return {string}
 */
proto.api.v0alpha.ListTasksRes.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListTasksRes} returns this
 */
proto.api.v0alpha.ListTasksRes.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated api.commons.OmniTask tasks = 2;
 * @return {!Array<!proto.api.commons.OmniTask>}
 */
proto.api.v0alpha.ListTasksRes.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.api.commons.OmniTask>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniTask, 2));
};


/**
 * @param {!Array<!proto.api.commons.OmniTask>} value
 * @return {!proto.api.v0alpha.ListTasksRes} returns this
*/
proto.api.v0alpha.ListTasksRes.prototype.setTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.OmniTask=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniTask}
 */
proto.api.v0alpha.ListTasksRes.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.OmniTask, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListTasksRes} returns this
 */
proto.api.v0alpha.ListTasksRes.prototype.clearTasksList = function() {
  return this.setTasksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.RejectTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RejectTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RejectTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RejectTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
taskSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RejectTaskRequest}
 */
proto.api.v0alpha.RejectTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RejectTaskRequest;
  return proto.api.v0alpha.RejectTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RejectTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RejectTaskRequest}
 */
proto.api.v0alpha.RejectTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RejectTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RejectTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RejectTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RejectTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 task_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.RejectTaskRequest.prototype.getTaskSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RejectTaskRequest} returns this
 */
proto.api.v0alpha.RejectTaskRequest.prototype.setTaskSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.RejectTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RejectTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RejectTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RejectTaskResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.RejectTaskResponse}
 */
proto.api.v0alpha.RejectTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RejectTaskResponse;
  return proto.api.v0alpha.RejectTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RejectTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RejectTaskResponse}
 */
proto.api.v0alpha.RejectTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.RejectTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RejectTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RejectTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RejectTaskResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.RequeueTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RequeueTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RequeueTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RequeueTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
taskSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.RequeueTaskRequest}
 */
proto.api.v0alpha.RequeueTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RequeueTaskRequest;
  return proto.api.v0alpha.RequeueTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RequeueTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RequeueTaskRequest}
 */
proto.api.v0alpha.RequeueTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.RequeueTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RequeueTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RequeueTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RequeueTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 task_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.RequeueTaskRequest.prototype.getTaskSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.RequeueTaskRequest} returns this
 */
proto.api.v0alpha.RequeueTaskRequest.prototype.setTaskSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.RequeueTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.RequeueTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.RequeueTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RequeueTaskResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.RequeueTaskResponse}
 */
proto.api.v0alpha.RequeueTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.RequeueTaskResponse;
  return proto.api.v0alpha.RequeueTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.RequeueTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.RequeueTaskResponse}
 */
proto.api.v0alpha.RequeueTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.RequeueTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.RequeueTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.RequeueTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.RequeueTaskResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.CreateConnectedInboxRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateConnectedInboxRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateConnectedInboxRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConnectedInboxRes.toObject = function(includeInstance, msg) {
  var f, obj = {
connectedInboxSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateConnectedInboxRes}
 */
proto.api.v0alpha.CreateConnectedInboxRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateConnectedInboxRes;
  return proto.api.v0alpha.CreateConnectedInboxRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateConnectedInboxRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateConnectedInboxRes}
 */
proto.api.v0alpha.CreateConnectedInboxRes.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateConnectedInboxRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateConnectedInboxRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateConnectedInboxRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateConnectedInboxRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectedInboxSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 connected_inbox_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateConnectedInboxRes.prototype.getConnectedInboxSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateConnectedInboxRes} returns this
 */
proto.api.v0alpha.CreateConnectedInboxRes.prototype.setConnectedInboxSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteConnectedInboxBySidReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteConnectedInboxBySidReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq.toObject = function(includeInstance, msg) {
  var f, obj = {
connectedInboxSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteConnectedInboxBySidReq}
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteConnectedInboxBySidReq;
  return proto.api.v0alpha.DeleteConnectedInboxBySidReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteConnectedInboxBySidReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteConnectedInboxBySidReq}
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteConnectedInboxBySidReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteConnectedInboxBySidReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectedInboxSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 connected_inbox_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq.prototype.getConnectedInboxSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteConnectedInboxBySidReq} returns this
 */
proto.api.v0alpha.DeleteConnectedInboxBySidReq.prototype.setConnectedInboxSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetConnectedInboxBySidReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetConnectedInboxBySidReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetConnectedInboxBySidReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConnectedInboxBySidReq.toObject = function(includeInstance, msg) {
  var f, obj = {
connectedInboxSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetConnectedInboxBySidReq}
 */
proto.api.v0alpha.GetConnectedInboxBySidReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetConnectedInboxBySidReq;
  return proto.api.v0alpha.GetConnectedInboxBySidReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetConnectedInboxBySidReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetConnectedInboxBySidReq}
 */
proto.api.v0alpha.GetConnectedInboxBySidReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetConnectedInboxBySidReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetConnectedInboxBySidReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetConnectedInboxBySidReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetConnectedInboxBySidReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectedInboxSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 connected_inbox_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.GetConnectedInboxBySidReq.prototype.getConnectedInboxSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetConnectedInboxBySidReq} returns this
 */
proto.api.v0alpha.GetConnectedInboxBySidReq.prototype.setConnectedInboxSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SendgridAccountByClientReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendgridAccountByClientReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendgridAccountByClientReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendgridAccountByClientReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.SendgridAccountByClientReq}
 */
proto.api.v0alpha.SendgridAccountByClientReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendgridAccountByClientReq;
  return proto.api.v0alpha.SendgridAccountByClientReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendgridAccountByClientReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendgridAccountByClientReq}
 */
proto.api.v0alpha.SendgridAccountByClientReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.SendgridAccountByClientReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendgridAccountByClientReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendgridAccountByClientReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendgridAccountByClientReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.SendgridAccountByClientRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendgridAccountByClientRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendgridAccountByClientRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendgridAccountByClientRes.toObject = function(includeInstance, msg) {
  var f, obj = {
result: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SendgridAccountByClientRes}
 */
proto.api.v0alpha.SendgridAccountByClientRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendgridAccountByClientRes;
  return proto.api.v0alpha.SendgridAccountByClientRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendgridAccountByClientRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendgridAccountByClientRes}
 */
proto.api.v0alpha.SendgridAccountByClientRes.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SendgridAccountByClientRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendgridAccountByClientRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendgridAccountByClientRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendgridAccountByClientRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool result = 1;
 * @return {boolean}
 */
proto.api.v0alpha.SendgridAccountByClientRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.SendgridAccountByClientRes} returns this
 */
proto.api.v0alpha.SendgridAccountByClientRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.ListConnectedInboxesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConnectedInboxesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConnectedInboxesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConnectedInboxesReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListConnectedInboxesReq}
 */
proto.api.v0alpha.ListConnectedInboxesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConnectedInboxesReq;
  return proto.api.v0alpha.ListConnectedInboxesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConnectedInboxesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConnectedInboxesReq}
 */
proto.api.v0alpha.ListConnectedInboxesReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListConnectedInboxesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConnectedInboxesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConnectedInboxesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConnectedInboxesReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ListConnectedInboxesReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.ListConnectedInboxesReq} returns this
*/
proto.api.v0alpha.ListConnectedInboxesReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConnectedInboxesReq} returns this
 */
proto.api.v0alpha.ListConnectedInboxesReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConnectedInboxesReq.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListConnectedInboxesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListConnectedInboxesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConnectedInboxesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConnectedInboxesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConnectedInboxesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
connectedInboxesList: jspb.Message.toObjectList(msg.getConnectedInboxesList(),
    proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes}
 */
proto.api.v0alpha.ListConnectedInboxesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConnectedInboxesRes;
  return proto.api.v0alpha.ListConnectedInboxesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConnectedInboxesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes}
 */
proto.api.v0alpha.ListConnectedInboxesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox;
      reader.readMessage(value,proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.deserializeBinaryFromReader);
      msg.addConnectedInboxes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConnectedInboxesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConnectedInboxesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConnectedInboxesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConnectedInboxesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectedInboxesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.toObject = function(includeInstance, msg) {
  var f, obj = {
connectedInbox: (f = msg.getConnectedInbox()) && api_commons_omnichannel_pb.ConnectedInbox.toObject(includeInstance, f),
campaignsList: jspb.Message.toObjectList(msg.getCampaignsList(),
    api_commons_omnichannel_pb.OmniCampaign.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox}
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox;
  return proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox}
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.ConnectedInbox;
      reader.readMessage(value,api_commons_omnichannel_pb.ConnectedInbox.deserializeBinaryFromReader);
      msg.setConnectedInbox(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.addCampaigns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectedInbox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.ConnectedInbox.serializeBinaryToWriter
    );
  }
  f = message.getCampaignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.ConnectedInbox connected_inbox = 1;
 * @return {?proto.api.commons.ConnectedInbox}
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.getConnectedInbox = function() {
  return /** @type{?proto.api.commons.ConnectedInbox} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.ConnectedInbox, 1));
};


/**
 * @param {?proto.api.commons.ConnectedInbox|undefined} value
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox} returns this
*/
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.setConnectedInbox = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox} returns this
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.clearConnectedInbox = function() {
  return this.setConnectedInbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.hasConnectedInbox = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated api.commons.OmniCampaign campaigns = 2;
 * @return {!Array<!proto.api.commons.OmniCampaign>}
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.getCampaignsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniCampaign>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {!Array<!proto.api.commons.OmniCampaign>} value
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox} returns this
*/
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.setCampaignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.OmniCampaign=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniCampaign}
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.addCampaigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.OmniCampaign, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox} returns this
 */
proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox.prototype.clearCampaignsList = function() {
  return this.setCampaignsList([]);
};


/**
 * repeated ListConnectedInbox connected_inboxes = 1;
 * @return {!Array<!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox>}
 */
proto.api.v0alpha.ListConnectedInboxesRes.prototype.getConnectedInboxesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox>} value
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes} returns this
*/
proto.api.v0alpha.ListConnectedInboxesRes.prototype.setConnectedInboxesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox}
 */
proto.api.v0alpha.ListConnectedInboxesRes.prototype.addConnectedInboxes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.ListConnectedInboxesRes.ListConnectedInbox, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListConnectedInboxesRes} returns this
 */
proto.api.v0alpha.ListConnectedInboxesRes.prototype.clearConnectedInboxesList = function() {
  return this.setConnectedInboxesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.TestConnectedInboxRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.TestConnectedInboxRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.TestConnectedInboxRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TestConnectedInboxRes.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.TestConnectedInboxRes}
 */
proto.api.v0alpha.TestConnectedInboxRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.TestConnectedInboxRes;
  return proto.api.v0alpha.TestConnectedInboxRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.TestConnectedInboxRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.TestConnectedInboxRes}
 */
proto.api.v0alpha.TestConnectedInboxRes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.TestConnectedInboxRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.TestConnectedInboxRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.TestConnectedInboxRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.TestConnectedInboxRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.api.v0alpha.TestConnectedInboxRes.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.TestConnectedInboxRes} returns this
 */
proto.api.v0alpha.TestConnectedInboxRes.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.api.v0alpha.TestConnectedInboxRes.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.TestConnectedInboxRes} returns this
 */
proto.api.v0alpha.TestConnectedInboxRes.prototype.setDetails = function(value) {
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
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateConnectedInboxReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateConnectedInboxReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateConnectedInboxReq.toObject = function(includeInstance, msg) {
  var f, obj = {
connectedInbox: (f = msg.getConnectedInbox()) && api_commons_omnichannel_pb.ConnectedInbox.toObject(includeInstance, f),
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
 * @return {!proto.api.v0alpha.UpdateConnectedInboxReq}
 */
proto.api.v0alpha.UpdateConnectedInboxReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateConnectedInboxReq;
  return proto.api.v0alpha.UpdateConnectedInboxReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateConnectedInboxReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateConnectedInboxReq}
 */
proto.api.v0alpha.UpdateConnectedInboxReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.ConnectedInbox;
      reader.readMessage(value,api_commons_omnichannel_pb.ConnectedInbox.deserializeBinaryFromReader);
      msg.setConnectedInbox(value);
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
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateConnectedInboxReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateConnectedInboxReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateConnectedInboxReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectedInbox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.ConnectedInbox.serializeBinaryToWriter
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
 * optional api.commons.ConnectedInbox connected_inbox = 1;
 * @return {?proto.api.commons.ConnectedInbox}
 */
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.getConnectedInbox = function() {
  return /** @type{?proto.api.commons.ConnectedInbox} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.ConnectedInbox, 1));
};


/**
 * @param {?proto.api.commons.ConnectedInbox|undefined} value
 * @return {!proto.api.v0alpha.UpdateConnectedInboxReq} returns this
*/
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.setConnectedInbox = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateConnectedInboxReq} returns this
 */
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.clearConnectedInbox = function() {
  return this.setConnectedInbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.hasConnectedInbox = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.UpdateConnectedInboxReq} returns this
*/
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateConnectedInboxReq} returns this
 */
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateConnectedInboxReq.prototype.hasFieldMask = function() {
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
proto.api.v0alpha.CreateVerifiedEmailRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateVerifiedEmailRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateVerifiedEmailRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateVerifiedEmailRes.toObject = function(includeInstance, msg) {
  var f, obj = {
verifiedEmailSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateVerifiedEmailRes}
 */
proto.api.v0alpha.CreateVerifiedEmailRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateVerifiedEmailRes;
  return proto.api.v0alpha.CreateVerifiedEmailRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateVerifiedEmailRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateVerifiedEmailRes}
 */
proto.api.v0alpha.CreateVerifiedEmailRes.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateVerifiedEmailRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateVerifiedEmailRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateVerifiedEmailRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateVerifiedEmailRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerifiedEmailSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 verified_email_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateVerifiedEmailRes.prototype.getVerifiedEmailSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateVerifiedEmailRes} returns this
 */
proto.api.v0alpha.CreateVerifiedEmailRes.prototype.setVerifiedEmailSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SendEmailNotificationReq.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendEmailNotificationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendEmailNotificationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendEmailNotificationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
subject: jspb.Message.getFieldWithDefault(msg, 2, ""),
data: jspb.Message.getFieldWithDefault(msg, 3, ""),
message: jspb.Message.getFieldWithDefault(msg, 4, ""),
toEmailAddressArrList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SendEmailNotificationReq}
 */
proto.api.v0alpha.SendEmailNotificationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendEmailNotificationReq;
  return proto.api.v0alpha.SendEmailNotificationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendEmailNotificationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendEmailNotificationReq}
 */
proto.api.v0alpha.SendEmailNotificationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addToEmailAddressArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendEmailNotificationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendEmailNotificationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendEmailNotificationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToEmailAddressArrList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendEmailNotificationReq} returns this
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string data = 3;
 * @return {string}
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendEmailNotificationReq} returns this
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendEmailNotificationReq} returns this
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string to_email_address_arr = 5;
 * @return {!Array<string>}
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.getToEmailAddressArrList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.SendEmailNotificationReq} returns this
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.setToEmailAddressArrList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SendEmailNotificationReq} returns this
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.addToEmailAddressArr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SendEmailNotificationReq} returns this
 */
proto.api.v0alpha.SendEmailNotificationReq.prototype.clearToEmailAddressArrList = function() {
  return this.setToEmailAddressArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SendEmailNotificationRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendEmailNotificationRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendEmailNotificationRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendEmailNotificationRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.SendEmailNotificationRes}
 */
proto.api.v0alpha.SendEmailNotificationRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendEmailNotificationRes;
  return proto.api.v0alpha.SendEmailNotificationRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendEmailNotificationRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendEmailNotificationRes}
 */
proto.api.v0alpha.SendEmailNotificationRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.SendEmailNotificationRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendEmailNotificationRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendEmailNotificationRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendEmailNotificationRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.GetVerifiedEmailBySidReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetVerifiedEmailBySidReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetVerifiedEmailBySidReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetVerifiedEmailBySidReq.toObject = function(includeInstance, msg) {
  var f, obj = {
verifiedEmailSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetVerifiedEmailBySidReq}
 */
proto.api.v0alpha.GetVerifiedEmailBySidReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetVerifiedEmailBySidReq;
  return proto.api.v0alpha.GetVerifiedEmailBySidReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetVerifiedEmailBySidReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetVerifiedEmailBySidReq}
 */
proto.api.v0alpha.GetVerifiedEmailBySidReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetVerifiedEmailBySidReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetVerifiedEmailBySidReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetVerifiedEmailBySidReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetVerifiedEmailBySidReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerifiedEmailSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 verified_email_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.GetVerifiedEmailBySidReq.prototype.getVerifiedEmailSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetVerifiedEmailBySidReq} returns this
 */
proto.api.v0alpha.GetVerifiedEmailBySidReq.prototype.setVerifiedEmailSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.DeleteVerifiedEmailReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteVerifiedEmailReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteVerifiedEmailReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteVerifiedEmailReq.toObject = function(includeInstance, msg) {
  var f, obj = {
verifiedEmailSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteVerifiedEmailReq}
 */
proto.api.v0alpha.DeleteVerifiedEmailReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteVerifiedEmailReq;
  return proto.api.v0alpha.DeleteVerifiedEmailReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteVerifiedEmailReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteVerifiedEmailReq}
 */
proto.api.v0alpha.DeleteVerifiedEmailReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteVerifiedEmailReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteVerifiedEmailReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteVerifiedEmailReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteVerifiedEmailReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerifiedEmailSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 verified_email_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteVerifiedEmailReq.prototype.getVerifiedEmailSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteVerifiedEmailReq} returns this
 */
proto.api.v0alpha.DeleteVerifiedEmailReq.prototype.setVerifiedEmailSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListVerifiedEmailsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListVerifiedEmailsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListVerifiedEmailsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListVerifiedEmailsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListVerifiedEmailsReq}
 */
proto.api.v0alpha.ListVerifiedEmailsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListVerifiedEmailsReq;
  return proto.api.v0alpha.ListVerifiedEmailsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListVerifiedEmailsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListVerifiedEmailsReq}
 */
proto.api.v0alpha.ListVerifiedEmailsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListVerifiedEmailsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListVerifiedEmailsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListVerifiedEmailsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListVerifiedEmailsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListVerifiedEmailsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListVerifiedEmailsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListVerifiedEmailsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListVerifiedEmailsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListVerifiedEmailsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
verifiedEmailsList: jspb.Message.toObjectList(msg.getVerifiedEmailsList(),
    api_commons_omnichannel_pb.VerifiedEmail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListVerifiedEmailsRes}
 */
proto.api.v0alpha.ListVerifiedEmailsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListVerifiedEmailsRes;
  return proto.api.v0alpha.ListVerifiedEmailsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListVerifiedEmailsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListVerifiedEmailsRes}
 */
proto.api.v0alpha.ListVerifiedEmailsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.VerifiedEmail;
      reader.readMessage(value,api_commons_omnichannel_pb.VerifiedEmail.deserializeBinaryFromReader);
      msg.addVerifiedEmails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListVerifiedEmailsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListVerifiedEmailsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListVerifiedEmailsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListVerifiedEmailsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerifiedEmailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.VerifiedEmail.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.VerifiedEmail verified_emails = 1;
 * @return {!Array<!proto.api.commons.VerifiedEmail>}
 */
proto.api.v0alpha.ListVerifiedEmailsRes.prototype.getVerifiedEmailsList = function() {
  return /** @type{!Array<!proto.api.commons.VerifiedEmail>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.VerifiedEmail, 1));
};


/**
 * @param {!Array<!proto.api.commons.VerifiedEmail>} value
 * @return {!proto.api.v0alpha.ListVerifiedEmailsRes} returns this
*/
proto.api.v0alpha.ListVerifiedEmailsRes.prototype.setVerifiedEmailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.VerifiedEmail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.VerifiedEmail}
 */
proto.api.v0alpha.ListVerifiedEmailsRes.prototype.addVerifiedEmails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.VerifiedEmail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListVerifiedEmailsRes} returns this
 */
proto.api.v0alpha.ListVerifiedEmailsRes.prototype.clearVerifiedEmailsList = function() {
  return this.setVerifiedEmailsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ResendVerifiedEmailReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ResendVerifiedEmailReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ResendVerifiedEmailReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResendVerifiedEmailReq.toObject = function(includeInstance, msg) {
  var f, obj = {
verifiedEmailSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ResendVerifiedEmailReq}
 */
proto.api.v0alpha.ResendVerifiedEmailReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ResendVerifiedEmailReq;
  return proto.api.v0alpha.ResendVerifiedEmailReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ResendVerifiedEmailReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ResendVerifiedEmailReq}
 */
proto.api.v0alpha.ResendVerifiedEmailReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ResendVerifiedEmailReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ResendVerifiedEmailReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ResendVerifiedEmailReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResendVerifiedEmailReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerifiedEmailSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 verified_email_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.ResendVerifiedEmailReq.prototype.getVerifiedEmailSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ResendVerifiedEmailReq} returns this
 */
proto.api.v0alpha.ResendVerifiedEmailReq.prototype.setVerifiedEmailSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ResendVerifiedEmailRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ResendVerifiedEmailRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ResendVerifiedEmailRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResendVerifiedEmailRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ResendVerifiedEmailRes}
 */
proto.api.v0alpha.ResendVerifiedEmailRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ResendVerifiedEmailRes;
  return proto.api.v0alpha.ResendVerifiedEmailRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ResendVerifiedEmailRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ResendVerifiedEmailRes}
 */
proto.api.v0alpha.ResendVerifiedEmailRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ResendVerifiedEmailRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ResendVerifiedEmailRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ResendVerifiedEmailRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResendVerifiedEmailRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateVerifiedEmailReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateVerifiedEmailReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateVerifiedEmailReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateVerifiedEmailReq.toObject = function(includeInstance, msg) {
  var f, obj = {
verifiedEmailSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
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
 * @return {!proto.api.v0alpha.UpdateVerifiedEmailReq}
 */
proto.api.v0alpha.UpdateVerifiedEmailReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateVerifiedEmailReq;
  return proto.api.v0alpha.UpdateVerifiedEmailReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateVerifiedEmailReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateVerifiedEmailReq}
 */
proto.api.v0alpha.UpdateVerifiedEmailReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateVerifiedEmailReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateVerifiedEmailReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateVerifiedEmailReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateVerifiedEmailReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerifiedEmailSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
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
 * optional int64 verified_email_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateVerifiedEmailReq.prototype.getVerifiedEmailSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateVerifiedEmailReq} returns this
 */
proto.api.v0alpha.UpdateVerifiedEmailReq.prototype.setVerifiedEmailSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateVerifiedEmailReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateVerifiedEmailReq} returns this
 */
proto.api.v0alpha.UpdateVerifiedEmailReq.prototype.setDescription = function(value) {
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
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.toObject = function(includeInstance, msg) {
  var f, obj = {
identificationToken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq}
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq;
  return proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq}
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentificationToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentificationToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string identification_token = 1;
 * @return {string}
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.prototype.getIdentificationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq} returns this
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataReq.prototype.setIdentificationToken = function(value) {
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
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.toObject = function(includeInstance, msg) {
  var f, obj = {
emailAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes}
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes;
  return proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes}
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string email_address = 1;
 * @return {string}
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes} returns this
 */
proto.api.v0alpha.GetPendingGoogleXOAuth2DataRes.prototype.setEmailAddress = function(value) {
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
proto.api.v0alpha.SendFeedbackEmailReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendFeedbackEmailReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendFeedbackEmailReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendFeedbackEmailReq.toObject = function(includeInstance, msg) {
  var f, obj = {
fromEmail: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
screenshot: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SendFeedbackEmailReq}
 */
proto.api.v0alpha.SendFeedbackEmailReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendFeedbackEmailReq;
  return proto.api.v0alpha.SendFeedbackEmailReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendFeedbackEmailReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendFeedbackEmailReq}
 */
proto.api.v0alpha.SendFeedbackEmailReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setScreenshot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendFeedbackEmailReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendFeedbackEmailReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendFeedbackEmailReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromEmail();
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
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScreenshot();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string from_email = 1;
 * @return {string}
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.getFromEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendFeedbackEmailReq} returns this
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.setFromEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendFeedbackEmailReq} returns this
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendFeedbackEmailReq} returns this
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string screenshot = 4;
 * @return {string}
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.getScreenshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendFeedbackEmailReq} returns this
 */
proto.api.v0alpha.SendFeedbackEmailReq.prototype.setScreenshot = function(value) {
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
proto.api.v0alpha.SendFeedbackEmailRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendFeedbackEmailRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendFeedbackEmailRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendFeedbackEmailRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.SendFeedbackEmailRes}
 */
proto.api.v0alpha.SendFeedbackEmailRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendFeedbackEmailRes;
  return proto.api.v0alpha.SendFeedbackEmailRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendFeedbackEmailRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendFeedbackEmailRes}
 */
proto.api.v0alpha.SendFeedbackEmailRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.SendFeedbackEmailRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendFeedbackEmailRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendFeedbackEmailRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendFeedbackEmailRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.GetOmniAttachmentReq.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.api.v0alpha.GetOmniAttachmentReq.FilterCase = {
  FILTER_NOT_SET: 0,
  BY_OMNI_ATTACHMENT_SID: 100
};

/**
 * @return {proto.api.v0alpha.GetOmniAttachmentReq.FilterCase}
 */
proto.api.v0alpha.GetOmniAttachmentReq.prototype.getFilterCase = function() {
  return /** @type {proto.api.v0alpha.GetOmniAttachmentReq.FilterCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.GetOmniAttachmentReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetOmniAttachmentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetOmniAttachmentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetOmniAttachmentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOmniAttachmentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
includeDownloadUrl: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
byOmniAttachmentSid: (f = msg.getByOmniAttachmentSid()) && proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetOmniAttachmentReq}
 */
proto.api.v0alpha.GetOmniAttachmentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetOmniAttachmentReq;
  return proto.api.v0alpha.GetOmniAttachmentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetOmniAttachmentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetOmniAttachmentReq}
 */
proto.api.v0alpha.GetOmniAttachmentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDownloadUrl(value);
      break;
    case 100:
      var value = new proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid;
      reader.readMessage(value,proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.deserializeBinaryFromReader);
      msg.setByOmniAttachmentSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetOmniAttachmentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetOmniAttachmentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetOmniAttachmentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOmniAttachmentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeDownloadUrl();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getByOmniAttachmentSid();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.serializeBinaryToWriter
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
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.toObject = function(includeInstance, msg) {
  var f, obj = {
omniAttachmentSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid}
 */
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid;
  return proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid}
 */
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOmniAttachmentSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 omni_attachment_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.prototype.getOmniAttachmentSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid} returns this
 */
proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid.prototype.setOmniAttachmentSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional bool include_download_url = 1;
 * @return {boolean}
 */
proto.api.v0alpha.GetOmniAttachmentReq.prototype.getIncludeDownloadUrl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.GetOmniAttachmentReq} returns this
 */
proto.api.v0alpha.GetOmniAttachmentReq.prototype.setIncludeDownloadUrl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional ByOmniAttachmentSid by_omni_attachment_sid = 100;
 * @return {?proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid}
 */
proto.api.v0alpha.GetOmniAttachmentReq.prototype.getByOmniAttachmentSid = function() {
  return /** @type{?proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid, 100));
};


/**
 * @param {?proto.api.v0alpha.GetOmniAttachmentReq.ByOmniAttachmentSid|undefined} value
 * @return {!proto.api.v0alpha.GetOmniAttachmentReq} returns this
*/
proto.api.v0alpha.GetOmniAttachmentReq.prototype.setByOmniAttachmentSid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.v0alpha.GetOmniAttachmentReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetOmniAttachmentReq} returns this
 */
proto.api.v0alpha.GetOmniAttachmentReq.prototype.clearByOmniAttachmentSid = function() {
  return this.setByOmniAttachmentSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetOmniAttachmentReq.prototype.hasByOmniAttachmentSid = function() {
  return jspb.Message.getField(this, 100) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v0alpha.CreateTasksReq.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.api.v0alpha.CreateTasksReq.DataSourceCase = {
  DATA_SOURCE_NOT_SET: 0,
  CONTACT_LIST_DATA_SOURCE: 100
};

/**
 * @return {proto.api.v0alpha.CreateTasksReq.DataSourceCase}
 */
proto.api.v0alpha.CreateTasksReq.prototype.getDataSourceCase = function() {
  return /** @type {proto.api.v0alpha.CreateTasksReq.DataSourceCase} */(jspb.Message.computeOneofCase(this, proto.api.v0alpha.CreateTasksReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateTasksReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateTasksReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateTasksReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateTasksReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
campaignModuleSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
contactListDataSource: (f = msg.getContactListDataSource()) && proto.api.v0alpha.ContactListDataSource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateTasksReq}
 */
proto.api.v0alpha.CreateTasksReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateTasksReq;
  return proto.api.v0alpha.CreateTasksReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateTasksReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateTasksReq}
 */
proto.api.v0alpha.CreateTasksReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignModuleSid(value);
      break;
    case 100:
      var value = new proto.api.v0alpha.ContactListDataSource;
      reader.readMessage(value,proto.api.v0alpha.ContactListDataSource.deserializeBinaryFromReader);
      msg.setContactListDataSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateTasksReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateTasksReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateTasksReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateTasksReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getCampaignModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getContactListDataSource();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.api.v0alpha.ContactListDataSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateTasksReq.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateTasksReq} returns this
 */
proto.api.v0alpha.CreateTasksReq.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_module_sid = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateTasksReq.prototype.getCampaignModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateTasksReq} returns this
 */
proto.api.v0alpha.CreateTasksReq.prototype.setCampaignModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional ContactListDataSource contact_list_data_source = 100;
 * @return {?proto.api.v0alpha.ContactListDataSource}
 */
proto.api.v0alpha.CreateTasksReq.prototype.getContactListDataSource = function() {
  return /** @type{?proto.api.v0alpha.ContactListDataSource} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ContactListDataSource, 100));
};


/**
 * @param {?proto.api.v0alpha.ContactListDataSource|undefined} value
 * @return {!proto.api.v0alpha.CreateTasksReq} returns this
*/
proto.api.v0alpha.CreateTasksReq.prototype.setContactListDataSource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.api.v0alpha.CreateTasksReq.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateTasksReq} returns this
 */
proto.api.v0alpha.CreateTasksReq.prototype.clearContactListDataSource = function() {
  return this.setContactListDataSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateTasksReq.prototype.hasContactListDataSource = function() {
  return jspb.Message.getField(this, 100) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateTasksRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateTasksRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateTasksRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateTasksRes.toObject = function(includeInstance, msg) {
  var f, obj = {
referenceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateTasksRes}
 */
proto.api.v0alpha.CreateTasksRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateTasksRes;
  return proto.api.v0alpha.CreateTasksRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateTasksRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateTasksRes}
 */
proto.api.v0alpha.CreateTasksRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.api.v0alpha.CreateTasksRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateTasksRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateTasksRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateTasksRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateTasksRes.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateTasksRes} returns this
 */
proto.api.v0alpha.CreateTasksRes.prototype.setReferenceId = function(value) {
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
proto.api.v0alpha.CreateSignatureReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSignatureReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSignatureReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSignatureReq.toObject = function(includeInstance, msg) {
  var f, obj = {
signature: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSignatureReq}
 */
proto.api.v0alpha.CreateSignatureReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSignatureReq;
  return proto.api.v0alpha.CreateSignatureReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSignatureReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSignatureReq}
 */
proto.api.v0alpha.CreateSignatureReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
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
proto.api.v0alpha.CreateSignatureReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSignatureReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSignatureReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSignatureReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature();
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
};


/**
 * optional string signature = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateSignatureReq.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSignatureReq} returns this
 */
proto.api.v0alpha.CreateSignatureReq.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateSignatureReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSignatureReq} returns this
 */
proto.api.v0alpha.CreateSignatureReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v0alpha.CreateSignatureReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSignatureReq} returns this
 */
proto.api.v0alpha.CreateSignatureReq.prototype.setDescription = function(value) {
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
proto.api.v0alpha.CreateSignatureRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSignatureRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSignatureRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSignatureRes.toObject = function(includeInstance, msg) {
  var f, obj = {
signature: (f = msg.getSignature()) && api_commons_omnichannel_pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSignatureRes}
 */
proto.api.v0alpha.CreateSignatureRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSignatureRes;
  return proto.api.v0alpha.CreateSignatureRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSignatureRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSignatureRes}
 */
proto.api.v0alpha.CreateSignatureRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.Signature;
      reader.readMessage(value,api_commons_omnichannel_pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateSignatureRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSignatureRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSignatureRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSignatureRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Signature signature = 1;
 * @return {?proto.api.commons.Signature}
 */
proto.api.v0alpha.CreateSignatureRes.prototype.getSignature = function() {
  return /** @type{?proto.api.commons.Signature} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.Signature, 1));
};


/**
 * @param {?proto.api.commons.Signature|undefined} value
 * @return {!proto.api.v0alpha.CreateSignatureRes} returns this
*/
proto.api.v0alpha.CreateSignatureRes.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateSignatureRes} returns this
 */
proto.api.v0alpha.CreateSignatureRes.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateSignatureRes.prototype.hasSignature = function() {
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
proto.api.v0alpha.DeleteSignatureReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSignatureReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSignatureReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSignatureReq.toObject = function(includeInstance, msg) {
  var f, obj = {
signatureSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteSignatureReq}
 */
proto.api.v0alpha.DeleteSignatureReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSignatureReq;
  return proto.api.v0alpha.DeleteSignatureReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSignatureReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSignatureReq}
 */
proto.api.v0alpha.DeleteSignatureReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteSignatureReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSignatureReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSignatureReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSignatureReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignatureSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 signature_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteSignatureReq.prototype.getSignatureSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteSignatureReq} returns this
 */
proto.api.v0alpha.DeleteSignatureReq.prototype.setSignatureSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.DeleteSignatureRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSignatureRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSignatureRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSignatureRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteSignatureRes}
 */
proto.api.v0alpha.DeleteSignatureRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSignatureRes;
  return proto.api.v0alpha.DeleteSignatureRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSignatureRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSignatureRes}
 */
proto.api.v0alpha.DeleteSignatureRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteSignatureRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSignatureRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSignatureRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSignatureRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ListSignaturesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSignaturesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSignaturesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSignaturesReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListSignaturesReq}
 */
proto.api.v0alpha.ListSignaturesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSignaturesReq;
  return proto.api.v0alpha.ListSignaturesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSignaturesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSignaturesReq}
 */
proto.api.v0alpha.ListSignaturesReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListSignaturesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSignaturesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSignaturesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSignaturesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSignaturesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSignaturesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSignaturesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSignaturesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSignaturesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    api_commons_omnichannel_pb.Signature.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSignaturesRes}
 */
proto.api.v0alpha.ListSignaturesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSignaturesRes;
  return proto.api.v0alpha.ListSignaturesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSignaturesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSignaturesRes}
 */
proto.api.v0alpha.ListSignaturesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.Signature;
      reader.readMessage(value,api_commons_omnichannel_pb.Signature.deserializeBinaryFromReader);
      msg.addSignatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSignaturesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSignaturesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSignaturesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSignaturesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.Signature signatures = 1;
 * @return {!Array<!proto.api.commons.Signature>}
 */
proto.api.v0alpha.ListSignaturesRes.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.api.commons.Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.Signature, 1));
};


/**
 * @param {!Array<!proto.api.commons.Signature>} value
 * @return {!proto.api.v0alpha.ListSignaturesRes} returns this
*/
proto.api.v0alpha.ListSignaturesRes.prototype.setSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Signature}
 */
proto.api.v0alpha.ListSignaturesRes.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.Signature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSignaturesRes} returns this
 */
proto.api.v0alpha.ListSignaturesRes.prototype.clearSignaturesList = function() {
  return this.setSignaturesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateSignatureReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSignatureReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSignatureReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSignatureReq.toObject = function(includeInstance, msg) {
  var f, obj = {
signature: (f = msg.getSignature()) && api_commons_omnichannel_pb.Signature.toObject(includeInstance, f),
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
 * @return {!proto.api.v0alpha.UpdateSignatureReq}
 */
proto.api.v0alpha.UpdateSignatureReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSignatureReq;
  return proto.api.v0alpha.UpdateSignatureReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSignatureReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSignatureReq}
 */
proto.api.v0alpha.UpdateSignatureReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.Signature;
      reader.readMessage(value,api_commons_omnichannel_pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
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
proto.api.v0alpha.UpdateSignatureReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSignatureReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSignatureReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSignatureReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.Signature.serializeBinaryToWriter
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
 * optional api.commons.Signature signature = 1;
 * @return {?proto.api.commons.Signature}
 */
proto.api.v0alpha.UpdateSignatureReq.prototype.getSignature = function() {
  return /** @type{?proto.api.commons.Signature} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.Signature, 1));
};


/**
 * @param {?proto.api.commons.Signature|undefined} value
 * @return {!proto.api.v0alpha.UpdateSignatureReq} returns this
*/
proto.api.v0alpha.UpdateSignatureReq.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateSignatureReq} returns this
 */
proto.api.v0alpha.UpdateSignatureReq.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateSignatureReq.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.UpdateSignatureReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.UpdateSignatureReq} returns this
*/
proto.api.v0alpha.UpdateSignatureReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateSignatureReq} returns this
 */
proto.api.v0alpha.UpdateSignatureReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateSignatureReq.prototype.hasFieldMask = function() {
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
proto.api.v0alpha.UpdateSignatureRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSignatureRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSignatureRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSignatureRes.toObject = function(includeInstance, msg) {
  var f, obj = {
signature: (f = msg.getSignature()) && api_commons_omnichannel_pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateSignatureRes}
 */
proto.api.v0alpha.UpdateSignatureRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSignatureRes;
  return proto.api.v0alpha.UpdateSignatureRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSignatureRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSignatureRes}
 */
proto.api.v0alpha.UpdateSignatureRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.Signature;
      reader.readMessage(value,api_commons_omnichannel_pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateSignatureRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSignatureRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSignatureRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSignatureRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Signature signature = 1;
 * @return {?proto.api.commons.Signature}
 */
proto.api.v0alpha.UpdateSignatureRes.prototype.getSignature = function() {
  return /** @type{?proto.api.commons.Signature} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.Signature, 1));
};


/**
 * @param {?proto.api.commons.Signature|undefined} value
 * @return {!proto.api.v0alpha.UpdateSignatureRes} returns this
*/
proto.api.v0alpha.UpdateSignatureRes.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateSignatureRes} returns this
 */
proto.api.v0alpha.UpdateSignatureRes.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateSignatureRes.prototype.hasSignature = function() {
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
proto.api.v0alpha.CreateProjectReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateProjectReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateProjectReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateProjectReq.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
complianceConfig: (f = msg.getComplianceConfig()) && api_commons_omnichannel_pb.OmniProjectComplianceConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateProjectReq}
 */
proto.api.v0alpha.CreateProjectReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateProjectReq;
  return proto.api.v0alpha.CreateProjectReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateProjectReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateProjectReq}
 */
proto.api.v0alpha.CreateProjectReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new api_commons_omnichannel_pb.OmniProjectComplianceConfig;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniProjectComplianceConfig.deserializeBinaryFromReader);
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
proto.api.v0alpha.CreateProjectReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateProjectReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateProjectReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateProjectReq.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getComplianceConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_omnichannel_pb.OmniProjectComplianceConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateProjectReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateProjectReq} returns this
 */
proto.api.v0alpha.CreateProjectReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateProjectReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateProjectReq} returns this
 */
proto.api.v0alpha.CreateProjectReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.OmniProjectComplianceConfig compliance_config = 3;
 * @return {?proto.api.commons.OmniProjectComplianceConfig}
 */
proto.api.v0alpha.CreateProjectReq.prototype.getComplianceConfig = function() {
  return /** @type{?proto.api.commons.OmniProjectComplianceConfig} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniProjectComplianceConfig, 3));
};


/**
 * @param {?proto.api.commons.OmniProjectComplianceConfig|undefined} value
 * @return {!proto.api.v0alpha.CreateProjectReq} returns this
*/
proto.api.v0alpha.CreateProjectReq.prototype.setComplianceConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateProjectReq} returns this
 */
proto.api.v0alpha.CreateProjectReq.prototype.clearComplianceConfig = function() {
  return this.setComplianceConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateProjectReq.prototype.hasComplianceConfig = function() {
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
proto.api.v0alpha.CreateProjectRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateProjectRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateProjectRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateProjectRes.toObject = function(includeInstance, msg) {
  var f, obj = {
project: (f = msg.getProject()) && proto.api.v0alpha.Project.toObject(includeInstance, f),
referenceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateProjectRes}
 */
proto.api.v0alpha.CreateProjectRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateProjectRes;
  return proto.api.v0alpha.CreateProjectRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateProjectRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateProjectRes}
 */
proto.api.v0alpha.CreateProjectRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Project;
      reader.readMessage(value,proto.api.v0alpha.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
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
proto.api.v0alpha.CreateProjectRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateProjectRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateProjectRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateProjectRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.Project.serializeBinaryToWriter
    );
  }
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.api.v0alpha.Project}
 */
proto.api.v0alpha.CreateProjectRes.prototype.getProject = function() {
  return /** @type{?proto.api.v0alpha.Project} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Project, 1));
};


/**
 * @param {?proto.api.v0alpha.Project|undefined} value
 * @return {!proto.api.v0alpha.CreateProjectRes} returns this
*/
proto.api.v0alpha.CreateProjectRes.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateProjectRes} returns this
 */
proto.api.v0alpha.CreateProjectRes.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateProjectRes.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string reference_id = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateProjectRes.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateProjectRes} returns this
 */
proto.api.v0alpha.CreateProjectRes.prototype.setReferenceId = function(value) {
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
proto.api.v0alpha.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
projectSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
status: jspb.Message.getFieldWithDefault(msg, 4, 0),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
complianceConfig: (f = msg.getComplianceConfig()) && api_commons_omnichannel_pb.OmniProjectComplianceConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.Project}
 */
proto.api.v0alpha.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.Project;
  return proto.api.v0alpha.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.Project}
 */
proto.api.v0alpha.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectSid(value);
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
      var value = /** @type {!proto.api.commons.ProjectStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 6:
      var value = new api_commons_omnichannel_pb.OmniProjectComplianceConfig;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniProjectComplianceConfig.deserializeBinaryFromReader);
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
proto.api.v0alpha.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSid();
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
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getComplianceConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_omnichannel_pb.OmniProjectComplianceConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 project_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.Project.prototype.getProjectSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Project} returns this
 */
proto.api.v0alpha.Project.prototype.setProjectSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.Project.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Project} returns this
 */
proto.api.v0alpha.Project.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v0alpha.Project.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.Project} returns this
 */
proto.api.v0alpha.Project.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.ProjectStatus status = 4;
 * @return {!proto.api.commons.ProjectStatus}
 */
proto.api.v0alpha.Project.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.ProjectStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.ProjectStatus} value
 * @return {!proto.api.v0alpha.Project} returns this
 */
proto.api.v0alpha.Project.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.Project.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.Project} returns this
*/
proto.api.v0alpha.Project.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Project} returns this
 */
proto.api.v0alpha.Project.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Project.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional api.commons.OmniProjectComplianceConfig compliance_config = 6;
 * @return {?proto.api.commons.OmniProjectComplianceConfig}
 */
proto.api.v0alpha.Project.prototype.getComplianceConfig = function() {
  return /** @type{?proto.api.commons.OmniProjectComplianceConfig} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniProjectComplianceConfig, 6));
};


/**
 * @param {?proto.api.commons.OmniProjectComplianceConfig|undefined} value
 * @return {!proto.api.v0alpha.Project} returns this
*/
proto.api.v0alpha.Project.prototype.setComplianceConfig = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.Project} returns this
 */
proto.api.v0alpha.Project.prototype.clearComplianceConfig = function() {
  return this.setComplianceConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.Project.prototype.hasComplianceConfig = function() {
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
proto.api.v0alpha.ListProjectsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListProjectsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListProjectsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListProjectsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListProjectsReq}
 */
proto.api.v0alpha.ListProjectsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListProjectsReq;
  return proto.api.v0alpha.ListProjectsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListProjectsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListProjectsReq}
 */
proto.api.v0alpha.ListProjectsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListProjectsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListProjectsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListProjectsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListProjectsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListProjectsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListProjectsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListProjectsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListProjectsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListProjectsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.api.v0alpha.Project.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListProjectsRes}
 */
proto.api.v0alpha.ListProjectsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListProjectsRes;
  return proto.api.v0alpha.ListProjectsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListProjectsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListProjectsRes}
 */
proto.api.v0alpha.ListProjectsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Project;
      reader.readMessage(value,proto.api.v0alpha.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListProjectsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListProjectsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListProjectsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListProjectsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.Project.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.api.v0alpha.Project>}
 */
proto.api.v0alpha.ListProjectsRes.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.Project, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.Project>} value
 * @return {!proto.api.v0alpha.ListProjectsRes} returns this
*/
proto.api.v0alpha.ListProjectsRes.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.Project}
 */
proto.api.v0alpha.ListProjectsRes.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListProjectsRes} returns this
 */
proto.api.v0alpha.ListProjectsRes.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.EditProjectByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.EditProjectByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.EditProjectByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EditProjectByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
project: (f = msg.getProject()) && proto.api.v0alpha.Project.toObject(includeInstance, f),
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
 * @return {!proto.api.v0alpha.EditProjectByIdReq}
 */
proto.api.v0alpha.EditProjectByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.EditProjectByIdReq;
  return proto.api.v0alpha.EditProjectByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.EditProjectByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.EditProjectByIdReq}
 */
proto.api.v0alpha.EditProjectByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Project;
      reader.readMessage(value,proto.api.v0alpha.Project.deserializeBinaryFromReader);
      msg.setProject(value);
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
proto.api.v0alpha.EditProjectByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.EditProjectByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.EditProjectByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EditProjectByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.Project.serializeBinaryToWriter
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
 * optional Project project = 1;
 * @return {?proto.api.v0alpha.Project}
 */
proto.api.v0alpha.EditProjectByIdReq.prototype.getProject = function() {
  return /** @type{?proto.api.v0alpha.Project} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Project, 1));
};


/**
 * @param {?proto.api.v0alpha.Project|undefined} value
 * @return {!proto.api.v0alpha.EditProjectByIdReq} returns this
*/
proto.api.v0alpha.EditProjectByIdReq.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.EditProjectByIdReq} returns this
 */
proto.api.v0alpha.EditProjectByIdReq.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.EditProjectByIdReq.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.EditProjectByIdReq.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.EditProjectByIdReq} returns this
*/
proto.api.v0alpha.EditProjectByIdReq.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.EditProjectByIdReq} returns this
 */
proto.api.v0alpha.EditProjectByIdReq.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.EditProjectByIdReq.prototype.hasFieldMask = function() {
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
proto.api.v0alpha.EditProjectByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.EditProjectByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.EditProjectByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EditProjectByIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
project: (f = msg.getProject()) && proto.api.v0alpha.Project.toObject(includeInstance, f),
referenceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.EditProjectByIdRes}
 */
proto.api.v0alpha.EditProjectByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.EditProjectByIdRes;
  return proto.api.v0alpha.EditProjectByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.EditProjectByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.EditProjectByIdRes}
 */
proto.api.v0alpha.EditProjectByIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.Project;
      reader.readMessage(value,proto.api.v0alpha.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
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
proto.api.v0alpha.EditProjectByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.EditProjectByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.EditProjectByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EditProjectByIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.Project.serializeBinaryToWriter
    );
  }
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.api.v0alpha.Project}
 */
proto.api.v0alpha.EditProjectByIdRes.prototype.getProject = function() {
  return /** @type{?proto.api.v0alpha.Project} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.Project, 1));
};


/**
 * @param {?proto.api.v0alpha.Project|undefined} value
 * @return {!proto.api.v0alpha.EditProjectByIdRes} returns this
*/
proto.api.v0alpha.EditProjectByIdRes.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.EditProjectByIdRes} returns this
 */
proto.api.v0alpha.EditProjectByIdRes.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.EditProjectByIdRes.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string reference_id = 2;
 * @return {string}
 */
proto.api.v0alpha.EditProjectByIdRes.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.EditProjectByIdRes} returns this
 */
proto.api.v0alpha.EditProjectByIdRes.prototype.setReferenceId = function(value) {
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
proto.api.v0alpha.CloseProjectByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CloseProjectByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CloseProjectByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CloseProjectByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
projectSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CloseProjectByIdReq}
 */
proto.api.v0alpha.CloseProjectByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CloseProjectByIdReq;
  return proto.api.v0alpha.CloseProjectByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CloseProjectByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CloseProjectByIdReq}
 */
proto.api.v0alpha.CloseProjectByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CloseProjectByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CloseProjectByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CloseProjectByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CloseProjectByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 project_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.CloseProjectByIdReq.prototype.getProjectSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CloseProjectByIdReq} returns this
 */
proto.api.v0alpha.CloseProjectByIdReq.prototype.setProjectSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CloseProjectByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CloseProjectByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CloseProjectByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CloseProjectByIdRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.CloseProjectByIdRes}
 */
proto.api.v0alpha.CloseProjectByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CloseProjectByIdRes;
  return proto.api.v0alpha.CloseProjectByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CloseProjectByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CloseProjectByIdRes}
 */
proto.api.v0alpha.CloseProjectByIdRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.CloseProjectByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CloseProjectByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CloseProjectByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CloseProjectByIdRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.GetProjectByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetProjectByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetProjectByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetProjectByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
projectSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetProjectByIdReq}
 */
proto.api.v0alpha.GetProjectByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetProjectByIdReq;
  return proto.api.v0alpha.GetProjectByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetProjectByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetProjectByIdReq}
 */
proto.api.v0alpha.GetProjectByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetProjectByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetProjectByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetProjectByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetProjectByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 project_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.GetProjectByIdReq.prototype.getProjectSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetProjectByIdReq} returns this
 */
proto.api.v0alpha.GetProjectByIdReq.prototype.setProjectSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CreateCannedMessageReq.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateCannedMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateCannedMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCannedMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
messageBody: jspb.Message.getFieldWithDefault(msg, 3, ""),
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 4, ""),
allowsHtml: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    api_commons_omnichannel_pb.OmniAttachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateCannedMessageReq}
 */
proto.api.v0alpha.CreateCannedMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateCannedMessageReq;
  return proto.api.v0alpha.CreateCannedMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateCannedMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateCannedMessageReq}
 */
proto.api.v0alpha.CreateCannedMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMessageBody(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowsHtml(value);
      break;
    case 6:
      var value = new api_commons_omnichannel_pb.OmniAttachment;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniAttachment.deserializeBinaryFromReader);
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
proto.api.v0alpha.CreateCannedMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateCannedMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateCannedMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCannedMessageReq.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMessageBody();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCannedMessageGroupId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAllowsHtml();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      api_commons_omnichannel_pb.OmniAttachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateCannedMessageReq} returns this
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateCannedMessageReq} returns this
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message_body = 3;
 * @return {string}
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.getMessageBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateCannedMessageReq} returns this
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.setMessageBody = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string canned_message_group_id = 4;
 * @return {string}
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateCannedMessageReq} returns this
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.setCannedMessageGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool allows_html = 5;
 * @return {boolean}
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.getAllowsHtml = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.CreateCannedMessageReq} returns this
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.setAllowsHtml = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated api.commons.OmniAttachment attachments = 6;
 * @return {!Array<!proto.api.commons.OmniAttachment>}
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniAttachment, 6));
};


/**
 * @param {!Array<!proto.api.commons.OmniAttachment>} value
 * @return {!proto.api.v0alpha.CreateCannedMessageReq} returns this
*/
proto.api.v0alpha.CreateCannedMessageReq.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.api.commons.OmniAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.api.commons.OmniAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateCannedMessageReq} returns this
 */
proto.api.v0alpha.CreateCannedMessageReq.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CannedMessage.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CannedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CannedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CannedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CannedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
messageBody: jspb.Message.getFieldWithDefault(msg, 4, ""),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 7, ""),
allowsHtml: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    api_commons_omnichannel_pb.OmniAttachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CannedMessage}
 */
proto.api.v0alpha.CannedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CannedMessage;
  return proto.api.v0alpha.CannedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CannedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CannedMessage}
 */
proto.api.v0alpha.CannedMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMessageBody(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowsHtml(value);
      break;
    case 9:
      var value = new api_commons_omnichannel_pb.OmniAttachment;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniAttachment.deserializeBinaryFromReader);
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
proto.api.v0alpha.CannedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CannedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CannedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CannedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageId();
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
  f = message.getMessageBody();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCannedMessageGroupId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAllowsHtml();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      api_commons_omnichannel_pb.OmniAttachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string canned_message_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CannedMessage.prototype.getCannedMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.setCannedMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.CannedMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v0alpha.CannedMessage.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message_body = 4;
 * @return {string}
 */
proto.api.v0alpha.CannedMessage.prototype.getMessageBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.setMessageBody = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CannedMessage.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
*/
proto.api.v0alpha.CannedMessage.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessage.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CannedMessage.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
*/
proto.api.v0alpha.CannedMessage.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessage.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string canned_message_group_id = 7;
 * @return {string}
 */
proto.api.v0alpha.CannedMessage.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.setCannedMessageGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool allows_html = 8;
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessage.prototype.getAllowsHtml = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.setAllowsHtml = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated api.commons.OmniAttachment attachments = 9;
 * @return {!Array<!proto.api.commons.OmniAttachment>}
 */
proto.api.v0alpha.CannedMessage.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniAttachment, 9));
};


/**
 * @param {!Array<!proto.api.commons.OmniAttachment>} value
 * @return {!proto.api.v0alpha.CannedMessage} returns this
*/
proto.api.v0alpha.CannedMessage.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.OmniAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.v0alpha.CannedMessage.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.OmniAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CannedMessage} returns this
 */
proto.api.v0alpha.CannedMessage.prototype.clearAttachmentsList = function() {
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
proto.api.v0alpha.ListCannedMessagesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCannedMessagesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCannedMessagesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessagesReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListCannedMessagesReq}
 */
proto.api.v0alpha.ListCannedMessagesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCannedMessagesReq;
  return proto.api.v0alpha.ListCannedMessagesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCannedMessagesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCannedMessagesReq}
 */
proto.api.v0alpha.ListCannedMessagesReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListCannedMessagesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCannedMessagesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCannedMessagesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessagesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListCannedMessagesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCannedMessagesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCannedMessagesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCannedMessagesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessagesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessagesWithGroupList: jspb.Message.toObjectList(msg.getCannedMessagesWithGroupList(),
    proto.api.v0alpha.CannedMessageWithGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCannedMessagesRes}
 */
proto.api.v0alpha.ListCannedMessagesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCannedMessagesRes;
  return proto.api.v0alpha.ListCannedMessagesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCannedMessagesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCannedMessagesRes}
 */
proto.api.v0alpha.ListCannedMessagesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.CannedMessageWithGroup;
      reader.readMessage(value,proto.api.v0alpha.CannedMessageWithGroup.deserializeBinaryFromReader);
      msg.addCannedMessagesWithGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCannedMessagesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCannedMessagesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCannedMessagesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessagesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessagesWithGroupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.CannedMessageWithGroup.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CannedMessageWithGroup canned_messages_with_group = 1;
 * @return {!Array<!proto.api.v0alpha.CannedMessageWithGroup>}
 */
proto.api.v0alpha.ListCannedMessagesRes.prototype.getCannedMessagesWithGroupList = function() {
  return /** @type{!Array<!proto.api.v0alpha.CannedMessageWithGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.CannedMessageWithGroup, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.CannedMessageWithGroup>} value
 * @return {!proto.api.v0alpha.ListCannedMessagesRes} returns this
*/
proto.api.v0alpha.ListCannedMessagesRes.prototype.setCannedMessagesWithGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.CannedMessageWithGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CannedMessageWithGroup}
 */
proto.api.v0alpha.ListCannedMessagesRes.prototype.addCannedMessagesWithGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.CannedMessageWithGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCannedMessagesRes} returns this
 */
proto.api.v0alpha.ListCannedMessagesRes.prototype.clearCannedMessagesWithGroupList = function() {
  return this.setCannedMessagesWithGroupList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.UpdateCannedMessageReq.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCannedMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCannedMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCannedMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
messageBody: jspb.Message.getFieldWithDefault(msg, 4, ""),
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 5, ""),
allowsHtml: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    api_commons_omnichannel_pb.OmniAttachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq}
 */
proto.api.v0alpha.UpdateCannedMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCannedMessageReq;
  return proto.api.v0alpha.UpdateCannedMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCannedMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq}
 */
proto.api.v0alpha.UpdateCannedMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMessageBody(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowsHtml(value);
      break;
    case 7:
      var value = new api_commons_omnichannel_pb.OmniAttachment;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniAttachment.deserializeBinaryFromReader);
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
proto.api.v0alpha.UpdateCannedMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCannedMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCannedMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCannedMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageId();
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
  f = message.getMessageBody();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCannedMessageGroupId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAllowsHtml();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      api_commons_omnichannel_pb.OmniAttachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string canned_message_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.getCannedMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.setCannedMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message_body = 4;
 * @return {string}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.getMessageBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.setMessageBody = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string canned_message_group_id = 5;
 * @return {string}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.setCannedMessageGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool allows_html = 6;
 * @return {boolean}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.getAllowsHtml = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.setAllowsHtml = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated api.commons.OmniAttachment attachments = 7;
 * @return {!Array<!proto.api.commons.OmniAttachment>}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniAttachment, 7));
};


/**
 * @param {!Array<!proto.api.commons.OmniAttachment>} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq} returns this
*/
proto.api.v0alpha.UpdateCannedMessageReq.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.commons.OmniAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.commons.OmniAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.UpdateCannedMessageReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageReq.prototype.clearAttachmentsList = function() {
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
proto.api.v0alpha.GetCannedMessageByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetCannedMessageByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetCannedMessageByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCannedMessageByIdReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.GetCannedMessageByIdReq}
 */
proto.api.v0alpha.GetCannedMessageByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetCannedMessageByIdReq;
  return proto.api.v0alpha.GetCannedMessageByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetCannedMessageByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetCannedMessageByIdReq}
 */
proto.api.v0alpha.GetCannedMessageByIdReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.GetCannedMessageByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetCannedMessageByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetCannedMessageByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCannedMessageByIdReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.GetCannedMessageByIdReq.prototype.getCannedMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetCannedMessageByIdReq} returns this
 */
proto.api.v0alpha.GetCannedMessageByIdReq.prototype.setCannedMessageId = function(value) {
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
proto.api.v0alpha.DeleteCannedMessageByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteCannedMessageByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteCannedMessageByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCannedMessageByIdReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteCannedMessageByIdReq}
 */
proto.api.v0alpha.DeleteCannedMessageByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteCannedMessageByIdReq;
  return proto.api.v0alpha.DeleteCannedMessageByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteCannedMessageByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteCannedMessageByIdReq}
 */
proto.api.v0alpha.DeleteCannedMessageByIdReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteCannedMessageByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteCannedMessageByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteCannedMessageByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCannedMessageByIdReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DeleteCannedMessageByIdReq.prototype.getCannedMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteCannedMessageByIdReq} returns this
 */
proto.api.v0alpha.DeleteCannedMessageByIdReq.prototype.setCannedMessageId = function(value) {
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
proto.api.v0alpha.DeleteCannedMessageByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteCannedMessageByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteCannedMessageByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCannedMessageByIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
result: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteCannedMessageByIdRes}
 */
proto.api.v0alpha.DeleteCannedMessageByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteCannedMessageByIdRes;
  return proto.api.v0alpha.DeleteCannedMessageByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteCannedMessageByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteCannedMessageByIdRes}
 */
proto.api.v0alpha.DeleteCannedMessageByIdRes.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteCannedMessageByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteCannedMessageByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteCannedMessageByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCannedMessageByIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool Result = 1;
 * @return {boolean}
 */
proto.api.v0alpha.DeleteCannedMessageByIdRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.DeleteCannedMessageByIdRes} returns this
 */
proto.api.v0alpha.DeleteCannedMessageByIdRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.CreateCannedMessageGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateCannedMessageGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateCannedMessageGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCannedMessageGroupReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.CreateCannedMessageGroupReq}
 */
proto.api.v0alpha.CreateCannedMessageGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateCannedMessageGroupReq;
  return proto.api.v0alpha.CreateCannedMessageGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateCannedMessageGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateCannedMessageGroupReq}
 */
proto.api.v0alpha.CreateCannedMessageGroupReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.CreateCannedMessageGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateCannedMessageGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateCannedMessageGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateCannedMessageGroupReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.CreateCannedMessageGroupReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateCannedMessageGroupReq} returns this
 */
proto.api.v0alpha.CreateCannedMessageGroupReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateCannedMessageGroupReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateCannedMessageGroupReq} returns this
 */
proto.api.v0alpha.CreateCannedMessageGroupReq.prototype.setDescription = function(value) {
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
proto.api.v0alpha.CannedMessageGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CannedMessageGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CannedMessageGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CannedMessageGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CannedMessageGroup}
 */
proto.api.v0alpha.CannedMessageGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CannedMessageGroup;
  return proto.api.v0alpha.CannedMessageGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CannedMessageGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CannedMessageGroup}
 */
proto.api.v0alpha.CannedMessageGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CannedMessageGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CannedMessageGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CannedMessageGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CannedMessageGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageGroupId();
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
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string canned_message_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageGroup.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageGroup} returns this
 */
proto.api.v0alpha.CannedMessageGroup.prototype.setCannedMessageGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageGroup} returns this
 */
proto.api.v0alpha.CannedMessageGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageGroup} returns this
 */
proto.api.v0alpha.CannedMessageGroup.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CannedMessageGroup.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CannedMessageGroup} returns this
*/
proto.api.v0alpha.CannedMessageGroup.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CannedMessageGroup} returns this
 */
proto.api.v0alpha.CannedMessageGroup.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessageGroup.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CannedMessageGroup.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CannedMessageGroup} returns this
*/
proto.api.v0alpha.CannedMessageGroup.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CannedMessageGroup} returns this
 */
proto.api.v0alpha.CannedMessageGroup.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessageGroup.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CannedMessageWithGroup.repeatedFields_ = [13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CannedMessageWithGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CannedMessageWithGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CannedMessageWithGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
messageBody: jspb.Message.getFieldWithDefault(msg, 4, ""),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 7, ""),
groupName: jspb.Message.getFieldWithDefault(msg, 8, ""),
groupDescription: jspb.Message.getFieldWithDefault(msg, 9, ""),
groupDateCreated: (f = msg.getGroupDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
groupLastUpdated: (f = msg.getGroupLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
allowsHtml: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    api_commons_omnichannel_pb.OmniAttachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CannedMessageWithGroup}
 */
proto.api.v0alpha.CannedMessageWithGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CannedMessageWithGroup;
  return proto.api.v0alpha.CannedMessageWithGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CannedMessageWithGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CannedMessageWithGroup}
 */
proto.api.v0alpha.CannedMessageWithGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMessageBody(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupDescription(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setGroupDateCreated(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setGroupLastUpdated(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowsHtml(value);
      break;
    case 13:
      var value = new api_commons_omnichannel_pb.OmniAttachment;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniAttachment.deserializeBinaryFromReader);
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
proto.api.v0alpha.CannedMessageWithGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CannedMessageWithGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CannedMessageWithGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CannedMessageWithGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageId();
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
  f = message.getMessageBody();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCannedMessageGroupId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getGroupDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getGroupDateCreated();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getGroupLastUpdated();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAllowsHtml();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      api_commons_omnichannel_pb.OmniAttachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string canned_message_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getCannedMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.setCannedMessageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message_body = 4;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getMessageBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.setMessageBody = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
*/
proto.api.v0alpha.CannedMessageWithGroup.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
*/
proto.api.v0alpha.CannedMessageWithGroup.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string canned_message_group_id = 7;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.setCannedMessageGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string group_name = 8;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string group_description = 9;
 * @return {string}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getGroupDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.setGroupDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp group_date_created = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getGroupDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
*/
proto.api.v0alpha.CannedMessageWithGroup.prototype.setGroupDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.clearGroupDateCreated = function() {
  return this.setGroupDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.hasGroupDateCreated = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp group_last_updated = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getGroupLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
*/
proto.api.v0alpha.CannedMessageWithGroup.prototype.setGroupLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.clearGroupLastUpdated = function() {
  return this.setGroupLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.hasGroupLastUpdated = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool allows_html = 12;
 * @return {boolean}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getAllowsHtml = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.setAllowsHtml = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated api.commons.OmniAttachment attachments = 13;
 * @return {!Array<!proto.api.commons.OmniAttachment>}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.api.commons.OmniAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.OmniAttachment, 13));
};


/**
 * @param {!Array<!proto.api.commons.OmniAttachment>} value
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
*/
proto.api.v0alpha.CannedMessageWithGroup.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.api.commons.OmniAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.OmniAttachment}
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.api.commons.OmniAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CannedMessageWithGroup} returns this
 */
proto.api.v0alpha.CannedMessageWithGroup.prototype.clearAttachmentsList = function() {
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
proto.api.v0alpha.ListCannedMessageGroupsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCannedMessageGroupsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCannedMessageGroupsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessageGroupsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListCannedMessageGroupsReq}
 */
proto.api.v0alpha.ListCannedMessageGroupsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCannedMessageGroupsReq;
  return proto.api.v0alpha.ListCannedMessageGroupsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCannedMessageGroupsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCannedMessageGroupsReq}
 */
proto.api.v0alpha.ListCannedMessageGroupsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListCannedMessageGroupsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCannedMessageGroupsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCannedMessageGroupsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessageGroupsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCannedMessageGroupsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCannedMessageGroupsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageGroupsList: jspb.Message.toObjectList(msg.getCannedMessageGroupsList(),
    proto.api.v0alpha.CannedMessageGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCannedMessageGroupsRes}
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCannedMessageGroupsRes;
  return proto.api.v0alpha.ListCannedMessageGroupsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCannedMessageGroupsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCannedMessageGroupsRes}
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.CannedMessageGroup;
      reader.readMessage(value,proto.api.v0alpha.CannedMessageGroup.deserializeBinaryFromReader);
      msg.addCannedMessageGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCannedMessageGroupsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCannedMessageGroupsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.CannedMessageGroup.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CannedMessageGroup canned_message_groups = 1;
 * @return {!Array<!proto.api.v0alpha.CannedMessageGroup>}
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.prototype.getCannedMessageGroupsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.CannedMessageGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.CannedMessageGroup, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.CannedMessageGroup>} value
 * @return {!proto.api.v0alpha.ListCannedMessageGroupsRes} returns this
*/
proto.api.v0alpha.ListCannedMessageGroupsRes.prototype.setCannedMessageGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.CannedMessageGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CannedMessageGroup}
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.prototype.addCannedMessageGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.CannedMessageGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCannedMessageGroupsRes} returns this
 */
proto.api.v0alpha.ListCannedMessageGroupsRes.prototype.clearCannedMessageGroupsList = function() {
  return this.setCannedMessageGroupsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCannedMessageGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCannedMessageGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateCannedMessageGroupReq}
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCannedMessageGroupReq;
  return proto.api.v0alpha.UpdateCannedMessageGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCannedMessageGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCannedMessageGroupReq}
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
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
proto.api.v0alpha.UpdateCannedMessageGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCannedMessageGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCannedMessageGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageGroupId();
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
};


/**
 * optional string canned_message_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageGroupReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.prototype.setCannedMessageGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageGroupReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateCannedMessageGroupReq} returns this
 */
proto.api.v0alpha.UpdateCannedMessageGroupReq.prototype.setDescription = function(value) {
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
proto.api.v0alpha.UpdateCannedMessageGroupRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateCannedMessageGroupRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateCannedMessageGroupRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCannedMessageGroupRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateCannedMessageGroupRes}
 */
proto.api.v0alpha.UpdateCannedMessageGroupRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateCannedMessageGroupRes;
  return proto.api.v0alpha.UpdateCannedMessageGroupRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateCannedMessageGroupRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateCannedMessageGroupRes}
 */
proto.api.v0alpha.UpdateCannedMessageGroupRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateCannedMessageGroupRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateCannedMessageGroupRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateCannedMessageGroupRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateCannedMessageGroupRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DeleteCannedMessageGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteCannedMessageGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteCannedMessageGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCannedMessageGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteCannedMessageGroupReq}
 */
proto.api.v0alpha.DeleteCannedMessageGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteCannedMessageGroupReq;
  return proto.api.v0alpha.DeleteCannedMessageGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteCannedMessageGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteCannedMessageGroupReq}
 */
proto.api.v0alpha.DeleteCannedMessageGroupReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteCannedMessageGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteCannedMessageGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteCannedMessageGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCannedMessageGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string canned_message_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteCannedMessageGroupReq.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteCannedMessageGroupReq} returns this
 */
proto.api.v0alpha.DeleteCannedMessageGroupReq.prototype.setCannedMessageGroupId = function(value) {
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
proto.api.v0alpha.DeleteCannedMessageGroupRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteCannedMessageGroupRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteCannedMessageGroupRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCannedMessageGroupRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteCannedMessageGroupRes}
 */
proto.api.v0alpha.DeleteCannedMessageGroupRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteCannedMessageGroupRes;
  return proto.api.v0alpha.DeleteCannedMessageGroupRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteCannedMessageGroupRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteCannedMessageGroupRes}
 */
proto.api.v0alpha.DeleteCannedMessageGroupRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteCannedMessageGroupRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteCannedMessageGroupRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteCannedMessageGroupRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteCannedMessageGroupRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ListCannedMessagesByGroupIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCannedMessagesByGroupIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCannedMessagesByGroupIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCannedMessagesByGroupIdReq}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCannedMessagesByGroupIdReq;
  return proto.api.v0alpha.ListCannedMessagesByGroupIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCannedMessagesByGroupIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCannedMessagesByGroupIdReq}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCannedMessagesByGroupIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCannedMessagesByGroupIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string canned_message_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdReq.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListCannedMessagesByGroupIdReq} returns this
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdReq.prototype.setCannedMessageGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListCannedMessagesByGroupIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListCannedMessagesByGroupIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessagesWithGroupList: jspb.Message.toObjectList(msg.getCannedMessagesWithGroupList(),
    proto.api.v0alpha.CannedMessageWithGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListCannedMessagesByGroupIdRes}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListCannedMessagesByGroupIdRes;
  return proto.api.v0alpha.ListCannedMessagesByGroupIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListCannedMessagesByGroupIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListCannedMessagesByGroupIdRes}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.CannedMessageWithGroup;
      reader.readMessage(value,proto.api.v0alpha.CannedMessageWithGroup.deserializeBinaryFromReader);
      msg.addCannedMessagesWithGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListCannedMessagesByGroupIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListCannedMessagesByGroupIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessagesWithGroupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.CannedMessageWithGroup.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CannedMessageWithGroup canned_messages_with_group = 1;
 * @return {!Array<!proto.api.v0alpha.CannedMessageWithGroup>}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.prototype.getCannedMessagesWithGroupList = function() {
  return /** @type{!Array<!proto.api.v0alpha.CannedMessageWithGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.CannedMessageWithGroup, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.CannedMessageWithGroup>} value
 * @return {!proto.api.v0alpha.ListCannedMessagesByGroupIdRes} returns this
*/
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.prototype.setCannedMessagesWithGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.CannedMessageWithGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CannedMessageWithGroup}
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.prototype.addCannedMessagesWithGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.CannedMessageWithGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListCannedMessagesByGroupIdRes} returns this
 */
proto.api.v0alpha.ListCannedMessagesByGroupIdRes.prototype.clearCannedMessagesWithGroupList = function() {
  return this.setCannedMessagesWithGroupList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetCannedMessageGroupByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetCannedMessageGroupByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
cannedMessageGroupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetCannedMessageGroupByIdReq}
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetCannedMessageGroupByIdReq;
  return proto.api.v0alpha.GetCannedMessageGroupByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetCannedMessageGroupByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetCannedMessageGroupByIdReq}
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCannedMessageGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetCannedMessageGroupByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetCannedMessageGroupByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCannedMessageGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string canned_message_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq.prototype.getCannedMessageGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetCannedMessageGroupByIdReq} returns this
 */
proto.api.v0alpha.GetCannedMessageGroupByIdReq.prototype.setCannedMessageGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListUserSkillsReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListUserSkillsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListUserSkillsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListUserSkillsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListUserSkillsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
typeFiltersList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListUserSkillsReq}
 */
proto.api.v0alpha.ListUserSkillsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListUserSkillsReq;
  return proto.api.v0alpha.ListUserSkillsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListUserSkillsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListUserSkillsReq}
 */
proto.api.v0alpha.ListUserSkillsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.api.commons.SkillType.Enum>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTypeFilters(values[i]);
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
proto.api.v0alpha.ListUserSkillsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListUserSkillsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListUserSkillsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListUserSkillsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeFiltersList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated api.commons.SkillType.Enum type_filters = 1;
 * @return {!Array<!proto.api.commons.SkillType.Enum>}
 */
proto.api.v0alpha.ListUserSkillsReq.prototype.getTypeFiltersList = function() {
  return /** @type {!Array<!proto.api.commons.SkillType.Enum>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.api.commons.SkillType.Enum>} value
 * @return {!proto.api.v0alpha.ListUserSkillsReq} returns this
 */
proto.api.v0alpha.ListUserSkillsReq.prototype.setTypeFiltersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.api.commons.SkillType.Enum} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListUserSkillsReq} returns this
 */
proto.api.v0alpha.ListUserSkillsReq.prototype.addTypeFilters = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListUserSkillsReq} returns this
 */
proto.api.v0alpha.ListUserSkillsReq.prototype.clearTypeFiltersList = function() {
  return this.setTypeFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListUserSkillsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListUserSkillsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListUserSkillsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListUserSkillsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListUserSkillsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    proto.api.v0alpha.OmniSkill.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListUserSkillsRes}
 */
proto.api.v0alpha.ListUserSkillsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListUserSkillsRes;
  return proto.api.v0alpha.ListUserSkillsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListUserSkillsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListUserSkillsRes}
 */
proto.api.v0alpha.ListUserSkillsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.OmniSkill;
      reader.readMessage(value,proto.api.v0alpha.OmniSkill.deserializeBinaryFromReader);
      msg.addSkills(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListUserSkillsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListUserSkillsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListUserSkillsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListUserSkillsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.OmniSkill.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OmniSkill skills = 1;
 * @return {!Array<!proto.api.v0alpha.OmniSkill>}
 */
proto.api.v0alpha.ListUserSkillsRes.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.OmniSkill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.OmniSkill, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.OmniSkill>} value
 * @return {!proto.api.v0alpha.ListUserSkillsRes} returns this
*/
proto.api.v0alpha.ListUserSkillsRes.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.OmniSkill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.OmniSkill}
 */
proto.api.v0alpha.ListUserSkillsRes.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.OmniSkill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListUserSkillsRes} returns this
 */
proto.api.v0alpha.ListUserSkillsRes.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.OmniSkill.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.OmniSkill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.OmniSkill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.OmniSkill.toObject = function(includeInstance, msg) {
  var f, obj = {
region: jspb.Message.getFieldWithDefault(msg, 1, ""),
p3Id: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.api.v0alpha.OmniSkill}
 */
proto.api.v0alpha.OmniSkill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.OmniSkill;
  return proto.api.v0alpha.OmniSkill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.OmniSkill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.OmniSkill}
 */
proto.api.v0alpha.OmniSkill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setP3Id(value);
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
      var value = /** @type {!proto.api.commons.SkillType.Enum} */ (reader.readEnum());
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
proto.api.v0alpha.OmniSkill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.OmniSkill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.OmniSkill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.OmniSkill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getP3Id();
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
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string region = 1;
 * @return {string}
 */
proto.api.v0alpha.OmniSkill.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.OmniSkill} returns this
 */
proto.api.v0alpha.OmniSkill.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string p3_id = 2;
 * @return {string}
 */
proto.api.v0alpha.OmniSkill.prototype.getP3Id = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.OmniSkill} returns this
 */
proto.api.v0alpha.OmniSkill.prototype.setP3Id = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v0alpha.OmniSkill.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.OmniSkill} returns this
 */
proto.api.v0alpha.OmniSkill.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v0alpha.OmniSkill.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.OmniSkill} returns this
 */
proto.api.v0alpha.OmniSkill.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.SkillType.Enum type = 5;
 * @return {!proto.api.commons.SkillType.Enum}
 */
proto.api.v0alpha.OmniSkill.prototype.getType = function() {
  return /** @type {!proto.api.commons.SkillType.Enum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.SkillType.Enum} value
 * @return {!proto.api.v0alpha.OmniSkill} returns this
 */
proto.api.v0alpha.OmniSkill.prototype.setType = function(value) {
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
proto.api.v0alpha.ListWhatsAppNumbersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListWhatsAppNumbersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListWhatsAppNumbersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListWhatsAppNumbersReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListWhatsAppNumbersReq}
 */
proto.api.v0alpha.ListWhatsAppNumbersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListWhatsAppNumbersReq;
  return proto.api.v0alpha.ListWhatsAppNumbersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListWhatsAppNumbersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListWhatsAppNumbersReq}
 */
proto.api.v0alpha.ListWhatsAppNumbersReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListWhatsAppNumbersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListWhatsAppNumbersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListWhatsAppNumbersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListWhatsAppNumbersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListWhatsAppNumbersRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListWhatsAppNumbersRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.toObject = function(includeInstance, msg) {
  var f, obj = {
whatsappNumbersList: jspb.Message.toObjectList(msg.getWhatsappNumbersList(),
    api_commons_omnichannel_pb.WhatsAppNumber.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListWhatsAppNumbersRes}
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListWhatsAppNumbersRes;
  return proto.api.v0alpha.ListWhatsAppNumbersRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListWhatsAppNumbersRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListWhatsAppNumbersRes}
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.WhatsAppNumber;
      reader.readMessage(value,api_commons_omnichannel_pb.WhatsAppNumber.deserializeBinaryFromReader);
      msg.addWhatsappNumbers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListWhatsAppNumbersRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListWhatsAppNumbersRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhatsappNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_omnichannel_pb.WhatsAppNumber.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.WhatsAppNumber whatsapp_numbers = 1;
 * @return {!Array<!proto.api.commons.WhatsAppNumber>}
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.prototype.getWhatsappNumbersList = function() {
  return /** @type{!Array<!proto.api.commons.WhatsAppNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_omnichannel_pb.WhatsAppNumber, 1));
};


/**
 * @param {!Array<!proto.api.commons.WhatsAppNumber>} value
 * @return {!proto.api.v0alpha.ListWhatsAppNumbersRes} returns this
*/
proto.api.v0alpha.ListWhatsAppNumbersRes.prototype.setWhatsappNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.WhatsAppNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.WhatsAppNumber}
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.prototype.addWhatsappNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.WhatsAppNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListWhatsAppNumbersRes} returns this
 */
proto.api.v0alpha.ListWhatsAppNumbersRes.prototype.clearWhatsappNumbersList = function() {
  return this.setWhatsappNumbersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateWhatsAppNumberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateWhatsAppNumberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
whatsappNumber: (f = msg.getWhatsappNumber()) && api_commons_omnichannel_pb.WhatsAppNumber.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateWhatsAppNumberRequest}
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateWhatsAppNumberRequest;
  return proto.api.v0alpha.CreateWhatsAppNumberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateWhatsAppNumberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateWhatsAppNumberRequest}
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.WhatsAppNumber;
      reader.readMessage(value,api_commons_omnichannel_pb.WhatsAppNumber.deserializeBinaryFromReader);
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
proto.api.v0alpha.CreateWhatsAppNumberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateWhatsAppNumberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateWhatsAppNumberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhatsappNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.WhatsAppNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.WhatsAppNumber whatsapp_number = 1;
 * @return {?proto.api.commons.WhatsAppNumber}
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest.prototype.getWhatsappNumber = function() {
  return /** @type{?proto.api.commons.WhatsAppNumber} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.WhatsAppNumber, 1));
};


/**
 * @param {?proto.api.commons.WhatsAppNumber|undefined} value
 * @return {!proto.api.v0alpha.CreateWhatsAppNumberRequest} returns this
*/
proto.api.v0alpha.CreateWhatsAppNumberRequest.prototype.setWhatsappNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateWhatsAppNumberRequest} returns this
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest.prototype.clearWhatsappNumber = function() {
  return this.setWhatsappNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateWhatsAppNumberRequest.prototype.hasWhatsappNumber = function() {
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
proto.api.v0alpha.CreateWhatsAppNumberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateWhatsAppNumberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateWhatsAppNumberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateWhatsAppNumberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
whatsappNumber: (f = msg.getWhatsappNumber()) && api_commons_omnichannel_pb.WhatsAppNumber.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateWhatsAppNumberResponse}
 */
proto.api.v0alpha.CreateWhatsAppNumberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateWhatsAppNumberResponse;
  return proto.api.v0alpha.CreateWhatsAppNumberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateWhatsAppNumberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateWhatsAppNumberResponse}
 */
proto.api.v0alpha.CreateWhatsAppNumberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.WhatsAppNumber;
      reader.readMessage(value,api_commons_omnichannel_pb.WhatsAppNumber.deserializeBinaryFromReader);
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
proto.api.v0alpha.CreateWhatsAppNumberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateWhatsAppNumberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateWhatsAppNumberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateWhatsAppNumberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhatsappNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.WhatsAppNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.WhatsAppNumber whatsapp_number = 1;
 * @return {?proto.api.commons.WhatsAppNumber}
 */
proto.api.v0alpha.CreateWhatsAppNumberResponse.prototype.getWhatsappNumber = function() {
  return /** @type{?proto.api.commons.WhatsAppNumber} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.WhatsAppNumber, 1));
};


/**
 * @param {?proto.api.commons.WhatsAppNumber|undefined} value
 * @return {!proto.api.v0alpha.CreateWhatsAppNumberResponse} returns this
*/
proto.api.v0alpha.CreateWhatsAppNumberResponse.prototype.setWhatsappNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateWhatsAppNumberResponse} returns this
 */
proto.api.v0alpha.CreateWhatsAppNumberResponse.prototype.clearWhatsappNumber = function() {
  return this.setWhatsappNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateWhatsAppNumberResponse.prototype.hasWhatsappNumber = function() {
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
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateWhatsAppNumberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateWhatsAppNumberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
whatsappNumber: (f = msg.getWhatsappNumber()) && api_commons_omnichannel_pb.WhatsAppNumber.toObject(includeInstance, f),
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
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberRequest}
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateWhatsAppNumberRequest;
  return proto.api.v0alpha.UpdateWhatsAppNumberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateWhatsAppNumberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberRequest}
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.WhatsAppNumber;
      reader.readMessage(value,api_commons_omnichannel_pb.WhatsAppNumber.deserializeBinaryFromReader);
      msg.setWhatsappNumber(value);
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
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateWhatsAppNumberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateWhatsAppNumberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhatsappNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.WhatsAppNumber.serializeBinaryToWriter
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
 * optional api.commons.WhatsAppNumber whatsapp_number = 1;
 * @return {?proto.api.commons.WhatsAppNumber}
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.getWhatsappNumber = function() {
  return /** @type{?proto.api.commons.WhatsAppNumber} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.WhatsAppNumber, 1));
};


/**
 * @param {?proto.api.commons.WhatsAppNumber|undefined} value
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberRequest} returns this
*/
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.setWhatsappNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberRequest} returns this
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.clearWhatsappNumber = function() {
  return this.setWhatsappNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.hasWhatsappNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberRequest} returns this
*/
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberRequest} returns this
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateWhatsAppNumberRequest.prototype.hasFieldMask = function() {
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
proto.api.v0alpha.UpdateWhatsAppNumberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateWhatsAppNumberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateWhatsAppNumberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateWhatsAppNumberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
whatsappNumber: (f = msg.getWhatsappNumber()) && api_commons_omnichannel_pb.WhatsAppNumber.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberResponse}
 */
proto.api.v0alpha.UpdateWhatsAppNumberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateWhatsAppNumberResponse;
  return proto.api.v0alpha.UpdateWhatsAppNumberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateWhatsAppNumberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberResponse}
 */
proto.api.v0alpha.UpdateWhatsAppNumberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.WhatsAppNumber;
      reader.readMessage(value,api_commons_omnichannel_pb.WhatsAppNumber.deserializeBinaryFromReader);
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
proto.api.v0alpha.UpdateWhatsAppNumberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateWhatsAppNumberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateWhatsAppNumberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateWhatsAppNumberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWhatsappNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.WhatsAppNumber.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.WhatsAppNumber whatsapp_number = 1;
 * @return {?proto.api.commons.WhatsAppNumber}
 */
proto.api.v0alpha.UpdateWhatsAppNumberResponse.prototype.getWhatsappNumber = function() {
  return /** @type{?proto.api.commons.WhatsAppNumber} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.WhatsAppNumber, 1));
};


/**
 * @param {?proto.api.commons.WhatsAppNumber|undefined} value
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberResponse} returns this
*/
proto.api.v0alpha.UpdateWhatsAppNumberResponse.prototype.setWhatsappNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateWhatsAppNumberResponse} returns this
 */
proto.api.v0alpha.UpdateWhatsAppNumberResponse.prototype.clearWhatsappNumber = function() {
  return this.setWhatsappNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateWhatsAppNumberResponse.prototype.hasWhatsappNumber = function() {
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
proto.api.v0alpha.CreateManualTaskReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateManualTaskReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateManualTaskReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateManualTaskReq.toObject = function(includeInstance, msg) {
  var f, obj = {
campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
campaignModuleSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
taskData: (f = msg.getTaskData()) && api_commons_omnichannel_pb.OmniTask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateManualTaskReq}
 */
proto.api.v0alpha.CreateManualTaskReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateManualTaskReq;
  return proto.api.v0alpha.CreateManualTaskReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateManualTaskReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateManualTaskReq}
 */
proto.api.v0alpha.CreateManualTaskReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignModuleSid(value);
      break;
    case 3:
      var value = new api_commons_omnichannel_pb.OmniTask;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniTask.deserializeBinaryFromReader);
      msg.setTaskData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateManualTaskReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateManualTaskReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateManualTaskReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateManualTaskReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getCampaignModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getTaskData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_omnichannel_pb.OmniTask.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateManualTaskReq.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateManualTaskReq} returns this
 */
proto.api.v0alpha.CreateManualTaskReq.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_module_sid = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateManualTaskReq.prototype.getCampaignModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateManualTaskReq} returns this
 */
proto.api.v0alpha.CreateManualTaskReq.prototype.setCampaignModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.OmniTask task_data = 3;
 * @return {?proto.api.commons.OmniTask}
 */
proto.api.v0alpha.CreateManualTaskReq.prototype.getTaskData = function() {
  return /** @type{?proto.api.commons.OmniTask} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniTask, 3));
};


/**
 * @param {?proto.api.commons.OmniTask|undefined} value
 * @return {!proto.api.v0alpha.CreateManualTaskReq} returns this
*/
proto.api.v0alpha.CreateManualTaskReq.prototype.setTaskData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateManualTaskReq} returns this
 */
proto.api.v0alpha.CreateManualTaskReq.prototype.clearTaskData = function() {
  return this.setTaskData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateManualTaskReq.prototype.hasTaskData = function() {
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
proto.api.v0alpha.CreateManualTaskRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateManualTaskRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateManualTaskRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateManualTaskRes.toObject = function(includeInstance, msg) {
  var f, obj = {
referenceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateManualTaskRes}
 */
proto.api.v0alpha.CreateManualTaskRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateManualTaskRes;
  return proto.api.v0alpha.CreateManualTaskRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateManualTaskRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateManualTaskRes}
 */
proto.api.v0alpha.CreateManualTaskRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.api.v0alpha.CreateManualTaskRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateManualTaskRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateManualTaskRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateManualTaskRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateManualTaskRes.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateManualTaskRes} returns this
 */
proto.api.v0alpha.CreateManualTaskRes.prototype.setReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.api.v0alpha);
