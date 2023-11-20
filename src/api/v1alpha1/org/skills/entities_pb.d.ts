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
  getOrgId(): string;
  setOrgId(value: string): void;

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
    orgId: string,
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

export class AssignSkillGroupRequest extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignSkillGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignSkillGroupRequest): AssignSkillGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignSkillGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignSkillGroupRequest;
  static deserializeBinaryFromReader(message: AssignSkillGroupRequest, reader: jspb.BinaryReader): AssignSkillGroupRequest;
}

export namespace AssignSkillGroupRequest {
  export type AsObject = {
    skillGroupId: string,
    userId: string,
  }
}

export class AssignSkillGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignSkillGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignSkillGroupResponse): AssignSkillGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignSkillGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignSkillGroupResponse;
  static deserializeBinaryFromReader(message: AssignSkillGroupResponse, reader: jspb.BinaryReader): AssignSkillGroupResponse;
}

export namespace AssignSkillGroupResponse {
  export type AsObject = {
  }
}

export class RevokeSkillGroupRequest extends jspb.Message {
  getSkillGroupId(): string;
  setSkillGroupId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeSkillGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeSkillGroupRequest): RevokeSkillGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeSkillGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeSkillGroupRequest;
  static deserializeBinaryFromReader(message: RevokeSkillGroupRequest, reader: jspb.BinaryReader): RevokeSkillGroupRequest;
}

export namespace RevokeSkillGroupRequest {
  export type AsObject = {
    skillGroupId: string,
    userId: string,
  }
}

export class RevokeSkillGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeSkillGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeSkillGroupResponse): RevokeSkillGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeSkillGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeSkillGroupResponse;
  static deserializeBinaryFromReader(message: RevokeSkillGroupResponse, reader: jspb.BinaryReader): RevokeSkillGroupResponse;
}

export namespace RevokeSkillGroupResponse {
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

