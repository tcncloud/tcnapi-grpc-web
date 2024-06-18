// package: api.commons.org
// file: api/commons/org/auth_token.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AuthToken extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthToken.AsObject;
  static toObject(includeInstance: boolean, msg: AuthToken): AuthToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthToken;
  static deserializeBinaryFromReader(message: AuthToken, reader: jspb.BinaryReader): AuthToken;
}

export namespace AuthToken {
  export type AsObject = {
    token: string,
    userId: string,
    orgId: string,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AuthTokenExpiration extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthTokenExpiration.AsObject;
  static toObject(includeInstance: boolean, msg: AuthTokenExpiration): AuthTokenExpiration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthTokenExpiration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthTokenExpiration;
  static deserializeBinaryFromReader(message: AuthTokenExpiration, reader: jspb.BinaryReader): AuthTokenExpiration;
}

export namespace AuthTokenExpiration {
  export type AsObject = {
    token: string,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

