// source: annotations/perms/license.proto
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

goog.exportSymbol('proto.annotations.perms.Application', null, global);
goog.exportSymbol('proto.annotations.perms.Card', null, global);
/**
 * @enum {number}
 */
proto.annotations.perms.Application = {
  APPLICATION_UNSPECIFIED: 0,
  APPLICATION_AGENT: 1,
  APPLICATION_BUSINESS_INTELLIGENCE: 2,
  APPLICATION_DELIVERY_SERVICE: 3,
  APPLICATION_DEV_TOOLS: 4,
  APPLICATION_INTEGRATIONS: 5,
  APPLICATION_LIST_MANAGEMENT_SERVICES: 6,
  APPLICATION_NATURAL_LANGUAGE_COMPLIANCE: 7,
  APPLICATION_OMNI_BOSS: 8,
  APPLICATION_ORGANIZATION: 9,
  APPLICATION_ROOM_303: 10,
  APPLICATION_SCORECARDS: 11,
  APPLICATION_SCRIPTS: 12,
  APPLICATION_TICKETS: 13,
  APPLICATION_VOICE_ANALYTICS: 14,
  APPLICATION_WORK_FORCE_MANAGEMENT: 15,
  APPLICATION_WORKFLOWS: 16,
  APPLICATION_NEWSROOM: 17,
  APPLICATION_CONTACTMANAGER: 18
};

/**
 * @enum {number}
 */
proto.annotations.perms.Card = {
  CARD_UNSPECIFIED: 0,
  CARD_ORGANIZATION: 1,
  CARD_USERS: 2,
  CARD_AGENTS: 3,
  CARD_PERMISSION_GROUPS: 4,
  CARD_LABELS: 5,
  CARD_TRUSTS: 6,
  CARD_HUNT_GROUPS: 7,
  CARD_SOUNDBOARD: 8,
  CARD_SUBSCRIPTIONS: 9,
  CARD_PBX_MANAGER: 10,
  CARD_AGENT_SCRIPTS: 11
};

goog.object.extend(exports, proto.annotations.perms);
