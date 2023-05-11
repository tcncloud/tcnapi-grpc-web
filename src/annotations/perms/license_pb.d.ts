// package: annotations.perms
// file: annotations/perms/license.proto

import * as jspb from "google-protobuf";

export interface ApplicationMap {
  APPLICATION_UNSPECIFIED: 0;
  APPLICATION_AGENT: 1;
  APPLICATION_BUSINESS_INTELLIGENCE: 2;
  APPLICATION_DELIVERY_SERVICE: 3;
  APPLICATION_DEV_TOOLS: 4;
  APPLICATION_INTEGRATIONS: 5;
  APPLICATION_LIST_MANAGEMENT_SERVICES: 6;
  APPLICATION_NATURAL_LANGUAGE_COMPLIANCE: 7;
  APPLICATION_OMNI_BOSS: 8;
  APPLICATION_ORGANIZATION: 9;
  APPLICATION_ROOM_303: 10;
  APPLICATION_SCORECARDS: 11;
  APPLICATION_SCRIPTS: 12;
  APPLICATION_TICKETS: 13;
  APPLICATION_VOICE_ANALYTICS: 14;
  APPLICATION_WORK_FORCE_MANAGEMENT: 15;
}

export const Application: ApplicationMap;

export interface CardMap {
  CARD_UNSPECIFIED: 0;
  CARD_ORGANIZATION: 1;
  CARD_USERS: 2;
  CARD_AGENTS: 3;
  CARD_PERMISSION_GROUPS: 4;
  CARD_LABELS: 5;
  CARD_TRUSTS: 6;
  CARD_HUNT_GROUPS: 7;
  CARD_SOUNDBOARD: 8;
  CARD_SUBSCRIPTIONS: 9;
}

export const Card: CardMap;

