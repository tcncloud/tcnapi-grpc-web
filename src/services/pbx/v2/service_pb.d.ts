// package: services.pbx.v2
// file: services/pbx/v2/service.proto

import * as jspb from "google-protobuf";
import * as annotations_authz_pb from "../../../annotations/authz_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class PBXUser extends jspb.Message {
  getPbxUserId(): string;
  setPbxUserId(value: string): void;

  getOrgUserId(): string;
  setOrgUserId(value: string): void;

  clearSipAccountIdsList(): void;
  getSipAccountIdsList(): Array<string>;
  setSipAccountIdsList(value: Array<string>): void;
  addSipAccountIds(value: string, index?: number): string;

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
    sipAccountIdsList: Array<string>,
  }
}

export class SIPAccountRingGroup extends jspb.Message {
  getRingGroupId(): string;
  setRingGroupId(value: string): void;

  getRingGroupName(): string;
  setRingGroupName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SIPAccountRingGroup.AsObject;
  static toObject(includeInstance: boolean, msg: SIPAccountRingGroup): SIPAccountRingGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SIPAccountRingGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SIPAccountRingGroup;
  static deserializeBinaryFromReader(message: SIPAccountRingGroup, reader: jspb.BinaryReader): SIPAccountRingGroup;
}

export namespace SIPAccountRingGroup {
  export type AsObject = {
    ringGroupId: string,
    ringGroupName: string,
  }
}

export class SIPAccountSkill extends jspb.Message {
  getSkillId(): string;
  setSkillId(value: string): void;

  getSkillName(): string;
  setSkillName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SIPAccountSkill.AsObject;
  static toObject(includeInstance: boolean, msg: SIPAccountSkill): SIPAccountSkill.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SIPAccountSkill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SIPAccountSkill;
  static deserializeBinaryFromReader(message: SIPAccountSkill, reader: jspb.BinaryReader): SIPAccountSkill;
}

export namespace SIPAccountSkill {
  export type AsObject = {
    skillId: string,
    skillName: string,
  }
}

export class SIPAccountPermissionGroup extends jspb.Message {
  getPermissionGroupId(): string;
  setPermissionGroupId(value: string): void;

  getPermissionGroupName(): string;
  setPermissionGroupName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SIPAccountPermissionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: SIPAccountPermissionGroup): SIPAccountPermissionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SIPAccountPermissionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SIPAccountPermissionGroup;
  static deserializeBinaryFromReader(message: SIPAccountPermissionGroup, reader: jspb.BinaryReader): SIPAccountPermissionGroup;
}

export namespace SIPAccountPermissionGroup {
  export type AsObject = {
    permissionGroupId: string,
    permissionGroupName: string,
  }
}

export class SIPAccount extends jspb.Message {
  getSipId(): string;
  setSipId(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getExtension$(): string;
  setExtension$(value: string): void;

  clearRingGroupIdsList(): void;
  getRingGroupIdsList(): Array<string>;
  setRingGroupIdsList(value: Array<string>): void;
  addRingGroupIds(value: string, index?: number): string;

  getOrgUserId(): string;
  setOrgUserId(value: string): void;

  clearRingGroupsList(): void;
  getRingGroupsList(): Array<SIPAccountRingGroup>;
  setRingGroupsList(value: Array<SIPAccountRingGroup>): void;
  addRingGroups(value?: SIPAccountRingGroup, index?: number): SIPAccountRingGroup;

  getName(): string;
  setName(value: string): void;

  getHuntGroup(): string;
  setHuntGroup(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<SIPAccountSkill>;
  setSkillsList(value: Array<SIPAccountSkill>): void;
  addSkills(value?: SIPAccountSkill, index?: number): SIPAccountSkill;

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<SIPAccountPermissionGroup>;
  setPermissionGroupsList(value: Array<SIPAccountPermissionGroup>): void;
  addPermissionGroups(value?: SIPAccountPermissionGroup, index?: number): SIPAccountPermissionGroup;

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
    extension: string,
    ringGroupIdsList: Array<string>,
    orgUserId: string,
    ringGroupsList: Array<SIPAccountRingGroup.AsObject>,
    name: string,
    huntGroup: string,
    skillsList: Array<SIPAccountSkill.AsObject>,
    permissionGroupsList: Array<SIPAccountPermissionGroup.AsObject>,
  }
}

export class RingGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExtension$(): string;
  setExtension$(value: string): void;

  getRingStrategy(): RingStrategyMap[keyof RingStrategyMap];
  setRingStrategy(value: RingStrategyMap[keyof RingStrategyMap]): void;

  clearSipAccountIdsList(): void;
  getSipAccountIdsList(): Array<string>;
  setSipAccountIdsList(value: Array<string>): void;
  addSipAccountIds(value: string, index?: number): string;

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
    extension: string,
    ringStrategy: RingStrategyMap[keyof RingStrategyMap],
    sipAccountIdsList: Array<string>,
  }
}

export class ListPBXUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPBXUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPBXUsersRequest): ListPBXUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPBXUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPBXUsersRequest;
  static deserializeBinaryFromReader(message: ListPBXUsersRequest, reader: jspb.BinaryReader): ListPBXUsersRequest;
}

export namespace ListPBXUsersRequest {
  export type AsObject = {
  }
}

export class ListPBXUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<PBXUser>;
  setUsersList(value: Array<PBXUser>): void;
  addUsers(value?: PBXUser, index?: number): PBXUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPBXUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPBXUsersResponse): ListPBXUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPBXUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPBXUsersResponse;
  static deserializeBinaryFromReader(message: ListPBXUsersResponse, reader: jspb.BinaryReader): ListPBXUsersResponse;
}

export namespace ListPBXUsersResponse {
  export type AsObject = {
    usersList: Array<PBXUser.AsObject>,
  }
}

export class ListSIPAccountsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSIPAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSIPAccountsRequest): ListSIPAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSIPAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSIPAccountsRequest;
  static deserializeBinaryFromReader(message: ListSIPAccountsRequest, reader: jspb.BinaryReader): ListSIPAccountsRequest;
}

export namespace ListSIPAccountsRequest {
  export type AsObject = {
  }
}

export class ListSIPAccountsResponse extends jspb.Message {
  clearSipAccountsList(): void;
  getSipAccountsList(): Array<SIPAccount>;
  setSipAccountsList(value: Array<SIPAccount>): void;
  addSipAccounts(value?: SIPAccount, index?: number): SIPAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSIPAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSIPAccountsResponse): ListSIPAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSIPAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSIPAccountsResponse;
  static deserializeBinaryFromReader(message: ListSIPAccountsResponse, reader: jspb.BinaryReader): ListSIPAccountsResponse;
}

export namespace ListSIPAccountsResponse {
  export type AsObject = {
    sipAccountsList: Array<SIPAccount.AsObject>,
  }
}

export class ListSIPAccountsByRingGroupIdRequest extends jspb.Message {
  getRingGroupId(): string;
  setRingGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSIPAccountsByRingGroupIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSIPAccountsByRingGroupIdRequest): ListSIPAccountsByRingGroupIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSIPAccountsByRingGroupIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSIPAccountsByRingGroupIdRequest;
  static deserializeBinaryFromReader(message: ListSIPAccountsByRingGroupIdRequest, reader: jspb.BinaryReader): ListSIPAccountsByRingGroupIdRequest;
}

export namespace ListSIPAccountsByRingGroupIdRequest {
  export type AsObject = {
    ringGroupId: string,
  }
}

export class ListSIPAccountsByRingGroupIdResponse extends jspb.Message {
  clearSipAccountsList(): void;
  getSipAccountsList(): Array<SIPAccount>;
  setSipAccountsList(value: Array<SIPAccount>): void;
  addSipAccounts(value?: SIPAccount, index?: number): SIPAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSIPAccountsByRingGroupIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSIPAccountsByRingGroupIdResponse): ListSIPAccountsByRingGroupIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSIPAccountsByRingGroupIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSIPAccountsByRingGroupIdResponse;
  static deserializeBinaryFromReader(message: ListSIPAccountsByRingGroupIdResponse, reader: jspb.BinaryReader): ListSIPAccountsByRingGroupIdResponse;
}

export namespace ListSIPAccountsByRingGroupIdResponse {
  export type AsObject = {
    sipAccountsList: Array<SIPAccount.AsObject>,
  }
}

export class GetSIPAccountByUserIdRequest extends jspb.Message {
  getOrgUserId(): string;
  setOrgUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSIPAccountByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSIPAccountByUserIdRequest): GetSIPAccountByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSIPAccountByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSIPAccountByUserIdRequest;
  static deserializeBinaryFromReader(message: GetSIPAccountByUserIdRequest, reader: jspb.BinaryReader): GetSIPAccountByUserIdRequest;
}

export namespace GetSIPAccountByUserIdRequest {
  export type AsObject = {
    orgUserId: string,
  }
}

export class GetSIPAccountByUserIdResponse extends jspb.Message {
  hasSipAccount(): boolean;
  clearSipAccount(): void;
  getSipAccount(): SIPAccount | undefined;
  setSipAccount(value?: SIPAccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSIPAccountByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSIPAccountByUserIdResponse): GetSIPAccountByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSIPAccountByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSIPAccountByUserIdResponse;
  static deserializeBinaryFromReader(message: GetSIPAccountByUserIdResponse, reader: jspb.BinaryReader): GetSIPAccountByUserIdResponse;
}

export namespace GetSIPAccountByUserIdResponse {
  export type AsObject = {
    sipAccount?: SIPAccount.AsObject,
  }
}

export class GetSIPAccountRequest extends jspb.Message {
  getSipAccountId(): string;
  setSipAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSIPAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSIPAccountRequest): GetSIPAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSIPAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSIPAccountRequest;
  static deserializeBinaryFromReader(message: GetSIPAccountRequest, reader: jspb.BinaryReader): GetSIPAccountRequest;
}

export namespace GetSIPAccountRequest {
  export type AsObject = {
    sipAccountId: string,
  }
}

export class GetSIPAccountResponse extends jspb.Message {
  clearSipAccountList(): void;
  getSipAccountList(): Array<SIPAccount>;
  setSipAccountList(value: Array<SIPAccount>): void;
  addSipAccount(value?: SIPAccount, index?: number): SIPAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSIPAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSIPAccountResponse): GetSIPAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSIPAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSIPAccountResponse;
  static deserializeBinaryFromReader(message: GetSIPAccountResponse, reader: jspb.BinaryReader): GetSIPAccountResponse;
}

export namespace GetSIPAccountResponse {
  export type AsObject = {
    sipAccountList: Array<SIPAccount.AsObject>,
  }
}

export class GetPBXUserRequest extends jspb.Message {
  getPbxUserId(): string;
  setPbxUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPBXUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPBXUserRequest): GetPBXUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPBXUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPBXUserRequest;
  static deserializeBinaryFromReader(message: GetPBXUserRequest, reader: jspb.BinaryReader): GetPBXUserRequest;
}

export namespace GetPBXUserRequest {
  export type AsObject = {
    pbxUserId: string,
  }
}

export class GetPBXUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): PBXUser | undefined;
  setUser(value?: PBXUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPBXUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPBXUserResponse): GetPBXUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPBXUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPBXUserResponse;
  static deserializeBinaryFromReader(message: GetPBXUserResponse, reader: jspb.BinaryReader): GetPBXUserResponse;
}

export namespace GetPBXUserResponse {
  export type AsObject = {
    user?: PBXUser.AsObject,
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

export class ListRingGroupsBySipIdRequest extends jspb.Message {
  getSipAccountId(): string;
  setSipAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRingGroupsBySipIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRingGroupsBySipIdRequest): ListRingGroupsBySipIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRingGroupsBySipIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRingGroupsBySipIdRequest;
  static deserializeBinaryFromReader(message: ListRingGroupsBySipIdRequest, reader: jspb.BinaryReader): ListRingGroupsBySipIdRequest;
}

export namespace ListRingGroupsBySipIdRequest {
  export type AsObject = {
    sipAccountId: string,
  }
}

export class ListRingGroupsBySipIdResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<RingGroup>;
  setGroupsList(value: Array<RingGroup>): void;
  addGroups(value?: RingGroup, index?: number): RingGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRingGroupsBySipIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRingGroupsBySipIdResponse): ListRingGroupsBySipIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRingGroupsBySipIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRingGroupsBySipIdResponse;
  static deserializeBinaryFromReader(message: ListRingGroupsBySipIdResponse, reader: jspb.BinaryReader): ListRingGroupsBySipIdResponse;
}

export namespace ListRingGroupsBySipIdResponse {
  export type AsObject = {
    groupsList: Array<RingGroup.AsObject>,
  }
}

export class GetRingGroupRequest extends jspb.Message {
  getRingGroupId(): string;
  setRingGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRingGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRingGroupRequest): GetRingGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRingGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRingGroupRequest;
  static deserializeBinaryFromReader(message: GetRingGroupRequest, reader: jspb.BinaryReader): GetRingGroupRequest;
}

export namespace GetRingGroupRequest {
  export type AsObject = {
    ringGroupId: string,
  }
}

export class GetRingGroupResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): RingGroup | undefined;
  setGroup(value?: RingGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRingGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRingGroupResponse): GetRingGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRingGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRingGroupResponse;
  static deserializeBinaryFromReader(message: GetRingGroupResponse, reader: jspb.BinaryReader): GetRingGroupResponse;
}

export namespace GetRingGroupResponse {
  export type AsObject = {
    group?: RingGroup.AsObject,
  }
}

export class UpdateSIPAccountRequest extends jspb.Message {
  hasSipAccount(): boolean;
  clearSipAccount(): void;
  getSipAccount(): SIPAccount | undefined;
  setSipAccount(value?: SIPAccount): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSIPAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSIPAccountRequest): UpdateSIPAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSIPAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSIPAccountRequest;
  static deserializeBinaryFromReader(message: UpdateSIPAccountRequest, reader: jspb.BinaryReader): UpdateSIPAccountRequest;
}

export namespace UpdateSIPAccountRequest {
  export type AsObject = {
    sipAccount?: SIPAccount.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSIPAccountResponse extends jspb.Message {
  hasSipAccount(): boolean;
  clearSipAccount(): void;
  getSipAccount(): SIPAccount | undefined;
  setSipAccount(value?: SIPAccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSIPAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSIPAccountResponse): UpdateSIPAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSIPAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSIPAccountResponse;
  static deserializeBinaryFromReader(message: UpdateSIPAccountResponse, reader: jspb.BinaryReader): UpdateSIPAccountResponse;
}

export namespace UpdateSIPAccountResponse {
  export type AsObject = {
    sipAccount?: SIPAccount.AsObject,
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
  getExtension$(): string;
  setExtension$(value: string): void;

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
    extension: string,
  }
}

export class CreateRingGroupRequest extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): RingGroup | undefined;
  setGroup(value?: RingGroup): void;

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
    group?: RingGroup.AsObject,
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
  RING_STRATEGY_ORDERED: 4;
}

export const RingStrategy: RingStrategyMap;

