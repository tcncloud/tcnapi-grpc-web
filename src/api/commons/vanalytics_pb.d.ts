// package: api.commons
// file: api/commons/vanalytics.proto

import * as jspb from "google-protobuf";

export interface IntervalMap {
  TODAY: 0;
  YESTERDAY: 1;
  THIS_WEEK: 2;
  LAST_7_DAYS: 3;
  LAST_WEEK: 4;
  LAST_14_DAYS: 5;
  THIS_MONTH: 6;
  LAST_30_DAYS: 7;
  LAST_60_DAYS: 8;
  LAST_90_DAYS: 9;
  LAST_180_DAYS: 10;
}

export const Interval: IntervalMap;

export interface LanguageMap {
  LANGUAGE_ENGLISH: 0;
  LANGUAGE_AUTO_DETECT: 1;
  LANGUAGE_SPANISH: 2;
  LANGUAGE_ROMANIAN: 3;
}

export const Language: LanguageMap;

