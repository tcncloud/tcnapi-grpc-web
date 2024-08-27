// package: services.org.users.v1alpha1
// file: services/org/users/v1alpha1/preferences.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class UserLocalePreferencesOverride extends jspb.Message {
  hasDisplayLanguageOverride(): boolean;
  clearDisplayLanguageOverride(): void;
  getDisplayLanguageOverride(): UserLocalePreferencesOverride.DisplayLanguageOverride | undefined;
  setDisplayLanguageOverride(value?: UserLocalePreferencesOverride.DisplayLanguageOverride): void;

  getLanguageDirectionOverride(): UserLocalePreferencesOverride.LanguageDirectionOverrideMap[keyof UserLocalePreferencesOverride.LanguageDirectionOverrideMap];
  setLanguageDirectionOverride(value: UserLocalePreferencesOverride.LanguageDirectionOverrideMap[keyof UserLocalePreferencesOverride.LanguageDirectionOverrideMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLocalePreferencesOverride.AsObject;
  static toObject(includeInstance: boolean, msg: UserLocalePreferencesOverride): UserLocalePreferencesOverride.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserLocalePreferencesOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLocalePreferencesOverride;
  static deserializeBinaryFromReader(message: UserLocalePreferencesOverride, reader: jspb.BinaryReader): UserLocalePreferencesOverride;
}

export namespace UserLocalePreferencesOverride {
  export type AsObject = {
    displayLanguageOverride?: UserLocalePreferencesOverride.DisplayLanguageOverride.AsObject,
    languageDirectionOverride: UserLocalePreferencesOverride.LanguageDirectionOverrideMap[keyof UserLocalePreferencesOverride.LanguageDirectionOverrideMap],
  }

  export class DisplayLanguageOverride extends jspb.Message {
    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisplayLanguageOverride.AsObject;
    static toObject(includeInstance: boolean, msg: DisplayLanguageOverride): DisplayLanguageOverride.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisplayLanguageOverride, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisplayLanguageOverride;
    static deserializeBinaryFromReader(message: DisplayLanguageOverride, reader: jspb.BinaryReader): DisplayLanguageOverride;
  }

  export namespace DisplayLanguageOverride {
    export type AsObject = {
      value: string,
    }
  }

  export interface LanguageDirectionOverrideMap {
    LANGUAGE_DIRECTION_UNSPECIFIED: 0;
    LANGUAGE_DIRECTION_DEFAULT: 1;
    LANGUAGE_DIRECTION_LEFT_TO_RIGHT: 2;
    LANGUAGE_DIRECTION_RIGHT_TO_LEFT: 3;
  }

  export const LanguageDirectionOverride: LanguageDirectionOverrideMap;
}

export class GetUserLocalePreferencesOverrideRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLocalePreferencesOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLocalePreferencesOverrideRequest): GetUserLocalePreferencesOverrideRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLocalePreferencesOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLocalePreferencesOverrideRequest;
  static deserializeBinaryFromReader(message: GetUserLocalePreferencesOverrideRequest, reader: jspb.BinaryReader): GetUserLocalePreferencesOverrideRequest;
}

export namespace GetUserLocalePreferencesOverrideRequest {
  export type AsObject = {
    userId: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetUserLocalePreferencesOverrideResponse extends jspb.Message {
  hasLocalePreferencesOverride(): boolean;
  clearLocalePreferencesOverride(): void;
  getLocalePreferencesOverride(): UserLocalePreferencesOverride | undefined;
  setLocalePreferencesOverride(value?: UserLocalePreferencesOverride): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLocalePreferencesOverrideResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLocalePreferencesOverrideResponse): GetUserLocalePreferencesOverrideResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLocalePreferencesOverrideResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLocalePreferencesOverrideResponse;
  static deserializeBinaryFromReader(message: GetUserLocalePreferencesOverrideResponse, reader: jspb.BinaryReader): GetUserLocalePreferencesOverrideResponse;
}

export namespace GetUserLocalePreferencesOverrideResponse {
  export type AsObject = {
    localePreferencesOverride?: UserLocalePreferencesOverride.AsObject,
  }
}

export class UpdateUserLocalePreferencesOverrideRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  hasLocalePreferencesOverride(): boolean;
  clearLocalePreferencesOverride(): void;
  getLocalePreferencesOverride(): UserLocalePreferencesOverride | undefined;
  setLocalePreferencesOverride(value?: UserLocalePreferencesOverride): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserLocalePreferencesOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserLocalePreferencesOverrideRequest): UpdateUserLocalePreferencesOverrideRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserLocalePreferencesOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserLocalePreferencesOverrideRequest;
  static deserializeBinaryFromReader(message: UpdateUserLocalePreferencesOverrideRequest, reader: jspb.BinaryReader): UpdateUserLocalePreferencesOverrideRequest;
}

export namespace UpdateUserLocalePreferencesOverrideRequest {
  export type AsObject = {
    userId: string,
    localePreferencesOverride?: UserLocalePreferencesOverride.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateUserLocalePreferencesOverrideResponse extends jspb.Message {
  hasLocalePreferencesOverride(): boolean;
  clearLocalePreferencesOverride(): void;
  getLocalePreferencesOverride(): UserLocalePreferencesOverride | undefined;
  setLocalePreferencesOverride(value?: UserLocalePreferencesOverride): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserLocalePreferencesOverrideResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserLocalePreferencesOverrideResponse): UpdateUserLocalePreferencesOverrideResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserLocalePreferencesOverrideResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserLocalePreferencesOverrideResponse;
  static deserializeBinaryFromReader(message: UpdateUserLocalePreferencesOverrideResponse, reader: jspb.BinaryReader): UpdateUserLocalePreferencesOverrideResponse;
}

export namespace UpdateUserLocalePreferencesOverrideResponse {
  export type AsObject = {
    localePreferencesOverride?: UserLocalePreferencesOverride.AsObject,
  }
}

export class GetMyUserLocalePreferencesOverrideRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserLocalePreferencesOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserLocalePreferencesOverrideRequest): GetMyUserLocalePreferencesOverrideRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserLocalePreferencesOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserLocalePreferencesOverrideRequest;
  static deserializeBinaryFromReader(message: GetMyUserLocalePreferencesOverrideRequest, reader: jspb.BinaryReader): GetMyUserLocalePreferencesOverrideRequest;
}

export namespace GetMyUserLocalePreferencesOverrideRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetMyUserLocalePreferencesOverrideResponse extends jspb.Message {
  hasLocalePreferencesOverride(): boolean;
  clearLocalePreferencesOverride(): void;
  getLocalePreferencesOverride(): UserLocalePreferencesOverride | undefined;
  setLocalePreferencesOverride(value?: UserLocalePreferencesOverride): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserLocalePreferencesOverrideResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserLocalePreferencesOverrideResponse): GetMyUserLocalePreferencesOverrideResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserLocalePreferencesOverrideResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserLocalePreferencesOverrideResponse;
  static deserializeBinaryFromReader(message: GetMyUserLocalePreferencesOverrideResponse, reader: jspb.BinaryReader): GetMyUserLocalePreferencesOverrideResponse;
}

export namespace GetMyUserLocalePreferencesOverrideResponse {
  export type AsObject = {
    localePreferencesOverride?: UserLocalePreferencesOverride.AsObject,
  }
}

export class UpdateMyUserLocalePreferencesOverrideRequest extends jspb.Message {
  hasLocalePreferencesOverride(): boolean;
  clearLocalePreferencesOverride(): void;
  getLocalePreferencesOverride(): UserLocalePreferencesOverride | undefined;
  setLocalePreferencesOverride(value?: UserLocalePreferencesOverride): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyUserLocalePreferencesOverrideRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyUserLocalePreferencesOverrideRequest): UpdateMyUserLocalePreferencesOverrideRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyUserLocalePreferencesOverrideRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyUserLocalePreferencesOverrideRequest;
  static deserializeBinaryFromReader(message: UpdateMyUserLocalePreferencesOverrideRequest, reader: jspb.BinaryReader): UpdateMyUserLocalePreferencesOverrideRequest;
}

export namespace UpdateMyUserLocalePreferencesOverrideRequest {
  export type AsObject = {
    localePreferencesOverride?: UserLocalePreferencesOverride.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateMyUserLocalePreferencesOverrideResponse extends jspb.Message {
  hasLocalePreferencesOverride(): boolean;
  clearLocalePreferencesOverride(): void;
  getLocalePreferencesOverride(): UserLocalePreferencesOverride | undefined;
  setLocalePreferencesOverride(value?: UserLocalePreferencesOverride): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyUserLocalePreferencesOverrideResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyUserLocalePreferencesOverrideResponse): UpdateMyUserLocalePreferencesOverrideResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyUserLocalePreferencesOverrideResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyUserLocalePreferencesOverrideResponse;
  static deserializeBinaryFromReader(message: UpdateMyUserLocalePreferencesOverrideResponse, reader: jspb.BinaryReader): UpdateMyUserLocalePreferencesOverrideResponse;
}

export namespace UpdateMyUserLocalePreferencesOverrideResponse {
  export type AsObject = {
    localePreferencesOverride?: UserLocalePreferencesOverride.AsObject,
  }
}

