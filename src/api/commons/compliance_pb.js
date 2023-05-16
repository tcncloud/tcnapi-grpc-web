// source: api/commons/compliance.proto
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

goog.exportSymbol('proto.api.commons.Channel', null, global);
goog.exportSymbol('proto.api.commons.ConsentAbsentAction', null, global);
goog.exportSymbol('proto.api.commons.ContentType', null, global);
goog.exportSymbol('proto.api.commons.Entity', null, global);
goog.exportSymbol('proto.api.commons.Environment', null, global);
goog.exportSymbol('proto.api.commons.PhoneType', null, global);
goog.exportSymbol('proto.api.commons.PluginType', null, global);
goog.exportSymbol('proto.api.commons.SubEntity', null, global);
goog.exportSymbol('proto.api.commons.Verb', null, global);
/**
 * @enum {number}
 */
proto.api.commons.Verb = {
  V_UNKNOWN: 0,
  V_ALLOW: 1,
  V_DENY: 2,
  V_SCRUB: 3,
  V_OVERRIDE: 4
};

/**
 * @enum {number}
 */
proto.api.commons.Entity = {
  E_UNKNOWN: 0,
  E_CALL: 1,
  E_EMAIL: 2,
  E_SMS: 3
};

/**
 * @enum {number}
 */
proto.api.commons.SubEntity = {
  SE_ALL: 0,
  SE_INBOUND: 1,
  SE_OUTBOUND: 2,
  SE_MANUAL: 3,
  SE_PREVIEW: 4,
  SE_MAC: 5,
  SE_BROADCAST: 6
};

/**
 * @enum {number}
 */
proto.api.commons.PhoneType = {
  CELL: 0,
  LAND: 1,
  TOLL_FREE: 2
};

/**
 * @enum {number}
 */
proto.api.commons.ContentType = {
  CT_PHONE_NUMBER: 0,
  CT_EMAIL: 1,
  CT_SMS: 2,
  CT_OTHER: 3,
  CT_ACCOUNT_NUMBER: 4
};

/**
 * @enum {number}
 */
proto.api.commons.Channel = {
  CHANNEL_CALL: 0,
  CHANNEL_EMAIL: 1,
  CHANNEL_SMS: 2
};

/**
 * @enum {number}
 */
proto.api.commons.PluginType = {
  UNKNOWN_PLUGIN: 0,
  GRYPHON: 1,
  TCN_CONSENT: 2,
  RND: 3
};

/**
 * @enum {number}
 */
proto.api.commons.Environment = {
  INVALID_ENV: 0,
  TEST: 1,
  PRODUCTION: 2
};

/**
 * @enum {number}
 */
proto.api.commons.ConsentAbsentAction = {
  CONSENT_ABSENT_ACTION_ALLOW: 0,
  CONSENT_ABSENT_ACTION_DENY: 1
};

goog.object.extend(exports, proto.api.commons);
