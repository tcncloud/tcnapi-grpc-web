// source: api/v0alpha/smsapi.proto
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
var proto = {};

var annotations_authz_pb = require('../../annotations/authz_pb.js');
goog.object.extend(proto, annotations_authz_pb);
var api_commons_sms_pb = require('../../api/commons/sms_pb.js');
goog.object.extend(proto, api_commons_sms_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('api.v0alpha.CreateInboundSmsGroupReq', null, proto);
goog.exportSymbol('api.v0alpha.CreateInboundSmsGroupRes', null, proto);
goog.exportSymbol('api.v0alpha.CreateInboundSmsTemplateReq', null, proto);
goog.exportSymbol('api.v0alpha.CreateInboundSmsTemplateRes', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsConversationAssignedAgentRes', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsConversationAuditRes', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsConversationReq', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsConversationRes', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsIntentTemplateRes', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsSourceNumberReq', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsSourceNumberRes', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsTemplateReq', null, proto);
goog.exportSymbol('api.v0alpha.CreateSmsTemplateRes', null, proto);
goog.exportSymbol('api.v0alpha.DeleteInboundSmsGroupReq', null, proto);
goog.exportSymbol('api.v0alpha.DeleteInboundSmsGroupRes', null, proto);
goog.exportSymbol('api.v0alpha.DeleteInboundSmsTemplateReq', null, proto);
goog.exportSymbol('api.v0alpha.DeleteInboundSmsTemplateRes', null, proto);
goog.exportSymbol('api.v0alpha.DeleteSmsConversationReq', null, proto);
goog.exportSymbol('api.v0alpha.DeleteSmsConversationRes', null, proto);
goog.exportSymbol('api.v0alpha.DeleteSmsIntentTemplateReq', null, proto);
goog.exportSymbol('api.v0alpha.DeleteSmsIntentTemplateRes', null, proto);
goog.exportSymbol('api.v0alpha.DeleteSmsSourceNumberReq', null, proto);
goog.exportSymbol('api.v0alpha.DeleteSmsSourceNumberRes', null, proto);
goog.exportSymbol('api.v0alpha.DeleteSmsTemplateReq', null, proto);
goog.exportSymbol('api.v0alpha.DeleteSmsTemplateRes', null, proto);
goog.exportSymbol('api.v0alpha.EmailSettings', null, proto);
goog.exportSymbol('api.v0alpha.FtpSettings', null, proto);
goog.exportSymbol('api.v0alpha.GetInboundSmsGroupByIdReq', null, proto);
goog.exportSymbol('api.v0alpha.GetInboundSmsGroupByIdRes', null, proto);
goog.exportSymbol('api.v0alpha.GetInboundSmsTemplateByIdReq', null, proto);
goog.exportSymbol('api.v0alpha.GetInboundSmsTemplateByIdRes', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsConversationAssignedAgentByIdReq', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsConversationAssignedAgentByIdRes', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsConversationAuditByIdReq', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsConversationAuditByIdRes', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsConversationByIdReq', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsConversationByIdRes', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsIntentTemplateBySidReq', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsMessageReq', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsMessageRes', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsSourceNumberBySidReq', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsTemplateBySidReq', null, proto);
goog.exportSymbol('api.v0alpha.GetSmsTemplateBySidRes', null, proto);
goog.exportSymbol('api.v0alpha.InboundSmsGroup', null, proto);
goog.exportSymbol('api.v0alpha.InboundSmsGroupWithIntents', null, proto);
goog.exportSymbol('api.v0alpha.InboundSmsTask', null, proto);
goog.exportSymbol('api.v0alpha.InboundSmsTemplate', null, proto);
goog.exportSymbol('api.v0alpha.InboundSmsTemplateWithIntents', null, proto);
goog.exportSymbol('api.v0alpha.ListActiveInboundSmsGroupsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListActiveInboundSmsGroupsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsGroupByFiltersReq', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsGroupByFiltersRes', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsGroupsByGroupIdsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsGroupsByGroupIdsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsGroupsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsGroupsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsTasksByGroupIdsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsTasksByGroupIdsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsTemplatesReq', null, proto);
goog.exportSymbol('api.v0alpha.ListInboundSmsTemplatesRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsConversationAssignedAgentsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsConversationAssignedAgentsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsConversationAuditsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsConversationAuditsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsConversationsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsConversationsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsGroupByFiltersReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsGroupByFiltersRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsGroupsByGroupSidsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsGroupsByGroupSidsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsIntentTemplatesReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsIntentTemplatesRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsSourceNumbersReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsSourceNumbersRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsTasksByGroupSidsReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsTasksByGroupSidsRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsTasksWithDetailedStatusReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsTasksWithDetailedStatusRes', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsTemplatesReq', null, proto);
goog.exportSymbol('api.v0alpha.ListSmsTemplatesRes', null, proto);
goog.exportSymbol('api.v0alpha.MamAgentResponse', null, proto);
goog.exportSymbol('api.v0alpha.ReportSettings', null, proto);
goog.exportSymbol('api.v0alpha.ResendUnconnectedSmsReq', null, proto);
goog.exportSymbol('api.v0alpha.ResendUnconnectedSmsRes', null, proto);
goog.exportSymbol('api.v0alpha.ScheduleInboundSmsReq', null, proto);
goog.exportSymbol('api.v0alpha.ScheduleInboundSmsRes', null, proto);
goog.exportSymbol('api.v0alpha.ScheduleSmsReq', null, proto);
goog.exportSymbol('api.v0alpha.ScheduleSmsRes', null, proto);
goog.exportSymbol('api.v0alpha.SendSmsNotificationReq', null, proto);
goog.exportSymbol('api.v0alpha.SendSmsNotificationRes', null, proto);
goog.exportSymbol('api.v0alpha.SftpSettings', null, proto);
goog.exportSymbol('api.v0alpha.SmsActivitySearchReq', null, proto);
goog.exportSymbol('api.v0alpha.SmsActivitySearchRes', null, proto);
goog.exportSymbol('api.v0alpha.SmsConversation', null, proto);
goog.exportSymbol('api.v0alpha.SmsConversationAssignedAgent', null, proto);
goog.exportSymbol('api.v0alpha.SmsConversationAudit', null, proto);
goog.exportSymbol('api.v0alpha.SmsGroupInfo', null, proto);
goog.exportSymbol('api.v0alpha.SmsGroupWithIntents', null, proto);
goog.exportSymbol('api.v0alpha.SmsIntentGroup', null, proto);
goog.exportSymbol('api.v0alpha.SmsIntentTemplate', null, proto);
goog.exportSymbol('api.v0alpha.SmsMamSettings', null, proto);
goog.exportSymbol('api.v0alpha.SmsMessage', null, proto);
goog.exportSymbol('api.v0alpha.SmsNumbers', null, proto);
goog.exportSymbol('api.v0alpha.SmsReceivedReplies', null, proto);
goog.exportSymbol('api.v0alpha.SmsSettings', null, proto);
goog.exportSymbol('api.v0alpha.SmsTaskInfoRes', null, proto);
goog.exportSymbol('api.v0alpha.SmsTaskInfoWithReply', null, proto);
goog.exportSymbol('api.v0alpha.SmsTemplate', null, proto);
goog.exportSymbol('api.v0alpha.SmsTemplateWithIntents', null, proto);
goog.exportSymbol('api.v0alpha.StopAllInboundSmsGroupsReq', null, proto);
goog.exportSymbol('api.v0alpha.StopAllInboundSmsGroupsRes', null, proto);
goog.exportSymbol('api.v0alpha.StopAllOutboundSmsGroupsReq', null, proto);
goog.exportSymbol('api.v0alpha.StopAllOutboundSmsGroupsRes', null, proto);
goog.exportSymbol('api.v0alpha.StopInboundSmsGroupReq', null, proto);
goog.exportSymbol('api.v0alpha.StopInboundSmsGroupRes', null, proto);
goog.exportSymbol('api.v0alpha.UpdateInboundSmsGroupReq', null, proto);
goog.exportSymbol('api.v0alpha.UpdateInboundSmsGroupRes', null, proto);
goog.exportSymbol('api.v0alpha.UpdateInboundSmsTemplateReq', null, proto);
goog.exportSymbol('api.v0alpha.UpdateInboundSmsTemplateRes', null, proto);
goog.exportSymbol('api.v0alpha.UpdateSmsConversationReq', null, proto);
goog.exportSymbol('api.v0alpha.UpdateSmsConversationRes', null, proto);
goog.exportSymbol('api.v0alpha.UpdateSmsGroupRes', null, proto);
goog.exportSymbol('api.v0alpha.UpdateSmsIntentTemplateRes', null, proto);
goog.exportSymbol('api.v0alpha.UpdateSmsSourceNumberReq', null, proto);
goog.exportSymbol('api.v0alpha.UpdateSmsSourceNumberRes', null, proto);
goog.exportSymbol('api.v0alpha.UpdateSmsTemplateReq', null, proto);
goog.exportSymbol('api.v0alpha.UpdateSmsTemplateRes', null, proto);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsTemplatesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSmsTemplatesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsTemplatesReq.displayName = 'proto.api.v0alpha.ListSmsTemplatesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsTemplatesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsTemplatesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsTemplatesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsTemplatesRes.displayName = 'proto.api.v0alpha.ListSmsTemplatesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsTemplateWithIntents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SmsTemplateWithIntents.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SmsTemplateWithIntents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsTemplateWithIntents.displayName = 'proto.api.v0alpha.SmsTemplateWithIntents';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsTemplate.displayName = 'proto.api.v0alpha.SmsTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsTemplateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CreateSmsTemplateReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsTemplateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsTemplateReq.displayName = 'proto.api.v0alpha.CreateSmsTemplateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsTemplateRes.displayName = 'proto.api.v0alpha.CreateSmsTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSmsTemplateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.UpdateSmsTemplateReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.UpdateSmsTemplateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSmsTemplateReq.displayName = 'proto.api.v0alpha.UpdateSmsTemplateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSmsTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSmsTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSmsTemplateRes.displayName = 'proto.api.v0alpha.UpdateSmsTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSmsTemplateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSmsTemplateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSmsTemplateReq.displayName = 'proto.api.v0alpha.DeleteSmsTemplateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSmsTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSmsTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSmsTemplateRes.displayName = 'proto.api.v0alpha.DeleteSmsTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsTemplateBySidReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsTemplateBySidReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsTemplateBySidReq.displayName = 'proto.api.v0alpha.GetSmsTemplateBySidReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsTemplateBySidRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.GetSmsTemplateBySidRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.GetSmsTemplateBySidRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsTemplateBySidRes.displayName = 'proto.api.v0alpha.GetSmsTemplateBySidRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsIntentTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsIntentTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsIntentTemplate.displayName = 'proto.api.v0alpha.SmsIntentTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsIntentTemplatesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSmsIntentTemplatesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsIntentTemplatesReq.displayName = 'proto.api.v0alpha.ListSmsIntentTemplatesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsIntentTemplatesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsIntentTemplatesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsIntentTemplatesRes.displayName = 'proto.api.v0alpha.ListSmsIntentTemplatesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSmsIntentTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSmsIntentTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSmsIntentTemplateRes.displayName = 'proto.api.v0alpha.UpdateSmsIntentTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSmsIntentTemplateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSmsIntentTemplateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSmsIntentTemplateReq.displayName = 'proto.api.v0alpha.DeleteSmsIntentTemplateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSmsIntentTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSmsIntentTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSmsIntentTemplateRes.displayName = 'proto.api.v0alpha.DeleteSmsIntentTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsIntentTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsIntentTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsIntentTemplateRes.displayName = 'proto.api.v0alpha.CreateSmsIntentTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsIntentTemplateBySidReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsIntentTemplateBySidReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsIntentTemplateBySidReq.displayName = 'proto.api.v0alpha.GetSmsIntentTemplateBySidReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsNumbers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsNumbers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsNumbers.displayName = 'proto.api.v0alpha.SmsNumbers';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsSourceNumbersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSmsSourceNumbersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsSourceNumbersReq.displayName = 'proto.api.v0alpha.ListSmsSourceNumbersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsSourceNumbersRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsSourceNumbersRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsSourceNumbersRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsSourceNumbersRes.displayName = 'proto.api.v0alpha.ListSmsSourceNumbersRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSmsSourceNumberReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSmsSourceNumberReq.displayName = 'proto.api.v0alpha.UpdateSmsSourceNumberReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSmsSourceNumberRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSmsSourceNumberRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSmsSourceNumberRes.displayName = 'proto.api.v0alpha.UpdateSmsSourceNumberRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSmsSourceNumberReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSmsSourceNumberReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSmsSourceNumberReq.displayName = 'proto.api.v0alpha.DeleteSmsSourceNumberReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSmsSourceNumberRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSmsSourceNumberRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSmsSourceNumberRes.displayName = 'proto.api.v0alpha.DeleteSmsSourceNumberRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsSourceNumberReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsSourceNumberReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsSourceNumberReq.displayName = 'proto.api.v0alpha.CreateSmsSourceNumberReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsSourceNumberRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsSourceNumberRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsSourceNumberRes.displayName = 'proto.api.v0alpha.CreateSmsSourceNumberRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsSourceNumberBySidReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsSourceNumberBySidReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsSourceNumberBySidReq.displayName = 'proto.api.v0alpha.GetSmsSourceNumberBySidReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendSmsNotificationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SendSmsNotificationReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SendSmsNotificationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendSmsNotificationReq.displayName = 'proto.api.v0alpha.SendSmsNotificationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SendSmsNotificationRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SendSmsNotificationRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SendSmsNotificationRes.displayName = 'proto.api.v0alpha.SendSmsNotificationRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSmsGroupByFiltersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsGroupByFiltersReq.displayName = 'proto.api.v0alpha.ListSmsGroupByFiltersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsGroupWithIntents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SmsGroupWithIntents.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SmsGroupWithIntents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsGroupWithIntents.displayName = 'proto.api.v0alpha.SmsGroupWithIntents';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsGroupByFiltersRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsGroupByFiltersRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsGroupByFiltersRes.displayName = 'proto.api.v0alpha.ListSmsGroupByFiltersRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsGroupsByGroupSidsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.displayName = 'proto.api.v0alpha.ListSmsGroupsByGroupSidsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsGroupsByGroupSidsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.displayName = 'proto.api.v0alpha.ListSmsGroupsByGroupSidsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsGroupInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SmsGroupInfo.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SmsGroupInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsGroupInfo.displayName = 'proto.api.v0alpha.SmsGroupInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsTasksByGroupSidsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsTasksByGroupSidsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsTasksByGroupSidsReq.displayName = 'proto.api.v0alpha.ListSmsTasksByGroupSidsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsTasksByGroupSidsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsTasksByGroupSidsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsTasksByGroupSidsRes.displayName = 'proto.api.v0alpha.ListSmsTasksByGroupSidsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.displayName = 'proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.displayName = 'proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsTaskInfoWithReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SmsTaskInfoWithReply.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SmsTaskInfoWithReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsTaskInfoWithReply.displayName = 'proto.api.v0alpha.SmsTaskInfoWithReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsTaskInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsTaskInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsTaskInfoRes.displayName = 'proto.api.v0alpha.SmsTaskInfoRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsReceivedReplies = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsReceivedReplies, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsReceivedReplies.displayName = 'proto.api.v0alpha.SmsReceivedReplies';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSmsGroupRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSmsGroupRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSmsGroupRes.displayName = 'proto.api.v0alpha.UpdateSmsGroupRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScheduleSmsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ScheduleSmsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScheduleSmsReq.displayName = 'proto.api.v0alpha.ScheduleSmsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScheduleSmsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ScheduleSmsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScheduleSmsRes.displayName = 'proto.api.v0alpha.ScheduleSmsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ResendUnconnectedSmsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ResendUnconnectedSmsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ResendUnconnectedSmsReq.displayName = 'proto.api.v0alpha.ResendUnconnectedSmsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ResendUnconnectedSmsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ResendUnconnectedSmsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ResendUnconnectedSmsRes.displayName = 'proto.api.v0alpha.ResendUnconnectedSmsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsActivitySearchReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsActivitySearchReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsActivitySearchReq.displayName = 'proto.api.v0alpha.SmsActivitySearchReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsActivitySearchRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SmsActivitySearchRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SmsActivitySearchRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsActivitySearchRes.displayName = 'proto.api.v0alpha.SmsActivitySearchRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.InboundSmsTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.InboundSmsTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.InboundSmsTemplate.displayName = 'proto.api.v0alpha.InboundSmsTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsTemplatesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsTemplatesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsTemplatesReq.displayName = 'proto.api.v0alpha.ListInboundSmsTemplatesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListInboundSmsTemplatesRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsTemplatesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsTemplatesRes.displayName = 'proto.api.v0alpha.ListInboundSmsTemplatesRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.InboundSmsTemplateWithIntents.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.InboundSmsTemplateWithIntents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.InboundSmsTemplateWithIntents.displayName = 'proto.api.v0alpha.InboundSmsTemplateWithIntents';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.UpdateInboundSmsTemplateReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.UpdateInboundSmsTemplateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateInboundSmsTemplateReq.displayName = 'proto.api.v0alpha.UpdateInboundSmsTemplateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateInboundSmsTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateInboundSmsTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateInboundSmsTemplateRes.displayName = 'proto.api.v0alpha.UpdateInboundSmsTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteInboundSmsTemplateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteInboundSmsTemplateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteInboundSmsTemplateReq.displayName = 'proto.api.v0alpha.DeleteInboundSmsTemplateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteInboundSmsTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteInboundSmsTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteInboundSmsTemplateRes.displayName = 'proto.api.v0alpha.DeleteInboundSmsTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.CreateInboundSmsTemplateReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.CreateInboundSmsTemplateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateInboundSmsTemplateReq.displayName = 'proto.api.v0alpha.CreateInboundSmsTemplateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateInboundSmsTemplateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateInboundSmsTemplateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateInboundSmsTemplateRes.displayName = 'proto.api.v0alpha.CreateInboundSmsTemplateRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetInboundSmsTemplateByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetInboundSmsTemplateByIdReq.displayName = 'proto.api.v0alpha.GetInboundSmsTemplateByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.GetInboundSmsTemplateByIdRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.GetInboundSmsTemplateByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetInboundSmsTemplateByIdRes.displayName = 'proto.api.v0alpha.GetInboundSmsTemplateByIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.InboundSmsGroupWithIntents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.InboundSmsGroupWithIntents.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.InboundSmsGroupWithIntents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.InboundSmsGroupWithIntents.displayName = 'proto.api.v0alpha.InboundSmsGroupWithIntents';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.InboundSmsGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.InboundSmsGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.InboundSmsGroup.displayName = 'proto.api.v0alpha.InboundSmsGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsGroupsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsGroupsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsGroupsReq.displayName = 'proto.api.v0alpha.ListInboundSmsGroupsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsGroupsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListInboundSmsGroupsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsGroupsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsGroupsRes.displayName = 'proto.api.v0alpha.ListInboundSmsGroupsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateInboundSmsGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateInboundSmsGroupReq.displayName = 'proto.api.v0alpha.UpdateInboundSmsGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateInboundSmsGroupRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateInboundSmsGroupRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateInboundSmsGroupRes.displayName = 'proto.api.v0alpha.UpdateInboundSmsGroupRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteInboundSmsGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteInboundSmsGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteInboundSmsGroupReq.displayName = 'proto.api.v0alpha.DeleteInboundSmsGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteInboundSmsGroupRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteInboundSmsGroupRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteInboundSmsGroupRes.displayName = 'proto.api.v0alpha.DeleteInboundSmsGroupRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateInboundSmsGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateInboundSmsGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateInboundSmsGroupReq.displayName = 'proto.api.v0alpha.CreateInboundSmsGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateInboundSmsGroupRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateInboundSmsGroupRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateInboundSmsGroupRes.displayName = 'proto.api.v0alpha.CreateInboundSmsGroupRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetInboundSmsGroupByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetInboundSmsGroupByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetInboundSmsGroupByIdReq.displayName = 'proto.api.v0alpha.GetInboundSmsGroupByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetInboundSmsGroupByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetInboundSmsGroupByIdRes.displayName = 'proto.api.v0alpha.GetInboundSmsGroupByIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListActiveInboundSmsGroupsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListActiveInboundSmsGroupsReq.displayName = 'proto.api.v0alpha.ListActiveInboundSmsGroupsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListActiveInboundSmsGroupsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListActiveInboundSmsGroupsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListActiveInboundSmsGroupsRes.displayName = 'proto.api.v0alpha.ListActiveInboundSmsGroupsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsGroupByFiltersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.displayName = 'proto.api.v0alpha.ListInboundSmsGroupByFiltersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsGroupByFiltersRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.displayName = 'proto.api.v0alpha.ListInboundSmsGroupByFiltersRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.displayName = 'proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.displayName = 'proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScheduleInboundSmsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ScheduleInboundSmsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScheduleInboundSmsReq.displayName = 'proto.api.v0alpha.ScheduleInboundSmsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ScheduleInboundSmsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ScheduleInboundSmsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ScheduleInboundSmsRes.displayName = 'proto.api.v0alpha.ScheduleInboundSmsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StopInboundSmsGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StopInboundSmsGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StopInboundSmsGroupReq.displayName = 'proto.api.v0alpha.StopInboundSmsGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StopInboundSmsGroupRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StopInboundSmsGroupRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StopInboundSmsGroupRes.displayName = 'proto.api.v0alpha.StopInboundSmsGroupRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsConversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsConversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsConversation.displayName = 'proto.api.v0alpha.SmsConversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsConversationsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSmsConversationsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsConversationsReq.displayName = 'proto.api.v0alpha.ListSmsConversationsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsConversationsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsConversationsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsConversationsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsConversationsRes.displayName = 'proto.api.v0alpha.ListSmsConversationsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSmsConversationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSmsConversationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSmsConversationReq.displayName = 'proto.api.v0alpha.UpdateSmsConversationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.UpdateSmsConversationRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.UpdateSmsConversationRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.UpdateSmsConversationRes.displayName = 'proto.api.v0alpha.UpdateSmsConversationRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSmsConversationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSmsConversationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSmsConversationReq.displayName = 'proto.api.v0alpha.DeleteSmsConversationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.DeleteSmsConversationRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.DeleteSmsConversationRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.DeleteSmsConversationRes.displayName = 'proto.api.v0alpha.DeleteSmsConversationRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsConversationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsConversationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsConversationReq.displayName = 'proto.api.v0alpha.CreateSmsConversationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsConversationRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsConversationRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsConversationRes.displayName = 'proto.api.v0alpha.CreateSmsConversationRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsConversationByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsConversationByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsConversationByIdReq.displayName = 'proto.api.v0alpha.GetSmsConversationByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsConversationByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsConversationByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsConversationByIdRes.displayName = 'proto.api.v0alpha.GetSmsConversationByIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsConversationAuditsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSmsConversationAuditsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsConversationAuditsReq.displayName = 'proto.api.v0alpha.ListSmsConversationAuditsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsConversationAuditsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsConversationAuditsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsConversationAuditsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsConversationAuditsRes.displayName = 'proto.api.v0alpha.ListSmsConversationAuditsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsConversationAuditRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsConversationAuditRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsConversationAuditRes.displayName = 'proto.api.v0alpha.CreateSmsConversationAuditRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsConversationAuditByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsConversationAuditByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsConversationAuditByIdReq.displayName = 'proto.api.v0alpha.GetSmsConversationAuditByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsConversationAuditByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsConversationAuditByIdRes.displayName = 'proto.api.v0alpha.GetSmsConversationAuditByIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ListSmsConversationAssignedAgentsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.displayName = 'proto.api.v0alpha.ListSmsConversationAssignedAgentsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListSmsConversationAssignedAgentsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.displayName = 'proto.api.v0alpha.ListSmsConversationAssignedAgentsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.CreateSmsConversationAssignedAgentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.displayName = 'proto.api.v0alpha.CreateSmsConversationAssignedAgentRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.displayName = 'proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.displayName = 'proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsConversationAudit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsConversationAudit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsConversationAudit.displayName = 'proto.api.v0alpha.SmsConversationAudit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsConversationAssignedAgent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsConversationAssignedAgent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsConversationAssignedAgent.displayName = 'proto.api.v0alpha.SmsConversationAssignedAgent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsMessageReq.displayName = 'proto.api.v0alpha.GetSmsMessageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.GetSmsMessageRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.GetSmsMessageRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.GetSmsMessageRes.displayName = 'proto.api.v0alpha.GetSmsMessageRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsMessage.displayName = 'proto.api.v0alpha.SmsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsIntentGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsIntentGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsIntentGroup.displayName = 'proto.api.v0alpha.SmsIntentGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.InboundSmsTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.InboundSmsTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.InboundSmsTask.displayName = 'proto.api.v0alpha.InboundSmsTask';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.displayName = 'proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.displayName = 'proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.ReportSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.ReportSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.ReportSettings.displayName = 'proto.api.v0alpha.ReportSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.SmsSettings.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.SmsSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsSettings.displayName = 'proto.api.v0alpha.SmsSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.EmailSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.EmailSettings.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.EmailSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.EmailSettings.displayName = 'proto.api.v0alpha.EmailSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.FtpSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.FtpSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.FtpSettings.displayName = 'proto.api.v0alpha.FtpSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SftpSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SftpSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SftpSettings.displayName = 'proto.api.v0alpha.SftpSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.SmsMamSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.SmsMamSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.SmsMamSettings.displayName = 'proto.api.v0alpha.SmsMamSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.MamAgentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.MamAgentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.MamAgentResponse.displayName = 'proto.api.v0alpha.MamAgentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.StopAllOutboundSmsGroupsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.StopAllOutboundSmsGroupsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StopAllOutboundSmsGroupsReq.displayName = 'proto.api.v0alpha.StopAllOutboundSmsGroupsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StopAllOutboundSmsGroupsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StopAllOutboundSmsGroupsRes.displayName = 'proto.api.v0alpha.StopAllOutboundSmsGroupsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v0alpha.StopAllInboundSmsGroupsReq.repeatedFields_, null);
};
goog.inherits(proto.api.v0alpha.StopAllInboundSmsGroupsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StopAllInboundSmsGroupsReq.displayName = 'proto.api.v0alpha.StopAllInboundSmsGroupsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v0alpha.StopAllInboundSmsGroupsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v0alpha.StopAllInboundSmsGroupsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v0alpha.StopAllInboundSmsGroupsRes.displayName = 'proto.api.v0alpha.StopAllInboundSmsGroupsRes';
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
proto.api.v0alpha.ListSmsTemplatesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsTemplatesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsTemplatesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTemplatesReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListSmsTemplatesReq}
 */
proto.api.v0alpha.ListSmsTemplatesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsTemplatesReq;
  return proto.api.v0alpha.ListSmsTemplatesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsTemplatesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsTemplatesReq}
 */
proto.api.v0alpha.ListSmsTemplatesReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListSmsTemplatesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsTemplatesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsTemplatesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTemplatesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsTemplatesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsTemplatesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsTemplatesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsTemplatesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTemplatesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplateWithIntentsList: jspb.Message.toObjectList(msg.getSmsTemplateWithIntentsList(),
    proto.api.v0alpha.SmsTemplateWithIntents.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsTemplatesRes}
 */
proto.api.v0alpha.ListSmsTemplatesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsTemplatesRes;
  return proto.api.v0alpha.ListSmsTemplatesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsTemplatesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsTemplatesRes}
 */
proto.api.v0alpha.ListSmsTemplatesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsTemplateWithIntents;
      reader.readMessage(value,proto.api.v0alpha.SmsTemplateWithIntents.deserializeBinaryFromReader);
      msg.addSmsTemplateWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsTemplatesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsTemplatesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsTemplatesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTemplatesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplateWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsTemplateWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsTemplateWithIntents sms_template_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.SmsTemplateWithIntents>}
 */
proto.api.v0alpha.ListSmsTemplatesRes.prototype.getSmsTemplateWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsTemplateWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsTemplateWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsTemplateWithIntents>} value
 * @return {!proto.api.v0alpha.ListSmsTemplatesRes} returns this
*/
proto.api.v0alpha.ListSmsTemplatesRes.prototype.setSmsTemplateWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsTemplateWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsTemplateWithIntents}
 */
proto.api.v0alpha.ListSmsTemplatesRes.prototype.addSmsTemplateWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsTemplateWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsTemplatesRes} returns this
 */
proto.api.v0alpha.ListSmsTemplatesRes.prototype.clearSmsTemplateWithIntentsList = function() {
  return this.setSmsTemplateWithIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SmsTemplateWithIntents.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsTemplateWithIntents.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsTemplateWithIntents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsTemplateWithIntents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsTemplateWithIntents.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplate: (f = msg.getSmsTemplate()) && proto.api.v0alpha.SmsTemplate.toObject(includeInstance, f),
smsIntentTemplatesList: jspb.Message.toObjectList(msg.getSmsIntentTemplatesList(),
    proto.api.v0alpha.SmsIntentTemplate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsTemplateWithIntents}
 */
proto.api.v0alpha.SmsTemplateWithIntents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsTemplateWithIntents;
  return proto.api.v0alpha.SmsTemplateWithIntents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsTemplateWithIntents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsTemplateWithIntents}
 */
proto.api.v0alpha.SmsTemplateWithIntents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsTemplate;
      reader.readMessage(value,proto.api.v0alpha.SmsTemplate.deserializeBinaryFromReader);
      msg.setSmsTemplate(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.SmsIntentTemplate;
      reader.readMessage(value,proto.api.v0alpha.SmsIntentTemplate.deserializeBinaryFromReader);
      msg.addSmsIntentTemplates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsTemplateWithIntents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsTemplateWithIntents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsTemplateWithIntents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsTemplateWithIntents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.SmsTemplate.serializeBinaryToWriter
    );
  }
  f = message.getSmsIntentTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.SmsIntentTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional SmsTemplate sms_template = 1;
 * @return {?proto.api.v0alpha.SmsTemplate}
 */
proto.api.v0alpha.SmsTemplateWithIntents.prototype.getSmsTemplate = function() {
  return /** @type{?proto.api.v0alpha.SmsTemplate} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsTemplate, 1));
};


/**
 * @param {?proto.api.v0alpha.SmsTemplate|undefined} value
 * @return {!proto.api.v0alpha.SmsTemplateWithIntents} returns this
*/
proto.api.v0alpha.SmsTemplateWithIntents.prototype.setSmsTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsTemplateWithIntents} returns this
 */
proto.api.v0alpha.SmsTemplateWithIntents.prototype.clearSmsTemplate = function() {
  return this.setSmsTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsTemplateWithIntents.prototype.hasSmsTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SmsIntentTemplate sms_intent_templates = 2;
 * @return {!Array<!proto.api.v0alpha.SmsIntentTemplate>}
 */
proto.api.v0alpha.SmsTemplateWithIntents.prototype.getSmsIntentTemplatesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsIntentTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsIntentTemplate, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsIntentTemplate>} value
 * @return {!proto.api.v0alpha.SmsTemplateWithIntents} returns this
*/
proto.api.v0alpha.SmsTemplateWithIntents.prototype.setSmsIntentTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.SmsIntentTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsIntentTemplate}
 */
proto.api.v0alpha.SmsTemplateWithIntents.prototype.addSmsIntentTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.SmsIntentTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SmsTemplateWithIntents} returns this
 */
proto.api.v0alpha.SmsTemplateWithIntents.prototype.clearSmsIntentTemplatesList = function() {
  return this.setSmsIntentTemplatesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
message: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.api.v0alpha.SmsTemplate}
 */
proto.api.v0alpha.SmsTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsTemplate;
  return proto.api.v0alpha.SmsTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsTemplate}
 */
proto.api.v0alpha.SmsTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTemplateSid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.api.v0alpha.SmsTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
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
 * optional int64 sms_template_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.SmsTemplate.prototype.getSmsTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsTemplate} returns this
 */
proto.api.v0alpha.SmsTemplate.prototype.setSmsTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.api.v0alpha.SmsTemplate.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsTemplate} returns this
 */
proto.api.v0alpha.SmsTemplate.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp last_updated = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsTemplate.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsTemplate} returns this
*/
proto.api.v0alpha.SmsTemplate.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsTemplate} returns this
 */
proto.api.v0alpha.SmsTemplate.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsTemplate.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CreateSmsTemplateReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateSmsTemplateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsTemplateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsTemplateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsTemplateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 1, ""),
smsIntentTemplateSidList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSmsTemplateReq}
 */
proto.api.v0alpha.CreateSmsTemplateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsTemplateReq;
  return proto.api.v0alpha.CreateSmsTemplateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsTemplateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsTemplateReq}
 */
proto.api.v0alpha.CreateSmsTemplateReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSmsIntentTemplateSid(values[i]);
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
proto.api.v0alpha.CreateSmsTemplateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsTemplateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsTemplateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsTemplateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmsIntentTemplateSidList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsTemplateReq.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateSmsTemplateReq.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated int64 sms_intent_template_sid = 2;
 * @return {!Array<number>}
 */
proto.api.v0alpha.CreateSmsTemplateReq.prototype.getSmsIntentTemplateSidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v0alpha.CreateSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateSmsTemplateReq.prototype.setSmsIntentTemplateSidList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CreateSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateSmsTemplateReq.prototype.addSmsIntentTemplateSid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateSmsTemplateReq.prototype.clearSmsIntentTemplateSidList = function() {
  return this.setSmsIntentTemplateSidList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateSmsTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsTemplateRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSmsTemplateRes}
 */
proto.api.v0alpha.CreateSmsTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsTemplateRes;
  return proto.api.v0alpha.CreateSmsTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsTemplateRes}
 */
proto.api.v0alpha.CreateSmsTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTemplateSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateSmsTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsTemplateRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sms_template_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.CreateSmsTemplateRes.prototype.getSmsTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateSmsTemplateRes} returns this
 */
proto.api.v0alpha.CreateSmsTemplateRes.prototype.setSmsTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.UpdateSmsTemplateReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSmsTemplateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSmsTemplateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsTemplateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
smsIntentTemplateSidList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateSmsTemplateReq}
 */
proto.api.v0alpha.UpdateSmsTemplateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSmsTemplateReq;
  return proto.api.v0alpha.UpdateSmsTemplateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSmsTemplateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSmsTemplateReq}
 */
proto.api.v0alpha.UpdateSmsTemplateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTemplateSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSmsIntentTemplateSid(values[i]);
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
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSmsTemplateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSmsTemplateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsTemplateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSmsIntentTemplateSidList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 sms_template_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.getSmsTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.setSmsTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 sms_intent_template_sid = 3;
 * @return {!Array<number>}
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.getSmsIntentTemplateSidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v0alpha.UpdateSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.setSmsIntentTemplateSidList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.UpdateSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.addSmsIntentTemplateSid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.UpdateSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateSmsTemplateReq.prototype.clearSmsIntentTemplateSidList = function() {
  return this.setSmsIntentTemplateSidList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateSmsTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSmsTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSmsTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsTemplateRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateSmsTemplateRes}
 */
proto.api.v0alpha.UpdateSmsTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSmsTemplateRes;
  return proto.api.v0alpha.UpdateSmsTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSmsTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSmsTemplateRes}
 */
proto.api.v0alpha.UpdateSmsTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateSmsTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSmsTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSmsTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsTemplateRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateSmsTemplateRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateSmsTemplateRes} returns this
 */
proto.api.v0alpha.UpdateSmsTemplateRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.DeleteSmsTemplateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSmsTemplateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSmsTemplateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsTemplateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteSmsTemplateReq}
 */
proto.api.v0alpha.DeleteSmsTemplateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSmsTemplateReq;
  return proto.api.v0alpha.DeleteSmsTemplateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSmsTemplateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSmsTemplateReq}
 */
proto.api.v0alpha.DeleteSmsTemplateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTemplateSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteSmsTemplateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSmsTemplateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSmsTemplateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsTemplateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sms_template_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.DeleteSmsTemplateReq.prototype.getSmsTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DeleteSmsTemplateReq} returns this
 */
proto.api.v0alpha.DeleteSmsTemplateReq.prototype.setSmsTemplateSid = function(value) {
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
proto.api.v0alpha.DeleteSmsTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSmsTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSmsTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsTemplateRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteSmsTemplateRes}
 */
proto.api.v0alpha.DeleteSmsTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSmsTemplateRes;
  return proto.api.v0alpha.DeleteSmsTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSmsTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSmsTemplateRes}
 */
proto.api.v0alpha.DeleteSmsTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteSmsTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSmsTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSmsTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsTemplateRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DeleteSmsTemplateRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.DeleteSmsTemplateRes} returns this
 */
proto.api.v0alpha.DeleteSmsTemplateRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.GetSmsTemplateBySidReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsTemplateBySidReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsTemplateBySidReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsTemplateBySidReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidReq}
 */
proto.api.v0alpha.GetSmsTemplateBySidReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsTemplateBySidReq;
  return proto.api.v0alpha.GetSmsTemplateBySidReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsTemplateBySidReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidReq}
 */
proto.api.v0alpha.GetSmsTemplateBySidReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTemplateSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsTemplateBySidReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsTemplateBySidReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsTemplateBySidReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsTemplateBySidReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sms_template_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.GetSmsTemplateBySidReq.prototype.getSmsTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidReq} returns this
 */
proto.api.v0alpha.GetSmsTemplateBySidReq.prototype.setSmsTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsTemplateBySidRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsTemplateBySidRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplate: (f = msg.getSmsTemplate()) && proto.api.v0alpha.SmsTemplate.toObject(includeInstance, f),
smsIntentTemplatesList: jspb.Message.toObjectList(msg.getSmsIntentTemplatesList(),
    proto.api.v0alpha.SmsIntentTemplate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidRes}
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsTemplateBySidRes;
  return proto.api.v0alpha.GetSmsTemplateBySidRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsTemplateBySidRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidRes}
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsTemplate;
      reader.readMessage(value,proto.api.v0alpha.SmsTemplate.deserializeBinaryFromReader);
      msg.setSmsTemplate(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.SmsIntentTemplate;
      reader.readMessage(value,proto.api.v0alpha.SmsIntentTemplate.deserializeBinaryFromReader);
      msg.addSmsIntentTemplates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsTemplateBySidRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsTemplateBySidRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.SmsTemplate.serializeBinaryToWriter
    );
  }
  f = message.getSmsIntentTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.SmsIntentTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional SmsTemplate sms_template = 1;
 * @return {?proto.api.v0alpha.SmsTemplate}
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.getSmsTemplate = function() {
  return /** @type{?proto.api.v0alpha.SmsTemplate} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsTemplate, 1));
};


/**
 * @param {?proto.api.v0alpha.SmsTemplate|undefined} value
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidRes} returns this
*/
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.setSmsTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidRes} returns this
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.clearSmsTemplate = function() {
  return this.setSmsTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.hasSmsTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SmsIntentTemplate sms_intent_templates = 2;
 * @return {!Array<!proto.api.v0alpha.SmsIntentTemplate>}
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.getSmsIntentTemplatesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsIntentTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsIntentTemplate, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsIntentTemplate>} value
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidRes} returns this
*/
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.setSmsIntentTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.SmsIntentTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsIntentTemplate}
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.addSmsIntentTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.SmsIntentTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetSmsTemplateBySidRes} returns this
 */
proto.api.v0alpha.GetSmsTemplateBySidRes.prototype.clearSmsIntentTemplatesList = function() {
  return this.setSmsIntentTemplatesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsIntentTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsIntentTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsIntentTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
smsIntentTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
actionKey: jspb.Message.getFieldWithDefault(msg, 4, ""),
actionDetail: jspb.Message.getFieldWithDefault(msg, 5, ""),
actionTrigger: jspb.Message.getFieldWithDefault(msg, 6, ""),
priority: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.api.v0alpha.SmsIntentTemplate}
 */
proto.api.v0alpha.SmsIntentTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsIntentTemplate;
  return proto.api.v0alpha.SmsIntentTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsIntentTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsIntentTemplate}
 */
proto.api.v0alpha.SmsIntentTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsIntentTemplateSid(value);
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
      msg.setActionKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionDetail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionTrigger(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriority(value);
      break;
    case 8:
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
proto.api.v0alpha.SmsIntentTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsIntentTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsIntentTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsIntentTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsIntentTemplateSid();
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
  f = message.getActionKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getActionDetail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getActionTrigger();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sms_intent_template_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.getSmsIntentTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.setSmsIntentTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string action_key = 4;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.getActionKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.setActionKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action_detail = 5;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.getActionDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.setActionDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string action_trigger = 6;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.getActionTrigger = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.setActionTrigger = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 priority = 7;
 * @return {number}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp last_updated = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
*/
proto.api.v0alpha.SmsIntentTemplate.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsIntentTemplate} returns this
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsIntentTemplate.prototype.hasLastUpdated = function() {
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
proto.api.v0alpha.ListSmsIntentTemplatesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsIntentTemplatesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsIntentTemplatesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsIntentTemplatesReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListSmsIntentTemplatesReq}
 */
proto.api.v0alpha.ListSmsIntentTemplatesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsIntentTemplatesReq;
  return proto.api.v0alpha.ListSmsIntentTemplatesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsIntentTemplatesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsIntentTemplatesReq}
 */
proto.api.v0alpha.ListSmsIntentTemplatesReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListSmsIntentTemplatesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsIntentTemplatesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsIntentTemplatesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsIntentTemplatesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsIntentTemplatesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsIntentTemplatesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsIntentTemplateList: jspb.Message.toObjectList(msg.getSmsIntentTemplateList(),
    proto.api.v0alpha.SmsIntentTemplate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsIntentTemplatesRes}
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsIntentTemplatesRes;
  return proto.api.v0alpha.ListSmsIntentTemplatesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsIntentTemplatesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsIntentTemplatesRes}
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsIntentTemplate;
      reader.readMessage(value,proto.api.v0alpha.SmsIntentTemplate.deserializeBinaryFromReader);
      msg.addSmsIntentTemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsIntentTemplatesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsIntentTemplatesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsIntentTemplateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsIntentTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsIntentTemplate sms_intent_template = 1;
 * @return {!Array<!proto.api.v0alpha.SmsIntentTemplate>}
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.prototype.getSmsIntentTemplateList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsIntentTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsIntentTemplate, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsIntentTemplate>} value
 * @return {!proto.api.v0alpha.ListSmsIntentTemplatesRes} returns this
*/
proto.api.v0alpha.ListSmsIntentTemplatesRes.prototype.setSmsIntentTemplateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsIntentTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsIntentTemplate}
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.prototype.addSmsIntentTemplate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsIntentTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsIntentTemplatesRes} returns this
 */
proto.api.v0alpha.ListSmsIntentTemplatesRes.prototype.clearSmsIntentTemplateList = function() {
  return this.setSmsIntentTemplateList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateSmsIntentTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSmsIntentTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSmsIntentTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsIntentTemplateRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateSmsIntentTemplateRes}
 */
proto.api.v0alpha.UpdateSmsIntentTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSmsIntentTemplateRes;
  return proto.api.v0alpha.UpdateSmsIntentTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSmsIntentTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSmsIntentTemplateRes}
 */
proto.api.v0alpha.UpdateSmsIntentTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateSmsIntentTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSmsIntentTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSmsIntentTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsIntentTemplateRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateSmsIntentTemplateRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateSmsIntentTemplateRes} returns this
 */
proto.api.v0alpha.UpdateSmsIntentTemplateRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.DeleteSmsIntentTemplateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSmsIntentTemplateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSmsIntentTemplateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsIntentTemplateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsIntentTemplateSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteSmsIntentTemplateReq}
 */
proto.api.v0alpha.DeleteSmsIntentTemplateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSmsIntentTemplateReq;
  return proto.api.v0alpha.DeleteSmsIntentTemplateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSmsIntentTemplateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSmsIntentTemplateReq}
 */
proto.api.v0alpha.DeleteSmsIntentTemplateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsIntentTemplateSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteSmsIntentTemplateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSmsIntentTemplateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSmsIntentTemplateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsIntentTemplateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsIntentTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 sms_intent_template_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.DeleteSmsIntentTemplateReq.prototype.getSmsIntentTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DeleteSmsIntentTemplateReq} returns this
 */
proto.api.v0alpha.DeleteSmsIntentTemplateReq.prototype.setSmsIntentTemplateSid = function(value) {
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
proto.api.v0alpha.DeleteSmsIntentTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSmsIntentTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSmsIntentTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsIntentTemplateRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteSmsIntentTemplateRes}
 */
proto.api.v0alpha.DeleteSmsIntentTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSmsIntentTemplateRes;
  return proto.api.v0alpha.DeleteSmsIntentTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSmsIntentTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSmsIntentTemplateRes}
 */
proto.api.v0alpha.DeleteSmsIntentTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteSmsIntentTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSmsIntentTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSmsIntentTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsIntentTemplateRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DeleteSmsIntentTemplateRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.DeleteSmsIntentTemplateRes} returns this
 */
proto.api.v0alpha.DeleteSmsIntentTemplateRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.CreateSmsIntentTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsIntentTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsIntentTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsIntentTemplateRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsIntentTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSmsIntentTemplateRes}
 */
proto.api.v0alpha.CreateSmsIntentTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsIntentTemplateRes;
  return proto.api.v0alpha.CreateSmsIntentTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsIntentTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsIntentTemplateRes}
 */
proto.api.v0alpha.CreateSmsIntentTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsIntentTemplateSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateSmsIntentTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsIntentTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsIntentTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsIntentTemplateRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsIntentTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sms_intent_template_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.CreateSmsIntentTemplateRes.prototype.getSmsIntentTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateSmsIntentTemplateRes} returns this
 */
proto.api.v0alpha.CreateSmsIntentTemplateRes.prototype.setSmsIntentTemplateSid = function(value) {
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
proto.api.v0alpha.GetSmsIntentTemplateBySidReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsIntentTemplateBySidReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsIntentTemplateBySidReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsIntentTemplateBySidReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsIntentTemplateSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsIntentTemplateBySidReq}
 */
proto.api.v0alpha.GetSmsIntentTemplateBySidReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsIntentTemplateBySidReq;
  return proto.api.v0alpha.GetSmsIntentTemplateBySidReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsIntentTemplateBySidReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsIntentTemplateBySidReq}
 */
proto.api.v0alpha.GetSmsIntentTemplateBySidReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsIntentTemplateSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsIntentTemplateBySidReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsIntentTemplateBySidReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsIntentTemplateBySidReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsIntentTemplateBySidReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsIntentTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 sms_intent_template_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.GetSmsIntentTemplateBySidReq.prototype.getSmsIntentTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetSmsIntentTemplateBySidReq} returns this
 */
proto.api.v0alpha.GetSmsIntentTemplateBySidReq.prototype.setSmsIntentTemplateSid = function(value) {
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
proto.api.v0alpha.SmsNumbers.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsNumbers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsNumbers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsNumbers.toObject = function(includeInstance, msg) {
  var f, obj = {
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
countrySid: jspb.Message.getFieldWithDefault(msg, 2, 0),
number: jspb.Message.getFieldWithDefault(msg, 3, ""),
providerName: jspb.Message.getFieldWithDefault(msg, 4, ""),
notes: jspb.Message.getFieldWithDefault(msg, 5, ""),
ivrReference: (f = msg.getIvrReference()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
clientName: jspb.Message.getFieldWithDefault(msg, 7, ""),
istollfree: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
srcNumberType: jspb.Message.getFieldWithDefault(msg, 9, ""),
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
 * @return {!proto.api.v0alpha.SmsNumbers}
 */
proto.api.v0alpha.SmsNumbers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsNumbers;
  return proto.api.v0alpha.SmsNumbers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsNumbers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsNumbers}
 */
proto.api.v0alpha.SmsNumbers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountrySid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setIvrReference(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstollfree(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcNumberType(value);
      break;
    case 10:
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
proto.api.v0alpha.SmsNumbers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsNumbers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsNumbers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsNumbers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumberSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCountrySid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProviderName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIvrReference();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIstollfree();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getSrcNumberType();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sms_number_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.SmsNumbers.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 country_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.SmsNumbers.prototype.getCountrySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.setCountrySid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string number = 3;
 * @return {string}
 */
proto.api.v0alpha.SmsNumbers.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string provider_name = 4;
 * @return {string}
 */
proto.api.v0alpha.SmsNumbers.prototype.getProviderName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.setProviderName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string notes = 5;
 * @return {string}
 */
proto.api.v0alpha.SmsNumbers.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.StringValue ivr_reference = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.SmsNumbers.prototype.getIvrReference = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
*/
proto.api.v0alpha.SmsNumbers.prototype.setIvrReference = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.clearIvrReference = function() {
  return this.setIvrReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsNumbers.prototype.hasIvrReference = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string client_name = 7;
 * @return {string}
 */
proto.api.v0alpha.SmsNumbers.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool isTollFree = 8;
 * @return {boolean}
 */
proto.api.v0alpha.SmsNumbers.prototype.getIstollfree = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.setIstollfree = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string src_number_type = 9;
 * @return {string}
 */
proto.api.v0alpha.SmsNumbers.prototype.getSrcNumberType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.setSrcNumberType = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp last_updated = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsNumbers.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
*/
proto.api.v0alpha.SmsNumbers.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsNumbers} returns this
 */
proto.api.v0alpha.SmsNumbers.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsNumbers.prototype.hasLastUpdated = function() {
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
proto.api.v0alpha.ListSmsSourceNumbersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsSourceNumbersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsSourceNumbersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsSourceNumbersReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListSmsSourceNumbersReq}
 */
proto.api.v0alpha.ListSmsSourceNumbersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsSourceNumbersReq;
  return proto.api.v0alpha.ListSmsSourceNumbersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsSourceNumbersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsSourceNumbersReq}
 */
proto.api.v0alpha.ListSmsSourceNumbersReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListSmsSourceNumbersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsSourceNumbersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsSourceNumbersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsSourceNumbersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsSourceNumbersRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsSourceNumbersRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsNumbersList: jspb.Message.toObjectList(msg.getSmsNumbersList(),
    proto.api.v0alpha.SmsNumbers.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsSourceNumbersRes}
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsSourceNumbersRes;
  return proto.api.v0alpha.ListSmsSourceNumbersRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsSourceNumbersRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsSourceNumbersRes}
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsNumbers;
      reader.readMessage(value,proto.api.v0alpha.SmsNumbers.deserializeBinaryFromReader);
      msg.addSmsNumbers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsSourceNumbersRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsSourceNumbersRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsNumbers.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsNumbers sms_numbers = 1;
 * @return {!Array<!proto.api.v0alpha.SmsNumbers>}
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.prototype.getSmsNumbersList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsNumbers>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsNumbers, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsNumbers>} value
 * @return {!proto.api.v0alpha.ListSmsSourceNumbersRes} returns this
*/
proto.api.v0alpha.ListSmsSourceNumbersRes.prototype.setSmsNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsNumbers=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsNumbers}
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.prototype.addSmsNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsNumbers, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsSourceNumbersRes} returns this
 */
proto.api.v0alpha.ListSmsSourceNumbersRes.prototype.clearSmsNumbersList = function() {
  return this.setSmsNumbersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSmsSourceNumberReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSmsSourceNumberReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
countrySid: jspb.Message.getFieldWithDefault(msg, 2, 0),
number: jspb.Message.getFieldWithDefault(msg, 3, ""),
providerName: jspb.Message.getFieldWithDefault(msg, 4, ""),
notes: jspb.Message.getFieldWithDefault(msg, 5, ""),
ivrReference: jspb.Message.getFieldWithDefault(msg, 6, ""),
srcNumberType: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSmsSourceNumberReq;
  return proto.api.v0alpha.UpdateSmsSourceNumberReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSmsSourceNumberReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountrySid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIvrReference(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcNumberType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSmsSourceNumberReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSmsSourceNumberReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumberSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCountrySid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProviderName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIvrReference();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSrcNumberType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 sms_number_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 country_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.getCountrySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.setCountrySid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string number = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string provider_name = 4;
 * @return {string}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.getProviderName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.setProviderName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string notes = 5;
 * @return {string}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string ivr_reference = 6;
 * @return {string}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.getIvrReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.setIvrReference = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string src_number_type = 7;
 * @return {string}
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.getSrcNumberType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.UpdateSmsSourceNumberReq.prototype.setSrcNumberType = function(value) {
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
proto.api.v0alpha.UpdateSmsSourceNumberRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSmsSourceNumberRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSmsSourceNumberRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsSourceNumberRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberRes}
 */
proto.api.v0alpha.UpdateSmsSourceNumberRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSmsSourceNumberRes;
  return proto.api.v0alpha.UpdateSmsSourceNumberRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSmsSourceNumberRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberRes}
 */
proto.api.v0alpha.UpdateSmsSourceNumberRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateSmsSourceNumberRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSmsSourceNumberRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSmsSourceNumberRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsSourceNumberRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateSmsSourceNumberRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateSmsSourceNumberRes} returns this
 */
proto.api.v0alpha.UpdateSmsSourceNumberRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.DeleteSmsSourceNumberReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSmsSourceNumberReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSmsSourceNumberReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsSourceNumberReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteSmsSourceNumberReq}
 */
proto.api.v0alpha.DeleteSmsSourceNumberReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSmsSourceNumberReq;
  return proto.api.v0alpha.DeleteSmsSourceNumberReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSmsSourceNumberReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSmsSourceNumberReq}
 */
proto.api.v0alpha.DeleteSmsSourceNumberReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteSmsSourceNumberReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSmsSourceNumberReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSmsSourceNumberReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsSourceNumberReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumberSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 sms_number_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.DeleteSmsSourceNumberReq.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.DeleteSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.DeleteSmsSourceNumberReq.prototype.setSmsNumberSid = function(value) {
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
proto.api.v0alpha.DeleteSmsSourceNumberRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSmsSourceNumberRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSmsSourceNumberRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsSourceNumberRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteSmsSourceNumberRes}
 */
proto.api.v0alpha.DeleteSmsSourceNumberRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSmsSourceNumberRes;
  return proto.api.v0alpha.DeleteSmsSourceNumberRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSmsSourceNumberRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSmsSourceNumberRes}
 */
proto.api.v0alpha.DeleteSmsSourceNumberRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteSmsSourceNumberRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSmsSourceNumberRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSmsSourceNumberRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsSourceNumberRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DeleteSmsSourceNumberRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.DeleteSmsSourceNumberRes} returns this
 */
proto.api.v0alpha.DeleteSmsSourceNumberRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsSourceNumberReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsSourceNumberReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.toObject = function(includeInstance, msg) {
  var f, obj = {
countrySid: jspb.Message.getFieldWithDefault(msg, 1, 0),
number: jspb.Message.getFieldWithDefault(msg, 2, ""),
providerName: jspb.Message.getFieldWithDefault(msg, 3, ""),
notes: jspb.Message.getFieldWithDefault(msg, 4, ""),
ivrReference: jspb.Message.getFieldWithDefault(msg, 5, ""),
srcNumberType: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberReq}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsSourceNumberReq;
  return proto.api.v0alpha.CreateSmsSourceNumberReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsSourceNumberReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberReq}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountrySid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIvrReference(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcNumberType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsSourceNumberReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsSourceNumberReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountrySid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProviderName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIvrReference();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSrcNumberType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int64 country_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.getCountrySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.setCountrySid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string provider_name = 3;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.getProviderName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.setProviderName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string notes = 4;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ivr_reference = 5;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.getIvrReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.setIvrReference = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string src_number_type = 6;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.getSrcNumberType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberReq} returns this
 */
proto.api.v0alpha.CreateSmsSourceNumberReq.prototype.setSrcNumberType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateSmsSourceNumberRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsSourceNumberRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsSourceNumberRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsSourceNumberRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberRes}
 */
proto.api.v0alpha.CreateSmsSourceNumberRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsSourceNumberRes;
  return proto.api.v0alpha.CreateSmsSourceNumberRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsSourceNumberRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberRes}
 */
proto.api.v0alpha.CreateSmsSourceNumberRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateSmsSourceNumberRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsSourceNumberRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsSourceNumberRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsSourceNumberRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumberSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sms_number_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.CreateSmsSourceNumberRes.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateSmsSourceNumberRes} returns this
 */
proto.api.v0alpha.CreateSmsSourceNumberRes.prototype.setSmsNumberSid = function(value) {
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
proto.api.v0alpha.GetSmsSourceNumberBySidReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsSourceNumberBySidReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsSourceNumberBySidReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsSourceNumberBySidReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsSourceNumberBySidReq}
 */
proto.api.v0alpha.GetSmsSourceNumberBySidReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsSourceNumberBySidReq;
  return proto.api.v0alpha.GetSmsSourceNumberBySidReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsSourceNumberBySidReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsSourceNumberBySidReq}
 */
proto.api.v0alpha.GetSmsSourceNumberBySidReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsSourceNumberBySidReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsSourceNumberBySidReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsSourceNumberBySidReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsSourceNumberBySidReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumberSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 sms_number_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.GetSmsSourceNumberBySidReq.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetSmsSourceNumberBySidReq} returns this
 */
proto.api.v0alpha.GetSmsSourceNumberBySidReq.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SendSmsNotificationReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SendSmsNotificationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendSmsNotificationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendSmsNotificationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendSmsNotificationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
toPhoneNumArrList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SendSmsNotificationReq}
 */
proto.api.v0alpha.SendSmsNotificationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendSmsNotificationReq;
  return proto.api.v0alpha.SendSmsNotificationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendSmsNotificationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendSmsNotificationReq}
 */
proto.api.v0alpha.SendSmsNotificationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addToPhoneNumArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SendSmsNotificationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendSmsNotificationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendSmsNotificationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendSmsNotificationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToPhoneNumArrList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.api.v0alpha.SendSmsNotificationReq.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendSmsNotificationReq} returns this
 */
proto.api.v0alpha.SendSmsNotificationReq.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string to_phone_num_arr = 3;
 * @return {!Array<string>}
 */
proto.api.v0alpha.SendSmsNotificationReq.prototype.getToPhoneNumArrList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.SendSmsNotificationReq} returns this
 */
proto.api.v0alpha.SendSmsNotificationReq.prototype.setToPhoneNumArrList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SendSmsNotificationReq} returns this
 */
proto.api.v0alpha.SendSmsNotificationReq.prototype.addToPhoneNumArr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SendSmsNotificationReq} returns this
 */
proto.api.v0alpha.SendSmsNotificationReq.prototype.clearToPhoneNumArrList = function() {
  return this.setToPhoneNumArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SendSmsNotificationRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SendSmsNotificationRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SendSmsNotificationRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendSmsNotificationRes.toObject = function(includeInstance, msg) {
  var f, obj = {
response: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SendSmsNotificationRes}
 */
proto.api.v0alpha.SendSmsNotificationRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SendSmsNotificationRes;
  return proto.api.v0alpha.SendSmsNotificationRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SendSmsNotificationRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SendSmsNotificationRes}
 */
proto.api.v0alpha.SendSmsNotificationRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SendSmsNotificationRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SendSmsNotificationRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SendSmsNotificationRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SendSmsNotificationRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string response = 1;
 * @return {string}
 */
proto.api.v0alpha.SendSmsNotificationRes.prototype.getResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SendSmsNotificationRes} returns this
 */
proto.api.v0alpha.SendSmsNotificationRes.prototype.setResponse = function(value) {
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
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsGroupByFiltersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsGroupByFiltersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.toObject = function(includeInstance, msg) {
  var f, obj = {
searchFrom: (f = msg.getSearchFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
searchTo: (f = msg.getSearchTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
status: jspb.Message.getFieldWithDefault(msg, 4, ""),
name: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersReq}
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsGroupByFiltersReq;
  return proto.api.v0alpha.ListSmsGroupByFiltersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsGroupByFiltersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersReq}
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSearchFrom(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSearchTo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
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
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsGroupByFiltersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsGroupByFiltersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSearchTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * optional google.protobuf.Timestamp search_from = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.getSearchFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersReq} returns this
*/
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.setSearchFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersReq} returns this
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.clearSearchFrom = function() {
  return this.setSearchFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.hasSearchFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp search_to = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.getSearchTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersReq} returns this
*/
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.setSearchTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersReq} returns this
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.clearSearchTo = function() {
  return this.setSearchTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.hasSearchTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersReq} returns this
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersReq} returns this
 */
proto.api.v0alpha.ListSmsGroupByFiltersReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SmsGroupWithIntents.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsGroupWithIntents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsGroupWithIntents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsGroupWithIntents.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupInfoRes: (f = msg.getSmsGroupInfoRes()) && proto.api.v0alpha.SmsGroupInfo.toObject(includeInstance, f),
smsIntentGroupsList: jspb.Message.toObjectList(msg.getSmsIntentGroupsList(),
    proto.api.v0alpha.SmsIntentGroup.toObject, includeInstance),
smsMamSettings: (f = msg.getSmsMamSettings()) && proto.api.v0alpha.SmsMamSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsGroupWithIntents}
 */
proto.api.v0alpha.SmsGroupWithIntents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsGroupWithIntents;
  return proto.api.v0alpha.SmsGroupWithIntents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsGroupWithIntents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsGroupWithIntents}
 */
proto.api.v0alpha.SmsGroupWithIntents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsGroupInfo;
      reader.readMessage(value,proto.api.v0alpha.SmsGroupInfo.deserializeBinaryFromReader);
      msg.setSmsGroupInfoRes(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.SmsIntentGroup;
      reader.readMessage(value,proto.api.v0alpha.SmsIntentGroup.deserializeBinaryFromReader);
      msg.addSmsIntentGroups(value);
      break;
    case 3:
      var value = new proto.api.v0alpha.SmsMamSettings;
      reader.readMessage(value,proto.api.v0alpha.SmsMamSettings.deserializeBinaryFromReader);
      msg.setSmsMamSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsGroupWithIntents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsGroupWithIntents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsGroupWithIntents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupInfoRes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.SmsGroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getSmsIntentGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.SmsIntentGroup.serializeBinaryToWriter
    );
  }
  f = message.getSmsMamSettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v0alpha.SmsMamSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional SmsGroupInfo sms_group_info_res = 1;
 * @return {?proto.api.v0alpha.SmsGroupInfo}
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.getSmsGroupInfoRes = function() {
  return /** @type{?proto.api.v0alpha.SmsGroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsGroupInfo, 1));
};


/**
 * @param {?proto.api.v0alpha.SmsGroupInfo|undefined} value
 * @return {!proto.api.v0alpha.SmsGroupWithIntents} returns this
*/
proto.api.v0alpha.SmsGroupWithIntents.prototype.setSmsGroupInfoRes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsGroupWithIntents} returns this
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.clearSmsGroupInfoRes = function() {
  return this.setSmsGroupInfoRes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.hasSmsGroupInfoRes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SmsIntentGroup sms_intent_groups = 2;
 * @return {!Array<!proto.api.v0alpha.SmsIntentGroup>}
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.getSmsIntentGroupsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsIntentGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsIntentGroup, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsIntentGroup>} value
 * @return {!proto.api.v0alpha.SmsGroupWithIntents} returns this
*/
proto.api.v0alpha.SmsGroupWithIntents.prototype.setSmsIntentGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.SmsIntentGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsIntentGroup}
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.addSmsIntentGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.SmsIntentGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SmsGroupWithIntents} returns this
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.clearSmsIntentGroupsList = function() {
  return this.setSmsIntentGroupsList([]);
};


/**
 * optional SmsMamSettings sms_mam_settings = 3;
 * @return {?proto.api.v0alpha.SmsMamSettings}
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.getSmsMamSettings = function() {
  return /** @type{?proto.api.v0alpha.SmsMamSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsMamSettings, 3));
};


/**
 * @param {?proto.api.v0alpha.SmsMamSettings|undefined} value
 * @return {!proto.api.v0alpha.SmsGroupWithIntents} returns this
*/
proto.api.v0alpha.SmsGroupWithIntents.prototype.setSmsMamSettings = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsGroupWithIntents} returns this
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.clearSmsMamSettings = function() {
  return this.setSmsMamSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsGroupWithIntents.prototype.hasSmsMamSettings = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsGroupByFiltersRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsGroupByFiltersRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupWithIntentsList: jspb.Message.toObjectList(msg.getSmsGroupWithIntentsList(),
    proto.api.v0alpha.SmsGroupWithIntents.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersRes}
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsGroupByFiltersRes;
  return proto.api.v0alpha.ListSmsGroupByFiltersRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsGroupByFiltersRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersRes}
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsGroupWithIntents;
      reader.readMessage(value,proto.api.v0alpha.SmsGroupWithIntents.deserializeBinaryFromReader);
      msg.addSmsGroupWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsGroupByFiltersRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsGroupByFiltersRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsGroupWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsGroupWithIntents sms_group_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.SmsGroupWithIntents>}
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.prototype.getSmsGroupWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsGroupWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsGroupWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsGroupWithIntents>} value
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersRes} returns this
*/
proto.api.v0alpha.ListSmsGroupByFiltersRes.prototype.setSmsGroupWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsGroupWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsGroupWithIntents}
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.prototype.addSmsGroupWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsGroupWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsGroupByFiltersRes} returns this
 */
proto.api.v0alpha.ListSmsGroupByFiltersRes.prototype.clearSmsGroupWithIntentsList = function() {
  return this.setSmsGroupWithIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsGroupsByGroupSidsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupSidsArrList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsReq}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsGroupsByGroupSidsReq;
  return proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsGroupsByGroupSidsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsReq}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSmsGroupSidsArr(values[i]);
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
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsGroupsByGroupSidsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupSidsArrList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * repeated int64 sms_group_sids_arr = 2;
 * @return {!Array<number>}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.prototype.getSmsGroupSidsArrList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsReq} returns this
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.prototype.setSmsGroupSidsArrList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsReq} returns this
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.prototype.addSmsGroupSidsArr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsReq} returns this
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsReq.prototype.clearSmsGroupSidsArrList = function() {
  return this.setSmsGroupSidsArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsGroupsByGroupSidsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupWithIntentsList: jspb.Message.toObjectList(msg.getSmsGroupWithIntentsList(),
    proto.api.v0alpha.SmsGroupWithIntents.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsRes}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsGroupsByGroupSidsRes;
  return proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsGroupsByGroupSidsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsRes}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsGroupWithIntents;
      reader.readMessage(value,proto.api.v0alpha.SmsGroupWithIntents.deserializeBinaryFromReader);
      msg.addSmsGroupWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsGroupsByGroupSidsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsGroupWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsGroupWithIntents sms_group_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.SmsGroupWithIntents>}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.prototype.getSmsGroupWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsGroupWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsGroupWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsGroupWithIntents>} value
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsRes} returns this
*/
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.prototype.setSmsGroupWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsGroupWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsGroupWithIntents}
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.prototype.addSmsGroupWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsGroupWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsGroupsByGroupSidsRes} returns this
 */
proto.api.v0alpha.ListSmsGroupsByGroupSidsRes.prototype.clearSmsGroupWithIntentsList = function() {
  return this.setSmsGroupWithIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SmsGroupInfo.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsGroupInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsGroupInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsGroupInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
countrySid: jspb.Message.getFieldWithDefault(msg, 2, 0),
smsMessageSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
stopTime: (f = msg.getStopTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
sendsPerMinute: jspb.Message.getFieldWithDefault(msg, 7, 0),
status: jspb.Message.getFieldWithDefault(msg, 8, 0),
totalCost: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
callerIdsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
clientName: jspb.Message.getFieldWithDefault(msg, 11, ""),
totalScheduled: jspb.Message.getFieldWithDefault(msg, 12, 0),
totalCompleted: jspb.Message.getFieldWithDefault(msg, 13, 0),
contactGroupSidStr: (f = msg.getContactGroupSidStr()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
contactGroupSid: jspb.Message.getFieldWithDefault(msg, 15, 0),
phoneNumCol: (f = msg.getPhoneNumCol()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
useTzRestrictions: (f = msg.getUseTzRestrictions()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
messageCount: jspb.Message.getFieldWithDefault(msg, 18, 0),
todaysMessageCount: jspb.Message.getFieldWithDefault(msg, 19, 0),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsGroupInfo}
 */
proto.api.v0alpha.SmsGroupInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsGroupInfo;
  return proto.api.v0alpha.SmsGroupInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsGroupInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsGroupInfo}
 */
proto.api.v0alpha.SmsGroupInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsGroupSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountrySid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsMessageSid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStopTime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSendsPerMinute(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalCost(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addCallerIds(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalScheduled(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCompleted(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setContactGroupSidStr(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContactGroupSid(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setPhoneNumCol(value);
      break;
    case 17:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setUseTzRestrictions(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessageCount(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTodaysMessageCount(value);
      break;
    case 20:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsGroupInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsGroupInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsGroupInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCountrySid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSmsMessageSid();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStopTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSendsPerMinute();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getTotalCost();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getCallerIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTotalScheduled();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getTotalCompleted();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getContactGroupSidStr();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getContactGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getPhoneNumCol();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getUseTzRestrictions();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMessageCount();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getTodaysMessageCount();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sms_group_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getSmsGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setSmsGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 country_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getCountrySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setCountrySid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 sms_message_sid = 3;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getSmsMessageSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setSmsMessageSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
*/
proto.api.v0alpha.SmsGroupInfo.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp stop_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getStopTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
*/
proto.api.v0alpha.SmsGroupInfo.prototype.setStopTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.clearStopTime = function() {
  return this.setStopTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.hasStopTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 sends_per_minute = 7;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getSendsPerMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setSendsPerMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 status = 8;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional double total_cost = 9;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getTotalCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setTotalCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * repeated string caller_ids = 10;
 * @return {!Array<string>}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getCallerIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setCallerIdsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.addCallerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.clearCallerIdsList = function() {
  return this.setCallerIdsList([]);
};


/**
 * optional string client_name = 11;
 * @return {string}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 total_scheduled = 12;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getTotalScheduled = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setTotalScheduled = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 total_completed = 13;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getTotalCompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setTotalCompleted = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional google.protobuf.StringValue contact_group_sid_str = 14;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getContactGroupSidStr = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 14));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
*/
proto.api.v0alpha.SmsGroupInfo.prototype.setContactGroupSidStr = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.clearContactGroupSidStr = function() {
  return this.setContactGroupSidStr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.hasContactGroupSidStr = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int64 contact_group_sid = 15;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getContactGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setContactGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional google.protobuf.StringValue phone_num_col = 16;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getPhoneNumCol = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 16));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
*/
proto.api.v0alpha.SmsGroupInfo.prototype.setPhoneNumCol = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.clearPhoneNumCol = function() {
  return this.setPhoneNumCol(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.hasPhoneNumCol = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.StringValue use_tz_restrictions = 17;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getUseTzRestrictions = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 17));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
*/
proto.api.v0alpha.SmsGroupInfo.prototype.setUseTzRestrictions = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.clearUseTzRestrictions = function() {
  return this.setUseTzRestrictions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.hasUseTzRestrictions = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int32 message_count = 18;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getMessageCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setMessageCount = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 todays_message_count = 19;
 * @return {number}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getTodaysMessageCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.setTodaysMessageCount = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional google.protobuf.Timestamp date_created = 20;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 20));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
*/
proto.api.v0alpha.SmsGroupInfo.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsGroupInfo} returns this
 */
proto.api.v0alpha.SmsGroupInfo.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsGroupInfo.prototype.hasDateCreated = function() {
  return jspb.Message.getField(this, 20) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsTasksByGroupSidsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsTasksByGroupSidsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupSidsArrList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsReq}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsTasksByGroupSidsReq;
  return proto.api.v0alpha.ListSmsTasksByGroupSidsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsTasksByGroupSidsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsReq}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSmsGroupSidsArr(values[i]);
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
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsTasksByGroupSidsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsTasksByGroupSidsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupSidsArrList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * repeated int64 sms_group_sids_arr = 2;
 * @return {!Array<number>}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.prototype.getSmsGroupSidsArrList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsReq} returns this
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.prototype.setSmsGroupSidsArrList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsReq} returns this
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.prototype.addSmsGroupSidsArr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsReq} returns this
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsReq.prototype.clearSmsGroupSidsArrList = function() {
  return this.setSmsGroupSidsArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsTasksByGroupSidsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsTasksByGroupSidsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTaskInfoWithReplyList: jspb.Message.toObjectList(msg.getSmsTaskInfoWithReplyList(),
    proto.api.v0alpha.SmsTaskInfoWithReply.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsRes}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsTasksByGroupSidsRes;
  return proto.api.v0alpha.ListSmsTasksByGroupSidsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsTasksByGroupSidsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsRes}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsTaskInfoWithReply;
      reader.readMessage(value,proto.api.v0alpha.SmsTaskInfoWithReply.deserializeBinaryFromReader);
      msg.addSmsTaskInfoWithReply(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsTasksByGroupSidsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsTasksByGroupSidsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTaskInfoWithReplyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsTaskInfoWithReply.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsTaskInfoWithReply sms_task_info_with_reply = 1;
 * @return {!Array<!proto.api.v0alpha.SmsTaskInfoWithReply>}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.prototype.getSmsTaskInfoWithReplyList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsTaskInfoWithReply>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsTaskInfoWithReply, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsTaskInfoWithReply>} value
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsRes} returns this
*/
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.prototype.setSmsTaskInfoWithReplyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsTaskInfoWithReply=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsTaskInfoWithReply}
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.prototype.addSmsTaskInfoWithReply = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsTaskInfoWithReply, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsTasksByGroupSidsRes} returns this
 */
proto.api.v0alpha.ListSmsTasksByGroupSidsRes.prototype.clearSmsTaskInfoWithReplyList = function() {
  return this.setSmsTaskInfoWithReplyList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq;
  return proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsGroupSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 sms_group_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.prototype.getSmsGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq} returns this
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusReq.prototype.setSmsGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTaskInfoWithReplyList: jspb.Message.toObjectList(msg.getSmsTaskInfoWithReplyList(),
    proto.api.v0alpha.SmsTaskInfoWithReply.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes;
  return proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsTaskInfoWithReply;
      reader.readMessage(value,proto.api.v0alpha.SmsTaskInfoWithReply.deserializeBinaryFromReader);
      msg.addSmsTaskInfoWithReply(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTaskInfoWithReplyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsTaskInfoWithReply.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsTaskInfoWithReply sms_task_info_with_reply = 1;
 * @return {!Array<!proto.api.v0alpha.SmsTaskInfoWithReply>}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.prototype.getSmsTaskInfoWithReplyList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsTaskInfoWithReply>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsTaskInfoWithReply, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsTaskInfoWithReply>} value
 * @return {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes} returns this
*/
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.prototype.setSmsTaskInfoWithReplyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsTaskInfoWithReply=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsTaskInfoWithReply}
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.prototype.addSmsTaskInfoWithReply = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsTaskInfoWithReply, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes} returns this
 */
proto.api.v0alpha.ListSmsTasksWithDetailedStatusRes.prototype.clearSmsTaskInfoWithReplyList = function() {
  return this.setSmsTaskInfoWithReplyList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SmsTaskInfoWithReply.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsTaskInfoWithReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsTaskInfoWithReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsTaskInfoWithReply.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTaskInfoRes: (f = msg.getSmsTaskInfoRes()) && proto.api.v0alpha.SmsTaskInfoRes.toObject(includeInstance, f),
smsReceivedRepliesList: jspb.Message.toObjectList(msg.getSmsReceivedRepliesList(),
    proto.api.v0alpha.SmsReceivedReplies.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsTaskInfoWithReply}
 */
proto.api.v0alpha.SmsTaskInfoWithReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsTaskInfoWithReply;
  return proto.api.v0alpha.SmsTaskInfoWithReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsTaskInfoWithReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsTaskInfoWithReply}
 */
proto.api.v0alpha.SmsTaskInfoWithReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsTaskInfoRes;
      reader.readMessage(value,proto.api.v0alpha.SmsTaskInfoRes.deserializeBinaryFromReader);
      msg.setSmsTaskInfoRes(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.SmsReceivedReplies;
      reader.readMessage(value,proto.api.v0alpha.SmsReceivedReplies.deserializeBinaryFromReader);
      msg.addSmsReceivedReplies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsTaskInfoWithReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsTaskInfoWithReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsTaskInfoWithReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTaskInfoRes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.SmsTaskInfoRes.serializeBinaryToWriter
    );
  }
  f = message.getSmsReceivedRepliesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.SmsReceivedReplies.serializeBinaryToWriter
    );
  }
};


/**
 * optional SmsTaskInfoRes sms_task_info_res = 1;
 * @return {?proto.api.v0alpha.SmsTaskInfoRes}
 */
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.getSmsTaskInfoRes = function() {
  return /** @type{?proto.api.v0alpha.SmsTaskInfoRes} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsTaskInfoRes, 1));
};


/**
 * @param {?proto.api.v0alpha.SmsTaskInfoRes|undefined} value
 * @return {!proto.api.v0alpha.SmsTaskInfoWithReply} returns this
*/
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.setSmsTaskInfoRes = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsTaskInfoWithReply} returns this
 */
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.clearSmsTaskInfoRes = function() {
  return this.setSmsTaskInfoRes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.hasSmsTaskInfoRes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SmsReceivedReplies sms_received_replies = 2;
 * @return {!Array<!proto.api.v0alpha.SmsReceivedReplies>}
 */
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.getSmsReceivedRepliesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsReceivedReplies>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsReceivedReplies, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsReceivedReplies>} value
 * @return {!proto.api.v0alpha.SmsTaskInfoWithReply} returns this
*/
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.setSmsReceivedRepliesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.SmsReceivedReplies=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsReceivedReplies}
 */
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.addSmsReceivedReplies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.SmsReceivedReplies, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SmsTaskInfoWithReply} returns this
 */
proto.api.v0alpha.SmsTaskInfoWithReply.prototype.clearSmsReceivedRepliesList = function() {
  return this.setSmsReceivedRepliesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsTaskInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsTaskInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsTaskInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTaskSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
smsGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
deliveryStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
deliveryStatusMessage: jspb.Message.getFieldWithDefault(msg, 4, ""),
data: jspb.Message.getFieldWithDefault(msg, 5, ""),
cost: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
msgUuid: (f = msg.getMsgUuid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
msgTime: (f = msg.getMsgTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
status: jspb.Message.getFieldWithDefault(msg, 9, 0),
phoneNumCol: (f = msg.getPhoneNumCol()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
units: jspb.Message.getFieldWithDefault(msg, 11, 0),
smsTaskParent: (f = msg.getSmsTaskParent()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
mamAgentResponse: (f = msg.getMamAgentResponse()) && proto.api.v0alpha.MamAgentResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsTaskInfoRes}
 */
proto.api.v0alpha.SmsTaskInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsTaskInfoRes;
  return proto.api.v0alpha.SmsTaskInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsTaskInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsTaskInfoRes}
 */
proto.api.v0alpha.SmsTaskInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTaskSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsGroupSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeliveryStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliveryStatusMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCost(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setMsgUuid(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMsgTime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStatus(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setPhoneNumCol(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnits(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setSmsTaskParent(value);
      break;
    case 13:
      var value = new proto.api.v0alpha.MamAgentResponse;
      reader.readMessage(value,proto.api.v0alpha.MamAgentResponse.deserializeBinaryFromReader);
      msg.setMamAgentResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsTaskInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsTaskInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsTaskInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTaskSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSmsGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDeliveryStatus();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDeliveryStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCost();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getMsgUuid();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMsgTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getPhoneNumCol();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getUnits();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getSmsTaskParent();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getMamAgentResponse();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.v0alpha.MamAgentResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sms_task_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getSmsTaskSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.setSmsTaskSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 sms_group_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getSmsGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.setSmsGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 delivery_status = 3;
 * @return {number}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getDeliveryStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.setDeliveryStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string delivery_status_message = 4;
 * @return {string}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getDeliveryStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.setDeliveryStatusMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string data = 5;
 * @return {string}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double cost = 6;
 * @return {number}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.setCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional google.protobuf.StringValue msg_uuid = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getMsgUuid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
*/
proto.api.v0alpha.SmsTaskInfoRes.prototype.setMsgUuid = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.clearMsgUuid = function() {
  return this.setMsgUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.hasMsgUuid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp msg_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getMsgTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
*/
proto.api.v0alpha.SmsTaskInfoRes.prototype.setMsgTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.clearMsgTime = function() {
  return this.setMsgTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.hasMsgTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 status = 9;
 * @return {number}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional google.protobuf.StringValue phone_num_col = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getPhoneNumCol = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
*/
proto.api.v0alpha.SmsTaskInfoRes.prototype.setPhoneNumCol = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.clearPhoneNumCol = function() {
  return this.setPhoneNumCol(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.hasPhoneNumCol = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 units = 11;
 * @return {number}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.setUnits = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional google.protobuf.Int64Value sms_task_parent = 12;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getSmsTaskParent = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 12));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
*/
proto.api.v0alpha.SmsTaskInfoRes.prototype.setSmsTaskParent = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.clearSmsTaskParent = function() {
  return this.setSmsTaskParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.hasSmsTaskParent = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MamAgentResponse mam_agent_response = 13;
 * @return {?proto.api.v0alpha.MamAgentResponse}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.getMamAgentResponse = function() {
  return /** @type{?proto.api.v0alpha.MamAgentResponse} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.MamAgentResponse, 13));
};


/**
 * @param {?proto.api.v0alpha.MamAgentResponse|undefined} value
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
*/
proto.api.v0alpha.SmsTaskInfoRes.prototype.setMamAgentResponse = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsTaskInfoRes} returns this
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.clearMamAgentResponse = function() {
  return this.setMamAgentResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsTaskInfoRes.prototype.hasMamAgentResponse = function() {
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
proto.api.v0alpha.SmsReceivedReplies.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsReceivedReplies.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsReceivedReplies} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsReceivedReplies.toObject = function(includeInstance, msg) {
  var f, obj = {
smsReceivedRepliesSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
smsTaskSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
srcNumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
dstNumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
msgUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
receivedReply: jspb.Message.getFieldWithDefault(msg, 6, ""),
receivedTime: (f = msg.getReceivedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
analysisReport: jspb.Message.getFieldWithDefault(msg, 8, ""),
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 9, ""),
cost: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
status: jspb.Message.getFieldWithDefault(msg, 11, 0),
units: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsReceivedReplies}
 */
proto.api.v0alpha.SmsReceivedReplies.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsReceivedReplies;
  return proto.api.v0alpha.SmsReceivedReplies.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsReceivedReplies} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsReceivedReplies}
 */
proto.api.v0alpha.SmsReceivedReplies.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsReceivedRepliesSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTaskSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstNumber(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceivedReply(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReceivedTime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalysisReport(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCost(value);
      break;
    case 11:
      var value = /** @type {!proto.api.commons.SMSIBTaskStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsReceivedReplies.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsReceivedReplies} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsReceivedReplies.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsReceivedRepliesSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSmsTaskSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSrcNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDstNumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMsgUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReceivedReply();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getReceivedTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAnalysisReport();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCost();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
};


/**
 * optional int64 sms_received_replies_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getSmsReceivedRepliesSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setSmsReceivedRepliesSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 sms_task_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getSmsTaskSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setSmsTaskSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string src_number = 3;
 * @return {string}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getSrcNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setSrcNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string dst_number = 4;
 * @return {string}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getDstNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setDstNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string msg_uuid = 5;
 * @return {string}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getMsgUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setMsgUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string received_reply = 6;
 * @return {string}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getReceivedReply = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setReceivedReply = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp received_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getReceivedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
*/
proto.api.v0alpha.SmsReceivedReplies.prototype.setReceivedTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.clearReceivedTime = function() {
  return this.setReceivedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.hasReceivedTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string analysis_report = 8;
 * @return {string}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getAnalysisReport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setAnalysisReport = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string inbound_sms_group_id = 9;
 * @return {string}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setInboundSmsGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional double cost = 10;
 * @return {number}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional api.commons.SMSIBTaskStatus status = 11;
 * @return {!proto.api.commons.SMSIBTaskStatus}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.SMSIBTaskStatus} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.api.commons.SMSIBTaskStatus} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional int64 units = 12;
 * @return {number}
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.getUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsReceivedReplies} returns this
 */
proto.api.v0alpha.SmsReceivedReplies.prototype.setUnits = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateSmsGroupRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSmsGroupRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSmsGroupRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsGroupRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateSmsGroupRes}
 */
proto.api.v0alpha.UpdateSmsGroupRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSmsGroupRes;
  return proto.api.v0alpha.UpdateSmsGroupRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSmsGroupRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSmsGroupRes}
 */
proto.api.v0alpha.UpdateSmsGroupRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateSmsGroupRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSmsGroupRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSmsGroupRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsGroupRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateSmsGroupRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateSmsGroupRes} returns this
 */
proto.api.v0alpha.UpdateSmsGroupRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.ScheduleSmsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScheduleSmsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScheduleSmsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScheduleSmsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsTemplateSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
initialPace: jspb.Message.getFieldWithDefault(msg, 2, 0),
selectedPhoneCol: jspb.Message.getFieldWithDefault(msg, 3, ""),
sourceNumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
countrySid: jspb.Message.getFieldWithDefault(msg, 5, 0),
timezoneRestrictions: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
groupName: jspb.Message.getFieldWithDefault(msg, 7, ""),
contactGroupSid: jspb.Message.getFieldWithDefault(msg, 8, 0),
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
stopTime: (f = msg.getStopTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
selectedMamHuntGroup: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScheduleSmsReq}
 */
proto.api.v0alpha.ScheduleSmsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScheduleSmsReq;
  return proto.api.v0alpha.ScheduleSmsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScheduleSmsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScheduleSmsReq}
 */
proto.api.v0alpha.ScheduleSmsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTemplateSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitialPace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelectedPhoneCol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceNumber(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountrySid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTimezoneRestrictions(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContactGroupSid(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStopTime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelectedMamHuntGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScheduleSmsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScheduleSmsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScheduleSmsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInitialPace();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSelectedPhoneCol();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSourceNumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCountrySid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTimezoneRestrictions();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getContactGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStopTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSelectedMamHuntGroup();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional int64 sms_template_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getSmsTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setSmsTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 initial_pace = 2;
 * @return {number}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getInitialPace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setInitialPace = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string selected_phone_col = 3;
 * @return {string}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getSelectedPhoneCol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setSelectedPhoneCol = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string source_number = 4;
 * @return {string}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getSourceNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setSourceNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 country_sid = 5;
 * @return {number}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getCountrySid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setCountrySid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool timezone_restrictions = 6;
 * @return {boolean}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getTimezoneRestrictions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setTimezoneRestrictions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string group_name = 7;
 * @return {string}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 contact_group_sid = 8;
 * @return {number}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getContactGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setContactGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
*/
proto.api.v0alpha.ScheduleSmsReq.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp stop_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getStopTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
*/
proto.api.v0alpha.ScheduleSmsReq.prototype.setStopTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.clearStopTime = function() {
  return this.setStopTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.hasStopTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string selected_mam_hunt_group = 11;
 * @return {string}
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.getSelectedMamHuntGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScheduleSmsReq} returns this
 */
proto.api.v0alpha.ScheduleSmsReq.prototype.setSelectedMamHuntGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ScheduleSmsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScheduleSmsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScheduleSmsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScheduleSmsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScheduleSmsRes}
 */
proto.api.v0alpha.ScheduleSmsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScheduleSmsRes;
  return proto.api.v0alpha.ScheduleSmsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScheduleSmsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScheduleSmsRes}
 */
proto.api.v0alpha.ScheduleSmsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsGroupSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScheduleSmsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScheduleSmsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScheduleSmsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScheduleSmsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sms_group_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.ScheduleSmsRes.prototype.getSmsGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScheduleSmsRes} returns this
 */
proto.api.v0alpha.ScheduleSmsRes.prototype.setSmsGroupSid = function(value) {
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
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ResendUnconnectedSmsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ResendUnconnectedSmsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
stopTime: (f = msg.getStopTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsReq}
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ResendUnconnectedSmsReq;
  return proto.api.v0alpha.ResendUnconnectedSmsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ResendUnconnectedSmsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsReq}
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsGroupSid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStopTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ResendUnconnectedSmsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ResendUnconnectedSmsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStopTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sms_group_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.getSmsGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsReq} returns this
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.setSmsGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsReq} returns this
*/
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsReq} returns this
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp stop_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.getStopTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsReq} returns this
*/
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.setStopTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsReq} returns this
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.clearStopTime = function() {
  return this.setStopTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ResendUnconnectedSmsReq.prototype.hasStopTime = function() {
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
proto.api.v0alpha.ResendUnconnectedSmsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ResendUnconnectedSmsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ResendUnconnectedSmsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResendUnconnectedSmsRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsRes}
 */
proto.api.v0alpha.ResendUnconnectedSmsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ResendUnconnectedSmsRes;
  return proto.api.v0alpha.ResendUnconnectedSmsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ResendUnconnectedSmsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsRes}
 */
proto.api.v0alpha.ResendUnconnectedSmsRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ResendUnconnectedSmsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ResendUnconnectedSmsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ResendUnconnectedSmsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ResendUnconnectedSmsRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.ResendUnconnectedSmsRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ResendUnconnectedSmsRes} returns this
 */
proto.api.v0alpha.ResendUnconnectedSmsRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.SmsActivitySearchReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsActivitySearchReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsActivitySearchReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsActivitySearchReq.toObject = function(includeInstance, msg) {
  var f, obj = {
toNumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
srcNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
fromDate: (f = msg.getFromDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
toDate: (f = msg.getToDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
entireHistory: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
sentOnly: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsActivitySearchReq}
 */
proto.api.v0alpha.SmsActivitySearchReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsActivitySearchReq;
  return proto.api.v0alpha.SmsActivitySearchReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsActivitySearchReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsActivitySearchReq}
 */
proto.api.v0alpha.SmsActivitySearchReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcNumber(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromDate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToDate(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEntireHistory(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSentOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsActivitySearchReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsActivitySearchReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsActivitySearchReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSrcNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEntireHistory();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getSentOnly();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string to_number = 1;
 * @return {string}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.getToNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsActivitySearchReq} returns this
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.setToNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string src_number = 2;
 * @return {string}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.getSrcNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsActivitySearchReq} returns this
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.setSrcNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp from_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.getFromDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsActivitySearchReq} returns this
*/
proto.api.v0alpha.SmsActivitySearchReq.prototype.setFromDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsActivitySearchReq} returns this
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.clearFromDate = function() {
  return this.setFromDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.hasFromDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp to_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.getToDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsActivitySearchReq} returns this
*/
proto.api.v0alpha.SmsActivitySearchReq.prototype.setToDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsActivitySearchReq} returns this
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.clearToDate = function() {
  return this.setToDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.hasToDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool entire_history = 5;
 * @return {boolean}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.getEntireHistory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.SmsActivitySearchReq} returns this
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.setEntireHistory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool sent_only = 6;
 * @return {boolean}
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.getSentOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.SmsActivitySearchReq} returns this
 */
proto.api.v0alpha.SmsActivitySearchReq.prototype.setSentOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SmsActivitySearchRes.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsActivitySearchRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsActivitySearchRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsActivitySearchRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsActivitySearchRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupWithIntentsList: jspb.Message.toObjectList(msg.getSmsGroupWithIntentsList(),
    proto.api.v0alpha.SmsGroupWithIntents.toObject, includeInstance),
smsTaskInfoResList: jspb.Message.toObjectList(msg.getSmsTaskInfoResList(),
    proto.api.v0alpha.SmsTaskInfoRes.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsActivitySearchRes}
 */
proto.api.v0alpha.SmsActivitySearchRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsActivitySearchRes;
  return proto.api.v0alpha.SmsActivitySearchRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsActivitySearchRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsActivitySearchRes}
 */
proto.api.v0alpha.SmsActivitySearchRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsGroupWithIntents;
      reader.readMessage(value,proto.api.v0alpha.SmsGroupWithIntents.deserializeBinaryFromReader);
      msg.addSmsGroupWithIntents(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.SmsTaskInfoRes;
      reader.readMessage(value,proto.api.v0alpha.SmsTaskInfoRes.deserializeBinaryFromReader);
      msg.addSmsTaskInfoRes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsActivitySearchRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsActivitySearchRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsActivitySearchRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsActivitySearchRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsGroupWithIntents.serializeBinaryToWriter
    );
  }
  f = message.getSmsTaskInfoResList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.SmsTaskInfoRes.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsGroupWithIntents sms_group_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.SmsGroupWithIntents>}
 */
proto.api.v0alpha.SmsActivitySearchRes.prototype.getSmsGroupWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsGroupWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsGroupWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsGroupWithIntents>} value
 * @return {!proto.api.v0alpha.SmsActivitySearchRes} returns this
*/
proto.api.v0alpha.SmsActivitySearchRes.prototype.setSmsGroupWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsGroupWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsGroupWithIntents}
 */
proto.api.v0alpha.SmsActivitySearchRes.prototype.addSmsGroupWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsGroupWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SmsActivitySearchRes} returns this
 */
proto.api.v0alpha.SmsActivitySearchRes.prototype.clearSmsGroupWithIntentsList = function() {
  return this.setSmsGroupWithIntentsList([]);
};


/**
 * repeated SmsTaskInfoRes sms_task_info_res = 2;
 * @return {!Array<!proto.api.v0alpha.SmsTaskInfoRes>}
 */
proto.api.v0alpha.SmsActivitySearchRes.prototype.getSmsTaskInfoResList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsTaskInfoRes>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsTaskInfoRes, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsTaskInfoRes>} value
 * @return {!proto.api.v0alpha.SmsActivitySearchRes} returns this
*/
proto.api.v0alpha.SmsActivitySearchRes.prototype.setSmsTaskInfoResList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.SmsTaskInfoRes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsTaskInfoRes}
 */
proto.api.v0alpha.SmsActivitySearchRes.prototype.addSmsTaskInfoRes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.SmsTaskInfoRes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SmsActivitySearchRes} returns this
 */
proto.api.v0alpha.SmsActivitySearchRes.prototype.clearSmsTaskInfoResList = function() {
  return this.setSmsTaskInfoResList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.InboundSmsTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.InboundSmsTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 1, ""),
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
reportSettings: (f = msg.getReportSettings()) && proto.api.v0alpha.ReportSettings.toObject(includeInstance, f),
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
 * @return {!proto.api.v0alpha.InboundSmsTemplate}
 */
proto.api.v0alpha.InboundSmsTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.InboundSmsTemplate;
  return proto.api.v0alpha.InboundSmsTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.InboundSmsTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.InboundSmsTemplate}
 */
proto.api.v0alpha.InboundSmsTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.api.v0alpha.ReportSettings;
      reader.readMessage(value,proto.api.v0alpha.ReportSettings.deserializeBinaryFromReader);
      msg.setReportSettings(value);
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
proto.api.v0alpha.InboundSmsTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.InboundSmsTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.InboundSmsTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmsNumberSid();
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
  f = message.getReportSettings();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v0alpha.ReportSettings.serializeBinaryToWriter
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
 * optional string inbound_sms_template_id = 1;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsTemplate} returns this
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.setInboundSmsTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 sms_number_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.InboundSmsTemplate} returns this
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsTemplate} returns this
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ReportSettings report_settings = 4;
 * @return {?proto.api.v0alpha.ReportSettings}
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.getReportSettings = function() {
  return /** @type{?proto.api.v0alpha.ReportSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ReportSettings, 4));
};


/**
 * @param {?proto.api.v0alpha.ReportSettings|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsTemplate} returns this
*/
proto.api.v0alpha.InboundSmsTemplate.prototype.setReportSettings = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsTemplate} returns this
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.clearReportSettings = function() {
  return this.setReportSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.hasReportSettings = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsTemplate} returns this
*/
proto.api.v0alpha.InboundSmsTemplate.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsTemplate} returns this
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsTemplate.prototype.hasLastUpdated = function() {
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
proto.api.v0alpha.ListInboundSmsTemplatesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsTemplatesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsTemplatesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsTemplatesReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListInboundSmsTemplatesReq}
 */
proto.api.v0alpha.ListInboundSmsTemplatesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsTemplatesReq;
  return proto.api.v0alpha.ListInboundSmsTemplatesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsTemplatesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsTemplatesReq}
 */
proto.api.v0alpha.ListInboundSmsTemplatesReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListInboundSmsTemplatesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsTemplatesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsTemplatesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsTemplatesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsTemplatesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsTemplatesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplateWithIntentsList: jspb.Message.toObjectList(msg.getInboundSmsTemplateWithIntentsList(),
    proto.api.v0alpha.InboundSmsTemplateWithIntents.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListInboundSmsTemplatesRes}
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsTemplatesRes;
  return proto.api.v0alpha.ListInboundSmsTemplatesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsTemplatesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsTemplatesRes}
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsTemplateWithIntents;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsTemplateWithIntents.deserializeBinaryFromReader);
      msg.addInboundSmsTemplateWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsTemplatesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsTemplatesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplateWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsTemplateWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InboundSmsTemplateWithIntents inbound_sms_template_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.InboundSmsTemplateWithIntents>}
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.prototype.getInboundSmsTemplateWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.InboundSmsTemplateWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.InboundSmsTemplateWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.InboundSmsTemplateWithIntents>} value
 * @return {!proto.api.v0alpha.ListInboundSmsTemplatesRes} returns this
*/
proto.api.v0alpha.ListInboundSmsTemplatesRes.prototype.setInboundSmsTemplateWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.InboundSmsTemplateWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.InboundSmsTemplateWithIntents}
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.prototype.addInboundSmsTemplateWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.InboundSmsTemplateWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListInboundSmsTemplatesRes} returns this
 */
proto.api.v0alpha.ListInboundSmsTemplatesRes.prototype.clearInboundSmsTemplateWithIntentsList = function() {
  return this.setInboundSmsTemplateWithIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.InboundSmsTemplateWithIntents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.InboundSmsTemplateWithIntents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplate: (f = msg.getInboundSmsTemplate()) && proto.api.v0alpha.InboundSmsTemplate.toObject(includeInstance, f),
smsIntentTemplatesList: jspb.Message.toObjectList(msg.getSmsIntentTemplatesList(),
    proto.api.v0alpha.SmsIntentTemplate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.InboundSmsTemplateWithIntents}
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.InboundSmsTemplateWithIntents;
  return proto.api.v0alpha.InboundSmsTemplateWithIntents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.InboundSmsTemplateWithIntents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.InboundSmsTemplateWithIntents}
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsTemplate;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsTemplate.deserializeBinaryFromReader);
      msg.setInboundSmsTemplate(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.SmsIntentTemplate;
      reader.readMessage(value,proto.api.v0alpha.SmsIntentTemplate.deserializeBinaryFromReader);
      msg.addSmsIntentTemplates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.InboundSmsTemplateWithIntents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.InboundSmsTemplateWithIntents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsTemplate.serializeBinaryToWriter
    );
  }
  f = message.getSmsIntentTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.SmsIntentTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional InboundSmsTemplate inbound_sms_template = 1;
 * @return {?proto.api.v0alpha.InboundSmsTemplate}
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.getInboundSmsTemplate = function() {
  return /** @type{?proto.api.v0alpha.InboundSmsTemplate} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.InboundSmsTemplate, 1));
};


/**
 * @param {?proto.api.v0alpha.InboundSmsTemplate|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsTemplateWithIntents} returns this
*/
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.setInboundSmsTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsTemplateWithIntents} returns this
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.clearInboundSmsTemplate = function() {
  return this.setInboundSmsTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.hasInboundSmsTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SmsIntentTemplate sms_intent_templates = 2;
 * @return {!Array<!proto.api.v0alpha.SmsIntentTemplate>}
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.getSmsIntentTemplatesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsIntentTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsIntentTemplate, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsIntentTemplate>} value
 * @return {!proto.api.v0alpha.InboundSmsTemplateWithIntents} returns this
*/
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.setSmsIntentTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.SmsIntentTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsIntentTemplate}
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.addSmsIntentTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.SmsIntentTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.InboundSmsTemplateWithIntents} returns this
 */
proto.api.v0alpha.InboundSmsTemplateWithIntents.prototype.clearSmsIntentTemplatesList = function() {
  return this.setSmsIntentTemplatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateInboundSmsTemplateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 1, ""),
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
smsIntentTemplateSidList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
reportSettings: (f = msg.getReportSettings()) && proto.api.v0alpha.ReportSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateInboundSmsTemplateReq;
  return proto.api.v0alpha.UpdateInboundSmsTemplateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSmsIntentTemplateSid(values[i]);
      }
      break;
    case 7:
      var value = new proto.api.v0alpha.ReportSettings;
      reader.readMessage(value,proto.api.v0alpha.ReportSettings.deserializeBinaryFromReader);
      msg.setReportSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateInboundSmsTemplateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmsNumberSid();
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
  f = message.getSmsIntentTemplateSidList();
  if (f.length > 0) {
    writer.writePackedInt64(
      6,
      f
    );
  }
  f = message.getReportSettings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.v0alpha.ReportSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional string inbound_sms_template_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.setInboundSmsTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 sms_number_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated int64 sms_intent_template_sid = 6;
 * @return {!Array<number>}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.getSmsIntentTemplateSidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.setSmsIntentTemplateSidList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.addSmsIntentTemplateSid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.clearSmsIntentTemplateSidList = function() {
  return this.setSmsIntentTemplateSidList([]);
};


/**
 * optional ReportSettings report_settings = 7;
 * @return {?proto.api.v0alpha.ReportSettings}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.getReportSettings = function() {
  return /** @type{?proto.api.v0alpha.ReportSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ReportSettings, 7));
};


/**
 * @param {?proto.api.v0alpha.ReportSettings|undefined} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} returns this
*/
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.setReportSettings = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.clearReportSettings = function() {
  return this.setReportSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateReq.prototype.hasReportSettings = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateInboundSmsTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateInboundSmsTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateInboundSmsTemplateRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateRes}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateInboundSmsTemplateRes;
  return proto.api.v0alpha.UpdateInboundSmsTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateInboundSmsTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateRes}
 */
proto.api.v0alpha.UpdateInboundSmsTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateInboundSmsTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateInboundSmsTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateInboundSmsTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateInboundSmsTemplateRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateInboundSmsTemplateRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsTemplateRes} returns this
 */
proto.api.v0alpha.UpdateInboundSmsTemplateRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.DeleteInboundSmsTemplateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteInboundSmsTemplateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteInboundSmsTemplateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteInboundSmsTemplateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteInboundSmsTemplateReq}
 */
proto.api.v0alpha.DeleteInboundSmsTemplateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteInboundSmsTemplateReq;
  return proto.api.v0alpha.DeleteInboundSmsTemplateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteInboundSmsTemplateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteInboundSmsTemplateReq}
 */
proto.api.v0alpha.DeleteInboundSmsTemplateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteInboundSmsTemplateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteInboundSmsTemplateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteInboundSmsTemplateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteInboundSmsTemplateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string inbound_sms_template_id = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteInboundSmsTemplateReq.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.DeleteInboundSmsTemplateReq.prototype.setInboundSmsTemplateId = function(value) {
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
proto.api.v0alpha.DeleteInboundSmsTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteInboundSmsTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteInboundSmsTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteInboundSmsTemplateRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteInboundSmsTemplateRes}
 */
proto.api.v0alpha.DeleteInboundSmsTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteInboundSmsTemplateRes;
  return proto.api.v0alpha.DeleteInboundSmsTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteInboundSmsTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteInboundSmsTemplateRes}
 */
proto.api.v0alpha.DeleteInboundSmsTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteInboundSmsTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteInboundSmsTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteInboundSmsTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteInboundSmsTemplateRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DeleteInboundSmsTemplateRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.DeleteInboundSmsTemplateRes} returns this
 */
proto.api.v0alpha.DeleteInboundSmsTemplateRes.prototype.setResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateInboundSmsTemplateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateInboundSmsTemplateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
smsIntentTemplateSidList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
reportSettings: (f = msg.getReportSettings()) && proto.api.v0alpha.ReportSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateInboundSmsTemplateReq;
  return proto.api.v0alpha.CreateInboundSmsTemplateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateInboundSmsTemplateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSmsIntentTemplateSid(values[i]);
      }
      break;
    case 6:
      var value = new proto.api.v0alpha.ReportSettings;
      reader.readMessage(value,proto.api.v0alpha.ReportSettings.deserializeBinaryFromReader);
      msg.setReportSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateInboundSmsTemplateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateInboundSmsTemplateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumberSid();
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
  f = message.getSmsIntentTemplateSidList();
  if (f.length > 0) {
    writer.writePackedInt64(
      5,
      f
    );
  }
  f = message.getReportSettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v0alpha.ReportSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sms_number_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 sms_intent_template_sid = 5;
 * @return {!Array<number>}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.getSmsIntentTemplateSidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.setSmsIntentTemplateSidList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.addSmsIntentTemplateSid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.clearSmsIntentTemplateSidList = function() {
  return this.setSmsIntentTemplateSidList([]);
};


/**
 * optional ReportSettings report_settings = 6;
 * @return {?proto.api.v0alpha.ReportSettings}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.getReportSettings = function() {
  return /** @type{?proto.api.v0alpha.ReportSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ReportSettings, 6));
};


/**
 * @param {?proto.api.v0alpha.ReportSettings|undefined} value
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq} returns this
*/
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.setReportSettings = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.clearReportSettings = function() {
  return this.setReportSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateInboundSmsTemplateReq.prototype.hasReportSettings = function() {
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
proto.api.v0alpha.CreateInboundSmsTemplateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateInboundSmsTemplateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateInboundSmsTemplateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateInboundSmsTemplateRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateRes}
 */
proto.api.v0alpha.CreateInboundSmsTemplateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateInboundSmsTemplateRes;
  return proto.api.v0alpha.CreateInboundSmsTemplateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateInboundSmsTemplateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateRes}
 */
proto.api.v0alpha.CreateInboundSmsTemplateRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateInboundSmsTemplateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateInboundSmsTemplateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateInboundSmsTemplateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateInboundSmsTemplateRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string inbound_sms_template_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateInboundSmsTemplateRes.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateInboundSmsTemplateRes} returns this
 */
proto.api.v0alpha.CreateInboundSmsTemplateRes.prototype.setInboundSmsTemplateId = function(value) {
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
proto.api.v0alpha.GetInboundSmsTemplateByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetInboundSmsTemplateByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetInboundSmsTemplateByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdReq}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetInboundSmsTemplateByIdReq;
  return proto.api.v0alpha.GetInboundSmsTemplateByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetInboundSmsTemplateByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdReq}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetInboundSmsTemplateByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetInboundSmsTemplateByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string inbound_sms_template_id = 3;
 * @return {string}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdReq.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdReq} returns this
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdReq.prototype.setInboundSmsTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetInboundSmsTemplateByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplate: (f = msg.getInboundSmsTemplate()) && proto.api.v0alpha.InboundSmsTemplate.toObject(includeInstance, f),
smsIntentTemplatesList: jspb.Message.toObjectList(msg.getSmsIntentTemplatesList(),
    proto.api.v0alpha.SmsIntentTemplate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetInboundSmsTemplateByIdRes;
  return proto.api.v0alpha.GetInboundSmsTemplateByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsTemplate;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsTemplate.deserializeBinaryFromReader);
      msg.setInboundSmsTemplate(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.SmsIntentTemplate;
      reader.readMessage(value,proto.api.v0alpha.SmsIntentTemplate.deserializeBinaryFromReader);
      msg.addSmsIntentTemplates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetInboundSmsTemplateByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsTemplate.serializeBinaryToWriter
    );
  }
  f = message.getSmsIntentTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.SmsIntentTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional InboundSmsTemplate inbound_sms_template = 1;
 * @return {?proto.api.v0alpha.InboundSmsTemplate}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.getInboundSmsTemplate = function() {
  return /** @type{?proto.api.v0alpha.InboundSmsTemplate} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.InboundSmsTemplate, 1));
};


/**
 * @param {?proto.api.v0alpha.InboundSmsTemplate|undefined} value
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes} returns this
*/
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.setInboundSmsTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes} returns this
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.clearInboundSmsTemplate = function() {
  return this.setInboundSmsTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.hasInboundSmsTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SmsIntentTemplate sms_intent_templates = 2;
 * @return {!Array<!proto.api.v0alpha.SmsIntentTemplate>}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.getSmsIntentTemplatesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsIntentTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsIntentTemplate, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsIntentTemplate>} value
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes} returns this
*/
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.setSmsIntentTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.SmsIntentTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsIntentTemplate}
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.addSmsIntentTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.SmsIntentTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.GetInboundSmsTemplateByIdRes} returns this
 */
proto.api.v0alpha.GetInboundSmsTemplateByIdRes.prototype.clearSmsIntentTemplatesList = function() {
  return this.setSmsIntentTemplatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.InboundSmsGroupWithIntents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.InboundSmsGroupWithIntents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroup: (f = msg.getInboundSmsGroup()) && proto.api.v0alpha.InboundSmsGroup.toObject(includeInstance, f),
smsIntentTemplatesList: jspb.Message.toObjectList(msg.getSmsIntentTemplatesList(),
    proto.api.v0alpha.SmsIntentTemplate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents}
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.InboundSmsGroupWithIntents;
  return proto.api.v0alpha.InboundSmsGroupWithIntents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.InboundSmsGroupWithIntents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents}
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsGroup;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsGroup.deserializeBinaryFromReader);
      msg.setInboundSmsGroup(value);
      break;
    case 2:
      var value = new proto.api.v0alpha.SmsIntentTemplate;
      reader.readMessage(value,proto.api.v0alpha.SmsIntentTemplate.deserializeBinaryFromReader);
      msg.addSmsIntentTemplates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.InboundSmsGroupWithIntents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.InboundSmsGroupWithIntents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsGroup.serializeBinaryToWriter
    );
  }
  f = message.getSmsIntentTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.v0alpha.SmsIntentTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional InboundSmsGroup inbound_sms_group = 1;
 * @return {?proto.api.v0alpha.InboundSmsGroup}
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.getInboundSmsGroup = function() {
  return /** @type{?proto.api.v0alpha.InboundSmsGroup} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.InboundSmsGroup, 1));
};


/**
 * @param {?proto.api.v0alpha.InboundSmsGroup|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents} returns this
*/
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.setInboundSmsGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents} returns this
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.clearInboundSmsGroup = function() {
  return this.setInboundSmsGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.hasInboundSmsGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SmsIntentTemplate sms_intent_templates = 2;
 * @return {!Array<!proto.api.v0alpha.SmsIntentTemplate>}
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.getSmsIntentTemplatesList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsIntentTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsIntentTemplate, 2));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsIntentTemplate>} value
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents} returns this
*/
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.setSmsIntentTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.v0alpha.SmsIntentTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsIntentTemplate}
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.addSmsIntentTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.v0alpha.SmsIntentTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents} returns this
 */
proto.api.v0alpha.InboundSmsGroupWithIntents.prototype.clearSmsIntentTemplatesList = function() {
  return this.setSmsIntentTemplatesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.InboundSmsGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.InboundSmsGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
status: jspb.Message.getFieldWithDefault(msg, 4, 0),
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
stopTime: (f = msg.getStopTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
totalCost: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 8, ""),
messageCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
todaysMessageCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
reportSettings: (f = msg.getReportSettings()) && proto.api.v0alpha.ReportSettings.toObject(includeInstance, f),
dateCreated: (f = msg.getDateCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.InboundSmsGroup}
 */
proto.api.v0alpha.InboundSmsGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.InboundSmsGroup;
  return proto.api.v0alpha.InboundSmsGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.InboundSmsGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.InboundSmsGroup}
 */
proto.api.v0alpha.InboundSmsGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.SMSIBGroupStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStopTime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalCost(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessageCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTodaysMessageCount(value);
      break;
    case 11:
      var value = new proto.api.v0alpha.ReportSettings;
      reader.readMessage(value,proto.api.v0alpha.ReportSettings.deserializeBinaryFromReader);
      msg.setReportSettings(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.InboundSmsGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.InboundSmsGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmsNumberSid();
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
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStopTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTotalCost();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMessageCount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getTodaysMessageCount();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getReportSettings();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v0alpha.ReportSettings.serializeBinaryToWriter
    );
  }
  f = message.getDateCreated();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string inbound_sms_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.setInboundSmsGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 sms_number_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.SMSIBGroupStatus status = 4;
 * @return {!proto.api.commons.SMSIBGroupStatus}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.SMSIBGroupStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.SMSIBGroupStatus} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
*/
proto.api.v0alpha.InboundSmsGroup.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp stop_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getStopTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
*/
proto.api.v0alpha.InboundSmsGroup.prototype.setStopTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.clearStopTime = function() {
  return this.setStopTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.hasStopTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double total_cost = 7;
 * @return {number}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getTotalCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.setTotalCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string inbound_sms_template_id = 8;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.setInboundSmsTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 message_count = 9;
 * @return {number}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getMessageCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.setMessageCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 todays_message_count = 10;
 * @return {number}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getTodaysMessageCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.setTodaysMessageCount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional ReportSettings report_settings = 11;
 * @return {?proto.api.v0alpha.ReportSettings}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getReportSettings = function() {
  return /** @type{?proto.api.v0alpha.ReportSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ReportSettings, 11));
};


/**
 * @param {?proto.api.v0alpha.ReportSettings|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
*/
proto.api.v0alpha.InboundSmsGroup.prototype.setReportSettings = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.clearReportSettings = function() {
  return this.setReportSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.hasReportSettings = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp date_created = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.getDateCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
*/
proto.api.v0alpha.InboundSmsGroup.prototype.setDateCreated = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsGroup} returns this
 */
proto.api.v0alpha.InboundSmsGroup.prototype.clearDateCreated = function() {
  return this.setDateCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsGroup.prototype.hasDateCreated = function() {
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
proto.api.v0alpha.ListInboundSmsGroupsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsGroupsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsReq}
 */
proto.api.v0alpha.ListInboundSmsGroupsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsGroupsReq;
  return proto.api.v0alpha.ListInboundSmsGroupsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsReq}
 */
proto.api.v0alpha.ListInboundSmsGroupsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListInboundSmsGroupsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsGroupsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsGroupsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupWithIntentsList: jspb.Message.toObjectList(msg.getInboundSmsGroupWithIntentsList(),
    proto.api.v0alpha.InboundSmsGroupWithIntents.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsRes}
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsGroupsRes;
  return proto.api.v0alpha.ListInboundSmsGroupsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsRes}
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsGroupWithIntents;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsGroupWithIntents.deserializeBinaryFromReader);
      msg.addInboundSmsGroupWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsGroupsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsGroupWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InboundSmsGroupWithIntents inbound_sms_group_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>}
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.prototype.getInboundSmsGroupWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.InboundSmsGroupWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>} value
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsRes} returns this
*/
proto.api.v0alpha.ListInboundSmsGroupsRes.prototype.setInboundSmsGroupWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.InboundSmsGroupWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents}
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.prototype.addInboundSmsGroupWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.InboundSmsGroupWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsRes} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupsRes.prototype.clearInboundSmsGroupWithIntentsList = function() {
  return this.setInboundSmsGroupWithIntentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateInboundSmsGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateInboundSmsGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
status: jspb.Message.getFieldWithDefault(msg, 6, 0),
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
stopTime: (f = msg.getStopTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
totalCost: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 10, ""),
reportSettings: (f = msg.getReportSettings()) && proto.api.v0alpha.ReportSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateInboundSmsGroupReq;
  return proto.api.v0alpha.UpdateInboundSmsGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateInboundSmsGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {!proto.api.commons.SMSIBGroupStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStopTime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalCost(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    case 11:
      var value = new proto.api.v0alpha.ReportSettings;
      reader.readMessage(value,proto.api.v0alpha.ReportSettings.deserializeBinaryFromReader);
      msg.setReportSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateInboundSmsGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateInboundSmsGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmsNumberSid();
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
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStopTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTotalCost();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getReportSettings();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.api.v0alpha.ReportSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional string inbound_sms_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setInboundSmsGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 sms_number_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.SMSIBGroupStatus status = 6;
 * @return {!proto.api.commons.SMSIBGroupStatus}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.SMSIBGroupStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.api.commons.SMSIBGroupStatus} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
*/
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp stop_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getStopTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
*/
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setStopTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.clearStopTime = function() {
  return this.setStopTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.hasStopTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double total_cost = 9;
 * @return {number}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getTotalCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setTotalCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional string inbound_sms_template_id = 10;
 * @return {string}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setInboundSmsTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional ReportSettings report_settings = 11;
 * @return {?proto.api.v0alpha.ReportSettings}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.getReportSettings = function() {
  return /** @type{?proto.api.v0alpha.ReportSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ReportSettings, 11));
};


/**
 * @param {?proto.api.v0alpha.ReportSettings|undefined} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
*/
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.setReportSettings = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.clearReportSettings = function() {
  return this.setReportSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateInboundSmsGroupReq.prototype.hasReportSettings = function() {
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
proto.api.v0alpha.UpdateInboundSmsGroupRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateInboundSmsGroupRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateInboundSmsGroupRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateInboundSmsGroupRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupRes}
 */
proto.api.v0alpha.UpdateInboundSmsGroupRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateInboundSmsGroupRes;
  return proto.api.v0alpha.UpdateInboundSmsGroupRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateInboundSmsGroupRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupRes}
 */
proto.api.v0alpha.UpdateInboundSmsGroupRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateInboundSmsGroupRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateInboundSmsGroupRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateInboundSmsGroupRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateInboundSmsGroupRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateInboundSmsGroupRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateInboundSmsGroupRes} returns this
 */
proto.api.v0alpha.UpdateInboundSmsGroupRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.DeleteInboundSmsGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteInboundSmsGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteInboundSmsGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteInboundSmsGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteInboundSmsGroupReq}
 */
proto.api.v0alpha.DeleteInboundSmsGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteInboundSmsGroupReq;
  return proto.api.v0alpha.DeleteInboundSmsGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteInboundSmsGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteInboundSmsGroupReq}
 */
proto.api.v0alpha.DeleteInboundSmsGroupReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteInboundSmsGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteInboundSmsGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteInboundSmsGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteInboundSmsGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string inbound_sms_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteInboundSmsGroupReq.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.DeleteInboundSmsGroupReq.prototype.setInboundSmsGroupId = function(value) {
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
proto.api.v0alpha.DeleteInboundSmsGroupRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteInboundSmsGroupRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteInboundSmsGroupRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteInboundSmsGroupRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteInboundSmsGroupRes}
 */
proto.api.v0alpha.DeleteInboundSmsGroupRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteInboundSmsGroupRes;
  return proto.api.v0alpha.DeleteInboundSmsGroupRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteInboundSmsGroupRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteInboundSmsGroupRes}
 */
proto.api.v0alpha.DeleteInboundSmsGroupRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteInboundSmsGroupRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteInboundSmsGroupRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteInboundSmsGroupRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteInboundSmsGroupRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DeleteInboundSmsGroupRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.DeleteInboundSmsGroupRes} returns this
 */
proto.api.v0alpha.DeleteInboundSmsGroupRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateInboundSmsGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateInboundSmsGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: jspb.Message.getFieldWithDefault(msg, 5, 0),
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
stopTime: (f = msg.getStopTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
totalCost: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 9, ""),
reportSettings: (f = msg.getReportSettings()) && proto.api.v0alpha.ReportSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateInboundSmsGroupReq;
  return proto.api.v0alpha.CreateInboundSmsGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateInboundSmsGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.SMSIBGroupStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStopTime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalCost(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    case 10:
      var value = new proto.api.v0alpha.ReportSettings;
      reader.readMessage(value,proto.api.v0alpha.ReportSettings.deserializeBinaryFromReader);
      msg.setReportSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateInboundSmsGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateInboundSmsGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsNumberSid();
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
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStopTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTotalCost();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getReportSettings();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.api.v0alpha.ReportSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sms_number_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.SMSIBGroupStatus status = 5;
 * @return {!proto.api.commons.SMSIBGroupStatus}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.SMSIBGroupStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.SMSIBGroupStatus} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
*/
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp stop_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.getStopTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
*/
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.setStopTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.clearStopTime = function() {
  return this.setStopTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.hasStopTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double total_cost = 8;
 * @return {number}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.getTotalCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.setTotalCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string inbound_sms_template_id = 9;
 * @return {string}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.setInboundSmsTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional ReportSettings report_settings = 10;
 * @return {?proto.api.v0alpha.ReportSettings}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.getReportSettings = function() {
  return /** @type{?proto.api.v0alpha.ReportSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.ReportSettings, 10));
};


/**
 * @param {?proto.api.v0alpha.ReportSettings|undefined} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
*/
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.setReportSettings = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.clearReportSettings = function() {
  return this.setReportSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateInboundSmsGroupReq.prototype.hasReportSettings = function() {
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
proto.api.v0alpha.CreateInboundSmsGroupRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateInboundSmsGroupRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateInboundSmsGroupRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateInboundSmsGroupRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupRes}
 */
proto.api.v0alpha.CreateInboundSmsGroupRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateInboundSmsGroupRes;
  return proto.api.v0alpha.CreateInboundSmsGroupRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateInboundSmsGroupRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupRes}
 */
proto.api.v0alpha.CreateInboundSmsGroupRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateInboundSmsGroupRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateInboundSmsGroupRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateInboundSmsGroupRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateInboundSmsGroupRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string inbound_sms_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateInboundSmsGroupRes.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateInboundSmsGroupRes} returns this
 */
proto.api.v0alpha.CreateInboundSmsGroupRes.prototype.setInboundSmsGroupId = function(value) {
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
proto.api.v0alpha.GetInboundSmsGroupByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetInboundSmsGroupByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetInboundSmsGroupByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetInboundSmsGroupByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetInboundSmsGroupByIdReq}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetInboundSmsGroupByIdReq;
  return proto.api.v0alpha.GetInboundSmsGroupByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetInboundSmsGroupByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetInboundSmsGroupByIdReq}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetInboundSmsGroupByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetInboundSmsGroupByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetInboundSmsGroupByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string inbound_sms_group_id = 3;
 * @return {string}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdReq.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetInboundSmsGroupByIdReq} returns this
 */
proto.api.v0alpha.GetInboundSmsGroupByIdReq.prototype.setInboundSmsGroupId = function(value) {
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
proto.api.v0alpha.GetInboundSmsGroupByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetInboundSmsGroupByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetInboundSmsGroupByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupWithIntents: (f = msg.getInboundSmsGroupWithIntents()) && proto.api.v0alpha.InboundSmsGroupWithIntents.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetInboundSmsGroupByIdRes}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetInboundSmsGroupByIdRes;
  return proto.api.v0alpha.GetInboundSmsGroupByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetInboundSmsGroupByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetInboundSmsGroupByIdRes}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsGroupWithIntents;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsGroupWithIntents.deserializeBinaryFromReader);
      msg.setInboundSmsGroupWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetInboundSmsGroupByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetInboundSmsGroupByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupWithIntents();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsGroupWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * optional InboundSmsGroupWithIntents inbound_sms_group_with_intents = 1;
 * @return {?proto.api.v0alpha.InboundSmsGroupWithIntents}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes.prototype.getInboundSmsGroupWithIntents = function() {
  return /** @type{?proto.api.v0alpha.InboundSmsGroupWithIntents} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.InboundSmsGroupWithIntents, 1));
};


/**
 * @param {?proto.api.v0alpha.InboundSmsGroupWithIntents|undefined} value
 * @return {!proto.api.v0alpha.GetInboundSmsGroupByIdRes} returns this
*/
proto.api.v0alpha.GetInboundSmsGroupByIdRes.prototype.setInboundSmsGroupWithIntents = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetInboundSmsGroupByIdRes} returns this
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes.prototype.clearInboundSmsGroupWithIntents = function() {
  return this.setInboundSmsGroupWithIntents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetInboundSmsGroupByIdRes.prototype.hasInboundSmsGroupWithIntents = function() {
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
proto.api.v0alpha.ListActiveInboundSmsGroupsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListActiveInboundSmsGroupsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListActiveInboundSmsGroupsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListActiveInboundSmsGroupsReq}
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListActiveInboundSmsGroupsReq;
  return proto.api.v0alpha.ListActiveInboundSmsGroupsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListActiveInboundSmsGroupsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListActiveInboundSmsGroupsReq}
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListActiveInboundSmsGroupsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListActiveInboundSmsGroupsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListActiveInboundSmsGroupsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListActiveInboundSmsGroupsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListActiveInboundSmsGroupsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupWithIntentsList: jspb.Message.toObjectList(msg.getInboundSmsGroupWithIntentsList(),
    proto.api.v0alpha.InboundSmsGroupWithIntents.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListActiveInboundSmsGroupsRes}
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListActiveInboundSmsGroupsRes;
  return proto.api.v0alpha.ListActiveInboundSmsGroupsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListActiveInboundSmsGroupsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListActiveInboundSmsGroupsRes}
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsGroupWithIntents;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsGroupWithIntents.deserializeBinaryFromReader);
      msg.addInboundSmsGroupWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListActiveInboundSmsGroupsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListActiveInboundSmsGroupsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsGroupWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InboundSmsGroupWithIntents inbound_sms_group_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>}
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.prototype.getInboundSmsGroupWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.InboundSmsGroupWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>} value
 * @return {!proto.api.v0alpha.ListActiveInboundSmsGroupsRes} returns this
*/
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.prototype.setInboundSmsGroupWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.InboundSmsGroupWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents}
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.prototype.addInboundSmsGroupWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.InboundSmsGroupWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListActiveInboundSmsGroupsRes} returns this
 */
proto.api.v0alpha.ListActiveInboundSmsGroupsRes.prototype.clearInboundSmsGroupWithIntentsList = function() {
  return this.setInboundSmsGroupWithIntentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.toObject = function(includeInstance, msg) {
  var f, obj = {
searchFrom: (f = msg.getSearchFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
searchTo: (f = msg.getSearchTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
status: jspb.Message.getFieldWithDefault(msg, 5, ""),
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
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsGroupByFiltersReq;
  return proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSearchFrom(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSearchTo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
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
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSearchTo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
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
};


/**
 * optional google.protobuf.Timestamp search_from = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.getSearchFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} returns this
*/
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.setSearchFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.clearSearchFrom = function() {
  return this.setSearchFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.hasSearchFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp search_to = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.getSearchTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} returns this
*/
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.setSearchTo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.clearSearchTo = function() {
  return this.setSearchTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.hasSearchTo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string status = 5;
 * @return {string}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersReq} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsGroupByFiltersRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupWithIntentsList: jspb.Message.toObjectList(msg.getInboundSmsGroupWithIntentsList(),
    proto.api.v0alpha.InboundSmsGroupWithIntents.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersRes}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsGroupByFiltersRes;
  return proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupByFiltersRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersRes}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsGroupWithIntents;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsGroupWithIntents.deserializeBinaryFromReader);
      msg.addInboundSmsGroupWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupByFiltersRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsGroupWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InboundSmsGroupWithIntents inbound_sms_group_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.prototype.getInboundSmsGroupWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.InboundSmsGroupWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>} value
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersRes} returns this
*/
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.prototype.setInboundSmsGroupWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.InboundSmsGroupWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents}
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.prototype.addInboundSmsGroupWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.InboundSmsGroupWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupByFiltersRes} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupByFiltersRes.prototype.clearInboundSmsGroupWithIntentsList = function() {
  return this.setInboundSmsGroupWithIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupIdsArrList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq;
  return proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addInboundSmsGroupIdsArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupIdsArrList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string inbound_sms_group_ids_arr = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.prototype.getInboundSmsGroupIdsArrList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.prototype.setInboundSmsGroupIdsArrList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.prototype.addInboundSmsGroupIdsArr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsReq.prototype.clearInboundSmsGroupIdsArrList = function() {
  return this.setInboundSmsGroupIdsArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupWithIntentsList: jspb.Message.toObjectList(msg.getInboundSmsGroupWithIntentsList(),
    proto.api.v0alpha.InboundSmsGroupWithIntents.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes;
  return proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsGroupWithIntents;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsGroupWithIntents.deserializeBinaryFromReader);
      msg.addInboundSmsGroupWithIntents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupWithIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsGroupWithIntents.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InboundSmsGroupWithIntents inbound_sms_group_with_intents = 1;
 * @return {!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.prototype.getInboundSmsGroupWithIntentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.InboundSmsGroupWithIntents, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.InboundSmsGroupWithIntents>} value
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes} returns this
*/
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.prototype.setInboundSmsGroupWithIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.InboundSmsGroupWithIntents=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.InboundSmsGroupWithIntents}
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.prototype.addInboundSmsGroupWithIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.InboundSmsGroupWithIntents, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes} returns this
 */
proto.api.v0alpha.ListInboundSmsGroupsByGroupIdsRes.prototype.clearInboundSmsGroupWithIntentsList = function() {
  return this.setInboundSmsGroupWithIntentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ScheduleInboundSmsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScheduleInboundSmsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScheduleInboundSmsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScheduleInboundSmsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTemplateId: jspb.Message.getFieldWithDefault(msg, 1, ""),
smsNumberSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
groupName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScheduleInboundSmsReq}
 */
proto.api.v0alpha.ScheduleInboundSmsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScheduleInboundSmsReq;
  return proto.api.v0alpha.ScheduleInboundSmsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScheduleInboundSmsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScheduleInboundSmsReq}
 */
proto.api.v0alpha.ScheduleInboundSmsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsTemplateId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsNumberSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScheduleInboundSmsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScheduleInboundSmsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScheduleInboundSmsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScheduleInboundSmsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTemplateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmsNumberSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string inbound_sms_template_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ScheduleInboundSmsReq.prototype.getInboundSmsTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScheduleInboundSmsReq} returns this
 */
proto.api.v0alpha.ScheduleInboundSmsReq.prototype.setInboundSmsTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 sms_number_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.ScheduleInboundSmsReq.prototype.getSmsNumberSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ScheduleInboundSmsReq} returns this
 */
proto.api.v0alpha.ScheduleInboundSmsReq.prototype.setSmsNumberSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string group_name = 3;
 * @return {string}
 */
proto.api.v0alpha.ScheduleInboundSmsReq.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScheduleInboundSmsReq} returns this
 */
proto.api.v0alpha.ScheduleInboundSmsReq.prototype.setGroupName = function(value) {
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
proto.api.v0alpha.ScheduleInboundSmsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ScheduleInboundSmsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ScheduleInboundSmsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScheduleInboundSmsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ScheduleInboundSmsRes}
 */
proto.api.v0alpha.ScheduleInboundSmsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ScheduleInboundSmsRes;
  return proto.api.v0alpha.ScheduleInboundSmsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ScheduleInboundSmsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ScheduleInboundSmsRes}
 */
proto.api.v0alpha.ScheduleInboundSmsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ScheduleInboundSmsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ScheduleInboundSmsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ScheduleInboundSmsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ScheduleInboundSmsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string inbound_sms_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ScheduleInboundSmsRes.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ScheduleInboundSmsRes} returns this
 */
proto.api.v0alpha.ScheduleInboundSmsRes.prototype.setInboundSmsGroupId = function(value) {
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
proto.api.v0alpha.StopInboundSmsGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StopInboundSmsGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StopInboundSmsGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopInboundSmsGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StopInboundSmsGroupReq}
 */
proto.api.v0alpha.StopInboundSmsGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StopInboundSmsGroupReq;
  return proto.api.v0alpha.StopInboundSmsGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StopInboundSmsGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StopInboundSmsGroupReq}
 */
proto.api.v0alpha.StopInboundSmsGroupReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.StopInboundSmsGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StopInboundSmsGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StopInboundSmsGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopInboundSmsGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string inbound_sms_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.StopInboundSmsGroupReq.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.StopInboundSmsGroupReq} returns this
 */
proto.api.v0alpha.StopInboundSmsGroupReq.prototype.setInboundSmsGroupId = function(value) {
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
proto.api.v0alpha.StopInboundSmsGroupRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StopInboundSmsGroupRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StopInboundSmsGroupRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopInboundSmsGroupRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.StopInboundSmsGroupRes}
 */
proto.api.v0alpha.StopInboundSmsGroupRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StopInboundSmsGroupRes;
  return proto.api.v0alpha.StopInboundSmsGroupRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StopInboundSmsGroupRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StopInboundSmsGroupRes}
 */
proto.api.v0alpha.StopInboundSmsGroupRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.StopInboundSmsGroupRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StopInboundSmsGroupRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StopInboundSmsGroupRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopInboundSmsGroupRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.StopInboundSmsGroupRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.StopInboundSmsGroupRes} returns this
 */
proto.api.v0alpha.StopInboundSmsGroupRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.SmsConversation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsConversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsConversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsConversation.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 2, ""),
smsTaskParent: (f = msg.getSmsTaskParent()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
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
 * @return {!proto.api.v0alpha.SmsConversation}
 */
proto.api.v0alpha.SmsConversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsConversation;
  return proto.api.v0alpha.SmsConversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsConversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsConversation}
 */
proto.api.v0alpha.SmsConversation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setSmsTaskParent(value);
      break;
    case 4:
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
proto.api.v0alpha.SmsConversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsConversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsConversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsConversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSmsTaskParent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.SmsConversation.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsConversation} returns this
 */
proto.api.v0alpha.SmsConversation.prototype.setSmsConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string inbound_sms_group_id = 2;
 * @return {string}
 */
proto.api.v0alpha.SmsConversation.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsConversation} returns this
 */
proto.api.v0alpha.SmsConversation.prototype.setInboundSmsGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Int64Value sms_task_parent = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.v0alpha.SmsConversation.prototype.getSmsTaskParent = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.v0alpha.SmsConversation} returns this
*/
proto.api.v0alpha.SmsConversation.prototype.setSmsTaskParent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsConversation} returns this
 */
proto.api.v0alpha.SmsConversation.prototype.clearSmsTaskParent = function() {
  return this.setSmsTaskParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsConversation.prototype.hasSmsTaskParent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsConversation.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsConversation} returns this
*/
proto.api.v0alpha.SmsConversation.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsConversation} returns this
 */
proto.api.v0alpha.SmsConversation.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsConversation.prototype.hasCreatedOn = function() {
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
proto.api.v0alpha.ListSmsConversationsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsConversationsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsConversationsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.ListSmsConversationsReq}
 */
proto.api.v0alpha.ListSmsConversationsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsConversationsReq;
  return proto.api.v0alpha.ListSmsConversationsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsConversationsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsConversationsReq}
 */
proto.api.v0alpha.ListSmsConversationsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.ListSmsConversationsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsConversationsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsConversationsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsConversationsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsConversationsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsConversationsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsConversationsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationsList: jspb.Message.toObjectList(msg.getSmsConversationsList(),
    proto.api.v0alpha.SmsConversation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsConversationsRes}
 */
proto.api.v0alpha.ListSmsConversationsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsConversationsRes;
  return proto.api.v0alpha.ListSmsConversationsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsConversationsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsConversationsRes}
 */
proto.api.v0alpha.ListSmsConversationsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsConversation;
      reader.readMessage(value,proto.api.v0alpha.SmsConversation.deserializeBinaryFromReader);
      msg.addSmsConversations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsConversationsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsConversationsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsConversationsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsConversation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsConversation sms_conversations = 1;
 * @return {!Array<!proto.api.v0alpha.SmsConversation>}
 */
proto.api.v0alpha.ListSmsConversationsRes.prototype.getSmsConversationsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsConversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsConversation, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsConversation>} value
 * @return {!proto.api.v0alpha.ListSmsConversationsRes} returns this
*/
proto.api.v0alpha.ListSmsConversationsRes.prototype.setSmsConversationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsConversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsConversation}
 */
proto.api.v0alpha.ListSmsConversationsRes.prototype.addSmsConversations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsConversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsConversationsRes} returns this
 */
proto.api.v0alpha.ListSmsConversationsRes.prototype.clearSmsConversationsList = function() {
  return this.setSmsConversationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSmsConversationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSmsConversationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsConversationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 2, ""),
smsTaskParent: (f = msg.getSmsTaskParent()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.UpdateSmsConversationReq}
 */
proto.api.v0alpha.UpdateSmsConversationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSmsConversationReq;
  return proto.api.v0alpha.UpdateSmsConversationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSmsConversationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSmsConversationReq}
 */
proto.api.v0alpha.UpdateSmsConversationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setSmsTaskParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSmsConversationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSmsConversationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsConversationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSmsTaskParent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateSmsConversationReq} returns this
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.setSmsConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string inbound_sms_group_id = 2;
 * @return {string}
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.UpdateSmsConversationReq} returns this
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.setInboundSmsGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Int64Value sms_task_parent = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.getSmsTaskParent = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.v0alpha.UpdateSmsConversationReq} returns this
*/
proto.api.v0alpha.UpdateSmsConversationReq.prototype.setSmsTaskParent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.UpdateSmsConversationReq} returns this
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.clearSmsTaskParent = function() {
  return this.setSmsTaskParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.UpdateSmsConversationReq.prototype.hasSmsTaskParent = function() {
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
proto.api.v0alpha.UpdateSmsConversationRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.UpdateSmsConversationRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.UpdateSmsConversationRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsConversationRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.UpdateSmsConversationRes}
 */
proto.api.v0alpha.UpdateSmsConversationRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.UpdateSmsConversationRes;
  return proto.api.v0alpha.UpdateSmsConversationRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.UpdateSmsConversationRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.UpdateSmsConversationRes}
 */
proto.api.v0alpha.UpdateSmsConversationRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.UpdateSmsConversationRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.UpdateSmsConversationRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.UpdateSmsConversationRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.UpdateSmsConversationRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.UpdateSmsConversationRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.UpdateSmsConversationRes} returns this
 */
proto.api.v0alpha.UpdateSmsConversationRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.DeleteSmsConversationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSmsConversationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSmsConversationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsConversationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.DeleteSmsConversationReq}
 */
proto.api.v0alpha.DeleteSmsConversationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSmsConversationReq;
  return proto.api.v0alpha.DeleteSmsConversationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSmsConversationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSmsConversationReq}
 */
proto.api.v0alpha.DeleteSmsConversationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.DeleteSmsConversationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSmsConversationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSmsConversationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsConversationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.DeleteSmsConversationReq.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.DeleteSmsConversationReq} returns this
 */
proto.api.v0alpha.DeleteSmsConversationReq.prototype.setSmsConversationId = function(value) {
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
proto.api.v0alpha.DeleteSmsConversationRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.DeleteSmsConversationRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.DeleteSmsConversationRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsConversationRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.DeleteSmsConversationRes}
 */
proto.api.v0alpha.DeleteSmsConversationRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.DeleteSmsConversationRes;
  return proto.api.v0alpha.DeleteSmsConversationRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.DeleteSmsConversationRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.DeleteSmsConversationRes}
 */
proto.api.v0alpha.DeleteSmsConversationRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.DeleteSmsConversationRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.DeleteSmsConversationRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.DeleteSmsConversationRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.DeleteSmsConversationRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.DeleteSmsConversationRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.DeleteSmsConversationRes} returns this
 */
proto.api.v0alpha.DeleteSmsConversationRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.CreateSmsConversationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsConversationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsConversationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsConversationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
smsTaskParent: (f = msg.getSmsTaskParent()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSmsConversationReq}
 */
proto.api.v0alpha.CreateSmsConversationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsConversationReq;
  return proto.api.v0alpha.CreateSmsConversationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsConversationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsConversationReq}
 */
proto.api.v0alpha.CreateSmsConversationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setSmsTaskParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateSmsConversationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsConversationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsConversationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsConversationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmsTaskParent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string inbound_sms_group_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsConversationReq.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsConversationReq} returns this
 */
proto.api.v0alpha.CreateSmsConversationReq.prototype.setInboundSmsGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value sms_task_parent = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.v0alpha.CreateSmsConversationReq.prototype.getSmsTaskParent = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.v0alpha.CreateSmsConversationReq} returns this
*/
proto.api.v0alpha.CreateSmsConversationReq.prototype.setSmsTaskParent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.CreateSmsConversationReq} returns this
 */
proto.api.v0alpha.CreateSmsConversationReq.prototype.clearSmsTaskParent = function() {
  return this.setSmsTaskParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.CreateSmsConversationReq.prototype.hasSmsTaskParent = function() {
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
proto.api.v0alpha.CreateSmsConversationRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsConversationRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsConversationRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsConversationRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSmsConversationRes}
 */
proto.api.v0alpha.CreateSmsConversationRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsConversationRes;
  return proto.api.v0alpha.CreateSmsConversationRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsConversationRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsConversationRes}
 */
proto.api.v0alpha.CreateSmsConversationRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateSmsConversationRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsConversationRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsConversationRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsConversationRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsConversationRes.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsConversationRes} returns this
 */
proto.api.v0alpha.CreateSmsConversationRes.prototype.setSmsConversationId = function(value) {
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
proto.api.v0alpha.GetSmsConversationByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsConversationByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsConversationByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsConversationByIdReq}
 */
proto.api.v0alpha.GetSmsConversationByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsConversationByIdReq;
  return proto.api.v0alpha.GetSmsConversationByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsConversationByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsConversationByIdReq}
 */
proto.api.v0alpha.GetSmsConversationByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsConversationByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsConversationByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsConversationByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.GetSmsConversationByIdReq.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetSmsConversationByIdReq} returns this
 */
proto.api.v0alpha.GetSmsConversationByIdReq.prototype.setSmsConversationId = function(value) {
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
proto.api.v0alpha.GetSmsConversationByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsConversationByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsConversationByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationByIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversation: (f = msg.getSmsConversation()) && proto.api.v0alpha.SmsConversation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsConversationByIdRes}
 */
proto.api.v0alpha.GetSmsConversationByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsConversationByIdRes;
  return proto.api.v0alpha.GetSmsConversationByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsConversationByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsConversationByIdRes}
 */
proto.api.v0alpha.GetSmsConversationByIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsConversation;
      reader.readMessage(value,proto.api.v0alpha.SmsConversation.deserializeBinaryFromReader);
      msg.setSmsConversation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsConversationByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsConversationByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsConversationByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationByIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.SmsConversation.serializeBinaryToWriter
    );
  }
};


/**
 * optional SmsConversation sms_conversation = 1;
 * @return {?proto.api.v0alpha.SmsConversation}
 */
proto.api.v0alpha.GetSmsConversationByIdRes.prototype.getSmsConversation = function() {
  return /** @type{?proto.api.v0alpha.SmsConversation} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsConversation, 1));
};


/**
 * @param {?proto.api.v0alpha.SmsConversation|undefined} value
 * @return {!proto.api.v0alpha.GetSmsConversationByIdRes} returns this
*/
proto.api.v0alpha.GetSmsConversationByIdRes.prototype.setSmsConversation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetSmsConversationByIdRes} returns this
 */
proto.api.v0alpha.GetSmsConversationByIdRes.prototype.clearSmsConversation = function() {
  return this.setSmsConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetSmsConversationByIdRes.prototype.hasSmsConversation = function() {
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
proto.api.v0alpha.ListSmsConversationAuditsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsConversationAuditsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsConversationAuditsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationAuditsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsConversationAuditsReq}
 */
proto.api.v0alpha.ListSmsConversationAuditsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsConversationAuditsReq;
  return proto.api.v0alpha.ListSmsConversationAuditsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsConversationAuditsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsConversationAuditsReq}
 */
proto.api.v0alpha.ListSmsConversationAuditsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsConversationAuditsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsConversationAuditsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsConversationAuditsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationAuditsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ListSmsConversationAuditsReq.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListSmsConversationAuditsReq} returns this
 */
proto.api.v0alpha.ListSmsConversationAuditsReq.prototype.setSmsConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsConversationAuditsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsConversationAuditsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationAuditsList: jspb.Message.toObjectList(msg.getSmsConversationAuditsList(),
    proto.api.v0alpha.SmsConversationAudit.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsConversationAuditsRes}
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsConversationAuditsRes;
  return proto.api.v0alpha.ListSmsConversationAuditsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsConversationAuditsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsConversationAuditsRes}
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsConversationAudit;
      reader.readMessage(value,proto.api.v0alpha.SmsConversationAudit.deserializeBinaryFromReader);
      msg.addSmsConversationAudits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsConversationAuditsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsConversationAuditsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationAuditsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsConversationAudit.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsConversationAudit sms_conversation_audits = 1;
 * @return {!Array<!proto.api.v0alpha.SmsConversationAudit>}
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.prototype.getSmsConversationAuditsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsConversationAudit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsConversationAudit, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsConversationAudit>} value
 * @return {!proto.api.v0alpha.ListSmsConversationAuditsRes} returns this
*/
proto.api.v0alpha.ListSmsConversationAuditsRes.prototype.setSmsConversationAuditsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsConversationAudit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsConversationAudit}
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.prototype.addSmsConversationAudits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsConversationAudit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsConversationAuditsRes} returns this
 */
proto.api.v0alpha.ListSmsConversationAuditsRes.prototype.clearSmsConversationAuditsList = function() {
  return this.setSmsConversationAuditsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateSmsConversationAuditRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsConversationAuditRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsConversationAuditRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsConversationAuditRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationAuditId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.CreateSmsConversationAuditRes}
 */
proto.api.v0alpha.CreateSmsConversationAuditRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsConversationAuditRes;
  return proto.api.v0alpha.CreateSmsConversationAuditRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsConversationAuditRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsConversationAuditRes}
 */
proto.api.v0alpha.CreateSmsConversationAuditRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationAuditId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.CreateSmsConversationAuditRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsConversationAuditRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsConversationAuditRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsConversationAuditRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationAuditId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sms_conversation_audit_id = 1;
 * @return {string}
 */
proto.api.v0alpha.CreateSmsConversationAuditRes.prototype.getSmsConversationAuditId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.CreateSmsConversationAuditRes} returns this
 */
proto.api.v0alpha.CreateSmsConversationAuditRes.prototype.setSmsConversationAuditId = function(value) {
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
proto.api.v0alpha.GetSmsConversationAuditByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsConversationAuditByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsConversationAuditByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationAuditByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationAuditId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsConversationAuditByIdReq}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsConversationAuditByIdReq;
  return proto.api.v0alpha.GetSmsConversationAuditByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsConversationAuditByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsConversationAuditByIdReq}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationAuditId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsConversationAuditByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsConversationAuditByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationAuditByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationAuditId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sms_conversation_audit_id = 1;
 * @return {string}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdReq.prototype.getSmsConversationAuditId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetSmsConversationAuditByIdReq} returns this
 */
proto.api.v0alpha.GetSmsConversationAuditByIdReq.prototype.setSmsConversationAuditId = function(value) {
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
proto.api.v0alpha.GetSmsConversationAuditByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsConversationAuditByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsConversationAuditByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationAudit: (f = msg.getSmsConversationAudit()) && proto.api.v0alpha.SmsConversationAudit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsConversationAuditByIdRes}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsConversationAuditByIdRes;
  return proto.api.v0alpha.GetSmsConversationAuditByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsConversationAuditByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsConversationAuditByIdRes}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsConversationAudit;
      reader.readMessage(value,proto.api.v0alpha.SmsConversationAudit.deserializeBinaryFromReader);
      msg.setSmsConversationAudit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsConversationAuditByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsConversationAuditByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationAudit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.SmsConversationAudit.serializeBinaryToWriter
    );
  }
};


/**
 * optional SmsConversationAudit sms_conversation_audit = 1;
 * @return {?proto.api.v0alpha.SmsConversationAudit}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes.prototype.getSmsConversationAudit = function() {
  return /** @type{?proto.api.v0alpha.SmsConversationAudit} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsConversationAudit, 1));
};


/**
 * @param {?proto.api.v0alpha.SmsConversationAudit|undefined} value
 * @return {!proto.api.v0alpha.GetSmsConversationAuditByIdRes} returns this
*/
proto.api.v0alpha.GetSmsConversationAuditByIdRes.prototype.setSmsConversationAudit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetSmsConversationAuditByIdRes} returns this
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes.prototype.clearSmsConversationAudit = function() {
  return this.setSmsConversationAudit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetSmsConversationAuditByIdRes.prototype.hasSmsConversationAudit = function() {
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
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsConversationAssignedAgentsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsConversationAssignedAgentsReq}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsConversationAssignedAgentsReq;
  return proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsConversationAssignedAgentsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsConversationAssignedAgentsReq}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsConversationAssignedAgentsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ListSmsConversationAssignedAgentsReq} returns this
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsReq.prototype.setSmsConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListSmsConversationAssignedAgentsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationAssignedAgentsList: jspb.Message.toObjectList(msg.getSmsConversationAssignedAgentsList(),
    proto.api.v0alpha.SmsConversationAssignedAgent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListSmsConversationAssignedAgentsRes}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListSmsConversationAssignedAgentsRes;
  return proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListSmsConversationAssignedAgentsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListSmsConversationAssignedAgentsRes}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsConversationAssignedAgent;
      reader.readMessage(value,proto.api.v0alpha.SmsConversationAssignedAgent.deserializeBinaryFromReader);
      msg.addSmsConversationAssignedAgents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListSmsConversationAssignedAgentsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationAssignedAgentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.SmsConversationAssignedAgent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SmsConversationAssignedAgent sms_conversation_assigned_agents = 1;
 * @return {!Array<!proto.api.v0alpha.SmsConversationAssignedAgent>}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.prototype.getSmsConversationAssignedAgentsList = function() {
  return /** @type{!Array<!proto.api.v0alpha.SmsConversationAssignedAgent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.SmsConversationAssignedAgent, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.SmsConversationAssignedAgent>} value
 * @return {!proto.api.v0alpha.ListSmsConversationAssignedAgentsRes} returns this
*/
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.prototype.setSmsConversationAssignedAgentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.SmsConversationAssignedAgent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent}
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.prototype.addSmsConversationAssignedAgents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.SmsConversationAssignedAgent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListSmsConversationAssignedAgentsRes} returns this
 */
proto.api.v0alpha.ListSmsConversationAssignedAgentsRes.prototype.clearSmsConversationAssignedAgentsList = function() {
  return this.setSmsConversationAssignedAgentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.CreateSmsConversationAssignedAgentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.CreateSmsConversationAssignedAgentRes}
 */
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.CreateSmsConversationAssignedAgentRes;
  return proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.CreateSmsConversationAssignedAgentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.CreateSmsConversationAssignedAgentRes}
 */
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.CreateSmsConversationAssignedAgentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.CreateSmsConversationAssignedAgentRes} returns this
 */
proto.api.v0alpha.CreateSmsConversationAssignedAgentRes.prototype.setResult = function(value) {
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
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
assignedAgentId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq;
  return proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAssignedAgentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAssignedAgentId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq} returns this
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.prototype.setSmsConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 assigned_agent_id = 2;
 * @return {number}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.prototype.getAssignedAgentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq} returns this
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdReq.prototype.setAssignedAgentId = function(value) {
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
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationAssignedAgent: (f = msg.getSmsConversationAssignedAgent()) && proto.api.v0alpha.SmsConversationAssignedAgent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes;
  return proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsConversationAssignedAgent;
      reader.readMessage(value,proto.api.v0alpha.SmsConversationAssignedAgent.deserializeBinaryFromReader);
      msg.setSmsConversationAssignedAgent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationAssignedAgent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.SmsConversationAssignedAgent.serializeBinaryToWriter
    );
  }
};


/**
 * optional SmsConversationAssignedAgent sms_conversation_assigned_agent = 1;
 * @return {?proto.api.v0alpha.SmsConversationAssignedAgent}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.prototype.getSmsConversationAssignedAgent = function() {
  return /** @type{?proto.api.v0alpha.SmsConversationAssignedAgent} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsConversationAssignedAgent, 1));
};


/**
 * @param {?proto.api.v0alpha.SmsConversationAssignedAgent|undefined} value
 * @return {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes} returns this
*/
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.prototype.setSmsConversationAssignedAgent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes} returns this
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.prototype.clearSmsConversationAssignedAgent = function() {
  return this.setSmsConversationAssignedAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetSmsConversationAssignedAgentByIdRes.prototype.hasSmsConversationAssignedAgent = function() {
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
proto.api.v0alpha.SmsConversationAudit.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsConversationAudit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsConversationAudit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsConversationAudit.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationAuditId: jspb.Message.getFieldWithDefault(msg, 1, ""),
smsConversationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
smsTaskSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
smsReceivedRepliesSid: jspb.Message.getFieldWithDefault(msg, 4, 0),
action: jspb.Message.getFieldWithDefault(msg, 5, 0),
description: jspb.Message.getFieldWithDefault(msg, 6, ""),
agentId: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.api.v0alpha.SmsConversationAudit}
 */
proto.api.v0alpha.SmsConversationAudit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsConversationAudit;
  return proto.api.v0alpha.SmsConversationAudit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsConversationAudit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsConversationAudit}
 */
proto.api.v0alpha.SmsConversationAudit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationAuditId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsTaskSid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsReceivedRepliesSid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAction(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentId(value);
      break;
    case 8:
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
proto.api.v0alpha.SmsConversationAudit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsConversationAudit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsConversationAudit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsConversationAudit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationAuditId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSmsTaskSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSmsReceivedRepliesSid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getAction();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAgentId();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sms_conversation_audit_id = 1;
 * @return {string}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.getSmsConversationAuditId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
 */
proto.api.v0alpha.SmsConversationAudit.prototype.setSmsConversationAuditId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sms_conversation_id = 2;
 * @return {string}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
 */
proto.api.v0alpha.SmsConversationAudit.prototype.setSmsConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 sms_task_sid = 3;
 * @return {number}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.getSmsTaskSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
 */
proto.api.v0alpha.SmsConversationAudit.prototype.setSmsTaskSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 sms_received_replies_sid = 4;
 * @return {number}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.getSmsReceivedRepliesSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
 */
proto.api.v0alpha.SmsConversationAudit.prototype.setSmsReceivedRepliesSid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 action = 5;
 * @return {number}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
 */
proto.api.v0alpha.SmsConversationAudit.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
 */
proto.api.v0alpha.SmsConversationAudit.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 agent_id = 7;
 * @return {number}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.getAgentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
 */
proto.api.v0alpha.SmsConversationAudit.prototype.setAgentId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
*/
proto.api.v0alpha.SmsConversationAudit.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsConversationAudit} returns this
 */
proto.api.v0alpha.SmsConversationAudit.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsConversationAudit.prototype.hasCreatedOn = function() {
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
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsConversationAssignedAgent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsConversationAssignedAgent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsConversationAssignedAgent.toObject = function(includeInstance, msg) {
  var f, obj = {
smsConversationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
assignedAgentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
primaryAgent: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
notify: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
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
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent}
 */
proto.api.v0alpha.SmsConversationAssignedAgent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsConversationAssignedAgent;
  return proto.api.v0alpha.SmsConversationAssignedAgent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsConversationAssignedAgent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent}
 */
proto.api.v0alpha.SmsConversationAssignedAgent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsConversationId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAssignedAgentId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimaryAgent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNotify(value);
      break;
    case 5:
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
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsConversationAssignedAgent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsConversationAssignedAgent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsConversationAssignedAgent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsConversationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAssignedAgentId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPrimaryAgent();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getNotify();
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
};


/**
 * optional string sms_conversation_id = 1;
 * @return {string}
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.getSmsConversationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent} returns this
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.setSmsConversationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 assigned_agent_id = 2;
 * @return {number}
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.getAssignedAgentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent} returns this
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.setAssignedAgentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool primary_agent = 3;
 * @return {boolean}
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.getPrimaryAgent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent} returns this
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.setPrimaryAgent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool notify = 4;
 * @return {boolean}
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.getNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent} returns this
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.setNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent} returns this
*/
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.SmsConversationAssignedAgent} returns this
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.SmsConversationAssignedAgent.prototype.hasCreatedOn = function() {
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
proto.api.v0alpha.GetSmsMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsMessageSid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsMessageReq}
 */
proto.api.v0alpha.GetSmsMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsMessageReq;
  return proto.api.v0alpha.GetSmsMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsMessageReq}
 */
proto.api.v0alpha.GetSmsMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsMessageSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsMessageSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sms_message_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.GetSmsMessageReq.prototype.getSmsMessageSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.GetSmsMessageReq} returns this
 */
proto.api.v0alpha.GetSmsMessageReq.prototype.setSmsMessageSid = function(value) {
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
proto.api.v0alpha.GetSmsMessageRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.GetSmsMessageRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.GetSmsMessageRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsMessageRes.toObject = function(includeInstance, msg) {
  var f, obj = {
smsMessage: (f = msg.getSmsMessage()) && proto.api.v0alpha.SmsMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.GetSmsMessageRes}
 */
proto.api.v0alpha.GetSmsMessageRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.GetSmsMessageRes;
  return proto.api.v0alpha.GetSmsMessageRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.GetSmsMessageRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.GetSmsMessageRes}
 */
proto.api.v0alpha.GetSmsMessageRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.SmsMessage;
      reader.readMessage(value,proto.api.v0alpha.SmsMessage.deserializeBinaryFromReader);
      msg.setSmsMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.GetSmsMessageRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.GetSmsMessageRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.GetSmsMessageRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.GetSmsMessageRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v0alpha.SmsMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional SmsMessage sms_message = 1;
 * @return {?proto.api.v0alpha.SmsMessage}
 */
proto.api.v0alpha.GetSmsMessageRes.prototype.getSmsMessage = function() {
  return /** @type{?proto.api.v0alpha.SmsMessage} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsMessage, 1));
};


/**
 * @param {?proto.api.v0alpha.SmsMessage|undefined} value
 * @return {!proto.api.v0alpha.GetSmsMessageRes} returns this
*/
proto.api.v0alpha.GetSmsMessageRes.prototype.setSmsMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.GetSmsMessageRes} returns this
 */
proto.api.v0alpha.GetSmsMessageRes.prototype.clearSmsMessage = function() {
  return this.setSmsMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.GetSmsMessageRes.prototype.hasSmsMessage = function() {
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
proto.api.v0alpha.SmsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
smsMessageSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsMessage}
 */
proto.api.v0alpha.SmsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsMessage;
  return proto.api.v0alpha.SmsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsMessage}
 */
proto.api.v0alpha.SmsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsMessageSid(value);
      break;
    case 2:
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
proto.api.v0alpha.SmsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsMessageSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 sms_message_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.SmsMessage.prototype.getSmsMessageSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsMessage} returns this
 */
proto.api.v0alpha.SmsMessage.prototype.setSmsMessageSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.api.v0alpha.SmsMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsMessage} returns this
 */
proto.api.v0alpha.SmsMessage.prototype.setMessage = function(value) {
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
proto.api.v0alpha.SmsIntentGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsIntentGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsIntentGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsIntentGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
smsIntentGroupSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
smsGroupSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
actionKey: jspb.Message.getFieldWithDefault(msg, 5, ""),
actionDetail: jspb.Message.getFieldWithDefault(msg, 6, ""),
actionTrigger: jspb.Message.getFieldWithDefault(msg, 7, ""),
priority: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsIntentGroup}
 */
proto.api.v0alpha.SmsIntentGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsIntentGroup;
  return proto.api.v0alpha.SmsIntentGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsIntentGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsIntentGroup}
 */
proto.api.v0alpha.SmsIntentGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsIntentGroupSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsGroupSid(value);
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
      msg.setActionKey(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionDetail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionTrigger(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsIntentGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsIntentGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsIntentGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsIntentGroupSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSmsGroupSid();
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
  f = message.getActionKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getActionDetail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getActionTrigger();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional int64 sms_intent_group_sid = 1;
 * @return {number}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.getSmsIntentGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsIntentGroup} returns this
 */
proto.api.v0alpha.SmsIntentGroup.prototype.setSmsIntentGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 sms_group_sid = 2;
 * @return {number}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.getSmsGroupSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsIntentGroup} returns this
 */
proto.api.v0alpha.SmsIntentGroup.prototype.setSmsGroupSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentGroup} returns this
 */
proto.api.v0alpha.SmsIntentGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentGroup} returns this
 */
proto.api.v0alpha.SmsIntentGroup.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action_key = 5;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.getActionKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentGroup} returns this
 */
proto.api.v0alpha.SmsIntentGroup.prototype.setActionKey = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string action_detail = 6;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.getActionDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentGroup} returns this
 */
proto.api.v0alpha.SmsIntentGroup.prototype.setActionDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string action_trigger = 7;
 * @return {string}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.getActionTrigger = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsIntentGroup} returns this
 */
proto.api.v0alpha.SmsIntentGroup.prototype.setActionTrigger = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 priority = 8;
 * @return {number}
 */
proto.api.v0alpha.SmsIntentGroup.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.SmsIntentGroup} returns this
 */
proto.api.v0alpha.SmsIntentGroup.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.InboundSmsTask.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.InboundSmsTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.InboundSmsTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsTask.toObject = function(includeInstance, msg) {
  var f, obj = {
smsReceivedRepliesId: jspb.Message.getFieldWithDefault(msg, 1, 0),
srcNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
dstNumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
msgId: jspb.Message.getFieldWithDefault(msg, 4, ""),
receivedReply: jspb.Message.getFieldWithDefault(msg, 5, ""),
receivedTime: (f = msg.getReceivedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
inboundSmsGroupId: jspb.Message.getFieldWithDefault(msg, 7, ""),
cost: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
status: jspb.Message.getFieldWithDefault(msg, 9, 0),
analysisReport: jspb.Message.getFieldWithDefault(msg, 10, ""),
units: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.InboundSmsTask}
 */
proto.api.v0alpha.InboundSmsTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.InboundSmsTask;
  return proto.api.v0alpha.InboundSmsTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.InboundSmsTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.InboundSmsTask}
 */
proto.api.v0alpha.InboundSmsTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSmsReceivedRepliesId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceivedReply(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReceivedTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboundSmsGroupId(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCost(value);
      break;
    case 9:
      var value = /** @type {!proto.api.commons.SMSIBTaskStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalysisReport(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.InboundSmsTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.InboundSmsTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.InboundSmsTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.InboundSmsTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsReceivedRepliesId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSrcNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDstNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMsgId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceivedReply();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReceivedTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInboundSmsGroupId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCost();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getAnalysisReport();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional int64 sms_received_replies_id = 1;
 * @return {number}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getSmsReceivedRepliesId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setSmsReceivedRepliesId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string src_number = 2;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getSrcNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setSrcNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dst_number = 3;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getDstNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setDstNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string msg_id = 4;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getMsgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setMsgId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string received_reply = 5;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getReceivedReply = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setReceivedReply = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp received_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getReceivedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
*/
proto.api.v0alpha.InboundSmsTask.prototype.setReceivedTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.clearReceivedTime = function() {
  return this.setReceivedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.InboundSmsTask.prototype.hasReceivedTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string inbound_sms_group_id = 7;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getInboundSmsGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setInboundSmsGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double cost = 8;
 * @return {number}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional api.commons.SMSIBTaskStatus status = 9;
 * @return {!proto.api.commons.SMSIBTaskStatus}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.SMSIBTaskStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.api.commons.SMSIBTaskStatus} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string analysis_report = 10;
 * @return {string}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getAnalysisReport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setAnalysisReport = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 units = 11;
 * @return {number}
 */
proto.api.v0alpha.InboundSmsTask.prototype.getUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.InboundSmsTask} returns this
 */
proto.api.v0alpha.InboundSmsTask.prototype.setUnits = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupIdsArrList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq;
  return proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addInboundSmsGroupIdsArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupIdsArrList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated string inbound_sms_group_ids_arr = 3;
 * @return {!Array<string>}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.prototype.getInboundSmsGroupIdsArrList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq} returns this
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.prototype.setInboundSmsGroupIdsArrList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq} returns this
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.prototype.addInboundSmsGroupIdsArr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq} returns this
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsReq.prototype.clearInboundSmsGroupIdsArrList = function() {
  return this.setInboundSmsGroupIdsArrList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsTasksList: jspb.Message.toObjectList(msg.getInboundSmsTasksList(),
    proto.api.v0alpha.InboundSmsTask.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes;
  return proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v0alpha.InboundSmsTask;
      reader.readMessage(value,proto.api.v0alpha.InboundSmsTask.deserializeBinaryFromReader);
      msg.addInboundSmsTasks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v0alpha.InboundSmsTask.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InboundSmsTask inbound_sms_tasks = 1;
 * @return {!Array<!proto.api.v0alpha.InboundSmsTask>}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.prototype.getInboundSmsTasksList = function() {
  return /** @type{!Array<!proto.api.v0alpha.InboundSmsTask>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v0alpha.InboundSmsTask, 1));
};


/**
 * @param {!Array<!proto.api.v0alpha.InboundSmsTask>} value
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes} returns this
*/
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.prototype.setInboundSmsTasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v0alpha.InboundSmsTask=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.InboundSmsTask}
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.prototype.addInboundSmsTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v0alpha.InboundSmsTask, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes} returns this
 */
proto.api.v0alpha.ListInboundSmsTasksByGroupIdsRes.prototype.clearInboundSmsTasksList = function() {
  return this.setInboundSmsTasksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.ReportSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.ReportSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.ReportSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReportSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
deliveryMethod: jspb.Message.getFieldWithDefault(msg, 2, ""),
reportTemplateSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
smsSettings: (f = msg.getSmsSettings()) && proto.api.v0alpha.SmsSettings.toObject(includeInstance, f),
emailSettings: (f = msg.getEmailSettings()) && proto.api.v0alpha.EmailSettings.toObject(includeInstance, f),
ftpSettings: (f = msg.getFtpSettings()) && proto.api.v0alpha.FtpSettings.toObject(includeInstance, f),
sftpSettings: (f = msg.getSftpSettings()) && proto.api.v0alpha.SftpSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.ReportSettings}
 */
proto.api.v0alpha.ReportSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.ReportSettings;
  return proto.api.v0alpha.ReportSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.ReportSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.ReportSettings}
 */
proto.api.v0alpha.ReportSettings.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDeliveryMethod(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReportTemplateSid(value);
      break;
    case 4:
      var value = new proto.api.v0alpha.SmsSettings;
      reader.readMessage(value,proto.api.v0alpha.SmsSettings.deserializeBinaryFromReader);
      msg.setSmsSettings(value);
      break;
    case 5:
      var value = new proto.api.v0alpha.EmailSettings;
      reader.readMessage(value,proto.api.v0alpha.EmailSettings.deserializeBinaryFromReader);
      msg.setEmailSettings(value);
      break;
    case 6:
      var value = new proto.api.v0alpha.FtpSettings;
      reader.readMessage(value,proto.api.v0alpha.FtpSettings.deserializeBinaryFromReader);
      msg.setFtpSettings(value);
      break;
    case 7:
      var value = new proto.api.v0alpha.SftpSettings;
      reader.readMessage(value,proto.api.v0alpha.SftpSettings.deserializeBinaryFromReader);
      msg.setSftpSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.ReportSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.ReportSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.ReportSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.ReportSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDeliveryMethod();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReportTemplateSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSmsSettings();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api.v0alpha.SmsSettings.serializeBinaryToWriter
    );
  }
  f = message.getEmailSettings();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.v0alpha.EmailSettings.serializeBinaryToWriter
    );
  }
  f = message.getFtpSettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.v0alpha.FtpSettings.serializeBinaryToWriter
    );
  }
  f = message.getSftpSettings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.v0alpha.SftpSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.api.v0alpha.ReportSettings.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.ReportSettings} returns this
 */
proto.api.v0alpha.ReportSettings.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string delivery_method = 2;
 * @return {string}
 */
proto.api.v0alpha.ReportSettings.prototype.getDeliveryMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.ReportSettings} returns this
 */
proto.api.v0alpha.ReportSettings.prototype.setDeliveryMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 report_template_sid = 3;
 * @return {number}
 */
proto.api.v0alpha.ReportSettings.prototype.getReportTemplateSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v0alpha.ReportSettings} returns this
 */
proto.api.v0alpha.ReportSettings.prototype.setReportTemplateSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional SmsSettings sms_settings = 4;
 * @return {?proto.api.v0alpha.SmsSettings}
 */
proto.api.v0alpha.ReportSettings.prototype.getSmsSettings = function() {
  return /** @type{?proto.api.v0alpha.SmsSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SmsSettings, 4));
};


/**
 * @param {?proto.api.v0alpha.SmsSettings|undefined} value
 * @return {!proto.api.v0alpha.ReportSettings} returns this
*/
proto.api.v0alpha.ReportSettings.prototype.setSmsSettings = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ReportSettings} returns this
 */
proto.api.v0alpha.ReportSettings.prototype.clearSmsSettings = function() {
  return this.setSmsSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ReportSettings.prototype.hasSmsSettings = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EmailSettings email_settings = 5;
 * @return {?proto.api.v0alpha.EmailSettings}
 */
proto.api.v0alpha.ReportSettings.prototype.getEmailSettings = function() {
  return /** @type{?proto.api.v0alpha.EmailSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.EmailSettings, 5));
};


/**
 * @param {?proto.api.v0alpha.EmailSettings|undefined} value
 * @return {!proto.api.v0alpha.ReportSettings} returns this
*/
proto.api.v0alpha.ReportSettings.prototype.setEmailSettings = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ReportSettings} returns this
 */
proto.api.v0alpha.ReportSettings.prototype.clearEmailSettings = function() {
  return this.setEmailSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ReportSettings.prototype.hasEmailSettings = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional FtpSettings ftp_settings = 6;
 * @return {?proto.api.v0alpha.FtpSettings}
 */
proto.api.v0alpha.ReportSettings.prototype.getFtpSettings = function() {
  return /** @type{?proto.api.v0alpha.FtpSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.FtpSettings, 6));
};


/**
 * @param {?proto.api.v0alpha.FtpSettings|undefined} value
 * @return {!proto.api.v0alpha.ReportSettings} returns this
*/
proto.api.v0alpha.ReportSettings.prototype.setFtpSettings = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ReportSettings} returns this
 */
proto.api.v0alpha.ReportSettings.prototype.clearFtpSettings = function() {
  return this.setFtpSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ReportSettings.prototype.hasFtpSettings = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SftpSettings sftp_settings = 7;
 * @return {?proto.api.v0alpha.SftpSettings}
 */
proto.api.v0alpha.ReportSettings.prototype.getSftpSettings = function() {
  return /** @type{?proto.api.v0alpha.SftpSettings} */ (
    jspb.Message.getWrapperField(this, proto.api.v0alpha.SftpSettings, 7));
};


/**
 * @param {?proto.api.v0alpha.SftpSettings|undefined} value
 * @return {!proto.api.v0alpha.ReportSettings} returns this
*/
proto.api.v0alpha.ReportSettings.prototype.setSftpSettings = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.ReportSettings} returns this
 */
proto.api.v0alpha.ReportSettings.prototype.clearSftpSettings = function() {
  return this.setSftpSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.ReportSettings.prototype.hasSftpSettings = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.SmsSettings.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.SmsSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
phoneNumbersList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
srcNumber: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsSettings}
 */
proto.api.v0alpha.SmsSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsSettings;
  return proto.api.v0alpha.SmsSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsSettings}
 */
proto.api.v0alpha.SmsSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhoneNumbers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhoneNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getSrcNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string phone_numbers = 1;
 * @return {!Array<string>}
 */
proto.api.v0alpha.SmsSettings.prototype.getPhoneNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.SmsSettings} returns this
 */
proto.api.v0alpha.SmsSettings.prototype.setPhoneNumbersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.SmsSettings} returns this
 */
proto.api.v0alpha.SmsSettings.prototype.addPhoneNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.SmsSettings} returns this
 */
proto.api.v0alpha.SmsSettings.prototype.clearPhoneNumbersList = function() {
  return this.setPhoneNumbersList([]);
};


/**
 * optional string src_number = 2;
 * @return {string}
 */
proto.api.v0alpha.SmsSettings.prototype.getSrcNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsSettings} returns this
 */
proto.api.v0alpha.SmsSettings.prototype.setSrcNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.EmailSettings.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.EmailSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.EmailSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.EmailSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EmailSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
reportType: jspb.Message.getFieldWithDefault(msg, 1, ""),
emailAddressesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
reportFormat: jspb.Message.getFieldWithDefault(msg, 3, ""),
fromEmailAddress: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.EmailSettings}
 */
proto.api.v0alpha.EmailSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.EmailSettings;
  return proto.api.v0alpha.EmailSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.EmailSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.EmailSettings}
 */
proto.api.v0alpha.EmailSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmailAddresses(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportFormat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromEmailAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.EmailSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.EmailSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.EmailSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.EmailSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReportType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmailAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getReportFormat();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFromEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string report_type = 1;
 * @return {string}
 */
proto.api.v0alpha.EmailSettings.prototype.getReportType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.EmailSettings} returns this
 */
proto.api.v0alpha.EmailSettings.prototype.setReportType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string email_addresses = 2;
 * @return {!Array<string>}
 */
proto.api.v0alpha.EmailSettings.prototype.getEmailAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.EmailSettings} returns this
 */
proto.api.v0alpha.EmailSettings.prototype.setEmailAddressesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.EmailSettings} returns this
 */
proto.api.v0alpha.EmailSettings.prototype.addEmailAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.EmailSettings} returns this
 */
proto.api.v0alpha.EmailSettings.prototype.clearEmailAddressesList = function() {
  return this.setEmailAddressesList([]);
};


/**
 * optional string report_format = 3;
 * @return {string}
 */
proto.api.v0alpha.EmailSettings.prototype.getReportFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.EmailSettings} returns this
 */
proto.api.v0alpha.EmailSettings.prototype.setReportFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string from_email_address = 4;
 * @return {string}
 */
proto.api.v0alpha.EmailSettings.prototype.getFromEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.EmailSettings} returns this
 */
proto.api.v0alpha.EmailSettings.prototype.setFromEmailAddress = function(value) {
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
proto.api.v0alpha.FtpSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.FtpSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.FtpSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.FtpSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
passwd: jspb.Message.getFieldWithDefault(msg, 1, ""),
username: jspb.Message.getFieldWithDefault(msg, 2, ""),
reportFormat: jspb.Message.getFieldWithDefault(msg, 3, ""),
path: jspb.Message.getFieldWithDefault(msg, 4, ""),
url: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.FtpSettings}
 */
proto.api.v0alpha.FtpSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.FtpSettings;
  return proto.api.v0alpha.FtpSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.FtpSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.FtpSettings}
 */
proto.api.v0alpha.FtpSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswd(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportFormat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 5:
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
proto.api.v0alpha.FtpSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.FtpSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.FtpSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.FtpSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPasswd();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReportFormat();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string passwd = 1;
 * @return {string}
 */
proto.api.v0alpha.FtpSettings.prototype.getPasswd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.FtpSettings} returns this
 */
proto.api.v0alpha.FtpSettings.prototype.setPasswd = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.api.v0alpha.FtpSettings.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.FtpSettings} returns this
 */
proto.api.v0alpha.FtpSettings.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string report_format = 3;
 * @return {string}
 */
proto.api.v0alpha.FtpSettings.prototype.getReportFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.FtpSettings} returns this
 */
proto.api.v0alpha.FtpSettings.prototype.setReportFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.api.v0alpha.FtpSettings.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.FtpSettings} returns this
 */
proto.api.v0alpha.FtpSettings.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.api.v0alpha.FtpSettings.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.FtpSettings} returns this
 */
proto.api.v0alpha.FtpSettings.prototype.setUrl = function(value) {
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
proto.api.v0alpha.SftpSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SftpSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SftpSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SftpSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
passwd: jspb.Message.getFieldWithDefault(msg, 1, ""),
username: jspb.Message.getFieldWithDefault(msg, 2, ""),
reportFormat: jspb.Message.getFieldWithDefault(msg, 3, ""),
path: jspb.Message.getFieldWithDefault(msg, 4, ""),
authenticationType: jspb.Message.getFieldWithDefault(msg, 5, ""),
url: jspb.Message.getFieldWithDefault(msg, 6, ""),
privateKey: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SftpSettings}
 */
proto.api.v0alpha.SftpSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SftpSettings;
  return proto.api.v0alpha.SftpSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SftpSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SftpSettings}
 */
proto.api.v0alpha.SftpSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswd(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportFormat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthenticationType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SftpSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SftpSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SftpSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SftpSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPasswd();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReportFormat();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAuthenticationType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrivateKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string passwd = 1;
 * @return {string}
 */
proto.api.v0alpha.SftpSettings.prototype.getPasswd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SftpSettings} returns this
 */
proto.api.v0alpha.SftpSettings.prototype.setPasswd = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.api.v0alpha.SftpSettings.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SftpSettings} returns this
 */
proto.api.v0alpha.SftpSettings.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string report_format = 3;
 * @return {string}
 */
proto.api.v0alpha.SftpSettings.prototype.getReportFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SftpSettings} returns this
 */
proto.api.v0alpha.SftpSettings.prototype.setReportFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.api.v0alpha.SftpSettings.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SftpSettings} returns this
 */
proto.api.v0alpha.SftpSettings.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string authentication_type = 5;
 * @return {string}
 */
proto.api.v0alpha.SftpSettings.prototype.getAuthenticationType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SftpSettings} returns this
 */
proto.api.v0alpha.SftpSettings.prototype.setAuthenticationType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string url = 6;
 * @return {string}
 */
proto.api.v0alpha.SftpSettings.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SftpSettings} returns this
 */
proto.api.v0alpha.SftpSettings.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string private_key = 7;
 * @return {string}
 */
proto.api.v0alpha.SftpSettings.prototype.getPrivateKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SftpSettings} returns this
 */
proto.api.v0alpha.SftpSettings.prototype.setPrivateKey = function(value) {
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
proto.api.v0alpha.SmsMamSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.SmsMamSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.SmsMamSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsMamSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
mamHgSid: jspb.Message.getFieldWithDefault(msg, 1, ""),
mamHgName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.SmsMamSettings}
 */
proto.api.v0alpha.SmsMamSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.SmsMamSettings;
  return proto.api.v0alpha.SmsMamSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.SmsMamSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.SmsMamSettings}
 */
proto.api.v0alpha.SmsMamSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMamHgSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMamHgName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.SmsMamSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.SmsMamSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.SmsMamSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.SmsMamSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMamHgSid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMamHgName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string mam_hg_sid = 1;
 * @return {string}
 */
proto.api.v0alpha.SmsMamSettings.prototype.getMamHgSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsMamSettings} returns this
 */
proto.api.v0alpha.SmsMamSettings.prototype.setMamHgSid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mam_hg_name = 2;
 * @return {string}
 */
proto.api.v0alpha.SmsMamSettings.prototype.getMamHgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.SmsMamSettings} returns this
 */
proto.api.v0alpha.SmsMamSettings.prototype.setMamHgName = function(value) {
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
proto.api.v0alpha.MamAgentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.MamAgentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.MamAgentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.MamAgentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
status: jspb.Message.getFieldWithDefault(msg, 2, 0),
agentResponseTime: (f = msg.getAgentResponseTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
agentName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.MamAgentResponse}
 */
proto.api.v0alpha.MamAgentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.MamAgentResponse;
  return proto.api.v0alpha.MamAgentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.MamAgentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.MamAgentResponse}
 */
proto.api.v0alpha.MamAgentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.api.commons.SMSMamStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAgentResponseTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.MamAgentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.MamAgentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.MamAgentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.MamAgentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAgentResponseTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAgentName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional api.commons.SMSMamStatus status = 2;
 * @return {!proto.api.commons.SMSMamStatus}
 */
proto.api.v0alpha.MamAgentResponse.prototype.getStatus = function() {
  return /** @type {!proto.api.commons.SMSMamStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.SMSMamStatus} value
 * @return {!proto.api.v0alpha.MamAgentResponse} returns this
 */
proto.api.v0alpha.MamAgentResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp agent_response_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v0alpha.MamAgentResponse.prototype.getAgentResponseTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v0alpha.MamAgentResponse} returns this
*/
proto.api.v0alpha.MamAgentResponse.prototype.setAgentResponseTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v0alpha.MamAgentResponse} returns this
 */
proto.api.v0alpha.MamAgentResponse.prototype.clearAgentResponseTime = function() {
  return this.setAgentResponseTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v0alpha.MamAgentResponse.prototype.hasAgentResponseTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string agent_name = 4;
 * @return {string}
 */
proto.api.v0alpha.MamAgentResponse.prototype.getAgentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v0alpha.MamAgentResponse} returns this
 */
proto.api.v0alpha.MamAgentResponse.prototype.setAgentName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StopAllOutboundSmsGroupsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StopAllOutboundSmsGroupsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
smsGroupSidsArrList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StopAllOutboundSmsGroupsReq}
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StopAllOutboundSmsGroupsReq;
  return proto.api.v0alpha.StopAllOutboundSmsGroupsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StopAllOutboundSmsGroupsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StopAllOutboundSmsGroupsReq}
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSmsGroupSidsArr(values[i]);
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
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StopAllOutboundSmsGroupsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StopAllOutboundSmsGroupsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsGroupSidsArrList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * repeated int64 sms_group_sids_arr = 2;
 * @return {!Array<number>}
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.prototype.getSmsGroupSidsArrList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.v0alpha.StopAllOutboundSmsGroupsReq} returns this
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.prototype.setSmsGroupSidsArrList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.StopAllOutboundSmsGroupsReq} returns this
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.prototype.addSmsGroupSidsArr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.StopAllOutboundSmsGroupsReq} returns this
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsReq.prototype.clearSmsGroupSidsArrList = function() {
  return this.setSmsGroupSidsArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StopAllOutboundSmsGroupsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StopAllOutboundSmsGroupsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.StopAllOutboundSmsGroupsRes}
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StopAllOutboundSmsGroupsRes;
  return proto.api.v0alpha.StopAllOutboundSmsGroupsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StopAllOutboundSmsGroupsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StopAllOutboundSmsGroupsRes}
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.StopAllOutboundSmsGroupsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StopAllOutboundSmsGroupsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StopAllOutboundSmsGroupsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.StopAllOutboundSmsGroupsRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.StopAllOutboundSmsGroupsRes} returns this
 */
proto.api.v0alpha.StopAllOutboundSmsGroupsRes.prototype.setResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StopAllInboundSmsGroupsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StopAllInboundSmsGroupsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
inboundSmsGroupIdsArrList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v0alpha.StopAllInboundSmsGroupsReq}
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StopAllInboundSmsGroupsReq;
  return proto.api.v0alpha.StopAllInboundSmsGroupsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StopAllInboundSmsGroupsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StopAllInboundSmsGroupsReq}
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addInboundSmsGroupIdsArr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StopAllInboundSmsGroupsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StopAllInboundSmsGroupsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInboundSmsGroupIdsArrList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated string inbound_sms_group_ids_arr = 3;
 * @return {!Array<string>}
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.prototype.getInboundSmsGroupIdsArrList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v0alpha.StopAllInboundSmsGroupsReq} returns this
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.prototype.setInboundSmsGroupIdsArrList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v0alpha.StopAllInboundSmsGroupsReq} returns this
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.prototype.addInboundSmsGroupIdsArr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v0alpha.StopAllInboundSmsGroupsReq} returns this
 */
proto.api.v0alpha.StopAllInboundSmsGroupsReq.prototype.clearInboundSmsGroupIdsArrList = function() {
  return this.setInboundSmsGroupIdsArrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v0alpha.StopAllInboundSmsGroupsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v0alpha.StopAllInboundSmsGroupsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v0alpha.StopAllInboundSmsGroupsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopAllInboundSmsGroupsRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v0alpha.StopAllInboundSmsGroupsRes}
 */
proto.api.v0alpha.StopAllInboundSmsGroupsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v0alpha.StopAllInboundSmsGroupsRes;
  return proto.api.v0alpha.StopAllInboundSmsGroupsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v0alpha.StopAllInboundSmsGroupsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v0alpha.StopAllInboundSmsGroupsRes}
 */
proto.api.v0alpha.StopAllInboundSmsGroupsRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v0alpha.StopAllInboundSmsGroupsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v0alpha.StopAllInboundSmsGroupsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v0alpha.StopAllInboundSmsGroupsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v0alpha.StopAllInboundSmsGroupsRes.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v0alpha.StopAllInboundSmsGroupsRes.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v0alpha.StopAllInboundSmsGroupsRes} returns this
 */
proto.api.v0alpha.StopAllInboundSmsGroupsRes.prototype.setResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto);
