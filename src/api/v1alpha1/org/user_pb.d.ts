// package: api.v1alpha1.org
// file: api/v1alpha1/org/user.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_org_labels_pb from "../../../api/commons/org/labels_pb";
import * as api_commons_org_permissions_pb from "../../../api/commons/org/permissions_pb";
import * as api_commons_org_trusts_pb from "../../../api/commons/org/trusts_pb";
import * as api_commons_org_user_pb from "../../../api/commons/org/user_pb";
import * as api_commons_perms_pb from "../../../api/commons/perms_pb";
import * as api_commons_user_pb from "../../../api/commons/user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class CreateUserRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUserName(): string;
  setUserName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  clearPermissionGroupIdsList(): void;
  getPermissionGroupIdsList(): Array<string>;
  setPermissionGroupIdsList(value: Array<string>): void;
  addPermissionGroupIds(value: string, index?: number): string;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearLabelIdsList(): void;
  getLabelIdsList(): Array<string>;
  setLabelIdsList(value: Array<string>): void;
  addLabelIds(value: string, index?: number): string;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  getHuntGroupSid(): number;
  setHuntGroupSid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    orgId: string,
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    permissionGroupIdsList: Array<string>,
    partnerAgentId: string,
    p3PermissionGroupId: string,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    userCallerId: string,
    agentProfileGroupId: string,
    labelIdsList: Array<string>,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    huntGroupSid: number,
  }
}

export class CreateUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    userId: string,
  }
}

export class CreateDelegatedUserRequest extends jspb.Message {
  getAuthUserId(): string;
  setAuthUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  clearGroupsList(): void;
  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): void;
  addGroups(value: string, index?: number): string;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDelegatedUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDelegatedUserRequest): CreateDelegatedUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDelegatedUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDelegatedUserRequest;
  static deserializeBinaryFromReader(message: CreateDelegatedUserRequest, reader: jspb.BinaryReader): CreateDelegatedUserRequest;
}

export namespace CreateDelegatedUserRequest {
  export type AsObject = {
    authUserId: string,
    orgId: string,
    email: string,
    username: string,
    firstName: string,
    lastName: string,
    groupsList: Array<string>,
    connectionId: string,
  }
}

export class CreateDelegatedUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDelegatedUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDelegatedUserResponse): CreateDelegatedUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDelegatedUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDelegatedUserResponse;
  static deserializeBinaryFromReader(message: CreateDelegatedUserResponse, reader: jspb.BinaryReader): CreateDelegatedUserResponse;
}

export namespace CreateDelegatedUserResponse {
  export type AsObject = {
    userId: string,
  }
}

export class GetMyUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserRequest): GetMyUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserRequest;
  static deserializeBinaryFromReader(message: GetMyUserRequest, reader: jspb.BinaryReader): GetMyUserRequest;
}

export namespace GetMyUserRequest {
  export type AsObject = {
  }
}

export class GetMyUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getDelegated(): boolean;
  setDelegated(value: boolean): void;

  getOrgName(): string;
  setOrgName(value: string): void;

  hasHuntGroup(): boolean;
  clearHuntGroup(): void;
  getHuntGroup(): GetMyUserResponse.HuntGroup | undefined;
  setHuntGroup(value?: GetMyUserResponse.HuntGroup): void;

  clearLabelsList(): void;
  getLabelsList(): Array<api_commons_org_labels_pb.Label>;
  setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
  addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

  clearSkillsList(): void;
  getSkillsList(): Array<api_commons_org_user_pb.Skill>;
  setSkillsList(value: Array<api_commons_org_user_pb.Skill>): void;
  addSkills(value?: api_commons_org_user_pb.Skill, index?: number): api_commons_org_user_pb.Skill;

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<api_commons_org_permissions_pb.PermissionGroup>;
  setPermissionGroupsList(value: Array<api_commons_org_permissions_pb.PermissionGroup>): void;
  addPermissionGroups(value?: api_commons_org_permissions_pb.PermissionGroup, index?: number): api_commons_org_permissions_pb.PermissionGroup;

  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): api_commons_org_permissions_pb.P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: api_commons_org_permissions_pb.P3PermissionGroup): void;

  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): GetMyUserResponse.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: GetMyUserResponse.AgentProfileGroup): void;

  clearTrustsList(): void;
  getTrustsList(): Array<api_commons_org_trusts_pb.Trust>;
  setTrustsList(value: Array<api_commons_org_trusts_pb.Trust>): void;
  addTrusts(value?: api_commons_org_trusts_pb.Trust, index?: number): api_commons_org_trusts_pb.Trust;

  getAccountOwner(): boolean;
  setAccountOwner(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserResponse): GetMyUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserResponse;
  static deserializeBinaryFromReader(message: GetMyUserResponse, reader: jspb.BinaryReader): GetMyUserResponse;
}

export namespace GetMyUserResponse {
  export type AsObject = {
    userId: string,
    orgId: string,
    username: string,
    delegated: boolean,
    orgName: string,
    huntGroup?: GetMyUserResponse.HuntGroup.AsObject,
    labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
    skillsList: Array<api_commons_org_user_pb.Skill.AsObject>,
    permissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
    p3PermissionGroup?: api_commons_org_permissions_pb.P3PermissionGroup.AsObject,
    agentProfileGroup?: GetMyUserResponse.AgentProfileGroup.AsObject,
    trustsList: Array<api_commons_org_trusts_pb.Trust.AsObject>,
    accountOwner: boolean,
  }

  export class HuntGroup extends jspb.Message {
    getHuntGroupSid(): number;
    setHuntGroupSid(value: number): void;

    getHuntGroupName(): string;
    setHuntGroupName(value: string): void;

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
      huntGroupSid: number,
      huntGroupName: string,
    }
  }

  export class AgentProfileGroup extends jspb.Message {
    getAgentProfileGroupId(): string;
    setAgentProfileGroupId(value: string): void;

    getAgentProfileGroupName(): string;
    setAgentProfileGroupName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentProfileGroup.AsObject;
    static toObject(includeInstance: boolean, msg: AgentProfileGroup): AgentProfileGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentProfileGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentProfileGroup;
    static deserializeBinaryFromReader(message: AgentProfileGroup, reader: jspb.BinaryReader): AgentProfileGroup;
  }

  export namespace AgentProfileGroup {
    export type AsObject = {
      agentProfileGroupId: string,
      agentProfileGroupName: string,
    }
  }
}

export class GetUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getDelegated(): boolean;
  setDelegated(value: boolean): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  hasHuntGroup(): boolean;
  clearHuntGroup(): void;
  getHuntGroup(): GetUserResponse.HuntGroup | undefined;
  setHuntGroup(value?: GetUserResponse.HuntGroup): void;

  clearLabelsList(): void;
  getLabelsList(): Array<api_commons_org_labels_pb.Label>;
  setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
  addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

  clearSkillsList(): void;
  getSkillsList(): Array<api_commons_org_user_pb.Skill>;
  setSkillsList(value: Array<api_commons_org_user_pb.Skill>): void;
  addSkills(value?: api_commons_org_user_pb.Skill, index?: number): api_commons_org_user_pb.Skill;

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<api_commons_org_permissions_pb.PermissionGroup>;
  setPermissionGroupsList(value: Array<api_commons_org_permissions_pb.PermissionGroup>): void;
  addPermissionGroups(value?: api_commons_org_permissions_pb.PermissionGroup, index?: number): api_commons_org_permissions_pb.PermissionGroup;

  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): api_commons_org_permissions_pb.P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: api_commons_org_permissions_pb.P3PermissionGroup): void;

  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): GetUserResponse.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: GetUserResponse.AgentProfileGroup): void;

  getOrgName(): string;
  setOrgName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getLoginDisabled(): boolean;
  setLoginDisabled(value: boolean): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  clearTrustsList(): void;
  getTrustsList(): Array<api_commons_org_trusts_pb.Trust>;
  setTrustsList(value: Array<api_commons_org_trusts_pb.Trust>): void;
  addTrusts(value?: api_commons_org_trusts_pb.Trust, index?: number): api_commons_org_trusts_pb.Trust;

  getEmail(): string;
  setEmail(value: string): void;

  getDefaultRegion(): string;
  setDefaultRegion(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPasswordResetRequired(): boolean;
  setPasswordResetRequired(value: boolean): void;

  getAccountOwner(): boolean;
  setAccountOwner(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    userId: string,
    orgId: string,
    delegated: boolean,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    huntGroup?: GetUserResponse.HuntGroup.AsObject,
    labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
    skillsList: Array<api_commons_org_user_pb.Skill.AsObject>,
    permissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
    p3PermissionGroup?: api_commons_org_permissions_pb.P3PermissionGroup.AsObject,
    agentProfileGroup?: GetUserResponse.AgentProfileGroup.AsObject,
    orgName: string,
    firstName: string,
    username: string,
    lastName: string,
    loginDisabled: boolean,
    partnerAgentId: string,
    userCallerId: string,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    loginSid: number,
    agentSid: number,
    trustsList: Array<api_commons_org_trusts_pb.Trust.AsObject>,
    email: string,
    defaultRegion: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    passwordResetRequired: boolean,
    accountOwner: boolean,
  }

  export class HuntGroup extends jspb.Message {
    getHuntGroupSid(): number;
    setHuntGroupSid(value: number): void;

    getHuntGroupName(): string;
    setHuntGroupName(value: string): void;

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
      huntGroupSid: number,
      huntGroupName: string,
    }
  }

  export class AgentProfileGroup extends jspb.Message {
    getAgentProfileGroupId(): string;
    setAgentProfileGroupId(value: string): void;

    getAgentProfileGroupName(): string;
    setAgentProfileGroupName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentProfileGroup.AsObject;
    static toObject(includeInstance: boolean, msg: AgentProfileGroup): AgentProfileGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentProfileGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentProfileGroup;
    static deserializeBinaryFromReader(message: AgentProfileGroup, reader: jspb.BinaryReader): AgentProfileGroup;
  }

  export namespace AgentProfileGroup {
    export type AsObject = {
      agentProfileGroupId: string,
      agentProfileGroupName: string,
    }
  }
}

export class GetUserByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByOrgIdRequest): GetUserByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByOrgIdRequest;
  static deserializeBinaryFromReader(message: GetUserByOrgIdRequest, reader: jspb.BinaryReader): GetUserByOrgIdRequest;
}

export namespace GetUserByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class GetUserByOrgIdResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getDelegated(): boolean;
  setDelegated(value: boolean): void;

  getOrgName(): string;
  setOrgName(value: string): void;

  hasHuntGroup(): boolean;
  clearHuntGroup(): void;
  getHuntGroup(): GetUserByOrgIdResponse.HuntGroup | undefined;
  setHuntGroup(value?: GetUserByOrgIdResponse.HuntGroup): void;

  clearLabelsList(): void;
  getLabelsList(): Array<api_commons_org_labels_pb.Label>;
  setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
  addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

  clearSkillsList(): void;
  getSkillsList(): Array<api_commons_org_user_pb.Skill>;
  setSkillsList(value: Array<api_commons_org_user_pb.Skill>): void;
  addSkills(value?: api_commons_org_user_pb.Skill, index?: number): api_commons_org_user_pb.Skill;

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<api_commons_org_permissions_pb.PermissionGroup>;
  setPermissionGroupsList(value: Array<api_commons_org_permissions_pb.PermissionGroup>): void;
  addPermissionGroups(value?: api_commons_org_permissions_pb.PermissionGroup, index?: number): api_commons_org_permissions_pb.PermissionGroup;

  hasP3PermissionGroup(): boolean;
  clearP3PermissionGroup(): void;
  getP3PermissionGroup(): api_commons_org_permissions_pb.P3PermissionGroup | undefined;
  setP3PermissionGroup(value?: api_commons_org_permissions_pb.P3PermissionGroup): void;

  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): GetUserByOrgIdResponse.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: GetUserByOrgIdResponse.AgentProfileGroup): void;

  clearTrustsList(): void;
  getTrustsList(): Array<api_commons_org_trusts_pb.Trust>;
  setTrustsList(value: Array<api_commons_org_trusts_pb.Trust>): void;
  addTrusts(value?: api_commons_org_trusts_pb.Trust, index?: number): api_commons_org_trusts_pb.Trust;

  getAccountOwner(): boolean;
  setAccountOwner(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByOrgIdResponse): GetUserByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByOrgIdResponse;
  static deserializeBinaryFromReader(message: GetUserByOrgIdResponse, reader: jspb.BinaryReader): GetUserByOrgIdResponse;
}

export namespace GetUserByOrgIdResponse {
  export type AsObject = {
    userId: string,
    orgId: string,
    username: string,
    delegated: boolean,
    orgName: string,
    huntGroup?: GetUserByOrgIdResponse.HuntGroup.AsObject,
    labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
    skillsList: Array<api_commons_org_user_pb.Skill.AsObject>,
    permissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
    p3PermissionGroup?: api_commons_org_permissions_pb.P3PermissionGroup.AsObject,
    agentProfileGroup?: GetUserByOrgIdResponse.AgentProfileGroup.AsObject,
    trustsList: Array<api_commons_org_trusts_pb.Trust.AsObject>,
    accountOwner: boolean,
  }

  export class HuntGroup extends jspb.Message {
    getHuntGroupSid(): number;
    setHuntGroupSid(value: number): void;

    getHuntGroupName(): string;
    setHuntGroupName(value: string): void;

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
      huntGroupSid: number,
      huntGroupName: string,
    }
  }

  export class AgentProfileGroup extends jspb.Message {
    getAgentProfileGroupId(): string;
    setAgentProfileGroupId(value: string): void;

    getAgentProfileGroupName(): string;
    setAgentProfileGroupName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentProfileGroup.AsObject;
    static toObject(includeInstance: boolean, msg: AgentProfileGroup): AgentProfileGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentProfileGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentProfileGroup;
    static deserializeBinaryFromReader(message: AgentProfileGroup, reader: jspb.BinaryReader): AgentProfileGroup;
  }

  export namespace AgentProfileGroup {
    export type AsObject = {
      agentProfileGroupId: string,
      agentProfileGroupName: string,
    }
  }
}

export class ListAgentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentsRequest): ListAgentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentsRequest;
  static deserializeBinaryFromReader(message: ListAgentsRequest, reader: jspb.BinaryReader): ListAgentsRequest;
}

export namespace ListAgentsRequest {
  export type AsObject = {
  }
}

export class ListAgentsResponse extends jspb.Message {
  clearAgentsList(): void;
  getAgentsList(): Array<ListAgentsResponse.AgentDetails>;
  setAgentsList(value: Array<ListAgentsResponse.AgentDetails>): void;
  addAgents(value?: ListAgentsResponse.AgentDetails, index?: number): ListAgentsResponse.AgentDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAgentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAgentsResponse): ListAgentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAgentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAgentsResponse;
  static deserializeBinaryFromReader(message: ListAgentsResponse, reader: jspb.BinaryReader): ListAgentsResponse;
}

export namespace ListAgentsResponse {
  export type AsObject = {
    agentsList: Array<ListAgentsResponse.AgentDetails.AsObject>,
  }

  export class AgentDetails extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): void;

    getOrgId(): string;
    setOrgId(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    clearSkillsList(): void;
    getSkillsList(): Array<api_commons_org_user_pb.Skill>;
    setSkillsList(value: Array<api_commons_org_user_pb.Skill>): void;
    addSkills(value?: api_commons_org_user_pb.Skill, index?: number): api_commons_org_user_pb.Skill;

    getLoginDisabled(): boolean;
    setLoginDisabled(value: boolean): void;

    hasHuntGroup(): boolean;
    clearHuntGroup(): void;
    getHuntGroup(): ListAgentsResponse.AgentDetails.HuntGroup | undefined;
    setHuntGroup(value?: ListAgentsResponse.AgentDetails.HuntGroup): void;

    clearLabelsList(): void;
    getLabelsList(): Array<api_commons_org_labels_pb.Label>;
    setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
    addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

    getDelegated(): boolean;
    setDelegated(value: boolean): void;

    clearTrustIdsList(): void;
    getTrustIdsList(): Array<string>;
    setTrustIdsList(value: Array<string>): void;
    addTrustIds(value: string, index?: number): string;

    clearPermissionGroupsList(): void;
    getPermissionGroupsList(): Array<api_commons_org_permissions_pb.PermissionGroup>;
    setPermissionGroupsList(value: Array<api_commons_org_permissions_pb.PermissionGroup>): void;
    addPermissionGroups(value?: api_commons_org_permissions_pb.PermissionGroup, index?: number): api_commons_org_permissions_pb.PermissionGroup;

    getAgentSid(): number;
    setAgentSid(value: number): void;

    getName(): string;
    setName(value: string): void;

    getPartnerAgentId(): string;
    setPartnerAgentId(value: string): void;

    getUserCallerId(): string;
    setUserCallerId(value: string): void;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLastUpdated(): boolean;
    clearLastUpdated(): void;
    getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasAgentProfileGroup(): boolean;
    clearAgentProfileGroup(): void;
    getAgentProfileGroup(): ListAgentsResponse.AgentDetails.AgentProfileGroup | undefined;
    setAgentProfileGroup(value?: ListAgentsResponse.AgentDetails.AgentProfileGroup): void;

    getAgent(): boolean;
    setAgent(value: boolean): void;

    hasTimeZoneOverride(): boolean;
    clearTimeZoneOverride(): void;
    getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
    setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

    getEmail(): string;
    setEmail(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentDetails.AsObject;
    static toObject(includeInstance: boolean, msg: AgentDetails): AgentDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentDetails;
    static deserializeBinaryFromReader(message: AgentDetails, reader: jspb.BinaryReader): AgentDetails;
  }

  export namespace AgentDetails {
    export type AsObject = {
      userId: string,
      orgId: string,
      firstName: string,
      lastName: string,
      username: string,
      skillsList: Array<api_commons_org_user_pb.Skill.AsObject>,
      loginDisabled: boolean,
      huntGroup?: ListAgentsResponse.AgentDetails.HuntGroup.AsObject,
      labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
      delegated: boolean,
      trustIdsList: Array<string>,
      permissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
      agentSid: number,
      name: string,
      partnerAgentId: string,
      userCallerId: string,
      created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      agentProfileGroup?: ListAgentsResponse.AgentDetails.AgentProfileGroup.AsObject,
      agent: boolean,
      timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
      email: string,
    }

    export class HuntGroup extends jspb.Message {
      getHuntGroupSid(): number;
      setHuntGroupSid(value: number): void;

      getHuntGroupName(): string;
      setHuntGroupName(value: string): void;

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
        huntGroupSid: number,
        huntGroupName: string,
      }
    }

    export class AgentProfileGroup extends jspb.Message {
      getAgentProfileGroupId(): string;
      setAgentProfileGroupId(value: string): void;

      getAgentProfileGroupName(): string;
      setAgentProfileGroupName(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AgentProfileGroup.AsObject;
      static toObject(includeInstance: boolean, msg: AgentProfileGroup): AgentProfileGroup.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AgentProfileGroup, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AgentProfileGroup;
      static deserializeBinaryFromReader(message: AgentProfileGroup, reader: jspb.BinaryReader): AgentProfileGroup;
    }

    export namespace AgentProfileGroup {
      export type AsObject = {
        agentProfileGroupId: string,
        agentProfileGroupName: string,
      }
    }
  }
}

export class ListPublicUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicUsersRequest): ListPublicUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPublicUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicUsersRequest;
  static deserializeBinaryFromReader(message: ListPublicUsersRequest, reader: jspb.BinaryReader): ListPublicUsersRequest;
}

export namespace ListPublicUsersRequest {
  export type AsObject = {
  }
}

export class ListPublicUsersResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicUsersResponse): ListPublicUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPublicUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicUsersResponse;
  static deserializeBinaryFromReader(message: ListPublicUsersResponse, reader: jspb.BinaryReader): ListPublicUsersResponse;
}

export namespace ListPublicUsersResponse {
  export type AsObject = {
    userId: string,
    orgId: string,
    firstName: string,
    lastName: string,
  }
}

export class ListUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
  }
}

export class ListUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<ListUsersResponse.UserDetails>;
  setUsersList(value: Array<ListUsersResponse.UserDetails>): void;
  addUsers(value?: ListUsersResponse.UserDetails, index?: number): ListUsersResponse.UserDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    usersList: Array<ListUsersResponse.UserDetails.AsObject>,
  }

  export class UserDetails extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): void;

    getOrgId(): string;
    setOrgId(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getLoginDisabled(): boolean;
    setLoginDisabled(value: boolean): void;

    clearPermissionGroupIdsList(): void;
    getPermissionGroupIdsList(): Array<string>;
    setPermissionGroupIdsList(value: Array<string>): void;
    addPermissionGroupIds(value: string, index?: number): string;

    clearLabelsList(): void;
    getLabelsList(): Array<api_commons_org_labels_pb.Label>;
    setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
    addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

    getAccountOwner(): boolean;
    setAccountOwner(value: boolean): void;

    getAgent(): boolean;
    setAgent(value: boolean): void;

    clearTrustIdsList(): void;
    getTrustIdsList(): Array<string>;
    setTrustIdsList(value: Array<string>): void;
    addTrustIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDetails.AsObject;
    static toObject(includeInstance: boolean, msg: UserDetails): UserDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDetails;
    static deserializeBinaryFromReader(message: UserDetails, reader: jspb.BinaryReader): UserDetails;
  }

  export namespace UserDetails {
    export type AsObject = {
      userId: string,
      orgId: string,
      firstName: string,
      lastName: string,
      username: string,
      loginDisabled: boolean,
      permissionGroupIdsList: Array<string>,
      labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
      accountOwner: boolean,
      agent: boolean,
      trustIdsList: Array<string>,
    }
  }
}

export class ListUsersByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getArchivedFilter(): api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap];
  setArchivedFilter(value: api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersByOrgIdRequest): ListUsersByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersByOrgIdRequest;
  static deserializeBinaryFromReader(message: ListUsersByOrgIdRequest, reader: jspb.BinaryReader): ListUsersByOrgIdRequest;
}

export namespace ListUsersByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    archivedFilter: api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap],
  }
}

export class ListUsersByOrgIdResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<ListUsersByOrgIdResponse.UserDetails>;
  setUsersList(value: Array<ListUsersByOrgIdResponse.UserDetails>): void;
  addUsers(value?: ListUsersByOrgIdResponse.UserDetails, index?: number): ListUsersByOrgIdResponse.UserDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersByOrgIdResponse): ListUsersByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersByOrgIdResponse;
  static deserializeBinaryFromReader(message: ListUsersByOrgIdResponse, reader: jspb.BinaryReader): ListUsersByOrgIdResponse;
}

export namespace ListUsersByOrgIdResponse {
  export type AsObject = {
    usersList: Array<ListUsersByOrgIdResponse.UserDetails.AsObject>,
  }

  export class UserDetails extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): void;

    getOrgId(): string;
    setOrgId(value: string): void;

    getOrgName(): string;
    setOrgName(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getLoginDisabled(): boolean;
    setLoginDisabled(value: boolean): void;

    clearPermissionGroupIdsList(): void;
    getPermissionGroupIdsList(): Array<string>;
    setPermissionGroupIdsList(value: Array<string>): void;
    addPermissionGroupIds(value: string, index?: number): string;

    clearLabelsList(): void;
    getLabelsList(): Array<api_commons_org_labels_pb.Label>;
    setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
    addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

    getAccountOwner(): boolean;
    setAccountOwner(value: boolean): void;

    getAgent(): boolean;
    setAgent(value: boolean): void;

    clearTrustIdsList(): void;
    getTrustIdsList(): Array<string>;
    setTrustIdsList(value: Array<string>): void;
    addTrustIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDetails.AsObject;
    static toObject(includeInstance: boolean, msg: UserDetails): UserDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDetails;
    static deserializeBinaryFromReader(message: UserDetails, reader: jspb.BinaryReader): UserDetails;
  }

  export namespace UserDetails {
    export type AsObject = {
      userId: string,
      orgId: string,
      orgName: string,
      firstName: string,
      lastName: string,
      username: string,
      loginDisabled: boolean,
      permissionGroupIdsList: Array<string>,
      labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
      accountOwner: boolean,
      agent: boolean,
      trustIdsList: Array<string>,
    }
  }
}

export class ListUsersByRegionRequest extends jspb.Message {
  getRegionId(): string;
  setRegionId(value: string): void;

  getAgent(): boolean;
  setAgent(value: boolean): void;

  getArchivedFilter(): api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap];
  setArchivedFilter(value: api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersByRegionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersByRegionRequest): ListUsersByRegionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersByRegionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersByRegionRequest;
  static deserializeBinaryFromReader(message: ListUsersByRegionRequest, reader: jspb.BinaryReader): ListUsersByRegionRequest;
}

export namespace ListUsersByRegionRequest {
  export type AsObject = {
    regionId: string,
    agent: boolean,
    archivedFilter: api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap],
  }
}

export class ListUsersByRegionResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<ListUsersByRegionResponse.UserDetails>;
  setUsersList(value: Array<ListUsersByRegionResponse.UserDetails>): void;
  addUsers(value?: ListUsersByRegionResponse.UserDetails, index?: number): ListUsersByRegionResponse.UserDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersByRegionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersByRegionResponse): ListUsersByRegionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUsersByRegionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersByRegionResponse;
  static deserializeBinaryFromReader(message: ListUsersByRegionResponse, reader: jspb.BinaryReader): ListUsersByRegionResponse;
}

export namespace ListUsersByRegionResponse {
  export type AsObject = {
    usersList: Array<ListUsersByRegionResponse.UserDetails.AsObject>,
  }

  export class UserDetails extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): void;

    getOrgId(): string;
    setOrgId(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getLoginDisabled(): boolean;
    setLoginDisabled(value: boolean): void;

    clearPermissionGroupIdsList(): void;
    getPermissionGroupIdsList(): Array<string>;
    setPermissionGroupIdsList(value: Array<string>): void;
    addPermissionGroupIds(value: string, index?: number): string;

    clearLabelsList(): void;
    getLabelsList(): Array<api_commons_org_labels_pb.Label>;
    setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
    addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

    getAccountOwner(): boolean;
    setAccountOwner(value: boolean): void;

    getAgent(): boolean;
    setAgent(value: boolean): void;

    clearTrustIdsList(): void;
    getTrustIdsList(): Array<string>;
    setTrustIdsList(value: Array<string>): void;
    addTrustIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDetails.AsObject;
    static toObject(includeInstance: boolean, msg: UserDetails): UserDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDetails;
    static deserializeBinaryFromReader(message: UserDetails, reader: jspb.BinaryReader): UserDetails;
  }

  export namespace UserDetails {
    export type AsObject = {
      userId: string,
      orgId: string,
      firstName: string,
      lastName: string,
      username: string,
      loginDisabled: boolean,
      permissionGroupIdsList: Array<string>,
      labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
      accountOwner: boolean,
      agent: boolean,
      trustIdsList: Array<string>,
    }
  }
}

export class UpdateMyUserRequest extends jspb.Message {
  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  clearFieldMaskList(): void;
  getFieldMaskList(): Array<string>;
  setFieldMaskList(value: Array<string>): void;
  addFieldMask(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyUserRequest): UpdateMyUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyUserRequest;
  static deserializeBinaryFromReader(message: UpdateMyUserRequest, reader: jspb.BinaryReader): UpdateMyUserRequest;
}

export namespace UpdateMyUserRequest {
  export type AsObject = {
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    fieldMaskList: Array<string>,
  }
}

export class UpdateMyUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyUserResponse): UpdateMyUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyUserResponse;
  static deserializeBinaryFromReader(message: UpdateMyUserResponse, reader: jspb.BinaryReader): UpdateMyUserResponse;
}

export namespace UpdateMyUserResponse {
  export type AsObject = {
  }
}

export class UpdateUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  hasTimeZoneOverride(): boolean;
  clearTimeZoneOverride(): void;
  getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
  setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

  clearLinkbackNumbersList(): void;
  getLinkbackNumbersList(): Array<string>;
  setLinkbackNumbersList(value: Array<string>): void;
  addLinkbackNumbers(value: string, index?: number): string;

  clearCallerIdsList(): void;
  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): void;
  addCallerIds(value: string, index?: number): string;

  getDefaultApp(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApp(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getPasswordResetRequired(): boolean;
  setPasswordResetRequired(value: boolean): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  clearLabelIdsList(): void;
  getLabelIdsList(): Array<string>;
  setLabelIdsList(value: Array<string>): void;
  addLabelIds(value: string, index?: number): string;

  clearFieldMaskList(): void;
  getFieldMaskList(): Array<string>;
  setFieldMaskList(value: Array<string>): void;
  addFieldMask(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    userId: string,
    firstName: string,
    lastName: string,
    partnerAgentId: string,
    timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
    linkbackNumbersList: Array<string>,
    callerIdsList: Array<string>,
    defaultApp: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    passwordResetRequired: boolean,
    agentProfileGroupId: string,
    username: string,
    email: string,
    userCallerId: string,
    labelIdsList: Array<string>,
    fieldMaskList: Array<string>,
  }
}

export class UpdateUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
  }
}

export class UpdateUserLabelsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  clearLabelIdsList(): void;
  getLabelIdsList(): Array<string>;
  setLabelIdsList(value: Array<string>): void;
  addLabelIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserLabelsRequest): UpdateUserLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserLabelsRequest;
  static deserializeBinaryFromReader(message: UpdateUserLabelsRequest, reader: jspb.BinaryReader): UpdateUserLabelsRequest;
}

export namespace UpdateUserLabelsRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
    labelIdsList: Array<string>,
  }
}

export class UpdateUserLabelsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserLabelsResponse): UpdateUserLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserLabelsResponse;
  static deserializeBinaryFromReader(message: UpdateUserLabelsResponse, reader: jspb.BinaryReader): UpdateUserLabelsResponse;
}

export namespace UpdateUserLabelsResponse {
  export type AsObject = {
  }
}

export class UpdateUserCallerIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserCallerIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserCallerIdRequest): UpdateUserCallerIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserCallerIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserCallerIdRequest;
  static deserializeBinaryFromReader(message: UpdateUserCallerIdRequest, reader: jspb.BinaryReader): UpdateUserCallerIdRequest;
}

export namespace UpdateUserCallerIdRequest {
  export type AsObject = {
    userId: string,
    userCallerId: string,
  }
}

export class UpdateUserCallerIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserCallerIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserCallerIdResponse): UpdateUserCallerIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserCallerIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserCallerIdResponse;
  static deserializeBinaryFromReader(message: UpdateUserCallerIdResponse, reader: jspb.BinaryReader): UpdateUserCallerIdResponse;
}

export namespace UpdateUserCallerIdResponse {
  export type AsObject = {
  }
}

export class UpdateUserDisabledRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getLoginDisabled(): boolean;
  setLoginDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserDisabledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserDisabledRequest): UpdateUserDisabledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserDisabledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserDisabledRequest;
  static deserializeBinaryFromReader(message: UpdateUserDisabledRequest, reader: jspb.BinaryReader): UpdateUserDisabledRequest;
}

export namespace UpdateUserDisabledRequest {
  export type AsObject = {
    userId: string,
    loginDisabled: boolean,
  }
}

export class UpdateUserDisabledResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserDisabledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserDisabledResponse): UpdateUserDisabledResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserDisabledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserDisabledResponse;
  static deserializeBinaryFromReader(message: UpdateUserDisabledResponse, reader: jspb.BinaryReader): UpdateUserDisabledResponse;
}

export namespace UpdateUserDisabledResponse {
  export type AsObject = {
  }
}

export class UpdateUserDisabledByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getLoginDisabled(): boolean;
  setLoginDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserDisabledByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserDisabledByOrgIdRequest): UpdateUserDisabledByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserDisabledByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserDisabledByOrgIdRequest;
  static deserializeBinaryFromReader(message: UpdateUserDisabledByOrgIdRequest, reader: jspb.BinaryReader): UpdateUserDisabledByOrgIdRequest;
}

export namespace UpdateUserDisabledByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
    loginDisabled: boolean,
  }
}

export class UpdateUserDisabledByOrgIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserDisabledByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserDisabledByOrgIdResponse): UpdateUserDisabledByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserDisabledByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserDisabledByOrgIdResponse;
  static deserializeBinaryFromReader(message: UpdateUserDisabledByOrgIdResponse, reader: jspb.BinaryReader): UpdateUserDisabledByOrgIdResponse;
}

export namespace UpdateUserDisabledByOrgIdResponse {
  export type AsObject = {
  }
}

export class GetMyUserPasswordResetLinkRequest extends jspb.Message {
  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserPasswordResetLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserPasswordResetLinkRequest): GetMyUserPasswordResetLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserPasswordResetLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserPasswordResetLinkRequest;
  static deserializeBinaryFromReader(message: GetMyUserPasswordResetLinkRequest, reader: jspb.BinaryReader): GetMyUserPasswordResetLinkRequest;
}

export namespace GetMyUserPasswordResetLinkRequest {
  export type AsObject = {
    ttl: number,
  }
}

export class GetMyUserPasswordResetLinkResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyUserPasswordResetLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyUserPasswordResetLinkResponse): GetMyUserPasswordResetLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyUserPasswordResetLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyUserPasswordResetLinkResponse;
  static deserializeBinaryFromReader(message: GetMyUserPasswordResetLinkResponse, reader: jspb.BinaryReader): GetMyUserPasswordResetLinkResponse;
}

export namespace GetMyUserPasswordResetLinkResponse {
  export type AsObject = {
    url: string,
  }
}

export class GetUserPasswordResetLinkRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPasswordResetLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPasswordResetLinkRequest): GetUserPasswordResetLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPasswordResetLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPasswordResetLinkRequest;
  static deserializeBinaryFromReader(message: GetUserPasswordResetLinkRequest, reader: jspb.BinaryReader): GetUserPasswordResetLinkRequest;
}

export namespace GetUserPasswordResetLinkRequest {
  export type AsObject = {
    userId: string,
    ttl: number,
  }
}

export class GetUserPasswordResetLinkResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPasswordResetLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPasswordResetLinkResponse): GetUserPasswordResetLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPasswordResetLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPasswordResetLinkResponse;
  static deserializeBinaryFromReader(message: GetUserPasswordResetLinkResponse, reader: jspb.BinaryReader): GetUserPasswordResetLinkResponse;
}

export namespace GetUserPasswordResetLinkResponse {
  export type AsObject = {
    url: string,
  }
}

export class GetUserPasswordResetLinkByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPasswordResetLinkByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPasswordResetLinkByOrgIdRequest): GetUserPasswordResetLinkByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPasswordResetLinkByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPasswordResetLinkByOrgIdRequest;
  static deserializeBinaryFromReader(message: GetUserPasswordResetLinkByOrgIdRequest, reader: jspb.BinaryReader): GetUserPasswordResetLinkByOrgIdRequest;
}

export namespace GetUserPasswordResetLinkByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
    ttl: number,
  }
}

export class GetUserPasswordResetLinkByOrgIdResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserPasswordResetLinkByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserPasswordResetLinkByOrgIdResponse): GetUserPasswordResetLinkByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserPasswordResetLinkByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserPasswordResetLinkByOrgIdResponse;
  static deserializeBinaryFromReader(message: GetUserPasswordResetLinkByOrgIdResponse, reader: jspb.BinaryReader): GetUserPasswordResetLinkByOrgIdResponse;
}

export namespace GetUserPasswordResetLinkByOrgIdResponse {
  export type AsObject = {
    url: string,
  }
}

export class CreatePasswordResetLinkRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasswordResetLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasswordResetLinkRequest): CreatePasswordResetLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePasswordResetLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasswordResetLinkRequest;
  static deserializeBinaryFromReader(message: CreatePasswordResetLinkRequest, reader: jspb.BinaryReader): CreatePasswordResetLinkRequest;
}

export namespace CreatePasswordResetLinkRequest {
  export type AsObject = {
    userId: string,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreatePasswordResetLinkResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasswordResetLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasswordResetLinkResponse): CreatePasswordResetLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePasswordResetLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasswordResetLinkResponse;
  static deserializeBinaryFromReader(message: CreatePasswordResetLinkResponse, reader: jspb.BinaryReader): CreatePasswordResetLinkResponse;
}

export namespace CreatePasswordResetLinkResponse {
  export type AsObject = {
    url: string,
  }
}

export class CreatePasswordResetLinkByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasswordResetLinkByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasswordResetLinkByOrgIdRequest): CreatePasswordResetLinkByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePasswordResetLinkByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasswordResetLinkByOrgIdRequest;
  static deserializeBinaryFromReader(message: CreatePasswordResetLinkByOrgIdRequest, reader: jspb.BinaryReader): CreatePasswordResetLinkByOrgIdRequest;
}

export namespace CreatePasswordResetLinkByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class CreatePasswordResetLinkByOrgIdResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasswordResetLinkByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasswordResetLinkByOrgIdResponse): CreatePasswordResetLinkByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePasswordResetLinkByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasswordResetLinkByOrgIdResponse;
  static deserializeBinaryFromReader(message: CreatePasswordResetLinkByOrgIdResponse, reader: jspb.BinaryReader): CreatePasswordResetLinkByOrgIdResponse;
}

export namespace CreatePasswordResetLinkByOrgIdResponse {
  export type AsObject = {
    url: string,
  }
}

export class GetUserLoginInfoRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLoginInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLoginInfoRequest): GetUserLoginInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLoginInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLoginInfoRequest;
  static deserializeBinaryFromReader(message: GetUserLoginInfoRequest, reader: jspb.BinaryReader): GetUserLoginInfoRequest;
}

export namespace GetUserLoginInfoRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class GetUserLoginInfoResponse extends jspb.Message {
  getBlocked(): boolean;
  setBlocked(value: boolean): void;

  getLastIp(): string;
  setLastIp(value: string): void;

  hasLastLogin(): boolean;
  clearLastLogin(): void;
  getLastLogin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastLogin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastPasswordReset(): boolean;
  clearLastPasswordReset(): void;
  getLastPasswordReset(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastPasswordReset(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLoginsCount(): number;
  setLoginsCount(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getHasBlockedIps(): boolean;
  setHasBlockedIps(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLoginInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLoginInfoResponse): GetUserLoginInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLoginInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLoginInfoResponse;
  static deserializeBinaryFromReader(message: GetUserLoginInfoResponse, reader: jspb.BinaryReader): GetUserLoginInfoResponse;
}

export namespace GetUserLoginInfoResponse {
  export type AsObject = {
    blocked: boolean,
    lastIp: string,
    lastLogin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastPasswordReset?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    loginsCount: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hasBlockedIps: boolean,
  }
}

export class SendPasswordResetRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPasswordResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendPasswordResetRequest): SendPasswordResetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPasswordResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPasswordResetRequest;
  static deserializeBinaryFromReader(message: SendPasswordResetRequest, reader: jspb.BinaryReader): SendPasswordResetRequest;
}

export namespace SendPasswordResetRequest {
  export type AsObject = {
    email: string,
  }
}

export class SendPasswordResetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPasswordResetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendPasswordResetResponse): SendPasswordResetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPasswordResetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPasswordResetResponse;
  static deserializeBinaryFromReader(message: SendPasswordResetResponse, reader: jspb.BinaryReader): SendPasswordResetResponse;
}

export namespace SendPasswordResetResponse {
  export type AsObject = {
  }
}

export class SendPasswordResetByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPasswordResetByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendPasswordResetByOrgIdRequest): SendPasswordResetByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPasswordResetByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPasswordResetByOrgIdRequest;
  static deserializeBinaryFromReader(message: SendPasswordResetByOrgIdRequest, reader: jspb.BinaryReader): SendPasswordResetByOrgIdRequest;
}

export namespace SendPasswordResetByOrgIdRequest {
  export type AsObject = {
    orgId: string,
    email: string,
  }
}

export class SendPasswordResetByOrgIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPasswordResetByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendPasswordResetByOrgIdResponse): SendPasswordResetByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPasswordResetByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPasswordResetByOrgIdResponse;
  static deserializeBinaryFromReader(message: SendPasswordResetByOrgIdResponse, reader: jspb.BinaryReader): SendPasswordResetByOrgIdResponse;
}

export namespace SendPasswordResetByOrgIdResponse {
  export type AsObject = {
  }
}

export class ResetMyPasswordRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetMyPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetMyPasswordRequest): ResetMyPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetMyPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetMyPasswordRequest;
  static deserializeBinaryFromReader(message: ResetMyPasswordRequest, reader: jspb.BinaryReader): ResetMyPasswordRequest;
}

export namespace ResetMyPasswordRequest {
  export type AsObject = {
    password: string,
  }
}

export class ResetMyPasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetMyPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetMyPasswordResponse): ResetMyPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetMyPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetMyPasswordResponse;
  static deserializeBinaryFromReader(message: ResetMyPasswordResponse, reader: jspb.BinaryReader): ResetMyPasswordResponse;
}

export namespace ResetMyPasswordResponse {
  export type AsObject = {
  }
}

export class ResetUserPasswordRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserPasswordRequest): ResetUserPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserPasswordRequest;
  static deserializeBinaryFromReader(message: ResetUserPasswordRequest, reader: jspb.BinaryReader): ResetUserPasswordRequest;
}

export namespace ResetUserPasswordRequest {
  export type AsObject = {
    password: string,
    userId: string,
  }
}

export class ResetUserPasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserPasswordResponse): ResetUserPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetUserPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserPasswordResponse;
  static deserializeBinaryFromReader(message: ResetUserPasswordResponse, reader: jspb.BinaryReader): ResetUserPasswordResponse;
}

export namespace ResetUserPasswordResponse {
  export type AsObject = {
  }
}

export class ResetUserPasswordByOrgIdRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserPasswordByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserPasswordByOrgIdRequest): ResetUserPasswordByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetUserPasswordByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserPasswordByOrgIdRequest;
  static deserializeBinaryFromReader(message: ResetUserPasswordByOrgIdRequest, reader: jspb.BinaryReader): ResetUserPasswordByOrgIdRequest;
}

export namespace ResetUserPasswordByOrgIdRequest {
  export type AsObject = {
    password: string,
    userId: string,
    orgId: string,
  }
}

export class ResetUserPasswordByOrgIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserPasswordByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserPasswordByOrgIdResponse): ResetUserPasswordByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetUserPasswordByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserPasswordByOrgIdResponse;
  static deserializeBinaryFromReader(message: ResetUserPasswordByOrgIdResponse, reader: jspb.BinaryReader): ResetUserPasswordByOrgIdResponse;
}

export namespace ResetUserPasswordByOrgIdResponse {
  export type AsObject = {
  }
}

export class GetUserEmailVerifiedRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserEmailVerifiedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserEmailVerifiedRequest): GetUserEmailVerifiedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserEmailVerifiedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserEmailVerifiedRequest;
  static deserializeBinaryFromReader(message: GetUserEmailVerifiedRequest, reader: jspb.BinaryReader): GetUserEmailVerifiedRequest;
}

export namespace GetUserEmailVerifiedRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetUserEmailVerifiedResponse extends jspb.Message {
  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserEmailVerifiedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserEmailVerifiedResponse): GetUserEmailVerifiedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserEmailVerifiedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserEmailVerifiedResponse;
  static deserializeBinaryFromReader(message: GetUserEmailVerifiedResponse, reader: jspb.BinaryReader): GetUserEmailVerifiedResponse;
}

export namespace GetUserEmailVerifiedResponse {
  export type AsObject = {
    emailVerified: boolean,
  }
}

export class GetUserEmailVerifiedByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserEmailVerifiedByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserEmailVerifiedByOrgIdRequest): GetUserEmailVerifiedByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserEmailVerifiedByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserEmailVerifiedByOrgIdRequest;
  static deserializeBinaryFromReader(message: GetUserEmailVerifiedByOrgIdRequest, reader: jspb.BinaryReader): GetUserEmailVerifiedByOrgIdRequest;
}

export namespace GetUserEmailVerifiedByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class GetUserEmailVerifiedByOrgIdResponse extends jspb.Message {
  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserEmailVerifiedByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserEmailVerifiedByOrgIdResponse): GetUserEmailVerifiedByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserEmailVerifiedByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserEmailVerifiedByOrgIdResponse;
  static deserializeBinaryFromReader(message: GetUserEmailVerifiedByOrgIdResponse, reader: jspb.BinaryReader): GetUserEmailVerifiedByOrgIdResponse;
}

export namespace GetUserEmailVerifiedByOrgIdResponse {
  export type AsObject = {
    emailVerified: boolean,
  }
}

export class SendUserEmailVerificationRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUserEmailVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendUserEmailVerificationRequest): SendUserEmailVerificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUserEmailVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUserEmailVerificationRequest;
  static deserializeBinaryFromReader(message: SendUserEmailVerificationRequest, reader: jspb.BinaryReader): SendUserEmailVerificationRequest;
}

export namespace SendUserEmailVerificationRequest {
  export type AsObject = {
    userId: string,
  }
}

export class SendUserEmailVerificationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUserEmailVerificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendUserEmailVerificationResponse): SendUserEmailVerificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUserEmailVerificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUserEmailVerificationResponse;
  static deserializeBinaryFromReader(message: SendUserEmailVerificationResponse, reader: jspb.BinaryReader): SendUserEmailVerificationResponse;
}

export namespace SendUserEmailVerificationResponse {
  export type AsObject = {
  }
}

export class SendUserEmailVerificationByOrgIdRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUserEmailVerificationByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendUserEmailVerificationByOrgIdRequest): SendUserEmailVerificationByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUserEmailVerificationByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUserEmailVerificationByOrgIdRequest;
  static deserializeBinaryFromReader(message: SendUserEmailVerificationByOrgIdRequest, reader: jspb.BinaryReader): SendUserEmailVerificationByOrgIdRequest;
}

export namespace SendUserEmailVerificationByOrgIdRequest {
  export type AsObject = {
    userId: string,
    orgId: string,
  }
}

export class SendUserEmailVerificationByOrgIdResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUserEmailVerificationByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendUserEmailVerificationByOrgIdResponse): SendUserEmailVerificationByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUserEmailVerificationByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUserEmailVerificationByOrgIdResponse;
  static deserializeBinaryFromReader(message: SendUserEmailVerificationByOrgIdResponse, reader: jspb.BinaryReader): SendUserEmailVerificationByOrgIdResponse;
}

export namespace SendUserEmailVerificationByOrgIdResponse {
  export type AsObject = {
  }
}

export class GetUserSessionDataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSessionDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSessionDataRequest): GetUserSessionDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSessionDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSessionDataRequest;
  static deserializeBinaryFromReader(message: GetUserSessionDataRequest, reader: jspb.BinaryReader): GetUserSessionDataRequest;
}

export namespace GetUserSessionDataRequest {
  export type AsObject = {
  }
}

export class GetUserSessionDataResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): GetUserSessionDataResponse.User | undefined;
  setUser(value?: GetUserSessionDataResponse.User): void;

  getOrgName(): string;
  setOrgName(value: string): void;

  clearP3PermissionsList(): void;
  getP3PermissionsList(): Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>;
  setP3PermissionsList(value: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>): void;
  addP3Permissions(value: api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap], index?: number): api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap];

  clearPermissionGroupsList(): void;
  getPermissionGroupsList(): Array<api_commons_org_permissions_pb.PermissionGroup>;
  setPermissionGroupsList(value: Array<api_commons_org_permissions_pb.PermissionGroup>): void;
  addPermissionGroups(value?: api_commons_org_permissions_pb.PermissionGroup, index?: number): api_commons_org_permissions_pb.PermissionGroup;

  clearLabelsList(): void;
  getLabelsList(): Array<api_commons_org_labels_pb.Label>;
  setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
  addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSessionDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSessionDataResponse): GetUserSessionDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserSessionDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSessionDataResponse;
  static deserializeBinaryFromReader(message: GetUserSessionDataResponse, reader: jspb.BinaryReader): GetUserSessionDataResponse;
}

export namespace GetUserSessionDataResponse {
  export type AsObject = {
    user?: GetUserSessionDataResponse.User.AsObject,
    orgName: string,
    p3PermissionsList: Array<api_commons_perms_pb.PermissionMap[keyof api_commons_perms_pb.PermissionMap]>,
    permissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
    labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
  }

  export class User extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): void;

    getOrgId(): string;
    setOrgId(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getP3PermissionGroupId(): string;
    setP3PermissionGroupId(value: string): void;

    getPartnerAgentId(): string;
    setPartnerAgentId(value: string): void;

    getRegionSidMapMap(): jspb.Map<string, GetUserSessionDataResponse.User.RegionSids>;
    clearRegionSidMapMap(): void;
    getDefaultRegion(): string;
    setDefaultRegion(value: string): void;

    getApiKey(): string;
    setApiKey(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getLoginDisabled(): boolean;
    setLoginDisabled(value: boolean): void;

    clearCallerIdsList(): void;
    getCallerIdsList(): Array<string>;
    setCallerIdsList(value: Array<string>): void;
    addCallerIds(value: string, index?: number): string;

    clearLinkbackNumbersList(): void;
    getLinkbackNumbersList(): Array<string>;
    setLinkbackNumbersList(value: Array<string>): void;
    addLinkbackNumbers(value: string, index?: number): string;

    getAuthUserId(): string;
    setAuthUserId(value: string): void;

    getEnableMfa(): boolean;
    setEnableMfa(value: boolean): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLastUpdated(): boolean;
    clearLastUpdated(): void;
    getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getPasswordResetRequired(): boolean;
    setPasswordResetRequired(value: boolean): void;

    hasConnectionId(): boolean;
    clearConnectionId(): void;
    getConnectionId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setConnectionId(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasTimeZoneOverride(): boolean;
    clearTimeZoneOverride(): void;
    getTimeZoneOverride(): api_commons_org_pb.TimeZoneWrapper | undefined;
    setTimeZoneOverride(value?: api_commons_org_pb.TimeZoneWrapper): void;

    clearPermissionGroupIdsList(): void;
    getPermissionGroupIdsList(): Array<string>;
    setPermissionGroupIdsList(value: Array<string>): void;
    addPermissionGroupIds(value: string, index?: number): string;

    clearTrustIdsList(): void;
    getTrustIdsList(): Array<string>;
    setTrustIdsList(value: Array<string>): void;
    addTrustIds(value: string, index?: number): string;

    getDefaultApplication(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
    setDefaultApplication(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

    getUserCallerId(): string;
    setUserCallerId(value: string): void;

    getAgentProfileGroupId(): string;
    setAgentProfileGroupId(value: string): void;

    getAgent(): boolean;
    setAgent(value: boolean): void;

    getAccountOwner(): boolean;
    setAccountOwner(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
  }

  export namespace User {
    export type AsObject = {
      userId: string,
      orgId: string,
      username: string,
      p3PermissionGroupId: string,
      partnerAgentId: string,
      regionSidMapMap: Array<[string, GetUserSessionDataResponse.User.RegionSids.AsObject]>,
      defaultRegion: string,
      apiKey: string,
      email: string,
      loginDisabled: boolean,
      callerIdsList: Array<string>,
      linkbackNumbersList: Array<string>,
      authUserId: string,
      enableMfa: boolean,
      firstName: string,
      lastName: string,
      created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      passwordResetRequired: boolean,
      connectionId?: google_protobuf_wrappers_pb.StringValue.AsObject,
      timeZoneOverride?: api_commons_org_pb.TimeZoneWrapper.AsObject,
      permissionGroupIdsList: Array<string>,
      trustIdsList: Array<string>,
      defaultApplication: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
      userCallerId: string,
      agentProfileGroupId: string,
      agent: boolean,
      accountOwner: boolean,
    }

    export class RegionSids extends jspb.Message {
      getLoginSid(): number;
      setLoginSid(value: number): void;

      getAgentSid(): number;
      setAgentSid(value: number): void;

      getClientSid(): number;
      setClientSid(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RegionSids.AsObject;
      static toObject(includeInstance: boolean, msg: RegionSids): RegionSids.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RegionSids, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RegionSids;
      static deserializeBinaryFromReader(message: RegionSids, reader: jspb.BinaryReader): RegionSids;
    }

    export namespace RegionSids {
      export type AsObject = {
        loginSid: number,
        agentSid: number,
        clientSid: number,
      }
    }
  }
}

