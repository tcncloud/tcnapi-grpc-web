// package: api.commons.auth
// file: api/commons/auth/user.proto

import * as jspb from "google-protobuf";

export class AuthClaims extends jspb.Message {
  getAuth0UserId(): string;
  setAuth0UserId(value: string): void;

  getOrgUserId(): string;
  setOrgUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  getApiKey(): string;
  setApiKey(value: string): void;

  getRegionId(): string;
  setRegionId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getImpersonate(): string;
  setImpersonate(value: string): void;

  getClientSid(): number;
  setClientSid(value: number): void;

  getAgentSid(): number;
  setAgentSid(value: number): void;

  getLoginSid(): number;
  setLoginSid(value: number): void;

  getActiveOrgId(): string;
  setActiveOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthClaims.AsObject;
  static toObject(includeInstance: boolean, msg: AuthClaims): AuthClaims.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthClaims, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthClaims;
  static deserializeBinaryFromReader(message: AuthClaims, reader: jspb.BinaryReader): AuthClaims;
}

export namespace AuthClaims {
  export type AsObject = {
    auth0UserId: string,
    orgUserId: string,
    orgId: string,
    apiKey: string,
    regionId: string,
    name: string,
    impersonate: string,
    clientSid: number,
    agentSid: number,
    loginSid: number,
    activeOrgId: string,
  }
}

export class AuthenticatedUser extends jspb.Message {
  hasClaims(): boolean;
  clearClaims(): void;
  getClaims(): AuthClaims | undefined;
  setClaims(value?: AuthClaims): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticatedUser.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticatedUser): AuthenticatedUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticatedUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticatedUser;
  static deserializeBinaryFromReader(message: AuthenticatedUser, reader: jspb.BinaryReader): AuthenticatedUser;
}

export namespace AuthenticatedUser {
  export type AsObject = {
    claims?: AuthClaims.AsObject,
  }
}

