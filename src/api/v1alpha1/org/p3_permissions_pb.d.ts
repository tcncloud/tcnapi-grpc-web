// package: api.v1alpha1.org
// file: api/v1alpha1/org/p3_permissions.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_permissions_pb from "../../../api/commons/org/permissions_pb";
import * as api_commons_perms_pb from "../../../api/commons/perms_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class CreateP3PermissionGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateP3PermissionGroupRequest): CreateP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: CreateP3PermissionGroupRequest, reader: jspb.BinaryReader): CreateP3PermissionGroupRequest;
}

export namespace CreateP3PermissionGroupRequest {
  export type AsObject = {
    name: string,
    description: string,
    permissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
  }
}

export class CreateP3PermissionGroupResponse extends jspb.Message {
  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateP3PermissionGroupResponse): CreateP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: CreateP3PermissionGroupResponse, reader: jspb.BinaryReader): CreateP3PermissionGroupResponse;
}

export namespace CreateP3PermissionGroupResponse {
  export type AsObject = {
    p3PermissionGroupId: string,
  }
}

export class UpdateP3PermissionGroupRequest extends jspb.Message {
  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): api_commons_org_permissions_pb.P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: api_commons_org_permissions_pb.P3PermissionGroup): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3PermissionGroupRequest): UpdateP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: UpdateP3PermissionGroupRequest, reader: jspb.BinaryReader): UpdateP3PermissionGroupRequest;
}

export namespace UpdateP3PermissionGroupRequest {
  export type AsObject = {
    p3PermissionGroupId: string,
    p3PermissionGroup?: api_commons_org_permissions_pb.P3PermissionGroup.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateP3PermissionGroupResponse extends jspb.Message {
  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): api_commons_org_permissions_pb.P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: api_commons_org_permissions_pb.P3PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3PermissionGroupResponse): UpdateP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: UpdateP3PermissionGroupResponse, reader: jspb.BinaryReader): UpdateP3PermissionGroupResponse;
}

export namespace UpdateP3PermissionGroupResponse {
  export type AsObject = {
    p3PermissionGroup?: api_commons_org_permissions_pb.P3PermissionGroup.AsObject,
  }
}

export class UpdateP3PermissionGroupByOrgIdRequest extends jspb.Message {
  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): api_commons_org_permissions_pb.P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: api_commons_org_permissions_pb.P3PermissionGroup): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3PermissionGroupByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3PermissionGroupByOrgIdRequest): UpdateP3PermissionGroupByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3PermissionGroupByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3PermissionGroupByOrgIdRequest;
  static deserializeBinaryFromReader(message: UpdateP3PermissionGroupByOrgIdRequest, reader: jspb.BinaryReader): UpdateP3PermissionGroupByOrgIdRequest;
}

export namespace UpdateP3PermissionGroupByOrgIdRequest {
  export type AsObject = {
    p3PermissionGroupId: string,
    orgId: string,
    p3PermissionGroup?: api_commons_org_permissions_pb.P3PermissionGroup.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateP3PermissionGroupByOrgIdResponse extends jspb.Message {
  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): api_commons_org_permissions_pb.P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: api_commons_org_permissions_pb.P3PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateP3PermissionGroupByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateP3PermissionGroupByOrgIdResponse): UpdateP3PermissionGroupByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateP3PermissionGroupByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateP3PermissionGroupByOrgIdResponse;
  static deserializeBinaryFromReader(message: UpdateP3PermissionGroupByOrgIdResponse, reader: jspb.BinaryReader): UpdateP3PermissionGroupByOrgIdResponse;
}

export namespace UpdateP3PermissionGroupByOrgIdResponse {
  export type AsObject = {
    p3PermissionGroup?: api_commons_org_permissions_pb.P3PermissionGroup.AsObject,
  }
}

export class DeleteP3PermissionGroupRequest extends jspb.Message {
  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteP3PermissionGroupRequest): DeleteP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: DeleteP3PermissionGroupRequest, reader: jspb.BinaryReader): DeleteP3PermissionGroupRequest;
}

export namespace DeleteP3PermissionGroupRequest {
  export type AsObject = {
    p3PermissionGroupId: string,
  }
}

export class DeleteP3PermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteP3PermissionGroupResponse): DeleteP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: DeleteP3PermissionGroupResponse, reader: jspb.BinaryReader): DeleteP3PermissionGroupResponse;
}

export namespace DeleteP3PermissionGroupResponse {
  export type AsObject = {
  }
}

export class AssignUsersP3PermissionGroupRequest extends jspb.Message {
  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUsersP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUsersP3PermissionGroupRequest): AssignUsersP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUsersP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUsersP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: AssignUsersP3PermissionGroupRequest, reader: jspb.BinaryReader): AssignUsersP3PermissionGroupRequest;
}

export namespace AssignUsersP3PermissionGroupRequest {
  export type AsObject = {
    p3PermissionGroupId: string,
    userIdsList: Array<string>,
  }
}

export class AssignUsersP3PermissionGroupResponse extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUsersP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUsersP3PermissionGroupResponse): AssignUsersP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUsersP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUsersP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: AssignUsersP3PermissionGroupResponse, reader: jspb.BinaryReader): AssignUsersP3PermissionGroupResponse;
}

export namespace AssignUsersP3PermissionGroupResponse {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class RevokeUsersP3PermissionGroupRequest extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUsersP3PermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUsersP3PermissionGroupRequest): RevokeUsersP3PermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUsersP3PermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUsersP3PermissionGroupRequest;
  static deserializeBinaryFromReader(message: RevokeUsersP3PermissionGroupRequest, reader: jspb.BinaryReader): RevokeUsersP3PermissionGroupRequest;
}

export namespace RevokeUsersP3PermissionGroupRequest {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class RevokeUsersP3PermissionGroupResponse extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUsersP3PermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUsersP3PermissionGroupResponse): RevokeUsersP3PermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUsersP3PermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUsersP3PermissionGroupResponse;
  static deserializeBinaryFromReader(message: RevokeUsersP3PermissionGroupResponse, reader: jspb.BinaryReader): RevokeUsersP3PermissionGroupResponse;
}

export namespace RevokeUsersP3PermissionGroupResponse {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class ListP3PermissionGroupsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListP3PermissionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListP3PermissionGroupsRequest): ListP3PermissionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListP3PermissionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListP3PermissionGroupsRequest;
  static deserializeBinaryFromReader(message: ListP3PermissionGroupsRequest, reader: jspb.BinaryReader): ListP3PermissionGroupsRequest;
}

export namespace ListP3PermissionGroupsRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListP3PermissionGroupsResponse extends jspb.Message {
  clearP3PermissionGroupsList(): void;
  getP3PermissionGroupsList(): Array<api_commons_org_permissions_pb.P3PermissionGroup>;
  setP3PermissionGroupsList(value: Array<api_commons_org_permissions_pb.P3PermissionGroup>): void;
  addP3PermissionGroups(value?: api_commons_org_permissions_pb.P3PermissionGroup, index?: number): api_commons_org_permissions_pb.P3PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListP3PermissionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListP3PermissionGroupsResponse): ListP3PermissionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListP3PermissionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListP3PermissionGroupsResponse;
  static deserializeBinaryFromReader(message: ListP3PermissionGroupsResponse, reader: jspb.BinaryReader): ListP3PermissionGroupsResponse;
}

export namespace ListP3PermissionGroupsResponse {
  export type AsObject = {
    p3PermissionGroupsList: Array<api_commons_org_permissions_pb.P3PermissionGroup.AsObject>,
  }
}

