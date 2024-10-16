// source: api/commons/manager.proto
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

goog.exportSymbol('proto.api.commons.AgentInfo', null, global);
goog.exportSymbol('proto.api.commons.AgentStats', null, global);
goog.exportSymbol('proto.api.commons.ManagerBargeInMode', null, global);
goog.exportSymbol('proto.api.commons.SkillQueues', null, global);
goog.exportSymbol('proto.api.commons.SkillStats', null, global);
/**
 * @enum {number}
 */
proto.api.commons.AgentInfo = {
  AGENT_INFO_ACTIVE_AGENTS: 0,
  AGENT_INFO_IN_CONFERENCE_AGENTS: 1,
  AGENT_INFO_MANUAL_AGENTS: 2,
  AGENT_INFO_PAUSED_AGENTS: 3,
  AGENT_INFO_PREVIEW_AGENTS: 4,
  AGENT_INFO_READY_AGENTS: 5,
  AGENT_INFO_TOTAL_AGENTS: 6,
  AGENT_INFO_TRANSFER_AGENTS: 7,
  AGENT_INFO_WRAP_UP_AGENTS: 8
};

/**
 * @enum {number}
 */
proto.api.commons.SkillStats = {
  SKILL_STATS_AGENT_PEERED_CALLS: 0,
  SKILL_STATS_AVERAGE_LENGTH: 1,
  SKILL_STATS_CALL_COUNT: 2,
  SKILL_STATS_CALL_SKILL_MAP: 3,
  SKILL_STATS_CALL_TYPE: 4,
  SKILL_STATS_CALLS_LIST: 5,
  SKILL_STATS_DAILY_BY_SKILLS_KEY: 6,
  SKILL_STATS_LONGEST_IN_QUEUE: 7,
  SKILL_STATS_MATCHING_AGENTS_MD: 8,
  SKILL_STATS_MATCHING_AGENTS_PC: 9,
  SKILL_STATS_MATCHING_AGENTS_LI: 10,
  SKILL_STATS_MATCHING_AGENTS_OC: 11,
  SKILL_STATS_MATCHING_AGENTS_P: 12,
  SKILL_STATS_MATCHING_AGENTS_W: 13,
  SKILL_STATS_MATCHING_AGENTS_WU: 14,
  SKILL_STATS_MATCHING_AGENTS_TC: 15,
  SKILL_STATS_MAXIMUM_LENGTH: 16,
  SKILL_STATS_MINIMUM_LENGTH: 17,
  SKILL_STATS_PBX_EXTENSION: 18,
  SKILL_STATS_QUEUED_NOTIFICATION_TYPE: 19,
  SKILL_STATS_SKILL_SET: 20,
  SKILL_STATS_TOTAL_LENGTH_FOR_AVERAGE: 21
};

/**
 * @enum {number}
 */
proto.api.commons.SkillQueues = {
  SKILL_QUEUES_ACD_QUEUE: 0,
  SKILL_QUEUES_MULTI_HOLD: 1,
  SKILL_QUEUES_SIMPLE_HOLD: 2,
  SKILL_QUEUES_TRANSFER: 3,
  SKILL_QUEUES_SUSPENDED_CALLBACK: 4,
  SKILL_QUEUES_GRAND_TOTALS: 5
};

/**
 * @enum {number}
 */
proto.api.commons.AgentStats = {
  AGENT_STATS_AGENT_NAME: 0,
  AGENT_STATS_AGENT_STATUS: 1,
  AGENT_STATS_DURATION_IN_STATUS: 2,
  AGENT_STATS_LOGIN_DATE_TIME: 3,
  AGENT_STATS_LOGIN_DURATION: 4,
  AGENT_STATS_AGENT_SKILLS: 5,
  AGENT_STATS_AGENT_SID: 6,
  AGENT_STATS_SESSION_ID: 7,
  AGENT_STATS_HUNT_GROUP_NAME: 8,
  AGENT_STATS_CALL_COUNT: 9,
  AGENT_STATS_PAUSE_CODE: 10,
  AGENT_STATS_RECORDING_STATUS: 11,
  AGENT_STATS_MULTI_HOLD_COUNT: 12,
  AGENT_STATS_SIMPLE_HOLD_COUNT: 13,
  AGENT_STATS_TOTAL_HOLD_COUNT: 14
};

/**
 * @enum {number}
 */
proto.api.commons.ManagerBargeInMode = {
  MONITOR: 0,
  FULL_CONFERENCE: 1,
  AGENT_WHISPER: 2
};

goog.object.extend(exports, proto.api.commons);
