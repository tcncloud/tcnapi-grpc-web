// package: services.billing.entities.v1alpha3
// file: services/billing/entities/v1alpha3/omni.proto

import * as jspb from "google-protobuf";
import * as services_billing_entities_v1alpha3_modules_pb from "../../../../services/billing/entities/v1alpha3/modules_pb";

export class OmniChatConfig extends jspb.Message {
  hasInitialMessageUnit(): boolean;
  clearInitialMessageUnit(): void;
  getInitialMessageUnit(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setInitialMessageUnit(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasMessageUnits(): boolean;
  clearMessageUnits(): void;
  getMessageUnits(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setMessageUnits(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasAttachment(): boolean;
  clearAttachment(): void;
  getAttachment(): services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig | undefined;
  setAttachment(value?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig): void;

  hasAccumulatedAttachments(): boolean;
  clearAccumulatedAttachments(): void;
  getAccumulatedAttachments(): services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig | undefined;
  setAccumulatedAttachments(value?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniChatConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniChatConfig): OmniChatConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniChatConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniChatConfig;
  static deserializeBinaryFromReader(message: OmniChatConfig, reader: jspb.BinaryReader): OmniChatConfig;
}

export namespace OmniChatConfig {
  export type AsObject = {
    initialMessageUnit?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    messageUnits?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    attachment?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.AsObject,
    accumulatedAttachments?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.AsObject,
  }
}

export class OmniEmailConfig extends jspb.Message {
  hasInitialMessageUnit(): boolean;
  clearInitialMessageUnit(): void;
  getInitialMessageUnit(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setInitialMessageUnit(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasMessageUnits(): boolean;
  clearMessageUnits(): void;
  getMessageUnits(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setMessageUnits(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasSize(): boolean;
  clearSize(): void;
  getSize(): services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig | undefined;
  setSize(value?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig): void;

  hasAccumulatedSize(): boolean;
  clearAccumulatedSize(): void;
  getAccumulatedSize(): services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig | undefined;
  setAccumulatedSize(value?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OmniEmailConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OmniEmailConfig): OmniEmailConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OmniEmailConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OmniEmailConfig;
  static deserializeBinaryFromReader(message: OmniEmailConfig, reader: jspb.BinaryReader): OmniEmailConfig;
}

export namespace OmniEmailConfig {
  export type AsObject = {
    initialMessageUnit?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    messageUnits?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    size?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.AsObject,
    accumulatedSize?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.AsObject,
  }
}

export class OmniSmsConfig extends jspb.Message {
  hasInitialMessageUnit(): boolean;
  clearInitialMessageUnit(): void;
  getInitialMessageUnit(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setInitialMessageUnit(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasMessageUnits(): boolean;
  clearMessageUnits(): void;
  getMessageUnits(): services_billing_entities_v1alpha3_modules_pb.BasicConfig | undefined;
  setMessageUnits(value?: services_billing_entities_v1alpha3_modules_pb.BasicConfig): void;

  hasAttachment(): boolean;
  clearAttachment(): void;
  getAttachment(): services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig | undefined;
  setAttachment(value?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig): void;

  hasAccumulatedAttachments(): boolean;
  clearAccumulatedAttachments(): void;
  getAccumulatedAttachments(): services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig | undefined;
  setAccumulatedAttachments(value?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig): void;

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
    initialMessageUnit?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    messageUnits?: services_billing_entities_v1alpha3_modules_pb.BasicConfig.AsObject,
    attachment?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.AsObject,
    accumulatedAttachments?: services_billing_entities_v1alpha3_modules_pb.BasicUnitConfig.AsObject,
  }
}

