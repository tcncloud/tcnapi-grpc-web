// source: api/commons/email.proto
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

goog.exportSymbol('proto.api.commons.EmailIBGroupEvent', null, global);
goog.exportSymbol('proto.api.commons.EmailIBGroupStatus', null, global);
goog.exportSymbol('proto.api.commons.EmailIBReplyStatus', null, global);
goog.exportSymbol('proto.api.commons.EmailIBReplyType', null, global);
goog.exportSymbol('proto.api.commons.EmailResult', null, global);
goog.exportSymbol('proto.api.commons.EmailStatus', null, global);
/**
 * @enum {number}
 */
proto.api.commons.EmailResult = {
  EMAIL_RESULT_UNKNOWN: 0,
  EMAIL_TASK_WAITING: 8600,
  EMAIL_TASK_PROCESSING: 8700,
  EMAIL_TASK_DNC: 8710,
  EMAIL_TASK_INVALID: 8720,
  EMAIL_TASK_ATTACHMENT_ERROR: 8730,
  EMAIL_TASK_CANCELLED: 8740,
  EMAIL_TASK_QUEUED: 8800,
  EMAIL_TASK_DELIVERED: 8900,
  EMAIL_TASK_DROPPED: 8910,
  EMAIL_TASK_DEFERRED: 8920,
  EMAIL_TASK_BOUNCED: 8930,
  EMAIL_TASK_OPENED: 8940,
  EMAIL_TASK_CLICKED: 8950,
  EMAIL_TASK_UNSUBSCRIBED: 8960,
  EMAIL_TASK_MARKED_AS_SPAM: 8970,
  EMAIL_TASK_BLOCKED: 8980
};

/**
 * @enum {number}
 */
proto.api.commons.EmailStatus = {
  EMAIL_STATUS_UNKKNOWN: 0,
  EMAIL_PREPARING: 8000,
  EMAIL_SCHEDULED: 8100,
  EMAIL_RESUME: 8150,
  EMAIL_RUNNING: 8200,
  EMAIL_COMPLETED: 8300,
  EMAIL_CANCELLED: 8310,
  EMAIL_CANCELLED_ADMIN: 8320,
  EMAIL_SUMMED_COMPLETED: 8400,
  EMAIL_SUMMED_CANCELLED: 8410,
  EMAIL_SUMMED_CANCELLED_ADMIN: 8420,
  EMAIL_PAUSED: 8500
};

/**
 * @enum {number}
 */
proto.api.commons.EmailIBGroupStatus = {
  IB_EMAIL_GROUP_UNKNOWN: 0,
  IB_EMAIL_GROUP_PREPARING: 10000,
  IB_EMAIL_GROUP_SCHEDULED: 10010,
  IB_EMAIL_GROUP_RUNNING: 10020,
  IB_EMAIL_GROUP_PAUSED: 10030,
  IB_EMAIL_GROUP_RESUME: 10040,
  IB_EMAIL_GROUP_RUNNING_WITH_ERROR: 10041,
  IB_EMAIL_GROUP_ERROR_STANDBY: 10042,
  IB_EMAIL_GROUP_COMPLETED: 10050,
  IB_EMAIL_GROUP_CANCELLED_USER: 10060,
  IB_EMAIL_GROUP_CANCELLED_ADMIN: 10070,
  IB_EMAIL_GROUP_SUMMED_COMPLETED: 10150,
  IB_EMAIL_GROUP_SUMMED_CANCELLED_USER: 10160,
  IB_EMAIL_GROUP_SUMMED_CANCELLED_ADMIN: 10170
};

/**
 * @enum {number}
 */
proto.api.commons.EmailIBReplyStatus = {
  IB_EMAIL_REPLY_UNKNOWN: 0,
  IB_EMAIL_REPLY_RECEIVED: 12000,
  IB_EMAIL_AGENT_REPLY_SENDING: 12010,
  IB_EMAIL_AGENT_REPLY_SENDING_FAILED: 12020,
  IB_EMAIL_AGENT_REPLY_INVALID: 12030,
  IB_EMAIL_AGENT_REPLY_SENT: 12040,
  IB_EMAIL_AGENT_REPLY_DELIVERED: 12050,
  IB_EMAIL_AGENT_REPLY_DROPPED: 12060,
  IB_EMAIL_AGENT_REPLY_DEFERRED: 12070,
  IB_EMAIL_AGENT_REPLY_BOUNCED: 12080,
  IB_EMAIL_AGENT_REPLY_OPENED: 12090,
  IB_EMAIL_AGENT_REPLY_CLICKED: 12100,
  IB_EMAIL_AGENT_REPLY_UNSUBSCRIBED: 12110,
  IB_EMAIL_AGENT_REPLY_MARKED_AS_SPAM: 12120,
  IB_EMAIL_AGENT_REPLY_BLOCKED: 12130,
  IB_EMAIL_REPLY_DNC: 12140,
  IB_EMAIL_REPLY_CANCELLED: 12150
};

/**
 * @enum {number}
 */
proto.api.commons.EmailIBGroupEvent = {
  IB_EMAIL_GROUP_EVENT_PREPARED: 0,
  IB_EMAIL_GROUP_EVENT_SCHEDULED: 1,
  IB_EMAIL_GROUP_EVENT_STARTED: 2,
  IB_EMAIL_GROUP_EVENT_RUNNING: 3,
  IB_EMAIL_GROUP_EVENT_STOPPED: 4,
  IB_EMAIL_GROUP_EVENT_PAUSED: 5,
  IB_EMAIL_GROUP_EVENT_RESUME: 6,
  IB_EMAIL_GROUP_EVENT_CANCELLED: 7,
  IB_EMAIL_GROUP_EVENT_MESSAGE_RECEIVED: 8,
  IB_EMAIL_GROUP_EVENT_LOGIN_ERROR: 9,
  IB_EMAIL_GROUP_EVENT_FETCH_ERROR: 10,
  IB_EMAIL_GROUP_EVENT_STANDBY_ERROR: 11,
  IB_EMAIL_GROUP_EVENT_COMPLETED: 12
};

/**
 * @enum {number}
 */
proto.api.commons.EmailIBReplyType = {
  REPLY_UNKNOWN: 0,
  EXISTING_CONV: 1,
  OUTBOUND_REPLY: 2,
  AGENT_REPLY: 3,
  INBOUND_PURE: 4,
  OUTBOUND_TASK: 5,
  OUTBOUND_PURE: 6
};

goog.object.extend(exports, proto.api.commons);
