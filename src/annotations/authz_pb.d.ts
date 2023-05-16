// package: annotations
// file: annotations/authz.proto

import * as jspb from "google-protobuf";
import * as api_commons_auth_perms_pb from "../api/commons/auth/perms_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Permissions extends jspb.Message {
  clearSetsList(): void;
  getSetsList(): Array<PermissionSet>;
  setSetsList(value: Array<PermissionSet>): void;
  addSets(value?: PermissionSet, index?: number): PermissionSet;

  hasWip(): boolean;
  clearWip(): void;
  getWip(): boolean | undefined;
  setWip(value: boolean): void;

  hasNoPermissions(): boolean;
  clearNoPermissions(): void;
  getNoPermissions(): boolean | undefined;
  setNoPermissions(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permissions.AsObject;
  static toObject(includeInstance: boolean, msg: Permissions): Permissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permissions;
  static deserializeBinaryFromReader(message: Permissions, reader: jspb.BinaryReader): Permissions;
}

export namespace Permissions {
  export type AsObject = {
    setsList: Array<PermissionSet.AsObject>,
    wip?: boolean,
    noPermissions?: boolean,
  }
}

export class PermissionSet extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionSet.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionSet): PermissionSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermissionSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionSet;
  static deserializeBinaryFromReader(message: PermissionSet, reader: jspb.BinaryReader): PermissionSet;
}

export namespace PermissionSet {
  export type AsObject = {
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
  }
}

  export const authz: jspb.ExtensionFieldInfo<Permissions>;

