// source: api/commons/audit/event_types.proto
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

goog.exportSymbol('proto.api.commons.audit.EventType', null, global);
/**
 * @enum {number}
 */
proto.api.commons.audit.EventType = {
  DUMMY_APPLICATION: 0,
  DUMMY_APPLICATION_STORAGE: 1,
  DUMMY_APPLICATION_COMPUTE: 2,
  VOICE_ANALYTICS: 100,
  VOICE_ANALYTICS_FLAG_OCCURRENCE: 101,
  VOICE_ANALYTICS_FLAG_NEEDS_REVIEW: 102,
  VOICE_ANALYTICS_BILLING_REPORT: 103,
  VOICE_ANALYTICS_FLAG_SUMMARY: 104,
  VOICE_ANALYTICS_PHRASE_CORRECTION: 105,
  OMNICHANNEL: 300,
  OMNICHANNEL_PROJECT: 301,
  OMNICHANNEL_CAMPAIGN: 302,
  OMNICHANNEL_DAILY_PROJECT_REPORT: 303,
  OMNICHANNEL_DAILY_CONVERSATION_REPORT: 304,
  OMNICHANNEL_AGENT_ASSIGN_CONVERSATION: 305,
  OMNICHANNEL_AGENT_UNASSIGN_CONVERSATION: 306,
  OMNICHANNEL_AGENT_REASSIGN_CONVERSATION: 307,
  OMNICHANNEL_T10: 308,
  OMNICHANNEL_CUSTOMER_TEXT_MESSAGE: 309,
  OMNICHANNEL_AGENT_TEXT_MESSAGE: 310,
  OMNICHANNEL_FINISH_WRAP_UP: 311,
  OMNICHANNEL_BEGIN_WRAP_UP: 312,
  OMNICHANNEL_T11: 313,
  OMNICHANNEL_CREATE_CONVERSATION: 314,
  OMNICHANNEL_AGENT_SUSPEND: 315,
  OMNICHANNEL_CLOSE_CONVERSATION: 316,
  OMNICHANNEL_MANAGER_TEXT_MESSAGE: 332,
  OMNICHANNEL_UPDATE_CAMPAIGN: 330,
  OMNICHANNEL_SET_CONVERSATION_COLLECTED_DATA: 331,
  OMNICHANNEL_ARCHIVE_CAMPAIGN: 333,
  OMNICHANNEL_PAUSE_CAMPAIGN: 334,
  OMNICHANNEL_RESUME_CAMPAIGN: 335,
  OMNICHANNEL_START_CAMPAIGN: 336,
  OMNICHANNEL_SCHEDULE_MODULE: 337,
  OMNICHANNEL_START_MODULE: 338,
  OMNICHANNEL_PAUSE_MODULE: 339,
  OMNICHANNEL_RESUME_MODULE: 340,
  OMNICHANNEL_ERROR_MODULE: 341,
  OMNICHANNEL_SUCCESS_MODULE: 342,
  OMNICHANNEL_FAIL_MODULE: 343,
  OMNICHANNEL_COMPLETE_MODULE: 344,
  OMNICHANNEL_ARCHIVE_MODULE: 345,
  OMNICHANNEL_UPDATE_MODULE: 346,
  OMNICHANNEL_MODULE_SMS_MESSAGE_SENT: 347,
  OMNICHANNEL_COMPLETE_CAMPAIGN: 348,
  OMNICHANNEL_MODULE_INITIAL_REPLY: 349,
  OMNICHANNEL_TASK_MESSAGE_SENT: 350,
  OMNICHANNEL_CONNECTED_INBOX_POLL: 351,
  OMNICHANNEL_CONNECTED_INBOX_CREATED: 352,
  OMNICHANNEL_AGENT_MESSAGE_UNITS: 353,
  OMNICHANNEL_MANAGER_MESSAGE_UNITS: 354,
  OMNICHANNEL_CUSTOMER_MESSAGE_UNITS: 355,
  OMNICHANNEL_SYSTEM_MESSAGE_UNITS: 356,
  OMNICHANNEL_PAYMENT_LINK_SENT: 357,
  OMNICHANNEL_MANUAL_APPROVE_TASK_ACCEPTED: 358,
  OMNICHANNEL_MANUAL_APPROVE_TASK_REJECTED: 359,
  OMNICHANNEL_MANUAL_APPROVE_TASK_TIMEOUT: 360,
  OMNICHANNEL_MANUAL_APPROVE_TASK_REQUEUE: 361,
  ASM_AGENT_LOGIN: 400,
  ASM_OPEN_VOICE: 401,
  ASM_OPEN_OMNI_AGENT: 402,
  ASM_ACTIVATE_CONVERSATION: 403,
  ASM_DEACTIVATE_CONVERSATION: 404,
  ASM_AGENT_STATE_CHANGED: 405,
  ASM_AGENT_LOGOUT: 406,
  ASM_PAUSE_EVENT: 407,
  ASM_RESUME_EVENT: 408,
  ASM_CONVERSATION_PULLED_EVENT: 409,
  SCORECARDS_CREATE_QUESTION_EVENT: 500,
  SCORECARDS_UPDATE_QUESTION_EVENT: 501,
  SCORECARDS_DELETE_QUESTION_EVENT: 502,
  SCORECARDS_CREATE_SCORECARD_EVENT: 503,
  SCORECARDS_UPDATE_SCORECARD_EVENT: 504,
  SCORECARDS_DELETE_SCORECARD_EVENT: 505,
  SCORECARDS_CLONE_SCORECARD_EVENT: 506,
  SCORECARDS_CREATE_EVALUATION_EVENT: 507,
  SCORECARDS_DELETE_EVALUATION_EVENT: 508,
  SCORECARDS_CREATE_SECTION_EVENT: 509,
  SCORECARDS_UPDATE_SECTION_EVENT: 510,
  SCORECARDS_DELETE_SECTION_EVENT: 511,
  SCORECARDS_CREATE_CATEGORY_EVENT: 512,
  SCORECARDS_UPDATE_CATEGORY_EVENT: 513,
  SCORECARDS_DELETE_CATEGORY_EVENT: 514,
  SCORECARDS_CREATE_EVALUATION_QUESTION_EVENT: 515,
  SCORECARDS_UPDATE_EVALUATION_QUESTION_EVENT: 516,
  SCORECARDS_DELETE_EVALUATION_QUESTION_EVENT: 517,
  SCORECARDS_CREATE_SCORECARD_QUESTION_EVENT: 518,
  SCORECARDS_UPDATE_SCORECARD_QUESTION_EVENT: 519,
  SCORECARDS_DELETE_SCORECARD_QUESTION_EVENT: 520,
  SCORECARDS_CREATE_AUTO_EVALUATION_EVENT: 521,
  SCORECARDS_UPDATE_EVALUATION_EVENT: 522,
  TICKET_CREATE_EVENT: 600,
  TICKET_EDIT_EVENT: 601,
  TICKET_CLOSE_EVENT: 602,
  TICKET_ACTION_CREATE_EVENT: 603,
  TICKET_ACTION_EDIT_EVENT: 604,
  TICKET_ACTION_STATE_CHANGE_EVENT: 605,
  TICKET_PARTICIPANT_EVENT: 606,
  TICKET_CREATE_COMMENT_EVENT: 607,
  TICKET_REPLY_COMMENT_EVENT: 608,
  COMPLIANCE_RND_QUERY_EVENT: 700,
  COMPLIANCE_RND_QUERY_CACHED_EVENT: 701,
  AGENT_TRAINING_CREATE_LEARNING_OPPORTUNITY_EVENT: 800,
  LMS_PIPELINE_FAILURE_EVENT: 900,
  EVENT_TYPE_BILLING_COMMIT_BILLING_PLAN: 1000,
  EVENT_TYPE_BILLING_CREATE_BILLING_PLAN: 1001,
  EVENT_TYPE_BILLING_CREATE_INVOICE: 1002,
  EVENT_TYPE_BILLING_CREATE_RATE_DEFINITION: 1003,
  EVENT_TYPE_BILLING_DELETE_BILLING_PLAN: 1004,
  EVENT_TYPE_BILLING_DELETE_INVOICE: 1005,
  EVENT_TYPE_BILLING_DELETE_RATE_DEFINITION: 1006,
  EVENT_TYPE_BILLING_EXPORT_INVOICE: 1007,
  EVENT_TYPE_BILLING_UPDATE_BILLING_PLAN: 1008,
  EVENT_TYPE_BILLING_UPDATE_INVOICE: 1009,
  EVENT_TYPE_BILLING_UPDATE_RATE_DEFINITION: 1010
};

goog.object.extend(exports, proto.api.commons.audit);
