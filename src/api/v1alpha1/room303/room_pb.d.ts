// package: api.v1alpha1.room303
// file: api/v1alpha1/room303/room.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as api_commons_org_agent_profile_group_pb from "../../../api/commons/org/agent_profile_group_pb";
import * as api_commons_org_labels_pb from "../../../api/commons/org/labels_pb";
import * as api_commons_org_permissions_pb from "../../../api/commons/org/permissions_pb";
import * as api_commons_org_trusts_pb from "../../../api/commons/org/trusts_pb";
import * as api_commons_org_user_pb from "../../../api/commons/org/user_pb";
import * as api_commons_room303_pb from "../../../api/commons/room303_pb";
import * as api_commons_user_pb from "../../../api/commons/user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateRoomRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): api_commons_room303_pb.RoomTypeMap[keyof api_commons_room303_pb.RoomTypeMap];
  setType(value: api_commons_room303_pb.RoomTypeMap[keyof api_commons_room303_pb.RoomTypeMap]): void;

  clearMembersList(): void;
  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): void;
  addMembers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    name: string,
    type: api_commons_room303_pb.RoomTypeMap[keyof api_commons_room303_pb.RoomTypeMap],
    membersList: Array<string>,
  }
}

export class GetRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomRequest): GetRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomRequest;
  static deserializeBinaryFromReader(message: GetRoomRequest, reader: jspb.BinaryReader): GetRoomRequest;
}

export namespace GetRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class ListAllRoomsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllRoomsRequest): ListAllRoomsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllRoomsRequest;
  static deserializeBinaryFromReader(message: ListAllRoomsRequest, reader: jspb.BinaryReader): ListAllRoomsRequest;
}

export namespace ListAllRoomsRequest {
  export type AsObject = {
  }
}

export class ListRoomsForMemberRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsForMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsForMemberRequest): ListRoomsForMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoomsForMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsForMemberRequest;
  static deserializeBinaryFromReader(message: ListRoomsForMemberRequest, reader: jspb.BinaryReader): ListRoomsForMemberRequest;
}

export namespace ListRoomsForMemberRequest {
  export type AsObject = {
  }
}

export class ListRoomsResponse extends jspb.Message {
  clearRoomsList(): void;
  getRoomsList(): Array<api_commons_room303_pb.Room>;
  setRoomsList(value: Array<api_commons_room303_pb.Room>): void;
  addRooms(value?: api_commons_room303_pb.Room, index?: number): api_commons_room303_pb.Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsResponse): ListRoomsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsResponse;
  static deserializeBinaryFromReader(message: ListRoomsResponse, reader: jspb.BinaryReader): ListRoomsResponse;
}

export namespace ListRoomsResponse {
  export type AsObject = {
    roomsList: Array<api_commons_room303_pb.Room.AsObject>,
  }
}

export class ArchiveRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveRoomRequest): ArchiveRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveRoomRequest;
  static deserializeBinaryFromReader(message: ArchiveRoomRequest, reader: jspb.BinaryReader): ArchiveRoomRequest;
}

export namespace ArchiveRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class ListUsersByOrgIdRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getAgent(): boolean;
  setAgent(value: boolean): void;

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
    agent: boolean,
    archivedFilter: api_commons_user_pb.UserArchivedStateFilterMap[keyof api_commons_user_pb.UserArchivedStateFilterMap],
  }
}

export class ListUsersByOrgIdResponse extends jspb.Message {
  clearUserDetailsList(): void;
  getUserDetailsList(): Array<UserDetails>;
  setUserDetailsList(value: Array<UserDetails>): void;
  addUserDetails(value?: UserDetails, index?: number): UserDetails;

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
    userDetailsList: Array<UserDetails.AsObject>,
  }
}

export class UserDetails extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): api_commons_org_user_pb.User | undefined;
  setUser(value?: api_commons_org_user_pb.User): void;

  getOrgName(): string;
  setOrgName(value: string): void;

  hasHuntGroup(): boolean;
  clearHuntGroup(): void;
  getHuntGroup(): UserDetails.HuntGroup | undefined;
  setHuntGroup(value?: UserDetails.HuntGroup): void;

  hasAgentProfileGroup(): boolean;
  clearAgentProfileGroup(): void;
  getAgentProfileGroup(): UserDetails.AgentProfileGroup | undefined;
  setAgentProfileGroup(value?: UserDetails.AgentProfileGroup): void;

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

  getDelegated(): boolean;
  setDelegated(value: boolean): void;

  clearLabelsList(): void;
  getLabelsList(): Array<api_commons_org_labels_pb.Label>;
  setLabelsList(value: Array<api_commons_org_labels_pb.Label>): void;
  addLabels(value?: api_commons_org_labels_pb.Label, index?: number): api_commons_org_labels_pb.Label;

  hasLoginInfo(): boolean;
  clearLoginInfo(): void;
  getLoginInfo(): UserDetails.LoginInfo | undefined;
  setLoginInfo(value?: UserDetails.LoginInfo): void;

  getBillingId(): string;
  setBillingId(value: string): void;

  clearTrustsList(): void;
  getTrustsList(): Array<api_commons_org_trusts_pb.Trust>;
  setTrustsList(value: Array<api_commons_org_trusts_pb.Trust>): void;
  addTrusts(value?: api_commons_org_trusts_pb.Trust, index?: number): api_commons_org_trusts_pb.Trust;

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
    user?: api_commons_org_user_pb.User.AsObject,
    orgName: string,
    huntGroup?: UserDetails.HuntGroup.AsObject,
    agentProfileGroup?: UserDetails.AgentProfileGroup.AsObject,
    skillsList: Array<api_commons_org_user_pb.Skill.AsObject>,
    permissionGroupsList: Array<api_commons_org_permissions_pb.PermissionGroup.AsObject>,
    p3PermissionGroup?: api_commons_org_permissions_pb.P3PermissionGroup.AsObject,
    delegated: boolean,
    labelsList: Array<api_commons_org_labels_pb.Label.AsObject>,
    loginInfo?: UserDetails.LoginInfo.AsObject,
    billingId: string,
    trustsList: Array<api_commons_org_trusts_pb.Trust.AsObject>,
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

  export class LoginInfo extends jspb.Message {
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

    getHasBlockedIps(): boolean;
    setHasBlockedIps(value: boolean): void;

    getEmailVerified(): boolean;
    setEmailVerified(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginInfo.AsObject;
    static toObject(includeInstance: boolean, msg: LoginInfo): LoginInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginInfo;
    static deserializeBinaryFromReader(message: LoginInfo, reader: jspb.BinaryReader): LoginInfo;
  }

  export namespace LoginInfo {
    export type AsObject = {
      lastIp: string,
      lastLogin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      lastPasswordReset?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      loginsCount: number,
      hasBlockedIps: boolean,
      emailVerified: boolean,
    }
  }
}

