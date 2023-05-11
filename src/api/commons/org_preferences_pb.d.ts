// package: api.commons
// file: api/commons/org_preferences.proto

import * as jspb from "google-protobuf";

export interface BroadcastTemplateOrderingMap {
  BY_NAME_ASC: 0;
  BY_NAME_DESC: 1;
  BY_TEMPLATE_NUMBER_ASC: 2;
  BY_TEMPLATE_NUMBER_DESC: 3;
  BY_MODIFIED_DATE_ASC: 4;
  BY_MODIFIED_DATE_DESC: 5;
}

export const BroadcastTemplateOrdering: BroadcastTemplateOrderingMap;

export interface ScheduleByTimeZoneScopeMap {
  BOTH: 0;
  STOP_DATE: 1;
  START_DATE: 2;
}

export const ScheduleByTimeZoneScope: ScheduleByTimeZoneScopeMap;

export interface AnsweringMachineDetectionMap {
  OPTIMIZE_MACHINE_DETECTION: 0;
  OPTIMIZE_MACHINE_DETECTION_SLOW_LIVE: 1;
  OPTIMIZE_MACHINE_DELIVERY: 2;
  BALANCED_DETECTION_AND_DELIVERY: 3;
}

export const AnsweringMachineDetection: AnsweringMachineDetectionMap;

export interface DialListPenetrationStrategyMap {
  DEPTH_FIRST: 0;
  BREADTH_FIRST: 1;
}

export const DialListPenetrationStrategy: DialListPenetrationStrategyMap;

export interface StandardReportFilterMap {
  NO_PREFERENCE: 0;
  FILTER_BY_ANSWERED_CALLS: 1;
  FILTER_BY_ANSWERED_HANGUPS: 2;
  FILTER_BY_ANSWERED_LINKCALL: 3;
  FILTER_BY_ANY_KEY_PRESSED: 4;
  FILTER_BY_BUSY: 5;
  FILTER_BY_CANCELED_CALLS: 6;
  FILTER_BY_CONFIRM_KEYS_3_THROUGH_6: 7;
  FILTER_BY_CONNECTED_CALLS: 8;
  FILTER_BY_DNCL_CANCELED: 9;
  FILTER_BY_FAILED_CALLS: 10;
  FILTER_BY_INVALID_CALLS: 11;
  FILTER_BY_LINKCALL_ABANDONED: 12;
  FILTER_BY_MACHINE_CALLS: 13;
  FILTER_BY_MACHINE_DELIVERY: 14;
  FILTER_BY_MACHINE_HANGUP: 15;
  FILTER_BY_MACHINE_AND_ANY_KEY: 16;
  FILTER_BY_NO_ANSWER: 17;
  FILTER_BY_NO_KEYS_PRESSED: 18;
  FILTER_BY_NOT_CANCELED_CALLS: 19;
  FILTER_BY_UNCONNECTED_CALLS: 20;
  FILTER_BY_UNCONNECTED_EXCLUDE_INVALID: 21;
  FILTER_BY_0_KEY: 22;
  FILTER_BY_1_KEY: 23;
  FILTER_BY_2_KEY: 24;
  FILTER_BY_3_KEY: 25;
  FILTER_BY_4_KEY: 26;
  FILTER_BY_5_KEY: 27;
  FILTER_BY_6_KEY: 28;
  FILTER_BY_7_KEY: 29;
  FILTER_BY_8_KEY: 30;
  FILTER_BY_9_KEY: 31;
  FILTER_BY_STAR_KEY: 32;
  FILTER_BY_POUND_KEY: 33;
  FILTER_BY_MACHINE_HANGUP_AND_UNCONNECTED: 34;
  FILTER_BY_EXCLUDING_CANCELED_AND_INVALID: 35;
}

export const StandardReportFilter: StandardReportFilterMap;

