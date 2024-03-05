// package: api.commons
// file: api/commons/bireportgenerator.proto

import * as jspb from "google-protobuf";
import * as api_commons_enums_pb from "../../api/commons/enums_pb";

export class DeliveryTimes extends jspb.Message {
  clearDeliveryTimesList(): void;
  getDeliveryTimesList(): Array<number>;
  setDeliveryTimesList(value: Array<number>): void;
  addDeliveryTimes(value: number, index?: number): number;

  getRepeatFrequency(): RepeatFrequencyMap[keyof RepeatFrequencyMap];
  setRepeatFrequency(value: RepeatFrequencyMap[keyof RepeatFrequencyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryTimes.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryTimes): DeliveryTimes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeliveryTimes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryTimes;
  static deserializeBinaryFromReader(message: DeliveryTimes, reader: jspb.BinaryReader): DeliveryTimes;
}

export namespace DeliveryTimes {
  export type AsObject = {
    deliveryTimesList: Array<number>,
    repeatFrequency: RepeatFrequencyMap[keyof RepeatFrequencyMap],
  }
}

export class DayOfWeekFilter extends jspb.Message {
  clearDaysOfWeeksList(): void;
  getDaysOfWeeksList(): Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>;
  setDaysOfWeeksList(value: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>): void;
  addDaysOfWeeks(value: api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap], index?: number): api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap];

  clearWeeksOfMonthsList(): void;
  getWeeksOfMonthsList(): Array<number>;
  setWeeksOfMonthsList(value: Array<number>): void;
  addWeeksOfMonths(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DayOfWeekFilter.AsObject;
  static toObject(includeInstance: boolean, msg: DayOfWeekFilter): DayOfWeekFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DayOfWeekFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DayOfWeekFilter;
  static deserializeBinaryFromReader(message: DayOfWeekFilter, reader: jspb.BinaryReader): DayOfWeekFilter;
}

export namespace DayOfWeekFilter {
  export type AsObject = {
    daysOfWeeksList: Array<api_commons_enums_pb.Weekday.EnumMap[keyof api_commons_enums_pb.Weekday.EnumMap]>,
    weeksOfMonthsList: Array<number>,
  }
}

export class DayOfMonthFilter extends jspb.Message {
  clearDayOfMonthsList(): void;
  getDayOfMonthsList(): Array<number>;
  setDayOfMonthsList(value: Array<number>): void;
  addDayOfMonths(value: number, index?: number): number;

  getIsLastDayOfMonth(): boolean;
  setIsLastDayOfMonth(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DayOfMonthFilter.AsObject;
  static toObject(includeInstance: boolean, msg: DayOfMonthFilter): DayOfMonthFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DayOfMonthFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DayOfMonthFilter;
  static deserializeBinaryFromReader(message: DayOfMonthFilter, reader: jspb.BinaryReader): DayOfMonthFilter;
}

export namespace DayOfMonthFilter {
  export type AsObject = {
    dayOfMonthsList: Array<number>,
    isLastDayOfMonth: boolean,
  }
}

export class DayFilter extends jspb.Message {
  getType(): DayFilterTypeMap[keyof DayFilterTypeMap];
  setType(value: DayFilterTypeMap[keyof DayFilterTypeMap]): void;

  hasDayOfWeekFilter(): boolean;
  clearDayOfWeekFilter(): void;
  getDayOfWeekFilter(): DayOfWeekFilter | undefined;
  setDayOfWeekFilter(value?: DayOfWeekFilter): void;

  hasDayOfMonthFilter(): boolean;
  clearDayOfMonthFilter(): void;
  getDayOfMonthFilter(): DayOfMonthFilter | undefined;
  setDayOfMonthFilter(value?: DayOfMonthFilter): void;

  getFilterCase(): DayFilter.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DayFilter.AsObject;
  static toObject(includeInstance: boolean, msg: DayFilter): DayFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DayFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DayFilter;
  static deserializeBinaryFromReader(message: DayFilter, reader: jspb.BinaryReader): DayFilter;
}

export namespace DayFilter {
  export type AsObject = {
    type: DayFilterTypeMap[keyof DayFilterTypeMap],
    dayOfWeekFilter?: DayOfWeekFilter.AsObject,
    dayOfMonthFilter?: DayOfMonthFilter.AsObject,
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    DAY_OF_WEEK_FILTER = 2,
    DAY_OF_MONTH_FILTER = 3,
  }
}

export class FormatOptions extends jspb.Message {
  getReportFormat(): ReportFormatMap[keyof ReportFormatMap];
  setReportFormat(value: ReportFormatMap[keyof ReportFormatMap]): void;

  clearFilenamePartsList(): void;
  getFilenamePartsList(): Array<string>;
  setFilenamePartsList(value: Array<string>): void;
  addFilenameParts(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormatOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FormatOptions): FormatOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormatOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormatOptions;
  static deserializeBinaryFromReader(message: FormatOptions, reader: jspb.BinaryReader): FormatOptions;
}

export namespace FormatOptions {
  export type AsObject = {
    reportFormat: ReportFormatMap[keyof ReportFormatMap],
    filenamePartsList: Array<string>,
  }
}

export class DeliveryOptions extends jspb.Message {
  getTransferConfigSid(): number;
  setTransferConfigSid(value: number): void;

  clearFailureNotificationEmailsList(): void;
  getFailureNotificationEmailsList(): Array<string>;
  setFailureNotificationEmailsList(value: Array<string>): void;
  addFailureNotificationEmails(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryOptions.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryOptions): DeliveryOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeliveryOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryOptions;
  static deserializeBinaryFromReader(message: DeliveryOptions, reader: jspb.BinaryReader): DeliveryOptions;
}

export namespace DeliveryOptions {
  export type AsObject = {
    transferConfigSid: number,
    failureNotificationEmailsList: Array<string>,
  }
}

export class CronExpression extends jspb.Message {
  getRepeatMinutes(): string;
  setRepeatMinutes(value: string): void;

  getHoursOfDay(): string;
  setHoursOfDay(value: string): void;

  getDaysOfMonth(): string;
  setDaysOfMonth(value: string): void;

  getMonthsOfYear(): string;
  setMonthsOfYear(value: string): void;

  getDayOfWeek(): string;
  setDayOfWeek(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronExpression.AsObject;
  static toObject(includeInstance: boolean, msg: CronExpression): CronExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CronExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronExpression;
  static deserializeBinaryFromReader(message: CronExpression, reader: jspb.BinaryReader): CronExpression;
}

export namespace CronExpression {
  export type AsObject = {
    repeatMinutes: string,
    hoursOfDay: string,
    daysOfMonth: string,
    monthsOfYear: string,
    dayOfWeek: string,
  }
}

export interface RepeatFrequencyMap {
  REPEAT_FREQUENCY_UNSPECIFIED: 0;
  REPEAT_FREQUENCY_ON_HOUR: 1;
  REPEAT_FREQUENCY_15_MINUTES: 2;
  REPEAT_FREQUENCY_30_MINUTES: 3;
}

export const RepeatFrequency: RepeatFrequencyMap;

export interface DayFilterTypeMap {
  DAY_FILTER_TYPE_UNSPECIFIED: 0;
  DAY_FILTER_TYPE_EVERY_DAY: 1;
  DAY_FILTER_TYPE_DAY_OF_WEEK: 2;
  DAY_FILTER_TYPE_DAY_OF_MONTH: 3;
}

export const DayFilterType: DayFilterTypeMap;

export interface ReportFormatMap {
  REPORT_FORMAT_UNSPECIFIED: 0;
  REPORT_FORMAT_CSV: 1;
}

export const ReportFormat: ReportFormatMap;

export interface TimePeriodMap {
  TIME_PERIOD_UNSPECIFIED: 0;
  TIME_PERIOD_TODAY: 1;
  TIME_PERIOD_THIS_WEEK: 2;
  TIME_PERIOD_THIS_MONTH: 3;
  TIME_PERIOD_THIS_YEAR: 4;
  TIME_PERIOD_THE_DAY_SO_FAR: 5;
  TIME_PERIOD_WEEK_TO_DATE: 6;
  TIME_PERIOD_MONTH_TO_DATE: 7;
  TIME_PERIOD_YEAR_TO_DATE: 8;
  TIME_PERIOD_YESTERDAY: 9;
  TIME_PERIOD_DAY_BEFORE_YESTERDAY: 10;
  TIME_PERIOD_THIS_DAY_LAST_WEEK: 11;
  TIME_PERIOD_PREVIOUS_WEEK: 12;
  TIME_PERIOD_PREVIOUS_MONTH: 13;
  TIME_PERIOD_PREVIOUS_YEAR: 14;
  TIME_PERIOD_LAST_15_MINUTES: 15;
  TIME_PERIOD_LAST_30_MINUTES: 16;
  TIME_PERIOD_LAST_1_HOUR: 17;
  TIME_PERIOD_LAST_2_HOURS: 18;
  TIME_PERIOD_LAST_3_HOURS: 19;
  TIME_PERIOD_LAST_4_HOURS: 20;
  TIME_PERIOD_LAST_6_HOURS: 21;
  TIME_PERIOD_LAST_12_HOURS: 22;
  TIME_PERIOD_LAST_24_HOURS: 23;
  TIME_PERIOD_LAST_2_DAYS: 24;
  TIME_PERIOD_LAST_3_DAYS: 25;
  TIME_PERIOD_LAST_7_DAYS: 26;
  TIME_PERIOD_LAST_2_WEEKS: 27;
  TIME_PERIOD_LAST_30_DAYS: 28;
  TIME_PERIOD_LAST_60_DAYS: 29;
  TIME_PERIOD_LAST_90_DAYS: 30;
  TIME_PERIOD_LAST_6_MONTHS: 31;
  TIME_PERIOD_LAST_1_YEAR: 32;
  TIME_PERIOD_LAST_2_YEARS: 33;
  TIME_PERIOD_LAST_5_YEARS: 34;
}

export const TimePeriod: TimePeriodMap;

