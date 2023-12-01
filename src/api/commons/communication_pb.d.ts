// package: api.commons
// file: api/commons/communication.proto

import * as jspb from "google-protobuf";
import * as api_commons_acd_pb from "../../api/commons/acd_pb";

export class CommType extends jspb.Message {
  hasCallType(): boolean;
  clearCallType(): void;
  getCallType(): api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap];
  setCallType(value: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap]): void;

  hasEmailType(): boolean;
  clearEmailType(): void;
  getEmailType(): EmailType.EnumMap[keyof EmailType.EnumMap];
  setEmailType(value: EmailType.EnumMap[keyof EmailType.EnumMap]): void;

  hasSmsType(): boolean;
  clearSmsType(): void;
  getSmsType(): SmsType.EnumMap[keyof SmsType.EnumMap];
  setSmsType(value: SmsType.EnumMap[keyof SmsType.EnumMap]): void;

  hasWhatsappType(): boolean;
  clearWhatsappType(): void;
  getWhatsappType(): WhatsAppType.EnumMap[keyof WhatsAppType.EnumMap];
  setWhatsappType(value: WhatsAppType.EnumMap[keyof WhatsAppType.EnumMap]): void;

  getTypeCase(): CommType.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommType.AsObject;
  static toObject(includeInstance: boolean, msg: CommType): CommType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommType;
  static deserializeBinaryFromReader(message: CommType, reader: jspb.BinaryReader): CommType;
}

export namespace CommType {
  export type AsObject = {
    callType: api_commons_acd_pb.CallType.EnumMap[keyof api_commons_acd_pb.CallType.EnumMap],
    emailType: EmailType.EnumMap[keyof EmailType.EnumMap],
    smsType: SmsType.EnumMap[keyof SmsType.EnumMap],
    whatsappType: WhatsAppType.EnumMap[keyof WhatsAppType.EnumMap],
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    CALL_TYPE = 1,
    EMAIL_TYPE = 2,
    SMS_TYPE = 3,
    WHATSAPP_TYPE = 4,
  }
}

export class EmailType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailType.AsObject;
  static toObject(includeInstance: boolean, msg: EmailType): EmailType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailType;
  static deserializeBinaryFromReader(message: EmailType, reader: jspb.BinaryReader): EmailType;
}

export namespace EmailType {
  export type AsObject = {
  }

  export interface EnumMap {
    OUTBOUND: 0;
  }

  export const Enum: EnumMap;
}

export class SmsType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmsType.AsObject;
  static toObject(includeInstance: boolean, msg: SmsType): SmsType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmsType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmsType;
  static deserializeBinaryFromReader(message: SmsType, reader: jspb.BinaryReader): SmsType;
}

export namespace SmsType {
  export type AsObject = {
  }

  export interface EnumMap {
    OUTBOUND: 0;
  }

  export const Enum: EnumMap;
}

export class WhatsAppType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WhatsAppType.AsObject;
  static toObject(includeInstance: boolean, msg: WhatsAppType): WhatsAppType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WhatsAppType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WhatsAppType;
  static deserializeBinaryFromReader(message: WhatsAppType, reader: jspb.BinaryReader): WhatsAppType;
}

export namespace WhatsAppType {
  export type AsObject = {
  }

  export interface EnumMap {
    OUTBOUND: 0;
  }

  export const Enum: EnumMap;
}

