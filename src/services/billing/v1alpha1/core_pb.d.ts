// package: services.billing.v1alpha1
// file: services/billing/v1alpha1/core.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class OrderBy extends jspb.Message {
  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  getDirection(): OrderByDirectionMap[keyof OrderByDirectionMap];
  setDirection(value: OrderByDirectionMap[keyof OrderByDirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBy.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBy): OrderBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBy;
  static deserializeBinaryFromReader(message: OrderBy, reader: jspb.BinaryReader): OrderBy;
}

export namespace OrderBy {
  export type AsObject = {
    fieldsList: Array<string>,
    direction: OrderByDirectionMap[keyof OrderByDirectionMap],
  }
}

export class TimeSelector extends jspb.Message {
  getFieldName(): string;
  setFieldName(value: string): void;

  getOp(): TimeSelectorOpMap[keyof TimeSelectorOpMap];
  setOp(value: TimeSelectorOpMap[keyof TimeSelectorOpMap]): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValue(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSelector.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSelector): TimeSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSelector;
  static deserializeBinaryFromReader(message: TimeSelector, reader: jspb.BinaryReader): TimeSelector;
}

export namespace TimeSelector {
  export type AsObject = {
    fieldName: string,
    op: TimeSelectorOpMap[keyof TimeSelectorOpMap],
    value?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface OrderByDirectionMap {
  ORDER_BY_DIRECTION_UNSPECIFIED: 0;
  ORDER_BY_DIRECTION_ASC: 1;
  ORDER_BY_DIRECTION_DESC: 2;
}

export const OrderByDirection: OrderByDirectionMap;

export interface TimeSelectorOpMap {
  TIME_SELECTOR_OP_UNSPECIFIED: 0;
  TIME_SELECTOR_OP_EQ: 1;
  TIME_SELECTOR_OP_GT: 2;
  TIME_SELECTOR_OP_GE: 3;
  TIME_SELECTOR_OP_LT: 4;
  TIME_SELECTOR_OP_LE: 5;
}

export const TimeSelectorOp: TimeSelectorOpMap;

