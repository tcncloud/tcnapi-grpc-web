// package: api.v1alpha1.bireportgenerator
// file: api/v1alpha1/bireportgenerator/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_bireportgenerator_pb from "../../../api/commons/bireportgenerator_pb";
import * as api_commons_enums_pb from "../../../api/commons/enums_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_types_pb from "../../../api/commons/types_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ReportJob extends jspb.Message {
  getReportJobId(): string;
  setReportJobId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDashboardId(): string;
  setDashboardId(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getTimePeriod(): api_commons_bireportgenerator_pb.TimePeriodMap[keyof api_commons_bireportgenerator_pb.TimePeriodMap];
  setTimePeriod(value: api_commons_bireportgenerator_pb.TimePeriodMap[keyof api_commons_bireportgenerator_pb.TimePeriodMap]): void;

  hasDeliveryTimes(): boolean;
  clearDeliveryTimes(): void;
  getDeliveryTimes(): api_commons_bireportgenerator_pb.DeliveryTimes | undefined;
  setDeliveryTimes(value?: api_commons_bireportgenerator_pb.DeliveryTimes): void;

  hasDayFilter(): boolean;
  clearDayFilter(): void;
  getDayFilter(): api_commons_bireportgenerator_pb.DayFilter | undefined;
  setDayFilter(value?: api_commons_bireportgenerator_pb.DayFilter): void;

  clearMonthsList(): void;
  getMonthsList(): Array<api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap]>;
  setMonthsList(value: Array<api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap]>): void;
  addMonths(value: api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap], index?: number): api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap];

  hasFormatOptions(): boolean;
  clearFormatOptions(): void;
  getFormatOptions(): api_commons_bireportgenerator_pb.FormatOptions | undefined;
  setFormatOptions(value?: api_commons_bireportgenerator_pb.FormatOptions): void;

  hasDeliveryOptions(): boolean;
  clearDeliveryOptions(): void;
  getDeliveryOptions(): api_commons_bireportgenerator_pb.DeliveryOptions | undefined;
  setDeliveryOptions(value?: api_commons_bireportgenerator_pb.DeliveryOptions): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getSendEmptyReport(): boolean;
  setSendEmptyReport(value: boolean): void;

  getDashboardResourceId(): string;
  setDashboardResourceId(value: string): void;

  hasTimeZoneWrapper(): boolean;
  clearTimeZoneWrapper(): void;
  getTimeZoneWrapper(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneWrapper(value?: api_commons_org_pb.TimeZoneWrapper): void;

  getHideCsvFooter(): boolean;
  setHideCsvFooter(value: boolean): void;

  getTransferConfigSid(): number;
  setTransferConfigSid(value: number): void;

  hasCronExpression(): boolean;
  clearCronExpression(): void;
  getCronExpression(): api_commons_types_pb.CronExpression | undefined;
  setCronExpression(value?: api_commons_types_pb.CronExpression): void;

  hasTransferOptions(): boolean;
  clearTransferOptions(): void;
  getTransferOptions(): api_commons_bireportgenerator_pb.TransferOptions | undefined;
  setTransferOptions(value?: api_commons_bireportgenerator_pb.TransferOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportJob.AsObject;
  static toObject(includeInstance: boolean, msg: ReportJob): ReportJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportJob;
  static deserializeBinaryFromReader(message: ReportJob, reader: jspb.BinaryReader): ReportJob;
}

export namespace ReportJob {
  export type AsObject = {
    reportJobId: string,
    name: string,
    description: string,
    dashboardId: string,
    timeZone: string,
    timePeriod: api_commons_bireportgenerator_pb.TimePeriodMap[keyof api_commons_bireportgenerator_pb.TimePeriodMap],
    deliveryTimes?: api_commons_bireportgenerator_pb.DeliveryTimes.AsObject,
    dayFilter?: api_commons_bireportgenerator_pb.DayFilter.AsObject,
    monthsList: Array<api_commons_enums_pb.MonthMap[keyof api_commons_enums_pb.MonthMap]>,
    formatOptions?: api_commons_bireportgenerator_pb.FormatOptions.AsObject,
    deliveryOptions?: api_commons_bireportgenerator_pb.DeliveryOptions.AsObject,
    isActive: boolean,
    sendEmptyReport: boolean,
    dashboardResourceId: string,
    timeZoneWrapper?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    hideCsvFooter: boolean,
    transferConfigSid: number,
    cronExpression?: api_commons_types_pb.CronExpression.AsObject,
    transferOptions?: api_commons_bireportgenerator_pb.TransferOptions.AsObject,
  }
}

export class ReportLog extends jspb.Message {
  getReportLogId(): number;
  setReportLogId(value: number): void;

  getReportJobId(): number;
  setReportJobId(value: number): void;

  getReportName(): string;
  setReportName(value: string): void;

  getReportStatus(): api_commons_bireportgenerator_pb.ReportStatusMap[keyof api_commons_bireportgenerator_pb.ReportStatusMap];
  setReportStatus(value: api_commons_bireportgenerator_pb.ReportStatusMap[keyof api_commons_bireportgenerator_pb.ReportStatusMap]): void;

  hasRequestedDate(): boolean;
  clearRequestedDate(): void;
  getRequestedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRetryCount(): number;
  setRetryCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportLog.AsObject;
  static toObject(includeInstance: boolean, msg: ReportLog): ReportLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportLog;
  static deserializeBinaryFromReader(message: ReportLog, reader: jspb.BinaryReader): ReportLog;
}

export namespace ReportLog {
  export type AsObject = {
    reportLogId: number,
    reportJobId: number,
    reportName: string,
    reportStatus: api_commons_bireportgenerator_pb.ReportStatusMap[keyof api_commons_bireportgenerator_pb.ReportStatusMap],
    requestedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    retryCount: number,
  }
}

