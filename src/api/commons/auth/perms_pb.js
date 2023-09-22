// source: api/commons/auth/perms.proto
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

var annotations_perms_tcn_pb = require('../../../annotations/perms/tcn_pb.js');
goog.object.extend(proto, annotations_perms_tcn_pb);
goog.exportSymbol('proto.api.commons.auth.Permission', null, global);
/**
 * @enum {number}
 */
proto.api.commons.auth.Permission = {
  PERMISSION_UNSPECIFIED: 0,
  PERMISSION_DEV: 1,
  PERMISSION_LEARN_EDIT: 10,
  PERMISSION_ORG_EDIT: 100,
  PERMISSION_ORG_VIEW: 101,
  PERMISSION_OWNING_ORG_IMITATION: 130,
  PERMISSION_USER_CREATE: 118,
  PERMISSION_USER_EDIT: 119,
  PERMISSION_USER_EDIT_PASSWORD: 120,
  PERMISSION_USER_EDIT_OPTIONS: 121,
  PERMISSION_LOGIN_CONNECTIONS: 260,
  PERMISSION_USER_EDIT_AGENT_CALLER_ID: 122,
  PERMISSION_AGENT_MANAGEMENT: 400,
  PERMISSION_PERMISSION_GROUP_EDIT: 110,
  PERMISSION_PERMISSION_GROUP_ASSIGN: 111,
  PERMISSION_LABEL_MANAGEMENT: 150,
  PERMISSION_TRUST_MANAGEMENT: 160,
  PERMISSION_HUNTGROUP_VIEW: 1900,
  PERMISSION_HUNTGROUP_EDIT: 1901,
  PERMISSION_SOUNDBOARD_VIEW: 1700,
  PERMISSION_SOUNDBOARD_EDIT: 1701,
  PERMISSION_SUBSCRIPTION_MANAGEMENT: 140,
  PERMISSION_CUSTOMER_SUPPORT: 200,
  PERMISSION_IMITATION: 210,
  PERMISSION_BILLING_EDIT: 220,
  PERMISSION_TCN_ADMIN_SETTINGS: 230,
  PERMISSION_TCN_BILLING: 240,
  PERMISSION_SUPPORT_TCN_INSIGHTS_ADMIN: 250,
  PERMISSION_SUPPORT_TCN_DASHBOARDS_ADMIN: 251,
  PERMISSION_AGENT: 300,
  PERMISSION_ACCEPT_QUEUED_CALLS: 310,
  PERMISSION_VIEW_CAMPAIGN_COMPLETION: 320,
  PERMISSION_VIEW_VOICE_MAIL: 321,
  PERMISSION_AGENT_COMPLIANCE_SCRUBLIST_OPTIONS: 330,
  PERMISSION_EXTENSION_EDIT: 1400,
  PERMISSION_VOICEMAIL_DOWNLOAD: 1401,
  PERMISSION_AGENT_PORTALS_VIEW: 340,
  PERMISSION_VOICE_ANALYTICS: 500,
  PERMISSION_VOICE_ANALYTICS_FLAG: 501,
  PERMISSION_VOICE_ANALYTICS_CONFIG: 502,
  PERMISSION_VOICE_ANALYTICS_RECORDING_DOWNLOAD: 503,
  PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DOWNLOAD: 504,
  PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING: 505,
  PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DELETE: 506,
  PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING_DELETE: 507,
  PERMISSION_BUSINESS_INTELLIGENCE: 600,
  PERMISSION_DASHBOARDS_VIEW: 601,
  PERMISSION_DASHBOARDS_EDIT: 602,
  PERMISSION_INSIGHTS_COMMON_LIBRARY_MANAGE: 603,
  PERMISSION_INSIGHTS_MANAGE: 604,
  PERMISSION_INSIGHTS_INSIGHT_VIEW: 605,
  PERMISSION_INSIGHTS_INSIGHT_EDIT: 606,
  PERMISSION_INSIGHTS_DASHBOARD_VIEW: 607,
  PERMISSION_INSIGHTS_DASHBOARD_EDIT: 608,
  PERMISSION_ROOM303: 700,
  PERMISSION_AGENT_CALL_SCRIPTS: 800,
  PERMISSION_COMPLIANCE: 900,
  PERMISSION_COMPLIANCE_CONSENT: 910,
  PERMISSION_LMS_VIEW: 1000,
  PERMISSION_LMS_EDIT: 1001,
  PERMISSION_OMNI_BOSS: 1200,
  PERMISSION_OMNI_PORTALS_VIEW: 1210,
  PERMISSION_INTEGRATIONS_VIEW: 1300,
  PERMISSION_INTEGRATIONS_PAYMENT: 1301,
  PERMISSION_INTEGRATIONS_JOURNEY: 1302,
  PERMISSION_WFM: 1500,
  PERMISSION_AGENT_PORTAL: 1501,
  PERMISSION_SCORECARDS: 1600,
  PERMISSION_SCORECARDS_MANAGE: 1601,
  PERMISSION_SCORECARDS_EVALUATE: 1602,
  PERMISSION_SCORECARDS_FLAG_EVAL: 1603,
  PERMISSION_DEV_TOOLS: 1800,
  PERMISSION_DELIVERY_NOTIFICATIONS_VIEW: 2000,
  PERMISSION_DELIVERY_NOTIFICATIONS_EDIT: 2001,
  PERMISSION_TICKETS_APP: 3100,
  PERMISSION_TICKETS_ADMIN: 3101,
  PERMISSION_WORKFLOWS: 4000,
  PERMISSION_PBX_MANAGER_VIEW: 4100,
  PERMISSION_PBX_MANAGER_EDIT: 4101,
  PERMISSION_NEWSROOM_EDIT: 4200,
  PERMISSION_NEWSROOM_PUBLISH: 4201
};

goog.object.extend(exports, proto.api.commons.auth);
