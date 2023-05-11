// package: api.commons
// file: api/commons/compliance.proto

import * as jspb from "google-protobuf";

export interface VerbMap {
  V_UNKNOWN: 0;
  V_ALLOW: 1;
  V_DENY: 2;
  V_SCRUB: 3;
  V_OVERRIDE: 4;
}

export const Verb: VerbMap;

export interface EntityMap {
  E_UNKNOWN: 0;
  E_CALL: 1;
  E_EMAIL: 2;
  E_SMS: 3;
}

export const Entity: EntityMap;

export interface SubEntityMap {
  SE_ALL: 0;
  SE_INBOUND: 1;
  SE_OUTBOUND: 2;
  SE_MANUAL: 3;
  SE_PREVIEW: 4;
  SE_MAC: 5;
  SE_BROADCAST: 6;
}

export const SubEntity: SubEntityMap;

export interface PhoneTypeMap {
  CELL: 0;
  LAND: 1;
  TOLL_FREE: 2;
}

export const PhoneType: PhoneTypeMap;

export interface ContentTypeMap {
  CT_PHONE_NUMBER: 0;
  CT_EMAIL: 1;
  CT_SMS: 2;
  CT_OTHER: 3;
  CT_ACCOUNT_NUMBER: 4;
}

export const ContentType: ContentTypeMap;

export interface ChannelMap {
  CHANNEL_CALL: 0;
  CHANNEL_EMAIL: 1;
  CHANNEL_SMS: 2;
}

export const Channel: ChannelMap;

export interface PluginTypeMap {
  UNKNOWN_PLUGIN: 0;
  GRYPHON: 1;
  TCN_CONSENT: 2;
  RND: 3;
}

export const PluginType: PluginTypeMap;

export interface EnvironmentMap {
  INVALID_ENV: 0;
  TEST: 1;
  PRODUCTION: 2;
}

export const Environment: EnvironmentMap;

export interface ConsentAbsentActionMap {
  CONSENT_ABSENT_ACTION_ALLOW: 0;
  CONSENT_ABSENT_ACTION_DENY: 1;
}

export const ConsentAbsentAction: ConsentAbsentActionMap;

