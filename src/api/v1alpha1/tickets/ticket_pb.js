// source: api/v1alpha1/tickets/ticket.proto
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

var api_commons_tickets_pb = require('../../../api/commons/tickets_pb.js');
goog.object.extend(proto, api_commons_tickets_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.v1alpha1.tickets.AssignProjectTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.AssignProjectTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.AssignTicketActionRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.AssignTicketActionResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.AssignTicketReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.AssignTicketRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.AvailableTicketsFilter', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ChangeTicketStatusRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ChangeTicketStatusResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CloseTicketActionRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CloseTicketActionResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CloseTicketReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CloseTicketRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateCommentReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateCommentRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateSelfAssignReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateSelfAssignRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateSlaReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateSlaRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateTicketActionRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateTicketActionResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateTicketReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateTicketRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateTicketTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.CreateTicketTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.EditMaskTicketReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.EditMaskTicketRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.EditTicketReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.EditTicketRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.EditTicketTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.EditTicketTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.GetActionTypeRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.GetActionTypeResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListAllocatedTicketReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListAllocatedTicketRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListSkillsRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListSkillsResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListSlaConditionReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListSlaConditionRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListSlaReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListSlaRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListTicketTemplateRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListTicketTemplateResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListTicketsReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListTicketsRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListUsersRequest', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ListUsersResponse', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.PingReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.PingRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ReplyCommentReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ReplyCommentRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.Skill', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.UpdateSlaReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.UpdateSlaRes', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.User', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ViewTicketReq', null, global);
goog.exportSymbol('proto.api.v1alpha1.tickets.ViewTicketRes', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.PingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.PingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.PingReq.displayName = 'proto.api.v1alpha1.tickets.PingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.PingRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.PingRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.PingRes.displayName = 'proto.api.v1alpha1.tickets.PingRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateTicketReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.CreateTicketReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateTicketReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateTicketReq.displayName = 'proto.api.v1alpha1.tickets.CreateTicketReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateTicketTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.displayName = 'proto.api.v1alpha1.tickets.CreateTicketTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateTicketTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.displayName = 'proto.api.v1alpha1.tickets.CreateTicketTemplateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.EditTicketTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.EditTicketTemplateRequest.displayName = 'proto.api.v1alpha1.tickets.EditTicketTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.EditTicketTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.EditTicketTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.EditTicketTemplateResponse.displayName = 'proto.api.v1alpha1.tickets.EditTicketTemplateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListTicketTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListTicketTemplateRequest.displayName = 'proto.api.v1alpha1.tickets.ListTicketTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ListTicketTemplateResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListTicketTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListTicketTemplateResponse.displayName = 'proto.api.v1alpha1.tickets.ListTicketTemplateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.AssignProjectTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.displayName = 'proto.api.v1alpha1.tickets.AssignProjectTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.AssignProjectTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.displayName = 'proto.api.v1alpha1.tickets.AssignProjectTemplateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateTicketRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateTicketRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateTicketRes.displayName = 'proto.api.v1alpha1.tickets.CreateTicketRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.GetActionTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.GetActionTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.GetActionTypeRequest.displayName = 'proto.api.v1alpha1.tickets.GetActionTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.GetActionTypeResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.GetActionTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.GetActionTypeResponse.displayName = 'proto.api.v1alpha1.tickets.GetActionTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.displayName = 'proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.displayName = 'proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.EditTicketReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.EditTicketReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.EditTicketReq.displayName = 'proto.api.v1alpha1.tickets.EditTicketReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.EditMaskTicketReq.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.EditMaskTicketReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.EditMaskTicketReq.displayName = 'proto.api.v1alpha1.tickets.EditMaskTicketReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.EditMaskTicketRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.EditMaskTicketRes.displayName = 'proto.api.v1alpha1.tickets.EditMaskTicketRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ListAllocatedTicketRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListAllocatedTicketRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListAllocatedTicketRes.displayName = 'proto.api.v1alpha1.tickets.ListAllocatedTicketRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListAllocatedTicketReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListAllocatedTicketReq.displayName = 'proto.api.v1alpha1.tickets.ListAllocatedTicketReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.displayName = 'proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.displayName = 'proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.AvailableTicketsFilter.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.AvailableTicketsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.AvailableTicketsFilter.displayName = 'proto.api.v1alpha1.tickets.AvailableTicketsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.EditTicketRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.EditTicketRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.EditTicketRes.displayName = 'proto.api.v1alpha1.tickets.EditTicketRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListTicketsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListTicketsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListTicketsReq.displayName = 'proto.api.v1alpha1.tickets.ListTicketsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListTicketsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ListTicketsRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListTicketsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListTicketsRes.displayName = 'proto.api.v1alpha1.tickets.ListTicketsRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.AssignTicketReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.AssignTicketReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.AssignTicketReq.displayName = 'proto.api.v1alpha1.tickets.AssignTicketReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.AssignTicketRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.AssignTicketRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.AssignTicketRes.displayName = 'proto.api.v1alpha1.tickets.AssignTicketRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ViewTicketReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ViewTicketReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ViewTicketReq.displayName = 'proto.api.v1alpha1.tickets.ViewTicketReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ViewTicketRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ViewTicketRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ViewTicketRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ViewTicketRes.displayName = 'proto.api.v1alpha1.tickets.ViewTicketRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateCommentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateCommentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateCommentReq.displayName = 'proto.api.v1alpha1.tickets.CreateCommentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateCommentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateCommentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateCommentRes.displayName = 'proto.api.v1alpha1.tickets.CreateCommentRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CloseTicketReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CloseTicketReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CloseTicketReq.displayName = 'proto.api.v1alpha1.tickets.CloseTicketReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CloseTicketRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CloseTicketRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CloseTicketRes.displayName = 'proto.api.v1alpha1.tickets.CloseTicketRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateSlaReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateSlaReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateSlaReq.displayName = 'proto.api.v1alpha1.tickets.CreateSlaReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateSlaRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateSlaRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateSlaRes.displayName = 'proto.api.v1alpha1.tickets.CreateSlaRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListSlaReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListSlaReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListSlaReq.displayName = 'proto.api.v1alpha1.tickets.ListSlaReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListSlaRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ListSlaRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListSlaRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListSlaRes.displayName = 'proto.api.v1alpha1.tickets.ListSlaRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.UpdateSlaReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.UpdateSlaReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.UpdateSlaReq.displayName = 'proto.api.v1alpha1.tickets.UpdateSlaReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.UpdateSlaRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.UpdateSlaRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.UpdateSlaRes.displayName = 'proto.api.v1alpha1.tickets.UpdateSlaRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListSlaConditionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListSlaConditionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListSlaConditionReq.displayName = 'proto.api.v1alpha1.tickets.ListSlaConditionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ListSlaConditionRes.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListSlaConditionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListSlaConditionRes.displayName = 'proto.api.v1alpha1.tickets.ListSlaConditionRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ReplyCommentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ReplyCommentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ReplyCommentReq.displayName = 'proto.api.v1alpha1.tickets.ReplyCommentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ReplyCommentRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ReplyCommentRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ReplyCommentRes.displayName = 'proto.api.v1alpha1.tickets.ReplyCommentRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateSelfAssignReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateSelfAssignReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateSelfAssignReq.displayName = 'proto.api.v1alpha1.tickets.CreateSelfAssignReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateSelfAssignRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateSelfAssignRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateSelfAssignRes.displayName = 'proto.api.v1alpha1.tickets.CreateSelfAssignRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListSkillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListSkillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListSkillsRequest.displayName = 'proto.api.v1alpha1.tickets.ListSkillsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListSkillsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ListSkillsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListSkillsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListSkillsResponse.displayName = 'proto.api.v1alpha1.tickets.ListSkillsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.Skill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.Skill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.Skill.displayName = 'proto.api.v1alpha1.tickets.Skill';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListUsersRequest.displayName = 'proto.api.v1alpha1.tickets.ListUsersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ListUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.v1alpha1.tickets.ListUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ListUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ListUsersResponse.displayName = 'proto.api.v1alpha1.tickets.ListUsersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.User.displayName = 'proto.api.v1alpha1.tickets.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateTicketActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateTicketActionRequest.displayName = 'proto.api.v1alpha1.tickets.CreateTicketActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CreateTicketActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CreateTicketActionResponse.displayName = 'proto.api.v1alpha1.tickets.CreateTicketActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CloseTicketActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CloseTicketActionRequest.displayName = 'proto.api.v1alpha1.tickets.CloseTicketActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.CloseTicketActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.CloseTicketActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.CloseTicketActionResponse.displayName = 'proto.api.v1alpha1.tickets.CloseTicketActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.AssignTicketActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.AssignTicketActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.AssignTicketActionRequest.displayName = 'proto.api.v1alpha1.tickets.AssignTicketActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.AssignTicketActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.AssignTicketActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.AssignTicketActionResponse.displayName = 'proto.api.v1alpha1.tickets.AssignTicketActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ChangeTicketStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.displayName = 'proto.api.v1alpha1.tickets.ChangeTicketStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1alpha1.tickets.ChangeTicketStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.displayName = 'proto.api.v1alpha1.tickets.ChangeTicketStatusResponse';
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
proto.api.v1alpha1.tickets.PingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.PingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.PingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.PingReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.PingReq}
 */
proto.api.v1alpha1.tickets.PingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.PingReq;
  return proto.api.v1alpha1.tickets.PingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.PingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.PingReq}
 */
proto.api.v1alpha1.tickets.PingReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.PingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.PingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.PingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.PingReq.serializeBinaryToWriter = function(message, writer) {
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
proto.api.v1alpha1.tickets.PingRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.PingRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.PingRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.PingRes.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.PingRes}
 */
proto.api.v1alpha1.tickets.PingRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.PingRes;
  return proto.api.v1alpha1.tickets.PingRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.PingRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.PingRes}
 */
proto.api.v1alpha1.tickets.PingRes.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.PingRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.PingRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.PingRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.PingRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.CreateTicketReq.repeatedFields_ = [9,10,12,15,16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateTicketReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateTicketReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    projectSid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    dueDate: (f = msg.getDueDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    api_commons_tickets_pb.Metadata.toObject, includeInstance),
    ticketSkillsList: jspb.Message.toObjectList(msg.getTicketSkillsList(),
    api_commons_tickets_pb.Skills.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    ticketSlaList: jspb.Message.toObjectList(msg.getTicketSlaList(),
    api_commons_tickets_pb.Sla.toObject, includeInstance),
    assignSelf: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    assignOther: jspb.Message.getFieldWithDefault(msg, 14, ""),
    ticketActionList: jspb.Message.toObjectList(msg.getTicketActionList(),
    api_commons_tickets_pb.TicketAction.toObject, includeInstance),
    ticketAssigneeList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateTicketReq;
  return proto.api.v1alpha1.tickets.CreateTicketReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectSid(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDueDate(value);
      break;
    case 9:
      var value = new api_commons_tickets_pb.Metadata;
      reader.readMessage(value,api_commons_tickets_pb.Metadata.deserializeBinaryFromReader);
      msg.addMetadata(value);
      break;
    case 10:
      var value = new api_commons_tickets_pb.Skills;
      reader.readMessage(value,api_commons_tickets_pb.Skills.deserializeBinaryFromReader);
      msg.addTicketSkills(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStatus(value);
      break;
    case 12:
      var value = new api_commons_tickets_pb.Sla;
      reader.readMessage(value,api_commons_tickets_pb.Sla.deserializeBinaryFromReader);
      msg.addTicketSla(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssignSelf(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssignOther(value);
      break;
    case 15:
      var value = new api_commons_tickets_pb.TicketAction;
      reader.readMessage(value,api_commons_tickets_pb.TicketAction.deserializeBinaryFromReader);
      msg.addTicketAction(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addTicketAssignee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateTicketReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
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
  f = message.getProjectSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getDueDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      api_commons_tickets_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getTicketSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      api_commons_tickets_pb.Skills.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getTicketSlaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      api_commons_tickets_pb.Sla.serializeBinaryToWriter
    );
  }
  f = message.getAssignSelf();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getAssignOther();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getTicketActionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      api_commons_tickets_pb.TicketAction.serializeBinaryToWriter
    );
  }
  f = message.getTicketAssigneeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 project_sid = 3;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getProjectSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setProjectSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp due_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getDueDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setDueDate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.clearDueDate = function() {
  return this.setDueDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.hasDueDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated api.commons.Metadata metadata = 9;
 * @return {!Array<!proto.api.commons.Metadata>}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.api.commons.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.Metadata, 9));
};


/**
 * @param {!Array<!proto.api.commons.Metadata>} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.api.commons.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Metadata}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.api.commons.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};


/**
 * repeated api.commons.Skills ticket_skills = 10;
 * @return {!Array<!proto.api.commons.Skills>}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getTicketSkillsList = function() {
  return /** @type{!Array<!proto.api.commons.Skills>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.Skills, 10));
};


/**
 * @param {!Array<!proto.api.commons.Skills>} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setTicketSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.api.commons.Skills=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Skills}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.addTicketSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.api.commons.Skills, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.clearTicketSkillsList = function() {
  return this.setTicketSkillsList([]);
};


/**
 * optional int64 status = 11;
 * @return {number}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * repeated api.commons.Sla ticket_sla = 12;
 * @return {!Array<!proto.api.commons.Sla>}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getTicketSlaList = function() {
  return /** @type{!Array<!proto.api.commons.Sla>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.Sla, 12));
};


/**
 * @param {!Array<!proto.api.commons.Sla>} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setTicketSlaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.api.commons.Sla=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Sla}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.addTicketSla = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.api.commons.Sla, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.clearTicketSlaList = function() {
  return this.setTicketSlaList([]);
};


/**
 * optional bool assign_self = 13;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getAssignSelf = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setAssignSelf = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string assign_other = 14;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getAssignOther = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setAssignOther = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated api.commons.TicketAction ticket_action = 15;
 * @return {!Array<!proto.api.commons.TicketAction>}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getTicketActionList = function() {
  return /** @type{!Array<!proto.api.commons.TicketAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.TicketAction, 15));
};


/**
 * @param {!Array<!proto.api.commons.TicketAction>} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setTicketActionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.api.commons.TicketAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.TicketAction}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.addTicketAction = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.api.commons.TicketAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.clearTicketActionList = function() {
  return this.setTicketActionList([]);
};


/**
 * repeated string ticket_assignee = 16;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.getTicketAssigneeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.setTicketAssigneeList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.addTicketAssignee = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketReq.prototype.clearTicketAssigneeList = function() {
  return this.setTicketAssigneeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateTicketTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketTemplate: (f = msg.getTicketTemplate()) && api_commons_tickets_pb.TicketTemplate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketTemplateRequest}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateTicketTemplateRequest;
  return proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketTemplateRequest}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketTemplate;
      reader.readMessage(value,api_commons_tickets_pb.TicketTemplate.deserializeBinaryFromReader);
      msg.setTicketTemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.TicketTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.TicketTemplate ticket_template = 1;
 * @return {?proto.api.commons.TicketTemplate}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.prototype.getTicketTemplate = function() {
  return /** @type{?proto.api.commons.TicketTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketTemplate, 1));
};


/**
 * @param {?proto.api.commons.TicketTemplate|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketTemplateRequest} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.prototype.setTicketTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.prototype.clearTicketTemplate = function() {
  return this.setTicketTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateRequest.prototype.hasTicketTemplate = function() {
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
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateTicketTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketTemplate: (f = msg.getTicketTemplate()) && api_commons_tickets_pb.TicketTemplate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketTemplateResponse}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateTicketTemplateResponse;
  return proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketTemplateResponse}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketTemplate;
      reader.readMessage(value,api_commons_tickets_pb.TicketTemplate.deserializeBinaryFromReader);
      msg.setTicketTemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.TicketTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.TicketTemplate ticket_template = 1;
 * @return {?proto.api.commons.TicketTemplate}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.prototype.getTicketTemplate = function() {
  return /** @type{?proto.api.commons.TicketTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketTemplate, 1));
};


/**
 * @param {?proto.api.commons.TicketTemplate|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketTemplateResponse} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.prototype.setTicketTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketTemplateResponse} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.prototype.clearTicketTemplate = function() {
  return this.setTicketTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateTicketTemplateResponse.prototype.hasTicketTemplate = function() {
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
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.EditTicketTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketTemplateId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    editValue: (f = msg.getEditValue()) && api_commons_tickets_pb.TicketTemplate.toObject(includeInstance, f),
    editedFieldsMask: (f = msg.getEditedFieldsMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.EditTicketTemplateRequest;
  return proto.api.v1alpha1.tickets.EditTicketTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketTemplateId(value);
      break;
    case 2:
      var value = new api_commons_tickets_pb.TicketTemplate;
      reader.readMessage(value,api_commons_tickets_pb.TicketTemplate.deserializeBinaryFromReader);
      msg.setEditValue(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setEditedFieldsMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.EditTicketTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketTemplateId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getEditValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_tickets_pb.TicketTemplate.serializeBinaryToWriter
    );
  }
  f = message.getEditedFieldsMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ticket_template_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.getTicketTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.setTicketTemplateId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.TicketTemplate edit_value = 2;
 * @return {?proto.api.commons.TicketTemplate}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.getEditValue = function() {
  return /** @type{?proto.api.commons.TicketTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketTemplate, 2));
};


/**
 * @param {?proto.api.commons.TicketTemplate|undefined} value
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest} returns this
*/
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.setEditValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.clearEditValue = function() {
  return this.setEditValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.hasEditValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask edited_fields_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.getEditedFieldsMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest} returns this
*/
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.setEditedFieldsMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.clearEditedFieldsMask = function() {
  return this.setEditedFieldsMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateRequest.prototype.hasEditedFieldsMask = function() {
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
proto.api.v1alpha1.tickets.EditTicketTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.EditTicketTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.EditTicketTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditTicketTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isEdited: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateResponse}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.EditTicketTemplateResponse;
  return proto.api.v1alpha1.tickets.EditTicketTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.EditTicketTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateResponse}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEdited(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.EditTicketTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.EditTicketTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditTicketTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEdited();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_edited = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.EditTicketTemplateResponse.prototype.getIsEdited = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.EditTicketTemplateResponse} returns this
 */
proto.api.v1alpha1.tickets.EditTicketTemplateResponse.prototype.setIsEdited = function(value) {
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
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListTicketTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketTemplateId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    requestMask: (f = msg.getRequestMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    templateId: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    templateProjectId: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListTicketTemplateRequest;
  return proto.api.v1alpha1.tickets.ListTicketTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketTemplateId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProjectId(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setRequestMask(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTemplateId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTemplateProjectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListTicketTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketTemplateId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRequestMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getTemplateId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
  f = message.getTemplateProjectId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
    );
  }
};


/**
 * optional int64 ticket_template_id = 1;
 * @return {number}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.getTicketTemplateId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.setTicketTemplateId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 project_id = 2;
 * @return {number}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.getProjectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask request_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.getRequestMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} returns this
*/
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.setRequestMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.clearRequestMask = function() {
  return this.setRequestMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.hasRequestMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 template_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.getTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.setTemplateId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional int64 template_project_id = 5;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.getTemplateProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.ListTicketTemplateRequest.prototype.setTemplateProjectId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListTicketTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabledTemplatesList: jspb.Message.toObjectList(msg.getEnabledTemplatesList(),
    api_commons_tickets_pb.ListTemplate.toObject, includeInstance),
    ticketProjectTemplateList: jspb.Message.toObjectList(msg.getTicketProjectTemplateList(),
    api_commons_tickets_pb.TicketProjectTemplate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListTicketTemplateResponse;
  return proto.api.v1alpha1.tickets.ListTicketTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.ListTemplate;
      reader.readMessage(value,api_commons_tickets_pb.ListTemplate.deserializeBinaryFromReader);
      msg.addEnabledTemplates(value);
      break;
    case 2:
      var value = new api_commons_tickets_pb.TicketProjectTemplate;
      reader.readMessage(value,api_commons_tickets_pb.TicketProjectTemplate.deserializeBinaryFromReader);
      msg.addTicketProjectTemplate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListTicketTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabledTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_tickets_pb.ListTemplate.serializeBinaryToWriter
    );
  }
  f = message.getTicketProjectTemplateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_tickets_pb.TicketProjectTemplate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.ListTemplate enabled_templates = 1;
 * @return {!Array<!proto.api.commons.ListTemplate>}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.getEnabledTemplatesList = function() {
  return /** @type{!Array<!proto.api.commons.ListTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.ListTemplate, 1));
};


/**
 * @param {!Array<!proto.api.commons.ListTemplate>} value
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse} returns this
*/
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.setEnabledTemplatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.ListTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ListTemplate}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.addEnabledTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.ListTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse} returns this
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.clearEnabledTemplatesList = function() {
  return this.setEnabledTemplatesList([]);
};


/**
 * repeated api.commons.TicketProjectTemplate ticket_project_template = 2;
 * @return {!Array<!proto.api.commons.TicketProjectTemplate>}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.getTicketProjectTemplateList = function() {
  return /** @type{!Array<!proto.api.commons.TicketProjectTemplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.TicketProjectTemplate, 2));
};


/**
 * @param {!Array<!proto.api.commons.TicketProjectTemplate>} value
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse} returns this
*/
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.setTicketProjectTemplateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.TicketProjectTemplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.TicketProjectTemplate}
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.addTicketProjectTemplate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.TicketProjectTemplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListTicketTemplateResponse} returns this
 */
proto.api.v1alpha1.tickets.ListTicketTemplateResponse.prototype.clearTicketProjectTemplateList = function() {
  return this.setTicketProjectTemplateList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectTemplate: (f = msg.getProjectTemplate()) && api_commons_tickets_pb.AssignProjectTemplate.toObject(includeInstance, f),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    templateDescriptionList: jspb.Message.toObjectList(msg.getTemplateDescriptionList(),
    api_commons_tickets_pb.TemplateDescription.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.AssignProjectTemplateRequest;
  return proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.AssignProjectTemplate;
      reader.readMessage(value,api_commons_tickets_pb.AssignProjectTemplate.deserializeBinaryFromReader);
      msg.setProjectTemplate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setProjectId(value);
      break;
    case 3:
      var value = new api_commons_tickets_pb.TemplateDescription;
      reader.readMessage(value,api_commons_tickets_pb.TemplateDescription.deserializeBinaryFromReader);
      msg.addTemplateDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectTemplate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.AssignProjectTemplate.serializeBinaryToWriter
    );
  }
  f = message.getProjectId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getTemplateDescriptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      api_commons_tickets_pb.TemplateDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.AssignProjectTemplate project_template = 1;
 * @return {?proto.api.commons.AssignProjectTemplate}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.getProjectTemplate = function() {
  return /** @type{?proto.api.commons.AssignProjectTemplate} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.AssignProjectTemplate, 1));
};


/**
 * @param {?proto.api.commons.AssignProjectTemplate|undefined} value
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest} returns this
*/
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.setProjectTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.clearProjectTemplate = function() {
  return this.setProjectTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.hasProjectTemplate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 project_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * repeated api.commons.TemplateDescription template_description = 3;
 * @return {!Array<!proto.api.commons.TemplateDescription>}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.getTemplateDescriptionList = function() {
  return /** @type{!Array<!proto.api.commons.TemplateDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.TemplateDescription, 3));
};


/**
 * @param {!Array<!proto.api.commons.TemplateDescription>} value
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest} returns this
*/
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.setTemplateDescriptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.TemplateDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.TemplateDescription}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.addTemplateDescription = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.TemplateDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateRequest} returns this
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateRequest.prototype.clearTemplateDescriptionList = function() {
  return this.setTemplateDescriptionList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.AssignProjectTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAssigned: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateResponse}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.AssignProjectTemplateResponse;
  return proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.AssignProjectTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateResponse}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAssigned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.AssignProjectTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAssigned();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_assigned = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.prototype.getIsAssigned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.AssignProjectTemplateResponse} returns this
 */
proto.api.v1alpha1.tickets.AssignProjectTemplateResponse.prototype.setIsAssigned = function(value) {
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
proto.api.v1alpha1.tickets.CreateTicketRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateTicketRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateTicketRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: (f = msg.getTicket()) && api_commons_tickets_pb.Ticket.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketRes}
 */
proto.api.v1alpha1.tickets.CreateTicketRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateTicketRes;
  return proto.api.v1alpha1.tickets.CreateTicketRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketRes}
 */
proto.api.v1alpha1.tickets.CreateTicketRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.Ticket;
      reader.readMessage(value,api_commons_tickets_pb.Ticket.deserializeBinaryFromReader);
      msg.setTicket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateTicketRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateTicketRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.Ticket.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Ticket ticket = 1;
 * @return {?proto.api.commons.Ticket}
 */
proto.api.v1alpha1.tickets.CreateTicketRes.prototype.getTicket = function() {
  return /** @type{?proto.api.commons.Ticket} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.Ticket, 1));
};


/**
 * @param {?proto.api.commons.Ticket|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketRes} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketRes.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketRes} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketRes.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateTicketRes.prototype.hasTicket = function() {
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
proto.api.v1alpha1.tickets.GetActionTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.GetActionTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.GetActionTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.GetActionTypeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.GetActionTypeRequest}
 */
proto.api.v1alpha1.tickets.GetActionTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.GetActionTypeRequest;
  return proto.api.v1alpha1.tickets.GetActionTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.GetActionTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.GetActionTypeRequest}
 */
proto.api.v1alpha1.tickets.GetActionTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.GetActionTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.GetActionTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.GetActionTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.GetActionTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.GetActionTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.GetActionTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionTypeList: jspb.Message.toObjectList(msg.getActionTypeList(),
    api_commons_tickets_pb.ActionType.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.GetActionTypeResponse}
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.GetActionTypeResponse;
  return proto.api.v1alpha1.tickets.GetActionTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.GetActionTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.GetActionTypeResponse}
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.ActionType;
      reader.readMessage(value,api_commons_tickets_pb.ActionType.deserializeBinaryFromReader);
      msg.addActionType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.GetActionTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.GetActionTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_tickets_pb.ActionType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.ActionType action_type = 1;
 * @return {!Array<!proto.api.commons.ActionType>}
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.prototype.getActionTypeList = function() {
  return /** @type{!Array<!proto.api.commons.ActionType>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.ActionType, 1));
};


/**
 * @param {!Array<!proto.api.commons.ActionType>} value
 * @return {!proto.api.v1alpha1.tickets.GetActionTypeResponse} returns this
*/
proto.api.v1alpha1.tickets.GetActionTypeResponse.prototype.setActionTypeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.ActionType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ActionType}
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.prototype.addActionType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.ActionType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.GetActionTypeResponse} returns this
 */
proto.api.v1alpha1.tickets.GetActionTypeResponse.prototype.clearActionTypeList = function() {
  return this.setActionTypeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest;
  return proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string phone_number = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest} returns this
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeRequest.prototype.setPhoneNumber = function(value) {
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
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    phoneType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse;
  return proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.commons.PhoneNumberType} */ (reader.readEnum());
      msg.setPhoneType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhoneType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional api.commons.PhoneNumberType phone_type = 1;
 * @return {!proto.api.commons.PhoneNumberType}
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.prototype.getPhoneType = function() {
  return /** @type {!proto.api.commons.PhoneNumberType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.commons.PhoneNumberType} value
 * @return {!proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse} returns this
 */
proto.api.v1alpha1.tickets.GetPhoneNumberTypeResponse.prototype.setPhoneType = function(value) {
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
proto.api.v1alpha1.tickets.EditTicketReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.EditTicketReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.EditTicketReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditTicketReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    editValue: (f = msg.getEditValue()) && api_commons_tickets_pb.EditAttribute.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.EditTicketReq}
 */
proto.api.v1alpha1.tickets.EditTicketReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.EditTicketReq;
  return proto.api.v1alpha1.tickets.EditTicketReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.EditTicketReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.EditTicketReq}
 */
proto.api.v1alpha1.tickets.EditTicketReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    case 2:
      var value = new api_commons_tickets_pb.EditAttribute;
      reader.readMessage(value,api_commons_tickets_pb.EditAttribute.deserializeBinaryFromReader);
      msg.setEditValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.EditTicketReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.EditTicketReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.EditTicketReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditTicketReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getEditValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_tickets_pb.EditAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ticket_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.EditTicketReq.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.EditTicketReq} returns this
 */
proto.api.v1alpha1.tickets.EditTicketReq.prototype.setTicketSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.EditAttribute edit_value = 2;
 * @return {?proto.api.commons.EditAttribute}
 */
proto.api.v1alpha1.tickets.EditTicketReq.prototype.getEditValue = function() {
  return /** @type{?proto.api.commons.EditAttribute} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.EditAttribute, 2));
};


/**
 * @param {?proto.api.commons.EditAttribute|undefined} value
 * @return {!proto.api.v1alpha1.tickets.EditTicketReq} returns this
*/
proto.api.v1alpha1.tickets.EditTicketReq.prototype.setEditValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.EditTicketReq} returns this
 */
proto.api.v1alpha1.tickets.EditTicketReq.prototype.clearEditValue = function() {
  return this.setEditValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.EditTicketReq.prototype.hasEditValue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.EditMaskTicketReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.EditMaskTicketReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    editValue: (f = msg.getEditValue()) && api_commons_tickets_pb.Ticket.toObject(includeInstance, f),
    editedFieldsMaskList: jspb.Message.toObjectList(msg.getEditedFieldsMaskList(),
    google_protobuf_field_mask_pb.FieldMask.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketReq}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.EditMaskTicketReq;
  return proto.api.v1alpha1.tickets.EditMaskTicketReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.EditMaskTicketReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketReq}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    case 2:
      var value = new api_commons_tickets_pb.Ticket;
      reader.readMessage(value,api_commons_tickets_pb.Ticket.deserializeBinaryFromReader);
      msg.setEditValue(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.addEditedFieldsMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.EditMaskTicketReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.EditMaskTicketReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getEditValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      api_commons_tickets_pb.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getEditedFieldsMaskList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ticket_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketReq} returns this
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.setTicketSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional api.commons.Ticket edit_value = 2;
 * @return {?proto.api.commons.Ticket}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.getEditValue = function() {
  return /** @type{?proto.api.commons.Ticket} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.Ticket, 2));
};


/**
 * @param {?proto.api.commons.Ticket|undefined} value
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketReq} returns this
*/
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.setEditValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketReq} returns this
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.clearEditValue = function() {
  return this.setEditValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.hasEditValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated google.protobuf.FieldMask edited_fields_mask = 3;
 * @return {!Array<!proto.google.protobuf.FieldMask>}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.getEditedFieldsMaskList = function() {
  return /** @type{!Array<!proto.google.protobuf.FieldMask>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {!Array<!proto.google.protobuf.FieldMask>} value
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketReq} returns this
*/
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.setEditedFieldsMaskList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.FieldMask=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.addEditedFieldsMask = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.FieldMask, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketReq} returns this
 */
proto.api.v1alpha1.tickets.EditMaskTicketReq.prototype.clearEditedFieldsMaskList = function() {
  return this.setEditedFieldsMaskList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.EditMaskTicketRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.EditMaskTicketRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    isEdited: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketRes}
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.EditMaskTicketRes;
  return proto.api.v1alpha1.tickets.EditMaskTicketRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.EditMaskTicketRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketRes}
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEdited(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.EditMaskTicketRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.EditMaskTicketRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEdited();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_edited = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes.prototype.getIsEdited = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.EditMaskTicketRes} returns this
 */
proto.api.v1alpha1.tickets.EditMaskTicketRes.prototype.setIsEdited = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListAllocatedTicketRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListAllocatedTicketRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSidList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListAllocatedTicketRes}
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListAllocatedTicketRes;
  return proto.api.v1alpha1.tickets.ListAllocatedTicketRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListAllocatedTicketRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListAllocatedTicketRes}
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<string>} */ (reader.isDelimited() ? reader.readPackedInt64String() : [reader.readInt64String()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTicketSid(values[i]);
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
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListAllocatedTicketRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListAllocatedTicketRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSidList();
  if (f.length > 0) {
    writer.writePackedInt64String(
      1,
      f
    );
  }
};


/**
 * repeated int64 ticket_sid = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.prototype.getTicketSidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.tickets.ListAllocatedTicketRes} returns this
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.prototype.setTicketSidList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.tickets.ListAllocatedTicketRes} returns this
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.prototype.addTicketSid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListAllocatedTicketRes} returns this
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketRes.prototype.clearTicketSidList = function() {
  return this.setTicketSidList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListAllocatedTicketReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListAllocatedTicketReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.ListAllocatedTicketReq}
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListAllocatedTicketReq;
  return proto.api.v1alpha1.tickets.ListAllocatedTicketReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListAllocatedTicketReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListAllocatedTicketReq}
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.ListAllocatedTicketReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListAllocatedTicketReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListAllocatedTicketReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListAllocatedTicketReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSidList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    ticketList: jspb.Message.toObjectList(msg.getTicketList(),
    api_commons_tickets_pb.Ticket.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse;
  return proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<string>} */ (reader.isDelimited() ? reader.readPackedInt64String() : [reader.readInt64String()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTicketSid(values[i]);
      }
      break;
    case 2:
      var value = new api_commons_tickets_pb.Ticket;
      reader.readMessage(value,api_commons_tickets_pb.Ticket.deserializeBinaryFromReader);
      msg.addTicket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSidList();
  if (f.length > 0) {
    writer.writePackedInt64String(
      1,
      f
    );
  }
  f = message.getTicketList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_tickets_pb.Ticket.serializeBinaryToWriter
    );
  }
};


/**
 * repeated int64 ticket_sid = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.getTicketSidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse} returns this
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.setTicketSidList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse} returns this
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.addTicketSid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse} returns this
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.clearTicketSidList = function() {
  return this.setTicketSidList([]);
};


/**
 * repeated api.commons.Ticket ticket = 2;
 * @return {!Array<!proto.api.commons.Ticket>}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.getTicketList = function() {
  return /** @type{!Array<!proto.api.commons.Ticket>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.Ticket, 2));
};


/**
 * @param {!Array<!proto.api.commons.Ticket>} value
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse} returns this
*/
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.setTicketList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.Ticket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Ticket}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.addTicket = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.Ticket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse} returns this
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsResponse.prototype.clearTicketList = function() {
  return this.setTicketList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectFieldMask: (f = msg.getSelectFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    availableFilter: (f = msg.getAvailableFilter()) && proto.api.v1alpha1.tickets.AvailableTicketsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest;
  return proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setSelectFieldMask(value);
      break;
    case 2:
      var value = new proto.api.v1alpha1.tickets.AvailableTicketsFilter;
      reader.readMessage(value,proto.api.v1alpha1.tickets.AvailableTicketsFilter.deserializeBinaryFromReader);
      msg.setAvailableFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectFieldMask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getAvailableFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1alpha1.tickets.AvailableTicketsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask select_field_mask = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.getSelectFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest} returns this
*/
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.setSelectFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest} returns this
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.clearSelectFieldMask = function() {
  return this.setSelectFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.hasSelectFieldMask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableTicketsFilter available_filter = 2;
 * @return {?proto.api.v1alpha1.tickets.AvailableTicketsFilter}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.getAvailableFilter = function() {
  return /** @type{?proto.api.v1alpha1.tickets.AvailableTicketsFilter} */ (
    jspb.Message.getWrapperField(this, proto.api.v1alpha1.tickets.AvailableTicketsFilter, 2));
};


/**
 * @param {?proto.api.v1alpha1.tickets.AvailableTicketsFilter|undefined} value
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest} returns this
*/
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.setAvailableFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest} returns this
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.clearAvailableFilter = function() {
  return this.setAvailableFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.ListAvailableAgentTicketsRequest.prototype.hasAvailableFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.AvailableTicketsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.AvailableTicketsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentSkillIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    agentViewLimit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.AvailableTicketsFilter}
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.AvailableTicketsFilter;
  return proto.api.v1alpha1.tickets.AvailableTicketsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.AvailableTicketsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.AvailableTicketsFilter}
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAgentSkillId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgentViewLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.AvailableTicketsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.AvailableTicketsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentSkillIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAgentViewLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated string agent_skill_id = 1;
 * @return {!Array<string>}
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.prototype.getAgentSkillIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.v1alpha1.tickets.AvailableTicketsFilter} returns this
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.prototype.setAgentSkillIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.tickets.AvailableTicketsFilter} returns this
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.prototype.addAgentSkillId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.AvailableTicketsFilter} returns this
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.prototype.clearAgentSkillIdList = function() {
  return this.setAgentSkillIdList([]);
};


/**
 * optional int64 agent_view_limit = 2;
 * @return {number}
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.prototype.getAgentViewLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.tickets.AvailableTicketsFilter} returns this
 */
proto.api.v1alpha1.tickets.AvailableTicketsFilter.prototype.setAgentViewLimit = function(value) {
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
proto.api.v1alpha1.tickets.EditTicketRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.EditTicketRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.EditTicketRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditTicketRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    isEdited: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.EditTicketRes}
 */
proto.api.v1alpha1.tickets.EditTicketRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.EditTicketRes;
  return proto.api.v1alpha1.tickets.EditTicketRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.EditTicketRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.EditTicketRes}
 */
proto.api.v1alpha1.tickets.EditTicketRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEdited(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.EditTicketRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.EditTicketRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.EditTicketRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.EditTicketRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsEdited();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_edited = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.EditTicketRes.prototype.getIsEdited = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.EditTicketRes} returns this
 */
proto.api.v1alpha1.tickets.EditTicketRes.prototype.setIsEdited = function(value) {
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
proto.api.v1alpha1.tickets.ListTicketsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListTicketsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListTicketsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListTicketsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.ListTicketsReq}
 */
proto.api.v1alpha1.tickets.ListTicketsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListTicketsReq;
  return proto.api.v1alpha1.tickets.ListTicketsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListTicketsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListTicketsReq}
 */
proto.api.v1alpha1.tickets.ListTicketsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.ListTicketsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListTicketsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListTicketsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListTicketsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ListTicketsRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListTicketsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListTicketsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListTicketsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListTicketsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketsList: jspb.Message.toObjectList(msg.getTicketsList(),
    api_commons_tickets_pb.Ticket.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListTicketsRes}
 */
proto.api.v1alpha1.tickets.ListTicketsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListTicketsRes;
  return proto.api.v1alpha1.tickets.ListTicketsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListTicketsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListTicketsRes}
 */
proto.api.v1alpha1.tickets.ListTicketsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.Ticket;
      reader.readMessage(value,api_commons_tickets_pb.Ticket.deserializeBinaryFromReader);
      msg.addTickets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ListTicketsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListTicketsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListTicketsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListTicketsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_tickets_pb.Ticket.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.Ticket tickets = 1;
 * @return {!Array<!proto.api.commons.Ticket>}
 */
proto.api.v1alpha1.tickets.ListTicketsRes.prototype.getTicketsList = function() {
  return /** @type{!Array<!proto.api.commons.Ticket>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.Ticket, 1));
};


/**
 * @param {!Array<!proto.api.commons.Ticket>} value
 * @return {!proto.api.v1alpha1.tickets.ListTicketsRes} returns this
*/
proto.api.v1alpha1.tickets.ListTicketsRes.prototype.setTicketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.Ticket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Ticket}
 */
proto.api.v1alpha1.tickets.ListTicketsRes.prototype.addTickets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.Ticket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListTicketsRes} returns this
 */
proto.api.v1alpha1.tickets.ListTicketsRes.prototype.clearTicketsList = function() {
  return this.setTicketsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.AssignTicketReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.AssignTicketReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.AssignTicketReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignTicketReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assigneeList: jspb.Message.getFieldWithDefault(msg, 2, ""),
    assignedId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.AssignTicketReq}
 */
proto.api.v1alpha1.tickets.AssignTicketReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.AssignTicketReq;
  return proto.api.v1alpha1.tickets.AssignTicketReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.AssignTicketReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.AssignTicketReq}
 */
proto.api.v1alpha1.tickets.AssignTicketReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssigneeList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssignedId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.AssignTicketReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.AssignTicketReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.AssignTicketReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignTicketReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAssigneeList();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAssignedId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 ticket_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.AssignTicketReq.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.AssignTicketReq} returns this
 */
proto.api.v1alpha1.tickets.AssignTicketReq.prototype.setTicketSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string assignee_list = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.AssignTicketReq.prototype.getAssigneeList = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.AssignTicketReq} returns this
 */
proto.api.v1alpha1.tickets.AssignTicketReq.prototype.setAssigneeList = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string assigned_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.tickets.AssignTicketReq.prototype.getAssignedId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.AssignTicketReq} returns this
 */
proto.api.v1alpha1.tickets.AssignTicketReq.prototype.setAssignedId = function(value) {
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
proto.api.v1alpha1.tickets.AssignTicketRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.AssignTicketRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.AssignTicketRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignTicketRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assigneeList: jspb.Message.getFieldWithDefault(msg, 2, ""),
    assignedId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.AssignTicketRes}
 */
proto.api.v1alpha1.tickets.AssignTicketRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.AssignTicketRes;
  return proto.api.v1alpha1.tickets.AssignTicketRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.AssignTicketRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.AssignTicketRes}
 */
proto.api.v1alpha1.tickets.AssignTicketRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssigneeList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssignedId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.AssignTicketRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.AssignTicketRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.AssignTicketRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignTicketRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAssigneeList();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAssignedId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 ticket_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.AssignTicketRes.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.AssignTicketRes} returns this
 */
proto.api.v1alpha1.tickets.AssignTicketRes.prototype.setTicketSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string assignee_list = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.AssignTicketRes.prototype.getAssigneeList = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.AssignTicketRes} returns this
 */
proto.api.v1alpha1.tickets.AssignTicketRes.prototype.setAssigneeList = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string assigned_id = 3;
 * @return {string}
 */
proto.api.v1alpha1.tickets.AssignTicketRes.prototype.getAssignedId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.AssignTicketRes} returns this
 */
proto.api.v1alpha1.tickets.AssignTicketRes.prototype.setAssignedId = function(value) {
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
proto.api.v1alpha1.tickets.ViewTicketReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ViewTicketReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ViewTicketReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ViewTicketReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ViewTicketReq}
 */
proto.api.v1alpha1.tickets.ViewTicketReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ViewTicketReq;
  return proto.api.v1alpha1.tickets.ViewTicketReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ViewTicketReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ViewTicketReq}
 */
proto.api.v1alpha1.tickets.ViewTicketReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ViewTicketReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ViewTicketReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ViewTicketReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ViewTicketReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 ticket_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ViewTicketReq.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ViewTicketReq} returns this
 */
proto.api.v1alpha1.tickets.ViewTicketReq.prototype.setTicketSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ViewTicketRes.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ViewTicketRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ViewTicketRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ViewTicketRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: (f = msg.getTicket()) && api_commons_tickets_pb.Ticket.toObject(includeInstance, f),
    commentsList: jspb.Message.toObjectList(msg.getCommentsList(),
    api_commons_tickets_pb.Comment.toObject, includeInstance),
    replyCommentList: jspb.Message.toObjectList(msg.getReplyCommentList(),
    api_commons_tickets_pb.ReplyComment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ViewTicketRes}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ViewTicketRes;
  return proto.api.v1alpha1.tickets.ViewTicketRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ViewTicketRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ViewTicketRes}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.Ticket;
      reader.readMessage(value,api_commons_tickets_pb.Ticket.deserializeBinaryFromReader);
      msg.setTicket(value);
      break;
    case 2:
      var value = new api_commons_tickets_pb.Comment;
      reader.readMessage(value,api_commons_tickets_pb.Comment.deserializeBinaryFromReader);
      msg.addComments(value);
      break;
    case 3:
      var value = new api_commons_tickets_pb.ReplyComment;
      reader.readMessage(value,api_commons_tickets_pb.ReplyComment.deserializeBinaryFromReader);
      msg.addReplyComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ViewTicketRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ViewTicketRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ViewTicketRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      api_commons_tickets_pb.Comment.serializeBinaryToWriter
    );
  }
  f = message.getReplyCommentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      api_commons_tickets_pb.ReplyComment.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Ticket ticket = 1;
 * @return {?proto.api.commons.Ticket}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.getTicket = function() {
  return /** @type{?proto.api.commons.Ticket} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.Ticket, 1));
};


/**
 * @param {?proto.api.commons.Ticket|undefined} value
 * @return {!proto.api.v1alpha1.tickets.ViewTicketRes} returns this
*/
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.ViewTicketRes} returns this
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.hasTicket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated api.commons.Comment comments = 2;
 * @return {!Array<!proto.api.commons.Comment>}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.getCommentsList = function() {
  return /** @type{!Array<!proto.api.commons.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.Comment, 2));
};


/**
 * @param {!Array<!proto.api.commons.Comment>} value
 * @return {!proto.api.v1alpha1.tickets.ViewTicketRes} returns this
*/
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.setCommentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.commons.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.Comment}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.addComments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.commons.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ViewTicketRes} returns this
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.clearCommentsList = function() {
  return this.setCommentsList([]);
};


/**
 * repeated api.commons.ReplyComment reply_comment = 3;
 * @return {!Array<!proto.api.commons.ReplyComment>}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.getReplyCommentList = function() {
  return /** @type{!Array<!proto.api.commons.ReplyComment>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.ReplyComment, 3));
};


/**
 * @param {!Array<!proto.api.commons.ReplyComment>} value
 * @return {!proto.api.v1alpha1.tickets.ViewTicketRes} returns this
*/
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.setReplyCommentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api.commons.ReplyComment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.ReplyComment}
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.addReplyComment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api.commons.ReplyComment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ViewTicketRes} returns this
 */
proto.api.v1alpha1.tickets.ViewTicketRes.prototype.clearReplyCommentList = function() {
  return this.setReplyCommentList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.CreateCommentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateCommentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateCommentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateCommentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    comment: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateCommentReq}
 */
proto.api.v1alpha1.tickets.CreateCommentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateCommentReq;
  return proto.api.v1alpha1.tickets.CreateCommentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateCommentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateCommentReq}
 */
proto.api.v1alpha1.tickets.CreateCommentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateCommentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateCommentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateCommentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateCommentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ticket_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateCommentReq.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateCommentReq} returns this
 */
proto.api.v1alpha1.tickets.CreateCommentReq.prototype.setTicketSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string comment = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateCommentReq.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateCommentReq} returns this
 */
proto.api.v1alpha1.tickets.CreateCommentReq.prototype.setComment = function(value) {
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
proto.api.v1alpha1.tickets.CreateCommentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateCommentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateCommentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateCommentRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    comment: (f = msg.getComment()) && api_commons_tickets_pb.Comment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateCommentRes}
 */
proto.api.v1alpha1.tickets.CreateCommentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateCommentRes;
  return proto.api.v1alpha1.tickets.CreateCommentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateCommentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateCommentRes}
 */
proto.api.v1alpha1.tickets.CreateCommentRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.Comment;
      reader.readMessage(value,api_commons_tickets_pb.Comment.deserializeBinaryFromReader);
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateCommentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateCommentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateCommentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateCommentRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.Comment.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.Comment comment = 1;
 * @return {?proto.api.commons.Comment}
 */
proto.api.v1alpha1.tickets.CreateCommentRes.prototype.getComment = function() {
  return /** @type{?proto.api.commons.Comment} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.Comment, 1));
};


/**
 * @param {?proto.api.commons.Comment|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateCommentRes} returns this
*/
proto.api.v1alpha1.tickets.CreateCommentRes.prototype.setComment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateCommentRes} returns this
 */
proto.api.v1alpha1.tickets.CreateCommentRes.prototype.clearComment = function() {
  return this.setComment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateCommentRes.prototype.hasComment = function() {
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
proto.api.v1alpha1.tickets.CloseTicketReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CloseTicketReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CloseTicketReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CloseTicketReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    comment: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fromStatus: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CloseTicketReq}
 */
proto.api.v1alpha1.tickets.CloseTicketReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CloseTicketReq;
  return proto.api.v1alpha1.tickets.CloseTicketReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CloseTicketReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CloseTicketReq}
 */
proto.api.v1alpha1.tickets.CloseTicketReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setFromStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CloseTicketReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CloseTicketReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CloseTicketReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CloseTicketReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromStatus();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
};


/**
 * optional int64 ticket_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CloseTicketReq.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CloseTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CloseTicketReq.prototype.setTicketSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string comment = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CloseTicketReq.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CloseTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CloseTicketReq.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 from_status = 3;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CloseTicketReq.prototype.getFromStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CloseTicketReq} returns this
 */
proto.api.v1alpha1.tickets.CloseTicketReq.prototype.setFromStatus = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.CloseTicketRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CloseTicketRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CloseTicketRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CloseTicketRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    isStatus: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CloseTicketRes}
 */
proto.api.v1alpha1.tickets.CloseTicketRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CloseTicketRes;
  return proto.api.v1alpha1.tickets.CloseTicketRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CloseTicketRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CloseTicketRes}
 */
proto.api.v1alpha1.tickets.CloseTicketRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CloseTicketRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CloseTicketRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CloseTicketRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CloseTicketRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_status = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CloseTicketRes.prototype.getIsStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.CloseTicketRes} returns this
 */
proto.api.v1alpha1.tickets.CloseTicketRes.prototype.setIsStatus = function(value) {
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
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateSlaReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateSlaReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateSlaReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    slaSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 4, 0),
    duration: (f = msg.getDuration()) && api_commons_tickets_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateSlaReq}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateSlaReq;
  return proto.api.v1alpha1.tickets.CreateSlaReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateSlaReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateSlaReq}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSlaSid(value);
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
      msg.setInterval(value);
      break;
    case 5:
      var value = new api_commons_tickets_pb.Duration;
      reader.readMessage(value,api_commons_tickets_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateSlaReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateSlaReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateSlaReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlaSid();
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
  f = message.getInterval();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      api_commons_tickets_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sla_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.getSlaSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateSlaReq} returns this
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.setSlaSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateSlaReq} returns this
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateSlaReq} returns this
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 interval = 4;
 * @return {number}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.tickets.CreateSlaReq} returns this
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.setInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional api.commons.Duration duration = 5;
 * @return {?proto.api.commons.Duration}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.getDuration = function() {
  return /** @type{?proto.api.commons.Duration} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.Duration, 5));
};


/**
 * @param {?proto.api.commons.Duration|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateSlaReq} returns this
*/
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateSlaReq} returns this
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateSlaReq.prototype.hasDuration = function() {
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
proto.api.v1alpha1.tickets.CreateSlaRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateSlaRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateSlaRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateSlaRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    sla: (f = msg.getSla()) && api_commons_tickets_pb.TicketSla.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateSlaRes}
 */
proto.api.v1alpha1.tickets.CreateSlaRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateSlaRes;
  return proto.api.v1alpha1.tickets.CreateSlaRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateSlaRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateSlaRes}
 */
proto.api.v1alpha1.tickets.CreateSlaRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketSla;
      reader.readMessage(value,api_commons_tickets_pb.TicketSla.deserializeBinaryFromReader);
      msg.setSla(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateSlaRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateSlaRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateSlaRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateSlaRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSla();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.TicketSla.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.TicketSla sla = 1;
 * @return {?proto.api.commons.TicketSla}
 */
proto.api.v1alpha1.tickets.CreateSlaRes.prototype.getSla = function() {
  return /** @type{?proto.api.commons.TicketSla} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketSla, 1));
};


/**
 * @param {?proto.api.commons.TicketSla|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateSlaRes} returns this
*/
proto.api.v1alpha1.tickets.CreateSlaRes.prototype.setSla = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateSlaRes} returns this
 */
proto.api.v1alpha1.tickets.CreateSlaRes.prototype.clearSla = function() {
  return this.setSla(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateSlaRes.prototype.hasSla = function() {
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
proto.api.v1alpha1.tickets.ListSlaReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListSlaReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListSlaReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSlaReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.ListSlaReq}
 */
proto.api.v1alpha1.tickets.ListSlaReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListSlaReq;
  return proto.api.v1alpha1.tickets.ListSlaReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListSlaReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListSlaReq}
 */
proto.api.v1alpha1.tickets.ListSlaReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.ListSlaReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListSlaReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListSlaReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSlaReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ListSlaRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListSlaRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListSlaRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListSlaRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSlaRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketsslaList: jspb.Message.toObjectList(msg.getTicketsslaList(),
    api_commons_tickets_pb.TicketSla.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListSlaRes}
 */
proto.api.v1alpha1.tickets.ListSlaRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListSlaRes;
  return proto.api.v1alpha1.tickets.ListSlaRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListSlaRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListSlaRes}
 */
proto.api.v1alpha1.tickets.ListSlaRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketSla;
      reader.readMessage(value,api_commons_tickets_pb.TicketSla.deserializeBinaryFromReader);
      msg.addTicketssla(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ListSlaRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListSlaRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListSlaRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSlaRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketsslaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_tickets_pb.TicketSla.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.TicketSla ticketsSla = 1;
 * @return {!Array<!proto.api.commons.TicketSla>}
 */
proto.api.v1alpha1.tickets.ListSlaRes.prototype.getTicketsslaList = function() {
  return /** @type{!Array<!proto.api.commons.TicketSla>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.TicketSla, 1));
};


/**
 * @param {!Array<!proto.api.commons.TicketSla>} value
 * @return {!proto.api.v1alpha1.tickets.ListSlaRes} returns this
*/
proto.api.v1alpha1.tickets.ListSlaRes.prototype.setTicketsslaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.TicketSla=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.TicketSla}
 */
proto.api.v1alpha1.tickets.ListSlaRes.prototype.addTicketssla = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.TicketSla, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListSlaRes} returns this
 */
proto.api.v1alpha1.tickets.ListSlaRes.prototype.clearTicketsslaList = function() {
  return this.setTicketsslaList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.UpdateSlaReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.UpdateSlaReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    slaSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    isActive: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.UpdateSlaReq}
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.UpdateSlaReq;
  return proto.api.v1alpha1.tickets.UpdateSlaReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.UpdateSlaReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.UpdateSlaReq}
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSlaSid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIsActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.UpdateSlaReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.UpdateSlaReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlaSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getIsActive();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 sla_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.prototype.getSlaSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.UpdateSlaReq} returns this
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.prototype.setSlaSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 is_active = 2;
 * @return {number}
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.prototype.getIsActive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.v1alpha1.tickets.UpdateSlaReq} returns this
 */
proto.api.v1alpha1.tickets.UpdateSlaReq.prototype.setIsActive = function(value) {
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
proto.api.v1alpha1.tickets.UpdateSlaRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.UpdateSlaRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.UpdateSlaRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.UpdateSlaRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketssla: (f = msg.getTicketssla()) && api_commons_tickets_pb.TicketSla.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.UpdateSlaRes}
 */
proto.api.v1alpha1.tickets.UpdateSlaRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.UpdateSlaRes;
  return proto.api.v1alpha1.tickets.UpdateSlaRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.UpdateSlaRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.UpdateSlaRes}
 */
proto.api.v1alpha1.tickets.UpdateSlaRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketSla;
      reader.readMessage(value,api_commons_tickets_pb.TicketSla.deserializeBinaryFromReader);
      msg.setTicketssla(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.UpdateSlaRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.UpdateSlaRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.UpdateSlaRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.UpdateSlaRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketssla();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.TicketSla.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.TicketSla ticketsSla = 1;
 * @return {?proto.api.commons.TicketSla}
 */
proto.api.v1alpha1.tickets.UpdateSlaRes.prototype.getTicketssla = function() {
  return /** @type{?proto.api.commons.TicketSla} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketSla, 1));
};


/**
 * @param {?proto.api.commons.TicketSla|undefined} value
 * @return {!proto.api.v1alpha1.tickets.UpdateSlaRes} returns this
*/
proto.api.v1alpha1.tickets.UpdateSlaRes.prototype.setTicketssla = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.UpdateSlaRes} returns this
 */
proto.api.v1alpha1.tickets.UpdateSlaRes.prototype.clearTicketssla = function() {
  return this.setTicketssla(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.UpdateSlaRes.prototype.hasTicketssla = function() {
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
proto.api.v1alpha1.tickets.ListSlaConditionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListSlaConditionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListSlaConditionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSlaConditionReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.ListSlaConditionReq}
 */
proto.api.v1alpha1.tickets.ListSlaConditionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListSlaConditionReq;
  return proto.api.v1alpha1.tickets.ListSlaConditionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListSlaConditionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListSlaConditionReq}
 */
proto.api.v1alpha1.tickets.ListSlaConditionReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.ListSlaConditionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListSlaConditionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListSlaConditionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSlaConditionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListSlaConditionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListSlaConditionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    slaconditionList: jspb.Message.toObjectList(msg.getSlaconditionList(),
    api_commons_tickets_pb.SlaConditions.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListSlaConditionRes}
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListSlaConditionRes;
  return proto.api.v1alpha1.tickets.ListSlaConditionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListSlaConditionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListSlaConditionRes}
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.SlaConditions;
      reader.readMessage(value,api_commons_tickets_pb.SlaConditions.deserializeBinaryFromReader);
      msg.addSlacondition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListSlaConditionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListSlaConditionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlaconditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      api_commons_tickets_pb.SlaConditions.serializeBinaryToWriter
    );
  }
};


/**
 * repeated api.commons.SlaConditions slaCondition = 1;
 * @return {!Array<!proto.api.commons.SlaConditions>}
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.prototype.getSlaconditionList = function() {
  return /** @type{!Array<!proto.api.commons.SlaConditions>} */ (
    jspb.Message.getRepeatedWrapperField(this, api_commons_tickets_pb.SlaConditions, 1));
};


/**
 * @param {!Array<!proto.api.commons.SlaConditions>} value
 * @return {!proto.api.v1alpha1.tickets.ListSlaConditionRes} returns this
*/
proto.api.v1alpha1.tickets.ListSlaConditionRes.prototype.setSlaconditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.commons.SlaConditions=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.commons.SlaConditions}
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.prototype.addSlacondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.commons.SlaConditions, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListSlaConditionRes} returns this
 */
proto.api.v1alpha1.tickets.ListSlaConditionRes.prototype.clearSlaconditionList = function() {
  return this.setSlaconditionList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ReplyCommentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ReplyCommentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    commentSid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    ticketSid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    reply: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdById: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentReq}
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ReplyCommentReq;
  return proto.api.v1alpha1.tickets.ReplyCommentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ReplyCommentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentReq}
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setCommentSid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReply(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedById(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ReplyCommentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ReplyCommentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommentSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getReply();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedById();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 comment_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.getCommentSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentReq} returns this
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.setCommentSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 ticket_sid = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentReq} returns this
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.setTicketSid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string reply = 3;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.getReply = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentReq} returns this
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.setReply = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string created_by_id = 4;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.getCreatedById = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentReq} returns this
 */
proto.api.v1alpha1.tickets.ReplyCommentReq.prototype.setCreatedById = function(value) {
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
proto.api.v1alpha1.tickets.ReplyCommentRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ReplyCommentRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ReplyCommentRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ReplyCommentRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    isCreated: (f = msg.getIsCreated()) && api_commons_tickets_pb.ConfirmReplyComment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentRes}
 */
proto.api.v1alpha1.tickets.ReplyCommentRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ReplyCommentRes;
  return proto.api.v1alpha1.tickets.ReplyCommentRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ReplyCommentRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentRes}
 */
proto.api.v1alpha1.tickets.ReplyCommentRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.ConfirmReplyComment;
      reader.readMessage(value,api_commons_tickets_pb.ConfirmReplyComment.deserializeBinaryFromReader);
      msg.setIsCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ReplyCommentRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ReplyCommentRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ReplyCommentRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ReplyCommentRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsCreated();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.ConfirmReplyComment.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.ConfirmReplyComment is_created = 1;
 * @return {?proto.api.commons.ConfirmReplyComment}
 */
proto.api.v1alpha1.tickets.ReplyCommentRes.prototype.getIsCreated = function() {
  return /** @type{?proto.api.commons.ConfirmReplyComment} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.ConfirmReplyComment, 1));
};


/**
 * @param {?proto.api.commons.ConfirmReplyComment|undefined} value
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentRes} returns this
*/
proto.api.v1alpha1.tickets.ReplyCommentRes.prototype.setIsCreated = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.ReplyCommentRes} returns this
 */
proto.api.v1alpha1.tickets.ReplyCommentRes.prototype.clearIsCreated = function() {
  return this.setIsCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.ReplyCommentRes.prototype.hasIsCreated = function() {
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
proto.api.v1alpha1.tickets.CreateSelfAssignReq.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateSelfAssignReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateSelfAssignReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateSelfAssignReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketSid: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateSelfAssignReq}
 */
proto.api.v1alpha1.tickets.CreateSelfAssignReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateSelfAssignReq;
  return proto.api.v1alpha1.tickets.CreateSelfAssignReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateSelfAssignReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateSelfAssignReq}
 */
proto.api.v1alpha1.tickets.CreateSelfAssignReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateSelfAssignReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateSelfAssignReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateSelfAssignReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateSelfAssignReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketSid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 ticket_sid = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CreateSelfAssignReq.prototype.getTicketSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CreateSelfAssignReq} returns this
 */
proto.api.v1alpha1.tickets.CreateSelfAssignReq.prototype.setTicketSid = function(value) {
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
proto.api.v1alpha1.tickets.CreateSelfAssignRes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateSelfAssignRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateSelfAssignRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateSelfAssignRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAssigned: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateSelfAssignRes}
 */
proto.api.v1alpha1.tickets.CreateSelfAssignRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateSelfAssignRes;
  return proto.api.v1alpha1.tickets.CreateSelfAssignRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateSelfAssignRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateSelfAssignRes}
 */
proto.api.v1alpha1.tickets.CreateSelfAssignRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAssigned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateSelfAssignRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateSelfAssignRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateSelfAssignRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateSelfAssignRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAssigned();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_assigned = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateSelfAssignRes.prototype.getIsAssigned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.CreateSelfAssignRes} returns this
 */
proto.api.v1alpha1.tickets.CreateSelfAssignRes.prototype.setIsAssigned = function(value) {
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
proto.api.v1alpha1.tickets.ListSkillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListSkillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListSkillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSkillsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.ListSkillsRequest}
 */
proto.api.v1alpha1.tickets.ListSkillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListSkillsRequest;
  return proto.api.v1alpha1.tickets.ListSkillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListSkillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListSkillsRequest}
 */
proto.api.v1alpha1.tickets.ListSkillsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.ListSkillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListSkillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListSkillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSkillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListSkillsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListSkillsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    proto.api.v1alpha1.tickets.Skill.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListSkillsResponse}
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListSkillsResponse;
  return proto.api.v1alpha1.tickets.ListSkillsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListSkillsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListSkillsResponse}
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.tickets.Skill;
      reader.readMessage(value,proto.api.v1alpha1.tickets.Skill.deserializeBinaryFromReader);
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
proto.api.v1alpha1.tickets.ListSkillsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListSkillsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListSkillsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.tickets.Skill.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Skill skills = 1;
 * @return {!Array<!proto.api.v1alpha1.tickets.Skill>}
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.tickets.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.tickets.Skill, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.tickets.Skill>} value
 * @return {!proto.api.v1alpha1.tickets.ListSkillsResponse} returns this
*/
proto.api.v1alpha1.tickets.ListSkillsResponse.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.tickets.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.tickets.Skill}
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.tickets.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListSkillsResponse} returns this
 */
proto.api.v1alpha1.tickets.ListSkillsResponse.prototype.clearSkillsList = function() {
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
proto.api.v1alpha1.tickets.Skill.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.Skill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.Skill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.Skill.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.api.v1alpha1.tickets.Skill}
 */
proto.api.v1alpha1.tickets.Skill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.Skill;
  return proto.api.v1alpha1.tickets.Skill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.Skill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.Skill}
 */
proto.api.v1alpha1.tickets.Skill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkillId(value);
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
proto.api.v1alpha1.tickets.Skill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.Skill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.Skill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.Skill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillId();
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
 * optional string skill_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.Skill.prototype.getSkillId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.Skill} returns this
 */
proto.api.v1alpha1.tickets.Skill.prototype.setSkillId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.Skill.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.Skill} returns this
 */
proto.api.v1alpha1.tickets.Skill.prototype.setName = function(value) {
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
proto.api.v1alpha1.tickets.ListUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListUsersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.api.v1alpha1.tickets.ListUsersRequest}
 */
proto.api.v1alpha1.tickets.ListUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListUsersRequest;
  return proto.api.v1alpha1.tickets.ListUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListUsersRequest}
 */
proto.api.v1alpha1.tickets.ListUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.api.v1alpha1.tickets.ListUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.v1alpha1.tickets.ListUsersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.ListUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ListUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ListUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.api.v1alpha1.tickets.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ListUsersResponse}
 */
proto.api.v1alpha1.tickets.ListUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ListUsersResponse;
  return proto.api.v1alpha1.tickets.ListUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ListUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ListUsersResponse}
 */
proto.api.v1alpha1.tickets.ListUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1alpha1.tickets.User;
      reader.readMessage(value,proto.api.v1alpha1.tickets.User.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ListUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ListUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ListUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ListUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.v1alpha1.tickets.User.serializeBinaryToWriter
    );
  }
};


/**
 * repeated User users = 1;
 * @return {!Array<!proto.api.v1alpha1.tickets.User>}
 */
proto.api.v1alpha1.tickets.ListUsersResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.api.v1alpha1.tickets.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.v1alpha1.tickets.User, 1));
};


/**
 * @param {!Array<!proto.api.v1alpha1.tickets.User>} value
 * @return {!proto.api.v1alpha1.tickets.ListUsersResponse} returns this
*/
proto.api.v1alpha1.tickets.ListUsersResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.v1alpha1.tickets.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.v1alpha1.tickets.User}
 */
proto.api.v1alpha1.tickets.ListUsersResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.v1alpha1.tickets.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.v1alpha1.tickets.ListUsersResponse} returns this
 */
proto.api.v1alpha1.tickets.ListUsersResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1alpha1.tickets.User.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.User}
 */
proto.api.v1alpha1.tickets.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.User;
  return proto.api.v1alpha1.tickets.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.User}
 */
proto.api.v1alpha1.tickets.User.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.User.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.User} returns this
 */
proto.api.v1alpha1.tickets.User.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.User.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.User} returns this
 */
proto.api.v1alpha1.tickets.User.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.api.v1alpha1.tickets.User.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.User} returns this
 */
proto.api.v1alpha1.tickets.User.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_active = 4;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.User.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.User} returns this
 */
proto.api.v1alpha1.tickets.User.prototype.setIsActive = function(value) {
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
proto.api.v1alpha1.tickets.CreateTicketActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateTicketActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateTicketActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketAction: (f = msg.getTicketAction()) && api_commons_tickets_pb.TicketAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketActionRequest}
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateTicketActionRequest;
  return proto.api.v1alpha1.tickets.CreateTicketActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketActionRequest}
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketAction;
      reader.readMessage(value,api_commons_tickets_pb.TicketAction.deserializeBinaryFromReader);
      msg.setTicketAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateTicketActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.TicketAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.TicketAction ticket_action = 1;
 * @return {?proto.api.commons.TicketAction}
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest.prototype.getTicketAction = function() {
  return /** @type{?proto.api.commons.TicketAction} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketAction, 1));
};


/**
 * @param {?proto.api.commons.TicketAction|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketActionRequest} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketActionRequest.prototype.setTicketAction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketActionRequest} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest.prototype.clearTicketAction = function() {
  return this.setTicketAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateTicketActionRequest.prototype.hasTicketAction = function() {
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
proto.api.v1alpha1.tickets.CreateTicketActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CreateTicketActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CreateTicketActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketAction: (f = msg.getTicketAction()) && api_commons_tickets_pb.TicketAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketActionResponse}
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CreateTicketActionResponse;
  return proto.api.v1alpha1.tickets.CreateTicketActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketActionResponse}
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new api_commons_tickets_pb.TicketAction;
      reader.readMessage(value,api_commons_tickets_pb.TicketAction.deserializeBinaryFromReader);
      msg.setTicketAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CreateTicketActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CreateTicketActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      api_commons_tickets_pb.TicketAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.commons.TicketAction ticket_action = 1;
 * @return {?proto.api.commons.TicketAction}
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse.prototype.getTicketAction = function() {
  return /** @type{?proto.api.commons.TicketAction} */ (
    jspb.Message.getWrapperField(this, api_commons_tickets_pb.TicketAction, 1));
};


/**
 * @param {?proto.api.commons.TicketAction|undefined} value
 * @return {!proto.api.v1alpha1.tickets.CreateTicketActionResponse} returns this
*/
proto.api.v1alpha1.tickets.CreateTicketActionResponse.prototype.setTicketAction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1alpha1.tickets.CreateTicketActionResponse} returns this
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse.prototype.clearTicketAction = function() {
  return this.setTicketAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CreateTicketActionResponse.prototype.hasTicketAction = function() {
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
proto.api.v1alpha1.tickets.CloseTicketActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CloseTicketActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CloseTicketActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketActionId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    ticketId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    comment: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CloseTicketActionRequest}
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CloseTicketActionRequest;
  return proto.api.v1alpha1.tickets.CloseTicketActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CloseTicketActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CloseTicketActionRequest}
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketActionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CloseTicketActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CloseTicketActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketActionId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getTicketId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 ticket_action_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.prototype.getTicketActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CloseTicketActionRequest} returns this
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.prototype.setTicketActionId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 ticket_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.prototype.getTicketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CloseTicketActionRequest} returns this
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.prototype.setTicketId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.CloseTicketActionRequest} returns this
 */
proto.api.v1alpha1.tickets.CloseTicketActionRequest.prototype.setComment = function(value) {
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
proto.api.v1alpha1.tickets.CloseTicketActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.CloseTicketActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.CloseTicketActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CloseTicketActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isClosed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.CloseTicketActionResponse}
 */
proto.api.v1alpha1.tickets.CloseTicketActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.CloseTicketActionResponse;
  return proto.api.v1alpha1.tickets.CloseTicketActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.CloseTicketActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.CloseTicketActionResponse}
 */
proto.api.v1alpha1.tickets.CloseTicketActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsClosed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.CloseTicketActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.CloseTicketActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.CloseTicketActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.CloseTicketActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsClosed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_closed = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.CloseTicketActionResponse.prototype.getIsClosed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.CloseTicketActionResponse} returns this
 */
proto.api.v1alpha1.tickets.CloseTicketActionResponse.prototype.setIsClosed = function(value) {
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
proto.api.v1alpha1.tickets.AssignTicketActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.AssignTicketActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.AssignTicketActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignTicketActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketActionId: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.AssignTicketActionRequest}
 */
proto.api.v1alpha1.tickets.AssignTicketActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.AssignTicketActionRequest;
  return proto.api.v1alpha1.tickets.AssignTicketActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.AssignTicketActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.AssignTicketActionRequest}
 */
proto.api.v1alpha1.tickets.AssignTicketActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketActionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.AssignTicketActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.AssignTicketActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.AssignTicketActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignTicketActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketActionId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
};


/**
 * optional int64 ticket_action_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.AssignTicketActionRequest.prototype.getTicketActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.AssignTicketActionRequest} returns this
 */
proto.api.v1alpha1.tickets.AssignTicketActionRequest.prototype.setTicketActionId = function(value) {
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
proto.api.v1alpha1.tickets.AssignTicketActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.AssignTicketActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.AssignTicketActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignTicketActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAssigned: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.AssignTicketActionResponse}
 */
proto.api.v1alpha1.tickets.AssignTicketActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.AssignTicketActionResponse;
  return proto.api.v1alpha1.tickets.AssignTicketActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.AssignTicketActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.AssignTicketActionResponse}
 */
proto.api.v1alpha1.tickets.AssignTicketActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAssigned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.AssignTicketActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.AssignTicketActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.AssignTicketActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.AssignTicketActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAssigned();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_assigned = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.AssignTicketActionResponse.prototype.getIsAssigned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.AssignTicketActionResponse} returns this
 */
proto.api.v1alpha1.tickets.AssignTicketActionResponse.prototype.setIsAssigned = function(value) {
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
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ChangeTicketStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    statusId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    ticketStatus: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ChangeTicketStatusRequest}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ChangeTicketStatusRequest;
  return proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ChangeTicketStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ChangeTicketStatusRequest}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTicketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setStatusId(value);
      break;
    case 3:
      var value = /** @type {!proto.api.commons.TicketStatus} */ (reader.readEnum());
      msg.setTicketStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ChangeTicketStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getStatusId();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getTicketStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int64 ticket_id = 1;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.prototype.getTicketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ChangeTicketStatusRequest} returns this
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.prototype.setTicketId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 status_id = 2;
 * @return {string}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.prototype.getStatusId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.api.v1alpha1.tickets.ChangeTicketStatusRequest} returns this
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.prototype.setStatusId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional api.commons.TicketStatus ticket_status = 3;
 * @return {!proto.api.commons.TicketStatus}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.prototype.getTicketStatus = function() {
  return /** @type {!proto.api.commons.TicketStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api.commons.TicketStatus} value
 * @return {!proto.api.v1alpha1.tickets.ChangeTicketStatusRequest} returns this
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusRequest.prototype.setTicketStatus = function(value) {
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
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1alpha1.tickets.ChangeTicketStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isStatusEdited: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1alpha1.tickets.ChangeTicketStatusResponse}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1alpha1.tickets.ChangeTicketStatusResponse;
  return proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1alpha1.tickets.ChangeTicketStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1alpha1.tickets.ChangeTicketStatusResponse}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStatusEdited(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1alpha1.tickets.ChangeTicketStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsStatusEdited();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_status_edited = 1;
 * @return {boolean}
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.prototype.getIsStatusEdited = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.v1alpha1.tickets.ChangeTicketStatusResponse} returns this
 */
proto.api.v1alpha1.tickets.ChangeTicketStatusResponse.prototype.setIsStatusEdited = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.api.v1alpha1.tickets);
