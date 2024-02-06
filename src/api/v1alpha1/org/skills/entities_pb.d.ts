// package: api.v1alpha1.org.skills
// file: api/v1alpha1/org/skills/entities.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_skill_group_pb from "../../../../api/commons/org/skill_group_pb";

export class CreateSkillGroupRequest extends jspb.Message {
  hasSkillGroup(): boolean;
  clearSkillGroup(): void;
  getSkillGroup(): api_commons_org_skill_group_pb.SkillGroup | undefined;
  setSkillGroup(value?: api_commons_org_skill_group_pb.SkillGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkillGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkillGroupRequest): CreateSkillGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSkillGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkillGroupRequest;
  static deserializeBinaryFromReader(message: CreateSkillGroupRequest, reader: jspb.BinaryReader): CreateSkillGroupRequest;
}

export namespace CreateSkillGroupRequest {
  export type AsObject = {
    skillGroup?: api_commons_org_skill_group_pb.SkillGroup.AsObject,
  }
}

export class CreateSkillGroupResponse extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSkillGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSkillGroupResponse): CreateSkillGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSkillGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSkillGroupResponse;
  static deserializeBinaryFromReader(message: CreateSkillGroupResponse, reader: jspb.BinaryReader): CreateSkillGroupResponse;
}

export namespace CreateSkillGroupResponse {
  export type AsObject = {
    skillGroupId: string,
  }
}

export class ListSkillGroupsRequest extends jspb.Message {
  clearFieldMaskList(): void;
  getFieldMaskList(): Array<string>;
  setFieldMaskList(value: Array<string>): void;
  addFieldMask(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillGroupsRequest): ListSkillGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillGroupsRequest;
  static deserializeBinaryFromReader(message: ListSkillGroupsRequest, reader: jspb.BinaryReader): ListSkillGroupsRequest;
}

export namespace ListSkillGroupsRequest {
  export type AsObject = {
    fieldMaskList: Array<string>,
  }
}

export class ListSkillGroupsResponse extends jspb.Message {
  clearSkillGroupsList(): void;
  getSkillGroupsList(): Array<api_commons_org_skill_group_pb.SkillGroup>;
  setSkillGroupsList(value: Array<api_commons_org_skill_group_pb.SkillGroup>): void;
  addSkillGroups(value?: api_commons_org_skill_group_pb.SkillGroup, index?: number): api_commons_org_skill_group_pb.SkillGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillGroupsResponse): ListSkillGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillGroupsResponse;
  static deserializeBinaryFromReader(message: ListSkillGroupsResponse, reader: jspb.BinaryReader): ListSkillGroupsResponse;
}

export namespace ListSkillGroupsResponse {
  export type AsObject = {
    skillGroupsList: Array<api_commons_org_skill_group_pb.SkillGroup.AsObject>,
  }
}

export class UpdateSkillGroupRequest extends jspb.Message {
  hasSkillGroup(): boolean;
  clearSkillGroup(): void;
  getSkillGroup(): api_commons_org_skill_group_pb.SkillGroup | undefined;
  setSkillGroup(value?: api_commons_org_skill_group_pb.SkillGroup): void;

  clearFieldMaskList(): void;
  getFieldMaskList(): Array<string>;
  setFieldMaskList(value: Array<string>): void;
  addFieldMask(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillGroupRequest): UpdateSkillGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillGroupRequest;
  static deserializeBinaryFromReader(message: UpdateSkillGroupRequest, reader: jspb.BinaryReader): UpdateSkillGroupRequest;
}

export namespace UpdateSkillGroupRequest {
  export type AsObject = {
    skillGroup?: api_commons_org_skill_group_pb.SkillGroup.AsObject,
    fieldMaskList: Array<string>,
  }
}

export class UpdateSkillGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSkillGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSkillGroupResponse): UpdateSkillGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSkillGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSkillGroupResponse;
  static deserializeBinaryFromReader(message: UpdateSkillGroupResponse, reader: jspb.BinaryReader): UpdateSkillGroupResponse;
}

export namespace UpdateSkillGroupResponse {
  export type AsObject = {
  }
}

export class GetSkillGroupRequest extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  clearFieldMaskList(): void;
  getFieldMaskList(): Array<string>;
  setFieldMaskList(value: Array<string>): void;
  addFieldMask(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillGroupRequest): GetSkillGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkillGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillGroupRequest;
  static deserializeBinaryFromReader(message: GetSkillGroupRequest, reader: jspb.BinaryReader): GetSkillGroupRequest;
}

export namespace GetSkillGroupRequest {
  export type AsObject = {
    skillGroupId: string,
    fieldMaskList: Array<string>,
  }
}

export class GetSkillGroupResponse extends jspb.Message {
  hasSkillGroup(): boolean;
  clearSkillGroup(): void;
  getSkillGroup(): api_commons_org_skill_group_pb.SkillGroup | undefined;
  setSkillGroup(value?: api_commons_org_skill_group_pb.SkillGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillGroupResponse): GetSkillGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkillGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillGroupResponse;
  static deserializeBinaryFromReader(message: GetSkillGroupResponse, reader: jspb.BinaryReader): GetSkillGroupResponse;
}

export namespace GetSkillGroupResponse {
  export type AsObject = {
    skillGroup?: api_commons_org_skill_group_pb.SkillGroup.AsObject,
  }
}

export class DeleteSkillGroupRequest extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSkillGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSkillGroupRequest): DeleteSkillGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSkillGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSkillGroupRequest;
  static deserializeBinaryFromReader(message: DeleteSkillGroupRequest, reader: jspb.BinaryReader): DeleteSkillGroupRequest;
}

export namespace DeleteSkillGroupRequest {
  export type AsObject = {
    skillGroupId: string,
  }
}

export class DeleteSkillGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSkillGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSkillGroupResponse): DeleteSkillGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSkillGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSkillGroupResponse;
  static deserializeBinaryFromReader(message: DeleteSkillGroupResponse, reader: jspb.BinaryReader): DeleteSkillGroupResponse;
}

export namespace DeleteSkillGroupResponse {
  export type AsObject = {
  }
}

export class RemoveSkillFromAllGroupsRequest extends jspb.Message {
  getSkillSid(): number;
  setSkillSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveSkillFromAllGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveSkillFromAllGroupsRequest): RemoveSkillFromAllGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveSkillFromAllGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveSkillFromAllGroupsRequest;
  static deserializeBinaryFromReader(message: RemoveSkillFromAllGroupsRequest, reader: jspb.BinaryReader): RemoveSkillFromAllGroupsRequest;
}

export namespace RemoveSkillFromAllGroupsRequest {
  export type AsObject = {
    skillSid: number,
  }
}

export class RemoveSkillFromAllGroupsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveSkillFromAllGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveSkillFromAllGroupsResponse): RemoveSkillFromAllGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveSkillFromAllGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveSkillFromAllGroupsResponse;
  static deserializeBinaryFromReader(message: RemoveSkillFromAllGroupsResponse, reader: jspb.BinaryReader): RemoveSkillFromAllGroupsResponse;
}

export namespace RemoveSkillFromAllGroupsResponse {
  export type AsObject = {
  }
}

export class AssignSkillGroupsRequest extends jspb.Message {
  clearSkillGroupIdsList(): void;
  getSkillGroupIdsList(): Array<string>;
  setSkillGroupIdsList(value: Array<string>): void;
  addSkillGroupIds(value: string, index?: number): string;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignSkillGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignSkillGroupsRequest): AssignSkillGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignSkillGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignSkillGroupsRequest;
  static deserializeBinaryFromReader(message: AssignSkillGroupsRequest, reader: jspb.BinaryReader): AssignSkillGroupsRequest;
}

export namespace AssignSkillGroupsRequest {
  export type AsObject = {
    skillGroupIdsList: Array<string>,
    userId: string,
  }
}

export class AssignSkillGroupsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignSkillGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignSkillGroupsResponse): AssignSkillGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignSkillGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignSkillGroupsResponse;
  static deserializeBinaryFromReader(message: AssignSkillGroupsResponse, reader: jspb.BinaryReader): AssignSkillGroupsResponse;
}

export namespace AssignSkillGroupsResponse {
  export type AsObject = {
  }
}

export class RevokeSkillGroupsRequest extends jspb.Message {
  clearSkillGroupIdsList(): void;
  getSkillGroupIdsList(): Array<string>;
  setSkillGroupIdsList(value: Array<string>): void;
  addSkillGroupIds(value: string, index?: number): string;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeSkillGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeSkillGroupsRequest): RevokeSkillGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeSkillGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeSkillGroupsRequest;
  static deserializeBinaryFromReader(message: RevokeSkillGroupsRequest, reader: jspb.BinaryReader): RevokeSkillGroupsRequest;
}

export namespace RevokeSkillGroupsRequest {
  export type AsObject = {
    skillGroupIdsList: Array<string>,
    userId: string,
  }
}

export class RevokeSkillGroupsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeSkillGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeSkillGroupsResponse): RevokeSkillGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeSkillGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeSkillGroupsResponse;
  static deserializeBinaryFromReader(message: RevokeSkillGroupsResponse, reader: jspb.BinaryReader): RevokeSkillGroupsResponse;
}

export namespace RevokeSkillGroupsResponse {
  export type AsObject = {
  }
}

export class GetUserSkillGroupsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSkillGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSkillGroupsRequest): GetUserSkillGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSkillGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSkillGroupsRequest;
  static deserializeBinaryFromReader(message: GetUserSkillGroupsRequest, reader: jspb.BinaryReader): GetUserSkillGroupsRequest;
}

export namespace GetUserSkillGroupsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserSkillGroupsResponse extends jspb.Message {
  clearSkillGroupIdsList(): void;
  getSkillGroupIdsList(): Array<string>;
  setSkillGroupIdsList(value: Array<string>): void;
  addSkillGroupIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSkillGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSkillGroupsResponse): GetUserSkillGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSkillGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSkillGroupsResponse;
  static deserializeBinaryFromReader(message: GetUserSkillGroupsResponse, reader: jspb.BinaryReader): GetUserSkillGroupsResponse;
}

export namespace GetUserSkillGroupsResponse {
  export type AsObject = {
    skillGroupIdsList: Array<string>,
  }
}

export class GetUserSkillsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSkillsRequest): GetUserSkillsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSkillsRequest;
  static deserializeBinaryFromReader(message: GetUserSkillsRequest, reader: jspb.BinaryReader): GetUserSkillsRequest;
}

export namespace GetUserSkillsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserSkillsResponse extends jspb.Message {
  clearSkillSetsList(): void;
  getSkillSetsList(): Array<api_commons_org_skill_group_pb.SkillSet>;
  setSkillSetsList(value: Array<api_commons_org_skill_group_pb.SkillSet>): void;
  addSkillSets(value?: api_commons_org_skill_group_pb.SkillSet, index?: number): api_commons_org_skill_group_pb.SkillSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSkillsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSkillsResponse): GetUserSkillsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSkillsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSkillsResponse;
  static deserializeBinaryFromReader(message: GetUserSkillsResponse, reader: jspb.BinaryReader): GetUserSkillsResponse;
}

export namespace GetUserSkillsResponse {
  export type AsObject = {
    skillSetsList: Array<api_commons_org_skill_group_pb.SkillSet.AsObject>,
  }
}

export class GetSkillGroupMembersRequest extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillGroupMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillGroupMembersRequest): GetSkillGroupMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkillGroupMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillGroupMembersRequest;
  static deserializeBinaryFromReader(message: GetSkillGroupMembersRequest, reader: jspb.BinaryReader): GetSkillGroupMembersRequest;
}

export namespace GetSkillGroupMembersRequest {
  export type AsObject = {
    skillGroupId: string,
  }
}

export class GetSkillGroupMembersResponse extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkillGroupMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkillGroupMembersResponse): GetSkillGroupMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkillGroupMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkillGroupMembersResponse;
  static deserializeBinaryFromReader(message: GetSkillGroupMembersResponse, reader: jspb.BinaryReader): GetSkillGroupMembersResponse;
}

export namespace GetSkillGroupMembersResponse {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class ListSkillGroupsMembersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillGroupsMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillGroupsMembersRequest): ListSkillGroupsMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillGroupsMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillGroupsMembersRequest;
  static deserializeBinaryFromReader(message: ListSkillGroupsMembersRequest, reader: jspb.BinaryReader): ListSkillGroupsMembersRequest;
}

export namespace ListSkillGroupsMembersRequest {
  export type AsObject = {
  }
}

export class ListSkillGroupsMembersResponse extends jspb.Message {
  clearSkillGroupMembersList(): void;
  getSkillGroupMembersList(): Array<SkillGroupMembers>;
  setSkillGroupMembersList(value: Array<SkillGroupMembers>): void;
  addSkillGroupMembers(value?: SkillGroupMembers, index?: number): SkillGroupMembers;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillGroupsMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillGroupsMembersResponse): ListSkillGroupsMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillGroupsMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillGroupsMembersResponse;
  static deserializeBinaryFromReader(message: ListSkillGroupsMembersResponse, reader: jspb.BinaryReader): ListSkillGroupsMembersResponse;
}

export namespace ListSkillGroupsMembersResponse {
  export type AsObject = {
    skillGroupMembersList: Array<SkillGroupMembers.AsObject>,
  }
}

export class SkillGroupMembers extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillGroupMembers.AsObject;
  static toObject(includeInstance: boolean, msg: SkillGroupMembers): SkillGroupMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkillGroupMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillGroupMembers;
  static deserializeBinaryFromReader(message: SkillGroupMembers, reader: jspb.BinaryReader): SkillGroupMembers;
}

export namespace SkillGroupMembers {
  export type AsObject = {
    skillGroupId: string,
    userIdsList: Array<string>,
  }
}

export class UpdateUsersOnSkillGroupRequest extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUsersOnSkillGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUsersOnSkillGroupRequest): UpdateUsersOnSkillGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUsersOnSkillGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUsersOnSkillGroupRequest;
  static deserializeBinaryFromReader(message: UpdateUsersOnSkillGroupRequest, reader: jspb.BinaryReader): UpdateUsersOnSkillGroupRequest;
}

export namespace UpdateUsersOnSkillGroupRequest {
  export type AsObject = {
    skillGroupId: string,
    userIdsList: Array<string>,
  }
}

export class UpdateUsersOnSkillGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUsersOnSkillGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUsersOnSkillGroupResponse): UpdateUsersOnSkillGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUsersOnSkillGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUsersOnSkillGroupResponse;
  static deserializeBinaryFromReader(message: UpdateUsersOnSkillGroupResponse, reader: jspb.BinaryReader): UpdateUsersOnSkillGroupResponse;
}

export namespace UpdateUsersOnSkillGroupResponse {
  export type AsObject = {
  }
}

export class ListSkillsForCurrentAgentRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillsForCurrentAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillsForCurrentAgentRequest): ListSkillsForCurrentAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillsForCurrentAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillsForCurrentAgentRequest;
  static deserializeBinaryFromReader(message: ListSkillsForCurrentAgentRequest, reader: jspb.BinaryReader): ListSkillsForCurrentAgentRequest;
}

export namespace ListSkillsForCurrentAgentRequest {
  export type AsObject = {
  }
}

export class ListSkillsForCurrentAgentResponse extends jspb.Message {
  clearSkillsList(): void;
  getSkillsList(): Array<ListSkillsForCurrentAgentResponse.AgentSkill>;
  setSkillsList(value: Array<ListSkillsForCurrentAgentResponse.AgentSkill>): void;
  addSkills(value?: ListSkillsForCurrentAgentResponse.AgentSkill, index?: number): ListSkillsForCurrentAgentResponse.AgentSkill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSkillsForCurrentAgentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSkillsForCurrentAgentResponse): ListSkillsForCurrentAgentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSkillsForCurrentAgentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSkillsForCurrentAgentResponse;
  static deserializeBinaryFromReader(message: ListSkillsForCurrentAgentResponse, reader: jspb.BinaryReader): ListSkillsForCurrentAgentResponse;
}

export namespace ListSkillsForCurrentAgentResponse {
  export type AsObject = {
    skillsList: Array<ListSkillsForCurrentAgentResponse.AgentSkill.AsObject>,
  }

  export class AgentSkill extends jspb.Message {
    getAgentSkillSid(): number;
    setAgentSkillSid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentSkill.AsObject;
    static toObject(includeInstance: boolean, msg: AgentSkill): AgentSkill.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentSkill, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentSkill;
    static deserializeBinaryFromReader(message: AgentSkill, reader: jspb.BinaryReader): AgentSkill;
  }

  export namespace AgentSkill {
    export type AsObject = {
      agentSkillSid: number,
      name: string,
      description: string,
    }
  }
}

export class GetAgentSkillsRequest extends jspb.Message {
  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentSkillsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentSkillsRequest): GetAgentSkillsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentSkillsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentSkillsRequest;
  static deserializeBinaryFromReader(message: GetAgentSkillsRequest, reader: jspb.BinaryReader): GetAgentSkillsRequest;
}

export namespace GetAgentSkillsRequest {
  export type AsObject = {
    huntGroupSid: number,
  }
}

export class GetAgentSkillsResponse extends jspb.Message {
  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentSkillsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentSkillsResponse): GetAgentSkillsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentSkillsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentSkillsResponse;
  static deserializeBinaryFromReader(message: GetAgentSkillsResponse, reader: jspb.BinaryReader): GetAgentSkillsResponse;
}

export namespace GetAgentSkillsResponse {
  export type AsObject = {
    skillsMap: Array<[string, number]>,
  }
}

