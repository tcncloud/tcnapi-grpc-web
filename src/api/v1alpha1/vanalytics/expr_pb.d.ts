// package: api.v1alpha1.vanalytics
// file: api/v1alpha1/vanalytics/expr.proto

import * as jspb from "google-protobuf";
import * as api_commons_vanalytics_pb from "../../../api/commons/vanalytics_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Uint32Expr extends jspb.Message {
  hasGt(): boolean;
  clearGt(): void;
  getGt(): number;
  setGt(value: number): void;

  hasGte(): boolean;
  clearGte(): void;
  getGte(): number;
  setGte(value: number): void;

  hasLt(): boolean;
  clearLt(): void;
  getLt(): number;
  setLt(value: number): void;

  hasLte(): boolean;
  clearLte(): void;
  getLte(): number;
  setLte(value: number): void;

  hasEq(): boolean;
  clearEq(): void;
  getEq(): number;
  setEq(value: number): void;

  hasNotEq(): boolean;
  clearNotEq(): void;
  getNotEq(): number;
  setNotEq(value: number): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): Uint32Range | undefined;
  setRange(value?: Uint32Range): void;

  getWhereCase(): Uint32Expr.WhereCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uint32Expr.AsObject;
  static toObject(includeInstance: boolean, msg: Uint32Expr): Uint32Expr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uint32Expr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uint32Expr;
  static deserializeBinaryFromReader(message: Uint32Expr, reader: jspb.BinaryReader): Uint32Expr;
}

export namespace Uint32Expr {
  export type AsObject = {
    gt: number,
    gte: number,
    lt: number,
    lte: number,
    eq: number,
    notEq: number,
    range?: Uint32Range.AsObject,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    GT = 1,
    GTE = 2,
    LT = 3,
    LTE = 4,
    EQ = 5,
    NOT_EQ = 6,
    RANGE = 7,
  }
}

export class Uint32Range extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): void;

  getTo(): number;
  setTo(value: number): void;

  getIncludeFrom(): boolean;
  setIncludeFrom(value: boolean): void;

  getIncludeTo(): boolean;
  setIncludeTo(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uint32Range.AsObject;
  static toObject(includeInstance: boolean, msg: Uint32Range): Uint32Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uint32Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uint32Range;
  static deserializeBinaryFromReader(message: Uint32Range, reader: jspb.BinaryReader): Uint32Range;
}

export namespace Uint32Range {
  export type AsObject = {
    from: number,
    to: number,
    includeFrom: boolean,
    includeTo: boolean,
  }
}

export class TimestampExpr extends jspb.Message {
  hasRange(): boolean;
  clearRange(): void;
  getRange(): TimestampRange | undefined;
  setRange(value?: TimestampRange): void;

  hasMoment(): boolean;
  clearMoment(): void;
  getMoment(): Moment | undefined;
  setMoment(value?: Moment): void;

  getWhereCase(): TimestampExpr.WhereCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampExpr.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampExpr): TimestampExpr.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimestampExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampExpr;
  static deserializeBinaryFromReader(message: TimestampExpr, reader: jspb.BinaryReader): TimestampExpr;
}

export namespace TimestampExpr {
  export type AsObject = {
    range?: TimestampRange.AsObject,
    moment?: Moment.AsObject,
  }

  export enum WhereCase {
    WHERE_NOT_SET = 0,
    RANGE = 1,
    MOMENT = 2,
  }
}

export class Moment extends jspb.Message {
  getTimeZone(): string;
  setTimeZone(value: string): void;

  getInterval(): api_commons_vanalytics_pb.IntervalMap[keyof api_commons_vanalytics_pb.IntervalMap];
  setInterval(value: api_commons_vanalytics_pb.IntervalMap[keyof api_commons_vanalytics_pb.IntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Moment.AsObject;
  static toObject(includeInstance: boolean, msg: Moment): Moment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Moment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Moment;
  static deserializeBinaryFromReader(message: Moment, reader: jspb.BinaryReader): Moment;
}

export namespace Moment {
  export type AsObject = {
    timeZone: string,
    interval: api_commons_vanalytics_pb.IntervalMap[keyof api_commons_vanalytics_pb.IntervalMap],
  }
}

export class TimestampRange extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIncludeFrom(): boolean;
  setIncludeFrom(value: boolean): void;

  getIncludeTo(): boolean;
  setIncludeTo(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampRange.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampRange): TimestampRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimestampRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampRange;
  static deserializeBinaryFromReader(message: TimestampRange, reader: jspb.BinaryReader): TimestampRange;
}

export namespace TimestampRange {
  export type AsObject = {
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    includeFrom: boolean,
    includeTo: boolean,
  }
}

