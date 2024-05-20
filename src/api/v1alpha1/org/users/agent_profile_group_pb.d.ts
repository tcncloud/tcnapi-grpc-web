// package: api.v1alpha1.org.users
// file: api/v1alpha1/org/users/agent_profile_group.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_agent_profile_group_pb from "../../../../api/commons/org/agent_profile_group_pb";

export class GetAgentProfileGroupRequest extends jspb.Message {
  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentProfileGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentProfileGroupRequest): GetAgentProfileGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentProfileGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentProfileGroupRequest;
  static deserializeBinaryFromReader(message: GetAgentProfileGroupRequest, reader: jspb.BinaryReader): GetAgentProfileGroupRequest;
}

export namespace GetAgentProfileGroupRequest {
  export type AsObject = {
    agentProfileGroupId: string,
  }
}

export class GetAgentProfileGroupResponse extends jspb.Message {
  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): api_commons_org_agent_profile_group_pb.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: api_commons_org_agent_profile_group_pb.AgentProfileGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentProfileGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentProfileGroupResponse): GetAgentProfileGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentProfileGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentProfileGroupResponse;
  static deserializeBinaryFromReader(message: GetAgentProfileGroupResponse, reader: jspb.BinaryReader): GetAgentProfileGroupResponse;
}

export namespace GetAgentProfileGroupResponse {
  export type AsObject = {
    agentProfileGroup?: api_commons_org_agent_profile_group_pb.AgentProfileGroup.AsObject,
  }
}

export class UpdateAgentProfileGroupRequest extends jspb.Message {
  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): api_commons_org_agent_profile_group_pb.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: api_commons_org_agent_profile_group_pb.AgentProfileGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentProfileGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentProfileGroupRequest): UpdateAgentProfileGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentProfileGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentProfileGroupRequest;
  static deserializeBinaryFromReader(message: UpdateAgentProfileGroupRequest, reader: jspb.BinaryReader): UpdateAgentProfileGroupRequest;
}

export namespace UpdateAgentProfileGroupRequest {
  export type AsObject = {
    agentProfileGroup?: api_commons_org_agent_profile_group_pb.AgentProfileGroup.AsObject,
  }
}

export class UpdateAgentProfileGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAgentProfileGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAgentProfileGroupResponse): UpdateAgentProfileGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAgentProfileGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAgentProfileGroupResponse;
  static deserializeBinaryFromReader(message: UpdateAgentProfileGroupResponse, reader: jspb.BinaryReader): UpdateAgentProfileGroupResponse;
}

export namespace UpdateAgentProfileGroupResponse {
  export type AsObject = {
  }
}

export class ListAgentProfileGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentProfileGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentProfileGroupsRequest): ListAgentProfileGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentProfileGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentProfileGroupsRequest;
  static deserializeBinaryFromReader(message: ListAgentProfileGroupsRequest, reader: jspb.BinaryReader): ListAgentProfileGroupsRequest;
}

export namespace ListAgentProfileGroupsRequest {
  export type AsObject = {
  }
}

export class ListAgentProfileGroupsResponse extends jspb.Message {
  clearAgentProfileGroupsList(): void;
  getAgentProfileGroupsList(): Array<api_commons_org_agent_profile_group_pb.AgentProfileGroup>;
  setAgentProfileGroupsList(value: Array<api_commons_org_agent_profile_group_pb.AgentProfileGroup>): void;
  addAgentProfileGroups(value?: api_commons_org_agent_profile_group_pb.AgentProfileGroup, index?: number): api_commons_org_agent_profile_group_pb.AgentProfileGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentProfileGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentProfileGroupsResponse): ListAgentProfileGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentProfileGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentProfileGroupsResponse;
  static deserializeBinaryFromReader(message: ListAgentProfileGroupsResponse, reader: jspb.BinaryReader): ListAgentProfileGroupsResponse;
}

export namespace ListAgentProfileGroupsResponse {
  export type AsObject = {
    agentProfileGroupsList: Array<api_commons_org_agent_profile_group_pb.AgentProfileGroup.AsObject>,
  }
}

export class CreateAgentProfileGroupRequest extends jspb.Message {
  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): api_commons_org_agent_profile_group_pb.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: api_commons_org_agent_profile_group_pb.AgentProfileGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentProfileGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentProfileGroupRequest): CreateAgentProfileGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentProfileGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentProfileGroupRequest;
  static deserializeBinaryFromReader(message: CreateAgentProfileGroupRequest, reader: jspb.BinaryReader): CreateAgentProfileGroupRequest;
}

export namespace CreateAgentProfileGroupRequest {
  export type AsObject = {
    agentProfileGroup?: api_commons_org_agent_profile_group_pb.AgentProfileGroup.AsObject,
  }
}

export class CreateAgentProfileGroupResponse extends jspb.Message {
  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAgentProfileGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAgentProfileGroupResponse): CreateAgentProfileGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAgentProfileGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAgentProfileGroupResponse;
  static deserializeBinaryFromReader(message: CreateAgentProfileGroupResponse, reader: jspb.BinaryReader): CreateAgentProfileGroupResponse;
}

export namespace CreateAgentProfileGroupResponse {
  export type AsObject = {
    agentProfileGroupId: string,
  }
}

export class DeleteAgentProfileGroupRequest extends jspb.Message {
  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentProfileGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentProfileGroupRequest): DeleteAgentProfileGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentProfileGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentProfileGroupRequest;
  static deserializeBinaryFromReader(message: DeleteAgentProfileGroupRequest, reader: jspb.BinaryReader): DeleteAgentProfileGroupRequest;
}

export namespace DeleteAgentProfileGroupRequest {
  export type AsObject = {
    agentProfileGroupId: string,
  }
}

export class DeleteAgentProfileGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentProfileGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentProfileGroupResponse): DeleteAgentProfileGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAgentProfileGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentProfileGroupResponse;
  static deserializeBinaryFromReader(message: DeleteAgentProfileGroupResponse, reader: jspb.BinaryReader): DeleteAgentProfileGroupResponse;
}

export namespace DeleteAgentProfileGroupResponse {
  export type AsObject = {
  }
}

export class AssignAgentProfileGroupsRequest extends jspb.Message {
  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
  addUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignAgentProfileGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignAgentProfileGroupsRequest): AssignAgentProfileGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignAgentProfileGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignAgentProfileGroupsRequest;
  static deserializeBinaryFromReader(message: AssignAgentProfileGroupsRequest, reader: jspb.BinaryReader): AssignAgentProfileGroupsRequest;
}

export namespace AssignAgentProfileGroupsRequest {
  export type AsObject = {
    agentProfileGroupId: string,
    userIdsList: Array<string>,
  }
}

export class AssignAgentProfileGroupsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignAgentProfileGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignAgentProfileGroupsResponse): AssignAgentProfileGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignAgentProfileGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignAgentProfileGroupsResponse;
  static deserializeBinaryFromReader(message: AssignAgentProfileGroupsResponse, reader: jspb.BinaryReader): AssignAgentProfileGroupsResponse;
}

export namespace AssignAgentProfileGroupsResponse {
  export type AsObject = {
  }
}

