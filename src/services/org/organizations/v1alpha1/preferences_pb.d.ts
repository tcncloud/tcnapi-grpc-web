// package: services.org.organizations.v1alpha1
// file: services/org/organizations/v1alpha1/preferences.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class OrganizationLocalePreferences extends jspb.Message {
  getDisplayLanguage(): string;
  setDisplayLanguage(value: string): void;

  getLanguageDirection(): OrganizationLocalePreferences.LanguageDirectionMap[keyof OrganizationLocalePreferences.LanguageDirectionMap];
  setLanguageDirection(value: OrganizationLocalePreferences.LanguageDirectionMap[keyof OrganizationLocalePreferences.LanguageDirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationLocalePreferences.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationLocalePreferences): OrganizationLocalePreferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationLocalePreferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationLocalePreferences;
  static deserializeBinaryFromReader(message: OrganizationLocalePreferences, reader: jspb.BinaryReader): OrganizationLocalePreferences;
}

export namespace OrganizationLocalePreferences {
  export type AsObject = {
    displayLanguage: string,
    languageDirection: OrganizationLocalePreferences.LanguageDirectionMap[keyof OrganizationLocalePreferences.LanguageDirectionMap],
  }

  export interface LanguageDirectionMap {
    LANGUAGE_DIRECTION_UNSPECIFIED: 0;
    LANGUAGE_DIRECTION_DEFAULT: 1;
    LANGUAGE_DIRECTION_LEFT_TO_RIGHT: 2;
    LANGUAGE_DIRECTION_RIGHT_TO_LEFT: 3;
  }

  export const LanguageDirection: LanguageDirectionMap;
}

export class GetOrganizationLocalePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationLocalePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationLocalePreferencesRequest): GetOrganizationLocalePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationLocalePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationLocalePreferencesRequest;
  static deserializeBinaryFromReader(message: GetOrganizationLocalePreferencesRequest, reader: jspb.BinaryReader): GetOrganizationLocalePreferencesRequest;
}

export namespace GetOrganizationLocalePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetOrganizationLocalePreferencesResponse extends jspb.Message {
  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): OrganizationLocalePreferences | undefined;
  setLocalePreferences(value?: OrganizationLocalePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationLocalePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationLocalePreferencesResponse): GetOrganizationLocalePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationLocalePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationLocalePreferencesResponse;
  static deserializeBinaryFromReader(message: GetOrganizationLocalePreferencesResponse, reader: jspb.BinaryReader): GetOrganizationLocalePreferencesResponse;
}

export namespace GetOrganizationLocalePreferencesResponse {
  export type AsObject = {
    localePreferences?: OrganizationLocalePreferences.AsObject,
  }
}

export class UpdateOrganizationLocalePreferencesRequest extends jspb.Message {
  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): OrganizationLocalePreferences | undefined;
  setLocalePreferences(value?: OrganizationLocalePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationLocalePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationLocalePreferencesRequest): UpdateOrganizationLocalePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationLocalePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationLocalePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationLocalePreferencesRequest, reader: jspb.BinaryReader): UpdateOrganizationLocalePreferencesRequest;
}

export namespace UpdateOrganizationLocalePreferencesRequest {
  export type AsObject = {
    localePreferences?: OrganizationLocalePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateOrganizationLocalePreferencesResponse extends jspb.Message {
  hasLocalePreferences(): boolean;
  clearLocalePreferences(): void;
  getLocalePreferences(): OrganizationLocalePreferences | undefined;
  setLocalePreferences(value?: OrganizationLocalePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationLocalePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationLocalePreferencesResponse): UpdateOrganizationLocalePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationLocalePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationLocalePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationLocalePreferencesResponse, reader: jspb.BinaryReader): UpdateOrganizationLocalePreferencesResponse;
}

export namespace UpdateOrganizationLocalePreferencesResponse {
  export type AsObject = {
    localePreferences?: OrganizationLocalePreferences.AsObject,
  }
}

