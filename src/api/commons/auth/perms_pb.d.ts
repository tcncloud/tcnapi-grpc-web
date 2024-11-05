// package: api.commons.auth
// file: api/commons/auth/perms.proto

import * as jspb from "google-protobuf";
import * as annotations_perms_tcn_pb from "../../../annotations/perms/tcn_pb";

export interface PermissionMap {
  PERMISSION_UNSPECIFIED: 0;
  PERMISSION_DEV: 1;
  PERMISSION_LEARN_EDIT: 10;
  PERMISSION_ORG_EDIT: 100;
  PERMISSION_ORG_VIEW: 101;
  PERMISSION_OWNING_ORG_IMITATION: 130;
  PERMISSION_USER_CREATE: 118;
  PERMISSION_USER_EDIT: 119;
  PERMISSION_USER_EDIT_PASSWORD: 120;
  PERMISSION_USER_EDIT_OPTIONS: 121;
  PERMISSION_LOGIN_CONNECTIONS: 260;
  PERMISSION_USER_EDIT_AGENT_CALLER_ID: 122;
  PERMISSION_ACCESS_TOKEN_MANAGMENT: 123;
  PERMISSION_AGENT_MANAGEMENT: 400;
  PERMISSION_PERMISSION_GROUP_EDIT: 110;
  PERMISSION_PERMISSION_GROUP_ASSIGN: 111;
  PERMISSION_LABEL_MANAGEMENT: 150;
  PERMISSION_LABEL_ATTACH: 151;
  PERMISSION_TRUST_MANAGEMENT: 160;
  PERMISSION_HUNTGROUP_VIEW: 1900;
  PERMISSION_HUNTGROUP_EDIT: 1901;
  PERMISSION_AGENT_SCRIPTS_VIEW: 1950;
  PERMISSION_AGENT_SCRIPTS_EDIT: 1951;
  PERMISSION_SOUNDBOARD_VIEW: 1700;
  PERMISSION_SOUNDBOARD_EDIT: 1701;
  PERMISSION_SUBSCRIPTION_MANAGEMENT: 140;
  PERMISSION_COPY_TO_ORGANIZATION: 170;
  PERMISSION_CUSTOMER_SUPPORT: 200;
  PERMISSION_IMITATION: 210;
  PERMISSION_BILLING_EDIT: 220;
  PERMISSION_TCN_ADMIN_SETTINGS: 230;
  PERMISSION_TCN_BILLING: 240;
  PERMISSION_TCN_BILLING_ADMIN: 241;
  PERMISSION_SUPPORT_TCN_INSIGHTS_ADMIN: 250;
  PERMISSION_SUPPORT_TCN_DASHBOARDS_ADMIN: 251;
  PERMISSION_AGENT: 300;
  PERMISSION_ACCEPT_QUEUED_CALLS: 310;
  PERMISSION_VIEW_HOLD_QUEUE: 311;
  PERMISSION_VIEW_CAMPAIGN_COMPLETION: 320;
  PERMISSION_VIEW_VOICE_MAIL: 321;
  PERMISSION_AGENT_COMPLIANCE_SCRUBLIST_OPTIONS: 330;
  PERMISSION_EXTENSION_EDIT: 1400;
  PERMISSION_VOICEMAIL_DOWNLOAD: 1401;
  PERMISSION_AGENT_PORTALS_VIEW: 340;
  PERMISSION_MANUAL_APPROVE: 341;
  PERMISSION_AGENT_PLUGINS_VIEW: 342;
  PERMISSION_AGENT_HUNTGROUP_INTEGRATIONS_VIEW: 343;
  PERMISSION_MANUAL_CONVERSATION: 344;
  PERMISSION_AGENT_ASSISTED_PORTAL: 345;
  PERMISSION_CHANGE_OWN_HUNT_GROUP: 360;
  PERMISSION_CHANGE_OWN_SKILL_GROUPS: 361;
  PERMISSION_VOICE_ANALYTICS: 500;
  PERMISSION_VOICE_ANALYTICS_FLAG: 501;
  PERMISSION_VOICE_ANALYTICS_CONFIG: 502;
  PERMISSION_VOICE_ANALYTICS_RECORDING_DOWNLOAD: 503;
  PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DOWNLOAD: 504;
  PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING: 505;
  PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DELETE: 506;
  PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING_DELETE: 507;
  PERMISSION_BUSINESS_INTELLIGENCE: 600;
  PERMISSION_DASHBOARDS_VIEW: 601;
  PERMISSION_DASHBOARDS_EDIT: 602;
  PERMISSION_INSIGHTS_COMMON_LIBRARY_MANAGE: 603;
  PERMISSION_INSIGHTS_MANAGE: 604;
  PERMISSION_INSIGHTS_INSIGHT_VIEW: 605;
  PERMISSION_INSIGHTS_INSIGHT_EDIT: 606;
  PERMISSION_INSIGHTS_DASHBOARD_VIEW: 607;
  PERMISSION_INSIGHTS_DASHBOARD_EDIT: 608;
  PERMISSION_REPORT_GENERATOR_EDIT: 609;
  PERMISSION_ROOM303: 700;
  PERMISSION_ROOM303_MEMBER: 701;
  PERMISSION_ROOM303_SUPERVISOR: 702;
  PERMISSION_AGENT_CALL_SCRIPTS: 800;
  PERMISSION_COMPLIANCE: 900;
  PERMISSION_COMPLIANCE_CONSENT: 910;
  PERMISSION_LMS_VIEW: 1000;
  PERMISSION_LMS_EDIT: 1001;
  PERMISSION_OMNI_BOSS: 1200;
  PERMISSION_OMNI_BOSS_EDIT: 1201;
  PERMISSION_OMNI_PORTALS_VIEW: 1210;
  PERMISSION_INTEGRATIONS_VIEW: 1300;
  PERMISSION_INTEGRATIONS_PAYMENT: 1301;
  PERMISSION_INTEGRATIONS_JOURNEY: 1302;
  PERMISSIONS_INTEGRATIONS_KEY_CREATION: 1310;
  PERMISSION_WFM: 1500;
  PERMISSION_AGENT_PORTAL: 1501;
  PERMISSION_WFM_ADHERENCE_ADMIN: 1502;
  PERMISSION_WFM_ADHERENCE_MANAGER: 1503;
  PERMISSION_WFM_ADHERENCE_MONITOR: 1504;
  PERMISSION_SCORECARDS: 1600;
  PERMISSION_SCORECARDS_MANAGE: 1601;
  PERMISSION_SCORECARDS_EVALUATE: 1602;
  PERMISSION_SCORECARDS_FLAG_EVAL: 1603;
  PERMISSION_SCORECARDS_LEARNING_OPPORTUNITIES: 1604;
  PERMISSION_DEV_TOOLS: 1800;
  PERMISSION_DELIVERY_NOTIFICATIONS_VIEW: 2000;
  PERMISSION_DELIVERY_NOTIFICATIONS_EDIT: 2001;
  PERMISSION_TICKETS_APP: 3100;
  PERMISSION_TICKETS_ADMIN: 3101;
  PERMISSION_WORKFLOWS: 4000;
  PERMISSION_PBX_MANAGER_VIEW: 4100;
  PERMISSION_PBX_MANAGER_EDIT: 4101;
  PERMISSION_PBX_SOFTPHONE_WIDGET: 4110;
  PERMISSION_NEWSROOM_VIEW: 4199;
  PERMISSION_NEWSROOM_EDIT: 4200;
  PERMISSION_NEWSROOM_PUBLISH: 4201;
  PERMISSION_CONTACTMANAGER_ADMIN: 5100;
  PERMISSION_CONTACTMANAGER_APP: 5101;
}

export const Permission: PermissionMap;

