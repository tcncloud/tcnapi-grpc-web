// package: api.commons.org
// file: api/commons/org/permissions.proto

import * as jspb from "google-protobuf";
import * as annotations_perms_license_pb from "../../../annotations/perms/license_pb";
import * as api_commons_auth_perms_pb from "../../../api/commons/auth/perms_pb";
import * as api_commons_perms_pb from "../../../api/commons/perms_pb";

export class PermissionGroup extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  getReadOnly(): boolean;
  setReadOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionGroup): PermissionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermissionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionGroup;
  static deserializeBinaryFromReader(message: PermissionGroup, reader: jspb.BinaryReader): PermissionGroup;
}

export namespace PermissionGroup {
  export type AsObject = {
    permissionGroupId: string,
    orgId: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
    readOnly: boolean,
  }
}

export class P3PermissionGroup extends jspb.Message {
  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): P3PermissionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: P3PermissionGroup): P3PermissionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: P3PermissionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): P3PermissionGroup;
  static deserializeBinaryFromReader(message: P3PermissionGroup, reader: jspb.BinaryReader): P3PermissionGroup;
}

export namespace P3PermissionGroup {
  export type AsObject = {
    p3PermissionGroupId: string,
    orgId: string,
    regionId: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
  }
}

export class License extends jspb.Message {
  getApp(): annotations_perms_license_pb.ApplicationMap[keyof annotations_perms_license_pb.ApplicationMap];
  setApp(value: annotations_perms_license_pb.ApplicationMap[keyof annotations_perms_license_pb.ApplicationMap]): void;

  clearCardsList(): void;
  getCardsList(): Array<License.Card>;
  setCardsList(value: Array<License.Card>): void;
  addCards(value?: License.Card, index?: number): License.Card;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): License.AsObject;
  static toObject(includeInstance: boolean, msg: License): License.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: License, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): License;
  static deserializeBinaryFromReader(message: License, reader: jspb.BinaryReader): License;
}

export namespace License {
  export type AsObject = {
    app: annotations_perms_license_pb.ApplicationMap[keyof annotations_perms_license_pb.ApplicationMap],
    cardsList: Array<License.Card.AsObject>,
  }

  export class Card extends jspb.Message {
    getType(): annotations_perms_license_pb.CardMap[keyof annotations_perms_license_pb.CardMap];
    setType(value: annotations_perms_license_pb.CardMap[keyof annotations_perms_license_pb.CardMap]): void;

    clearPermissionsList(): void;
    getPermissionsList(): Array<License.Permission>;
    setPermissionsList(value: Array<License.Permission>): void;
    addPermissions(value?: License.Permission, index?: number): License.Permission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Card.AsObject;
    static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Card;
    static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
  }

  export namespace Card {
    export type AsObject = {
      type: annotations_perms_license_pb.CardMap[keyof annotations_perms_license_pb.CardMap],
      permissionsList: Array<License.Permission.AsObject>,
    }
  }

  export class Permission extends jspb.Message {
    getPermission(): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];
    setPermission(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]): void;

    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    clearFeaturesList(): void;
    getFeaturesList(): Array<string>;
    setFeaturesList(value: Array<string>): void;
    addFeatures(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Permission.AsObject;
    static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Permission;
    static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
  }

  export namespace Permission {
    export type AsObject = {
      permission: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap],
      enabled: boolean,
      featuresList: Array<string>,
    }
  }
}

