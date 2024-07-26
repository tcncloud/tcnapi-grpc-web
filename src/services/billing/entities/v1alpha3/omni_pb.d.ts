// package: services.billing.entities.v1alpha3
// file: services/billing/entities/v1alpha3/omni.proto

import * as jspb from "google-protobuf";
import * as services_billing_entities_v1alpha3_matching_pb from "../../../../services/billing/entities/v1alpha3/matching_pb";
import * as services_billing_entities_v1alpha3_modules_pb from "../../../../services/billing/entities/v1alpha3/modules_pb";

export class OmniSmsConfig extends jspb.Message {
  hasPrefixes(): boolean;
  clearPrefixes(): void;
  getPrefixes(): services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix | undefined;
  setPrefixes(value?: services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setConfig(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  getName(): string;
  setName(value: string): void;

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
    prefixes?: services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix.AsObject,
    config?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    name: string,
  }
}

export class OmniSmsUnitConfig extends jspb.Message {
  hasPrefixes(): boolean;
  clearPrefixes(): void;
  getPrefixes(): services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix | undefined;
  setPrefixes(value?: services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig | undefined;
  setConfig(value?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig): void;

  getName(): string;
  setName(value: string): void;

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
    prefixes?: services_billing_entities_v1alpha3_matching_pb.CountryCodePrefix.AsObject,
    config?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.AsObject,
    name: string,
  }
}

