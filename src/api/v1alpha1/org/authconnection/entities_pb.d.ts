// package: api.v1alpha1.org.authconnection
// file: api/v1alpha1/org/authconnection/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_auth_connections_pb from "../../../../api/commons/org/auth_connections_pb";

export class CreateAuthConnectionRequest extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): api_commons_org_auth_connections_pb.AuthConnectionSettings | undefined;
  setSettings(value?: api_commons_org_auth_connections_pb.AuthConnectionSettings): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthConnectionRequest): CreateAuthConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAuthConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthConnectionRequest;
  static deserializeBinaryFromReader(message: CreateAuthConnectionRequest, reader: jspb.BinaryReader): CreateAuthConnectionRequest;
}

export namespace CreateAuthConnectionRequest {
  export type AsObject = {
    settings?: api_commons_org_auth_connections_pb.AuthConnectionSettings.AsObject,
    clientSecret: string,
  }
}

export class CreateAuthConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthConnectionResponse): CreateAuthConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAuthConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthConnectionResponse;
  static deserializeBinaryFromReader(message: CreateAuthConnectionResponse, reader: jspb.BinaryReader): CreateAuthConnectionResponse;
}

export namespace CreateAuthConnectionResponse {
  export type AsObject = {
  }
}

export class GetAuthConnectionSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthConnectionSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthConnectionSettingsRequest): GetAuthConnectionSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthConnectionSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthConnectionSettingsRequest;
  static deserializeBinaryFromReader(message: GetAuthConnectionSettingsRequest, reader: jspb.BinaryReader): GetAuthConnectionSettingsRequest;
}

export namespace GetAuthConnectionSettingsRequest {
  export type AsObject = {
  }
}

export class GetAuthConnectionSettingsResponse extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): api_commons_org_auth_connections_pb.AuthConnectionSettings | undefined;
  setSettings(value?: api_commons_org_auth_connections_pb.AuthConnectionSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthConnectionSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthConnectionSettingsResponse): GetAuthConnectionSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthConnectionSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthConnectionSettingsResponse;
  static deserializeBinaryFromReader(message: GetAuthConnectionSettingsResponse, reader: jspb.BinaryReader): GetAuthConnectionSettingsResponse;
}

export namespace GetAuthConnectionSettingsResponse {
  export type AsObject = {
    settings?: api_commons_org_auth_connections_pb.AuthConnectionSettings.AsObject,
  }
}

export class DeleteAuthConnectionRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthConnectionRequest): DeleteAuthConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAuthConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthConnectionRequest;
  static deserializeBinaryFromReader(message: DeleteAuthConnectionRequest, reader: jspb.BinaryReader): DeleteAuthConnectionRequest;
}

export namespace DeleteAuthConnectionRequest {
  export type AsObject = {
    connectionId: string,
  }
}

export class DeleteAuthConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthConnectionResponse): DeleteAuthConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAuthConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthConnectionResponse;
  static deserializeBinaryFromReader(message: DeleteAuthConnectionResponse, reader: jspb.BinaryReader): DeleteAuthConnectionResponse;
}

export namespace DeleteAuthConnectionResponse {
  export type AsObject = {
  }
}

export class UpdateAuthConnectionSecretRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthConnectionSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthConnectionSecretRequest): UpdateAuthConnectionSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthConnectionSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthConnectionSecretRequest;
  static deserializeBinaryFromReader(message: UpdateAuthConnectionSecretRequest, reader: jspb.BinaryReader): UpdateAuthConnectionSecretRequest;
}

export namespace UpdateAuthConnectionSecretRequest {
  export type AsObject = {
    connectionId: string,
    clientSecret: string,
  }
}

export class UpdateAuthConnectionSecretResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthConnectionSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthConnectionSecretResponse): UpdateAuthConnectionSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthConnectionSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthConnectionSecretResponse;
  static deserializeBinaryFromReader(message: UpdateAuthConnectionSecretResponse, reader: jspb.BinaryReader): UpdateAuthConnectionSecretResponse;
}

export namespace UpdateAuthConnectionSecretResponse {
  export type AsObject = {
  }
}

export class UpdateAuthConnectionGroupsRequest extends jspb.Message {
  hasDefaultGroup(): boolean;
  clearDefaultGroup(): void;
  getDefaultGroup(): api_commons_org_auth_connections_pb.GroupItem | undefined;
  setDefaultGroup(value?: api_commons_org_auth_connections_pb.GroupItem): void;

  clearCustomGroupsList(): void;
  getCustomGroupsList(): Array<api_commons_org_auth_connections_pb.GroupItem>;
  setCustomGroupsList(value: Array<api_commons_org_auth_connections_pb.GroupItem>): void;
  addCustomGroups(value?: api_commons_org_auth_connections_pb.GroupItem, index?: number): api_commons_org_auth_connections_pb.GroupItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthConnectionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthConnectionGroupsRequest): UpdateAuthConnectionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthConnectionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthConnectionGroupsRequest;
  static deserializeBinaryFromReader(message: UpdateAuthConnectionGroupsRequest, reader: jspb.BinaryReader): UpdateAuthConnectionGroupsRequest;
}

export namespace UpdateAuthConnectionGroupsRequest {
  export type AsObject = {
    defaultGroup?: api_commons_org_auth_connections_pb.GroupItem.AsObject,
    customGroupsList: Array<api_commons_org_auth_connections_pb.GroupItem.AsObject>,
  }
}

export class UpdateAuthConnectionGroupsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthConnectionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthConnectionGroupsResponse): UpdateAuthConnectionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAuthConnectionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthConnectionGroupsResponse;
  static deserializeBinaryFromReader(message: UpdateAuthConnectionGroupsResponse, reader: jspb.BinaryReader): UpdateAuthConnectionGroupsResponse;
}

export namespace UpdateAuthConnectionGroupsResponse {
  export type AsObject = {
  }
}

