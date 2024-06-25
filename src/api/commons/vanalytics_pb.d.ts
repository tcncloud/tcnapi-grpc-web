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

export interface TranscriptSummaryStatusMap {
  TRANSCRIPT_SUMMARY_STATUS_QUEUED: 0;
  TRANSCRIPT_SUMMARY_STATUS_QUEUED_ERRORED: -1;
  TRANSCRIPT_SUMMARY_STATUS_SUMMARIZED: 1;
  TRANSCRIPT_SUMMARY_STATUS_SUMMARIZED_ERRORED: -2;
  TRANSCRIPT_SUMMARY_STATUS_VISIBLE: 2;
}

export const TranscriptSummaryStatus: TranscriptSummaryStatusMap;

