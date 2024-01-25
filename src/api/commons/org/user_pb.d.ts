// package: api.commons.org
// file: api/commons/org/user.proto

import * as jspb from "google-protobuf";
import * as api_commons_org_pb from "../../../api/commons/org_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class User extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getP3PermissionGroupId(): string;
  setP3PermissionGroupId(value: string): void;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  getPartnerAgentId(): string;
  setPartnerAgentId(value: string): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getRegionSidMapMap(): jspb.Map<string, User.RegionSids>;
  clearRegionSidMapMap(): void;
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

  getDefaultRegion(): string;
  setDefaultRegion(value: string): void;

  getDefaultApplication(): api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap];
  setDefaultApplication(value: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap]): void;

  getUserCallerId(): string;
  setUserCallerId(value: string): void;

  getAgentProfileGroupId(): string;
  setAgentProfileGroupId(value: string): void;

  clearSkillsList(): void;
  getSkillsList(): Array<Skill>;
  setSkillsList(value: Array<Skill>): void;
  addSkills(value?: Skill, index?: number): Skill;

  getAgent(): boolean;
  setAgent(value: boolean): void;

  getAccountOwner(): boolean;
  setAccountOwner(value: boolean): void;

  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): void;

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
    loginSid: number,
    agentSid: number,
    regionId: string,
    partnerAgentId: string,
    clientSid: number,
    regionSidMapMap: Array<[string, User.RegionSids.AsObject]>,
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
    defaultRegion: string,
    defaultApplication: api_commons_org_pb.OperatorApplicationsMap[keyof api_commons_org_pb.OperatorApplicationsMap],
    userCallerId: string,
    agentProfileGroupId: string,
    skillsList: Array<Skill.AsObject>,
    agent: boolean,
    accountOwner: boolean,
    emailVerified: boolean,
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

export class MfaInfo extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getMfaEnabled(): boolean;
  setMfaEnabled(value: boolean): void;

  hasNone(): boolean;
  clearNone(): void;
  getNone(): MfaInfo.NoneSelected | undefined;
  setNone(value?: MfaInfo.NoneSelected): void;

  hasOtp(): boolean;
  clearOtp(): void;
  getOtp(): MfaInfo.OtpType | undefined;
  setOtp(value?: MfaInfo.OtpType): void;

  getMfaTypeCase(): MfaInfo.MfaTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MfaInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MfaInfo): MfaInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MfaInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MfaInfo;
  static deserializeBinaryFromReader(message: MfaInfo, reader: jspb.BinaryReader): MfaInfo;
}

export namespace MfaInfo {
  export type AsObject = {
    userId: string,
    mfaEnabled: boolean,
    none?: MfaInfo.NoneSelected.AsObject,
    otp?: MfaInfo.OtpType.AsObject,
  }

  export class NoneSelected extends jspb.Message {
    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimeout(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoneSelected.AsObject;
    static toObject(includeInstance: boolean, msg: NoneSelected): NoneSelected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoneSelected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoneSelected;
    static deserializeBinaryFromReader(message: NoneSelected, reader: jspb.BinaryReader): NoneSelected;
  }

  export namespace NoneSelected {
    export type AsObject = {
      timeout?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class OtpType extends jspb.Message {
    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): MfaInfo.OtpType.EmailDeliveryMethod | undefined;
    setEmail(value?: MfaInfo.OtpType.EmailDeliveryMethod): void;

    getDeliveryMethodCase(): OtpType.DeliveryMethodCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OtpType.AsObject;
    static toObject(includeInstance: boolean, msg: OtpType): OtpType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OtpType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OtpType;
    static deserializeBinaryFromReader(message: OtpType, reader: jspb.BinaryReader): OtpType;
  }

  export namespace OtpType {
    export type AsObject = {
      email?: MfaInfo.OtpType.EmailDeliveryMethod.AsObject,
    }

    export class EmailDeliveryMethod extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EmailDeliveryMethod.AsObject;
      static toObject(includeInstance: boolean, msg: EmailDeliveryMethod): EmailDeliveryMethod.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EmailDeliveryMethod, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EmailDeliveryMethod;
      static deserializeBinaryFromReader(message: EmailDeliveryMethod, reader: jspb.BinaryReader): EmailDeliveryMethod;
    }

    export namespace EmailDeliveryMethod {
      export type AsObject = {
      }
    }

    export enum DeliveryMethodCase {
      DELIVERY_METHOD_NOT_SET = 0,
      EMAIL = 1,
    }
  }

  export enum MfaTypeCase {
    MFA_TYPE_NOT_SET = 0,
    NONE = 3,
    OTP = 4,
  }
}

export class Skill extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSkillSid(): number;
  setSkillSid(value: number): void;

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
    level: number,
    name: string,
    description: string,
    skillSid: number,
  }
}

export class PasswordResetLink extends jspb.Message {
  getLinkId(): string;
  setLinkId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordResetLink.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordResetLink): PasswordResetLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PasswordResetLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordResetLink;
  static deserializeBinaryFromReader(message: PasswordResetLink, reader: jspb.BinaryReader): PasswordResetLink;
}

export namespace PasswordResetLink {
  export type AsObject = {
    linkId: string,
    userId: string,
    orgId: string,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

