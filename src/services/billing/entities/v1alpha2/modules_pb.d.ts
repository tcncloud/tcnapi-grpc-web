// package: services.billing.entities.v1alpha2
// file: services/billing/entities/v1alpha2/modules.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_decimal_pb from "../../../../google/type/decimal_pb";

export class BasicConfig extends jspb.Message {
  getRate(): number;
  setRate(value: number): void;

  hasRateDecimal(): boolean;
  clearRateDecimal(): void;
  getRateDecimal(): google_type_decimal_pb.Decimal | undefined;
  setRateDecimal(value?: google_type_decimal_pb.Decimal): void;

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
    rateDecimal?: google_type_decimal_pb.Decimal.AsObject,
  }
}

export class BasicUnitConfig extends jspb.Message {
  getUnitSize(): number;
  setUnitSize(value: number): void;

  getRate(): number;
  setRate(value: number): void;

  hasMinUnits(): boolean;
  clearMinUnits(): void;
  getMinUnits(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinUnits(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMaxUnits(): boolean;
  clearMaxUnits(): void;
  getMaxUnits(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxUnits(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMinUnitsPerCycle(): boolean;
  clearMinUnitsPerCycle(): void;
  getMinUnitsPerCycle(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinUnitsPerCycle(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMaxUnitsPerCycle(): boolean;
  clearMaxUnitsPerCycle(): void;
  getMaxUnitsPerCycle(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxUnitsPerCycle(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasRateDecimal(): boolean;
  clearRateDecimal(): void;
  getRateDecimal(): google_type_decimal_pb.Decimal | undefined;
  setRateDecimal(value?: google_type_decimal_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicUnitConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BasicUnitConfig): BasicUnitConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicUnitConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicUnitConfig;
  static deserializeBinaryFromReader(message: BasicUnitConfig, reader: jspb.BinaryReader): BasicUnitConfig;
}

export namespace BasicUnitConfig {
  export type AsObject = {
    unitSize: number,
    rate: number,
    minUnits?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxUnits?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    minUnitsPerCycle?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxUnitsPerCycle?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    rateDecimal?: google_type_decimal_pb.Decimal.AsObject,
  }
}

