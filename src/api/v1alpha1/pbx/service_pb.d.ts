// package: api.v1alpha1.pbx
// file: api/v1alpha1/pbx/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class HuntGroup extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HuntGroup.AsObject;
  static toObject(includeInstance: boolean, msg: HuntGroup): HuntGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HuntGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HuntGroup;
  static deserializeBinaryFromReader(message: HuntGroup, reader: jspb.BinaryReader): HuntGroup;
}

export namespace HuntGroup {
  export type AsObject = {
    name: string,
  }
}

export class PBXUser extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getExtension$(): number;
  setExtension$(value: number): void;

  clearRingGroupsList(): void;
  getRingGroupsList(): Array<RingGroupDesc>;
  setRingGroupsList(value: Array<RingGroupDesc>): void;
  addRingGroups(value?: RingGroupDesc, index?: number): RingGroupDesc;

  getUserType(): string;
  setUserType(value: string): void;

  getHuntGroup(): string;
  setHuntGroup(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<PermissionGroup>;
  setPermissionGroupsList(value: Array<PermissionGroup>): void;
  addPermissionGroups(value?: PermissionGroup, index?: number): PermissionGroup;

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
    id: string,
    name: string,
    isActive: boolean,
    extension: number,
    ringGroupsList: Array<RingGroupDesc.AsObject>,
    userType: string,
    huntGroup: string,
    skillsList: Array<Skill.AsObject>,
    permissionGroupsList: Array<PermissionGroup.AsObject>,
  }
}

export class PermissionGroup extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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
    name: string,
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

  clearMembersList(): void;
  getMembersList(): Array<PBXUser>;
  setMembersList(value: Array<PBXUser>): void;
  addMembers(value?: PBXUser, index?: number): PBXUser;

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
    membersList: Array<PBXUser.AsObject>,
  }
}

export class RingGroupDesc extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RingGroupDesc.AsObject;
  static toObject(includeInstance: boolean, msg: RingGroupDesc): RingGroupDesc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RingGroupDesc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RingGroupDesc;
  static deserializeBinaryFromReader(message: RingGroupDesc, reader: jspb.BinaryReader): RingGroupDesc;
}

export namespace RingGroupDesc {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
  }
}

export class Skill extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    name: string,
  }
}

export class ActivatePbxUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivatePbxUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivatePbxUserRequest): ActivatePbxUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivatePbxUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivatePbxUserRequest;
  static deserializeBinaryFromReader(message: ActivatePbxUserRequest, reader: jspb.BinaryReader): ActivatePbxUserRequest;
}

export namespace ActivatePbxUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ActivatePbxUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivatePbxUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivatePbxUserResponse): ActivatePbxUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivatePbxUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivatePbxUserResponse;
  static deserializeBinaryFromReader(message: ActivatePbxUserResponse, reader: jspb.BinaryReader): ActivatePbxUserResponse;
}

export namespace ActivatePbxUserResponse {
  export type AsObject = {
  }
}

export class AddUsersToRingGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsersToRingGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsersToRingGroupRequest): AddUsersToRingGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUsersToRingGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsersToRingGroupRequest;
  static deserializeBinaryFromReader(message: AddUsersToRingGroupRequest, reader: jspb.BinaryReader): AddUsersToRingGroupRequest;
}

export namespace AddUsersToRingGroupRequest {
  export type AsObject = {
    groupId: string,
    userIdsList: Array<string>,
  }
}

export class AddUsersToRingGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsersToRingGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsersToRingGroupResponse): AddUsersToRingGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUsersToRingGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsersToRingGroupResponse;
  static deserializeBinaryFromReader(message: AddUsersToRingGroupResponse, reader: jspb.BinaryReader): AddUsersToRingGroupResponse;
}

export namespace AddUsersToRingGroupResponse {
  export type AsObject = {
  }
}

export class AssignRandomGroupExtensionRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRandomGroupExtensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRandomGroupExtensionRequest): AssignRandomGroupExtensionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRandomGroupExtensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRandomGroupExtensionRequest;
  static deserializeBinaryFromReader(message: AssignRandomGroupExtensionRequest, reader: jspb.BinaryReader): AssignRandomGroupExtensionRequest;
}

export namespace AssignRandomGroupExtensionRequest {
  export type AsObject = {
    groupId: string,
  }
}

export class AssignRandomGroupExtensionResponse extends jspb.Message {
  getExtension$(): number;
  setExtension$(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRandomGroupExtensionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRandomGroupExtensionResponse): AssignRandomGroupExtensionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRandomGroupExtensionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRandomGroupExtensionResponse;
  static deserializeBinaryFromReader(message: AssignRandomGroupExtensionResponse, reader: jspb.BinaryReader): AssignRandomGroupExtensionResponse;
}

export namespace AssignRandomGroupExtensionResponse {
  export type AsObject = {
    extension: number,
  }
}

export class AssignRandomUserExtensionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRandomUserExtensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRandomUserExtensionRequest): AssignRandomUserExtensionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRandomUserExtensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRandomUserExtensionRequest;
  static deserializeBinaryFromReader(message: AssignRandomUserExtensionRequest, reader: jspb.BinaryReader): AssignRandomUserExtensionRequest;
}

export namespace AssignRandomUserExtensionRequest {
  export type AsObject = {
    userId: string,
  }
}

export class AssignRandomUserExtensionResponse extends jspb.Message {
  getExtension$(): number;
  setExtension$(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRandomUserExtensionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRandomUserExtensionResponse): AssignRandomUserExtensionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRandomUserExtensionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRandomUserExtensionResponse;
  static deserializeBinaryFromReader(message: AssignRandomUserExtensionResponse, reader: jspb.BinaryReader): AssignRandomUserExtensionResponse;
}

export namespace AssignRandomUserExtensionResponse {
  export type AsObject = {
    extension: number,
  }
}

export class CreateRingGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExtension$(): number;
  setExtension$(value: number): void;

  getRingStrategy(): RingStrategyMap[keyof RingStrategyMap];
  setRingStrategy(value: RingStrategyMap[keyof RingStrategyMap]): void;

  clearMemberIdsList(): void;
  getMemberIdsList(): Array<string>;
  setMemberIdsList(value: Array<string>): void;
  addMemberIds(value: string, index?: number): string;

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
    extension: number,
    ringStrategy: RingStrategyMap[keyof RingStrategyMap],
    memberIdsList: Array<string>,
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

export class DeactivatePbxUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivatePbxUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivatePbxUserRequest): DeactivatePbxUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivatePbxUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivatePbxUserRequest;
  static deserializeBinaryFromReader(message: DeactivatePbxUserRequest, reader: jspb.BinaryReader): DeactivatePbxUserRequest;
}

export namespace DeactivatePbxUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class DeactivatePbxUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivatePbxUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivatePbxUserResponse): DeactivatePbxUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivatePbxUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivatePbxUserResponse;
  static deserializeBinaryFromReader(message: DeactivatePbxUserResponse, reader: jspb.BinaryReader): DeactivatePbxUserResponse;
}

export namespace DeactivatePbxUserResponse {
  export type AsObject = {
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

export class ListPbxUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPbxUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPbxUsersRequest): ListPbxUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPbxUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPbxUsersRequest;
  static deserializeBinaryFromReader(message: ListPbxUsersRequest, reader: jspb.BinaryReader): ListPbxUsersRequest;
}

export namespace ListPbxUsersRequest {
  export type AsObject = {
  }
}

export class ListPbxUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<PBXUser>;
  setUsersList(value: Array<PBXUser>): void;
  addUsers(value?: PBXUser, index?: number): PBXUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPbxUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPbxUsersResponse): ListPbxUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPbxUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPbxUsersResponse;
  static deserializeBinaryFromReader(message: ListPbxUsersResponse, reader: jspb.BinaryReader): ListPbxUsersResponse;
}

export namespace ListPbxUsersResponse {
  export type AsObject = {
    usersList: Array<PBXUser.AsObject>,
  }
}

export class ListRingGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRingGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRingGroupsRequest): ListRingGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRingGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRingGroupsRequest;
  static deserializeBinaryFromReader(message: ListRingGroupsRequest, reader: jspb.BinaryReader): ListRingGroupsRequest;
}

export namespace ListRingGroupsRequest {
  export type AsObject = {
  }
}

export class ListRingGroupsResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<RingGroup>;
  setGroupsList(value: Array<RingGroup>): void;
  addGroups(value?: RingGroup, index?: number): RingGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRingGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRingGroupsResponse): ListRingGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRingGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRingGroupsResponse;
  static deserializeBinaryFromReader(message: ListRingGroupsResponse, reader: jspb.BinaryReader): ListRingGroupsResponse;
}

export namespace ListRingGroupsResponse {
  export type AsObject = {
    groupsList: Array<RingGroup.AsObject>,
  }
}

export class RemoveUsersFromRingGroupRequest extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUsersFromRingGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUsersFromRingGroupRequest): RemoveUsersFromRingGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUsersFromRingGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUsersFromRingGroupRequest;
  static deserializeBinaryFromReader(message: RemoveUsersFromRingGroupRequest, reader: jspb.BinaryReader): RemoveUsersFromRingGroupRequest;
}

export namespace RemoveUsersFromRingGroupRequest {
  export type AsObject = {
    groupId: string,
    userIdsList: Array<string>,
  }
}

export class RemoveUsersFromRingGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUsersFromRingGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUsersFromRingGroupResponse): RemoveUsersFromRingGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUsersFromRingGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUsersFromRingGroupResponse;
  static deserializeBinaryFromReader(message: RemoveUsersFromRingGroupResponse, reader: jspb.BinaryReader): RemoveUsersFromRingGroupResponse;
}

export namespace RemoveUsersFromRingGroupResponse {
  export type AsObject = {
  }
}

export class UpdateRingGroupRequest extends jspb.Message {
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
    id: string,
    name: string,
    description: string,
    extension: number,
    ringStrategy: RingStrategyMap[keyof RingStrategyMap],
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

export class UpdateUserExtensionRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getExtension$(): number;
  setExtension$(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserExtensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserExtensionRequest): UpdateUserExtensionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserExtensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserExtensionRequest;
  static deserializeBinaryFromReader(message: UpdateUserExtensionRequest, reader: jspb.BinaryReader): UpdateUserExtensionRequest;
}

export namespace UpdateUserExtensionRequest {
  export type AsObject = {
    userId: string,
    extension: number,
  }
}

export class UpdateUserExtensionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserExtensionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserExtensionResponse): UpdateUserExtensionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserExtensionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserExtensionResponse;
  static deserializeBinaryFromReader(message: UpdateUserExtensionResponse, reader: jspb.BinaryReader): UpdateUserExtensionResponse;
}

export namespace UpdateUserExtensionResponse {
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

