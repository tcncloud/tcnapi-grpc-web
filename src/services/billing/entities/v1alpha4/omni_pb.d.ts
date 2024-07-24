// package: services.billing.entities.v1alpha4
// file: services/billing/entities/v1alpha4/omni.proto

import * as jspb from "google-protobuf";
import * as services_billing_entities_v1alpha4_matching_pb from "../../../../services/billing/entities/v1alpha4/matching_pb";
import * as services_billing_entities_v1alpha4_modules_pb from "../../../../services/billing/entities/v1alpha4/modules_pb";

export class OmniSmsConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasPrefixes(): boolean;
  clearPrefixes(): void;
  getPrefixes(): services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix | undefined;
  setPrefixes(value?: services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): services_billing_entities_v1alpha4_modules_pb.BasicConfig | undefined;
  setConfig(value?: services_billing_entities_v1alpha4_modules_pb.BasicConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniSmsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniSmsConfig): OmniSmsConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniSmsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniSmsConfig;
  static deserializeBinaryFromReader(message: OmniSmsConfig, reader: jspb.BinaryReader): OmniSmsConfig;
}

export namespace OmniSmsConfig {
  export type AsObject = {
    name: string,
    prefixes?: services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.AsObject,
    config?: services_billing_entities_v1alpha4_modules_pb.BasicConfig.AsObject,
  }
}

export class OmniSmsUnitConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasPrefixes(): boolean;
  clearPrefixes(): void;
  getPrefixes(): services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix | undefined;
  setPrefixes(value?: services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig | undefined;
  setConfig(value?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniSmsUnitConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniSmsUnitConfig): OmniSmsUnitConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniSmsUnitConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniSmsUnitConfig;
  static deserializeBinaryFromReader(message: OmniSmsUnitConfig, reader: jspb.BinaryReader): OmniSmsUnitConfig;
}

export namespace OmniSmsUnitConfig {
  export type AsObject = {
    name: string,
    prefixes?: services_billing_entities_v1alpha4_matching_pb.CountryCodePrefix.AsObject,
    config?: services_billing_entities_v1alpha4_modules_pb.BasicUnitConfig.AsObject,
  }
}

