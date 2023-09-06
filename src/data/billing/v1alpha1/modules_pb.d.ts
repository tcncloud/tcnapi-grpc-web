// package: data.billing.v1alpha1
// file: data/billing/v1alpha1/modules.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class BasicConfig extends jspb.Message {
  getRate(): number;
  setRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BasicConfig): BasicConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicConfig;
  static deserializeBinaryFromReader(message: BasicConfig, reader: jspb.BinaryReader): BasicConfig;
}

export namespace BasicConfig {
  export type AsObject = {
    rate: number,
  }
}

export class BasicAmountConfig extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  getRate(): number;
  setRate(value: number): void;

  hasMinIncrement(): boolean;
  clearMinIncrement(): void;
  getMinIncrement(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinIncrement(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMaxIncrement(): boolean;
  clearMaxIncrement(): void;
  getMaxIncrement(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxIncrement(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicAmountConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BasicAmountConfig): BasicAmountConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicAmountConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicAmountConfig;
  static deserializeBinaryFromReader(message: BasicAmountConfig, reader: jspb.BinaryReader): BasicAmountConfig;
}

export namespace BasicAmountConfig {
  export type AsObject = {
    amount: number,
    rate: number,
    minIncrement?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxIncrement?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

