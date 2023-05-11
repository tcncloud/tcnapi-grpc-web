// package: api.commons
// file: api/commons/enums.proto

import * as jspb from "google-protobuf";

export class Weekday extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Weekday.AsObject;
  static toObject(includeInstance: boolean, msg: Weekday): Weekday.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Weekday, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Weekday;
  static deserializeBinaryFromReader(message: Weekday, reader: jspb.BinaryReader): Weekday;
}

export namespace Weekday {
  export type AsObject = {
  }

  export interface EnumMap {
    SUNDAY: 0;
    MONDAY: 1;
    TUESDAY: 2;
    WEDNESDAY: 3;
    THURSDAY: 4;
    FRIDAY: 5;
    SATURDAY: 6;
  }

  export const Enum: EnumMap;
}

export class CronRequestType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CronRequestType.AsObject;
  static toObject(includeInstance: boolean, msg: CronRequestType): CronRequestType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CronRequestType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CronRequestType;
  static deserializeBinaryFromReader(message: CronRequestType, reader: jspb.BinaryReader): CronRequestType;
}

export namespace CronRequestType {
  export type AsObject = {
  }

  export interface EnumMap {
    INVALID: 0;
    SFTP: 1;
  }

  export const Enum: EnumMap;
}

export interface MonthMap {
  MONTH_JANUARY: 0;
  MONTH_FEBRUARY: 1;
  MONTH_MARCH: 2;
  MONTH_APRIL: 3;
  MONTH_MAY: 4;
  MONTH_JUNE: 5;
  MONTH_JULY: 6;
  MONTH_AUGUST: 7;
  MONTH_SEPTEMBER: 8;
  MONTH_OCTOBER: 9;
  MONTH_NOVEMBER: 10;
  MONTH_DECEMBER: 11;
}

export const Month: MonthMap;

