// package: api.commons
// file: api/commons/broadcasts.proto

import * as jspb from "google-protobuf";

export class TemplateType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateType.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateType): TemplateType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateType;
  static deserializeBinaryFromReader(message: TemplateType, reader: jspb.BinaryReader): TemplateType;
}

export namespace TemplateType {
  export type AsObject = {
  }

  export interface EnumMap {
    UNKNOWN: 0;
    STANDARD: 1;
    LAYERED: 2;
    INBOUND: 3;
    MAC_ONLY: 4;
    PREVIEW_ONLY: 5;
    RINGLESS_VOICEMAIL: 6;
  }

  export const Enum: EnumMap;
}

export interface BroadcastTypeMap {
  TYPE_UNKNOWN: 0;
  TYPE_OUTBOUND: 1000;
  TYPE_OUTBOUND_PREVIEW_ONLY: 1100;
  TYPE_OUTBOUND_MAC_ONLY: 1200;
  TYPE_OUTBOUND_RINGLESS_VOICEMAIL: 1300;
  TYPE_INBOUND: 2000;
  TYPE_MANUAL: 3000;
  TYPE_SMS: 4000;
  TYPE_EMAIL: 5000;
  TYPE_OUTBOUND_INBOUND: 7000;
  TYPE_OUTBOUND_MANUAL: 8000;
  TYPE_INBOUND_MANUAL: 9000;
  TYPE_OUTBOUND_INBOUND_MANUAL: 10000;
}

export const BroadcastType: BroadcastTypeMap;

