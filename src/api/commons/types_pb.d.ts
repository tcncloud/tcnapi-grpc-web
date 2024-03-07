// package: api.commons
// file: api/commons/types.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
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

export class Int32Nullable extends jspb.Message {
  getIsNull(): boolean;
  setIsNull(value: boolean): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Nullable.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Nullable): Int32Nullable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32Nullable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Nullable;
  static deserializeBinaryFromReader(message: Int32Nullable, reader: jspb.BinaryReader): Int32Nullable;
}

export namespace Int32Nullable {
  export type AsObject = {
    isNull: boolean,
    value: number,
  }
}

export class Int64Nullable extends jspb.Message {
  getIsNull(): boolean;
  setIsNull(value: boolean): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int64Nullable.AsObject;
  static toObject(includeInstance: boolean, msg: Int64Nullable): Int64Nullable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int64Nullable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int64Nullable;
  static deserializeBinaryFromReader(message: Int64Nullable, reader: jspb.BinaryReader): Int64Nullable;
}

export namespace Int64Nullable {
  export type AsObject = {
    isNull: boolean,
    value: number,
  }
}

export class SomeSidAndDateCompare extends jspb.Message {
  getSomeSid(): number;
  setSomeSid(value: number): void;

  hasDateGreater(): boolean;
  clearDateGreater(): void;
  getDateGreater(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateGreater(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDateLess(): boolean;
  clearDateLess(): void;
  getDateLess(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateLess(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SomeSidAndDateCompare.AsObject;
  static toObject(includeInstance: boolean, msg: SomeSidAndDateCompare): SomeSidAndDateCompare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SomeSidAndDateCompare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SomeSidAndDateCompare;
  static deserializeBinaryFromReader(message: SomeSidAndDateCompare, reader: jspb.BinaryReader): SomeSidAndDateCompare;
}

export namespace SomeSidAndDateCompare {
  export type AsObject = {
    someSid: number,
    dateGreater?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateLess?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Int64ArraySql extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int64ArraySql.AsObject;
  static toObject(includeInstance: boolean, msg: Int64ArraySql): Int64ArraySql.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int64ArraySql, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int64ArraySql;
  static deserializeBinaryFromReader(message: Int64ArraySql, reader: jspb.BinaryReader): Int64ArraySql;
}

export namespace Int64ArraySql {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class Int32ArraySql extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): void;
  addValues(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32ArraySql.AsObject;
  static toObject(includeInstance: boolean, msg: Int32ArraySql): Int32ArraySql.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32ArraySql, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32ArraySql;
  static deserializeBinaryFromReader(message: Int32ArraySql, reader: jspb.BinaryReader): Int32ArraySql;
}

export namespace Int32ArraySql {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class StringArraySql extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringArraySql.AsObject;
  static toObject(includeInstance: boolean, msg: StringArraySql): StringArraySql.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringArraySql, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringArraySql;
  static deserializeBinaryFromReader(message: StringArraySql, reader: jspb.BinaryReader): StringArraySql;
}

export namespace StringArraySql {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class BoolArraySql extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<boolean>;
  setValuesList(value: Array<boolean>): void;
  addValues(value: boolean, index?: number): boolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolArraySql.AsObject;
  static toObject(includeInstance: boolean, msg: BoolArraySql): BoolArraySql.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoolArraySql, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolArraySql;
  static deserializeBinaryFromReader(message: BoolArraySql, reader: jspb.BinaryReader): BoolArraySql;
}

export namespace BoolArraySql {
  export type AsObject = {
    valuesList: Array<boolean>,
  }
}

export class Int32ValueArraySql extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<google_protobuf_wrappers_pb.Int32Value>;
  setValuesList(value: Array<google_protobuf_wrappers_pb.Int32Value>): void;
  addValues(value?: google_protobuf_wrappers_pb.Int32Value, index?: number): google_protobuf_wrappers_pb.Int32Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32ValueArraySql.AsObject;
  static toObject(includeInstance: boolean, msg: Int32ValueArraySql): Int32ValueArraySql.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32ValueArraySql, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32ValueArraySql;
  static deserializeBinaryFromReader(message: Int32ValueArraySql, reader: jspb.BinaryReader): Int32ValueArraySql;
}

export namespace Int32ValueArraySql {
  export type AsObject = {
    valuesList: Array<google_protobuf_wrappers_pb.Int32Value.AsObject>,
  }
}

export class Int64Id extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int64Id.AsObject;
  static toObject(includeInstance: boolean, msg: Int64Id): Int64Id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int64Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int64Id;
  static deserializeBinaryFromReader(message: Int64Id, reader: jspb.BinaryReader): Int64Id;
}

export namespace Int64Id {
  export type AsObject = {
    value: string,
  }
}

