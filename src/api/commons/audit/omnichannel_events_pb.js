// source: api/commons/audit/omnichannel_events.proto
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

var api_commons_omnichannel_pb = require('../../../api/commons/omnichannel_pb.js');
goog.object.extend(proto, api_commons_omnichannel_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.api.commons.audit.OmnichannelAgentAssignConversationEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelAgentReassignConversationEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelAgentSuspendEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelAgentTextMessageEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelArchiveCampaignEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelArchiveModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelBeginWrapUpEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelCloseConversationEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelCompleteCampaignEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelCompleteModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelConnectedInboxPollEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelCreateCampaignEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelCreateConversationEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelCreateProjectEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelCustomerTextMessageEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelDailyConversationReportEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelDailyProjectReportEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelErrorModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelFailModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelFinishWrapUpEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelManagerTextMessageEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelModuleInitialReplyEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelPauseCampaignEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelPauseModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelPaymentLinkSentEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelResumeCampaignEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelResumeModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelScheduleModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelStartCampaignEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelStartModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelSuccessModuleEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelT10Event', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelT11Event', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelTaskMessageSentEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelUpdateCampaignEvent', null, global);
goog.exportSymbol('proto.api.commons.audit.OmnichannelUpdateModuleEvent', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelCreateProjectEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelCreateProjectEvent.displayName = 'proto.api.commons.audit.OmnichannelCreateProjectEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelCreateCampaignEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelCreateCampaignEvent.displayName = 'proto.api.commons.audit.OmnichannelCreateCampaignEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelT10Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelT10Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelT10Event.displayName = 'proto.api.commons.audit.OmnichannelT10Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelDailyProjectReportEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelDailyProjectReportEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelDailyProjectReportEvent.displayName = 'proto.api.commons.audit.OmnichannelDailyProjectReportEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelDailyConversationReportEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelDailyConversationReportEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelDailyConversationReportEvent.displayName = 'proto.api.commons.audit.OmnichannelDailyConversationReportEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelAgentAssignConversationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.displayName = 'proto.api.commons.audit.OmnichannelAgentAssignConversationEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.displayName = 'proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelAgentReassignConversationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.displayName = 'proto.api.commons.audit.OmnichannelAgentReassignConversationEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelCustomerTextMessageEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.displayName = 'proto.api.commons.audit.OmnichannelCustomerTextMessageEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelAgentTextMessageEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelAgentTextMessageEvent.displayName = 'proto.api.commons.audit.OmnichannelAgentTextMessageEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelManagerTextMessageEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelManagerTextMessageEvent.displayName = 'proto.api.commons.audit.OmnichannelManagerTextMessageEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelFinishWrapUpEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelFinishWrapUpEvent.displayName = 'proto.api.commons.audit.OmnichannelFinishWrapUpEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelBeginWrapUpEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelBeginWrapUpEvent.displayName = 'proto.api.commons.audit.OmnichannelBeginWrapUpEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelT11Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelT11Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelT11Event.displayName = 'proto.api.commons.audit.OmnichannelT11Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelCreateConversationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelCreateConversationEvent.displayName = 'proto.api.commons.audit.OmnichannelCreateConversationEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelAgentSuspendEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelAgentSuspendEvent.displayName = 'proto.api.commons.audit.OmnichannelAgentSuspendEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelCloseConversationEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelCloseConversationEvent.displayName = 'proto.api.commons.audit.OmnichannelCloseConversationEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelUpdateCampaignEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelUpdateCampaignEvent.displayName = 'proto.api.commons.audit.OmnichannelUpdateCampaignEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.displayName = 'proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelCompleteCampaignEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelCompleteCampaignEvent.displayName = 'proto.api.commons.audit.OmnichannelCompleteCampaignEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelArchiveCampaignEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelArchiveCampaignEvent.displayName = 'proto.api.commons.audit.OmnichannelArchiveCampaignEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelStartCampaignEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelStartCampaignEvent.displayName = 'proto.api.commons.audit.OmnichannelStartCampaignEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelPauseCampaignEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelPauseCampaignEvent.displayName = 'proto.api.commons.audit.OmnichannelPauseCampaignEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelResumeCampaignEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelResumeCampaignEvent.displayName = 'proto.api.commons.audit.OmnichannelResumeCampaignEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelScheduleModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelScheduleModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelScheduleModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelStartModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelStartModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelStartModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelStartModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelPauseModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelPauseModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelPauseModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelResumeModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelResumeModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelResumeModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelErrorModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelErrorModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelErrorModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelSuccessModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelSuccessModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelSuccessModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelFailModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelFailModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelFailModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelFailModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelCompleteModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelCompleteModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelCompleteModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelArchiveModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelArchiveModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelArchiveModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelUpdateModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelUpdateModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelUpdateModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.displayName = 'proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelModuleInitialReplyEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.displayName = 'proto.api.commons.audit.OmnichannelModuleInitialReplyEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelTaskMessageSentEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelTaskMessageSentEvent.displayName = 'proto.api.commons.audit.OmnichannelTaskMessageSentEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelConnectedInboxPollEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.displayName = 'proto.api.commons.audit.OmnichannelConnectedInboxPollEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.displayName = 'proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.displayName = 'proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.displayName = 'proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.displayName = 'proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.displayName = 'proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelPaymentLinkSentEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.displayName = 'proto.api.commons.audit.OmnichannelPaymentLinkSentEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.displayName = 'proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.displayName = 'proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.displayName = 'proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.displayName = 'proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent';
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
proto.api.commons.audit.OmnichannelCreateProjectEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelCreateProjectEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelCreateProjectEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.api.commons.audit.OmnichannelCreateProjectEvent}
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelCreateProjectEvent;
  return proto.api.commons.audit.OmnichannelCreateProjectEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelCreateProjectEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelCreateProjectEvent}
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.commons.audit.OmnichannelCreateProjectEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelCreateProjectEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelCreateProjectEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientSid();
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
};


/**
 * optional int64 client_sid = 1;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.prototype.getClientSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelCreateProjectEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.prototype.setClientSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCreateProjectEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCreateProjectEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateProjectEvent.prototype.setDescription = function(value) {
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
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelCreateCampaignEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    campaignDirection: jspb.Message.getFieldWithDefault(msg, 4, 0),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f),
    projectSid: jspb.Message.getFieldWithDefault(msg, 7, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelCreateCampaignEvent;
  return proto.api.commons.audit.OmnichannelCreateCampaignEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.CampaignDirection} */ (reader.readEnum());
      msg.setCampaignDirection(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 6:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    case 7:
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
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelCreateCampaignEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCampaignDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCampaignSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
  f = message.getProjectSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional api.commons.CampaignDirection campaign_direction = 4;
 * @return {!proto.api.commons.CampaignDirection}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.getCampaignDirection = function() {
  return /** @type {!proto.api.commons.CampaignDirection} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.CampaignDirection} value
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.setCampaignDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 campaign_sid = 5;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 6;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 6));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} returns this
*/
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.hasOmniCampaign = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 project_sid = 7;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.getProjectSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCreateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateCampaignEvent.prototype.setProjectSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelT10Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelT10Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelT10Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelT10Event}
 */
proto.api.commons.audit.OmnichannelT10Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelT10Event;
  return proto.api.commons.audit.OmnichannelT10Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelT10Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelT10Event}
 */
proto.api.commons.audit.OmnichannelT10Event.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
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
proto.api.commons.audit.OmnichannelT10Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelT10Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelT10Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelT10Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelT10Event} returns this
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelT10Event} returns this
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelT10Event} returns this
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional api.commons.OmniConversation conversation = 4;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 4));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelT10Event} returns this
*/
proto.api.commons.audit.OmnichannelT10Event.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelT10Event} returns this
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.OmniMessage message = 5;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 5));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelT10Event} returns this
*/
proto.api.commons.audit.OmnichannelT10Event.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelT10Event} returns this
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelT10Event.prototype.hasMessage = function() {
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
proto.api.commons.audit.OmnichannelDailyProjectReportEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelDailyProjectReportEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelDailyProjectReportEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelDailyProjectReportEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    downloadUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelDailyProjectReportEvent}
 */
proto.api.commons.audit.OmnichannelDailyProjectReportEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelDailyProjectReportEvent;
  return proto.api.commons.audit.OmnichannelDailyProjectReportEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelDailyProjectReportEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelDailyProjectReportEvent}
 */
proto.api.commons.audit.OmnichannelDailyProjectReportEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelDailyProjectReportEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelDailyProjectReportEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelDailyProjectReportEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelDailyProjectReportEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDownloadUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string download_url = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelDailyProjectReportEvent.prototype.getDownloadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelDailyProjectReportEvent} returns this
 */
proto.api.commons.audit.OmnichannelDailyProjectReportEvent.prototype.setDownloadUrl = function(value) {
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
proto.api.commons.audit.OmnichannelDailyConversationReportEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelDailyConversationReportEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelDailyConversationReportEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelDailyConversationReportEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    downloadUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelDailyConversationReportEvent}
 */
proto.api.commons.audit.OmnichannelDailyConversationReportEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelDailyConversationReportEvent;
  return proto.api.commons.audit.OmnichannelDailyConversationReportEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelDailyConversationReportEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelDailyConversationReportEvent}
 */
proto.api.commons.audit.OmnichannelDailyConversationReportEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelDailyConversationReportEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelDailyConversationReportEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelDailyConversationReportEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelDailyConversationReportEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDownloadUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string download_url = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelDailyConversationReportEvent.prototype.getDownloadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelDailyConversationReportEvent} returns this
 */
proto.api.commons.audit.OmnichannelDailyConversationReportEvent.prototype.setDownloadUrl = function(value) {
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
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelAgentAssignConversationEvent;
  return proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 6:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
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
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string user_id = 4;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.OmniConversation conversation = 5;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 5));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional api.commons.OmniMessage message = 6;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 6));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 7;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 7));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentAssignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentAssignConversationEvent.prototype.hasAsmSessionSid = function() {
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
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent;
  return proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 6:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
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
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string user_id = 4;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional api.commons.OmniConversation conversation = 5;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 5));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional api.commons.OmniMessage message = 6;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 6));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 7;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 7));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentUnassignConversationEvent.prototype.hasAsmSessionSid = function() {
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
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    currentUserId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    newUserId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
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
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelAgentReassignConversationEvent;
  return proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentUserId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewUserId(value);
      break;
    case 7:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 8:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 9:
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
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getCurrentUserId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNewUserId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getNewUserAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string user_id = 4;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string current_user_id = 5;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getCurrentUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setCurrentUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string new_user_id = 6;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getNewUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setNewUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional api.commons.OmniConversation conversation = 7;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 7));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional api.commons.OmniMessage message = 8;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 8));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Int64Value new_user_asm_session_sid = 9;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.getNewUserAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 9));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.setNewUserAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentReassignConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.clearNewUserAsmSessionSid = function() {
  return this.setNewUserAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentReassignConversationEvent.prototype.hasNewUserAsmSessionSid = function() {
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
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent}
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelCustomerTextMessageEvent;
  return proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent}
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationSid(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_sid = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional api.commons.OmniMessage message = 4;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 4));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent} returns this
*/
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.OmniConversation conversation = 5;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 5));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent} returns this
*/
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCustomerTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCustomerTextMessageEvent.prototype.hasConversation = function() {
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
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelAgentTextMessageEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelAgentTextMessageEvent;
  return proto.api.commons.audit.OmnichannelAgentTextMessageEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationSid(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setAsmSessionSid(value);
      break;
    case 7:
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
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelAgentTextMessageEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 conversation_sid = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional api.commons.OmniMessage message = 4;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 4));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.OmniConversation conversation = 5;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 5));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.hasAsmSessionSid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string user_id = 7;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelAgentTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentTextMessageEvent.prototype.setUserId = function(value) {
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
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelManagerTextMessageEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelManagerTextMessageEvent;
  return proto.api.commons.audit.OmnichannelManagerTextMessageEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setConversationSid(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setAsmSessionSid(value);
      break;
    case 7:
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
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelManagerTextMessageEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 conversation_sid = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional api.commons.OmniMessage message = 4;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 4));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} returns this
*/
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.OmniConversation conversation = 5;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 5));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} returns this
*/
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} returns this
*/
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.hasAsmSessionSid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string user_id = 7;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelManagerTextMessageEvent} returns this
 */
proto.api.commons.audit.OmnichannelManagerTextMessageEvent.prototype.setUserId = function(value) {
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
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelFinishWrapUpEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelFinishWrapUpEvent;
  return proto.api.commons.audit.OmnichannelFinishWrapUpEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
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
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelFinishWrapUpEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional api.commons.OmniConversation conversation = 4;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 4));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
*/
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.OmniMessage message = 5;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 5));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
*/
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
*/
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelFinishWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelFinishWrapUpEvent.prototype.hasAsmSessionSid = function() {
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
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelBeginWrapUpEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelBeginWrapUpEvent;
  return proto.api.commons.audit.OmnichannelBeginWrapUpEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setAsmSessionSid(value);
      break;
    case 7:
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
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelBeginWrapUpEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional api.commons.OmniConversation conversation = 4;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 4));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
*/
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional api.commons.OmniMessage message = 5;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 5));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
*/
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
*/
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.hasAsmSessionSid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string user_id = 7;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelBeginWrapUpEvent} returns this
 */
proto.api.commons.audit.OmnichannelBeginWrapUpEvent.prototype.setUserId = function(value) {
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
proto.api.commons.audit.OmnichannelT11Event.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelT11Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelT11Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelT11Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelT11Event}
 */
proto.api.commons.audit.OmnichannelT11Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelT11Event;
  return proto.api.commons.audit.OmnichannelT11Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelT11Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelT11Event}
 */
proto.api.commons.audit.OmnichannelT11Event.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelT11Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelT11Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelT11Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelT11Event} returns this
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelT11Event} returns this
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelT11Event} returns this
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional api.commons.OmniConversation conversation = 4;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 4));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelT11Event} returns this
*/
proto.api.commons.audit.OmnichannelT11Event.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelT11Event} returns this
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelT11Event.prototype.hasConversation = function() {
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
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelCreateConversationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelCreateConversationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelCreateConversationEvent}
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelCreateConversationEvent;
  return proto.api.commons.audit.OmnichannelCreateConversationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelCreateConversationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelCreateConversationEvent}
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
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
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelCreateConversationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelCreateConversationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCreateConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.ChannelType channel_type = 2;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelCreateConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional api.commons.OmniConversation conversation = 3;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 3));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCreateConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCreateConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional api.commons.OmniMessage message = 4;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 4));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCreateConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCreateConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCreateConversationEvent.prototype.hasMessage = function() {
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
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelAgentSuspendEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelAgentSuspendEvent}
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelAgentSuspendEvent;
  return proto.api.commons.audit.OmnichannelAgentSuspendEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelAgentSuspendEvent}
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
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
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelAgentSuspendEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.OmniMessage message = 1;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 1));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional api.commons.OmniConversation conversation = 2;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 2));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentSuspendEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentSuspendEvent.prototype.hasAsmSessionSid = function() {
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
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelCloseConversationEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelCloseConversationEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    conversation: (f = msg.getConversation()) && api_commons_omnichannel_pb.OmniConversation.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
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
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelCloseConversationEvent;
  return proto.api.commons.audit.OmnichannelCloseConversationEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelCloseConversationEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniConversation;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniConversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setAsmSessionSid(value);
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
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelCloseConversationEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelCloseConversationEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniConversation.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
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
 * optional api.commons.OmniMessage message = 1;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 1));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional api.commons.OmniConversation conversation = 2;
 * @return {?proto.api.commons.OmniConversation}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.getConversation = function() {
  return /** @type{?proto.api.commons.OmniConversation} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniConversation, 2));
};


/**
 * @param {?proto.api.commons.OmniConversation|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent} returns this
*/
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.hasAsmSessionSid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string user_id = 4;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCloseConversationEvent} returns this
 */
proto.api.commons.audit.OmnichannelCloseConversationEvent.prototype.setUserId = function(value) {
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
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelUpdateCampaignEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelUpdateCampaignEvent;
  return proto.api.commons.audit.OmnichannelUpdateCampaignEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelUpdateCampaignEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.ChannelType channel_type = 4;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 5;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 5));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} returns this
*/
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelUpdateCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelUpdateCampaignEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    campaignDirection: jspb.Message.getFieldWithDefault(msg, 4, 0),
    collectedData: (f = msg.getCollectedData()) && api_commons_omnichannel_pb.ConversationCollectedData.toObject(includeInstance, f),
    asmSessionSid: (f = msg.getAsmSessionSid()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent;
  return proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 4:
      var value = /** @type {!proto.api.commons.CampaignDirection} */ (reader.readEnum());
      msg.setCampaignDirection(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.ConversationCollectedData;
      reader.readMessage(value,api_commons_omnichannel_pb.ConversationCollectedData.deserializeBinaryFromReader);
      msg.setCollectedData(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
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
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCampaignDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCollectedData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.ConversationCollectedData.serializeBinaryToWriter
    );
  }
  f = message.getAsmSessionSid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 conversation_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.getConversationSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} returns this
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} returns this
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional api.commons.ChannelType channel_type = 3;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} returns this
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional api.commons.CampaignDirection campaign_direction = 4;
 * @return {!proto.api.commons.CampaignDirection}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.getCampaignDirection = function() {
  return /** @type {!proto.api.commons.CampaignDirection} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.CampaignDirection} value
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} returns this
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.setCampaignDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional api.commons.ConversationCollectedData collected_data = 5;
 * @return {?proto.api.commons.ConversationCollectedData}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.getCollectedData = function() {
  return /** @type{?proto.api.commons.ConversationCollectedData} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.ConversationCollectedData, 5));
};


/**
 * @param {?proto.api.commons.ConversationCollectedData|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} returns this
*/
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.setCollectedData = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} returns this
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.clearCollectedData = function() {
  return this.setCollectedData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.hasCollectedData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int64Value asm_session_sid = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.getAsmSessionSid = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} returns this
*/
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent} returns this
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.clearAsmSessionSid = function() {
  return this.setAsmSessionSid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelSetConversationCollectedDataEvent.prototype.hasAsmSessionSid = function() {
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
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelCompleteCampaignEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelCompleteCampaignEvent;
  return proto.api.commons.audit.OmnichannelCompleteCampaignEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelCompleteCampaignEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.ChannelType channel_type = 4;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 5;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 5));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} returns this
*/
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCompleteCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCompleteCampaignEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelArchiveCampaignEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelArchiveCampaignEvent;
  return proto.api.commons.audit.OmnichannelArchiveCampaignEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelArchiveCampaignEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.ChannelType channel_type = 4;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 5;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 5));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} returns this
*/
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelArchiveCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelArchiveCampaignEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelStartCampaignEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelStartCampaignEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelStartCampaignEvent}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelStartCampaignEvent;
  return proto.api.commons.audit.OmnichannelStartCampaignEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelStartCampaignEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelStartCampaignEvent}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelStartCampaignEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelStartCampaignEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelStartCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelStartCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelStartCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.ChannelType channel_type = 4;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelStartCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 5;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 5));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelStartCampaignEvent} returns this
*/
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelStartCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelStartCampaignEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelPauseCampaignEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelPauseCampaignEvent}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelPauseCampaignEvent;
  return proto.api.commons.audit.OmnichannelPauseCampaignEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelPauseCampaignEvent}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelPauseCampaignEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.ChannelType channel_type = 4;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 5;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 5));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} returns this
*/
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelPauseCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelPauseCampaignEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelResumeCampaignEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    campaignSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    channelType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelResumeCampaignEvent}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelResumeCampaignEvent;
  return proto.api.commons.audit.OmnichannelResumeCampaignEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelResumeCampaignEvent}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelResumeCampaignEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 campaign_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.getCampaignSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional api.commons.ChannelType channel_type = 4;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 5;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 5));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} returns this
*/
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelResumeCampaignEvent} returns this
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelResumeCampaignEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelScheduleModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelScheduleModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelScheduleModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelScheduleModuleEvent}
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelScheduleModuleEvent;
  return proto.api.commons.audit.OmnichannelScheduleModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelScheduleModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelScheduleModuleEvent}
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelScheduleModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelScheduleModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelScheduleModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelScheduleModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelScheduleModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelScheduleModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelScheduleModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelStartModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelStartModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelStartModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelStartModuleEvent}
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelStartModuleEvent;
  return proto.api.commons.audit.OmnichannelStartModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelStartModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelStartModuleEvent}
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelStartModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelStartModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelStartModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelStartModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelStartModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelStartModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelStartModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelPauseModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelPauseModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelPauseModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelPauseModuleEvent}
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelPauseModuleEvent;
  return proto.api.commons.audit.OmnichannelPauseModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelPauseModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelPauseModuleEvent}
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelPauseModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelPauseModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelPauseModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelPauseModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelPauseModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelPauseModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelPauseModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelResumeModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelResumeModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelResumeModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelResumeModuleEvent}
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelResumeModuleEvent;
  return proto.api.commons.audit.OmnichannelResumeModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelResumeModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelResumeModuleEvent}
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelResumeModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelResumeModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelResumeModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelResumeModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelResumeModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelResumeModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelResumeModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelErrorModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelErrorModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelErrorModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelErrorModuleEvent}
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelErrorModuleEvent;
  return proto.api.commons.audit.OmnichannelErrorModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelErrorModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelErrorModuleEvent}
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelErrorModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelErrorModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelErrorModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelErrorModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelErrorModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelErrorModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelErrorModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelSuccessModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelSuccessModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelSuccessModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelSuccessModuleEvent}
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelSuccessModuleEvent;
  return proto.api.commons.audit.OmnichannelSuccessModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelSuccessModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelSuccessModuleEvent}
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelSuccessModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelSuccessModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelSuccessModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelSuccessModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelSuccessModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelSuccessModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelSuccessModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelFailModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelFailModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelFailModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelFailModuleEvent}
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelFailModuleEvent;
  return proto.api.commons.audit.OmnichannelFailModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelFailModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelFailModuleEvent}
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelFailModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelFailModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelFailModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelFailModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelFailModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelFailModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelFailModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelCompleteModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelCompleteModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelCompleteModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelCompleteModuleEvent}
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelCompleteModuleEvent;
  return proto.api.commons.audit.OmnichannelCompleteModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelCompleteModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelCompleteModuleEvent}
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelCompleteModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelCompleteModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelCompleteModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCompleteModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelCompleteModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCompleteModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCompleteModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelArchiveModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelArchiveModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelArchiveModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelArchiveModuleEvent}
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelArchiveModuleEvent;
  return proto.api.commons.audit.OmnichannelArchiveModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelArchiveModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelArchiveModuleEvent}
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelArchiveModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelArchiveModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelArchiveModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelArchiveModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelArchiveModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelArchiveModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelArchiveModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelUpdateModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelUpdateModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelUpdateModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelUpdateModuleEvent}
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelUpdateModuleEvent;
  return proto.api.commons.audit.OmnichannelUpdateModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelUpdateModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelUpdateModuleEvent}
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelUpdateModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelUpdateModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelUpdateModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 2;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 2));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelUpdateModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelUpdateModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelUpdateModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelUpdateModuleEvent.prototype.hasOmniCampaign = function() {
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
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    messageUnits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent}
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent;
  return proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent}
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setModuleSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMessageUnits(value);
      break;
    case 3:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    case 4:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
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
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getMessageUnits();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 module_sid = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.getModuleSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 message_units = 2;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.getMessageUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.setMessageUnits = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 3;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 3));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.hasOmniCampaign = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional api.commons.OmniMessage message = 4;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 4));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} returns this
*/
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent} returns this
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelSmsMessageSentModuleEvent.prototype.hasMessage = function() {
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
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    campaignModuleSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    conversationSid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    channelType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    campaign: (f = msg.getCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelModuleInitialReplyEvent;
  return proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCampaignModuleSid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConversationSid(value);
      break;
    case 5:
      var value = /** @type {!proto.api.commons.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 6:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 7:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCampaignSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCampaignModuleSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getConversationSid();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.getCampaignSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 campaign_module_sid = 3;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.getCampaignModuleSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.setCampaignModuleSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 conversation_sid = 4;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.getConversationSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.setConversationSid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional api.commons.ChannelType channel_type = 5;
 * @return {!proto.api.commons.ChannelType}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.getChannelType = function() {
  return /** @type {!proto.api.commons.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.api.commons.ChannelType} value
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.setChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional api.commons.OmniMessage message = 6;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 6));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
*/
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional api.commons.OmniCampaign campaign = 7;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.getCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 7));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
*/
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelModuleInitialReplyEvent} returns this
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelModuleInitialReplyEvent.prototype.hasCampaign = function() {
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
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelTaskMessageSentEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    taskSid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    campaignSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    moduleSid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    messageUnits: jspb.Message.getFieldWithDefault(msg, 4, 0),
    campaign: (f = msg.getCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
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
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelTaskMessageSentEvent;
  return proto.api.commons.audit.OmnichannelTaskMessageSentEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTaskSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCampaignSid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModuleSid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMessageUnits(value);
      break;
    case 5:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    case 6:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 7:
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
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelTaskMessageSentEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTaskSid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCampaignSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getModuleSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMessageUnits();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      api_commons_omnichannel_pb.OmniTask.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 task_sid = 1;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.getTaskSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.setTaskSid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 campaign_sid = 2;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.getCampaignSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.setCampaignSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 module_sid = 3;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.getModuleSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.setModuleSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 message_units = 4;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.getMessageUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.setMessageUnits = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional api.commons.OmniCampaign campaign = 5;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.getCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 5));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
*/
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional api.commons.OmniMessage message = 6;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 6));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
*/
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional api.commons.OmniTask task = 7;
 * @return {?proto.api.commons.OmniTask}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.getTask = function() {
  return /** @type{?proto.api.commons.OmniTask} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniTask, 7));
};


/**
 * @param {?proto.api.commons.OmniTask|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
*/
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.setTask = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelTaskMessageSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelTaskMessageSentEvent.prototype.hasTask = function() {
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
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    omniCampaign: (f = msg.getOmniCampaign()) && api_commons_omnichannel_pb.OmniCampaign.toObject(includeInstance, f),
    campaignModuleSid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    connectedInbox: (f = msg.getConnectedInbox()) && api_commons_omnichannel_pb.ConnectedInbox.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent}
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelConnectedInboxPollEvent;
  return proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent}
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniCampaign;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniCampaign.deserializeBinaryFromReader);
      msg.setOmniCampaign(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCampaignModuleSid(value);
      break;
    case 3:
      var value = new api_commons_omnichannel_pb.ConnectedInbox;
      reader.readMessage(value,api_commons_omnichannel_pb.ConnectedInbox.deserializeBinaryFromReader);
      msg.setConnectedInbox(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOmniCampaign();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniCampaign.serializeBinaryToWriter
    );
  }
  f = message.getCampaignModuleSid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getConnectedInbox();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      api_commons_omnichannel_pb.ConnectedInbox.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.OmniCampaign omni_campaign = 1;
 * @return {?proto.api.commons.OmniCampaign}
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.getOmniCampaign = function() {
  return /** @type{?proto.api.commons.OmniCampaign} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniCampaign, 1));
};


/**
 * @param {?proto.api.commons.OmniCampaign|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent} returns this
*/
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.setOmniCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent} returns this
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.clearOmniCampaign = function() {
  return this.setOmniCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.hasOmniCampaign = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 campaign_module_sid = 2;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.getCampaignModuleSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent} returns this
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.setCampaignModuleSid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional api.commons.ConnectedInbox connected_inbox = 3;
 * @return {?proto.api.commons.ConnectedInbox}
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.getConnectedInbox = function() {
  return /** @type{?proto.api.commons.ConnectedInbox} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.ConnectedInbox, 3));
};


/**
 * @param {?proto.api.commons.ConnectedInbox|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent} returns this
*/
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.setConnectedInbox = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxPollEvent} returns this
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.clearConnectedInbox = function() {
  return this.setConnectedInbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelConnectedInboxPollEvent.prototype.hasConnectedInbox = function() {
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
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectedInbox: (f = msg.getConnectedInbox()) && api_commons_omnichannel_pb.ConnectedInbox.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent}
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent;
  return proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent}
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectedInbox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.ConnectedInbox.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.ConnectedInbox connected_inbox = 1;
 * @return {?proto.api.commons.ConnectedInbox}
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.prototype.getConnectedInbox = function() {
  return /** @type{?proto.api.commons.ConnectedInbox} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.ConnectedInbox, 1));
};


/**
 * @param {?proto.api.commons.ConnectedInbox|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent} returns this
*/
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.prototype.setConnectedInbox = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent} returns this
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.prototype.clearConnectedInbox = function() {
  return this.setConnectedInbox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelConnectedInboxCreatedEvent.prototype.hasConnectedInbox = function() {
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
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    messageUnits: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent}
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent;
  return proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent}
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessageUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessageUnits();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional api.commons.OmniMessage message = 1;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 1));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent} returns this
*/
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 message_units = 2;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.prototype.getMessageUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent} returns this
 */
proto.api.commons.audit.OmnichannelAgentMessageUnitsEvent.prototype.setMessageUnits = function(value) {
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
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    messageUnits: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent}
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent;
  return proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent}
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessageUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessageUnits();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional api.commons.OmniMessage message = 1;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 1));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent} returns this
*/
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent} returns this
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 message_units = 2;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.prototype.getMessageUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent} returns this
 */
proto.api.commons.audit.OmnichannelManagerMessageUnitsEvent.prototype.setMessageUnits = function(value) {
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
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    messageUnits: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent}
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent;
  return proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent}
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessageUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessageUnits();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional api.commons.OmniMessage message = 1;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 1));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent} returns this
*/
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent} returns this
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 message_units = 2;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.prototype.getMessageUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent} returns this
 */
proto.api.commons.audit.OmnichannelCustomerMessageUnitsEvent.prototype.setMessageUnits = function(value) {
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
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    messageUnits: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent}
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent;
  return proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent}
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessageUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessageUnits();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional api.commons.OmniMessage message = 1;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 1));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent} returns this
*/
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent} returns this
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 message_units = 2;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.prototype.getMessageUnits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent} returns this
 */
proto.api.commons.audit.OmnichannelSystemMessageUnitsEvent.prototype.setMessageUnits = function(value) {
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
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelPaymentLinkSentEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && api_commons_omnichannel_pb.OmniMessage.toObject(includeInstance, f),
    link: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelPaymentLinkSentEvent}
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelPaymentLinkSentEvent;
  return proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelPaymentLinkSentEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelPaymentLinkSentEvent}
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_omnichannel_pb.OmniMessage;
      reader.readMessage(value,api_commons_omnichannel_pb.OmniMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelPaymentLinkSentEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniMessage.serializeBinaryToWriter
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional api.commons.OmniMessage message = 1;
 * @return {?proto.api.commons.OmniMessage}
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.prototype.getMessage = function() {
  return /** @type{?proto.api.commons.OmniMessage} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniMessage, 1));
};


/**
 * @param {?proto.api.commons.OmniMessage|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelPaymentLinkSentEvent} returns this
*/
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelPaymentLinkSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string link = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelPaymentLinkSentEvent} returns this
 */
proto.api.commons.audit.OmnichannelPaymentLinkSentEvent.prototype.setLink = function(value) {
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
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    task: (f = msg.getTask()) && api_commons_omnichannel_pb.OmniTask.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    asmSessionSid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent;
  return proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
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
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniTask.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAsmSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional api.commons.OmniTask task = 1;
 * @return {?proto.api.commons.OmniTask}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.getTask = function() {
  return /** @type{?proto.api.commons.OmniTask} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniTask, 1));
};


/**
 * @param {?proto.api.commons.OmniTask|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent} returns this
*/
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.setTask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 asm_session_sid = 3;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.getAsmSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    task: (f = msg.getTask()) && api_commons_omnichannel_pb.OmniTask.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    asmSessionSid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent;
  return proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
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
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniTask.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAsmSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional api.commons.OmniTask task = 1;
 * @return {?proto.api.commons.OmniTask}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.getTask = function() {
  return /** @type{?proto.api.commons.OmniTask} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniTask, 1));
};


/**
 * @param {?proto.api.commons.OmniTask|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent} returns this
*/
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.setTask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 asm_session_sid = 3;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.getAsmSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRejectedEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    task: (f = msg.getTask()) && api_commons_omnichannel_pb.OmniTask.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    asmSessionSid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent;
  return proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
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
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniTask.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAsmSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional api.commons.OmniTask task = 1;
 * @return {?proto.api.commons.OmniTask}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.getTask = function() {
  return /** @type{?proto.api.commons.OmniTask} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniTask, 1));
};


/**
 * @param {?proto.api.commons.OmniTask|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent} returns this
*/
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.setTask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 asm_session_sid = 3;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.getAsmSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    task: (f = msg.getTask()) && api_commons_omnichannel_pb.OmniTask.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    asmSessionSid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent;
  return proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
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
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_omnichannel_pb.OmniTask.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAsmSessionSid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional api.commons.OmniTask task = 1;
 * @return {?proto.api.commons.OmniTask}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.getTask = function() {
  return /** @type{?proto.api.commons.OmniTask} */ (
    jspb.Message.getWrapperField(this, api_commons_omnichannel_pb.OmniTask, 1));
};


/**
 * @param {?proto.api.commons.OmniTask|undefined} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent} returns this
*/
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.setTask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.hasTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 asm_session_sid = 3;
 * @return {number}
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.getAsmSessionSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent} returns this
 */
proto.api.commons.audit.OmnichannelManualApproveTaskRequeueEvent.prototype.setAsmSessionSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.api.commons.audit);
