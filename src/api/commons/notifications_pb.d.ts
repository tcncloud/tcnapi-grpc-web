// package: api.commons
// file: api/commons/notifications.proto

import * as jspb from "google-protobuf";

export class FieldValueFilter extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldValueFilter.AsObject;
  static toObject(includeInstance: boolean, msg: FieldValueFilter): FieldValueFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldValueFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldValueFilter;
  static deserializeBinaryFromReader(message: FieldValueFilter, reader: jspb.BinaryReader): FieldValueFilter;
}

export namespace FieldValueFilter {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class NotificationType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationType.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationType): NotificationType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationType;
  static deserializeBinaryFromReader(message: NotificationType, reader: jspb.BinaryReader): NotificationType;
}

export namespace NotificationType {
  export type AsObject = {
  }

  export interface EnumMap {
    INVALID: 0;
    EMAIL: 1;
    SERVER_PUSH: 2;
    IOS: 3;
    ANDROID: 4;
    SMS: 5;
  }

  export const Enum: EnumMap;
}

