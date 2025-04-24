// package: api.v1alpha1.bireportgenerator
// file: api/v1alpha1/bireportgenerator/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_bireportgenerator_pb from "../../../api/commons/bireportgenerator_pb";
import * as api_commons_enums_pb from "../../../api/commons/enums_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_types_pb from "../../../api/commons/types_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ReportParameters extends jspb.Message {
  getParametersMap(): jspb.Map<string, ReportParameters.Parameter>;
  clearParametersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ReportParameters): ReportParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportParameters;
  static deserializeBinaryFromReader(message: ReportParameters, reader: jspb.BinaryReader): ReportParameters;
}

export namespace ReportParameters {
  export type AsObject = {
    parametersMap: Array<[string, ReportParameters.Parameter.AsObject]>,
  }

  export class Parameter extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    getDataType(): string;
    setDataType(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
  }

  export namespace Parameter {
    export type AsObject = {
      value: string,
      dataType: string,
    }
  }
}

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

  hasReportParameters(): boolean;
  clearReportParameters(): void;
  getReportParameters(): ReportParameters | undefined;
  setReportParameters(value?: ReportParameters): void;

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
    reportParameters?: ReportParameters.AsObject,
  }
}

export class ReportLog extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getReportLogId(): number;
  setReportLogId(value: number): void;

  getReportJobId(): string;
  setReportJobId(value: string): void;

  getExecutionId(): string;
  setExecutionId(value: string): void;

  getReportName(): string;
  setReportName(value: string): void;

  hasJobRequestedTime(): boolean;
  clearJobRequestedTime(): void;
  getJobRequestedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJobRequestedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasJobCompletedTime(): boolean;
  clearJobCompletedTime(): void;
  getJobCompletedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJobCompletedTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getFailureReason(): string;
  setFailureReason(value: string): void;

  getAttemptNumber(): number;
  setAttemptNumber(value: number): void;

  getMaxAttempts(): number;
  setMaxAttempts(value: number): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDashboardTitle(): string;
  setDashboardTitle(value: string): void;

  hasScheduledTime(): boolean;
  clearScheduledTime(): void;
  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExecutionStartTime(): boolean;
  clearExecutionStartTime(): void;
  getExecutionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecutionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExecutionEndTime(): boolean;
  clearExecutionEndTime(): void;
  getExecutionEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecutionEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReportStartDate(): boolean;
  clearReportStartDate(): void;
  getReportStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReportStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReportEndDate(): boolean;
  clearReportEndDate(): void;
  getReportEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReportEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearCommentsList(): void;
  getCommentsList(): Array<string>;
  setCommentsList(value: Array<string>): void;
  addComments(value: string, index?: number): string;

  getTimezone(): string;
  setTimezone(value: string): void;

  clearFilenamesList(): void;
  getFilenamesList(): Array<string>;
  setFilenamesList(value: Array<string>): void;
  addFilenames(value: string, index?: number): string;

  getInsightCount(): number;
  setInsightCount(value: number): void;

  getDeliveryDefinitionTitle(): string;
  setDeliveryDefinitionTitle(value: string): void;

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
    orgId: string,
    reportLogId: number,
    reportJobId: string,
    executionId: string,
    reportName: string,
    jobRequestedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    jobCompletedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    success: boolean,
    failureReason: string,
    attemptNumber: number,
    maxAttempts: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dashboardTitle: string,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    executionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    executionEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reportStartDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reportEndDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    commentsList: Array<string>,
    timezone: string,
    filenamesList: Array<string>,
    insightCount: number,
    deliveryDefinitionTitle: string,
  }
}

