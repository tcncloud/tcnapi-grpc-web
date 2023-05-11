// package: api.v1alpha1.org
// file: api/v1alpha1/org/preferences.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_preferences_pb from "../../../api/commons/org/preferences_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class GetOrganizationPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationPreferencesRequest): GetOrganizationPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationPreferencesRequest;
  static deserializeBinaryFromReader(message: GetOrganizationPreferencesRequest, reader: jspb.BinaryReader): GetOrganizationPreferencesRequest;
}

export namespace GetOrganizationPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetOrganizationPreferencesResponse extends jspb.Message {
  hasOrganizationPreferences(): boolean;
  clearOrganizationPreferences(): void;
  getOrganizationPreferences(): api_commons_org_preferences_pb.OrganizationPreferences | undefined;
  setOrganizationPreferences(value?: api_commons_org_preferences_pb.OrganizationPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationPreferencesResponse): GetOrganizationPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationPreferencesResponse;
  static deserializeBinaryFromReader(message: GetOrganizationPreferencesResponse, reader: jspb.BinaryReader): GetOrganizationPreferencesResponse;
}

export namespace GetOrganizationPreferencesResponse {
  export type AsObject = {
    organizationPreferences?: api_commons_org_preferences_pb.OrganizationPreferences.AsObject,
  }
}

export class UpdateOrganizationPreferencesRequest extends jspb.Message {
  hasOrganizationPreferences(): boolean;
  clearOrganizationPreferences(): void;
  getOrganizationPreferences(): api_commons_org_preferences_pb.OrganizationPreferences | undefined;
  setOrganizationPreferences(value?: api_commons_org_preferences_pb.OrganizationPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationPreferencesRequest): UpdateOrganizationPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationPreferencesRequest, reader: jspb.BinaryReader): UpdateOrganizationPreferencesRequest;
}

export namespace UpdateOrganizationPreferencesRequest {
  export type AsObject = {
    organizationPreferences?: api_commons_org_preferences_pb.OrganizationPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateOrganizationPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationPreferencesResponse): UpdateOrganizationPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationPreferencesResponse, reader: jspb.BinaryReader): UpdateOrganizationPreferencesResponse;
}

export namespace UpdateOrganizationPreferencesResponse {
  export type AsObject = {
  }
}

export class GetAgentPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentPreferencesRequest): GetAgentPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentPreferencesRequest;
  static deserializeBinaryFromReader(message: GetAgentPreferencesRequest, reader: jspb.BinaryReader): GetAgentPreferencesRequest;
}

export namespace GetAgentPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetAgentPreferencesResponse extends jspb.Message {
  hasAgentPreferences(): boolean;
  clearAgentPreferences(): void;
  getAgentPreferences(): api_commons_org_preferences_pb.AgentPreferences | undefined;
  setAgentPreferences(value?: api_commons_org_preferences_pb.AgentPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentPreferencesResponse): GetAgentPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentPreferencesResponse;
  static deserializeBinaryFromReader(message: GetAgentPreferencesResponse, reader: jspb.BinaryReader): GetAgentPreferencesResponse;
}

export namespace GetAgentPreferencesResponse {
  export type AsObject = {
    agentPreferences?: api_commons_org_preferences_pb.AgentPreferences.AsObject,
  }
}

export class UpdateAgentPreferencesRequest extends jspb.Message {
  hasAgentPreferences(): boolean;
  clearAgentPreferences(): void;
  getAgentPreferences(): api_commons_org_preferences_pb.AgentPreferences | undefined;
  setAgentPreferences(value?: api_commons_org_preferences_pb.AgentPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentPreferencesRequest): UpdateAgentPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateAgentPreferencesRequest, reader: jspb.BinaryReader): UpdateAgentPreferencesRequest;
}

export namespace UpdateAgentPreferencesRequest {
  export type AsObject = {
    agentPreferences?: api_commons_org_preferences_pb.AgentPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAgentPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentPreferencesResponse): UpdateAgentPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateAgentPreferencesResponse, reader: jspb.BinaryReader): UpdateAgentPreferencesResponse;
}

export namespace UpdateAgentPreferencesResponse {
  export type AsObject = {
  }
}

export class GetContactPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactPreferencesRequest): GetContactPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactPreferencesRequest;
  static deserializeBinaryFromReader(message: GetContactPreferencesRequest, reader: jspb.BinaryReader): GetContactPreferencesRequest;
}

export namespace GetContactPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetContactPreferencesResponse extends jspb.Message {
  hasContactPreferences(): boolean;
  clearContactPreferences(): void;
  getContactPreferences(): api_commons_org_preferences_pb.ContactPreferences | undefined;
  setContactPreferences(value?: api_commons_org_preferences_pb.ContactPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContactPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContactPreferencesResponse): GetContactPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetContactPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContactPreferencesResponse;
  static deserializeBinaryFromReader(message: GetContactPreferencesResponse, reader: jspb.BinaryReader): GetContactPreferencesResponse;
}

export namespace GetContactPreferencesResponse {
  export type AsObject = {
    contactPreferences?: api_commons_org_preferences_pb.ContactPreferences.AsObject,
  }
}

export class UpdateContactPreferencesRequest extends jspb.Message {
  hasContactPreferences(): boolean;
  clearContactPreferences(): void;
  getContactPreferences(): api_commons_org_preferences_pb.ContactPreferences | undefined;
  setContactPreferences(value?: api_commons_org_preferences_pb.ContactPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContactPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContactPreferencesRequest): UpdateContactPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContactPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContactPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateContactPreferencesRequest, reader: jspb.BinaryReader): UpdateContactPreferencesRequest;
}

export namespace UpdateContactPreferencesRequest {
  export type AsObject = {
    contactPreferences?: api_commons_org_preferences_pb.ContactPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateContactPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContactPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContactPreferencesResponse): UpdateContactPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateContactPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContactPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateContactPreferencesResponse, reader: jspb.BinaryReader): UpdateContactPreferencesResponse;
}

export namespace UpdateContactPreferencesResponse {
  export type AsObject = {
  }
}

export class GetAuthenticationPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthenticationPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthenticationPreferencesRequest): GetAuthenticationPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthenticationPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthenticationPreferencesRequest;
  static deserializeBinaryFromReader(message: GetAuthenticationPreferencesRequest, reader: jspb.BinaryReader): GetAuthenticationPreferencesRequest;
}

export namespace GetAuthenticationPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetAuthenticationPreferencesResponse extends jspb.Message {
  hasAuthenticationPreferences(): boolean;
  clearAuthenticationPreferences(): void;
  getAuthenticationPreferences(): api_commons_org_preferences_pb.AuthenticationPreferences | undefined;
  setAuthenticationPreferences(value?: api_commons_org_preferences_pb.AuthenticationPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthenticationPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthenticationPreferencesResponse): GetAuthenticationPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthenticationPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthenticationPreferencesResponse;
  static deserializeBinaryFromReader(message: GetAuthenticationPreferencesResponse, reader: jspb.BinaryReader): GetAuthenticationPreferencesResponse;
}

export namespace GetAuthenticationPreferencesResponse {
  export type AsObject = {
    authenticationPreferences?: api_commons_org_preferences_pb.AuthenticationPreferences.AsObject,
  }
}

export class UpdateAuthenticationPreferencesRequest extends jspb.Message {
  hasAuthenticationPreferences(): boolean;
  clearAuthenticationPreferences(): void;
  getAuthenticationPreferences(): api_commons_org_preferences_pb.AuthenticationPreferences | undefined;
  setAuthenticationPreferences(value?: api_commons_org_preferences_pb.AuthenticationPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthenticationPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthenticationPreferencesRequest): UpdateAuthenticationPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthenticationPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthenticationPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateAuthenticationPreferencesRequest, reader: jspb.BinaryReader): UpdateAuthenticationPreferencesRequest;
}

export namespace UpdateAuthenticationPreferencesRequest {
  export type AsObject = {
    authenticationPreferences?: api_commons_org_preferences_pb.AuthenticationPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAuthenticationPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthenticationPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthenticationPreferencesResponse): UpdateAuthenticationPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthenticationPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthenticationPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateAuthenticationPreferencesResponse, reader: jspb.BinaryReader): UpdateAuthenticationPreferencesResponse;
}

export namespace UpdateAuthenticationPreferencesResponse {
  export type AsObject = {
  }
}

export class GetWebhookPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebhookPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebhookPreferencesRequest): GetWebhookPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWebhookPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebhookPreferencesRequest;
  static deserializeBinaryFromReader(message: GetWebhookPreferencesRequest, reader: jspb.BinaryReader): GetWebhookPreferencesRequest;
}

export namespace GetWebhookPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetWebhookPreferencesResponse extends jspb.Message {
  hasWebhookPreferences(): boolean;
  clearWebhookPreferences(): void;
  getWebhookPreferences(): api_commons_org_preferences_pb.WebhookPreferences | undefined;
  setWebhookPreferences(value?: api_commons_org_preferences_pb.WebhookPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebhookPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebhookPreferencesResponse): GetWebhookPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWebhookPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebhookPreferencesResponse;
  static deserializeBinaryFromReader(message: GetWebhookPreferencesResponse, reader: jspb.BinaryReader): GetWebhookPreferencesResponse;
}

export namespace GetWebhookPreferencesResponse {
  export type AsObject = {
    webhookPreferences?: api_commons_org_preferences_pb.WebhookPreferences.AsObject,
  }
}

export class UpdateWebhookPreferencesRequest extends jspb.Message {
  hasWebhookPreferences(): boolean;
  clearWebhookPreferences(): void;
  getWebhookPreferences(): api_commons_org_preferences_pb.WebhookPreferences | undefined;
  setWebhookPreferences(value?: api_commons_org_preferences_pb.WebhookPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebhookPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebhookPreferencesRequest): UpdateWebhookPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWebhookPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebhookPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateWebhookPreferencesRequest, reader: jspb.BinaryReader): UpdateWebhookPreferencesRequest;
}

export namespace UpdateWebhookPreferencesRequest {
  export type AsObject = {
    webhookPreferences?: api_commons_org_preferences_pb.WebhookPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateWebhookPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebhookPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebhookPreferencesResponse): UpdateWebhookPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWebhookPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebhookPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateWebhookPreferencesResponse, reader: jspb.BinaryReader): UpdateWebhookPreferencesResponse;
}

export namespace UpdateWebhookPreferencesResponse {
  export type AsObject = {
  }
}

export class GetDashboardGeneralPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardGeneralPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardGeneralPreferencesRequest): GetDashboardGeneralPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardGeneralPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardGeneralPreferencesRequest;
  static deserializeBinaryFromReader(message: GetDashboardGeneralPreferencesRequest, reader: jspb.BinaryReader): GetDashboardGeneralPreferencesRequest;
}

export namespace GetDashboardGeneralPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetDashboardGeneralPreferencesResponse extends jspb.Message {
  hasDashboardPreferences(): boolean;
  clearDashboardPreferences(): void;
  getDashboardPreferences(): api_commons_org_preferences_pb.DashboardPreferences | undefined;
  setDashboardPreferences(value?: api_commons_org_preferences_pb.DashboardPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardGeneralPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardGeneralPreferencesResponse): GetDashboardGeneralPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardGeneralPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardGeneralPreferencesResponse;
  static deserializeBinaryFromReader(message: GetDashboardGeneralPreferencesResponse, reader: jspb.BinaryReader): GetDashboardGeneralPreferencesResponse;
}

export namespace GetDashboardGeneralPreferencesResponse {
  export type AsObject = {
    dashboardPreferences?: api_commons_org_preferences_pb.DashboardPreferences.AsObject,
  }
}

export class UpdateDashboardGeneralPreferencesRequest extends jspb.Message {
  hasDashboardPreferences(): boolean;
  clearDashboardPreferences(): void;
  getDashboardPreferences(): api_commons_org_preferences_pb.DashboardPreferences | undefined;
  setDashboardPreferences(value?: api_commons_org_preferences_pb.DashboardPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardGeneralPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardGeneralPreferencesRequest): UpdateDashboardGeneralPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardGeneralPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardGeneralPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateDashboardGeneralPreferencesRequest, reader: jspb.BinaryReader): UpdateDashboardGeneralPreferencesRequest;
}

export namespace UpdateDashboardGeneralPreferencesRequest {
  export type AsObject = {
    dashboardPreferences?: api_commons_org_preferences_pb.DashboardPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDashboardGeneralPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardGeneralPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardGeneralPreferencesResponse): UpdateDashboardGeneralPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardGeneralPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardGeneralPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateDashboardGeneralPreferencesResponse, reader: jspb.BinaryReader): UpdateDashboardGeneralPreferencesResponse;
}

export namespace UpdateDashboardGeneralPreferencesResponse {
  export type AsObject = {
  }
}

export class GetDashboardQueuePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardQueuePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardQueuePreferencesRequest): GetDashboardQueuePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardQueuePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardQueuePreferencesRequest;
  static deserializeBinaryFromReader(message: GetDashboardQueuePreferencesRequest, reader: jspb.BinaryReader): GetDashboardQueuePreferencesRequest;
}

export namespace GetDashboardQueuePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetDashboardQueuePreferencesResponse extends jspb.Message {
  hasDashboardQueuePreferences(): boolean;
  clearDashboardQueuePreferences(): void;
  getDashboardQueuePreferences(): api_commons_org_preferences_pb.DashboardQueuePreferences | undefined;
  setDashboardQueuePreferences(value?: api_commons_org_preferences_pb.DashboardQueuePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardQueuePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardQueuePreferencesResponse): GetDashboardQueuePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardQueuePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardQueuePreferencesResponse;
  static deserializeBinaryFromReader(message: GetDashboardQueuePreferencesResponse, reader: jspb.BinaryReader): GetDashboardQueuePreferencesResponse;
}

export namespace GetDashboardQueuePreferencesResponse {
  export type AsObject = {
    dashboardQueuePreferences?: api_commons_org_preferences_pb.DashboardQueuePreferences.AsObject,
  }
}

export class UpdateDashboardQueuePreferencesRequest extends jspb.Message {
  hasDashboardQueuePreferences(): boolean;
  clearDashboardQueuePreferences(): void;
  getDashboardQueuePreferences(): api_commons_org_preferences_pb.DashboardQueuePreferences | undefined;
  setDashboardQueuePreferences(value?: api_commons_org_preferences_pb.DashboardQueuePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardQueuePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardQueuePreferencesRequest): UpdateDashboardQueuePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardQueuePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardQueuePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateDashboardQueuePreferencesRequest, reader: jspb.BinaryReader): UpdateDashboardQueuePreferencesRequest;
}

export namespace UpdateDashboardQueuePreferencesRequest {
  export type AsObject = {
    dashboardQueuePreferences?: api_commons_org_preferences_pb.DashboardQueuePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDashboardQueuePreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDashboardQueuePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDashboardQueuePreferencesResponse): UpdateDashboardQueuePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDashboardQueuePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDashboardQueuePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateDashboardQueuePreferencesResponse, reader: jspb.BinaryReader): UpdateDashboardQueuePreferencesResponse;
}

export namespace UpdateDashboardQueuePreferencesResponse {
  export type AsObject = {
  }
}

export class GetPhonePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhonePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhonePreferencesRequest): GetPhonePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPhonePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhonePreferencesRequest;
  static deserializeBinaryFromReader(message: GetPhonePreferencesRequest, reader: jspb.BinaryReader): GetPhonePreferencesRequest;
}

export namespace GetPhonePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetPhonePreferencesResponse extends jspb.Message {
  hasPhonePreferences(): boolean;
  clearPhonePreferences(): void;
  getPhonePreferences(): api_commons_org_preferences_pb.PhonePreferences | undefined;
  setPhonePreferences(value?: api_commons_org_preferences_pb.PhonePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhonePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhonePreferencesResponse): GetPhonePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPhonePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhonePreferencesResponse;
  static deserializeBinaryFromReader(message: GetPhonePreferencesResponse, reader: jspb.BinaryReader): GetPhonePreferencesResponse;
}

export namespace GetPhonePreferencesResponse {
  export type AsObject = {
    phonePreferences?: api_commons_org_preferences_pb.PhonePreferences.AsObject,
  }
}

export class UpdatePhonePreferencesRequest extends jspb.Message {
  hasPhonePreferences(): boolean;
  clearPhonePreferences(): void;
  getPhonePreferences(): api_commons_org_preferences_pb.PhonePreferences | undefined;
  setPhonePreferences(value?: api_commons_org_preferences_pb.PhonePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePhonePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePhonePreferencesRequest): UpdatePhonePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePhonePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePhonePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdatePhonePreferencesRequest, reader: jspb.BinaryReader): UpdatePhonePreferencesRequest;
}

export namespace UpdatePhonePreferencesRequest {
  export type AsObject = {
    phonePreferences?: api_commons_org_preferences_pb.PhonePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdatePhonePreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePhonePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePhonePreferencesResponse): UpdatePhonePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePhonePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePhonePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdatePhonePreferencesResponse, reader: jspb.BinaryReader): UpdatePhonePreferencesResponse;
}

export namespace UpdatePhonePreferencesResponse {
  export type AsObject = {
  }
}

export class PhonePreferencesDB extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getPhonePreferencesJson(): string;
  setPhonePreferencesJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhonePreferencesDB.AsObject;
  static toObject(includeInstance: boolean, msg: PhonePreferencesDB): PhonePreferencesDB.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PhonePreferencesDB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhonePreferencesDB;
  static deserializeBinaryFromReader(message: PhonePreferencesDB, reader: jspb.BinaryReader): PhonePreferencesDB;
}

export namespace PhonePreferencesDB {
  export type AsObject = {
    orgId: string,
    phonePreferencesJson: string,
  }
}

export class GetCompliancePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompliancePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompliancePreferencesRequest): GetCompliancePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompliancePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompliancePreferencesRequest;
  static deserializeBinaryFromReader(message: GetCompliancePreferencesRequest, reader: jspb.BinaryReader): GetCompliancePreferencesRequest;
}

export namespace GetCompliancePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetCompliancePreferencesResponse extends jspb.Message {
  hasCompliancePreferences(): boolean;
  clearCompliancePreferences(): void;
  getCompliancePreferences(): api_commons_org_preferences_pb.CompliancePreferences | undefined;
  setCompliancePreferences(value?: api_commons_org_preferences_pb.CompliancePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompliancePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompliancePreferencesResponse): GetCompliancePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompliancePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompliancePreferencesResponse;
  static deserializeBinaryFromReader(message: GetCompliancePreferencesResponse, reader: jspb.BinaryReader): GetCompliancePreferencesResponse;
}

export namespace GetCompliancePreferencesResponse {
  export type AsObject = {
    compliancePreferences?: api_commons_org_preferences_pb.CompliancePreferences.AsObject,
  }
}

export class UpdateCompliancePreferencesRequest extends jspb.Message {
  hasCompliancePreferences(): boolean;
  clearCompliancePreferences(): void;
  getCompliancePreferences(): api_commons_org_preferences_pb.CompliancePreferences | undefined;
  setCompliancePreferences(value?: api_commons_org_preferences_pb.CompliancePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompliancePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompliancePreferencesRequest): UpdateCompliancePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompliancePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompliancePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateCompliancePreferencesRequest, reader: jspb.BinaryReader): UpdateCompliancePreferencesRequest;
}

export namespace UpdateCompliancePreferencesRequest {
  export type AsObject = {
    compliancePreferences?: api_commons_org_preferences_pb.CompliancePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateCompliancePreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompliancePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompliancePreferencesResponse): UpdateCompliancePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompliancePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompliancePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateCompliancePreferencesResponse, reader: jspb.BinaryReader): UpdateCompliancePreferencesResponse;
}

export namespace UpdateCompliancePreferencesResponse {
  export type AsObject = {
  }
}

export class GetBroadcastPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBroadcastPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBroadcastPreferencesRequest): GetBroadcastPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBroadcastPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBroadcastPreferencesRequest;
  static deserializeBinaryFromReader(message: GetBroadcastPreferencesRequest, reader: jspb.BinaryReader): GetBroadcastPreferencesRequest;
}

export namespace GetBroadcastPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetBroadcastPreferencesResponse extends jspb.Message {
  hasBroadcastPreferences(): boolean;
  clearBroadcastPreferences(): void;
  getBroadcastPreferences(): api_commons_org_preferences_pb.BroadcastPreferences | undefined;
  setBroadcastPreferences(value?: api_commons_org_preferences_pb.BroadcastPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBroadcastPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBroadcastPreferencesResponse): GetBroadcastPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBroadcastPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBroadcastPreferencesResponse;
  static deserializeBinaryFromReader(message: GetBroadcastPreferencesResponse, reader: jspb.BinaryReader): GetBroadcastPreferencesResponse;
}

export namespace GetBroadcastPreferencesResponse {
  export type AsObject = {
    broadcastPreferences?: api_commons_org_preferences_pb.BroadcastPreferences.AsObject,
  }
}

export class UpdateBroadcastPreferencesRequest extends jspb.Message {
  hasBroadcastPreferences(): boolean;
  clearBroadcastPreferences(): void;
  getBroadcastPreferences(): api_commons_org_preferences_pb.BroadcastPreferences | undefined;
  setBroadcastPreferences(value?: api_commons_org_preferences_pb.BroadcastPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastPreferencesRequest): UpdateBroadcastPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBroadcastPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateBroadcastPreferencesRequest, reader: jspb.BinaryReader): UpdateBroadcastPreferencesRequest;
}

export namespace UpdateBroadcastPreferencesRequest {
  export type AsObject = {
    broadcastPreferences?: api_commons_org_preferences_pb.BroadcastPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateBroadcastPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastPreferencesResponse): UpdateBroadcastPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBroadcastPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateBroadcastPreferencesResponse, reader: jspb.BinaryReader): UpdateBroadcastPreferencesResponse;
}

export namespace UpdateBroadcastPreferencesResponse {
  export type AsObject = {
  }
}

export class GetSchedulePreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchedulePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchedulePreferencesRequest): GetSchedulePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSchedulePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchedulePreferencesRequest;
  static deserializeBinaryFromReader(message: GetSchedulePreferencesRequest, reader: jspb.BinaryReader): GetSchedulePreferencesRequest;
}

export namespace GetSchedulePreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetSchedulePreferencesResponse extends jspb.Message {
  hasSchedulePreferences(): boolean;
  clearSchedulePreferences(): void;
  getSchedulePreferences(): api_commons_org_preferences_pb.SchedulePreferences | undefined;
  setSchedulePreferences(value?: api_commons_org_preferences_pb.SchedulePreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchedulePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchedulePreferencesResponse): GetSchedulePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSchedulePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchedulePreferencesResponse;
  static deserializeBinaryFromReader(message: GetSchedulePreferencesResponse, reader: jspb.BinaryReader): GetSchedulePreferencesResponse;
}

export namespace GetSchedulePreferencesResponse {
  export type AsObject = {
    schedulePreferences?: api_commons_org_preferences_pb.SchedulePreferences.AsObject,
  }
}

export class UpdateSchedulePreferencesRequest extends jspb.Message {
  hasSchedulePreferences(): boolean;
  clearSchedulePreferences(): void;
  getSchedulePreferences(): api_commons_org_preferences_pb.SchedulePreferences | undefined;
  setSchedulePreferences(value?: api_commons_org_preferences_pb.SchedulePreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSchedulePreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSchedulePreferencesRequest): UpdateSchedulePreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSchedulePreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSchedulePreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateSchedulePreferencesRequest, reader: jspb.BinaryReader): UpdateSchedulePreferencesRequest;
}

export namespace UpdateSchedulePreferencesRequest {
  export type AsObject = {
    schedulePreferences?: api_commons_org_preferences_pb.SchedulePreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSchedulePreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSchedulePreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSchedulePreferencesResponse): UpdateSchedulePreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSchedulePreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSchedulePreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateSchedulePreferencesResponse, reader: jspb.BinaryReader): UpdateSchedulePreferencesResponse;
}

export namespace UpdateSchedulePreferencesResponse {
  export type AsObject = {
  }
}

export class GetEmailSmsPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailSmsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailSmsPreferencesRequest): GetEmailSmsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailSmsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailSmsPreferencesRequest;
  static deserializeBinaryFromReader(message: GetEmailSmsPreferencesRequest, reader: jspb.BinaryReader): GetEmailSmsPreferencesRequest;
}

export namespace GetEmailSmsPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetEmailSmsPreferencesResponse extends jspb.Message {
  hasEmailSmsPreferences(): boolean;
  clearEmailSmsPreferences(): void;
  getEmailSmsPreferences(): api_commons_org_preferences_pb.EmailSmsPreferences | undefined;
  setEmailSmsPreferences(value?: api_commons_org_preferences_pb.EmailSmsPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailSmsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailSmsPreferencesResponse): GetEmailSmsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailSmsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailSmsPreferencesResponse;
  static deserializeBinaryFromReader(message: GetEmailSmsPreferencesResponse, reader: jspb.BinaryReader): GetEmailSmsPreferencesResponse;
}

export namespace GetEmailSmsPreferencesResponse {
  export type AsObject = {
    emailSmsPreferences?: api_commons_org_preferences_pb.EmailSmsPreferences.AsObject,
  }
}

export class UpdateEmailSmsPreferencesRequest extends jspb.Message {
  hasEmailSmsPreferences(): boolean;
  clearEmailSmsPreferences(): void;
  getEmailSmsPreferences(): api_commons_org_preferences_pb.EmailSmsPreferences | undefined;
  setEmailSmsPreferences(value?: api_commons_org_preferences_pb.EmailSmsPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailSmsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailSmsPreferencesRequest): UpdateEmailSmsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailSmsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailSmsPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateEmailSmsPreferencesRequest, reader: jspb.BinaryReader): UpdateEmailSmsPreferencesRequest;
}

export namespace UpdateEmailSmsPreferencesRequest {
  export type AsObject = {
    emailSmsPreferences?: api_commons_org_preferences_pb.EmailSmsPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateEmailSmsPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailSmsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailSmsPreferencesResponse): UpdateEmailSmsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailSmsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailSmsPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateEmailSmsPreferencesResponse, reader: jspb.BinaryReader): UpdateEmailSmsPreferencesResponse;
}

export namespace UpdateEmailSmsPreferencesResponse {
  export type AsObject = {
  }
}

export class GetBusinessPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessPreferencesRequest): GetBusinessPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessPreferencesRequest;
  static deserializeBinaryFromReader(message: GetBusinessPreferencesRequest, reader: jspb.BinaryReader): GetBusinessPreferencesRequest;
}

export namespace GetBusinessPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetBusinessPreferencesResponse extends jspb.Message {
  hasBusinessPreferences(): boolean;
  clearBusinessPreferences(): void;
  getBusinessPreferences(): api_commons_org_preferences_pb.BusinessPreferences | undefined;
  setBusinessPreferences(value?: api_commons_org_preferences_pb.BusinessPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessPreferencesResponse): GetBusinessPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBusinessPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessPreferencesResponse;
  static deserializeBinaryFromReader(message: GetBusinessPreferencesResponse, reader: jspb.BinaryReader): GetBusinessPreferencesResponse;
}

export namespace GetBusinessPreferencesResponse {
  export type AsObject = {
    businessPreferences?: api_commons_org_preferences_pb.BusinessPreferences.AsObject,
  }
}

export class UpdateBusinessPreferencesRequest extends jspb.Message {
  hasBusinessPreferences(): boolean;
  clearBusinessPreferences(): void;
  getBusinessPreferences(): api_commons_org_preferences_pb.BusinessPreferences | undefined;
  setBusinessPreferences(value?: api_commons_org_preferences_pb.BusinessPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessPreferencesRequest): UpdateBusinessPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessPreferencesRequest, reader: jspb.BinaryReader): UpdateBusinessPreferencesRequest;
}

export namespace UpdateBusinessPreferencesRequest {
  export type AsObject = {
    businessPreferences?: api_commons_org_preferences_pb.BusinessPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateBusinessPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessPreferencesResponse): UpdateBusinessPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBusinessPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessPreferencesResponse, reader: jspb.BinaryReader): UpdateBusinessPreferencesResponse;
}

export namespace UpdateBusinessPreferencesResponse {
  export type AsObject = {
  }
}

export class GetScorecardsPreferencesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScorecardsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScorecardsPreferencesRequest): GetScorecardsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScorecardsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScorecardsPreferencesRequest;
  static deserializeBinaryFromReader(message: GetScorecardsPreferencesRequest, reader: jspb.BinaryReader): GetScorecardsPreferencesRequest;
}

export namespace GetScorecardsPreferencesRequest {
  export type AsObject = {
    orgId: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetScorecardsPreferencesResponse extends jspb.Message {
  hasScorecardsPreferences(): boolean;
  clearScorecardsPreferences(): void;
  getScorecardsPreferences(): api_commons_org_preferences_pb.ScorecardsPreferences | undefined;
  setScorecardsPreferences(value?: api_commons_org_preferences_pb.ScorecardsPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScorecardsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScorecardsPreferencesResponse): GetScorecardsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScorecardsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScorecardsPreferencesResponse;
  static deserializeBinaryFromReader(message: GetScorecardsPreferencesResponse, reader: jspb.BinaryReader): GetScorecardsPreferencesResponse;
}

export namespace GetScorecardsPreferencesResponse {
  export type AsObject = {
    scorecardsPreferences?: api_commons_org_preferences_pb.ScorecardsPreferences.AsObject,
  }
}

export class UpdateScorecardsPreferencesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasScorecardsPreferences(): boolean;
  clearScorecardsPreferences(): void;
  getScorecardsPreferences(): api_commons_org_preferences_pb.ScorecardsPreferences | undefined;
  setScorecardsPreferences(value?: api_commons_org_preferences_pb.ScorecardsPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScorecardsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScorecardsPreferencesRequest): UpdateScorecardsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScorecardsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScorecardsPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateScorecardsPreferencesRequest, reader: jspb.BinaryReader): UpdateScorecardsPreferencesRequest;
}

export namespace UpdateScorecardsPreferencesRequest {
  export type AsObject = {
    orgId: string,
    scorecardsPreferences?: api_commons_org_preferences_pb.ScorecardsPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateScorecardsPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScorecardsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScorecardsPreferencesResponse): UpdateScorecardsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateScorecardsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScorecardsPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateScorecardsPreferencesResponse, reader: jspb.BinaryReader): UpdateScorecardsPreferencesResponse;
}

export namespace UpdateScorecardsPreferencesResponse {
  export type AsObject = {
  }
}

export class GetVoiceAnalyticsPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoiceAnalyticsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoiceAnalyticsPreferencesRequest): GetVoiceAnalyticsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoiceAnalyticsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoiceAnalyticsPreferencesRequest;
  static deserializeBinaryFromReader(message: GetVoiceAnalyticsPreferencesRequest, reader: jspb.BinaryReader): GetVoiceAnalyticsPreferencesRequest;
}

export namespace GetVoiceAnalyticsPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetVoiceAnalyticsPreferencesResponse extends jspb.Message {
  hasVoiceAnalyticsPreferences(): boolean;
  clearVoiceAnalyticsPreferences(): void;
  getVoiceAnalyticsPreferences(): api_commons_org_preferences_pb.VoiceAnalyticsPreferences | undefined;
  setVoiceAnalyticsPreferences(value?: api_commons_org_preferences_pb.VoiceAnalyticsPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoiceAnalyticsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoiceAnalyticsPreferencesResponse): GetVoiceAnalyticsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoiceAnalyticsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoiceAnalyticsPreferencesResponse;
  static deserializeBinaryFromReader(message: GetVoiceAnalyticsPreferencesResponse, reader: jspb.BinaryReader): GetVoiceAnalyticsPreferencesResponse;
}

export namespace GetVoiceAnalyticsPreferencesResponse {
  export type AsObject = {
    voiceAnalyticsPreferences?: api_commons_org_preferences_pb.VoiceAnalyticsPreferences.AsObject,
  }
}

export class ListVoiceAnalyticsPreferencesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoiceAnalyticsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoiceAnalyticsPreferencesRequest): ListVoiceAnalyticsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVoiceAnalyticsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoiceAnalyticsPreferencesRequest;
  static deserializeBinaryFromReader(message: ListVoiceAnalyticsPreferencesRequest, reader: jspb.BinaryReader): ListVoiceAnalyticsPreferencesRequest;
}

export namespace ListVoiceAnalyticsPreferencesRequest {
  export type AsObject = {
  }
}

export class ListVoiceAnalyticsPreferencesResponse extends jspb.Message {
  clearVoiceAnalyticsPreferencesList(): void;
  getVoiceAnalyticsPreferencesList(): Array<api_commons_org_preferences_pb.VoiceAnalyticsPreferences>;
  setVoiceAnalyticsPreferencesList(value: Array<api_commons_org_preferences_pb.VoiceAnalyticsPreferences>): void;
  addVoiceAnalyticsPreferences(value?: api_commons_org_preferences_pb.VoiceAnalyticsPreferences, index?: number): api_commons_org_preferences_pb.VoiceAnalyticsPreferences;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoiceAnalyticsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoiceAnalyticsPreferencesResponse): ListVoiceAnalyticsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListVoiceAnalyticsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoiceAnalyticsPreferencesResponse;
  static deserializeBinaryFromReader(message: ListVoiceAnalyticsPreferencesResponse, reader: jspb.BinaryReader): ListVoiceAnalyticsPreferencesResponse;
}

export namespace ListVoiceAnalyticsPreferencesResponse {
  export type AsObject = {
    voiceAnalyticsPreferencesList: Array<api_commons_org_preferences_pb.VoiceAnalyticsPreferences.AsObject>,
  }
}

export class UpdateVoiceAnalyticsPreferencesRequest extends jspb.Message {
  hasVoiceAnalyticsPreferences(): boolean;
  clearVoiceAnalyticsPreferences(): void;
  getVoiceAnalyticsPreferences(): api_commons_org_preferences_pb.VoiceAnalyticsPreferences | undefined;
  setVoiceAnalyticsPreferences(value?: api_commons_org_preferences_pb.VoiceAnalyticsPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoiceAnalyticsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoiceAnalyticsPreferencesRequest): UpdateVoiceAnalyticsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoiceAnalyticsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoiceAnalyticsPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateVoiceAnalyticsPreferencesRequest, reader: jspb.BinaryReader): UpdateVoiceAnalyticsPreferencesRequest;
}

export namespace UpdateVoiceAnalyticsPreferencesRequest {
  export type AsObject = {
    voiceAnalyticsPreferences?: api_commons_org_preferences_pb.VoiceAnalyticsPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateVoiceAnalyticsPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoiceAnalyticsPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoiceAnalyticsPreferencesResponse): UpdateVoiceAnalyticsPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateVoiceAnalyticsPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoiceAnalyticsPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateVoiceAnalyticsPreferencesResponse, reader: jspb.BinaryReader): UpdateVoiceAnalyticsPreferencesResponse;
}

export namespace UpdateVoiceAnalyticsPreferencesResponse {
  export type AsObject = {
  }
}

export class GetEndOfDayPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndOfDayPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndOfDayPreferencesRequest): GetEndOfDayPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndOfDayPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndOfDayPreferencesRequest;
  static deserializeBinaryFromReader(message: GetEndOfDayPreferencesRequest, reader: jspb.BinaryReader): GetEndOfDayPreferencesRequest;
}

export namespace GetEndOfDayPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetEndOfDayPreferencesResponse extends jspb.Message {
  hasEndOfDayPreferences(): boolean;
  clearEndOfDayPreferences(): void;
  getEndOfDayPreferences(): api_commons_org_preferences_pb.EndOfDayPreferences | undefined;
  setEndOfDayPreferences(value?: api_commons_org_preferences_pb.EndOfDayPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEndOfDayPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEndOfDayPreferencesResponse): GetEndOfDayPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEndOfDayPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEndOfDayPreferencesResponse;
  static deserializeBinaryFromReader(message: GetEndOfDayPreferencesResponse, reader: jspb.BinaryReader): GetEndOfDayPreferencesResponse;
}

export namespace GetEndOfDayPreferencesResponse {
  export type AsObject = {
    endOfDayPreferences?: api_commons_org_preferences_pb.EndOfDayPreferences.AsObject,
  }
}

export class UpdateEndOfDayPreferencesRequest extends jspb.Message {
  hasEndOfDayPreferences(): boolean;
  clearEndOfDayPreferences(): void;
  getEndOfDayPreferences(): api_commons_org_preferences_pb.EndOfDayPreferences | undefined;
  setEndOfDayPreferences(value?: api_commons_org_preferences_pb.EndOfDayPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndOfDayPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndOfDayPreferencesRequest): UpdateEndOfDayPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndOfDayPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndOfDayPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateEndOfDayPreferencesRequest, reader: jspb.BinaryReader): UpdateEndOfDayPreferencesRequest;
}

export namespace UpdateEndOfDayPreferencesRequest {
  export type AsObject = {
    endOfDayPreferences?: api_commons_org_preferences_pb.EndOfDayPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateEndOfDayPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEndOfDayPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEndOfDayPreferencesResponse): UpdateEndOfDayPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEndOfDayPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEndOfDayPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateEndOfDayPreferencesResponse, reader: jspb.BinaryReader): UpdateEndOfDayPreferencesResponse;
}

export namespace UpdateEndOfDayPreferencesResponse {
  export type AsObject = {
  }
}

export class GetFilterPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilterPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilterPreferencesRequest): GetFilterPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFilterPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilterPreferencesRequest;
  static deserializeBinaryFromReader(message: GetFilterPreferencesRequest, reader: jspb.BinaryReader): GetFilterPreferencesRequest;
}

export namespace GetFilterPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetFilterPreferencesResponse extends jspb.Message {
  hasFilterPreferences(): boolean;
  clearFilterPreferences(): void;
  getFilterPreferences(): api_commons_org_preferences_pb.FilterPreferences | undefined;
  setFilterPreferences(value?: api_commons_org_preferences_pb.FilterPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFilterPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFilterPreferencesResponse): GetFilterPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFilterPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFilterPreferencesResponse;
  static deserializeBinaryFromReader(message: GetFilterPreferencesResponse, reader: jspb.BinaryReader): GetFilterPreferencesResponse;
}

export namespace GetFilterPreferencesResponse {
  export type AsObject = {
    filterPreferences?: api_commons_org_preferences_pb.FilterPreferences.AsObject,
  }
}

export class UpdateFilterPreferencesRequest extends jspb.Message {
  hasFilterPreferences(): boolean;
  clearFilterPreferences(): void;
  getFilterPreferences(): api_commons_org_preferences_pb.FilterPreferences | undefined;
  setFilterPreferences(value?: api_commons_org_preferences_pb.FilterPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFilterPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFilterPreferencesRequest): UpdateFilterPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFilterPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFilterPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateFilterPreferencesRequest, reader: jspb.BinaryReader): UpdateFilterPreferencesRequest;
}

export namespace UpdateFilterPreferencesRequest {
  export type AsObject = {
    filterPreferences?: api_commons_org_preferences_pb.FilterPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateFilterPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFilterPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFilterPreferencesResponse): UpdateFilterPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFilterPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFilterPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateFilterPreferencesResponse, reader: jspb.BinaryReader): UpdateFilterPreferencesResponse;
}

export namespace UpdateFilterPreferencesResponse {
  export type AsObject = {
  }
}

export class GetRecordingPreferencesRequest extends jspb.Message {
  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecordingPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecordingPreferencesRequest): GetRecordingPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecordingPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecordingPreferencesRequest;
  static deserializeBinaryFromReader(message: GetRecordingPreferencesRequest, reader: jspb.BinaryReader): GetRecordingPreferencesRequest;
}

export namespace GetRecordingPreferencesRequest {
  export type AsObject = {
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetRecordingPreferencesResponse extends jspb.Message {
  hasRecordingPreferences(): boolean;
  clearRecordingPreferences(): void;
  getRecordingPreferences(): api_commons_org_preferences_pb.RecordingPreferences | undefined;
  setRecordingPreferences(value?: api_commons_org_preferences_pb.RecordingPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecordingPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecordingPreferencesResponse): GetRecordingPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecordingPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecordingPreferencesResponse;
  static deserializeBinaryFromReader(message: GetRecordingPreferencesResponse, reader: jspb.BinaryReader): GetRecordingPreferencesResponse;
}

export namespace GetRecordingPreferencesResponse {
  export type AsObject = {
    recordingPreferences?: api_commons_org_preferences_pb.RecordingPreferences.AsObject,
  }
}

export class UpdateRecordingPreferencesRequest extends jspb.Message {
  hasRecordingPreferences(): boolean;
  clearRecordingPreferences(): void;
  getRecordingPreferences(): api_commons_org_preferences_pb.RecordingPreferences | undefined;
  setRecordingPreferences(value?: api_commons_org_preferences_pb.RecordingPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecordingPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecordingPreferencesRequest): UpdateRecordingPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRecordingPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecordingPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateRecordingPreferencesRequest, reader: jspb.BinaryReader): UpdateRecordingPreferencesRequest;
}

export namespace UpdateRecordingPreferencesRequest {
  export type AsObject = {
    recordingPreferences?: api_commons_org_preferences_pb.RecordingPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateRecordingPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecordingPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecordingPreferencesResponse): UpdateRecordingPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRecordingPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecordingPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateRecordingPreferencesResponse, reader: jspb.BinaryReader): UpdateRecordingPreferencesResponse;
}

export namespace UpdateRecordingPreferencesResponse {
  export type AsObject = {
  }
}

export class GetAdminClientPreferencesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdminClientPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdminClientPreferencesRequest): GetAdminClientPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdminClientPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdminClientPreferencesRequest;
  static deserializeBinaryFromReader(message: GetAdminClientPreferencesRequest, reader: jspb.BinaryReader): GetAdminClientPreferencesRequest;
}

export namespace GetAdminClientPreferencesRequest {
  export type AsObject = {
    orgId: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetAdminClientPreferencesResponse extends jspb.Message {
  hasAdminClientPreferences(): boolean;
  clearAdminClientPreferences(): void;
  getAdminClientPreferences(): api_commons_org_preferences_pb.AdminClientPreferences | undefined;
  setAdminClientPreferences(value?: api_commons_org_preferences_pb.AdminClientPreferences): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdminClientPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdminClientPreferencesResponse): GetAdminClientPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdminClientPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdminClientPreferencesResponse;
  static deserializeBinaryFromReader(message: GetAdminClientPreferencesResponse, reader: jspb.BinaryReader): GetAdminClientPreferencesResponse;
}

export namespace GetAdminClientPreferencesResponse {
  export type AsObject = {
    adminClientPreferences?: api_commons_org_preferences_pb.AdminClientPreferences.AsObject,
  }
}

export class UpdateAdminClientPreferencesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasAdminClientPreferences(): boolean;
  clearAdminClientPreferences(): void;
  getAdminClientPreferences(): api_commons_org_preferences_pb.AdminClientPreferences | undefined;
  setAdminClientPreferences(value?: api_commons_org_preferences_pb.AdminClientPreferences): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdminClientPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdminClientPreferencesRequest): UpdateAdminClientPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAdminClientPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdminClientPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateAdminClientPreferencesRequest, reader: jspb.BinaryReader): UpdateAdminClientPreferencesRequest;
}

export namespace UpdateAdminClientPreferencesRequest {
  export type AsObject = {
    orgId: string,
    adminClientPreferences?: api_commons_org_preferences_pb.AdminClientPreferences.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAdminClientPreferencesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdminClientPreferencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdminClientPreferencesResponse): UpdateAdminClientPreferencesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAdminClientPreferencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdminClientPreferencesResponse;
  static deserializeBinaryFromReader(message: UpdateAdminClientPreferencesResponse, reader: jspb.BinaryReader): UpdateAdminClientPreferencesResponse;
}

export namespace UpdateAdminClientPreferencesResponse {
  export type AsObject = {
  }
}

export class AcceptLinkbackRecordingTermsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptLinkbackRecordingTermsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptLinkbackRecordingTermsRequest): AcceptLinkbackRecordingTermsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptLinkbackRecordingTermsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptLinkbackRecordingTermsRequest;
  static deserializeBinaryFromReader(message: AcceptLinkbackRecordingTermsRequest, reader: jspb.BinaryReader): AcceptLinkbackRecordingTermsRequest;
}

export namespace AcceptLinkbackRecordingTermsRequest {
  export type AsObject = {
  }
}

export class AcceptLinkbackRecordingTermsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptLinkbackRecordingTermsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptLinkbackRecordingTermsResponse): AcceptLinkbackRecordingTermsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AcceptLinkbackRecordingTermsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptLinkbackRecordingTermsResponse;
  static deserializeBinaryFromReader(message: AcceptLinkbackRecordingTermsResponse, reader: jspb.BinaryReader): AcceptLinkbackRecordingTermsResponse;
}

export namespace AcceptLinkbackRecordingTermsResponse {
  export type AsObject = {
  }
}

export class LinkbackUpdateBroadcastTemplatesRequest extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkbackUpdateBroadcastTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkbackUpdateBroadcastTemplatesRequest): LinkbackUpdateBroadcastTemplatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkbackUpdateBroadcastTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkbackUpdateBroadcastTemplatesRequest;
  static deserializeBinaryFromReader(message: LinkbackUpdateBroadcastTemplatesRequest, reader: jspb.BinaryReader): LinkbackUpdateBroadcastTemplatesRequest;
}

export namespace LinkbackUpdateBroadcastTemplatesRequest {
  export type AsObject = {
    value: boolean,
  }
}

export class LinkbackUpdateBroadcastTemplatesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkbackUpdateBroadcastTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinkbackUpdateBroadcastTemplatesResponse): LinkbackUpdateBroadcastTemplatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkbackUpdateBroadcastTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkbackUpdateBroadcastTemplatesResponse;
  static deserializeBinaryFromReader(message: LinkbackUpdateBroadcastTemplatesResponse, reader: jspb.BinaryReader): LinkbackUpdateBroadcastTemplatesResponse;
}

export namespace LinkbackUpdateBroadcastTemplatesResponse {
  export type AsObject = {
  }
}

export class RecordEmailUnsubscribeAcknowledgementRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordEmailUnsubscribeAcknowledgementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordEmailUnsubscribeAcknowledgementRequest): RecordEmailUnsubscribeAcknowledgementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordEmailUnsubscribeAcknowledgementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordEmailUnsubscribeAcknowledgementRequest;
  static deserializeBinaryFromReader(message: RecordEmailUnsubscribeAcknowledgementRequest, reader: jspb.BinaryReader): RecordEmailUnsubscribeAcknowledgementRequest;
}

export namespace RecordEmailUnsubscribeAcknowledgementRequest {
  export type AsObject = {
  }
}

export class RecordEmailUnsubscribeAcknowledgementResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordEmailUnsubscribeAcknowledgementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordEmailUnsubscribeAcknowledgementResponse): RecordEmailUnsubscribeAcknowledgementResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordEmailUnsubscribeAcknowledgementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordEmailUnsubscribeAcknowledgementResponse;
  static deserializeBinaryFromReader(message: RecordEmailUnsubscribeAcknowledgementResponse, reader: jspb.BinaryReader): RecordEmailUnsubscribeAcknowledgementResponse;
}

export namespace RecordEmailUnsubscribeAcknowledgementResponse {
  export type AsObject = {
  }
}

export class ClearEmailUnsubscribeAcknowledgementRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearEmailUnsubscribeAcknowledgementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClearEmailUnsubscribeAcknowledgementRequest): ClearEmailUnsubscribeAcknowledgementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearEmailUnsubscribeAcknowledgementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearEmailUnsubscribeAcknowledgementRequest;
  static deserializeBinaryFromReader(message: ClearEmailUnsubscribeAcknowledgementRequest, reader: jspb.BinaryReader): ClearEmailUnsubscribeAcknowledgementRequest;
}

export namespace ClearEmailUnsubscribeAcknowledgementRequest {
  export type AsObject = {
  }
}

export class ClearEmailUnsubscribeAcknowledgementResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearEmailUnsubscribeAcknowledgementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClearEmailUnsubscribeAcknowledgementResponse): ClearEmailUnsubscribeAcknowledgementResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearEmailUnsubscribeAcknowledgementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearEmailUnsubscribeAcknowledgementResponse;
  static deserializeBinaryFromReader(message: ClearEmailUnsubscribeAcknowledgementResponse, reader: jspb.BinaryReader): ClearEmailUnsubscribeAcknowledgementResponse;
}

export namespace ClearEmailUnsubscribeAcknowledgementResponse {
  export type AsObject = {
  }
}

