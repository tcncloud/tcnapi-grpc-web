// package: api.commons.org
// file: api/commons/org/auth_connections.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AuthConnectionSettings extends jspb.Message {
  getIssuerUrl(): string;
  setIssuerUrl(value: string): void;

  getTenantUrl(): string;
  setTenantUrl(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  hasSecretExpiration(): boolean;
  clearSecretExpiration(): void;
  getSecretExpiration(): AuthConnectionSettings.SecretExpiration | undefined;
  setSecretExpiration(value?: AuthConnectionSettings.SecretExpiration): void;

  hasDefaultGroup(): boolean;
  clearDefaultGroup(): void;
  getDefaultGroup(): GroupItem | undefined;
  setDefaultGroup(value?: GroupItem): void;

  clearCustomGroupsList(): void;
  getCustomGroupsList(): Array<GroupItem>;
  setCustomGroupsList(value: Array<GroupItem>): void;
  addCustomGroups(value?: GroupItem, index?: number): GroupItem;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getType(): ConnectionTypeMap[keyof ConnectionTypeMap];
  setType(value: ConnectionTypeMap[keyof ConnectionTypeMap]): void;

  getResourceUrl(): string;
  setResourceUrl(value: string): void;

  getUseGovernmentAzure(): boolean;
  setUseGovernmentAzure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthConnectionSettings.AsObject;
  static toObject(includeInstance: boolean, msg: AuthConnectionSettings): AuthConnectionSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthConnectionSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthConnectionSettings;
  static deserializeBinaryFromReader(message: AuthConnectionSettings, reader: jspb.BinaryReader): AuthConnectionSettings;
}

export namespace AuthConnectionSettings {
  export type AsObject = {
    issuerUrl: string,
    tenantUrl: string,
    clientId: string,
    connectionId: string,
    secretExpiration?: AuthConnectionSettings.SecretExpiration.AsObject,
    defaultGroup?: GroupItem.AsObject,
    customGroupsList: Array<GroupItem.AsObject>,
    orgId: string,
    name: string,
    type: ConnectionTypeMap[keyof ConnectionTypeMap],
    resourceUrl: string,
    useGovernmentAzure: boolean,
  }

  export class SecretExpiration extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecretExpiration.AsObject;
    static toObject(includeInstance: boolean, msg: SecretExpiration): SecretExpiration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecretExpiration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecretExpiration;
    static deserializeBinaryFromReader(message: SecretExpiration, reader: jspb.BinaryReader): SecretExpiration;
  }

  export namespace SecretExpiration {
    export type AsObject = {
      date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

export class GroupItem extends jspb.Message {
  getGroupName(): string;
  setGroupName(value: string): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  clearPermissionGroupIdsList(): void;
  getPermissionGroupIdsList(): Array<string>;
  setPermissionGroupIdsList(value: Array<string>): void;
  addPermissionGroupIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupItem.AsObject;
  static toObject(includeInstance: boolean, msg: GroupItem): GroupItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupItem;
  static deserializeBinaryFromReader(message: GroupItem, reader: jspb.BinaryReader): GroupItem;
}

export namespace GroupItem {
  export type AsObject = {
    groupName: string,
    huntGroupSid: number,
    agentProfileGroupId: string,
    p3PermissionGroupId: string,
    permissionGroupIdsList: Array<string>,
  }
}

export interface ConnectionTypeMap {
  CONNECTION_TYPE_NONE: 0;
  CONNECTION_TYPE_OIDC: 1;
  CONNECTION_TYPE_AZURE: 2;
}

export const ConnectionType: ConnectionTypeMap;

