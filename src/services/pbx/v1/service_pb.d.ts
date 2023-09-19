// package: services.pbx.v1
// file: services/pbx/v1/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class PBXUser extends jspb.Message {
  getPbxUserId(): string;
  setPbxUserId(value: string): void;

  getOrgUserId(): string;
  setOrgUserId(value: string): void;

  clearSipAccountsList(): void;
  getSipAccountsList(): Array<SIPAccount>;
  setSipAccountsList(value: Array<SIPAccount>): void;
  addSipAccounts(value?: SIPAccount, index?: number): SIPAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PBXUser.AsObject;
  static toObject(includeInstance: boolean, msg: PBXUser): PBXUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PBXUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PBXUser;
  static deserializeBinaryFromReader(message: PBXUser, reader: jspb.BinaryReader): PBXUser;
}

export namespace PBXUser {
  export type AsObject = {
    pbxUserId: string,
    orgUserId: string,
    sipAccountsList: Array<SIPAccount.AsObject>,
  }
}

export class SIPAccount extends jspb.Message {
  getSipId(): string;
  setSipId(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getExtension$(): number;
  setExtension$(value: number): void;

  clearRingGroupsList(): void;
  getRingGroupsList(): Array<RingGroup>;
  setRingGroupsList(value: Array<RingGroup>): void;
  addRingGroups(value?: RingGroup, index?: number): RingGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SIPAccount.AsObject;
  static toObject(includeInstance: boolean, msg: SIPAccount): SIPAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SIPAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SIPAccount;
  static deserializeBinaryFromReader(message: SIPAccount, reader: jspb.BinaryReader): SIPAccount;
}

export namespace SIPAccount {
  export type AsObject = {
    sipId: string,
    isActive: boolean,
    extension: number,
    ringGroupsList: Array<RingGroup.AsObject>,
  }
}

export class RingGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExtension$(): number;
  setExtension$(value: number): void;

  getRingStrategy(): RingStrategyMap[keyof RingStrategyMap];
  setRingStrategy(value: RingStrategyMap[keyof RingStrategyMap]): void;

  clearPbxUsersList(): void;
  getPbxUsersList(): Array<PBXUser>;
  setPbxUsersList(value: Array<PBXUser>): void;
  addPbxUsers(value?: PBXUser, index?: number): PBXUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RingGroup.AsObject;
  static toObject(includeInstance: boolean, msg: RingGroup): RingGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RingGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RingGroup;
  static deserializeBinaryFromReader(message: RingGroup, reader: jspb.BinaryReader): RingGroup;
}

export namespace RingGroup {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    extension: number,
    ringStrategy: RingStrategyMap[keyof RingStrategyMap],
    pbxUsersList: Array<PBXUser.AsObject>,
  }
}

export class QueryPbxUsersRequest extends jspb.Message {
  getPbxUserId(): string;
  setPbxUserId(value: string): void;

  hasResponseMask(): boolean;
  clearResponseMask(): void;
  getResponseMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setResponseMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPbxUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPbxUsersRequest): QueryPbxUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPbxUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPbxUsersRequest;
  static deserializeBinaryFromReader(message: QueryPbxUsersRequest, reader: jspb.BinaryReader): QueryPbxUsersRequest;
}

export namespace QueryPbxUsersRequest {
  export type AsObject = {
    pbxUserId: string,
    responseMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class QueryPbxUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<PBXUser>;
  setUsersList(value: Array<PBXUser>): void;
  addUsers(value?: PBXUser, index?: number): PBXUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPbxUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPbxUsersResponse): QueryPbxUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPbxUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPbxUsersResponse;
  static deserializeBinaryFromReader(message: QueryPbxUsersResponse, reader: jspb.BinaryReader): QueryPbxUsersResponse;
}

export namespace QueryPbxUsersResponse {
  export type AsObject = {
    usersList: Array<PBXUser.AsObject>,
  }
}

export class QueryRingGroupsRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  hasResponseMask(): boolean;
  clearResponseMask(): void;
  getResponseMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setResponseMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRingGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRingGroupsRequest): QueryRingGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRingGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRingGroupsRequest;
  static deserializeBinaryFromReader(message: QueryRingGroupsRequest, reader: jspb.BinaryReader): QueryRingGroupsRequest;
}

export namespace QueryRingGroupsRequest {
  export type AsObject = {
    groupId: string,
    responseMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class QueryRingGroupsResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<RingGroup>;
  setGroupsList(value: Array<RingGroup>): void;
  addGroups(value?: RingGroup, index?: number): RingGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRingGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRingGroupsResponse): QueryRingGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRingGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRingGroupsResponse;
  static deserializeBinaryFromReader(message: QueryRingGroupsResponse, reader: jspb.BinaryReader): QueryRingGroupsResponse;
}

export namespace QueryRingGroupsResponse {
  export type AsObject = {
    groupsList: Array<RingGroup.AsObject>,
  }
}

export class UpdatePbxUserRequest extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): PBXUser | undefined;
  setUser(value?: PBXUser): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePbxUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePbxUserRequest): UpdatePbxUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePbxUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePbxUserRequest;
  static deserializeBinaryFromReader(message: UpdatePbxUserRequest, reader: jspb.BinaryReader): UpdatePbxUserRequest;
}

export namespace UpdatePbxUserRequest {
  export type AsObject = {
    user?: PBXUser.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdatePbxUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): PBXUser | undefined;
  setUser(value?: PBXUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePbxUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePbxUserResponse): UpdatePbxUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePbxUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePbxUserResponse;
  static deserializeBinaryFromReader(message: UpdatePbxUserResponse, reader: jspb.BinaryReader): UpdatePbxUserResponse;
}

export namespace UpdatePbxUserResponse {
  export type AsObject = {
    user?: PBXUser.AsObject,
  }
}

export class UpdateRingGroupRequest extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): RingGroup | undefined;
  setGroup(value?: RingGroup): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRingGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRingGroupRequest): UpdateRingGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRingGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRingGroupRequest;
  static deserializeBinaryFromReader(message: UpdateRingGroupRequest, reader: jspb.BinaryReader): UpdateRingGroupRequest;
}

export namespace UpdateRingGroupRequest {
  export type AsObject = {
    group?: RingGroup.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateRingGroupResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): RingGroup | undefined;
  setGroup(value?: RingGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRingGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRingGroupResponse): UpdateRingGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRingGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRingGroupResponse;
  static deserializeBinaryFromReader(message: UpdateRingGroupResponse, reader: jspb.BinaryReader): UpdateRingGroupResponse;
}

export namespace UpdateRingGroupResponse {
  export type AsObject = {
    group?: RingGroup.AsObject,
  }
}

export class AssignRandomExtensionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRandomExtensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRandomExtensionRequest): AssignRandomExtensionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRandomExtensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRandomExtensionRequest;
  static deserializeBinaryFromReader(message: AssignRandomExtensionRequest, reader: jspb.BinaryReader): AssignRandomExtensionRequest;
}

export namespace AssignRandomExtensionRequest {
  export type AsObject = {
  }
}

export class AssignRandomExtensionResponse extends jspb.Message {
  getExtension$(): number;
  setExtension$(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRandomExtensionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRandomExtensionResponse): AssignRandomExtensionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRandomExtensionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRandomExtensionResponse;
  static deserializeBinaryFromReader(message: AssignRandomExtensionResponse, reader: jspb.BinaryReader): AssignRandomExtensionResponse;
}

export namespace AssignRandomExtensionResponse {
  export type AsObject = {
    extension: number,
  }
}

export class CreateRingGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRingStrategy(): RingStrategyMap[keyof RingStrategyMap];
  setRingStrategy(value: RingStrategyMap[keyof RingStrategyMap]): void;

  clearPbxUserIdsList(): void;
  getPbxUserIdsList(): Array<string>;
  setPbxUserIdsList(value: Array<string>): void;
  addPbxUserIds(value: string, index?: number): string;

  getExtension$(): number;
  setExtension$(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRingGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRingGroupRequest): CreateRingGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRingGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRingGroupRequest;
  static deserializeBinaryFromReader(message: CreateRingGroupRequest, reader: jspb.BinaryReader): CreateRingGroupRequest;
}

export namespace CreateRingGroupRequest {
  export type AsObject = {
    name: string,
    description: string,
    ringStrategy: RingStrategyMap[keyof RingStrategyMap],
    pbxUserIdsList: Array<string>,
    extension: number,
  }
}

export class CreateRingGroupResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): RingGroup | undefined;
  setGroup(value?: RingGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRingGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRingGroupResponse): CreateRingGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRingGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRingGroupResponse;
  static deserializeBinaryFromReader(message: CreateRingGroupResponse, reader: jspb.BinaryReader): CreateRingGroupResponse;
}

export namespace CreateRingGroupResponse {
  export type AsObject = {
    group?: RingGroup.AsObject,
  }
}

export class DeleteRingGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRingGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRingGroupRequest): DeleteRingGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRingGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRingGroupRequest;
  static deserializeBinaryFromReader(message: DeleteRingGroupRequest, reader: jspb.BinaryReader): DeleteRingGroupRequest;
}

export namespace DeleteRingGroupRequest {
  export type AsObject = {
    groupId: string,
  }
}

export class DeleteRingGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRingGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRingGroupResponse): DeleteRingGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRingGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRingGroupResponse;
  static deserializeBinaryFromReader(message: DeleteRingGroupResponse, reader: jspb.BinaryReader): DeleteRingGroupResponse;
}

export namespace DeleteRingGroupResponse {
  export type AsObject = {
  }
}

export interface RingStrategyMap {
  RING_STRATEGY_UNSPECIFIED: 0;
  RING_STRATEGY_RING_ALL: 1;
  RING_STRATEGY_ROUND_ROBIN: 2;
  RING_STRATEGY_RANDOM: 3;
}

export const RingStrategy: RingStrategyMap;

