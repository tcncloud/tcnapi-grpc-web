// package: api.v1alpha1.org
// file: api/v1alpha1/org/permissions.proto

import * as jspb from "google-protobuf";
import * as api_commons_auth_perms_pb from "../../../api/commons/auth/perms_pb";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_org_labels_pb from "../../../api/commons/org/labels_pb";
import * as api_commons_org_permissions_pb from "../../../api/commons/org/permissions_pb";
import * as api_commons_org_user_pb from "../../../api/commons/org/user_pb";
import * as api_commons_perms_pb from "../../../api/commons/perms_pb";

export class GetPermissionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsRequest): GetPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsRequest;
  static deserializeBinaryFromReader(message: GetPermissionsRequest, reader: jspb.BinaryReader): GetPermissionsRequest;
}

export namespace GetPermissionsRequest {
  export type AsObject = {
  }
}

export class GetPermissionsResponse extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  clearP3PermissionsList(): void;
  getP3PermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setP3PermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addP3Permissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  hasUser(): boolean;
  clearUser(): void;
  getUser(): api_commons_org_user_pb.User | undefined;
  setUser(value?: api_commons_org_user_pb.User): void;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsResponse): GetPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsResponse;
  static deserializeBinaryFromReader(message: GetPermissionsResponse, reader: jspb.BinaryReader): GetPermissionsResponse;
}

export namespace GetPermissionsResponse {
  export type AsObject = {
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
    p3PermissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
    user?: api_commons_org_user_pb.User.AsObject,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
  }
}

export class GetUserPermissionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPermissionsRequest): GetUserPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPermissionsRequest;
  static deserializeBinaryFromReader(message: GetUserPermissionsRequest, reader: jspb.BinaryReader): GetUserPermissionsRequest;
}

export namespace GetUserPermissionsRequest {
  export type AsObject = {
  }
}

export class GetUserPermissionsResponse extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  clearLabelsList(): void;
  getLabelsList(): Array<api_commons_org_labels_pb.Label>;
  setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
  addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPermissionsResponse): GetUserPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPermissionsResponse;
  static deserializeBinaryFromReader(message: GetUserPermissionsResponse, reader: jspb.BinaryReader): GetUserPermissionsResponse;
}

export namespace GetUserPermissionsResponse {
  export type AsObject = {
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
    labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
  }
}

export class CreatePermissionGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePermissionGroupRequest): CreatePermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePermissionGroupRequest;
  static deserializeBinaryFromReader(message: CreatePermissionGroupRequest, reader: jspb.BinaryReader): CreatePermissionGroupRequest;
}

export namespace CreatePermissionGroupRequest {
  export type AsObject = {
    name: string,
    description: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
  }
}

export class CreatePermissionGroupResponse extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePermissionGroupResponse): CreatePermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePermissionGroupResponse;
  static deserializeBinaryFromReader(message: CreatePermissionGroupResponse, reader: jspb.BinaryReader): CreatePermissionGroupResponse;
}

export namespace CreatePermissionGroupResponse {
  export type AsObject = {
    permissionGroupId: string,
  }
}

export class UpdatePermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setPermissionsList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addPermissions(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePermissionGroupRequest): UpdatePermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePermissionGroupRequest;
  static deserializeBinaryFromReader(message: UpdatePermissionGroupRequest, reader: jspb.BinaryReader): UpdatePermissionGroupRequest;
}

export namespace UpdatePermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
    name: string,
    description: string,
    permissionsList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
  }
}

export class UpdatePermissionGroupResponse extends jspb.Message {
  hasPermissionGroup(): boolean;
  clearPermissionGroup(): void;
  getPermissionGroup(): api_commons_org_permissions_pb.PermissionGroup | undefined;
  setPermissionGroup(value?: api_commons_org_permissions_pb.PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePermissionGroupResponse): UpdatePermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePermissionGroupResponse;
  static deserializeBinaryFromReader(message: UpdatePermissionGroupResponse, reader: jspb.BinaryReader): UpdatePermissionGroupResponse;
}

export namespace UpdatePermissionGroupResponse {
  export type AsObject = {
    permissionGroup?: api_commons_org_permissions_pb.PermissionGroup.AsObject,
  }
}

export class DeletePermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePermissionGroupRequest): DeletePermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePermissionGroupRequest;
  static deserializeBinaryFromReader(message: DeletePermissionGroupRequest, reader: jspb.BinaryReader): DeletePermissionGroupRequest;
}

export namespace DeletePermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
  }
}

export class DeletePermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePermissionGroupResponse): DeletePermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePermissionGroupResponse;
  static deserializeBinaryFromReader(message: DeletePermissionGroupResponse, reader: jspb.BinaryReader): DeletePermissionGroupResponse;
}

export namespace DeletePermissionGroupResponse {
  export type AsObject = {
  }
}

export class ListPermissionGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionGroupsRequest): ListPermissionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionGroupsRequest;
  static deserializeBinaryFromReader(message: ListPermissionGroupsRequest, reader: jspb.BinaryReader): ListPermissionGroupsRequest;
}

export namespace ListPermissionGroupsRequest {
  export type AsObject = {
  }
}

export class ListPermissionGroupsResponse extends jspb.Message {
  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<api_commons_org_permissions_pb.PermissionGroup>;
  setPermissionGroupsList(value: Array<api_commons_org_permissions_pb.PermissionGroup>): void;
  addPermissionGroups(value?: api_commons_org_permissions_pb.PermissionGroup, index?: number): api_commons_org_permissions_pb.PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionGroupsResponse): ListPermissionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionGroupsResponse;
  static deserializeBinaryFromReader(message: ListPermissionGroupsResponse, reader: jspb.BinaryReader): ListPermissionGroupsResponse;
}

export namespace ListPermissionGroupsResponse {
  export type AsObject = {
    permissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
  }
}

export class ListPermissionGroupsByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionGroupsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionGroupsByOrgIdRequest): ListPermissionGroupsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionGroupsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionGroupsByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListPermissionGroupsByOrgIdRequest, reader: jspb.BinaryReader): ListPermissionGroupsByOrgIdRequest;
}

export namespace ListPermissionGroupsByOrgIdRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class ListPermissionGroupsByOrgIdResponse extends jspb.Message {
  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<api_commons_org_permissions_pb.PermissionGroup>;
  setPermissionGroupsList(value: Array<api_commons_org_permissions_pb.PermissionGroup>): void;
  addPermissionGroups(value?: api_commons_org_permissions_pb.PermissionGroup, index?: number): api_commons_org_permissions_pb.PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionGroupsByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionGroupsByOrgIdResponse): ListPermissionGroupsByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPermissionGroupsByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionGroupsByOrgIdResponse;
  static deserializeBinaryFromReader(message: ListPermissionGroupsByOrgIdResponse, reader: jspb.BinaryReader): ListPermissionGroupsByOrgIdResponse;
}

export namespace ListPermissionGroupsByOrgIdResponse {
  export type AsObject = {
    permissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
  }
}

export class AssignUsersPermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  clearAssignUserIdsList(): void;
  getAssignUserIdsList(): Array<string>;
  setAssignUserIdsList(value: Array<string>): void;
  addAssignUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUsersPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUsersPermissionGroupRequest): AssignUsersPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUsersPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUsersPermissionGroupRequest;
  static deserializeBinaryFromReader(message: AssignUsersPermissionGroupRequest, reader: jspb.BinaryReader): AssignUsersPermissionGroupRequest;
}

export namespace AssignUsersPermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
    assignUserIdsList: Array<string>,
  }
}

export class AssignUsersPermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignUsersPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignUsersPermissionGroupResponse): AssignUsersPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignUsersPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignUsersPermissionGroupResponse;
  static deserializeBinaryFromReader(message: AssignUsersPermissionGroupResponse, reader: jspb.BinaryReader): AssignUsersPermissionGroupResponse;
}

export namespace AssignUsersPermissionGroupResponse {
  export type AsObject = {
  }
}

export class RevokeUsersPermissionGroupRequest extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  clearRevokeUserIdsList(): void;
  getRevokeUserIdsList(): Array<string>;
  setRevokeUserIdsList(value: Array<string>): void;
  addRevokeUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUsersPermissionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUsersPermissionGroupRequest): RevokeUsersPermissionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUsersPermissionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUsersPermissionGroupRequest;
  static deserializeBinaryFromReader(message: RevokeUsersPermissionGroupRequest, reader: jspb.BinaryReader): RevokeUsersPermissionGroupRequest;
}

export namespace RevokeUsersPermissionGroupRequest {
  export type AsObject = {
    permissionGroupId: string,
    revokeUserIdsList: Array<string>,
  }
}

export class RevokeUsersPermissionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeUsersPermissionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeUsersPermissionGroupResponse): RevokeUsersPermissionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeUsersPermissionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeUsersPermissionGroupResponse;
  static deserializeBinaryFromReader(message: RevokeUsersPermissionGroupResponse, reader: jspb.BinaryReader): RevokeUsersPermissionGroupResponse;
}

export namespace RevokeUsersPermissionGroupResponse {
  export type AsObject = {
  }
}

export class AssignAccountOwnerPermissionToUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignAccountOwnerPermissionToUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignAccountOwnerPermissionToUserRequest): AssignAccountOwnerPermissionToUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignAccountOwnerPermissionToUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignAccountOwnerPermissionToUserRequest;
  static deserializeBinaryFromReader(message: AssignAccountOwnerPermissionToUserRequest, reader: jspb.BinaryReader): AssignAccountOwnerPermissionToUserRequest;
}

export namespace AssignAccountOwnerPermissionToUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class AssignAccountOwnerPermissionToUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignAccountOwnerPermissionToUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignAccountOwnerPermissionToUserResponse): AssignAccountOwnerPermissionToUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignAccountOwnerPermissionToUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignAccountOwnerPermissionToUserResponse;
  static deserializeBinaryFromReader(message: AssignAccountOwnerPermissionToUserResponse, reader: jspb.BinaryReader): AssignAccountOwnerPermissionToUserResponse;
}

export namespace AssignAccountOwnerPermissionToUserResponse {
  export type AsObject = {
  }
}

export class RevokeAccountOwnerPermissionFromUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeAccountOwnerPermissionFromUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeAccountOwnerPermissionFromUserRequest): RevokeAccountOwnerPermissionFromUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeAccountOwnerPermissionFromUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeAccountOwnerPermissionFromUserRequest;
  static deserializeBinaryFromReader(message: RevokeAccountOwnerPermissionFromUserRequest, reader: jspb.BinaryReader): RevokeAccountOwnerPermissionFromUserRequest;
}

export namespace RevokeAccountOwnerPermissionFromUserRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class RevokeAccountOwnerPermissionFromUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeAccountOwnerPermissionFromUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeAccountOwnerPermissionFromUserResponse): RevokeAccountOwnerPermissionFromUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeAccountOwnerPermissionFromUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeAccountOwnerPermissionFromUserResponse;
  static deserializeBinaryFromReader(message: RevokeAccountOwnerPermissionFromUserResponse, reader: jspb.BinaryReader): RevokeAccountOwnerPermissionFromUserResponse;
}

export namespace RevokeAccountOwnerPermissionFromUserResponse {
  export type AsObject = {
  }
}

export class InitDefaultPermissionGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitDefaultPermissionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitDefaultPermissionGroupsRequest): InitDefaultPermissionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitDefaultPermissionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitDefaultPermissionGroupsRequest;
  static deserializeBinaryFromReader(message: InitDefaultPermissionGroupsRequest, reader: jspb.BinaryReader): InitDefaultPermissionGroupsRequest;
}

export namespace InitDefaultPermissionGroupsRequest {
  export type AsObject = {
  }
}

export class InitDefaultPermissionGroupsResponse extends jspb.Message {
  clearDefaultPermissionGroupsList(): void;
  getDefaultPermissionGroupsList(): Array<api_commons_org_permissions_pb.PermissionGroup>;
  setDefaultPermissionGroupsList(value: Array<api_commons_org_permissions_pb.PermissionGroup>): void;
  addDefaultPermissionGroups(value?: api_commons_org_permissions_pb.PermissionGroup, index?: number): api_commons_org_permissions_pb.PermissionGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitDefaultPermissionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitDefaultPermissionGroupsResponse): InitDefaultPermissionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitDefaultPermissionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitDefaultPermissionGroupsResponse;
  static deserializeBinaryFromReader(message: InitDefaultPermissionGroupsResponse, reader: jspb.BinaryReader): InitDefaultPermissionGroupsResponse;
}

export namespace InitDefaultPermissionGroupsResponse {
  export type AsObject = {
    defaultPermissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
  }
}

export class GetAccountOwnerGroupRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountOwnerGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountOwnerGroupRequest): GetAccountOwnerGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountOwnerGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountOwnerGroupRequest;
  static deserializeBinaryFromReader(message: GetAccountOwnerGroupRequest, reader: jspb.BinaryReader): GetAccountOwnerGroupRequest;
}

export namespace GetAccountOwnerGroupRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetAccountOwnerGroupResponse extends jspb.Message {
  hasPermissionGroup(): boolean;
  clearPermissionGroup(): void;
  getPermissionGroup(): api_commons_org_permissions_pb.PermissionGroup | undefined;
  setPermissionGroup(value?: api_commons_org_permissions_pb.PermissionGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountOwnerGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountOwnerGroupResponse): GetAccountOwnerGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountOwnerGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountOwnerGroupResponse;
  static deserializeBinaryFromReader(message: GetAccountOwnerGroupResponse, reader: jspb.BinaryReader): GetAccountOwnerGroupResponse;
}

export namespace GetAccountOwnerGroupResponse {
  export type AsObject = {
    permissionGroup?: api_commons_org_permissions_pb.PermissionGroup.AsObject,
  }
}

export class GetLicensesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicensesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicensesRequest): GetLicensesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLicensesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicensesRequest;
  static deserializeBinaryFromReader(message: GetLicensesRequest, reader: jspb.BinaryReader): GetLicensesRequest;
}

export namespace GetLicensesRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetLicensesResponse extends jspb.Message {
  clearLicensesList(): void;
  getLicensesList(): Array<api_commons_org_permissions_pb.License>;
  setLicensesList(value: Array<api_commons_org_permissions_pb.License>): void;
  addLicenses(value?: api_commons_org_permissions_pb.License, index?: number): api_commons_org_permissions_pb.License;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicensesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicensesResponse): GetLicensesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLicensesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicensesResponse;
  static deserializeBinaryFromReader(message: GetLicensesResponse, reader: jspb.BinaryReader): GetLicensesResponse;
}

export namespace GetLicensesResponse {
  export type AsObject = {
    licensesList: Array<api_commons_org_permissions_pb.License.AsObject>,
  }
}

export class GetOrgLicensesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgLicensesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgLicensesRequest): GetOrgLicensesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgLicensesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgLicensesRequest;
  static deserializeBinaryFromReader(message: GetOrgLicensesRequest, reader: jspb.BinaryReader): GetOrgLicensesRequest;
}

export namespace GetOrgLicensesRequest {
  export type AsObject = {
  }
}

export class GetOrgLicensesResponse extends jspb.Message {
  clearLicensesList(): void;
  getLicensesList(): Array<api_commons_org_permissions_pb.License>;
  setLicensesList(value: Array<api_commons_org_permissions_pb.License>): void;
  addLicenses(value?: api_commons_org_permissions_pb.License, index?: number): api_commons_org_permissions_pb.License;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgLicensesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgLicensesResponse): GetOrgLicensesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgLicensesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgLicensesResponse;
  static deserializeBinaryFromReader(message: GetOrgLicensesResponse, reader: jspb.BinaryReader): GetOrgLicensesResponse;
}

export namespace GetOrgLicensesResponse {
  export type AsObject = {
    licensesList: Array<api_commons_org_permissions_pb.License.AsObject>,
  }
}

export class UpdateLicensesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  clearAddedLicensesList(): void;
  getAddedLicensesList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setAddedLicensesList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addAddedLicenses(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  clearRevokedLicensesList(): void;
  getRevokedLicensesList(): Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>;
  setRevokedLicensesList(value: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>): void;
  addRevokedLicenses(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap], index?: number): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLicensesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLicensesRequest): UpdateLicensesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLicensesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLicensesRequest;
  static deserializeBinaryFromReader(message: UpdateLicensesRequest, reader: jspb.BinaryReader): UpdateLicensesRequest;
}

export namespace UpdateLicensesRequest {
  export type AsObject = {
    orgId: string,
    addedLicensesList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
    revokedLicensesList: Array<api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]>,
  }
}

export class UpdateLicensesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLicensesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLicensesResponse): UpdateLicensesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLicensesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLicensesResponse;
  static deserializeBinaryFromReader(message: UpdateLicensesResponse, reader: jspb.BinaryReader): UpdateLicensesResponse;
}

export namespace UpdateLicensesResponse {
  export type AsObject = {
  }
}

export class RemovePermissionFromAllPermissionGroupsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getPermission(): api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap];
  setPermission(value: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePermissionFromAllPermissionGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePermissionFromAllPermissionGroupsRequest): RemovePermissionFromAllPermissionGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePermissionFromAllPermissionGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePermissionFromAllPermissionGroupsRequest;
  static deserializeBinaryFromReader(message: RemovePermissionFromAllPermissionGroupsRequest, reader: jspb.BinaryReader): RemovePermissionFromAllPermissionGroupsRequest;
}

export namespace RemovePermissionFromAllPermissionGroupsRequest {
  export type AsObject = {
    orgId: string,
    permission: api_commons_auth_perms_pb.PermissionMap[keyof api_commons_auth_perms_pb.PermissionMap],
  }
}

export class RemovePermissionFromAllPermissionGroupsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePermissionFromAllPermissionGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePermissionFromAllPermissionGroupsResponse): RemovePermissionFromAllPermissionGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePermissionFromAllPermissionGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePermissionFromAllPermissionGroupsResponse;
  static deserializeBinaryFromReader(message: RemovePermissionFromAllPermissionGroupsResponse, reader: jspb.BinaryReader): RemovePermissionFromAllPermissionGroupsResponse;
}

export namespace RemovePermissionFromAllPermissionGroupsResponse {
  export type AsObject = {
  }
}

