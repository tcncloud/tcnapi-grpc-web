// package: services.org.users.v1alpha1
// file: services/org/users/v1alpha1/preferences.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_preferences_pb from "../../../../api/commons/org_preferences_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class GetUserLocalePreferencesRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLocalePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLocalePreferencesRequest): GetUserLocalePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLocalePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLocalePreferencesRequest;
  static deserializeBinaryFromReader(message: GetUserLocalePreferencesRequest, reader: jspb.BinaryReader): GetUserLocalePreferencesRequest;
}

export namespace GetUserLocalePreferencesRequest {
  export type AsObject = {
    userId: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetUserLocalePreferencesResponse extends jspb.Message {
  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): api_commons_org_preferences_pb.LocalePreferences | undefined;
  setLocalePreferences(value?: api_commons_org_preferences_pb.LocalePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLocalePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLocalePreferencesResponse): GetUserLocalePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLocalePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLocalePreferencesResponse;
  static deserializeBinaryFromReader(message: GetUserLocalePreferencesResponse, reader: jspb.BinaryReader): GetUserLocalePreferencesResponse;
}

export namespace GetUserLocalePreferencesResponse {
  export type AsObject = {
    localePreferences?: api_commons_org_preferences_pb.LocalePreferences.AsObject,
  }
}

export class UpdateUserLocalePreferencesRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): api_commons_org_preferences_pb.LocalePreferences | undefined;
  setLocalePreferences(value?: api_commons_org_preferences_pb.LocalePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserLocalePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserLocalePreferencesRequest): UpdateUserLocalePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserLocalePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserLocalePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateUserLocalePreferencesRequest, reader: jspb.BinaryReader): UpdateUserLocalePreferencesRequest;
}

export namespace UpdateUserLocalePreferencesRequest {
  export type AsObject = {
    userId: string,
    localePreferences?: api_commons_org_preferences_pb.LocalePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateUserLocalePreferencesResponse extends jspb.Message {
  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): api_commons_org_preferences_pb.LocalePreferences | undefined;
  setLocalePreferences(value?: api_commons_org_preferences_pb.LocalePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserLocalePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserLocalePreferencesResponse): UpdateUserLocalePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserLocalePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserLocalePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateUserLocalePreferencesResponse, reader: jspb.BinaryReader): UpdateUserLocalePreferencesResponse;
}

export namespace UpdateUserLocalePreferencesResponse {
  export type AsObject = {
    localePreferences?: api_commons_org_preferences_pb.LocalePreferences.AsObject,
  }
}

export class GetMyUserLocalePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserLocalePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserLocalePreferencesRequest): GetMyUserLocalePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserLocalePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserLocalePreferencesRequest;
  static deserializeBinaryFromReader(message: GetMyUserLocalePreferencesRequest, reader: jspb.BinaryReader): GetMyUserLocalePreferencesRequest;
}

export namespace GetMyUserLocalePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetMyUserLocalePreferencesResponse extends jspb.Message {
  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): api_commons_org_preferences_pb.LocalePreferences | undefined;
  setLocalePreferences(value?: api_commons_org_preferences_pb.LocalePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserLocalePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserLocalePreferencesResponse): GetMyUserLocalePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserLocalePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserLocalePreferencesResponse;
  static deserializeBinaryFromReader(message: GetMyUserLocalePreferencesResponse, reader: jspb.BinaryReader): GetMyUserLocalePreferencesResponse;
}

export namespace GetMyUserLocalePreferencesResponse {
  export type AsObject = {
    localePreferences?: api_commons_org_preferences_pb.LocalePreferences.AsObject,
  }
}

export class UpdateMyUserLocalePreferencesRequest extends jspb.Message {
  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): api_commons_org_preferences_pb.LocalePreferences | undefined;
  setLocalePreferences(value?: api_commons_org_preferences_pb.LocalePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyUserLocalePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyUserLocalePreferencesRequest): UpdateMyUserLocalePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyUserLocalePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyUserLocalePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateMyUserLocalePreferencesRequest, reader: jspb.BinaryReader): UpdateMyUserLocalePreferencesRequest;
}

export namespace UpdateMyUserLocalePreferencesRequest {
  export type AsObject = {
    localePreferences?: api_commons_org_preferences_pb.LocalePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateMyUserLocalePreferencesResponse extends jspb.Message {
  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): api_commons_org_preferences_pb.LocalePreferences | undefined;
  setLocalePreferences(value?: api_commons_org_preferences_pb.LocalePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyUserLocalePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyUserLocalePreferencesResponse): UpdateMyUserLocalePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyUserLocalePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyUserLocalePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateMyUserLocalePreferencesResponse, reader: jspb.BinaryReader): UpdateMyUserLocalePreferencesResponse;
}

export namespace UpdateMyUserLocalePreferencesResponse {
  export type AsObject = {
    localePreferences?: api_commons_org_preferences_pb.LocalePreferences.AsObject,
  }
}

